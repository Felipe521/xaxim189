"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/property";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import Lightbox from "./Lightbox";

// col-span / row-span por imagem, na mesma ordem de galleryImages — curadoria manual
// pensada para a orientação real de cada foto (evita esticar ou cortar em excesso).
const layout = [
  { col: 4, row: 2 }, // fachada
  { col: 2, row: 1 }, // hall + escada
  { col: 2, row: 1 }, // living
  { col: 2, row: 2 }, // lavabo térreo
  { col: 2, row: 2 }, // circulação vertical (luz)
  { col: 3, row: 1 }, // circulação vertical (detalhe)
  { col: 3, row: 2 }, // suíte master
  { col: 3, row: 1 }, // suíte superior a
  { col: 3, row: 1 }, // suíte superior b
  { col: 2, row: 2 }, // corredor superior
  { col: 2, row: 2 }, // banheiro suíte a
  { col: 2, row: 1 }, // banheiro suíte b
  { col: 2, row: 1 }, // banheiro suíte c
  { col: 2, row: 2 }, // banheiro suíte d
  { col: 2, row: 1 }, // detalhe banheiro a
  { col: 2, row: 1 }, // detalhe banheiro b
  { col: 4, row: 2 }, // escada subsolo
  { col: 2, row: 2 }, // corredor passagem
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="ambientes" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-12 md:mb-16">
          <Eyebrow>Galeria</Eyebrow>
          <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.15] text-ink text-balance md:text-5xl">
            Um percurso pela casa, ambiente a ambiente.
          </h2>
        </Reveal>

        {/* Desktop / tablet — mosaico editorial */}
        <div className="hidden auto-rows-[130px] grid-cols-6 gap-3 md:grid md:auto-rows-[150px] md:gap-4 [grid-auto-flow:dense]">
          {galleryImages.map((image, i) => {
            const span = layout[i] ?? { col: 2, row: 1 };
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative overflow-hidden bg-graphite/5"
                style={{ gridColumn: `span ${span.col}`, gridRow: `span ${span.row}` }}
                aria-label={`Ampliar imagem: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              </button>
            );
          })}
        </div>

        {/* Mobile — carrossel com swipe */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:hidden">
          {galleryImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative w-[74vw] flex-none snap-center overflow-hidden ${
                image.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
              aria-label={`Ampliar imagem: ${image.alt}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="74vw" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
