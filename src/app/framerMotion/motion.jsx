'use client';
import { motion } from 'framer-motion';

const directionOffsets = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

export function MotionSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  amount = 0.15,
  className = '',
}) {
  const offset = directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade in from bottom moving up (default)
export default function MotionFadeInSection({ children, delay = 0, amount = 0.15, className = '' }) {
  return (
    <MotionSection direction="up" delay={delay} amount={amount} className={className}>
      {children}
    </MotionSection>
  );
}

export function MotionFadeUpSection({ children, delay = 0, amount = 0.15, className = '' }) {
  return (
    <MotionSection direction="up" delay={delay} amount={amount} className={className}>
      {children}
    </MotionSection>
  );
}

// Fade in from top moving down
export function MotionFadeDownSection({ children, delay = 0, amount = 0.15, className = '' }) {
  return (
    <MotionSection direction="down" delay={delay} amount={amount} className={className}>
      {children}
    </MotionSection>
  );
}

// Fade in from left moving right
export function MotionFadeLeftSection({ children, delay = 0, amount = 0.15, className = '' }) {
  return (
    <MotionSection direction="left" delay={delay} amount={amount} className={className}>
      {children}
    </MotionSection>
  );
}

// Fade in from right moving left
export function MotionFadeRightSection({ children, delay = 0, amount = 0.15, className = '' }) {
  return (
    <MotionSection direction="right" delay={delay} amount={amount} className={className}>
      {children}
    </MotionSection>
  );
}