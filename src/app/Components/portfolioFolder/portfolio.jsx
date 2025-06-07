"use client";
import Image from "next/image";
import Link from "next/link";
import MotionFadeInSection from "../../framerMotion/motion";
import { useState } from "react";
import WorkExp from "./portfolioWorkExperience";
import Port from "./portfolioProject";

export default function Portfolio() {
  const [isActive, setIsActive] = useState(false);

  return (
    <MotionFadeInSection>
      <div
        id="portfolio"
        className="flex  flex-col bg-[var(--primary)] items-center text-center "
      >
        <div className="border-solid border-[2px] pt-[0.2rem] pb-[0.2rem] pl-[2rem] pr-[2rem]  border-black mt-[3rem] mb-[3rem] ">
          PORTFOLIO
        </div>

        <div className="bg-black text-[var(--primary)] w-full  flex justify-center flex-col items-center ">
          <div className="flex mb-[3rem] mt-[1.5rem]  w-full justify-center items-center">
            <button
              onClick={() => setIsActive(false)}
              className={`pr-[2rem] pl-[2rem]  border-b-white border-b-solid ${
                isActive
                  ? "border-b-[1px] font-normal "
                  : " border-b-[3px] font-extrabold  "
              } `}
            >
              PROJECTS
            </button>
            <button
              onClick={() => setIsActive(true)}
              className={`pr-[2rem] pl-[2rem]  border-b-white border-b-solid ${
                isActive
                  ? "border-b-[3px] font-extrabold"
                  : " border-b-[1px] font-normal "
              } `}
            >
              WORK EXPERIENCE
            </button>
          </div>

          <div className="flex w-full relative overflow-hidden">
            <Port isActive={isActive} />
            <WorkExp isActive={isActive} />
          </div>
        </div>
      </div>
    </MotionFadeInSection>
  );
}
