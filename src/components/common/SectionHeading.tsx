import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  accentClass: string; // e.g. 'text-flame'
}

/** Reusable scroll-revealed section heading used atop each faction roster section. */
export function SectionHeading({ eyebrow, title, description, accentClass }: SectionHeadingProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="mx-auto max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`font-mono text-xs uppercase tracking-[0.3em] ${accentClass}`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 font-display text-5xl tracking-wide text-parchment sm:text-6xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-balance font-serif text-base text-parchment-dim sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
