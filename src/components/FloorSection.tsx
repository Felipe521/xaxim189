import Image from "next/image";
import Reveal from "./Reveal";
import PhotoTag from "./PhotoTag";
import type { PropertyImage } from "@/data/property";

type FloorSectionProps = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: [PropertyImage, PropertyImage];
  tone?: "light" | "dark";
  reverse?: boolean;
  highlight?: { title: string; text: string };
};

export default function FloorSection({
  id,
  index,
  title,
  subtitle,
  description,
  features,
  images,
  tone = "light",
  reverse = false,
  highlight,
}: FloorSectionProps) {
  const isDark = tone === "dark";
  const [main, secondary] = images;

  return (
    <section
      id={id}
      className={`px-6 py-24 md:px-10 md:py-32 ${isDark ? "bg-graphite" : "bg-cream"}`}
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 md:grid-cols-12 md:gap-10">
        <div
          className={`md:col-span-5 ${reverse ? "md:order-2" : ""} ${
            reverse ? "md:col-start-8" : ""
          }`}
        >
          <Reveal>
            <span
              className={`font-serif text-7xl leading-none ${
                isDark ? "text-white/10" : "text-ink/8"
              }`}
            >
              {index}
            </span>
            <p
              className={`mt-2 text-[11px] font-medium tracking-[0.3em] uppercase ${
                isDark ? "text-champagne" : "text-champagne"
              }`}
            >
              {subtitle}
            </p>
            <h2
              className={`mt-3 font-serif text-3xl leading-[1.15] text-balance md:text-4xl ${
                isDark ? "text-white" : "text-ink"
              }`}
            >
              {title}
            </h2>
            <p className={`mt-6 max-w-md text-base leading-relaxed ${isDark ? "text-white/60" : "text-stone"}`}>
              {description}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 border-t pt-3 text-sm md:text-base ${
                    isDark ? "border-white/10 text-white/80" : "border-ink/10 text-graphite"
                  }`}
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-champagne" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>

            {highlight && (
              <div
                className={`mt-9 border-l-2 border-champagne pl-5 ${
                  isDark ? "text-white/70" : "text-graphite"
                }`}
              >
                <p className="font-serif text-xl italic text-balance">{highlight.title}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{highlight.text}</p>
              </div>
            )}
          </Reveal>
        </div>

        <div className={`md:col-span-6 ${reverse ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={main.src}
                  alt={main.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                />
                <PhotoTag tone="dark" className="absolute bottom-4 left-4" />
              </div>
              <div className="relative z-10 -mt-14 ml-auto w-2/3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:w-1/2">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={secondary.src}
                    alt={secondary.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
