"use client";
import Letter from "./Letter";
import BusinessCard from "./BusinessCard";
import { handwriting } from "../lib/fonts";

// Contact: write me a letter (folds into an envelope on send) + my business card
export default function Contacts() {
  return (
    <section id="contact" className="flex flex-col items-center pt-16 pb-28 bg-[var(--primary)] px-4 overflow-hidden">
      <div className="py-1 px-6 border-x-[3px] font-bold border-black mb-4 uppercase tracking-widest text-sm">
        Contact
      </div>
      <p className={`${handwriting.className} text-2xl text-black/70 mb-12 text-center`}>
        Got a project in mind? Write me a letter.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-x-14 gap-y-20 items-start">
        <Letter />
        <div className="lg:pt-10 pb-16">
          <BusinessCard />
        </div>
      </div>
    </section>
  );
}
