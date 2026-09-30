"use client";
import Image from "next/image";
import Link from "next/link";
import { SocialLink } from "@/app/lib/userSkillsData";
import { MotionFadeLeftSection, MotionFadeRightSection, MotionFadeDownSection } from "@/app/framerMotion/motion";
import MotionFadeInSection from "@/app/framerMotion/motion";
import { useState, useEffect } from "react";
import { Itim } from "next/font/google";
import { FileUser, MessageSquare } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import TiltCard from "../ui/TiltCard";

const itim = Itim({ weight: "400", subsets: ["latin"] });

export default function HomePersonalDetails() {
  return (
    <div
      className="flex flex-col lg:flex-row min-h-screen justify-center lg:justify-between items-center px-4 sm:px-10 lg:px-24 pt-24 pb-10 gap-10"
      id="homepage"
    >
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
        <div className="flex flex-col mb-6">
          <MotionFadeLeftSection>
            <div className="text-xl md:text-3xl font-medium mb-2">
              Hi, <span className="font-bold underline decoration-black decoration-2 md:decoration-4">I</span> am
            </div>
          </MotionFadeLeftSection>

          <MotionFadeRightSection>
            <div className={`font-bold text-6xl sm:text-7xl lg:text-9xl tracking-tighter leading-none ${itim.className}`}>
              JayBobo
            </div>
          </MotionFadeRightSection>

          <MotionFadeLeftSection>
            <div className="h-12 mt-4 text-lg md:text-3xl font-mono text-gray-600">
              <Typewriter />
            </div>
          </MotionFadeLeftSection>
        </div>

        {/* Value Proposition Statement */}
        <MotionFadeLeftSection>
          <p className="max-w-md lg:max-w-lg text-sm sm:text-base text-black/75 font-medium leading-relaxed mb-8">
            Helping businesses, founders, and professionals bring their work online with modern, scalable, and high-performance web &amp; mobile solutions.
          </p>
        </MotionFadeLeftSection>

        {/* Action Buttons with Magnetic Pull */}
        <MotionFadeInSection>
          <div className="flex flex-col xs:flex-row gap-4 md:gap-8 mb-10 w-full sm:w-auto">
            <Magnetic strength={0.3}>
              <Link
                href="/my-cv.pdf"
                target="_blank"
                className="border-x-[3px] border-black px-6 py-2 font-bold text-xs md:text-sm tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 uppercase"
              >
                <FileUser size={18} /> View CV
              </Link>
            </Magnetic>

            <Magnetic strength={0.3}>
              <Link
                href="https://wa.me/234913117107"
                className="border-x-[3px] border-black px-6 py-2 font-bold text-xs md:text-sm tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 uppercase"
              >
                <MessageSquare size={18} /> Contact Me
              </Link>
            </Magnetic>
          </div>
        </MotionFadeInSection>

        <MotionFadeDownSection>
          <SocialImage SocialPhotos={SocialLink} />
        </MotionFadeDownSection>
      </div>

      {/* Hero Image Section with 3D Parallax Tilt */}
      <MotionFadeRightSection>
        <TiltCard maxTilt={8} scaleOnHover={1.03} className="rounded-3xl">
          <div className="relative w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
            <Image
              src="/mine.PNG" 
              alt="JayBobo Hero"
              fill
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 350px, 450px"
              className="object-cover object-top rounded-3xl md:grayscale md:hover:grayscale-0 transition-all duration-700 shadow-2xl"
              priority 
            />
          </div>
        </TiltCard>
      </MotionFadeRightSection>
    </div>
  );
}

export function SocialImage({ SocialPhotos = [] }) {
  return (
    <div className="flex items-center gap-6">
      {SocialPhotos.map((item, index) => (
        <Magnetic key={index} strength={0.4}>
          <Link href={item.link} target="_blank" className="hover:-translate-y-1 transition-transform inline-block p-1">
            <Image src={item.photosource} alt="social" width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
          </Link>
        </Magnetic>
      ))}
    </div>
  );
}

// ... Typewriter Logic stays exactly as you had it ...
function Typewriter() {
  const roles = ["Full-stack Developer", "Front-end Developer", "Mobile Developer", "Web Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // Which word
  const [displayedText, setDisplayedText] = useState(""); // The typed letters
  const [isDeleting, setIsDeleting] = useState(false); // Is it currently clearing?
  const [charIndex, setCharIndex] = useState(0); // Which letter

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    // Speed logic: faster when deleting, slower when typing
    const typingSpeed = isDeleting ? 75 : 150;
    const pauseDelay = 2000;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentFullText.length) {
        // 1. TYPING: Add a character
        setDisplayedText((prev) => prev + currentFullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // 2. DELETING: Remove a character
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        // 3. FINISHED TYPING: Pause, then start deleting
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && charIndex === 0) {
        // 4. FINISHED DELETING: Move to next word, stop deleting
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="font-mono text-2xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
