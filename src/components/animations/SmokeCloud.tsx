import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** Billowing, drifting smoke puffs — used for smoke-based logia techniques. */
export function SmokeCloud({ active, accentColor }: MoveAnimationProps) {
  const puffs = Array.from({ length: 6 }).map((_, i) => ({
    cx: 60 + i * 22,
    cy: 90 - (i % 3) * 12,
    r: 14 + (i % 3) * 4,
    delay: i * 0.18,
  }));

  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active &&
          puffs.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={accentColor}
              initial={{ opacity: 0, cx: p.cx, scale: 0.6 }}
              animate={{
                opacity: [0, 0.5, 0.3, 0],
                cx: [p.cx, p.cx + 60],
                cy: [p.cy, p.cy - 18],
                scale: [0.6, 1.2, 1.4],
              }}
              transition={{ duration: 2.2, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
            />
          ))}
      </AnimatePresence>
    </svg>
  );
}
