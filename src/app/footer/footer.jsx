import Link from "next/link";
import Image from "next/image";
import { SocialLinkWhite } from "../lib/userSkillsData";
import { SocialImage } from "../Components/personalDetails/personalDetails";
import { MotionFadeUpSection } from "../framerMotion/motion";
import Magnetic from "../Components/ui/Magnetic";

export default function Footer() {
  return (
    <footer className="bg-black overflow-hidden">
      <MotionFadeUpSection className="flex flex-col justify-center items-center text-[var(--primary)] text-[0.7rem] pb-4">
            <div className="mt-[1.5rem] hover:opacity-70 transition-opacity duration-500 ease-in-out flex justify-center items-center">
                <Magnetic strength={0.3}>
                  <Link href="#homepage" className="flex w-full items-center flex-col">
                      <Image src="/up.png" alt="up" width={10} height={10} />
                      <p>BACK TO THE TOP</p>
                  </Link>
                </Magnetic>
            </div>
            <div className="flex mt-[1rem] gap-3 mb-[1rem]">
<SocialImage SocialPhotos={SocialLinkWhite}/>
            </div>
            <div>
                 &copy; 2026 <span className="font-extrabold">J.BOBO</span> All rights reserved.
            </div>

      </MotionFadeUpSection>
    </footer>
  );
}