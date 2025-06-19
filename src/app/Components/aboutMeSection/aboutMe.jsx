import { AboutMeSection } from "@/app/lib/userData";
import { ExploreItems } from "@/app/lib/userData";
import AboutMeDetailsSection from "./aboutMeDetails";
import MotionFadeInSection from "@/app/framerMotion/motion";
import { Code, Wrench, Users } from 'lucide-react';
export default function AboutMe() {
  return (
    <MotionFadeInSection>
      <div id="aboutMe" className="flex   flex-col bg-[var(--primary)] items-center text-center ">
      
       <div className="flex flex-col items-center text-center ">
        <div className=" p-[0.3rem] pl-[1.5rem] pr-[1.5rem] border-solid border-[3px] mt-[2rem] mb-[3rem]">
          {AboutMeSection.AboutTitle}
        </div>
        <div className=" text-left   w-[80%] ">
            I've been a Front-end Developer for over <span className="font-bold">2 years</span>, honing my skills in crafting seamless and engaging web experiences. At <span className="font-bold">20 years old</span>, I’m currently a 400-level Computer Science student at the Federal University of Texhnology Owerri, FUTO, where I deepen my understanding of computing fundamentals and software development.

My expertise spans core Frontend Technologies such as:
<br></br>
<br></br>
<span className="text-left">
          -HTML5, CSS3, and JavaScript (ES6+) for building solid, accessible foundations.
<br></br>

-Modern libraries and frameworks including React, Next.js, and Tailwind CSS to develop scalable and performant user interfaces.
<br></br>
-Animation libraries like Framer Motion and AOS to add fluid, interactive elements that bring sites to life.
</span>
<br></br>
<br></br>
I’m passionate about writing clean, maintainable code and always stay updated with the latest industry trends to deliver modern, responsive websites. Some of my favorite projects include dynamic portfolios, interactive dashboards, and mobile-friendly apps that blend design and functionality.
        </div>
        </div>
        

       
        
        <AboutMeDetailsSection />

        <div className=" border-l-solid border-l-[2px] border-r-solid border-r-[2px] px-[1rem]  my-[4rem]  font-extrabold  ">
          EXPLORE
        </div>
        
        <div className="flex my-[2rem] lg:flex-row flex-col  px-[4rem] pb-[6rem]  border-b-solid border-b-[1px]  lg:items-center lg:justify-center lg:gap-10  ">
          {ExploreItems.map((el, i) => (
           <div className="flex flex-col lg:mr-[0rem] lg:w-[30%] pb-[4rem] lg:pb-[1rem] mb-[3rem] lg:h-[70%] ">
            <div className=" flex items-center justify-center">
            {
              i===0? <Code className="text-[var(--primary)] bg-black w-15  rounded-[50%] h-15 p-2" />:
               i===1? <Wrench className="text-[var(--primary)] bg-black w-15  rounded-[50%] h-15 p-2" />:
                i===2? <Users className="text-[var(--primary)] bg-black w-15  rounded-[50%] h-15 p-2" />:""

            }
            </div>
            <div key={el + i} className=" ">
              <h1 className="font-bold">{el.title}</h1>
              <p>{el.desc}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </MotionFadeInSection>
  );
}
