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

        <div className=" border-l-solid border-l-[2px] border-r-solid border-r-[2px] pl-[1rem] pr-[1rem] mt-[4rem] font-extrabold  ">
          EXPLORE
        </div>
        <div></div>
        <div className="flex mt-[3rem] lg:flex-row flex-col  pt-[6rem] mb-[6rem] border-t-solid border-t-[1px] border-b-solid border-b-[1px] ">
          {ExploreItems.map((el, i) => (
            <div key={el + i} className=" lg:mr-[3rem] pb-[4rem] mb-[3rem] ">
              <h1 className="font-bold">{el.title}</h1>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionFadeInSection>
  );
}
