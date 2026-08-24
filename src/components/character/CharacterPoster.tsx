import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Character } from '../../types';
import { useInView } from '../../hooks/useInView';
import { moveAnimationRegistry } from '../animations';
import { StatRadar } from '../common/StatRadar';
import { BountyStamp } from '../common/BountyStamp';
import { PortraitFrame } from './PortraitFrame';
import { accentClasses } from '../../utils/format';

interface CharacterPosterProps {
  character: Character;
  factionAccent: string; // 'flame' | 'teal' | 'gold'
  index: number;
}

/**
 * The signature element of the site: a wanted-poster styled card that
 * flips on click to reveal a full dossier with animated signature move.
 */
export function CharacterPoster({ character, factionAccent, index }: CharacterPosterProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const accent = accentClasses(factionAccent);
  const MoveAnimation = moveAnimationRegistry[character.signatureMove.animationKind];
  const [from, to] = character.portraitPalette;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[460px] [perspective:1600px]"
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* FRONT — wanted poster */}
        <button
          type="button"
          onClick={() => setIsFlipped(true)}
          aria-label={`View dossier for ${character.name}`}
          className={`clip-poster absolute inset-0 flex h-full w-full flex-col justify-between border-2 border-gold/40 bg-parchment p-5 text-left shadow-poster transition-shadow duration-300 [backface-visibility:hidden] hover:shadow-poster-hover`}
          style={{
            backgroundImage: `linear-gradient(165deg, ${from}22, transparent 60%)`,
          }}
        >
          <div className="absolute inset-0 bg-grain opacity-40" />
          <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">
            <span>Wanted</span>
            <span>No. {String(index + 1).padStart(2, '0')}</span>
          </div>

          <PortraitFrame
            name={character.name}
            imageUrl={character.imageUrl}
            paletteFrom={from}
            paletteTo={to}
          />

          <div className="relative mt-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
              {character.epithet !== '—' ? `"${character.epithet}"` : character.role}
            </p>
            <h3 className="font-display text-3xl leading-none tracking-wide text-ink">
              {character.name}
            </h3>
          </div>

          <div className="relative mt-3 flex items-center justify-between">
            <BountyStamp bounty={character.bounty} delay={0.1} />
            <span className={`font-mono text-[10px] uppercase tracking-wider ${accent.text}`}>
              Tap to open ↻
            </span>
          </div>
        </button>

        {/* BACK — dossier */}
        <div
          className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-sm border border-gold/30 bg-ink-light shadow-poster [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="flex items-start justify-between border-b border-gold/20 px-4 py-3">
            <div>
              <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accent.text}`}>
                {character.role}
              </p>
              <h3 className="font-display text-2xl leading-none tracking-wide text-parchment">
                {character.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              aria-label="Close dossier"
              className="rounded-full border border-parchment/20 px-2.5 py-1 font-mono text-xs text-parchment-dim transition-colors hover:border-gold hover:text-gold"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
            <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 font-mono text-[11px] text-parchment-dim">
              <div>
                <dt className="text-parchment-dark">Age</dt>
                <dd>{character.age}</dd>
              </div>
              <div>
                <dt className="text-parchment-dark">Height</dt>
                <dd>{character.height}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-parchment-dark">Origin</dt>
                <dd>{character.origin}</dd>
              </div>
              {character.devilFruit && (
                <div className="col-span-2">
                  <dt className="text-parchment-dark">Devil Fruit</dt>
                  <dd className={accent.text}>
                    {character.devilFruit.name} ({character.devilFruit.type})
                  </dd>
                </div>
              )}
            </dl>

            <p className="mt-3 font-serif text-[13px] leading-relaxed text-parchment-dim">
              {character.bio}
            </p>

            {character.quote && (
              <p className="mt-2 border-l-2 border-gold/40 pl-3 font-serif text-[13px] italic text-gold/90">
                "{character.quote}"
              </p>
            )}

            {/* Signature move panel */}
            <div className="mt-4 rounded border border-gold/15 bg-ink/40 p-3">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accent.text}`}>
                  Signature Move
                </span>
                <span className="font-mono text-[10px] text-parchment-dark">
                  {character.signatureMove.shortLabel}
                </span>
              </div>
              <div className="relative mt-2 h-32 overflow-hidden rounded bg-ink-deep">
                <MoveAnimation active={isFlipped} accentColor={from} />
                <AnimatePresence>
                  {isFlipped && (
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="text-stroke pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-lg tracking-widest text-ink/0"
                      style={{ WebkitTextStroke: `1px ${from}` }}
                    >
                      {character.signatureMove.impactWord}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <p className="mt-2 font-serif text-[12px] leading-snug text-parchment-dim">
                {character.signatureMove.description}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <ul className="flex-1 space-y-1">
                {character.personalityNotes.map((note) => (
                  <li key={note} className="font-serif text-[11px] leading-snug text-parchment-dark">
                    · {note}
                  </li>
                ))}
              </ul>
              <StatRadar stats={character.stats} accentColor={from} active={isFlipped} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
