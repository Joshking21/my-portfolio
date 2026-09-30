"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function NumberCounter({
  from = 0,
  to = 10,
  duration = 2.2,
  delay = 0.2,
  suffix = "",
  prefix = "",
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let timeoutId;
    let animationFrame;

    timeoutId = setTimeout(() => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Smooth quadratic easeOut for steady, legible counting
        const ease = 1 - Math.pow(1 - progress, 2);
        const current = Math.floor(from + (to - from) * ease);
        setDisplayValue(current);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setDisplayValue(to);
        }
      };

      animationFrame = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
