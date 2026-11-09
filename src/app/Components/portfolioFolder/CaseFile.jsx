"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StackReceipt from "../ui/StackReceipt";
import { typewriter } from "@/app/lib/fonts";

// One project as a manila case file: a typed tab on top, a screenshot sheet
// clipped inside that peeks out (and slides up on hover), and a front flap
// with the name, a plain-English line, role and stack. Live projects get a
// rubber "LIVE" stamp. Clicking anywhere opens the full case study.
const MANILA_BACK = "#cdbb93";
const MANILA_FRONT = "#e6d7b2";
const INK = "#2a2418";
const STAMP = "#a3241b";

// Tabs sit at different spots, like a real drawer of files
const TAB_POS = ["left-5", "left-[26%]", "right-5"];

function Paperclip() {
  return (
    <svg viewBox="0 0 24 60" className="absolute -top-4 left-6 w-4 h-11 z-20 drop-shadow" aria-hidden="true">
      <path
        d="M8 44 V12 a5 5 0 0 1 10 0 V48 a8 8 0 0 1 -16 0 V18"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Shot({ item }) {
  const isApp = item.screenshots && item.screenshots.length > 0;

  if (isApp) {
    // Phone app: three screens fanned out like prints
    const screens = item.screenshots.slice(0, 3);
    return (
      <div className="relative h-full flex items-end justify-center gap-0 pb-1">
        {screens.map((s, i) => (
          <div
            key={s.src}
            className="relative w-[30%] max-w-[92px] aspect-[9/19] rounded-lg overflow-hidden border-2 border-white shadow-lg -mx-2"
            style={{ rotate: `${(i - 1) * 7}deg`, translate: `0 ${i === 1 ? -8 : 4}px`, zIndex: i === 1 ? 2 : 1 }}
          >
            <Image src={s.src} alt="" fill sizes="92px" className="object-cover object-top" />
          </div>
        ))}
      </div>
    );
  }

  // Website: screenshot in a little browser frame
  return (
    <div className="h-full rounded-md overflow-hidden border border-black/15 bg-white shadow-md flex flex-col">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-neutral-100 border-b border-black/10 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-black/25" />
        <span className="w-1.5 h-1.5 rounded-full bg-black/25" />
        <span className="w-1.5 h-1.5 rounded-full bg-black/25" />
      </div>
      <div className="relative flex-1">
        <Image src={item.projectImage} alt="" fill sizes="(max-width: 768px) 90vw, 400px" className="object-cover object-top" />
      </div>
    </div>
  );
}

export default function CaseFile({ item, index, onOpen }) {
  const fileNo = String(index + 1).padStart(3, "0");
  const name = item.projectName.replace(/\s*\(.*\)\s*/, "");
  const isLive = Boolean(item.projectLink);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(item)}
      // hover:z-20 so the receipt / lifted folder sits above the next row
      className="group relative pt-7 cursor-pointer select-none hover:z-20 focus-within:z-20"
      style={{ color: INK }}
    >
      {/* Tab */}
      <div
        className={`${typewriter.className} absolute top-0 ${TAB_POS[index % 3]} h-8 px-4 rounded-t-lg text-[10px] font-bold tracking-[0.18em] flex items-center whitespace-nowrap max-w-[74%]`}
        style={{ background: MANILA_BACK }}
      >
        <span className="truncate">No.{fileNo} · {name.toUpperCase()}</span>
      </div>

      {/* Back of the folder */}
      <div className="absolute inset-x-0 top-7 bottom-0 rounded-xl" style={{ background: MANILA_BACK }} />

      {/* Sheet with the screenshot, clipped in — slides up on hover */}
      <div className="relative mx-4 mt-4 h-[190px] sm:h-[210px] transition-transform duration-500 ease-out group-hover:-translate-y-5 group-hover:-rotate-1">
        <div className="absolute inset-0 bg-[#fbfaf6] rounded-sm shadow-md p-3" style={{ rotate: "1.2deg" }}>
          <Paperclip />
          <Shot item={item} />
        </div>
      </div>

      {/* Front flap */}
      <div
        className="relative -mt-12 rounded-xl px-5 pt-5 pb-5 shadow-[0_-6px_14px_rgba(0,0,0,0.18)]"
        style={{ background: MANILA_FRONT }}
      >
        {/* LIVE rubber stamp */}
        {isLive && (
          <span
            className={`${typewriter.className} absolute top-4 right-5 px-2 py-0.5 border-[3px] rounded text-sm font-bold tracking-[0.2em] opacity-85 mix-blend-multiply`}
            style={{ color: STAMP, borderColor: STAMP, rotate: "-12deg" }}
          >
            LIVE
          </span>
        )}

        <div className={`${typewriter.className} text-[10px] tracking-[0.25em] opacity-60 mb-1`}>
          CASE FILE No.{fileNo}
        </div>
        <h3 className={`text-xl sm:text-2xl font-black leading-tight tracking-tight ${isLive ? "pr-20" : ""}`}>{name}</h3>
        <p className="text-sm leading-relaxed mt-1.5 opacity-85 min-h-[3.75rem]">
          {item.tagline || item.projectDetails}
        </p>

        <div className="border-t border-dashed my-3.5" style={{ borderColor: `${INK}55` }} />

        <dl className={`${typewriter.className} text-[11px] space-y-1.5`}>
          <div className="flex gap-2">
            <dt className="opacity-55 w-12 shrink-0">ROLE</dt>
            <dd className="font-bold">{(item.role || item.projectContribution || "").toUpperCase()}</dd>
          </div>
          <div className="flex gap-2 items-center">
            <dt className="opacity-55 w-12 shrink-0">STACK</dt>
            <dd className="relative h-7 flex-1">
              <StackReceipt
                icons={item.projectLanguagesSource || []}
                projectName={item.projectName}
                position="absolute left-0 top-0"
                align="left"
              />
            </dd>
          </div>
        </dl>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4">
          <span className={`${typewriter.className} text-[11px] font-bold tracking-widest border-b-2 pb-0.5 group-hover:opacity-70 transition-opacity`} style={{ borderColor: INK }}>
            OPEN CASE FILE →
          </span>
          {isLive && (
            <Link
              href={item.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`${typewriter.className} ml-auto text-[11px] font-bold tracking-widest flex items-center gap-1 px-2.5 py-1 rounded border-2 hover:bg-[#2a2418] hover:text-[#e6d7b2] transition-colors`}
              style={{ borderColor: INK }}
            >
              VISIT SITE <ArrowUpRight size={13} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
