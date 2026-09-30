"use client";
import { motion } from "framer-motion";
import { AboutMeDetails } from "@/app/lib/userData";
import { Globe, Flag, User, Code } from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";

const detailIcons = [Globe, Flag, User, Code];

export default function AboutMeDetailsSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl px-4 my-8">
      {AboutMeDetails.map((item, index) => {
        const Icon = detailIcons[index % detailIcons.length];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="w-full h-full"
          >
            <SpotlightCard
              rounded="rounded-xl"
              className="w-full h-full shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 select-none"
              innerClassName="p-3.5 sm:p-4 flex flex-col items-center text-center text-[var(--primary)]"
            >
              <div className="flex items-center gap-1.5 mb-1.5 text-white/50 group-hover:text-white/80 transition-colors">
                <Icon size={14} />
                <span className="font-bold uppercase text-[9px] sm:text-[10px] tracking-widest">
                  {item.title}
                </span>
              </div>
              <span className="font-black text-xs sm:text-sm text-white">
                {Array.isArray(item.desc) ? item.desc.join(", ") : item.desc}
              </span>
            </SpotlightCard>
          </motion.div>
        );
      })}
    </div>
  );
}