"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// A social icon that's switched off for now (e.g. LinkedIn while the account
// has sign-in issues). Hover or focus shows the note; tapping toggles it on phones.
export default function DisabledSocial({ item, size = 24, dark = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const label = item.alt.replace(" Logo", "");

  // Close the tapped-open note when tapping anywhere else
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <span ref={ref} className="relative inline-flex group/ds">
      <button
        type="button"
        aria-disabled="true"
        aria-label={`${label} (unavailable): ${item.note}`}
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
        className="relative inline-block p-1 cursor-not-allowed"
      >
        <Image src={item.photosource} alt="" width={size} height={size} className="opacity-30 grayscale" />
        {/* Diagonal strike through the icon */}
        <span
          aria-hidden="true"
          className={`absolute left-0 right-0 top-1/2 h-[2px] -rotate-45 ${dark ? "bg-white/70" : "bg-black/60"}`}
        />
      </button>

      <span
        role="tooltip"
        className={`pointer-events-none absolute bottom-full right-0 mb-2 w-56 rounded-md px-3 py-2 text-left text-[11px] font-medium leading-snug normal-case tracking-normal shadow-lg z-50 transition-opacity duration-200 ${
          dark ? "bg-[#f7f5f0] text-[#1d1b17]" : "bg-[#1d1b17] text-[#f7f5f0]"
        } ${open ? "opacity-100" : "opacity-0 group-hover/ds:opacity-100 group-focus-within/ds:opacity-100"}`}
      >
        {item.note}
      </span>
    </span>
  );
}
