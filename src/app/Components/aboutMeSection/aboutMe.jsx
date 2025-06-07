import { AboutMeSection } from "@/app/lib/userData";
import { ExploreItems } from "@/app/lib/userData";
import AboutMeDetailsSection from "./aboutMeDetails";
import MotionFadeInSection from "@/app/framerMotion/motion";
export default function AboutMe() {
  return (
    <MotionFadeInSection>
      <div id="aboutMe" className="flex   flex-col bg-[var(--primary)] items-center text-center ">
        <div className=" p-[0.3rem] pl-[1.5rem] pr-[1.5rem] border-solid border-[3px] mt-[2rem] mb-[3rem]">
          {AboutMeSection.AboutTitle}
        </div>
        <div className=" mainClass text-centre  lg:w-1/2 w-[70%] ">
          {AboutMeSection.AboutDesc}
        </div>
        <AboutMeDetailsSection />

        <div className=" border-l-solid border-l-[2px] border-r-solid border-r-[2px] pl-[1rem] pr-[1rem] my-[4rem]  font-extrabold  ">
          EXPLORE
        </div>
        
        <div className="flex my-[2rem] lg:flex-row flex-col  px-[6rem] pb-[6rem]  border-b-solid border-b-[1px]  lg:items-center lg:justify-center lg:gap-10 ">
          {ExploreItems.map((el, i) => (
            <div key={el + i} className=" lg:mr-[0rem] lg:w-[30%] pb-[4rem] lg:pb-[0rem] lg:h-fit mb-[3rem] ">
              <h1 className="font-bold">{el.title}</h1>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionFadeInSection>
  );
}
