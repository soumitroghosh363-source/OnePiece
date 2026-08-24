interface CompassMarkProps {
  className?: string;
}

/** A slowly-rotating compass rose mark — the site's recurring nautical motif. */
export function CompassMark({ className = 'h-8 w-8' }: CompassMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={`${className} animate-compass-spin-slow`}>
      <circle cx="50" cy="50" r="46" fill="none" stroke="#D9A441" strokeWidth="1.5" opacity="0.6" />
      <circle cx="50" cy="50" r="2.5" fill="#D9A441" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const isCardinal = i % 2 === 0;
        const r1 = isCardinal ? 12 : 18;
        const r2 = 44;
        return (
          <line
            key={i}
            x1={50 + Math.cos(angle) * r1}
            y1={50 + Math.sin(angle) * r1}
            x2={50 + Math.cos(angle) * r2}
            y2={50 + Math.sin(angle) * r2}
            stroke="#D9A441"
            strokeWidth={isCardinal ? 1.4 : 0.8}
            opacity={isCardinal ? 0.9 : 0.4}
          />
        );
      })}
      <path d="M50 14 L57 50 L50 86 L43 50 Z" fill="#C8472B" opacity="0.85" />
    </svg>
  );
}
