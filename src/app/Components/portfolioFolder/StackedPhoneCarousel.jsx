"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

export default function StackedPhoneCarousel({ screenshots = [], projectName = "Mobile App" }) {
  // Initialize deck with index references so items maintain identity across cycles
  const [deck, setDeck] = useState(() => screenshots.map((item, idx) => ({ ...item, originalIndex: idx })));
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [justSwoopedKey, setJustSwoopedKey] = useState(null);

  // Sync if screenshots prop changes
  useEffect(() => {
    setDeck(screenshots.map((item, idx) => ({ ...item, originalIndex: idx })));
  }, [screenshots]);

  const total = deck.length;

  // The core action: Take the last one at the back, swoop it to the front, and repeat!
  const bringBackToFront = useCallback(() => {
    if (total <= 1) return;
    setDeck((prev) => {
      const lastIndex = prev.length - 1;
      const backCard = prev[lastIndex];
      setJustSwoopedKey(backCard.src);
      return [backCard, ...prev.slice(0, lastIndex)];
    });
  }, [total]);

  // Reverse action: send front card back
  const sendFrontToBack = useCallback(() => {
    if (total <= 1) return;
    setDeck((prev) => {
      const frontCard = prev[0];
      setJustSwoopedKey(null);
      return [...prev.slice(1), frontCard];
    });
  }, [total]);

  // Jump directly to a specific screenshot
  const jumpToIndex = useCallback((targetOriginalIndex) => {
    setDeck((prev) => {
      const idxInCurrentDeck = prev.findIndex((item) => item.originalIndex === targetOriginalIndex);
      if (idxInCurrentDeck === -1 || idxInCurrentDeck === 0) return prev;
      setJustSwoopedKey(prev[idxInCurrentDeck].src);
      return [...prev.slice(idxInCurrentDeck), ...prev.slice(0, idxInCurrentDeck)];
    });
  }, []);

  // Auto-play loop every 3.2 seconds
  useEffect(() => {
    if (!isPlaying || isHovered || total <= 1) return;
    const timer = setInterval(() => {
      bringBackToFront();
    }, 3200);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, bringBackToFront, total]);

  if (!screenshots || total === 0) return null;

  // Active front item is deck[0]
  const currentItem = deck[0];
  const activeDotIndex = currentItem.originalIndex;

  // Visible stack shows up to 3 cards (Front: depth 0, Middle: depth 1, Back: depth 2)
  const visibleCards = deck.slice(0, Math.min(3, total)).map((item, depth) => ({
    ...item,
    depth,
  }));

  return (
    <div
      className="w-full flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Controls Header */}
      <div className="w-full flex items-center justify-between mb-3 px-1 sm:px-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-md text-white border border-white/10">
            <Sparkles size={12} className="text-white" />
            <span>Interactive Screen Stack</span>
          </span>
          <span className="text-[11px] font-semibold text-white/70">
            Screen {activeDotIndex + 1} of {total}
          </span>
        </div>

        {/* Controls: Play/Pause, Prev, Next */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
            title={isPlaying ? "Pause auto-loop" : "Resume auto-loop"}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          </button>
          <button
            onClick={sendFrontToBack}
            aria-label="Previous screen"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={bringBackToFront}
            aria-label="Next screen (bring back card to front)"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* 3D Stack Stage Container */}
      <div className="relative w-full h-[510px] sm:h-[550px] flex items-center justify-center overflow-visible py-4 my-1">
        {/* Render visible cards in reverse so front card (depth 0) sits naturally on top in DOM */}
        {visibleCards
          .slice()
          .reverse()
          .map((card) => {
            const isFront = card.depth === 0;
            const isMiddle = card.depth === 1;
            const isBack = card.depth === 2;
            const isSwooping = card.src === justSwoopedKey && isFront;

            // Physical Stack Config
            // Depth 0 (Front): y = 0, scale = 1, zIndex = 30, opacity = 1, rotate = 0
            // Depth 1 (Middle): y = -18, scale = 0.93, zIndex = 20, opacity = 0.78, rotate = 1.5deg
            // Depth 2 (Back): y = -36, scale = 0.86, zIndex = 10, opacity = 0.50, rotate = -2deg
            const depthStyles = {
              0: { y: 0, scale: 1, zIndex: isSwooping ? 40 : 30, opacity: 1, rotate: 0 },
              1: { y: -18, scale: 0.93, zIndex: 20, opacity: 0.78, rotate: 1.5 },
              2: { y: -36, scale: 0.86, zIndex: 10, opacity: 0.50, rotate: -2 },
            }[card.depth];

            return (
              <motion.div
                key={card.src}
                layout
                initial={
                  isSwooping
                    ? {
                        y: -55,
                        scale: 0.88,
                        rotate: -4,
                        opacity: 0.6,
                        zIndex: 40,
                      }
                    : false
                }
                animate={{
                  y: depthStyles.y,
                  scale: depthStyles.scale,
                  zIndex: depthStyles.zIndex,
                  opacity: depthStyles.opacity,
                  rotate: depthStyles.rotate,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (!isFront) {
                    jumpToIndex(card.originalIndex);
                  } else {
                    bringBackToFront();
                  }
                }}
                className={`absolute w-[225px] sm:w-[245px] h-[480px] sm:h-[520px] cursor-pointer origin-bottom transition-shadow duration-300 ${
                  isFront ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]" : "shadow-xl"
                }`}
                style={{
                  zIndex: depthStyles.zIndex,
                }}
              >
                {/* Smartphone Device Frame */}
                <div className="relative w-full h-full rounded-[2.5rem] p-[6px] bg-[#141414] border-[4px] border-zinc-700/80 shadow-2xl overflow-hidden flex flex-col">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-40 flex items-center justify-end pr-1.5 shadow-sm pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700/50" />
                  </div>

                  {/* Inner Phone Screen Display */}
                  <div className="relative w-full h-full rounded-[2.1rem] overflow-hidden bg-black flex items-center justify-center">
                    <Image
                      src={card.src}
                      alt={card.caption || `${projectName} screenshot`}
                      fill
                      sizes="(max-width: 640px) 225px, 245px"
                      className="object-contain object-center select-none pointer-events-none"
                      priority={isFront}
                    />

                    {/* Glass glare highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-70" />

                    {/* Subtle bottom shadow overlay */}
                    {isFront && (
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                    )}
                  </div>
                </div>

                {/* Depth Darkener on Cards Behind Front */}
                {!isFront && (
                  <div className="absolute inset-0 rounded-[2.5rem] bg-black/40 backdrop-brightness-90 transition-opacity pointer-events-none" />
                )}
              </motion.div>
            );
          })}
      </div>

      {/* Screen Caption Banner */}
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-center mt-2 mb-3">
        <p className="text-xs sm:text-sm font-semibold text-white tracking-wide">
          {currentItem?.caption || `${projectName} - Screen ${activeDotIndex + 1}`}
        </p>
      </div>

      {/* Clickable Pagination Dots */}
      <div className="flex items-center gap-2 mt-1">
        {screenshots.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => jumpToIndex(dotIdx)}
            aria-label={`Jump to screen ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              dotIdx === activeDotIndex
                ? "w-7 h-2 bg-white"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
