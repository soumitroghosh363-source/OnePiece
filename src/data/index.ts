import type { Character, FactionId } from '../types';
import { strawHatPirates } from './strawHatPirates';
import { navyMembers } from './navyMembers';
import { revolutionaryMembers } from './revolutionaryMembers';

export { factions, getFaction } from './factions';
export { strawHatPirates } from './strawHatPirates';
export { navyMembers } from './navyMembers';
export { revolutionaryMembers } from './revolutionaryMembers';

export const allCharacters: Character[] = [
  ...strawHatPirates,
  ...navyMembers,
  ...revolutionaryMembers,
];

export const charactersByFaction = (factionId: FactionId): Character[] =>
  allCharacters.filter((c) => c.factionId === factionId);

export const getCharacterById = (id: string): Character | undefined =>
  allCharacters.find((c) => c.id === id);
