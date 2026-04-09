"use client";
import { SkillDetails, LearningDetails } from "@/app/lib/userSkillsData";
import Image from "next/image";
import MotionFadeInSection from "@/app/framerMotion/motion";

export default function Skills() {
  return (
    <MotionFadeInSection>
      <div id="skills" className="flex flex-col items-center justify-center py-20 bg-[var(--primary)]">
        
        {/* USING NOW SECTION */}
        <div className="w-full lg:w-[60%] px-4">
          <h2 className="text-center font-bold tracking-widest border-b-2 border-black w-fit mx-auto pb-1 mb-12">
            USING NOW
          </h2>
          <div className="flex flex-wrap justify-center items-center group">
            <SkillList items={SkillDetails} isLearning={false} />
          </div>
        </div>

        {/* SPACING DIVIDER */}
        <div className="my-10" />

        {/* LEARNING SECTION */}
        <div className="w-full lg:w-[60%] px-4">
          <h2 className="text-center font-bold tracking-widest border-b-2 border-black w-fit mx-auto pb-1 mb-12">
            LEARNING
          </h2>
          <div className="flex flex-wrap justify-center items-center group">
            <SkillList items={LearningDetails} isLearning={true} />
          </div>
        </div>
        
      </div>
    </MotionFadeInSection>
  );
}

function SkillList({ items, isLearning }) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.PhotoText}
          className={`
            flex flex-col items-center justify-center 
            mb-12 mx-4 sm:mx-6 cursor-pointer transition-all duration-500 ease-in-out
            
            /* Desktop Hover Logic */
            lg:group-hover:opacity-40 lg:hover:!opacity-100 lg:hover:-translate-y-3 lg:hover:scale-110
            
            /* Mobile Touch Logic */
            active:scale-95 active:opacity-100
          `}
        >
          <div className={`
            relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-3 
            ${isLearning ? "grayscale md:hover:grayscale-0 transition-all duration-500" : ""}
            /* On mobile, we might want learning skills to be slightly less gray so they are readable */
            max-md:grayscale-[50%]
          `}>
            <Image
              src={item.PhotoSource}
              alt={item.PhotoText}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[10px] md:text-xs font-bold tracking-tighter uppercase">
            {item.PhotoText}
          </p>
        </div>
      ))}
    </>
  );
}