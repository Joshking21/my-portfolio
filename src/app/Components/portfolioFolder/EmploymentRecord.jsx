"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { typewriter, handwriting } from "@/app/lib/fonts";

// Work history as a typed office form: punched-hole paper, dated entries,
// a red "CURRENT" stamp on ongoing roles, signed at the bottom.
const PAPER = "#f7f5f0";
const INK = "#1d1b17";
const STAMP = "#a3241b";

function splitTitle(name) {
  // "Frontend Engineer - BunchBay Ltd" -> ["Frontend Engineer", "BunchBay Ltd"]
  const i = name.indexOf(" - ");
  return i === -1 ? [name, ""] : [name.slice(0, i), name.slice(i + 3)];
}

// Phones show the most recent entries; the rest open with a button.
const PHONE_VISIBLE = 3;

export default function EmploymentRecord({ items = [] }) {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = items.length - PHONE_VISIBLE;
  return (
    <motion.section
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      aria-label="Employment record"
      className="relative w-full max-w-3xl mx-auto shadow-2xl"
      style={{ background: PAPER, color: INK }}
    >
      {/* Punched holes down the left margin */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 flex flex-col justify-around py-10" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
        ))}
      </div>
      {/* Red margin rule */}
      <div className="absolute left-10 sm:left-12 top-0 bottom-0 w-px bg-red-400/50" aria-hidden="true" />

      <div className="pl-14 sm:pl-20 pr-5 sm:pr-10 py-8 sm:py-10">
        {/* Form header */}
        <div className={`${typewriter.className} flex items-start justify-between gap-4 border-b-2 pb-3`} style={{ borderColor: INK }}>
          <div>
            <div className="text-lg sm:text-2xl font-bold tracking-[0.15em]">EMPLOYMENT RECORD</div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] opacity-60 mt-1">NAME: JAYBOBO · FORM JB-01</div>
          </div>
          <div className="text-[10px] tracking-widest opacity-60 text-right shrink-0">
            PAGE 1 / 1
          </div>
        </div>

        {/* Entries */}
        <ol className="mt-2">
          {items.map((item, i) => {
            const [title, org] = splitTitle(item.ExperienceName);
            const current = /present/i.test(item.ExperienceTime);
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + Math.min(i, PHONE_VISIBLE) * 0.1 }}
                className={`relative grid sm:grid-cols-[150px_1fr] gap-x-6 gap-y-1 py-5 border-b border-dashed ${!showAll && i >= PHONE_VISIBLE ? "hidden md:grid" : ""}`}
                style={{ borderColor: `${INK}40` }}
              >
                <div className={`${typewriter.className} text-[11px] tracking-wider opacity-70 pt-0.5`}>
                  {item.ExperienceTime.toUpperCase()}
                </div>
                <div className="pr-0 sm:pr-24">
                  <h3 className="font-black text-base sm:text-lg leading-snug">{title}</h3>
                  {org && <div className="text-sm font-semibold opacity-75">{org}</div>}
                  <div className={`${typewriter.className} text-[10px] tracking-widest opacity-55 mt-0.5`}>
                    {item.ExperiencePlace.toUpperCase()}
                  </div>
                  <p className="text-sm leading-relaxed opacity-80 mt-2">{item.ExperienceDetails}</p>
                </div>

                {current && (
                  <span
                    className={`${typewriter.className} absolute right-0 top-5 px-2 py-0.5 border-[3px] rounded text-xs font-bold tracking-[0.2em] opacity-80 mix-blend-multiply`}
                    style={{ color: STAMP, borderColor: STAMP, rotate: `${i % 2 ? 8 : -9}deg` }}
                  >
                    CURRENT
                  </span>
                )}
              </motion.li>
            );
          })}
        </ol>

        {/* Phones only: show the older entries */}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className={`${typewriter.className} md:hidden mt-4 text-[11px] font-bold tracking-[0.2em] border-b-2 pb-0.5 cursor-pointer`}
            style={{ borderColor: INK }}
          >
            {showAll ? "SHOW LESS ▴" : `SEE FULL RECORD (${hiddenCount} MORE) ▾`}
          </button>
        )}

        {/* Signature */}
        <div className="flex items-end justify-end gap-3 mt-8">
          <span className={`${typewriter.className} text-[10px] tracking-widest opacity-60 pb-1`}>SIGNED</span>
          <div className="border-b min-w-[150px] text-center" style={{ borderColor: INK }}>
            <span className={`${handwriting.className} text-3xl leading-none`}>JayBobo</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
