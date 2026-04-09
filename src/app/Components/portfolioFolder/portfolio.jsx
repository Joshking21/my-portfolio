"use client";
import { useState } from "react";
import MotionFadeInSection from "../../framerMotion/motion";
import WorkExp from "./portfolioWorkExperience";
import Port from "./portfolioProject";
import { ProjectDetails, WorkExperienceDetails } from "../../lib/userProject";

export default function Portfolio() {
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = isActive ? WorkExperienceDetails : ProjectDetails;
  
  // Responsive logic for translation
  // Mobile: translateX(index * 100%)
  // Tablet: translateX(index * 50%)
  // Laptop: translateX(index * 33.33%)
  
  const handleNext = () => setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));

  return (
    <MotionFadeInSection>
      <div id="portfolio" className="flex flex-col bg-[var(--primary)] items-center py-10">
        <div className="border-x-[3px] font-bold py-1 px-6 border-black my-10 uppercase tracking-widest text-sm">
          Portfolio
        </div>

        <div className="bg-black text-white w-full flex flex-col items-center group relative overflow-hidden pb-12">
          {/* Tab Switcher */}
          <div className="flex mt-8 mb-12 gap-4">
            <button onClick={() => {setIsActive(false); setCurrentIndex(0)}} className={`px-4 py-1 transition-all text-xs font-bold ${!isActive ? "border-b-2 border-white" : "opacity-50"}`}>PROJECTS</button>
            <button onClick={() => {setIsActive(true); setCurrentIndex(0)}} className={`px-4 py-1 transition-all text-xs font-bold ${isActive ? "border-b-2 border-white" : "opacity-50"}`}>WORK</button>
          </div>

          <div className="relative w-full px-4 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${currentIndex} * var(--slide-width)))` }}
              data-index={currentIndex}
            >
              {/* Note: We use CSS variables in the parent div or standard Tailwind responsive logic below */}
              {data.map((item, index) => (
                <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2">
                   {isActive ? <WorkExp item={item} /> : <Port item={item} />}
                </div>
              ))}
            </div>
            
            {/* Nav Arrows - Hidden on small touch screens for better UX, shown on md+ */}
            <button onClick={handlePrev} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full z-30 opacity-0 group-hover:opacity-100 transition">◀</button>
            <button onClick={handleNext} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full z-30 opacity-0 group-hover:opacity-100 transition">▶</button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8">
            {data.map((_, idx) => (
              <div key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full cursor-pointer transition-all ${currentIndex === idx ? "bg-white w-6" : "bg-white/30"}`} />
            ))}
          </div>
        </div>
        
        {/* Helper style for the dynamic transform on mobile vs desktop */}
        <style jsx>{`
            div { --slide-width: 100%; }
            @media (min-width: 768px) { div { --slide-width: 50%; } }
            @media (min-width: 1024px) { div { --slide-width: 33.333%; } }
        `}</style>
      </div>
    </MotionFadeInSection>
  );
}