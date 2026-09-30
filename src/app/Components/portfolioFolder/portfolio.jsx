"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MotionFadeLeftSection } from "../../framerMotion/motion";
import WorkExp from "./portfolioWorkExperience";
import Port from "./portfolioProject";
import ProjectModal from "./projectModal";
import { ProjectDetails, WorkExperienceDetails } from "../../lib/userProject";

export default function Portfolio() {
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const wheelLock = useRef(false);

  const data = isActive ? WorkExperienceDetails : ProjectDetails;

  // Track responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bound maxIndex so it never over-scrolls into empty slots
  const maxIndex = Math.max(0, data.length - visibleCount);

  // Clamp index if tab or screen changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Handle the swipe/drag logic
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Mouse wheel scroll handler (bounded: no backwards wrap at 0, no loop at maxIndex)
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);

    if (Math.abs(delta) > 20) {
      if (wheelLock.current) return;

      if (delta > 0 && currentIndex < maxIndex) {
        wheelLock.current = true;
        setTimeout(() => {
          wheelLock.current = false;
        }, 350);
        handleNext();
      } else if (delta < 0 && currentIndex > 0) {
        wheelLock.current = true;
        setTimeout(() => {
          wheelLock.current = false;
        }, 350);
        handlePrev();
      }
    }
  };

  return (
    <MotionFadeLeftSection>
      <div id="portfolio" className="flex flex-col bg-[var(--primary)] items-center pt-10 pb-0">
        <div className="border-x-[3px] font-bold py-1 px-6 border-black my-8 uppercase tracking-widest text-sm">
          Portfolio
        </div>

        <div className="bg-black text-white w-full flex flex-col items-center relative overflow-hidden pt-4 pb-12">
          
          {/* Micro Edge Softener: 4px crisp seam to eliminate harsh cut without blur */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-[var(--primary)] to-transparent opacity-60 z-20" />

          {/* Micro Edge Softener: 4px crisp seam to eliminate harsh cut without blur */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-60 z-20" />

          {/* Tab Switcher */}
          <div className="relative z-30 flex mt-8 mb-12 gap-4">
            <button
              onClick={() => {
                setIsActive(false);
                setCurrentIndex(0);
              }}
              className={`px-4 py-1 transition-all text-xs font-bold cursor-pointer ${
                !isActive ? "border-b-2 border-white" : "opacity-50 hover:opacity-80"
              }`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => {
                setIsActive(true);
                setCurrentIndex(0);
              }}
              className={`px-4 py-1 transition-all text-xs font-bold cursor-pointer ${
                isActive ? "border-b-2 border-white" : "opacity-50 hover:opacity-80"
              }`}
            >
              WORK
            </button>
          </div>

          {/* Carousel Viewport with Mouse Wheel Support */}
          <div 
            onWheel={handleWheel}
            className="relative w-full px-4 overflow-hidden group/carousel"
          >
            {/* The draggable container */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[33.333333%] w-full md:w-1/3 px-2 select-none shrink-0"
                >
                  {isActive ? <WorkExp item={item} /> : <Port item={item} onSelect={setSelectedProject} />}
                </div>
              ))}
            </motion.div>

            {/* Nav Arrows */}
            {maxIndex > 0 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full z-30 transition ${
                    currentIndex === 0
                      ? "opacity-0 pointer-events-none"
                      : "opacity-0 group-hover/carousel:opacity-100 hover:scale-110 cursor-pointer"
                  }`}
                  aria-label="Previous slide"
                >
                  ◀
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className={`hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full z-30 transition ${
                    currentIndex === maxIndex
                      ? "opacity-0 pointer-events-none"
                      : "opacity-0 group-hover/carousel:opacity-100 hover:scale-110 cursor-pointer"
                  }`}
                  aria-label="Next slide"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator: bounded to valid full slide views only */}
          {maxIndex > 0 && (
            <div className="relative z-30 flex gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    currentIndex === idx ? "bg-white w-6" : "bg-white/30 w-2 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Extensive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </MotionFadeLeftSection>
  );
}