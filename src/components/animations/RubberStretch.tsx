import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** A pulled-back, snapping limb with an impact starburst — used for rubber/elastic moves. */
export function RubberStretch({ active, accentColor }: MoveAnimationProps) {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active && (
          <>
            <motion.path
              d="M 30 80 Q 90 80 150 80"
              stroke={accentColor}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              initial={{ d: 'M 30 80 Q 60 80 90 80' }}
              animate={{
                d: [
                  'M 30 80 Q 60 80 90 80',
                  'M 30 80 Q 20 80 15 80',
                  'M 30 80 Q 120 80 210 80',
                  'M 30 80 Q 120 80 210 80',
                ],
              }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.4, times: [0, 0.25, 0.45, 1] }}
            />
            <motion.circle
              cx="210"
              cy="80"
              r="12"
              fill={accentColor}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 0, 1.6, 1], opacity: [0, 0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.4, times: [0, 0.45, 0.55, 1] }}
            />
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              return (
                <motion.line
                  key={i}
                  x1="210"
                  y1="80"
                  x2={210 + Math.cos(angle) * 30}
                  y2={80 + Math.sin(angle) * 30}
                  stroke="#EDE3CC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: [0, 0, 1, 0], pathLength: [0, 0, 1, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.4, times: [0, 0.5, 0.6, 1] }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
