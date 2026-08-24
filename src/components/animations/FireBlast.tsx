import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** Rising flame plumes with flickering embers — used for fire/magma techniques. */
export function FireBlast({ active, accentColor }: MoveAnimationProps) {
  const flames = [
    { x: 90, delay: 0, scale: 1 },
    { x: 120, delay: 0.15, scale: 1.3 },
    { x: 150, delay: 0.3, scale: 0.9 },
  ];

  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <defs>
        <linearGradient id="flame-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F2C463" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <AnimatePresence>
        {active &&
          flames.map((f, i) => (
            <motion.path
              key={i}
              d={`M ${f.x} 140 C ${f.x - 18} 100, ${f.x + 14} 90, ${f.x} 50 C ${f.x - 10} 80, ${f.x + 16} 95, ${f.x} 140 Z`}
              fill="url(#flame-grad)"
              initial={{ scaleY: 0.3, opacity: 0, transformOrigin: '50% 100%' }}
              animate={{
                scaleY: [0.3, f.scale * 1.1, f.scale * 0.9, f.scale],
                opacity: [0, 1, 0.85, 1],
              }}
              transition={{ duration: 1.1, repeat: Infinity, delay: f.delay, ease: 'easeInOut' }}
            />
          ))}
        {active &&
          Array.from({ length: 6 }).map((_, i) => (
            <motion.circle
              key={`ember-${i}`}
              cx={80 + i * 14}
              cy={130}
              r="2"
              fill="#F2C463"
              initial={{ opacity: 0, cy: 130 }}
              animate={{ opacity: [0, 1, 0], cy: [130, 40] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.22, ease: 'easeOut' }}
            />
          ))}
      </AnimatePresence>
    </svg>
  );
}
