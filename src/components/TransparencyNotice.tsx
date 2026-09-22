import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const notes = [
  {
    index: "01",
    text: "As imagens deste site são fotos reais do imóvel, registradas durante a obra — têm caráter ilustrativo do andamento da construção, e não do resultado final.",
  },
  {
    index: "02",
    text: "Móveis, decoração e acabamentos específicos que venham a ser incorporados não fazem parte do valor final do imóvel.",
  },
];

export default function TransparencyNotice() {
  return (
    <section className="border-y border-ink/10 bg-cream px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <Eyebrow>Antes de visitar</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
          {notes.map((note, i) => (
            <Reveal key={note.index} delay={i * 0.1}>
              <p className="font-serif text-xl text-ink/25">{note.index}</p>
              <p className="mt-3 text-base leading-relaxed text-graphite">{note.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
