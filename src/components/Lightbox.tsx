"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { PropertyImage } from "@/data/property";
import { ArrowIcon, CloseIcon } from "./icons";
import PhotoTag from "./PhotoTag";

type LightboxProps = {
  images: PropertyImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const isOpen = index !== null;
  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      onNavigate(((next % total) + total) % total);
    },
    [onNavigate, total]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) goTo(index + 1);
      if (e.key === "ArrowLeft" && index !== null) goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, index, goTo, onClose]);

  if (index === null) return null;
  const current = images[index];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/97 backdrop-blur-sm"
          onClick={onClose}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) goTo(delta > 0 ? index - 1 : index + 1);
            touchStartX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-5 py-5 md:px-8">
            <PhotoTag tone="dark" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar galeria"
              className="text-cream/80 transition-colors hover:text-cream"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(index - 1);
              }}
              aria-label="Imagem anterior"
              className="absolute left-2 z-10 hidden h-11 w-11 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream md:flex"
            >
              <ArrowIcon direction="left" className="h-6 w-6" />
            </button>

            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[70vh] w-full max-w-5xl md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(index + 1);
              }}
              aria-label="Próxima imagem"
              className="absolute right-2 z-10 hidden h-11 w-11 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream md:flex"
            >
              <ArrowIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center justify-center pb-8">
            <span className="text-[11px] tracking-[0.2em] text-cream/50">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
