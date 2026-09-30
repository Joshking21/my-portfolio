"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
  active = true,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current || !active) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        mass: 0.15,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
