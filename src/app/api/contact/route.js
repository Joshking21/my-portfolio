// POST /api/contact: emails a contact-form message to you via Resend.
// Runs on the server only. All settings come from environment variables,
// so nothing secret is ever in the code or sent to the browser.
//
// Local:   my-portfolio/.env.local   (git-ignored)
// Netlify: Site configuration → Environment variables (same names; see .env.example)
//   RESEND_API_KEY      required  your Resend API key
//   CONTACT_TO_EMAIL    required  where messages are delivered (your Resend sign-up email)
//   CONTACT_FROM_EMAIL  optional  sender shown in the email
//
// Without your own domain, Resend only delivers to the email you signed up with.

const FROM = process.env.CONTACT_FROM_EMAIL || "JayBobo Portfolio <onboarding@resend.dev>";

// Very small in-memory rate limit: 5 messages per IP per 10 minutes
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 200);
  const phone = String(body.phone || "").trim().slice(0, 40);
  const message = String(body.message || "").trim().slice(0, 5000);

  // Honeypot: real people never fill this hidden field; bots do
  if (body.company) return Response.json({ ok: true });

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please add your name, a valid email and a message." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  const key = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO_EMAIL;
  if (!key || !TO) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set; message not sent.");
    return Response.json({ ok: false, error: "The contact form isn't connected yet." }, { status: 503 });
  }

  const text = `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1d1b17;line-height:1.5">
      <p style="font-family:monospace;letter-spacing:2px;font-size:12px;color:#777">NEW MESSAGE FROM YOUR PORTFOLIO</p>
      <p><b>Name:</b> ${escapeHtml(name)}<br/><b>Email:</b> ${escapeHtml(email)}<br/><b>Phone:</b> ${escapeHtml(phone || "-")}</p>
      <p style="white-space:pre-wrap;border-left:3px solid #1d1b17;padding-left:12px">${escapeHtml(message)}</p>
      <p style="color:#777;font-size:12px">Just hit Reply to answer ${escapeHtml(name)} directly.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error:", res.status, await res.text());
      return Response.json({ ok: false, error: "Couldn't send right now." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return Response.json({ ok: false, error: "Couldn't send right now." }, { status: 502 });
  }
}
