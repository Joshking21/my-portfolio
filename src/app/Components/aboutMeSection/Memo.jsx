"use client";
import { motion } from "framer-motion";
import { AboutMemo } from "@/app/lib/userData";
import { typewriter, handwriting } from "@/app/lib/fonts";

// The bio as a typed office memo, signed, with handwritten sticky notes.
const PAPER = "#f7f5f0";
const INK = "#1d1b17";
const NOTE = "#fbeea0";

function Sticky({ children, className = "", rotate = 3 }) {
  return (
    <div
      className={`${handwriting.className} w-44 p-3 pt-4 text-xl leading-tight shadow-md ${className}`}
      style={{ background: NOTE, color: INK, rotate: `${rotate}deg` }}
    >
      {children}
    </div>
  );
}

export default function Memo() {
  const m = AboutMemo;
  const date = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" }).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative w-full shadow-2xl"
      style={{ background: PAPER, color: INK }}
      aria-labelledby="memo-title"
    >
      {/* Desktop: notes stuck on the edges */}
      <Sticky className="hidden md:block absolute -top-6 -right-2 xl:-right-6 z-10" rotate={4}>{m.notes[0]}</Sticky>
      <Sticky className="hidden md:block absolute -bottom-8 -left-2 xl:-left-8 z-10" rotate={-4}>{m.notes[1]}</Sticky>

      <div className="px-6 sm:px-10 py-8 sm:py-10">
        <div className={`${typewriter.className} flex items-start justify-between gap-4`}>
          <h2 id="memo-title" className="text-3xl sm:text-4xl font-bold tracking-[0.3em]">MEMO</h2>
          <span className="text-[10px] tracking-[0.25em] opacity-60 pt-2 md:pr-36">REF. JB-01</span>
        </div>

        <dl className={`${typewriter.className} grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 text-[11px] sm:text-xs mt-5 border-y-2 py-3`} style={{ borderColor: INK }}>
          {[
            ["TO", m.to],
            ["FROM", m.from],
            ["DATE", date],
            ["RE", m.re],
          ].map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="opacity-55 tracking-widest">{k}:</dt>
              <dd className="font-bold uppercase" suppressHydrationWarning>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed">
          {m.paragraphs.map((p, i) => (
            <p key={i} className="opacity-90">{p}</p>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          {/* Phones: notes inline */}
          <div className="flex md:hidden flex-wrap gap-3">
            {m.notes.map((n, i) => (
              <Sticky key={n} className="w-36 text-lg" rotate={i % 2 ? -3 : 3}>{n}</Sticky>
            ))}
          </div>
          <div className="ml-auto text-right shrink-0">
            <div className={`${handwriting.className} text-4xl leading-none`}>JayBobo</div>
            <div className={`${typewriter.className} text-[10px] tracking-[0.25em] opacity-60 mt-1 border-t pt-1`} style={{ borderColor: INK }}>
              SIGNED
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
