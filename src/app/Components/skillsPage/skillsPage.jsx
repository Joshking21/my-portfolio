"use client";
import { SkillDetails } from "@/app/lib/userSkillsData";
import { LearningDetails } from "@/app/lib/userSkillsData";
import Image from "next/image";
import MotionFadeInSection from "@/app/framerMotion/motion";

export default function Skills() {
  return (
    <MotionFadeInSection>
      <div id="skills" className="justify-center items-center flex flex-col">
        <div className=" lg:w-[40%]">
          <div className="pt-[1rem]  font-semibold">USING NOW:</div>
          <div className=" flex mt-[3rem]  text-center flex-wrap justify-center items-center  ">
            <SkillLiist Skills={SkillDetails} />
          </div>
        </div>

        <div className="lg:w-[40%] font-semibold">
          <div>LEARNING:</div>
          <div className=" flex mt-[3rem] flex-wrap justify-center items-center pl-[1rem]">
            <SkillLiist Skills={LearningDetails} />
          </div>
        </div>
      </div>
    </MotionFadeInSection>
  );
}

function SkillLiist({ Skills }) {
  return (
    <>
      {Skills.map((item, index) => (
        <div key={item.PhotoText} className="mb-[3rem]  mr-[1.5rem] ml-[1.5rem] ">
          <Image
            src={item.PhotoSource}
            alt={item.PhotoSource}
            width={60}
            height={60}
          />
          <div className="text-center">{item.PhotoText}</div>
        </div>
      ))}
    </>
  );
}
