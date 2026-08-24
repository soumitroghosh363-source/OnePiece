import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** Crossing sword slashes that flash across the frame in sequence. */
export function BladeSlash({ active, accentColor }: MoveAnimationProps) {
  const slashes = [
    { x1: 20, y1: 130, x2: 220, y2: 30, delay: 0 },
    { x1: 30, y1: 30, x2: 210, y2: 130, delay: 0.18 },
    { x1: 10, y1: 80, x2: 230, y2: 80, delay: 0.36 },
  ];

  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active &&
          slashes.map((s, i) => (
            <motion.g key={i}>
              <motion.line
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke={accentColor}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatDelay: 1.1,
                  delay: s.delay,
                  ease: 'easeOut',
                }}
              />
              <motion.line
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke="#EDE3CC"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0, 0.9, 0.9, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatDelay: 1.1,
                  delay: s.delay,
                  ease: 'easeOut',
                }}
              />
            </motion.g>
          ))}
      </AnimatePresence>
    </svg>
  );
}
