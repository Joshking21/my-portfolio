import { ProjectDetails } from "../../lib/userProject";
import Image from "next/image";
import Link from "next/link";
import { MotionFadeRightSection } from "@/app/framerMotion/motion";

export default function Port() {
  return (
    <MotionFadeRightSection>
      <div className="w-full text-black flex  justify-center">
        {ProjectDetails.map((item, index) => (
          <div
            key={index}
            className="mb-[3rem] relative group w-[30%] h-[400px]   bg-[var(--primary)] flex hover:bg-black/50 mr-[3px] "
          >
            <div
              className="absolute inset-0 bg-cover w-full bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${item.ProjectImage})` }} 
            ></div>
              <div className=" absolute inset-0 bg-black opacity-0 group-hover:opacity-95  transition-opacity duration-1000 z-3 "></div>
                <div className="w-full relative z-10 text-[var(--primary)] text-left p-[1rem]">
                  <div className=" font-extrabold text-[2rem] text-black "
                  style={{
                    textShadow:"0 0 6px #ffffff"
                  }}>
                    {item.ProjectName}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out  " >

                  <div className="border-solid border-[2px] w-fit rounded-[10px] p-[0.5rem] border-[var(--primary)] mt-[1rem] font-semibold mb-[1rem] ">
                    {item.ProjectContribution}
                  </div>
                  <div className="mb-[1rem]">{item.ProjectDetails}</div>
                  <div className="flex mb-[3rem] ">
                    {item.ProjectLanguagesSource.map((icon, index) => (
                      <div key={index} className="w-[20%]">
                        <Image src={icon} alt="alt" width={30} height={30} />
                      </div>
                    ))}
                  </div>
                  <div className=" flex  justify-center   ">
                    <Link href={item.ProjectGitHubLink} className="">
                      {" "}
                      <Image
                        src="/Github.png"
                        alt="Github Logo"
                        width={30}
                        height={30}
                      />
                    </Link>

                    <div className="w-[50%] border-solid border-l-[4px] border-r-[4px] border-[var(--primary)] flex justify-center items center hover:opacity-70">
                      <Link href={item.ProjectLink} className="" >PREVIEW</Link>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
           
          
        ))}
      </div>
    </MotionFadeRightSection>
  );
}
