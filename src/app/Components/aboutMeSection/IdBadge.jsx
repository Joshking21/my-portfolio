"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { BadgeDetails } from "@/app/lib/userData";
import { typewriter, handwriting } from "@/app/lib/fonts";

// A staff ID card hanging from a lanyard.
// Drag it sideways and it swings like a pendulum; let go and it settles with
// a gentle idle sway. Tap (without dragging) to flip it over.
const PAPER = "#f7f5f0";
const INK = "#1d1b17";
const STAMP = "#a3241b";
const STRAP = 150; // px of lanyard above the card

const BARS = [2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 2];

function Barcode({ className = "" }) {
  return (
    <div className={`flex items-end gap-[1.5px] h-7 ${className}`} aria-hidden="true">
      {BARS.map((w, i) => (
        <span key={i} className="h-full" style={{ width: w, background: INK }} />
      ))}
    </div>
  );
}

function Front() {
  const b = BadgeDetails;
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.28)] border border-black/10" style={{ background: PAPER, color: INK, backfaceVisibility: "hidden" }}>
      {/* Punched slot */}
      <span className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-2.5 rounded-full bg-[#d9d3cc] shadow-inner" />

      <div className={`${typewriter.className} mt-9 px-5 flex justify-between text-[10px] tracking-[0.25em]`}>
        <span className="font-bold">STAFF ID</span>
        <span className="opacity-60">No. {b.idNumber}</span>
      </div>

      {/* Portrait (3:4) ID photo, like a real badge */}
      <div className="relative mx-auto mt-3 flex-1 min-h-0 aspect-[3/4] rounded-md overflow-hidden bg-[#e4e1da] border border-black/15 shadow-inner">
        <Image src={b.photo} alt={`${b.name}, ID photo`} fill sizes="200px" className="object-cover object-[50%_20%]" draggable={false} />
      </div>

      <div className="px-5 pt-4">
        <div className="text-3xl font-black tracking-tight leading-none">{b.name}</div>
        <div className={`${typewriter.className} text-[11px] tracking-[0.2em] mt-1.5 opacity-75`}>{b.role.toUpperCase()}</div>
      </div>

      <div className="px-5 py-3 flex items-end justify-between gap-3">
        {b.available && (
          <span className={`${typewriter.className} flex items-center gap-1.5 text-[9px] font-bold tracking-widest`}>
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-green-600" />
            </span>
            OPEN TO NEW PROJECTS
          </span>
        )}
        <Barcode />
      </div>

      <div className={`${typewriter.className} bg-[#1d1b17] text-[#f7f5f0] text-center text-[10px] tracking-[0.3em] py-2`}>
        CLEARANCE: HIRE-ABLE
      </div>
    </div>
  );
}

function Back() {
  const b = BadgeDetails;
  return (
    <div
      className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(0,0,0,0.28)] border border-black/10"
      style={{ background: PAPER, color: INK, backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
    >
      <span className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-2.5 rounded-full bg-[#d9d3cc] shadow-inner" />
      <div className={`${typewriter.className} mt-9 text-[10px] tracking-[0.25em] font-bold border-b-2 pb-2 mx-5`} style={{ borderColor: INK }}>
        STAFF DETAILS
      </div>
      <dl className={`${typewriter.className} px-5 mt-3 space-y-2.5 text-[11px]`}>
        {b.back.map(([k, v]) => (
          <div key={k}>
            <dt className="opacity-55 tracking-[0.2em] text-[9px]">{k}</dt>
            <dd className="font-bold leading-snug">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto px-5 pb-4 flex items-end justify-between">
        <span
          className={`${typewriter.className} px-2 py-0.5 border-[3px] rounded text-xs font-bold tracking-[0.15em] opacity-85`}
          style={{ color: STAMP, borderColor: STAMP, rotate: "-8deg" }}
        >
          IF FOUND, HIRE
        </span>
        <Barcode />
      </div>
    </div>
  );
}

export default function IdBadge() {
  const pivotRef = useRef(null);
  const angle = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  // a = angle (deg), v = angular velocity (deg/s)
  const s = useRef({ a: 0, v: 0, dragging: false, moved: false, startX: 0, startY: 0, grab: 0, lastT: 0 });

  // Pendulum physics while not being dragged
  useAnimationFrame((t, delta) => {
    const st = s.current;
    if (st.dragging) return;
    const dt = Math.min(delta, 32) / 1000;
    const rest = reduceMotion ? 0 : Math.sin(t / 1400) * 1.2; // idle breeze
    const acc = -32 * (st.a - rest) - 2.4 * st.v;
    st.v += acc * dt;
    st.a += st.v * dt;
    angle.set(st.a);
  });

  const pointerAngle = (e) => {
    const r = pivotRef.current.getBoundingClientRect();
    const px = r.left + r.width / 2;
    const py = r.top;
    return (-Math.atan2(e.clientX - px, e.clientY - py) * 180) / Math.PI;
  };

  const onDown = (e) => {
    const st = s.current;
    st.dragging = true;
    st.moved = false;
    st.startX = e.clientX;
    st.startY = e.clientY;
    st.grab = pointerAngle(e) - st.a; // keep the card where it was grabbed
    st.lastT = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onMove = (e) => {
    const st = s.current;
    if (!st.dragging) return;
    if (Math.hypot(e.clientX - st.startX, e.clientY - st.startY) > 6) st.moved = true;
    if (!st.moved) return;
    const now = performance.now();
    const a = Math.max(-65, Math.min(65, pointerAngle(e) - st.grab));
    const dt = Math.max(1, now - st.lastT) / 1000;
    st.v = st.v * 0.5 + ((a - st.a) / dt) * 0.5;
    st.a = a;
    st.lastT = now;
    angle.set(a);
  };

  const onUp = (e, cancelled = false) => {
    const st = s.current;
    if (!st.dragging) return;
    st.dragging = false;
    if (!st.moved && !cancelled) {
      setFlipped((f) => !f);
      st.v += 70; // a little swing as it flips
    }
    st.v = Math.max(-500, Math.min(500, st.v));
  };

  return (
    <div className="relative flex flex-col items-center select-none" style={{ height: STRAP + 520 }}>
      {/* Pivot point (top of the lanyard) */}
      <div ref={pivotRef} className="absolute top-0 left-1/2 w-px h-px" />

      <motion.div
        className="absolute top-0 left-1/2 -ml-[150px] w-[300px] cursor-grab active:cursor-grabbing"
        style={{ rotate: angle, transformOrigin: "50% 0%", touchAction: "pan-y" }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={(e) => onUp(e)}
        onPointerCancel={(e) => onUp(e, true)}
        role="button"
        tabIndex={0}
        aria-label={flipped ? "Staff ID card, back. Press to flip to the front" : "Staff ID card. Press to flip and see details"}
        aria-pressed={flipped}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
            s.current.v += 70;
          }
        }}
      >
        {/* Lanyard strap (centred by the flex wrapper; vertical text inside) */}
        <div className="flex justify-center" aria-hidden="true">
          <div
            className={`${typewriter.className} w-[26px] bg-[#1d1b17] text-[#f7f5f0] text-[8px] tracking-[0.35em] overflow-hidden flex items-center justify-center`}
            style={{
              height: STRAP,
              maskImage: "linear-gradient(to bottom, transparent, black 30%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%)",
            }}
          >
            <span style={{ writingMode: "vertical-rl" }} className="whitespace-nowrap">
              JAYBOBO · OPEN TO WORK · JAYBOBO
            </span>
          </div>
        </div>
        {/* Metal clip */}
        <div className="mx-auto -mt-1 w-9 h-5 rounded-md bg-gradient-to-b from-neutral-300 to-neutral-500 shadow" aria-hidden="true" />
        <div className="mx-auto -mt-1 w-3 h-5 rounded-b-full border-[3px] border-t-0 border-neutral-400" aria-hidden="true" />

        {/* The card (flips in 3D) */}
        <div className="-mt-2" style={{ perspective: 1200 }}>
          <motion.div
            className="relative w-[300px] h-[440px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
          >
            <Front />
            <Back />
          </motion.div>
        </div>
      </motion.div>

      {/* Hint */}
      <div className={`${handwriting.className} absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-xl text-black/60 -rotate-3 pointer-events-none`}>
        drag me · tap to flip
      </div>
    </div>
  );
}
