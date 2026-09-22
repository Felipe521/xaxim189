import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { WhatsAppIcon } from "./icons";
import { buildWhatsAppLink, ctas, property } from "@/data/property";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <Reveal>
          <Eyebrow className="justify-center">Contato</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-ink text-balance md:text-5xl">
            Um endereço para chamar de seu.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
            Fale com {property.contact.name} e conheça de perto cada detalhe deste projeto.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-4">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-ink px-9 py-4 text-[11px] font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-graphite"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {ctas.final}
          </a>
          <p className="text-sm tracking-[0.05em] text-stone">
            {property.contact.name} · {property.contact.phoneDisplay}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
