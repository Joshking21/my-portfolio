'use client'
import { WorkExperienceDetails } from "../../lib/userProject";

export default function WorkExp({isActive}) {
  return (
   
    <div className={`translate-x-[0%] absolute w-full text-[var(--primary)] text-left p-[3px] pl-[3px] ${isActive? "translate-x-[0%]": "translate-x-[100%]" } transition-transform duration-2000 ease-in-out z-59 `}>
      {WorkExperienceDetails.map((item, index) => (
        <div key={index} className="w-[100%] lg:w-[40%]  p-[6px] ">
          <div className="lg:flex">
            <div className="font-bold  mb-[1rem] lg:mb-[0rem]  ">{item.ExperienceTime}</div>

            <div className="lg:border-l-solid lg:border-l-[2px] lg:border-l-white border-t-[0.5px] border-t-solid lg:border-t-none lg:ml-[5px]  ">
              <div className="pl-[1rem] ">
                <div className="font-bold text-[1.5rem] mb-[1.5rem] ">
                  {item.ExperienceName}
                </div>
                <div className="p-[0.2rem] border-[var(--primary] border-solid border-[2px] rounded-[7px] inline-block mb-[1.5rem]">
                  {item.ExperiencePlace}
                </div>
                <div>{item.ExperienceDetails}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
       {console.log(isActive)}
    </div>
  );
}
