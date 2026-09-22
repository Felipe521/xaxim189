import Reveal from "./Reveal";
import { buildWhatsAppLink, ctas, property } from "@/data/property";

export default function PriceSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-ink px-6 py-28 text-center">
      <Reveal>
        <p className="text-[12px] font-medium tracking-[0.34em] text-champagne uppercase">
          Seu próximo endereço
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 font-serif text-6xl text-white sm:text-7xl md:text-8xl">
          {property.priceLabel}
        </p>
      </Reveal>

      <Reveal delay={0.3} className="mt-12 flex flex-col items-center gap-5">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-champagne px-9 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-ink transition-colors duration-300 hover:bg-white"
        >
          {ctas.afterPrice}
        </a>
        <p className="max-w-sm text-sm leading-relaxed text-white/45">
          Entre em contato para conhecer o projeto e consultar as condições de pagamento.
        </p>
      </Reveal>
    </section>
  );
}
