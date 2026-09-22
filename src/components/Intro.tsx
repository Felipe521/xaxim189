import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { property } from "@/data/property";

export default function Intro() {
  return (
    <section id="imovel" className="bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>O imóvel</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink text-balance md:text-5xl">
              Arquitetura pensada para a vida real.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-graphite md:text-xl">
              Descubra um sobrado de {property.area}m² no {property.neighborhood}, desenvolvido
              para combinar conforto, integração e funcionalidade em uma planta distribuída em
              três pavimentos.
            </p>
            <p className="mt-6 text-base leading-relaxed text-stone">
              Um projeto que combina design inteligente e espaço para toda a família, pensado
              para acompanhar diferentes momentos da vida — da convivência no térreo à
              privacidade do piso superior.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
