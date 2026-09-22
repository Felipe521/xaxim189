"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "span";
};

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: easeOut },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
