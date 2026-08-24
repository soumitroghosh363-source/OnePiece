import type { Character } from '../../types';
import { CharacterPoster } from './CharacterPoster';

interface CharacterGridProps {
  characters: Character[];
  factionAccent: string;
}

/** Responsive grid that lays out a faction's roster of CharacterPoster cards. */
export function CharacterGrid({ characters, factionAccent }: CharacterGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character, i) => (
        <CharacterPoster
          key={character.id}
          character={character}
          factionAccent={factionAccent}
          index={i}
        />
      ))}
    </div>
  );
}
