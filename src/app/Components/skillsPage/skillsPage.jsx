"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SkillDetails, LearningDetails } from "@/app/lib/userSkillsData";
import { MotionFadeLeftSection, MotionFadeRightSection } from "@/app/framerMotion/motion";
import SpotlightCard from "../ui/SpotlightCard";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "core", label: "Core & Languages" },
    { id: "frameworks", label: "Frameworks & Libraries" },
    { id: "tools", label: "Tools & Platforms" },
  ];

  const filteredSkills = activeFilter === "all" 
    ? SkillDetails 
    : SkillDetails.filter((item) => item.category === activeFilter);

  return (
    <div id="skills" className="flex flex-col items-center justify-center py-20 bg-[var(--primary)] px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 1: USING NOW (CLEAN CORPORATE / MODERN TECH)                      */}
      {/* ========================================================================= */}
      <MotionFadeLeftSection className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="py-1 px-6 border-x-[3px] font-bold border-black mb-3 uppercase tracking-widest text-xs sm:text-sm">
            Technical Proficiency
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            USING NOW
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-wider text-black/60 font-semibold mt-2 max-w-md">
            Technologies and frameworks applied in active client and personal projects
          </p>
        </div>

        {/* Clean Minimalist Category Tabs */}
        <div className="inline-flex p-1 bg-black/10 border border-black/15 rounded-xl mb-10 gap-1 max-w-full overflow-x-auto shadow-xs">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`
                  px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none whitespace-nowrap
                  ${isActive 
                    ? "bg-[#262424] text-[var(--primary)] shadow-sm" 
                    : "text-black/60 hover:text-black hover:bg-black/5"
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Professional Compact Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 w-full"
        >
          {filteredSkills.map((item, index) => (
            <SkillCard
              key={item.PhotoText}
              item={item}
              index={index}
            />
          ))}
        </motion.div>
      </MotionFadeLeftSection>

      {/* Subtle Divider */}
      <div className="my-16 sm:my-20 flex items-center justify-center gap-4 w-full max-w-xs">
        <div className="h-px bg-black/20 flex-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">
          In Development
        </span>
        <div className="h-px bg-black/20 flex-1" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: LEARNING (IN PROGRESS)                                         */}
      {/* ========================================================================= */}
      <MotionFadeRightSection className="w-full max-w-3xl flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="py-0.5 px-4 border-x-2 font-bold border-black/60 mb-2 uppercase tracking-widest text-[11px] text-black/80">
            Expanding Stack
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
            LEARNING IN PROGRESS
          </h3>
          <p className="text-xs text-black/60 mt-1 font-medium">
            Technologies actively being integrated into backend and data workflows
          </p>
        </div>

        {/* Learning Cards (Brushed Obsidian Spotlight) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-xl gap-4 w-full">
          {LearningDetails.map((item) => (
            <SpotlightCard
              key={item.PhotoText}
              rounded="rounded-xl"
              className="w-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              innerClassName="p-4 flex flex-col items-center text-center text-[var(--primary)] w-full"
            >
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                  {item.badge ? item.badge.replace(/[^a-zA-Z ]/g, "").trim() || "In Pipeline" : "In Pipeline"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
              </div>

              {/* Centered Icon Pod */}
              <div className="w-full flex items-center justify-center my-2">
                <div className="relative w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-white/10 border border-white/10 p-2 group-hover:scale-105 group-hover:bg-white/15 transition-all duration-200">
                  <Image
                    src={item.PhotoSource}
                    alt={item.PhotoText}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
              </div>

              <h4 className="font-extrabold text-xs text-white uppercase mt-1 tracking-wider">
                {item.PhotoText}
              </h4>
            </SpotlightCard>
          ))}
        </div>
      </MotionFadeRightSection>

    </div>
  );
}

// =============================================================================
// SUB-COMPONENT: REFINED SKILL CARD (SPOTLIGHT GLOW)
// =============================================================================
function SkillCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      whileHover={{ y: -4 }}
      className="h-full w-full"
    >
      <SpotlightCard
        rounded="rounded-xl"
        className="h-full w-full select-none hover:shadow-xl transition-shadow duration-200"
        innerClassName="p-3 flex flex-col items-center justify-between min-h-[140px] text-[var(--primary)] text-center w-full"
      >
        {/* Top Bar: Clean Tag */}
        <div className="w-full flex items-center justify-between mb-1">
          <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white/70 group-hover:text-white border border-white/10 transition-colors">
            {item.tag || "Skill"}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
        </div>

        {/* Centered Icon Pod */}
        <div className="w-full flex items-center justify-center my-1">
          <div className="relative w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-white/10 border border-white/10 p-2 group-hover:scale-105 group-hover:bg-white/15 transition-all duration-200">
            <Image
              src={item.PhotoSource}
              alt={item.PhotoText}
              fill
              sizes="48px"
              className="object-contain p-1"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="w-full text-center mt-1 flex flex-col items-center">
          <h4 className="font-extrabold text-xs tracking-tight text-white uppercase leading-tight truncate max-w-full">
            {item.PhotoText}
          </h4>
          <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--primary)]/60 mt-0.5">
            {item.badge ? item.badge.replace(/[^a-zA-Z ]/g, "").trim() || "Active" : "Active"}
          </span>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}