"use client";

import { buildWhatsAppLink } from "@/data/property";
import { WhatsAppIcon } from "./icons";

/** Botão flutuante discreto — visível apenas em telas médias+ (mobile usa a barra fixa). */
export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="hidden md:flex fixed bottom-7 right-7 z-50 h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 hover:bg-graphite"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
