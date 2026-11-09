"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { typewriter as mono } from "@/app/lib/fonts";

// "Built with" pill on a project card. Hover (mouse) or tap (touch) and a
// little office-printer receipt feeds out listing the stack — black ink on
// off-white paper, typewriter text, torn bottom edge.
const NAMES = {
  "/nextJs.png": "NEXT.JS",
  "/react.png": "REACT NATIVE",
  "/typeScript.png": "TYPESCRIPT",
  "/nodeJs.png": "NODE.JS",
  "/tailWind.png": "TAILWIND",
  "/mongoDb.png": "MONGODB",
  "/html5.png": "HTML5",
  "/css3.png": "CSS3",
  "/js.png": "JAVASCRIPT",
  "/php.png": "PHP",
  "/sass.png": "SASS",
  "/stack/react.png": "REACT", // web React (vs /react.png = React Native)
  "/stack/framer.svg": "FRAMER MOTION",
  "/stack/vite.svg": "VITE",
  "/stack/supabase.svg": "SUPABASE",
  "/stack/postgresql.svg": "POSTGRESQL",
  "/stack/redis.svg": "REDIS",
  "/stack/threejs.svg": "THREE.JS",
};

const PAPER = "#f7f5f0";

// Fake barcode bar widths (fixed so server & client render the same)
const BARS = [2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 2, 1, 2];

// `position`: where the pill sits (default: pinned top-right of a card).
// The receipt always prints out below the pill, over whatever is underneath.
export default function StackReceipt({ icons = [], projectName = "", className = "", position = "absolute top-3 right-3", align = "right" }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  if (!icons.length) return null;
  const names = icons.map((src) => NAMES[src]).filter(Boolean);
  const job = projectName.replace(/\s*\(.*\)\s*/, "").toUpperCase();

  const handleClick = (e) => {
    e.stopPropagation(); // don't open the project modal
    clearTimeout(timer.current);
    setOpen((o) => !o);
    timer.current = setTimeout(() => setOpen(false), 3500);
  };

  return (
    <div className={`${position} z-30 flex flex-col items-end ${className}`}>
      {/* The pill doubles as the printer's paper slot */}
      <button
        type="button"
        onClick={handleClick}
        onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
        aria-label={`Built with ${names.join(", ")}`}
        aria-expanded={open}
        className="relative z-10 flex items-center gap-1.5 bg-[var(--primary)]/90 backdrop-blur-sm px-2 py-1.5 rounded-full shadow-md cursor-pointer transition-transform duration-200 hover:scale-105"
      >
        {icons.map((src) => (
          <span key={src} className="relative block w-4 h-4 sm:w-[18px] sm:h-[18px]">
            <Image src={src} alt="" fill sizes="18px" className="object-contain" />
          </span>
        ))}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            aria-hidden="true"
            className={`${mono.className} absolute top-full ${align === "left" ? "left-2" : "right-2"} -mt-1 w-[180px] sm:w-[196px] pointer-events-none`}
            style={{ rotate: -1.5, filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.35))" }}
            // "Printing": paper feeds out top-down in small jerky steps
            initial={{ clipPath: "inset(0 0 100% 0)", y: -6 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.7, ease: [0.5, 0, 0.3, 1] }}
          >
            <div className="px-3.5 pt-3 pb-2 text-black text-[10px] sm:text-[11px] leading-[1.55]" style={{ background: PAPER }}>
              <div className="text-center font-bold tracking-[0.2em] text-[11px] sm:text-xs">BUILD RECEIPT</div>
              {job && <div className="text-center text-black/55 text-[9px] tracking-widest truncate">JOB: {job}</div>}
              <div className="border-t border-dashed border-black/50 my-1.5" />

              {names.map((name, k) => (
                <motion.div
                  key={name}
                  className="flex items-baseline gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + k * 0.09, duration: 0.05 }}
                >
                  <span className="shrink-0">{name}</span>
                  <span className="flex-1 border-b border-dotted border-black/40 translate-y-[-3px]" />
                  <span className="shrink-0 font-bold">✓</span>
                </motion.div>
              ))}

              <div className="border-t border-dashed border-black/50 my-1.5" />
              <div className="flex justify-between font-bold">
                <span>STATUS</span>
                <span>SHIPPED</span>
              </div>

              {/* Barcode */}
              <div className="flex items-end justify-center gap-[1.5px] h-6 mt-2">
                {BARS.map((w, i) => (
                  <span key={i} className="bg-black h-full" style={{ width: w }} />
                ))}
              </div>
            </div>

            {/* Torn zig-zag bottom edge */}
            <svg viewBox="0 0 100 4" preserveAspectRatio="none" className="block w-full h-2">
              <polygon
                fill={PAPER}
                points={
                  "0,0 " +
                  Array.from({ length: 20 }, (_, i) => `${i * 5 + 2.5},4 ${(i + 1) * 5},0`).join(" ")
                }
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
