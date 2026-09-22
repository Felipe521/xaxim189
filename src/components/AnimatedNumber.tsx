"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  className?: string;
};

export default function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Margem só vertical: com inset também nas laterais, itens de ponta em telas
  // estreitas (ex.: coluna esquerda de uma grade 2 colunas) nunca cruzam a
  // interseção e o número trava em 0.
  const inView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  return (
    <span className={className} ref={ref}>
      {display}
    </span>
  );
}
