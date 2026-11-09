"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Services } from "@/app/lib/userData";
import { typewriter, handwriting } from "@/app/lib/fonts";

// Services as an office quote-request form. Visitors tick what they need;
// "Request a quote" jumps to the contact form and pre-fills the message.
const PAPER = "#f7f5f0";
const INK = "#1d1b17";

// Fired on window; the contact form listens for it and fills its message box
export const QUOTE_EVENT = "quote-request";

function Checkbox({ checked }) {
  return (
    <span className="relative inline-flex w-6 h-6 shrink-0 border-2 rounded-sm" style={{ borderColor: INK }} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="absolute -inset-1 w-8 h-8 overflow-visible">
        <motion.path
          d="M4 13 L10 19 L22 3"
          fill="none"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </svg>
    </span>
  );
}

export default function QuoteSheet() {
  const [picked, setPicked] = useState([]);
  const [otherOn, setOtherOn] = useState(false);
  const [otherText, setOtherText] = useState("");
  const toggle = (title) => setPicked((p) => (p.includes(title) ? p.filter((t) => t !== title) : [...p, title]));
  const count = picked.length + (otherOn && otherText.trim() ? 1 : 0);

  const requestQuote = () => {
    const list = [...picked];
    if (otherOn && otherText.trim()) list.push(`something else (${otherText.trim()})`);
    const message = list.length
      ? `Hi JayBobo, I'd like a quote for: ${list.join(", ")}.\n\nA bit about my project: `
      : "Hi JayBobo, I'd like a quote for a project.\n\nA bit about my project: ";
    window.dispatchEvent(new CustomEvent(QUOTE_EVENT, { detail: { message } }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, rotate: -0.4 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-4xl mx-auto shadow-2xl"
      style={{ background: PAPER, color: INK }}
      aria-labelledby="services-title"
    >
      <div className="px-6 sm:px-10 py-8 sm:py-10">
        <div className={`${typewriter.className} flex items-start justify-between gap-4 border-b-2 pb-3`} style={{ borderColor: INK }}>
          <div>
            <h2 id="services-title" className="text-lg sm:text-2xl font-bold tracking-[0.15em]">SERVICES OFFERED</h2>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] opacity-60 mt-1">TICK WHAT YOU NEED, THEN REQUEST A QUOTE</p>
          </div>
          <span className="text-[10px] tracking-[0.25em] opacity-60 shrink-0 pt-1">FORM JB-02</span>
        </div>

        <ul className="mt-2">
          {Services.map((s, i) => {
            const on = picked.includes(s.title);
            return (
              <li key={s.title} className="border-b border-dashed" style={{ borderColor: `${INK}40` }}>
                <button
                  type="button"
                  onClick={() => toggle(s.title)}
                  aria-pressed={on}
                  className={`w-full text-left grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr_auto] items-start gap-x-4 gap-y-1 py-5 px-2 -mx-2 rounded transition-colors cursor-pointer ${on ? "bg-black/[0.05]" : "hover:bg-black/[0.03]"}`}
                >
                  <Checkbox checked={on} />
                  <span className={`${typewriter.className} hidden sm:block text-[11px] font-bold opacity-50 pt-1`}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-lg sm:text-xl font-black leading-tight">{s.title}</span>
                    <span className="block text-sm leading-relaxed opacity-80 mt-1">{s.desc}</span>
                  </span>
                  <span className={`${typewriter.className} col-start-2 sm:col-start-auto text-[10px] tracking-wider opacity-60 sm:text-right sm:max-w-[170px] pt-1`}>
                    {s.proof.length ? <>SEE: {s.proof.join(", ").toUpperCase()}</> : "FOR EVERY CLIENT"}
                  </span>
                </button>
              </li>
            );
          })}

          {/* Something else: visitors describe what they need */}
          <li className="border-b border-dashed" style={{ borderColor: `${INK}40` }}>
            <div className={`grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] items-start gap-x-4 gap-y-2 py-5 px-2 -mx-2 rounded transition-colors ${otherOn ? "bg-black/[0.05]" : ""}`}>
              <button
                type="button"
                onClick={() => setOtherOn((o) => !o)}
                aria-pressed={otherOn}
                aria-label="Something else"
                className="cursor-pointer"
              >
                <Checkbox checked={otherOn} />
              </button>
              <span className={`${typewriter.className} hidden sm:block text-[11px] font-bold opacity-50 pt-1`}>
                {String(Services.length + 1).padStart(2, "0")}
              </span>
              <div>
                <label htmlFor="quote-other" className="block text-lg sm:text-xl font-black leading-tight cursor-pointer" onClick={() => setOtherOn(true)}>
                  Something else
                </label>
                <input
                  id="quote-other"
                  type="text"
                  value={otherText}
                  onChange={(e) => {
                    setOtherText(e.target.value);
                    setOtherOn(e.target.value.trim().length > 0 || otherOn);
                  }}
                  maxLength={200}
                  placeholder="Tell me what you need, e.g. an e-commerce store, a booking system…"
                  className={`${handwriting.className} mt-2 w-full bg-transparent border-b-2 border-dotted text-xl leading-snug py-1 outline-none placeholder:text-black/35 focus:border-solid`}
                  style={{ borderColor: INK }}
                />
              </div>
            </div>
          </li>
        </ul>

        <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className={`${handwriting.className} text-2xl opacity-80`}>
            {count ? `${count} ticked, nice.` : "No prices here. Every project's different."}
          </span>
          <button
            type="button"
            onClick={requestQuote}
            className={`${typewriter.className} flex items-center gap-2 px-5 py-3 rounded border-2 bg-[#1d1b17] text-[#f7f5f0] text-xs font-bold tracking-[0.2em] hover:bg-transparent hover:text-[#1d1b17] transition-colors cursor-pointer`}
            style={{ borderColor: INK }}
          >
            REQUEST A QUOTE <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
