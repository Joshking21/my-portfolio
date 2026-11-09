"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { QUOTE_EVENT } from "../Components/aboutMeSection/QuoteSheet";
import { ContactDetails } from "../lib/userData";
import { typewriter, handwriting } from "../lib/fonts";

// The contact form as a letter: fill-in-the-blank sentences on ruled paper.
// On send it folds into an envelope that gets a red "SENT" postmark.
const PAPER = "#f7f5f0";
const INK = "#1d1b17";
const STAMP = "#a3241b";
const EMPTY = { name: "", email: "", phone: "", message: "" };

// Ruled-paper background
const ruled = {
  backgroundColor: PAPER,
  backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, rgba(29,27,23,0.09) 35px, rgba(29,27,23,0.09) 36px)",
};

function Blank({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`${handwriting.className} inline-block align-baseline mx-1 px-1 bg-transparent border-b-2 border-dotted text-2xl leading-none outline-none placeholder:text-black/30 focus:border-solid focus:bg-black/[0.04] ${className}`}
      style={{ borderColor: INK, color: INK }}
    />
  );
}

// ----- Sent state: envelope + postmark -----
function Envelope({ name, onReset }) {
  const reduce = useReducedMotion();
  const date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();

  return (
    <motion.div
      key="envelope"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[520px] py-10"
    >
      {/* A folded letter drops into the envelope */}
      <div className="relative w-[300px] sm:w-[360px] h-[200px] sm:h-[230px]" style={{ perspective: 900 }}>
        <motion.div
          className="absolute left-6 right-6 h-[80%] shadow"
          style={{ ...ruled, top: 0 }}
          initial={reduce ? { y: 30, opacity: 0 } : { y: -160, opacity: 1 }}
          animate={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
        />

        {/* Envelope body */}
        <div className="absolute inset-0 shadow-[0_14px_30px_rgba(0,0,0,0.25)]" style={{ background: "#efe6d2" }}>
          {/* Lower folds */}
          <div className="absolute inset-0" style={{ background: "#e6dbc2", clipPath: "polygon(0 100%, 50% 45%, 100% 100%)" }} />
          <div className="absolute inset-0" style={{ background: "#ebe1ca", clipPath: "polygon(0 0, 50% 55%, 0 100%)" }} />
          <div className="absolute inset-0" style={{ background: "#ebe1ca", clipPath: "polygon(100% 0, 50% 55%, 100% 100%)" }} />

          {/* Address */}
          <div className={`${typewriter.className} absolute left-5 bottom-4 text-[10px] tracking-widest leading-relaxed`} style={{ color: INK }}>
            <div className="opacity-60">TO:</div>
            <div className="font-bold">JAYBOBO</div>
            <div className="opacity-70">{ContactDetails.email}</div>
          </div>
        </div>

        {/* Flap closes */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[58%] origin-top z-10"
          style={{ background: "#e3d6ba", clipPath: "polygon(0 0, 100% 0, 50% 100%)", backfaceVisibility: "hidden" }}
          initial={reduce ? { rotateX: 0 } : { rotateX: 180 }}
          animate={{ rotateX: 0 }}
          transition={{ delay: 0.65, duration: 0.45, ease: "easeOut" }}
        />

        {/* Postmark slams on */}
        <motion.div
          className="absolute -top-6 -right-5 z-20"
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 2.4, rotate: -30 }}
          animate={{ opacity: 0.9, scale: 1, rotate: -14 }}
          transition={{ delay: 1.15, type: "spring", stiffness: 500, damping: 18 }}
        >
          <div className={`${typewriter.className} w-24 h-24 rounded-full border-[3px] flex flex-col items-center justify-center text-center leading-tight`} style={{ color: STAMP, borderColor: STAMP }}>
            <span className="text-xl font-bold tracking-[0.15em]">SENT</span>
            <span className="text-[8px] tracking-widest border-t-2 mt-1 pt-1" style={{ borderColor: STAMP }}>{date}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-10"
      >
        <p className={`${handwriting.className} text-3xl`} style={{ color: INK }}>
          Got it{name ? `, ${name.split(" ")[0]}` : ""}! I&apos;ll reply {ContactDetails.replyTime}.
        </p>
        <button
          type="button"
          onClick={onReset}
          className={`${typewriter.className} mt-4 text-[11px] font-bold tracking-[0.2em] border-b-2 pb-0.5 cursor-pointer hover:opacity-70`}
          style={{ borderColor: INK, color: INK }}
        >
          WRITE ANOTHER LETTER
        </button>
      </motion.div>
    </motion.div>
  );
}

// ----- The letter -----
export default function Letter() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const [sentName, setSentName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const nameRef = useRef(null);

  // "Request a quote" on the services sheet writes the letter body
  useEffect(() => {
    const onQuote = (e) => {
      setStatus((s) => (s === "sent" ? "idle" : s));
      setForm((prev) => ({ ...prev, message: e.detail?.message || prev.message }));
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 700);
    };
    window.addEventListener(QUOTE_EVENT, onQuote);
    return () => window.removeEventListener(QUOTE_EVENT, onQuote);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company: honeypot }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Couldn't send right now.");
      setSentName(form.name);
      setForm(EMPTY);
      setStatus("sent");
    } catch (err) {
      setStatus("error"); // keep what they wrote
      setErrorMsg(err.message);
    }
  };

  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <Envelope name={sentName} onReset={() => setStatus("idle")} />
        ) : (
          <motion.form
            key="letter"
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, rotate: -0.5 }}
            exit={{ opacity: 0, scaleY: 0.3, y: 60, transition: { duration: 0.35, ease: "easeIn" } }}
            className="relative w-full shadow-2xl px-6 sm:px-12 pt-10 pb-8 origin-top"
            style={{ ...ruled, color: INK }}
            aria-label="Write me a letter"
          >
            {/* Red margin line */}
            <span className="absolute top-0 bottom-0 left-4 sm:left-8 w-px bg-red-400/50" aria-hidden="true" />

            {/* Honeypot (hidden from people) */}
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] w-px h-px opacity-0"
            />

            <div className={`${typewriter.className} text-right text-[11px] tracking-[0.2em] opacity-60`} suppressHydrationWarning>
              {today.toUpperCase()}
            </div>

            <p className={`${handwriting.className} text-3xl mt-4`}>Dear JayBobo,</p>

            <div className="mt-4 text-[17px] leading-[2.6rem]">
              My name is
              <Blank ref={nameRef} name="name" value={form.name} onChange={set("name")} required placeholder="your name" aria-label="Your name" className="w-[11ch] sm:w-[14ch]" />
              and you can reach me at
              <Blank type="email" name="email" value={form.email} onChange={set("email")} required placeholder="you@email.com" aria-label="Your email" className="w-[16ch] sm:w-[19ch]" />
              <span className="whitespace-nowrap">
                (or call
                <Blank type="tel" name="phone" value={form.phone} onChange={set("phone")} placeholder="optional" aria-label="Your phone number (optional)" className="w-[14ch]" />
                ).
              </span>
            </div>

            <p className="mt-2 text-[17px]">Here&apos;s what I have in mind:</p>
            <textarea
              name="message"
              value={form.message}
              onChange={set("message")}
              required
              rows={5}
              aria-label="Your message"
              placeholder="Tell me about your project, your idea or your problem…"
              className={`${handwriting.className} mt-1 w-full bg-transparent text-2xl leading-9 outline-none resize-none placeholder:text-black/30`}
              style={{ color: INK }}
            />

            <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="text-[17px]">Yours sincerely,</p>
                <p className={`${handwriting.className} text-3xl min-h-[2.5rem] mt-1`}>{form.name || " "}</p>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${typewriter.className} self-start sm:self-auto flex items-center gap-2 px-5 py-3 rounded border-2 bg-[#1d1b17] text-[#f7f5f0] text-xs font-bold tracking-[0.2em] hover:bg-transparent hover:text-[#1d1b17] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait`}
                style={{ borderColor: INK }}
              >
                {status === "sending" ? "SEALING…" : "SEAL & SEND"} <Send size={14} />
              </button>
            </div>

            <div aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm font-semibold">
              {status === "error" && (
                <p className="text-red-700">
                  {errorMsg} Your letter is still here. You can also email me at{" "}
                  <a href={`mailto:${ContactDetails.email}`} className="underline">{ContactDetails.email}</a>.
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
