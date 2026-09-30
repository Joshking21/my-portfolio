"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from "lucide-react";

import StackedPhoneCarousel from "./StackedPhoneCarousel";

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key & lock background scrolling
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window: Bold Inverted Matte Black */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative bg-[#121212] text-[var(--primary)] border border-white/20 rounded-2xl w-full max-w-3xl sm:max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl p-5 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-xl border border-white/20 hover:border-white hover:bg-white hover:text-black text-[var(--primary)] transition-all flex items-center justify-center cursor-pointer z-30 bg-black/60"
          >
            <X size={18} />
          </button>

          {/* Project Media Showcase: Stacked Phone Carousel or Classic Banner */}
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="mb-6 p-4 sm:p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
              <StackedPhoneCarousel
                screenshots={project.screenshots}
                projectName={project.projectName}
              />
            </div>
          ) : (
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-black mb-6">
              <Image
                src={project.projectImage}
                alt={project.projectName}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                  {project.projectContribution || "FULL-STACK ARCHITECTURE"}
                </span>
              </div>
            </div>
          )}

          {/* Header & Title */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  {project.projectName}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]/60 mt-0.5">
                  {project.role || "Lead Engineer & Architect"}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {project.projectGitHubLink && (
                  <Link
                    href={project.projectGitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--primary)]"
                  >
                    <Image src="/gitHubWhite.png" alt="GitHub" width={16} height={16} className="shrink-0" />
                    <span className="hidden sm:inline">Source</span>
                  </Link>
                )}

                {project.projectLink ? (
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white bg-white text-black hover:bg-transparent hover:text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Live Preview</span>
                    <ExternalLink size={14} />
                  </Link>
                ) : (
                  <span className="border border-white/20 text-white/40 px-3 py-2 rounded-xl text-xs font-bold uppercase cursor-not-allowed">
                    Internal Demo
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/50 mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--primary)]/90 font-normal">
              {project.overview || project.projectDetails}
            </p>
          </div>

          {/* Tech Stack Pills */}
          {project.techStack && (
            <div className="mb-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/50 mb-2.5 flex items-center gap-1.5">
                <Cpu size={14} />
                <span>Technologies & Architecture</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-[var(--primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features Section */}
          {project.features && (
            <div className="mb-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/50 mb-3 flex items-center gap-1.5">
                <Layers size={14} />
                <span>Key Features & Engineering Deliverables</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[var(--primary)]/90 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Notes */}
          {project.architecture && (
            <div className="pt-4 border-t border-white/10 flex items-start gap-2.5 text-xs text-[var(--primary)]/60 leading-relaxed">
              <span className="font-bold uppercase tracking-wider text-white shrink-0">System Architecture:</span>
              <span>{project.architecture}</span>
            </div>
          )}
        </motion.div>
      </div>
  );
}
