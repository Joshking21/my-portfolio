"use client";
import { useState } from "react";
import CaseFile from "./CaseFile";
import EmploymentRecord from "./EmploymentRecord";
import ProjectModal from "./projectModal";
import { ProjectDetails, WorkExperienceDetails } from "../../lib/userProject";
import { typewriter } from "@/app/lib/fonts";

// Order: featured first, then live projects, otherwise data order (stable sort)
const rank = (p) => (p.featured ? 2 : 0) + (p.projectLink ? 1 : 0);
const projects = [...ProjectDetails].sort((a, b) => rank(b) - rank(a));

// Phones show only the featured projects; the rest sit behind a button so
// scrolling isn't a chore. Tablets & desktop show everything.
const PHONE_VISIBLE = projects.filter((p) => p.featured).length || 3;

export default function Portfolio() {
  const [selected, setSelected] = useState(null); // { item, index }
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = projects.length - PHONE_VISIBLE;

  const collapse = () => {
    setShowAll(false);
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // No section-level fade wrapper here: this section is taller than several
  // screens, so a "15% visible" trigger never fires on phones (section stays
  // invisible). Folders and the record animate in on their own instead.
  return (
    <>
      <div id="portfolio" className="flex flex-col bg-[var(--primary)] items-center pt-10 pb-0">
        <div className="border-x-[3px] font-bold py-1 px-6 border-black my-8 uppercase tracking-widest text-sm">
          Portfolio
        </div>

        <div className="bg-black text-white w-full relative overflow-hidden pt-16 pb-24 px-4 sm:px-8 lg:px-16">
          {/* Case files */}
          <div className={`${typewriter.className} text-center text-[11px] tracking-[0.35em] text-white/50 mb-10`}>
            SELECTED CASE FILES · {String(projects.length).padStart(2, "0")} ON RECORD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14 max-w-7xl mx-auto">
            {projects.map((item, i) => (
              <div key={item.id} className={!showAll && i >= PHONE_VISIBLE ? "hidden md:block" : ""}>
                <CaseFile item={item} index={i} onOpen={() => setSelected({ item, index: i })} />
              </div>
            ))}
          </div>

          {/* Phones only: open / close the rest of the drawer */}
          {hiddenCount > 0 && (
            <div className="md:hidden flex justify-center mt-12">
              <button
                type="button"
                onClick={showAll ? collapse : () => setShowAll(true)}
                aria-expanded={showAll}
                className={`${typewriter.className} flex items-center gap-2 px-5 py-3 rounded-t-lg rounded-b-sm text-[11px] font-bold tracking-[0.2em] text-[#2a2418] bg-[#cdbb93] hover:brightness-105 shadow-lg cursor-pointer`}
              >
                {showAll ? "CLOSE THE DRAWER ▴" : `OPEN ${hiddenCount} MORE CASE FILES ▾`}
              </button>
            </div>
          )}

          {/* Employment record */}
          <div id="experience" className="mt-24">
            <div className={`${typewriter.className} text-center text-[11px] tracking-[0.35em] text-white/50 mb-10`}>
              EXPERIENCE
            </div>
            <EmploymentRecord items={WorkExperienceDetails} />
          </div>
        </div>
      </div>

      {/* Full case study */}
      <ProjectModal
        project={selected?.item}
        fileNo={selected ? String(selected.index + 1).padStart(3, "0") : undefined}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
