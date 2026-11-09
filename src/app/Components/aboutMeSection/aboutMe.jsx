"use client";
import IdBadge from "./IdBadge";
import Memo from "./Memo";
import QuoteSheet from "./QuoteSheet";

// About: who (staff ID badge) · why (memo) · what to hire me for (quote sheet)
export default function AboutMe() {
  return (
    <section id="aboutMe" className="flex flex-col bg-[var(--primary)] items-center pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="py-1 px-6 border-x-[3px] font-bold border-black mb-14 uppercase tracking-widest text-sm">
        About Me
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-x-16 gap-y-10 items-start">
        <IdBadge />
        <div className="lg:pt-24">
          <Memo />
        </div>
      </div>

      <div className="w-full mt-24">
        <QuoteSheet />
      </div>
    </section>
  );
}
