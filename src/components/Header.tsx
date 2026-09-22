"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppLink, property } from "@/data/property";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_LINKS = [
  { label: "O imóvel", href: "#imovel" },
  { label: "Arquitetura", href: "#arquitetura" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const dark = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-60 transition-colors duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className={`font-serif text-lg tracking-[0.18em] transition-colors duration-500 ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          {property.code}
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`link-underline text-[12px] font-medium tracking-[0.14em] uppercase transition-colors duration-500 ${
                scrolled ? "text-ink/80 hover:text-ink" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-cream"
                : "border-white/70 text-white hover:bg-white hover:text-ink"
            }`}
          >
            Tenho interesse
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className={`md:hidden transition-colors duration-500 ${dark ? "text-ink" : "text-white"}`}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-70 flex flex-col bg-ink px-8 pt-6 pb-10 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg tracking-[0.18em] text-cream">{property.code}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                className="text-cream"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl text-cream/90"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto border border-champagne px-6 py-4 text-center text-[12px] font-medium tracking-[0.2em] uppercase text-champagne"
            >
              Tenho interesse
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
