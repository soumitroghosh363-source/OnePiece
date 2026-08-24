import { motion, type Variants } from 'framer-motion';
import { CompassMark } from '../layout/CompassMark';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/** Full-bleed hero section: the page's thesis statement and orchestrated load-in. */
export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-compass-lines" />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame/5 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <CompassMark className="h-16 w-16" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-xs uppercase tracking-[0.4em] text-gold"
        >
          Three Powers · One Sea
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-6xl leading-[0.95] tracking-wide text-parchment sm:text-8xl"
        >
          THE GRAND LINE
          <br />
          <span className="text-flame">ARCHIVE</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance font-serif text-lg leading-relaxed text-parchment-dim"
        >
          Every wanted poster tells half a story. Open a dossier to see
          the rest — origin, temperament, and the one signature move that
          defines them in a fight.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            {
              label: 'Straw Hat Pirates',
              target: 'straw-hat',
              accent: 'border-flame text-flame',
            },
            {
              label: 'The Navy',
              target: 'navy',
              accent: 'border-teal text-teal-light',
            },
            {
              label: 'Revolutionary Army',
              target: 'revolutionary',
              accent: 'border-gold text-gold',
            },
          ].map((b) => (
            <button
              key={b.target}
              type="button"
              onClick={() =>
                document
                  .getElementById(b.target)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all hover:scale-105 hover:bg-white/5 ${b.accent}`}
            >
              {b.label}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-parchment-dark">
          Scroll the chart
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}