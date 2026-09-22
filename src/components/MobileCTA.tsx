"use client";

import { buildWhatsAppLink, ctas, property } from "@/data/property";
import { WhatsAppIcon } from "./icons";

/** Barra inferior fixa exclusiva do mobile — desktop usa o botão flutuante. */
export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-ink/95 backdrop-blur-md pb-[env(safe-area-inset-bottom,0px)]">
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 py-4 text-cream"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span className="text-[11px] font-medium tracking-[0.18em] uppercase">
          {ctas.mobileBar}
        </span>
        <span className="text-[11px] text-champagne tracking-[0.1em]">{property.priceLabel}</span>
      </a>
    </div>
  );
}
