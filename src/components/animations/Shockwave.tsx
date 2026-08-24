import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** A ground-level radial shockwave with rising debris lines — used for impact/force techniques. */
export function Shockwave({ active, accentColor }: MoveAnimationProps) {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active && (
          <>
            <motion.ellipse
              cx="120"
              cy="120"
              rx="10"
              ry="4"
              fill="none"
              stroke={accentColor}
              strokeWidth="3"
              initial={{ rx: 10, ry: 4, opacity: 0.9 }}
              animate={{ rx: 100, ry: 18, opacity: 0 }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.ellipse
              cx="120"
              cy="120"
              rx="10"
              ry="4"
              fill="none"
              stroke={accentColor}
              strokeWidth="2"
              initial={{ rx: 10, ry: 4, opacity: 0.7 }}
              animate={{ rx: 70, ry: 12, opacity: 0 }}
              transition={{ duration: 1.3, repeat: Infinity, delay: 0.3, ease: 'easeOut' }}
            />
            {Array.from({ length: 7 }).map((_, i) => {
              const dir = i % 2 === 0 ? -1 : 1;
              const x = 120 + dir * (15 + i * 12);
              return (
                <motion.line
                  key={i}
                  x1={x}
                  y1="120"
                  x2={x + dir * 8}
                  y2="120"
                  stroke="#EDE3CC"
                  strokeWidth="2"
                  initial={{ y2: 120, opacity: 0 }}
                  animate={{ y2: 120 - 30 - i * 4, opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.15 * i, ease: 'easeOut' }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
