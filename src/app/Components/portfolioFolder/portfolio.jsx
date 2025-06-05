import Image from "next/image"
import Link from "next/link"
import MotionFadeInSection from "../../Framer-Motion/Motion";

import WorkExp from "./portfolioWorkExperience"
import Port from "./portfolioProject"
export default function Portfolio(){
    return(
<MotionFadeInSection>
        <div className="flex   flex-col bg-[var(--primary)] items-center text-center ">
            <div className="border-solid border-[2px] pt-[0.2rem] pb-[0.2rem] pl-[2rem] pr-[2rem]  border-black mt-[3rem] mb-[3rem]">
                PORTFOLIO
            </div>

<div className="bg-black text-[var(--primary)] w-full  flex justify-center flex-col items-center ">



            <div className="flex mb-[3rem] mt-[1.5rem]  w-full justify-center items-center">
            <div className=" pr-[2rem] pl-[2rem] border-b-solid border-b-[1px] border-b-white ">
                WORK EXPERIENCE
            </div>
             <div className=" pr-[2rem] pl-[2rem] border-b-solid border-b-[1px] border-b-white ">
               PROJECTS
            </div>
            </div>



<div className="flex w-full relative overflow-hidden">
<Port/>
<WorkExp/>

</div>

            </div>
        </div>
        </MotionFadeInSection>
    )
}