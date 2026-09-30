"use client";

const tickerItems = [
  "FULL-STACK ARCHITECTURE",
  "SYSTEM DESIGN",
  "PERFORMANCE OPTIMIZATION",
  "WEB3 & MOBILE APPS",
  "CLEAN CODE & DESIGN PATTERNS",
  "HIGH-THROUGHPUT BACKENDS",
  "REACT & NEXT.JS ECOSYSTEM",
  "INTERACTIVE CRAFT",
];

export default function TechTicker({ className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-black text-[var(--primary)] py-4 sm:py-5 border-y border-white/15 select-none ${className}`}
    >
      {/* Left/Right Edge Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Track with Smooth Hover Pause */}
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] cursor-default">
        {/* Render 2 identical sets for seamless continuous looping */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 items-center gap-8 sm:gap-12 px-4 sm:px-6">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-12">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--primary)]/90 whitespace-nowrap hover:text-white transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
