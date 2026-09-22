"use client";

import { motion } from "framer-motion";

type RevealWordsProps = {
  text: string;
  className?: string;
  delay?: number;
};

/** Revela um título palavra por palavra ao entrar na tela. Uso pontual — não em todo texto. */
export default function RevealWords({ text, className, delay = 0 }: RevealWordsProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-[0.15em] mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px 0px -60px 0px" }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
