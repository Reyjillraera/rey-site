"use client";
import { motion, useScroll, useReducedMotion } from "motion/react";
export default function Line() {
  const { scrollYProgress } = useScroll();
  const still = useReducedMotion();
  return (
    <svg className="line" viewBox="0 0 30 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <motion.path d="M15 0 C28 120 2 220 15 340 S28 560 15 680 S2 880 15 1000" fill="none" stroke="#9a5a1a" strokeWidth="1.5" vectorEffect="non-scaling-stroke" style={{ pathLength: still ? 1 : scrollYProgress }} />
    </svg>
  );
}
