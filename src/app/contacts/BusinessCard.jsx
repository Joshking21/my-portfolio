"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { ContactDetails } from "../lib/userData";
import { SocialLinkWhite } from "../lib/userSkillsData";
import { typewriter, handwriting } from "../lib/fonts";

// Direct contacts as a business card (sibling of the staff ID badge),
// with a copy-email button and a "replies within 24 hours" sticky note.
const NOTE = "#fbeea0";

function Row({ icon: Icon, label, value, href, external, children }) {
  return (
    <div className="flex items-center gap-3 group">
      <span className="w-8 h-8 shrink-0 rounded-md bg-[#f7f5f0] text-[#1d1b17] flex items-center justify-center">
        <Icon size={15} />
      </span>
      <div className="min-w-0 flex-1">
        <div className={`${typewriter.className} text-[9px] tracking-[0.25em] text-white/45`}>{label}</div>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="block text-sm sm:text-[15px] font-semibold text-[#f7f5f0] truncate hover:underline underline-offset-4"
        >
          {value}
        </Link>
      </div>
      {children}
    </div>
  );
}

export default function BusinessCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(ContactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${ContactDetails.email}`;
    }
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 2 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ rotate: 0, y: -4 }}
        className="relative rounded-xl bg-[#1d1b17] text-[#f7f5f0] p-6 sm:p-7 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-black tracking-tight leading-none">JayBobo</div>
            <div className={`${typewriter.className} text-[10px] tracking-[0.25em] text-white/60 mt-2`}>FULL-STACK DEVELOPER</div>
          </div>
          <span className={`${typewriter.className} text-lg font-bold border-2 border-[#f7f5f0] px-1.5 leading-tight`}>JB</span>
        </div>

        <div className="border-t border-dashed border-white/20 my-5" />

        <div className="space-y-4">
          <Row icon={Mail} label="EMAIL" value={ContactDetails.email} href={`mailto:${ContactDetails.email}`}>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className={`${typewriter.className} shrink-0 flex items-center gap-1 text-[9px] font-bold tracking-widest px-2 py-1 rounded border border-white/25 hover:bg-white hover:text-[#1d1b17] transition-colors cursor-pointer`}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />} {copied ? "COPIED" : "COPY"}
            </button>
          </Row>
          <Row icon={MessageCircle} label="WHATSAPP" value={ContactDetails.phoneDisplay} href={ContactDetails.whatsapp} external>
            <ArrowUpRight size={15} className="text-white/40 group-hover:text-white transition-colors shrink-0" />
          </Row>
          <Row icon={Phone} label="CALL" value={ContactDetails.phoneDisplay} href={ContactDetails.phoneTel} />
        </div>

        <div className="border-t border-dashed border-white/20 my-5" />

        <div className="flex items-center justify-between">
          <span className={`${typewriter.className} flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-white/80`}>
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-green-500" />
            </span>
            OPEN TO NEW PROJECTS
          </span>
          <div className="flex items-center gap-3">
            {SocialLinkWhite.map((s) => (
              <Link key={s.link} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.alt.replace(" Logo", "")} className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src={s.photosource} alt="" width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Reply-time sticky note */}
      <div
        className={`${handwriting.className} absolute top-full -mt-3 left-6 w-44 p-3 pt-4 text-xl leading-tight shadow-md z-10`}
        style={{ background: NOTE, color: "#1d1b17", rotate: "-5deg" }}
      >
        I reply {ContactDetails.replyTime}. Promise.
      </div>
    </div>
  );
}
