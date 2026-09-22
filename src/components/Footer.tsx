import { property } from "@/data/property";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream px-6 pt-10 pb-28 md:px-10 md:py-10">
      {/* pb-28 no mobile reserva espaço para a barra fixa do WhatsApp não cobrir o rodapé */}
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <span className="font-serif text-base tracking-[0.14em] text-ink">{property.code}</span>
        <p className="max-w-md text-xs leading-relaxed text-stone">
          {property.address} · {property.neighborhood}, {property.city} — {property.state}
        </p>
        <p className="text-xs text-stone/70">
          As imagens são fotos reais do imóvel em fase de obras.
        </p>
      </div>
    </footer>
  );
}
