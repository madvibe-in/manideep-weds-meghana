import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 42 },
  left: { x: -44 },
  right: { x: 44 },
  scale: { scale: 0.92, y: 18 }
};

// Scroll-triggered entrance used across every section.
// Works inside the internally-scrolling invitation stage because
// IntersectionObserver measures targets against the viewport.
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = ""
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x ?? 0, y: offset.y ?? 0, scale: offset.scale ?? 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
