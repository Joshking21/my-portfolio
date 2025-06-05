import { ProjectDetails } from "../../lib/userProject";
import Image from "next/image";
import Link from "next/link";

export default function Port() {
  return (
    <div className="w-full text-black flex  justify-center">
      {ProjectDetails.map((item, index) => (
        <div
          key={index}
          className="mb-[3rem] w-[30%] h-[400px]  bg-cover bg-[var(--primary)] bg-center bg-no-repeat flex "
          //   style={{backgroundImage:`url(${item.ProjectImage})` }}
        >
          <div className="w-full   text-left p-[1rem]">
            <div className=" font-bold text-[2rem]">{item.ProjectName}</div>

            <div className="border-solid boder-[5rem] p-[0.5rem] border-black mb-[1rem] ">
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
            <div className=" flex  justify-center ">
              <Link href={item.ProjectGitHubLink}>
                {" "}
                <Image
                  src="/Github.png"
                  alt="Github Logo"
                  width={30}
                  height={30}
                />
              </Link>

              <div className="w-[70%] border-solid border-l-[4px] border-r-[4px] border-[var(--primary)] flex justify-center text-center items-center">
                <Link href={item.ProjectLink}>PREVIEW</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
