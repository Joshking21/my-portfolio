import { WorkExperienceDetails } from "@/app/lib/User.Project";

export default function WorkExp() {
  return (
    <div className="translate-x-[100%] absolute w-full bg-amber-800 text-left p-[3px] pl-[3px] ">
      {WorkExperienceDetails.map((item, index) => (
        <div key={index} className="w-[100%] lg:w-[40%]  p-[6px] ">
          <div className="lg:flex">
            <div className="font-bold  ">{item.ExperienceTime}</div>

            <div className="lg:border-l-solid lg:border-l-[2px] lg:border-l-white lg:ml-[5px]  ">
              <div className="pl-[1rem] ">
                <div className="font-bold text-[1.5rem] ">
                  {item.ExperienceName}
                </div>
                <div className="p-[0.2rem] border-[var(--primary] border-solid border-[2px] rounded-[7px] inline-block ">
                  {item.ExperiencePlace}
                </div>
                <div>{item.ExperienceDetails}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
