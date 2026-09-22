import Image from "next/image";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import PhotoTag from "./PhotoTag";

export default function MasterSuite() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink md:items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/suite-master.jpg"
          alt="Suíte master do piso superior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <PhotoTag tone="dark" className="absolute right-6 top-24 z-10 md:right-10" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-0">
        <Reveal className="max-w-lg">
          <Eyebrow>Suíte master</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl italic leading-[1.15] text-white text-balance md:text-6xl">
            Seu espaço privado.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/65">
            Entre as três suítes do piso superior, a master reserva um espaço diferenciado —
            parte da área mais silenciosa e íntima da casa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
