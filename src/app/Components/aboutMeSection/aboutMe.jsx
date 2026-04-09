"use client";
import { AboutMeSection, ExploreItems } from "@/app/lib/userData";
import AboutMeDetailsSection from "./aboutMeDetails";
import MotionFadeInSection from "@/app/framerMotion/motion";

export default function AboutMe() {
  return (
    <MotionFadeInSection>
      <div id="aboutMe" className="flex flex-col bg-[var(--primary)] items-center py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header & Bio */}
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl w-full text-center">
          <h2 className="font-bold px-4 md:px-6 border-x-[3px] border-black uppercase tracking-widest text-lg md:text-xl">
            {AboutMeSection.AboutTitle}
          </h2>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
            <p className="px-2">
              I&apos;ve been a Front-end Developer for over{" "}
              <span className="font-bold text-black underline decoration-2 underline-offset-4 text-xl md:text-2xl">2 years</span>, 
              honing my skills in crafting seamless web experiences. At{" "}
              <span className="font-bold text-black text-xl md:text-2xl">21 years old</span>, 
              I’m currently a final-year Computer Science student at FUTO.
            </p>

            <div className="bg-black/5 p-4 md:p-6 rounded-lg text-left w-full overflow-hidden">
              <p className="font-bold mb-3 text-sm md:text-base">My expertise includes:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                <li className="flex gap-2"><span>•</span> HTML5, CSS3, & JS (ES6+)</li>
                <li className="flex gap-2"><span>•</span> React, Next.js, & React Native</li>
                <li className="flex gap-2"><span>•</span> Tailwind CSS & ShadCn UI</li>
                <li className="flex gap-2"><span>•</span> Framer Motion & AOS</li>
              </ul>
            </div>
          </div>
        </div>

        <AboutMeDetailsSection />

        {/* Explore Section */}
        <div className="border-x-[3px] border-black px-4 my-10 md:my-16 font-extrabold tracking-widest text-sm md:text-base">
          EXPLORE
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl w-full px-4 border-b border-black/10 pb-10">
          {ExploreItems.map((el, i) => {
            const Icon = el.icon;
            return (
              <div key={i} className="flex flex-col items-center lg:items-start group">
                <div className="mb-4 md:mb-6 relative">
                  <Icon className="relative z-10 text-[var(--primary)] bg-black w-12 h-12 md:w-14 md:h-14 rounded-full p-3 transition-all duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-2 md:gap-3 text-center lg:text-left">
                  <h3 className="font-bold text-lg md:text-xl tracking-tight uppercase">{el.title}</h3>
                  <p className="text-xs md:text-sm opacity-80 leading-relaxed">{el.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionFadeInSection>
  );
}