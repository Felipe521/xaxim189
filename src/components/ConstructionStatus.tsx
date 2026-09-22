"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { property } from "@/data/property";

export default function ConstructionStatus() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <Eyebrow className="justify-center">Status da obra</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl leading-[1.1] text-white md:text-7xl">
            Na reta final.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="mx-auto h-[3px] w-full max-w-lg overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-champagne"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: property.construction.max / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <p className="mt-6 font-serif text-3xl text-champagne md:text-4xl">
            {property.construction.display}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            {property.construction.status}. {property.construction.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
