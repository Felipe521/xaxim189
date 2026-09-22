import AnimatedNumber from "./AnimatedNumber";
import Reveal from "./Reveal";
import { property } from "@/data/property";

const stats = [
  { value: property.area, suffix: "", unit: "m²" },
  { value: property.suites, suffix: "", unit: "suítes" },
  { value: property.parkingSpots, suffix: "", unit: "vagas" },
  { value: 5, suffix: "+", unit: "banheiros" },
];

export default function PropertyStats() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.unit} delay={i * 0.1}>
            <div className="border-t border-white/15 pt-6">
              <p className="flex items-baseline font-serif text-white">
                <span className="text-6xl md:text-7xl">
                  <AnimatedNumber value={stat.value} />
                </span>
                {stat.suffix && (
                  <span className="ml-1 text-3xl text-champagne md:text-4xl">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-3 text-[12px] font-medium tracking-[0.22em] text-white/50 uppercase">
                {stat.unit}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
