import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** A jagged lightning bolt striking downward, with a flash and crackle aftermath. */
export function LightningStrike({ active, accentColor }: MoveAnimationProps) {
  const boltPath = 'M 120 10 L 105 55 L 130 60 L 100 110 L 135 75 L 110 70 L 140 20 Z';

  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <AnimatePresence>
        {active && (
          <>
            <motion.rect
              x="0"
              y="0"
              width="240"
              height="160"
              fill={accentColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.25, 0] }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1.3 }}
            />
            <motion.path
              d={boltPath}
              fill={accentColor}
              initial={{ opacity: 0, scaleY: 0.5, transformOrigin: 'top' }}
              animate={{ opacity: [0, 1, 0.6, 1, 0], scaleY: [0.5, 1, 1, 1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.1, ease: 'easeOut' }}
            />
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.line
                key={i}
                x1={120 + (i - 2) * 8}
                y1={110}
                x2={120 + (i - 2) * 22}
                y2={140}
                stroke="#EDE3CC"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.4, delay: 0.2 + i * 0.03 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
