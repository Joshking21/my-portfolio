"use client";
import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";

// Hand-inked doodles of the stack drifting across the whole hero, BEHIND the
// text and the portrait. Each wanders its own slow looping (Lissajous) path,
// lines "boil" like hand-drawn animation, each draws itself in on load, and
// tapping one pops it in a puff of ink before it redraws. Hovering a doodle
// pauses the drift so it can be tapped.
//
// Render as the first child of a `relative overflow-hidden` section; the
// section's content must sit above it (z-10).
const INK = "#111";

// Shapes drawn in a 64x64 box.
// path: x0/y0 = centre (fraction of section), ax/ay = drift amplitude,
// fx/fy = loop periods (ms), p = phase. depth 0..1 = far..near (size & ink strength)
const DOODLES = [
  {
    name: "React", size: 86, depth: 1,
    path: { x0: 0.1, y0: 0.24, ax: 0.07, ay: 0.12, fx: 26000, fy: 19000, p: 0 },
    shapes: [
      ["ellipse", { cx: 32, cy: 32, rx: 27, ry: 10 }],
      ["ellipse", { cx: 32, cy: 32, rx: 27, ry: 10, transform: "rotate(60 32 32)" }],
      ["ellipse", { cx: 32, cy: 32, rx: 27, ry: 10, transform: "rotate(120 32 32)" }],
      ["circle", { cx: 32, cy: 32, r: 3.5, fill: INK }],
    ],
  },
  {
    name: "Next.js", size: 64, depth: 0.6,
    path: { x0: 0.44, y0: 0.16, ax: 0.1, ay: 0.06, fx: 31000, fy: 23000, p: 1.2 },
    shapes: [
      ["path", { d: "M32 7 C47 6 58 18 57 33 C56 48 45 58 31 57 C16 56 6 45 7 31 C8 17 19 8 33 8" }],
      ["path", { d: "M23 44 L23 21 L42 46" }],
      ["path", { d: "M41 21 L41 35" }],
    ],
  },
  {
    name: "TypeScript", size: 62, depth: 0.7,
    path: { x0: 0.3, y0: 0.74, ax: 0.09, ay: 0.08, fx: 24000, fy: 29000, p: 2.4 },
    shapes: [
      ["path", { d: "M11 9 L54 10 C55 10 56 11 56 12 L55 54 L10 55 C9 55 8 54 8 53 L9 11 C9 10 10 9 11 9" }],
      ["path", { d: "M17 31 L33 31 M25 31 L25 48" }],
      ["path", { d: "M49 32 C45 29 38 30 39 35 C40 39 49 38 49 43 C49 48 41 49 37 46" }],
    ],
  },
  {
    name: "Tailwind", size: 78, depth: 0.85,
    path: { x0: 0.56, y0: 0.82, ax: 0.08, ay: 0.07, fx: 28000, fy: 21000, p: 0.7 },
    shapes: [
      ["path", { d: "M8 30 C14 18 24 17 30 25 C35 31 42 34 52 24" }],
      ["path", { d: "M12 44 C18 32 28 31 34 39 C39 45 46 48 56 38" }],
    ],
  },
  {
    name: "Node.js", size: 70, depth: 0.9,
    path: { x0: 0.86, y0: 0.2, ax: 0.08, ay: 0.1, fx: 22000, fy: 27000, p: 3.3 },
    shapes: [
      ["path", { d: "M32 6 L54 18 L55 45 L32 58 L10 46 L9 19 Z" }],
      ["path", { d: "M27 24 L27 40 C27 45 21 46 19 42" }],
      ["path", { d: "M45 26 C42 23 35 24 36 29 C37 33 45 32 45 37 C45 42 38 43 34 40" }],
    ],
  },
  {
    name: "MongoDB", phone: false, size: 60, depth: 0.65,
    path: { x0: 0.9, y0: 0.78, ax: 0.06, ay: 0.09, fx: 25000, fy: 20000, p: 4.1 },
    shapes: [
      ["path", { d: "M32 6 C45 20 47 38 32 54 C17 38 19 20 32 6" }],
      ["path", { d: "M32 14 L32 61" }],
    ],
  },
  {
    // Database cylinder with "PG"
    name: "PostgreSQL", size: 64, depth: 0.75,
    path: { x0: 0.2, y0: 0.56, ax: 0.07, ay: 0.13, fx: 29000, fy: 22000, p: 3.9 },
    shapes: [
      ["ellipse", { cx: 32, cy: 13, rx: 20, ry: 6 }],
      ["path", { d: "M12 13 L12 50 C12 58 52 58 52 50 L52 13" }],
      ["path", { d: "M21 45 L21 26 L27 26 C33 26 33 36 27 36 L21 36" }],
      ["path", { d: "M45 29 C43 25 36 25 36 32 L36 38 C36 46 45 46 45 40 L45 37 L41 37" }],
    ],
  },
  {
    // Redis: three stacked layers
    name: "Redis", phone: false, size: 62, depth: 0.7,
    path: { x0: 0.63, y0: 0.32, ax: 0.06, ay: 0.12, fx: 23500, fy: 30500, p: 0.4 },
    shapes: [
      ["path", { d: "M32 10 L54 20 L32 30 L10 20 Z" }],
      ["path", { d: "M10 31 L32 41 L54 31" }],
      ["path", { d: "M10 42 L32 52 L54 42" }],
    ],
  },
  {
    name: "Code", phone: false, size: 58, depth: 0.5,
    path: { x0: 0.72, y0: 0.5, ax: 0.12, ay: 0.14, fx: 33000, fy: 26000, p: 5.0 },
    shapes: [
      ["path", { d: "M22 20 L10 32 L22 44" }],
      ["path", { d: "M42 20 L54 32 L42 44" }],
      ["path", { d: "M36 15 L28 49" }],
    ],
  },
  {
    name: "Braces", phone: false, size: 56, depth: 0.45,
    path: { x0: 0.07, y0: 0.8, ax: 0.05, ay: 0.08, fx: 27000, fy: 32000, p: 1.9 },
    shapes: [
      ["path", { d: "M24 10 C16 10 18 22 18 26 C18 30 14 32 12 32 C14 32 18 34 18 38 C18 42 16 54 24 54" }],
      ["path", { d: "M40 10 C48 10 46 22 46 26 C46 30 50 32 52 32 C50 32 46 34 46 38 C46 42 48 54 40 54" }],
    ],
  },
  {
    name: "Git", phone: false, size: 60, depth: 0.55,
    path: { x0: 0.36, y0: 0.42, ax: 0.08, ay: 0.12, fx: 30000, fy: 24000, p: 2.8 },
    shapes: [
      ["circle", { cx: 20, cy: 14, r: 5 }],
      ["circle", { cx: 20, cy: 50, r: 5 }],
      ["circle", { cx: 44, cy: 24, r: 5 }],
      ["path", { d: "M20 19 L20 45" }],
      ["path", { d: "M44 29 C44 40 27 36 22 46" }],
    ],
  },
];

function BoilFilter() {
  // Seeds stepped a few times a second = classic hand-drawn "line boil"
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <filter id="ink-boil">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="1">
          <animate attributeName="seed" values="1;7;3;9" dur="0.6s" repeatCount="indefinite" calcMode="discrete" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="2.4" />
      </filter>
    </svg>
  );
}

// Ink splatter blobs flung outward on pop
const SPLATS = Array.from({ length: 9 }, (_, i) => {
  const a = (i / 9) * Math.PI * 2 + (i % 2 ? 0.3 : -0.2);
  const d = 34 + (i % 3) * 10;
  return { x: Math.cos(a) * d, y: Math.sin(a) * d, r: 2.5 + (i % 4) };
});

const MotionTag = { path: motion.path, ellipse: motion.ellipse, circle: motion.circle };
const TAU = Math.PI * 2;

const QUIET_OPACITY = 0.08; // how faint a doodle gets behind the text
const QUIET_MARGIN = 16; // px of breathing room around the text block

function Doodle({ doodle, index, clock, boxRef, quietRect, setPaused }) {
  const [drawKey, setDrawKey] = useState(0);
  const [popping, setPopping] = useState(false);
  const { shapes, size, name, path, depth } = doodle;
  const baseOpacity = 0.3 + 0.35 * depth; // far doodles are lighter

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(baseOpacity);
  const visibility = useMotionValue("visible");

  useAnimationFrame(() => {
    const box = boxRef.current;
    if (!box) return;
    const W = box.offsetWidth;
    const H = box.offsetHeight;

    // Phones: fewer, smaller doodles so the header doesn't feel crowded
    const phone = W < 768;
    if (phone && doodle.phone === false) {
      visibility.set("hidden");
      return;
    }
    visibility.set("visible");
    const s = W < 640 ? 0.62 : W < 1024 ? 0.8 : 1;
    scale.set(s);

    const t = clock.current;
    const cx = (path.x0 + path.ax * Math.sin((TAU * t) / path.fx + path.p)) * W;
    const cy = (path.y0 + path.ay * Math.sin((TAU * t) / path.fy + path.p * 1.3)) * H;
    x.set(cx - size / 2);
    y.set(cy - size / 2);
    rotate.set(Math.sin(t / 2200 + index) * 12);

    // Fade almost out while overlapping any quiet zone, ease back when clear
    const half = (size * s) / 2;
    const left = cx - half;
    const top = cy - half;
    const overlapping = quietRect.current.some(
      (q) =>
        left < q.right + QUIET_MARGIN &&
        left + half * 2 > q.left - QUIET_MARGIN &&
        top < q.bottom + QUIET_MARGIN &&
        top + half * 2 > q.top - QUIET_MARGIN
    );
    const target = overlapping ? QUIET_OPACITY : baseOpacity;
    const current = opacity.get();
    opacity.set(current + (target - current) * 0.08);
  });

  const pop = () => {
    if (popping) return;
    setPopping(true);
    setTimeout(() => {
      setPopping(false);
      setDrawKey((k) => k + 1); // redraw from scratch
    }, 520);
  };

  return (
    <motion.button
      type="button"
      aria-label={name}
      onClick={pop}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      className="absolute left-0 top-0 cursor-pointer outline-none"
      style={{ width: size, height: size, x, y, rotate, scale, opacity, visibility }}
    >
      <motion.svg
        viewBox="0 0 64 64"
        className="w-full h-full overflow-visible"
        whileHover={{ scale: 1.15 }}
        animate={popping ? { scale: [1, 1.35, 0], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <g
          key={drawKey}
          filter="url(#ink-boil)"
          fill="none"
          stroke={INK}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {shapes.map(([tag, props], k) => {
            const Tag = MotionTag[tag];
            return (
              <Tag
                key={k}
                {...props}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, delay: (drawKey ? 0 : 0.4 + index * 0.15) + k * 0.15, ease: "easeInOut" }}
              />
            );
          })}
        </g>
      </motion.svg>

      {popping && (
        <svg viewBox="-60 -60 120 120" className="absolute inset-[-60%] w-[220%] h-[220%] pointer-events-none overflow-visible">
          <motion.circle cx="0" cy="0" fill={INK} initial={{ r: 4, opacity: 0.9 }} animate={{ r: 20, opacity: 0 }} transition={{ duration: 0.45 }} />
          {SPLATS.map((s, i) => (
            <motion.circle
              key={i}
              r={s.r}
              fill={INK}
              initial={{ cx: 0, cy: 0, opacity: 1, scale: 0.4 }}
              animate={{ cx: s.x, cy: s.y, opacity: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </svg>
      )}
    </motion.button>
  );
}

// Doodles fade out behind any element in the same section marked `data-quiet`
// (small text that must stay readable). Big headings are left unmarked.
export default function InkDoodles({ className = "" }) {
  const reduceMotion = useReducedMotion();
  const boxRef = useRef(null);
  const clock = useRef(0);
  const paused = useRef(false);
  const quietRect = useRef([]);

  // Shared drift clock; stops while a doodle is hovered or if reduced motion.
  // Also measures the quiet zones once per frame, relative to this box.
  useAnimationFrame((_, delta) => {
    if (!paused.current && !reduceMotion) clock.current += Math.min(delta, 50);
    const box = boxRef.current;
    if (!box?.parentElement) return;
    const b = box.getBoundingClientRect();
    quietRect.current = Array.from(box.parentElement.querySelectorAll("[data-quiet]"), (el) => {
      const r = el.getBoundingClientRect();
      return { left: r.left - b.left, top: r.top - b.top, right: r.right - b.left, bottom: r.bottom - b.top };
    });
  });

  return (
    <div
      ref={boxRef}
      aria-hidden="true"
      className={`absolute inset-0 z-0 pointer-events-none [&_button]:pointer-events-auto ${className}`}
    >
      <BoilFilter />
      {DOODLES.map((d, i) => (
        <Doodle
          key={d.name}
          doodle={d}
          index={i}
          clock={clock}
          boxRef={boxRef}
          quietRect={quietRect}
          setPaused={(v) => (paused.current = v)}
        />
      ))}
    </div>
  );
}
