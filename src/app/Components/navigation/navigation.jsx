"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Cpu, Layers, Send, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import CursorTooltip from "../cursor";
import Magnetic from "../ui/Magnetic";

export default function Navigation() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
        setIsOpen(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled 
          ? "bg-[var(--primary)]/50 backdrop-blur-md border-b border-black/10 shadow-xs" 
          : "bg-[var(--primary)]/15 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex justify-between items-center">
        {/* Corporate Monogram Brand */}
        <Link 
          href="#homepage" 
          className="group flex items-center gap-2 font-bold tracking-tight text-black"
        >
          <span className="font-extrabold text-xl sm:text-2xl tracking-tighter">
            JB
          </span>
          <span className="h-4 w-px bg-black/20" />
          <span className="text-[11px] uppercase tracking-widest text-black/60 group-hover:text-black transition-colors font-medium hidden sm:inline">
            Full-Stack Dev
          </span>
        </Link>

        {/* Corporate Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NavLinks.map((item, index) => {
            const Icon = item.icons;
            return (
              <Link
                key={index}
                href={item.link}
                className="group relative flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/70 hover:text-black transition-colors duration-200 py-1"
              >
                <CursorTooltip text={item.linkDetails}>
                  <span className="flex items-center gap-1.5">
                    <Icon size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{item.linkDetails}</span>
                  </span>
                </CursorTooltip>
                {/* Sleek corporate underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        {/* Right Corporate CTA with Magnetic Pull */}
        <div className="hidden md:flex items-center">
          <Magnetic strength={0.25}>
            <Link
              href="#contact"
              className="border-x-2 border-black px-5 py-2 font-bold text-xs uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight size={14} />
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <CorporateBurger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Corporate Minimalist Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[var(--primary)] border-b border-black/15 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-8 flex flex-col gap-5">
          {NavLinks.map((item, index) => {
            const Icon = item.icons;
            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-semibold uppercase tracking-widest text-black/80 hover:text-black border-b border-black/5"
              >
                <span className="flex items-center gap-3">
                  <Icon size={16} />
                  <span>{item.linkDetails}</span>
                </span>
                <ArrowUpRight size={14} className="opacity-40" />
              </Link>
            );
          })}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center border-x-2 border-black py-2.5 font-bold text-xs uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>

      {/* Razor-thin 1.5px Scroll-Linked Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black origin-left z-20 pointer-events-none"
      />
    </header>
  );
}

function CorporateBurger({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Navigation"
      className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-hidden cursor-pointer"
    >
      <span
        className={`h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
        }`}
      />
      <span
        className={`h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "opacity-0" : "w-4 self-end"
        }`}
      />
      <span
        className={`h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
        }`}
      />
    </button>
  );
}

const NavLinks = [
  { link: "#aboutMe", linkDetails: "About", icons: User },
  { link: "#skills", linkDetails: "Skills", icons: Cpu },
  { link: "#portfolio", linkDetails: "Portfolio", icons: Layers },
  { link: "#contact", linkDetails: "Contact", icons: Send },
];