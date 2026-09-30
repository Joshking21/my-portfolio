"use client";
import { motion } from "framer-motion";
import { AboutMeSection, ExploreItems } from "@/app/lib/userData";
import AboutMeDetailsSection from "./aboutMeDetails";
import { MotionFadeUpSection, MotionFadeLeftSection, MotionFadeRightSection } from "@/app/framerMotion/motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";
import NumberCounter from "../ui/NumberCounter";

export default function AboutMe() {
  return (
    <div id="aboutMe" className="flex flex-col bg-[var(--primary)] items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 1: ABOUT ME (CLEAN CORPORATE ARCHITECTURE)                        */}
      {/* ========================================================================= */}
      <MotionFadeUpSection className="w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="py-1 px-6 border-x-[3px] font-bold border-black mb-3 uppercase tracking-widest text-xs sm:text-sm">
            Background & Mission
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            {AboutMeSection.AboutTitle}
          </h2>

          <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-black/60 mt-1 max-w-lg">
            Empowering businesses, founders, and creators to establish and scale their presence online
          </p>
        </div>

        {/* Executive Bio Card */}
        <SpotlightCard
          rounded="rounded-2xl"
          className="shadow-2xl max-w-4xl w-full"
          innerClassName="p-6 sm:p-10 text-[var(--primary)]"
        >
          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 mb-6 border-b border-white/15">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Experience</p>
              <p className="text-xl sm:text-2xl font-black text-white">
                <NumberCounter to={2} suffix="+ Years" duration={2.0} delay={0.25} />
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Age</p>
              <p className="text-xl sm:text-2xl font-black text-white">
                <NumberCounter to={21} suffix=" Y/O" duration={2.4} delay={0.25} />
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Education</p>
              <p className="text-xl sm:text-2xl font-black text-white">CS @ FUTO</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Specialization</p>
              <p className="text-xl sm:text-2xl font-black text-white">Fullstack</p>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--primary)]/90">
            <p>
              I&apos;m a Full-stack Developer with over{" "}
              <span className="font-black text-white underline decoration-white/40 decoration-2 underline-offset-4">
                <NumberCounter to={2} suffix=" years" duration={2.0} delay={0.35} />
              </span>{" "}
              of engineering experience, dedicated to turning ideas and offline operations into high-converting, scalable digital platforms. At{" "}
              <span className="font-black text-white">
                <NumberCounter to={21} suffix=" years old" duration={2.4} delay={0.35} />
              </span>, 
              I’m currently completing my final year in Computer Science at the Federal University of Technology Owerri (FUTO).
            </p>
            <p>
              My primary mission is <strong className="text-white font-bold">helping businesses, founders, and professionals bring their work online.</strong> Whether you run an established local business ready to reach a broader digital audience, an ambitious startup launching an MVP, or an individual scaling a personal brand—I engineer bespoke web and mobile platforms that build immediate trust, automate operations, and convert visitors into loyal clients.
            </p>
            <p className="text-xs sm:text-sm text-[var(--primary)]/80">
              From intuitive user interfaces (React, Next.js, React Native) to robust backend APIs and databases (Node.js, PHP, MongoDB, MySQL), I take complete ownership of the technical build so you can focus on growing your business with peace of mind.
            </p>

            {/* Competency Highlights */}
            <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-xs uppercase tracking-widest text-white">
                  Core Competencies & Capabilities:
                </p>
                <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 hidden sm:inline">
                  Full-Stack Architecture
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
                {[
                  "Node.js, Express, & RESTful API Architecture",
                  "MongoDB, MySQL, & Database Modeling",
                  "React, Next.js, & React Native (Cross-Platform)",
                  "PHP, Server-Side Logic, & Data Pipelines",
                  "Tailwind CSS, Component Systems, & UI/UX",
                  "TypeScript, Modern JS (ES6+), & Performance QA",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group/item flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-colors duration-200 cursor-default"
                  >
                    <CheckCircle2 
                      size={16} 
                      className="text-white/60 group-hover/item:text-white group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200 shrink-0" 
                    />
                    <span className="text-[var(--primary)]/85 group-hover/item:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </MotionFadeUpSection>

      {/* Corporate Detail Cards */}
      <MotionFadeLeftSection className="w-full flex justify-center">
        <AboutMeDetailsSection />
      </MotionFadeLeftSection>

      {/* ========================================================================= */}
      {/* SECTION 2: EXPLORE / SERVICES (BRUSHED OBSIDIAN SPOTLIGHT)                 */}
      {/* ========================================================================= */}
      <MotionFadeRightSection className="w-full flex flex-col items-center mt-12 sm:mt-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="py-1 px-6 border-x-[3px] font-bold border-black mb-3 uppercase tracking-widest text-xs sm:text-sm">
            Services & Value
          </div>

          <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-black/60 mt-1 max-w-md">
            Specialized engineering and design practices applied to every project
          </p>
        </div>

        {/* 3 Executive Service Cards: Brushed Obsidian Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {ExploreItems.map((item, index) => {
            const Icon = item.icon;

            // Tailored ambient aura glow per discipline
            const auraGlow = index === 0 
              ? "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, transparent 70%)" 
              : index === 1 
                ? "radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, transparent 70%)" 
                : "radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, transparent 70%)";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="w-full h-full"
              >
                <SpotlightCard
                  rounded="rounded-2xl"
                  className="w-full h-full shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  innerClassName="p-6 sm:p-7 flex flex-col justify-between min-h-[290px] text-[var(--primary)]"
                >
                  <div>
                    {/* Top Bar */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80 group-hover:text-white group-hover:bg-white/15 border border-white/15 transition-all duration-300">
                        {item.badge || `Service 0${index + 1}`}
                      </span>

                      {/* Levitation Icon Pod with Ambient Aura */}
                      <div className="relative">
                        {/* Ambient Aura Glow beneath */}
                        <div 
                          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-75 blur-xs transition-opacity duration-300 pointer-events-none"
                          style={{ background: auraGlow }}
                        />
                        
                        {/* Icon Pod with 3D levitation */}
                        <div className="relative w-11 h-11 bg-white text-black rounded-xl flex items-center justify-center shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-xl">
                          <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-black text-lg tracking-tight uppercase text-white mb-2.5 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--primary)]/80 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Architectural Link Detail with Spring-feel Arrow */}
                  <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-white/40 group-hover:text-white transition-colors duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-white">
                      Discipline 0{index + 1}
                    </span>
                    <div className="p-1 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300">
                      <ArrowUpRight 
                        size={16} 
                        className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-115 text-white/50 group-hover:text-white" 
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </MotionFadeRightSection>

    </div>
  );
}