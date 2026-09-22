import RevealWords from "./RevealWords";

type StatementSectionProps = {
  lines: string[];
  accentLine?: number;
  tone?: "light" | "dark";
};

export default function StatementSection({ lines, accentLine, tone = "light" }: StatementSectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`flex min-h-[70vh] items-center justify-center px-6 py-28 text-center ${
        isDark ? "bg-ink" : "bg-cream"
      }`}
    >
      <h2
        className={`max-w-4xl font-serif text-[2.1rem] leading-[1.25] text-balance sm:text-5xl md:text-6xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {lines.map((line, i) => (
          <span key={line} className="block">
            <RevealWords
              text={line}
              delay={i * 0.25}
              className={
                i === accentLine
                  ? "italic text-champagne"
                  : undefined
              }
            />
          </span>
        ))}
      </h2>
    </section>
  );
}
