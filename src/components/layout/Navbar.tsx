import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { factions } from '../../data';
import { CompassMark } from './CompassMark';

const NAV_LINKS = factions.map((f) => ({ id: f.id, label: f.name }));

/** Sticky top navigation with scroll-aware backdrop and faction quick links. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-deep/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
        >
          <CompassMark className="h-8 w-8" />
          <span className="font-display text-xl tracking-widest text-parchment">
            GRAND LINE ARCHIVE
          </span>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className="font-mono text-xs uppercase tracking-[0.15em] text-parchment-dim transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
