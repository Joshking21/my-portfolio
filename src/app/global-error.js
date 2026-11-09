"use client";

// Last-resort fallback when the root layout itself fails. It replaces the
// whole document, so it can't rely on the site's fonts or CSS: inline styles only.
export default function GlobalError({ reset }) {
  const ink = "#1d1b17";
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", background: "rgb(235,229,229)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", color: ink, padding: 16 }}>
        <div style={{ background: "#cdbb93", borderRadius: 12, padding: 12, maxWidth: 520, width: "100%", boxShadow: "0 20px 45px rgba(0,0,0,0.3)", transform: "rotate(-1deg)" }}>
          <div style={{ background: "#e6d7b2", borderRadius: 8, padding: "32px 28px", position: "relative" }}>
            <span style={{ position: "absolute", top: 20, right: 20, color: "#a3241b", border: "3px solid #a3241b", borderRadius: 4, padding: "2px 10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: 3, transform: "rotate(-12deg)" }}>
              JAMMED
            </span>
            <div style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 4, opacity: 0.6 }}>CASE FILE No.500</div>
            <h1 style={{ fontSize: 40, lineHeight: 1, margin: "12px 0 0", fontWeight: 900 }}>Something jammed</h1>
            <p style={{ background: "#f7f5f0", padding: 18, marginTop: 22, lineHeight: 1.6 }}>
              The site hit a problem it couldn&apos;t recover from. Please try again in a moment.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
              <button onClick={() => reset()} style={{ fontFamily: "monospace", fontWeight: 700, letterSpacing: 3, fontSize: 11, padding: "10px 16px", background: ink, color: "#f7f5f0", border: `2px solid ${ink}`, borderRadius: 4, cursor: "pointer" }}>
                TRY AGAIN
              </button>
              <a href="/" style={{ fontFamily: "monospace", fontWeight: 700, letterSpacing: 3, fontSize: 11, padding: "10px 16px", color: ink, border: `2px solid ${ink}`, borderRadius: 4, textDecoration: "none" }}>
                HOMEPAGE
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
