import type { Faction, Character } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { CharacterGrid } from '../character/CharacterGrid';
import { accentClasses } from '../../utils/format';

interface FactionSectionProps {
  faction: Faction;
  characters: Character[];
}

/** A full-width section presenting one faction's identity and its character roster. */
export function FactionSection({ faction, characters }: FactionSectionProps) {
  const accent = accentClasses(faction.colorAccent);

  return (
    <section id={faction.id} className="relative scroll-mt-20 px-6 py-24">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${accent.text} opacity-30`}
      />
      <SectionHeading
        eyebrow={faction.tagline}
        title={faction.name}
        description={faction.description}
        accentClass={accent.text}
      />
      <div className="mx-auto mt-16 max-w-7xl">
        <CharacterGrid characters={characters} factionAccent={faction.colorAccent} />
      </div>
    </section>
  );
}
