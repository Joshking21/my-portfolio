"use client";
import { useState } from "react";

export default function Carousel({ children }) {
  const [index, setIndex] = useState(0);

  const items = Array.isArray(children) ? children : [children];

  const next = () => {
    if (index < items.length - 1) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <div className="relative group w-full overflow-hidden">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 30}%)`,
        }}
      >
        {items.map((child, i) => (
          <div key={i} className="min-w-[30%] px-2">
            {child}
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black/60 text-white px-3 py-2 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black/60 text-white px-3 py-2 rounded-full"
      >
        ▶
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}