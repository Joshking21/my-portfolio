'use client'
import Image from "next/image";
import Link from "next/link";
import { SocialLink } from "@/app/lib/userSkillsData";
import { ExploreItems } from "@/app/lib/userData";
import { MotionFadeLeftSection,MotionFadeRightSection, } from "@/app/framerMotion/motion";
import MotionFadeInSection from "@/app/framerMotion/motion";
import{useState, useEffect} from 'react';




 function Typewriter() {
  const text = 'Front-end Developer';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingDelay = 150; // milliseconds between each letter
    const pauseDelay = 2000; // pause before restarting

    let timer;

    if (index < text.length) {
      // Add next character
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingDelay);
    } else {
      // Pause, then reset
      timer = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, pauseDelay);
    }

    return () => clearTimeout(timer);
  }, [index, text]);

  return(
    <div>
    {displayedText}
    </div>
  )
 }



export default function HomePersonalDetails() {
  return (
    <div className="flex h-full lg:flex-row flex-col-reverse lg:pt-[4rem] ">
      
      <div className="lg:w-1/2 h-[30%] p-[1.5rem] flex lg:flex-col items-center text-left justify-between lg:pt-[2rem] text-[2rem] lg:mt-[2rem] ">
        <div className="lg:mb-[6rem] ">
          <MotionFadeLeftSection>
            <div className="lg:mb-[2rem] font-semibold">Hi, <span className="font-bold">I</span> am</div>
          </MotionFadeLeftSection>
          <MotionFadeRightSection>
          <div className="font-bold lg:text-[3rem]"> Joshua Oduoma</div>
          </MotionFadeRightSection>
          <MotionFadeLeftSection>
            <div className="lg:font-semibold h-[1.5rem] font-sans  text-[1rem]">
              <Typewriter/>
            </div>
          
          </MotionFadeLeftSection>
        </div>
        <MotionFadeInSection>
        <div className="flex lg:mb-[3rem] flex-col  lg:flex-row ">
         <SocialImage SocialPhotos={SocialLink}/>
        </div>
        </MotionFadeInSection>
      </div>

      <div className="h-[70%] ">
        <Image src="/" alt="alt" width={400} height={400} />
      </div>
    </div>
  );
}


export function SocialImage({SocialPhotos=[] }){
  return(
    <>
  {SocialPhotos.map((item, index) => (
            <div key={index} className="lg:ml-[0.8rem] h-fit  lg:mr-[0.8rem] ">
              <Link href={item.link}>
              <Image
                className="hover:opacity-70  mb-[1rem] transition-opacity duration-500 ease-in-out "
                src={item.photosource}
                alt={item.alt}
                width={30}
                height={index === 0 ? 30 : 10}
              />
              </Link>
            </div>
          ))}
          



          </>
        )

}