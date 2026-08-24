import { motion } from 'framer-motion';
import type { CharacterStats } from '../../types';

interface StatRadarProps {
  stats: CharacterStats;
  accentColor: string;
  active: boolean;
}

const STAT_LABELS: Record<keyof CharacterStats, string> = {
  swordsmanship: 'Blade',
  strength: 'Power',
  durability: 'Endure',
  intellect: 'Mind',
  speed: 'Speed',
  hakiControl: 'Haki',
};

/** A small animated radar/spider chart visualizing a character's combat stats out of 5. */
export function StatRadar({ stats, accentColor, active }: StatRadarProps) {
  const entries = (Object.entries(stats) as [keyof CharacterStats, number][]).filter(
    ([, v]) => v !== undefined,
  );
  const n = entries.length;
  if (n === 0) return null;

  const size = 160;
  const center = size / 2;
  const maxR = size / 2 - 24;

  const points = entries.map(([, value], i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = (value / 5) * maxR;
    return {
      x: center + Math.cos(angle) * r,
      y: center + Math.sin(angle) * r,
      labelX: center + Math.cos(angle) * (maxR + 16),
      labelY: center + Math.sin(angle) * (maxR + 16),
    };
  });

  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-40 w-40">
      {[0.33, 0.66, 1].map((frac) => (
        <polygon
          key={frac}
          points={entries
            .map((_entry, i) => {
              const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
              const r = maxR * frac;
              return `${center + Math.cos(angle) * r},${center + Math.sin(angle) * r}`;
            })
            .join(' ')}
          fill="none"
          stroke="rgba(237,227,204,0.15)"
          strokeWidth="1"
        />
      ))}
      <motion.polygon
        points={polygonPoints}
        fill={accentColor}
        fillOpacity="0.25"
        stroke={accentColor}
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformOrigin: `${center}px ${center}px` }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="3"
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        />
      ))}
      {entries.map(([key], i) => (
        <text
          key={key}
          x={points[i].labelX}
          y={points[i].labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-parchment-dim font-mono text-[8px] uppercase tracking-wider"
        >
          {STAT_LABELS[key]}
        </text>
      ))}
    </svg>
  );
}
