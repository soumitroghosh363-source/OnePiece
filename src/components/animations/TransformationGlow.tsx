import { motion, AnimatePresence } from 'framer-motion';
import type { MoveAnimationProps } from './registry';

/** A pulsing silhouette aura that grows and contracts — used for transformation-based techniques. */
export function TransformationGlow({ active, accentColor }: MoveAnimationProps) {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full">
      <defs>
        <radialGradient id="transform-grad" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <AnimatePresence>
        {active && (
          <>
            <motion.ellipse
              cx="120"
              cy="90"
              rx="40"
              ry="55"
              fill="url(#transform-grad)"
              initial={{ rx: 30, ry: 45, opacity: 0.6 }}
              animate={{ rx: [30, 55, 30], ry: [45, 65, 45], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              return (
                <motion.circle
                  key={i}
                  cx={120 + Math.cos(angle) * 45}
                  cy={90 + Math.sin(angle) * 55}
                  r="2.5"
                  fill="#EDE3CC"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0], cy: [90 + Math.sin(angle) * 55, 60 + Math.sin(angle) * 55] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15, ease: 'easeOut' }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>
    </svg>
  );
}
