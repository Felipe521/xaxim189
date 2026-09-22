import Image from "next/image";
import Reveal from "./Reveal";
import RevealWords from "./RevealWords";
import { buildWhatsAppLink } from "@/data/property";

export default function EmotionalSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="absolute inset-0">
        <Image
          src="/images/fachada-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <h2 className="font-serif text-4xl leading-[1.2] text-white text-balance md:text-6xl">
          <RevealWords text="Imagine chegar em casa." />
        </h2>
        <h2 className="mt-3 font-serif text-4xl italic leading-[1.2] text-champagne text-balance md:text-6xl">
          <RevealWords text="Agora imagine que ela é sua." delay={0.35} />
        </h2>

        <Reveal delay={0.9} className="mt-10">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/50 px-8 py-4 text-[11px] font-medium tracking-[0.2em] uppercase text-white transition-colors duration-300 hover:border-champagne hover:text-champagne"
          >
            Quero saber mais
          </a>
        </Reveal>
      </div>
    </section>
  );
}
