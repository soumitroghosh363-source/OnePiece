import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** Crystalline ice fractals spreading outward from a central point. */
export function IceSpread({ active, accentColor }: MoveAnimationProps) {
  const shards = Array.from({ length: 10 }).map((_, i) => {
    const angle = (i / 10) * Math.PI * 2;
    return {
      x2: 120 + Math.cos(angle) * 85,
      y2: 80 + Math.sin(angle) * 65,
      delay: (i % 5) * 0.08,
    };
  });

  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active && (
          <>
            <motion.circle
              cx="120"
              cy="80"
              r="10"
              fill={accentColor}
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0.9, 0.6, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
            />
            {shards.map((s, i) => (
              <motion.line
                key={i}
                x1="120"
                y1="80"
                x2={s.x2}
                y2={s.y2}
                stroke={accentColor}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0, 0.9, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: s.delay, ease: 'easeOut' }}
              />
            ))}
            {shards.map((s, i) => (
              <motion.circle
                key={`tip-${i}`}
                cx={s.x2}
                cy={s.y2}
                r="3"
                fill="#EDE3CC"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: s.delay + 0.3, ease: 'easeOut' }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
