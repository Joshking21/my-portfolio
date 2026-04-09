"use client";
import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorTooltip({ children, text }) {
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothen the movement (Spring effect)
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Offset the text so it doesn't sit directly under the cursor
    mouseX.set(e.clientX + 15);
    mouseY.set(e.clientY + 15);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-block"
    >
      {/* The Icon/Link */}
      {children}

      {/* The Floating Text */}
      {isHovered && (
        <motion.div
          style={{
            position: "fixed",
            left: x,
            top: y,
            pointerEvents: "none", // Critical: prevents the tooltip from flickering
            zIndex: 50,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-3 py-1 bg-black text-white text-xs rounded-full shadow-xl border border-white/20 whitespace-nowrap font-itim"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}