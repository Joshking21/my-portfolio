"use client";
import { SkillDetails } from "@/app/lib/user.skillsData";
import { LearningDetails } from "@/app/lib/user.skillsData";
import Image from "next/image";
import MotionFadeInSection from "@/app/framerMotion/motion";

export default function Skills() {
  return (
    <MotionFadeInSection>
      <div className="justify-center items-center flex flex-col">
        <div className=" w-[40%]">
          <div className="pt-[1rem]">USING NOW:</div>
          <div className=" flex mt-[3rem]  flex-wrap justify-center items-center ">
            <SkillLiist Skills={SkillDetails} />
          </div>
        </div>

        <div className="w-[40%]">
          <div>LEARNING</div>
          <div className=" flex mt-[3rem]  flex-wrap justify-center items-center pl-[1rem]">
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
        <div key={item.PhotoText} className="mb-[3rem] mr-[3rem] ">
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
