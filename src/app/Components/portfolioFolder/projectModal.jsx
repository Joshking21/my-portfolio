"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { syne, typewriter, handwriting } from "@/app/lib/fonts";

// The case study as an opened dossier.
// Desktop: a closed manila folder appears, its cover swings open on the spine
// (the inside of the cover becomes the EVIDENCE page) revealing the typed
// CASE REPORT on the right. Phones: pages stack (title first), no 3D.
const MANILA_BACK = "#cdbb93";
const MANILA = "#e6d7b2";
const MANILA_INSIDE = "#efe4c6"; // lighter inside of the cover
const PAPER = "#f7f5f0";
const INK = "#1d1b17";
const STAMP = "#a3241b";
const NOTE = "#fbeea0";

// ---------- helpers ----------
function exhibitsFor(project) {
  if (project.gallery?.length) return project.gallery;
  if (project.screenshots?.length) return project.screenshots.map((s) => ({ ...s, kind: "phone" }));
  return [{ src: project.projectImage, caption: "Cover", kind: "web" }];
}

function useIsDesktop() {
  const [desk, setDesk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesk(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return desk;
}

function Paperclip({ className = "" }) {
  return (
    <svg viewBox="0 0 24 60" className={`w-5 h-12 drop-shadow ${className}`} aria-hidden="true">
      <path d="M8 44 V12 a5 5 0 0 1 10 0 V48 a8 8 0 0 1 -16 0 V18" fill="none" stroke="#9ca3af" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function Stamp({ children, rotate = -10, className = "" }) {
  return (
    <span
      className={`${typewriter.className} inline-block px-2.5 py-0.5 border-[3px] rounded text-sm font-bold tracking-[0.2em] opacity-85 mix-blend-multiply ${className}`}
      style={{ color: STAMP, borderColor: STAMP, rotate: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}

// ---------- Evidence page (inside of the cover) ----------
function Evidence({ project, index, setIndex }) {
  const items = exhibitsFor(project);
  const item = items[index];
  const many = items.length > 1;
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="relative h-full flex flex-col p-5 sm:p-7" style={{ color: INK }}>
      <div className={`${typewriter.className} flex items-center justify-between text-[10px] tracking-[0.3em] opacity-70`}>
        <span>EVIDENCE</span>
        <span>{items.length} EXHIBIT{items.length > 1 ? "S" : ""} ATTACHED</span>
      </div>

      {/* The current print */}
      <div className="relative flex-1 min-h-[260px] flex items-center justify-center my-4">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.button
            key={item.src}
            type="button"
            onClick={many ? next : undefined}
            aria-label={many ? "Next exhibit" : item.caption}
            initial={{ x: 60, rotate: 6, opacity: 0 }}
            animate={{ x: 0, rotate: index % 2 ? 1.5 : -1.5, opacity: 1 }}
            exit={{ x: -60, rotate: -8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className={`relative bg-white p-2.5 pb-9 shadow-[0_10px_25px_rgba(0,0,0,0.25)] ${many ? "cursor-pointer" : "cursor-default"} ${
              item.kind === "phone" ? "h-[88%] max-h-[520px] aspect-[9/18]" : "w-[94%] aspect-[16/10.5]"
            }`}
          >
            <Paperclip className="absolute -top-6 left-6 z-10" />
            <span className="relative block w-full h-full overflow-hidden bg-neutral-200">
              <Image
                src={item.src}
                alt={`${project.projectName}: ${item.caption || "screenshot"}`}
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover object-top"
                priority
              />
            </span>
            <span className={`${handwriting.className} absolute bottom-1.5 left-3 right-3 text-lg leading-tight text-left truncate`} style={{ color: INK }}>
              {item.caption}
            </span>
          </motion.button>
        </AnimatePresence>
      </div>

      {many && (
        <div className={`${typewriter.className} flex items-center justify-center gap-4 text-[11px] tracking-widest`}>
          <button type="button" onClick={prev} aria-label="Previous exhibit" className="p-1.5 rounded border-2 hover:bg-black/10 transition-colors" style={{ borderColor: INK }}>
            <ChevronLeft size={14} />
          </button>
          <span>
            EXHIBIT {String.fromCharCode(65 + index)} · {index + 1}/{items.length}
          </span>
          <button type="button" onClick={next} aria-label="Next exhibit" className="p-1.5 rounded border-2 hover:bg-black/10 transition-colors" style={{ borderColor: INK }}>
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- Report: header block ----------
function ReportHeader({ project, fileNo, titleId }) {
  const name = project.projectName.replace(/\s*\(.*\)\s*/, "");
  const isLive = Boolean(project.projectLink);
  const fields = [
    ["CLIENT", project.client],
    ["ROLE", project.role || project.projectContribution],
    ["YEAR", project.year],
    ["STATUS", project.status || (isLive ? "Live" : "Case study")],
  ].filter(([, v]) => v);

  return (
    <div className="relative px-6 sm:px-8 pt-7 pb-5" style={{ color: INK }}>
      <div className={`${typewriter.className} text-[10px] tracking-[0.3em] opacity-60`}>CASE REPORT · FILE No.{fileNo}</div>
      <h2 id={titleId} className="text-3xl sm:text-4xl font-black tracking-tight leading-none mt-2 pr-24">
        {name}
      </h2>
      {isLive && <Stamp className="absolute top-12 sm:top-7 right-6 sm:right-8">LIVE</Stamp>}

      <dl className={`${typewriter.className} grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[11px] mt-5 border-y-2 py-3`} style={{ borderColor: INK }}>
        {fields.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="opacity-55 tracking-widest">{k}</dt>
            <dd className="font-bold uppercase">{v}</dd>
          </div>
        ))}
      </dl>

      {(project.projectLink || project.projectGitHubLink) && (
        <div className="flex flex-wrap gap-3 mt-4">
          {project.projectLink && (
            <Link
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${typewriter.className} text-[11px] font-bold tracking-widest flex items-center gap-1.5 px-3 py-1.5 rounded border-2 bg-[#1d1b17] text-[#f7f5f0] hover:bg-transparent hover:text-[#1d1b17] transition-colors`}
              style={{ borderColor: INK }}
            >
              VISIT LIVE SITE <ArrowUpRight size={14} />
            </Link>
          )}
          {project.projectGitHubLink && (
            <Link
              href={project.projectGitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${typewriter.className} text-[11px] font-bold tracking-widest flex items-center gap-1.5 px-3 py-1.5 rounded border-2 hover:bg-[#1d1b17] hover:text-[#f7f5f0] transition-colors`}
              style={{ borderColor: INK }}
            >
              VIEW SOURCE <ArrowUpRight size={14} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

// ---------- Report: body ----------
function Section({ title, children }) {
  return (
    <section className="mt-6 first:mt-0">
      <h3 className={`${typewriter.className} text-[11px] font-bold tracking-[0.3em] mb-2`}>{title}</h3>
      {children}
    </section>
  );
}

function ReportBody({ project }) {
  return (
    <div className="relative px-6 sm:px-8 pb-8 pt-1" style={{ color: INK }}>
      {project.note && (
        <div
          className={`${handwriting.className} float-right ml-4 mb-3 w-40 sm:w-44 p-3 pt-4 text-xl leading-tight shadow-md`}
          style={{ background: NOTE, rotate: "2.5deg" }}
        >
          {project.note}
        </div>
      )}

      <Section title="THE BRIEF">
        <p className="text-[15px] leading-relaxed opacity-90">{project.brief || project.overview || project.projectDetails}</p>
      </Section>

      {project.features?.length > 0 && (
        <Section title="WHAT I BUILT">
          <ul className="space-y-2 clear-right">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className={`${typewriter.className} text-[11px] font-bold opacity-50 pt-0.5 shrink-0`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="opacity-90">{f}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.techStack?.length > 0 && (
        <Section title="TOOLS USED">
          <p className={`${typewriter.className} text-xs leading-loose`}>
            {project.techStack.map((t, i) => (
              <span key={t}>
                <span className="font-bold border-b border-dotted" style={{ borderColor: `${INK}66` }}>{t}</span>
                {i < project.techStack.length - 1 && <span className="opacity-40"> · </span>}
              </span>
            ))}
          </p>
        </Section>
      )}

      {project.architecture && (
        <Section title="HOW IT WORKS">
          <p className="text-sm leading-relaxed opacity-80">{project.architecture}</p>
        </Section>
      )}

      {project.outcome && (
        <Section title="OUTCOME">
          <p className="text-[15px] font-semibold leading-relaxed">{project.outcome}</p>
        </Section>
      )}

      <div className={`${typewriter.className} flex justify-between items-end mt-8 pt-4 border-t border-dashed text-[10px] tracking-widest opacity-60`} style={{ borderColor: `${INK}55` }}>
        <span>END OF REPORT</span>
        <span className={`${handwriting.className} text-2xl tracking-normal opacity-100 normal-case`}>JayBobo</span>
      </div>
    </div>
  );
}

// ---------- Closed cover (front face, desktop opening animation) ----------
function CoverFront({ project, fileNo }) {
  const name = project.projectName.replace(/\s*\(.*\)\s*/, "");
  return (
    <div className="absolute inset-0 rounded-r-xl shadow-2xl flex flex-col justify-center items-center" style={{ background: MANILA, color: INK, backfaceVisibility: "hidden" }}>
      <div className={`${typewriter.className} border-2 px-6 py-4 text-center bg-[#f7f5f0]/60`} style={{ borderColor: INK }}>
        <div className="text-[10px] tracking-[0.35em] opacity-60">CASE FILE</div>
        <div className="text-2xl font-bold tracking-[0.15em] mt-1">No.{fileNo}</div>
        <div className="text-xs tracking-[0.2em] mt-2">{name.toUpperCase()}</div>
      </div>
      {project.projectLink && <Stamp className="mt-6" rotate={-14}>LIVE</Stamp>}
    </div>
  );
}

// ---------- Main ----------
export default function ProjectModal({ project, fileNo = "001", onClose }) {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const [exhibit, setExhibit] = useState(0);
  const [coverOpen, setCoverOpen] = useState(false); // cover animation finished
  const closeRef = useRef(null);
  const titleId = "dossier-title";

  // Reset per project
  useEffect(() => {
    setExhibit(0);
    setCoverOpen(false);
  }, [project]);

  // Esc to close, arrows flip exhibits, lock page scroll, focus close button
  useEffect(() => {
    if (!project) return;
    const count = exhibitsFor(project).length;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setExhibit((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setExhibit((i) => (i - 1 + count) % count);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [project, onClose]);

  if (!project || typeof document === "undefined") return null;

  const animateCover = isDesktop && !reduceMotion;
  const showLeftPage = !animateCover || coverOpen;

  const closeBtn = (
    <button
      ref={closeRef}
      type="button"
      onClick={onClose}
      aria-label="Close case file"
      // Phones: a tab sitting on top of the folder; desktop: overlaps the top edge
      className={`${typewriter.className} absolute z-40 top-0 right-4 lg:-top-4 lg:right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg lg:rounded-lg text-[11px] font-bold tracking-widest lg:shadow-md hover:brightness-95 cursor-pointer`}
      style={{ background: MANILA_BACK, color: INK }}
    >
      CLOSE FILE <X size={14} />
    </button>
  );

  return createPortal(
    <div className={`${syne.className} fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6`} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      {/* Backdrop */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* The folder */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="relative z-10 w-full max-w-6xl pt-[30px] lg:pt-0"
      >
        {closeBtn}

        {/* Back board of the folder */}
        <div
          className="relative rounded-xl rounded-tr-none lg:rounded-tr-xl p-2.5 sm:p-3 shadow-2xl max-h-[calc(92vh-30px)] overflow-y-auto lg:max-h-none lg:overflow-visible lg:h-[min(86vh,780px)]"
          style={{ background: MANILA_BACK, perspective: 4200 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_minmax(0,1fr)] lg:h-full gap-y-3 lg:gap-y-0 lg:gap-x-3">
            {/* Report header (mobile: first) */}
            <div className="lg:col-start-2 lg:row-start-1 rounded-t-lg lg:rounded-b-none rounded-b-lg" style={{ background: PAPER }}>
              <ReportHeader project={project} fileNo={fileNo} titleId={titleId} />
            </div>

            {/* Evidence = inside of the cover (mobile: second) */}
            <div
              className="lg:col-start-1 lg:row-start-1 lg:row-span-2 rounded-lg min-h-[420px] lg:min-h-0 transition-opacity duration-150"
              style={{ background: MANILA_INSIDE, opacity: showLeftPage ? 1 : 0 }}
            >
              <Evidence project={project} index={exhibit} setIndex={setExhibit} />
            </div>

            {/* Report body (mobile: third) — scrolls on desktop */}
            <div className="lg:col-start-2 lg:row-start-2 rounded-b-lg lg:rounded-t-none rounded-t-lg lg:overflow-y-auto lg:min-h-0" style={{ background: PAPER }}>
              <ReportBody project={project} />
            </div>
          </div>

          {/* Desktop: the cover swings open on the spine */}
          {animateCover && !coverOpen && (
            <motion.div
              className="absolute top-2.5 bottom-2.5 sm:top-3 sm:bottom-3 left-1/2 right-2.5 sm:right-3 z-30"
              style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.6, 0.05, 0.25, 1] }}
              onAnimationComplete={() => setCoverOpen(true)}
            >
              <CoverFront project={project} fileNo={fileNo} />
              {/* Back of the cover (becomes the evidence page) */}
              <div
                className="absolute inset-0 rounded-l-xl"
                style={{ background: MANILA_INSIDE, transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
