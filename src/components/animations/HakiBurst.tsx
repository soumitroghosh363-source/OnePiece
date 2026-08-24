import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** Concentric pressure rings radiating from a central point — used for Haki-based strikes. */
export function HakiBurst({ active, accentColor }: MoveAnimationProps) {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <defs>
        <radialGradient id="haki-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <AnimatePresence>
        {active && (
          <>
            <motion.circle
              cx="120"
              cy="80"
              r="6"
              fill="url(#haki-core)"
              initial={{ r: 4, opacity: 0 }}
              animate={{ r: [4, 16, 8], opacity: [0, 1, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.3 }}
            />
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                cx="120"
                cy="80"
                r="4"
                fill="none"
                stroke={accentColor}
                strokeWidth="2"
                initial={{ r: 4, opacity: 0.8 }}
                animate={{ r: 90, opacity: 0 }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: i * 0.45,
                  ease: 'easeOut',
                }}
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const x2 = 120 + Math.cos(angle) * 70;
              const y2 = 80 + Math.sin(angle) * 70;
              return (
                <motion.line
                  key={`spark-${i}`}
                  x1="120"
                  y1="80"
                  x2={x2}
                  y2={y2}
                  stroke={accentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
