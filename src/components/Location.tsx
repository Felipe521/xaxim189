import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { property } from "@/data/property";

export default function Location() {
  const query = encodeURIComponent(`${property.address}, ${property.neighborhood}, ${property.city} - ${property.state}`);

  return (
    <section id="localizacao" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>Localização</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink text-balance md:text-5xl">
              {property.neighborhood}
              <span className="block text-stone">{property.city} — {property.state}</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-stone">
              {property.address}
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden grayscale transition-[filter] duration-700 hover:grayscale-0 md:aspect-[16/10]">
              <iframe
                title={`Mapa — ${property.address}`}
                src={`https://www.google.com/maps?q=${query}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
