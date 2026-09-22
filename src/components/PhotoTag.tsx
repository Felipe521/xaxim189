type PhotoTagProps = {
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Selo discreto de transparência sobre as fotos. As imagens são reais, tiradas durante a obra —
 * por isso o texto é "imagem da obra em andamento", nunca "perspectiva artística" (seria falso).
 */
export default function PhotoTag({ className = "", tone = "light" }: PhotoTagProps) {
  const toneClasses =
    tone === "light"
      ? "bg-cream/85 text-ink"
      : "bg-ink/60 text-cream backdrop-blur-sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-medium tracking-[0.14em] uppercase ${toneClasses} ${className}`}
    >
      Imagem da obra em andamento
    </span>
  );
}
