"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Cpu, Layers, Send, User } from "lucide-react";
import CursorTooltip from "../cursor";

export default function Navigation() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
        setIsOpen(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-sm z-50 border-b border-black/5 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex justify-between items-center">
        <Link href="#homepage" className="font-black text-2xl tracking-tighter">
          JB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {NavLinks.map((item, index) => {
            const Icon = item.icons;
            return (
              <Link key={index} href={item.link} className="hover:opacity-50 transition-opacity">
                <CursorTooltip text={item.linkDetails}>
                  <Icon size={24} strokeWidth={2.5} />
                </CursorTooltip>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <XButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <div
        className={`absolute top-16 left-0 w-full bg-white border-b-2 border-black transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-4">
          {NavLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="font-bold text-lg uppercase tracking-widest hover:line-through"
            >
              {item.linkDetails}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function XButton({ isOpen, setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center w-8 h-8">
      <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"}`}></span>
      <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? "opacity-0" : "opacity-100 mb-1.5"}`}></span>
      <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
    </button>
  );
}

const NavLinks = [
  { link: "#aboutMe", linkDetails: "About", icons: User },
  { link: "#skills", linkDetails: "Skills", icons: Cpu },
  { link: "#portfolio", linkDetails: "Works", icons: Layers },
  { link: "#contact", linkDetails: "Contact", icons: Send },
];