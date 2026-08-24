import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** Rapid converging light beams with a bright flash burst — used for light/beam techniques. */
export function LightFlash({ active, accentColor }: MoveAnimationProps) {
  const beams = Array.from({ length: 5 }).map((_, i) => ({
    y: 30 + i * 25,
    delay: i * 0.08,
  }));

  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active && (
          <>
            {beams.map((b, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={b.y}
                x2="240"
                y2={b.y}
                stroke={accentColor}
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.7, delay: b.delay, ease: 'easeIn' }}
              />
            ))}
            <motion.circle
              cx="120"
              cy="80"
              r="4"
              fill="#FFFDF6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 6, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 0.8, delay: 0.4 }}
            />
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
