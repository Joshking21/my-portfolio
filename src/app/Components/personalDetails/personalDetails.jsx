import Image from "next/image";
import { SocialLink } from "@/app/lib/userSkillsData";
import { ExploreItems } from "@/app/lib/userData";
import { MotionFadeLeftSection,MotionFadeRightSection, } from "@/app/framerMotion/motion";
import MotionFadeInSection from "@/app/framerMotion/motion";

export default function HomePersonalDetails() {
  return (
    <div className="flex pt-[4rem] ">
      <div className="w-1/2  flex flex-col items-center text-left pt-[2rem] text-[2rem] mt-[2rem]">
        <div className="mb-[6rem]">
          <MotionFadeLeftSection>
            <div className="mb-[2rem] font-semibold">Hi, <span className="font-bold">I</span> am</div>
          </MotionFadeLeftSection>
          <MotionFadeRightSection>
          <div className="font-bold text-[3rem]"> Joshua Oduoma</div>
          </MotionFadeRightSection>
          <MotionFadeLeftSection>
            <div className="font-semibold  font-sans text-[1rem]">
              Front-end Developer
            </div>
          </MotionFadeLeftSection>
        </div>
        <MotionFadeInSection>
        <div className="flex mb-[3rem]">
         <SocialImage SocialPhotos={SocialLink}/>
        </div>
        </MotionFadeInSection>
      </div>

      <div>
        <Image src="/" alt="alt" width={300} height={300} />
      </div>
    </div>
  );
}


export function SocialImage({SocialPhotos}){
  return(
    <>
  {SocialPhotos.map((item, index) => (
            <div key={index} className="mr-[1.5rem]">
              <Image
                className=""
                src={item.photosource}
                alt={item.alt}
                width={30}
                height={index === 0 ? 30 : 10}
              />
            </div>
          ))}
          </>
        )

}