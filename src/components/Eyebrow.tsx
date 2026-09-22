type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] uppercase text-champagne ${className}`}
    >
      <span className="h-px w-8 bg-champagne/70" aria-hidden />
      {children}
    </span>
  );
}
