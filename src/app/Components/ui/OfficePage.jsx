"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { syne, typewriter, handwriting } from "@/app/lib/fonts";

// Shared layout for the 404 and error pages: a manila case file with a stamp,
// typed explanation, actions and a handwritten note. Matches the site theme.
const MANILA_BACK = "#cdbb93";
const MANILA = "#e6d7b2";
const PAPER = "#f7f5f0";
const INK = "#1d1b17";
const STAMP = "#a3241b";
const NOTE = "#fbeea0";

export function OfficeButton({ href, onClick, children, primary = false }) {
  const cls = `${typewriter.className} inline-flex items-center gap-2 px-4 py-2.5 rounded border-2 text-[11px] font-bold tracking-[0.2em] transition-colors cursor-pointer ${
    primary ? "bg-[#1d1b17] text-[#f7f5f0] hover:bg-transparent hover:text-[#1d1b17]" : "hover:bg-[#1d1b17] hover:text-[#f7f5f0]"
  }`;
  return href ? (
    <Link href={href} className={cls} style={{ borderColor: INK }}>{children}</Link>
  ) : (
    <button type="button" onClick={onClick} className={cls} style={{ borderColor: INK }}>{children}</button>
  );
}

export default function OfficePage({ code, tab, stamp, title, children, actions, note, reference }) {
  return (
    <main className={`${syne.className} min-h-screen bg-[var(--primary)] flex items-center justify-center px-4 pt-28 pb-16`} style={{ color: INK }}>
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="relative w-full max-w-xl pt-8"
      >
        {/* Folder tab */}
        <div className={`${typewriter.className} absolute top-0 left-6 h-9 px-4 rounded-t-lg flex items-center text-[11px] font-bold tracking-[0.2em]`} style={{ background: MANILA_BACK }}>
          {tab}
        </div>

        {/* Folder */}
        <div className="rounded-xl p-3 shadow-2xl" style={{ background: MANILA_BACK }}>
          <div className="relative rounded-lg px-6 sm:px-10 pt-10 pb-8" style={{ background: MANILA }}>
            {/* Stamp */}
            <motion.span
              initial={{ opacity: 0, scale: 2.2, rotate: -30 }}
              animate={{ opacity: 0.85, scale: 1, rotate: -12 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 500, damping: 18 }}
              className={`${typewriter.className} absolute top-6 right-5 sm:right-8 px-3 py-1 border-[3px] rounded text-sm sm:text-base font-bold tracking-[0.2em] mix-blend-multiply`}
              style={{ color: STAMP, borderColor: STAMP }}
            >
              {stamp}
            </motion.span>

            <div className={`${typewriter.className} text-[11px] tracking-[0.3em] opacity-60`}>CASE FILE No.{code}</div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mt-3 pr-28 sm:pr-36">{title}</h1>

            {/* Typed note on paper */}
            <div className="mt-6 p-5 shadow-md text-[15px] leading-relaxed" style={{ background: PAPER, rotate: "0.6deg" }}>
              {children}
              {reference && (
                <p className={`${typewriter.className} mt-3 text-[10px] tracking-widest opacity-50`}>REF. {reference}</p>
              )}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">{actions}</div>
          </div>
        </div>

        {note && (
          <div
            className={`${handwriting.className} absolute -bottom-10 right-2 sm:-right-8 w-44 p-3 pt-4 text-xl leading-tight shadow-md`}
            style={{ background: NOTE, rotate: "4deg" }}
          >
            {note}
          </div>
        )}
      </motion.div>
    </main>
  );
}
