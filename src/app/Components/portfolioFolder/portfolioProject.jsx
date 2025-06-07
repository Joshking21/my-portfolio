import { ProjectDetails } from "../../lib/userProject";
import Image from "next/image";
import Link from "next/link";
import { MotionFadeRightSection } from "@/app/framerMotion/motion";

export default function Port({isActive}) {
  return (
    <MotionFadeRightSection>
      <div  className={` w-full lg:flex-row flex-col text-black flex  justify-center ${isActive? "-translate-x-[100%]": "translate-x-[0%]" } transition-transform duration-2000 ease-in-out  `}>
        {ProjectDetails.map((item, index) => (
          <div
            key={index}
            className="mb-[3rem] relative group lg:w-[30%] lg:h-[400px] h-fit lg:bg-[var(--primary)] lg:border-none border-t-[var(--primary)] border-t-[1px] flex flex-row hover:bg-black/50 mr-[3px] "
          >
            <div
              className="lg:inline hidden absolute inset-0 bg-cover w-full bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${item.ProjectImage})` }} 
            ></div>
              <div className=" lg:absolute inset-0 bg-black lg:opacity-0 lg:group-hover:opacity-95 lg:transition-opacity lg:duration-1000 z-3 "></div>
                <div className="w-full  relative z-10 text-[var(--primary)] text-left p-[1rem] lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 lg:ease-in-out ">
                  <div className=" font-extrabold text-[2rem] text-[var(--primary)]  "
                  style={{
                    // textShadow:"0 0 6px #ffffff"
                  }}>
                    {item.ProjectName}
                  </div>
                  <div className=" " >

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
                    <Link href={item.ProjectGitHubLink} className="hover:opacity-70  w-[30%] flex items-center justify-center">
                      {" "}
                      <Image
                        src="/gitHubWhite.png"
                        alt="gitHubWhite Logo"
                        width={30}
                        height={30}
                      />
                    </Link>

                    <div className="w-[50%]  border-solid border-l-[4px] border-r-[4px] border-[var(--primary)] flex justify-center items center hover:opacity-70">
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
