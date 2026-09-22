"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { buildWhatsAppLink, ctas, property } from "@/data/property";
import PhotoTag from "./PhotoTag";

const easeOut = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: `${property.area} m²`, label: "área privativa" },
  { value: `${property.suites} suítes`, label: "" },
  { value: `${property.parkingSpots} vagas`, label: "" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/fachada-hero.jpg"
          alt="Fachada do sobrado no Xaxim, Curitiba"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent" />
      </div>

      <PhotoTag tone="dark" className="absolute right-5 top-20 md:right-8 md:top-24 z-10" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pb-28 md:px-10 md:pb-16">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
          className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] text-champagne uppercase"
        >
          <span className="h-px w-8 bg-champagne/70" aria-hidden />
          {property.neighborhood} — {property.city}
        </motion.span>

        <h1 className="max-w-4xl font-serif text-[2.6rem] leading-[1.05] text-white text-balance sm:text-6xl md:text-7xl">
          <motion.span
            className="block overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: easeOut }}
          >
            <span className="block">Um novo endereço.</span>
          </motion.span>
          <motion.span
            className="block overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: easeOut }}
          >
            <span className="block italic text-champagne">Uma nova experiência de morar.</span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/90"
        >
          {stats.map((stat, i) => (
            <span key={stat.value} className="flex items-center gap-6">
              <span className="text-sm font-medium tracking-[0.08em] uppercase">
                {stat.value}
              </span>
              {i < stats.length - 1 && <span className="h-4 w-px bg-white/30" aria-hidden />}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25, ease: easeOut }}
          className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[11px] tracking-[0.22em] text-white/60 uppercase">A partir de</p>
            <p className="font-serif text-2xl text-white sm:text-3xl">{property.priceLabel}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-champagne px-7 py-4 text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-ink transition-colors duration-300 hover:bg-white"
            >
              {ctas.hero}
            </a>
            <a
              href="#imovel"
              className="border border-white/50 px-7 py-4 text-center text-[11px] font-medium tracking-[0.2em] uppercase text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              {ctas.heroSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden
      >
        <span className="h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="block h-full w-full bg-white"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
