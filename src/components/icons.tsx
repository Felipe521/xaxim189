export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.66 4.57 1.8 6.45L4 29l7.72-1.75a11.9 11.9 0 0 0 4.3.8c6.62 0 12.02-5.4 12.02-12.03C28.04 8.4 22.64 3 16.02 3Zm0 21.9c-1.44 0-2.86-.38-4.1-1.1l-.29-.17-4.58 1.04 1.06-4.47-.19-.3a9.87 9.87 0 0 1-1.53-5.28c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.04 7.01 2.92a9.85 9.85 0 0 1 2.9 7.01c0 5.48-4.45 9.93-9.93 9.93l-.28-.03Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
      <path d="M5 5l14 14M19 5 5 19" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className, direction = "right" }: { className?: string; direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      className={className}
      style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
