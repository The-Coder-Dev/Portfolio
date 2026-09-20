"use client";

import { motion, Variants } from "motion/react";

interface HeroHeadingProps {
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroHeading({ className = "" }: HeroHeadingProps) {
  const wordsLine1 = ["I", "don't", "just", "write", "code."];
  const wordsLine2 = [
    { text: "I", isPrimary: true },
    { text: "build", isPrimary: true },
    { text: "software.", isPrimary: true },
  ];

  return (
    <motion.h1
      className={`md:text-8xl text-5xl md:max-w-5xl font-semibold text-foreground font-[manrope] leading-[1.13] flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {wordsLine1.map((word, index) => (
        <span key={`l1-${index}`} className="inline-block overflow-hidden py-1">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}

      {wordsLine2.map((item, index) => (
        <span key={`l2-${index}`} className="inline-block overflow-hidden py-1">
          <motion.span
            variants={wordVariants}
            className={`inline-block ${item.isPrimary ? "text-primary" : ""}`}
          >
            {item.text}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
