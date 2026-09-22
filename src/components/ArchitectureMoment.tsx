import Image from "next/image";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import PhotoTag from "./PhotoTag";

export default function ArchitectureMoment() {
  return (
    <section id="arquitetura" className="bg-ink">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 md:px-16 md:py-0">
          <Reveal>
            <Eyebrow>Arquitetura</Eyebrow>
            <h2 className="mt-6 max-w-md font-serif text-4xl leading-[1.15] text-white text-balance md:text-5xl">
              Verticalidade com propósito.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">
              A circulação entre os pavimentos ganha luz natural por um amplo vão envidraçado —
              um detalhe que acompanha a casa do térreo ao piso superior.
            </p>
          </Reveal>
        </div>

        <div className="relative h-[60vh] md:h-screen">
          <Image
            src="/images/circulacao-vertical-luz.jpg"
            alt="Vão de escada com luz natural e pé-direito duplo"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent md:bg-gradient-to-r md:from-ink/30 md:via-transparent md:to-transparent" />
          <PhotoTag tone="dark" className="absolute bottom-5 right-5" />
        </div>
      </div>
    </section>
  );
}
