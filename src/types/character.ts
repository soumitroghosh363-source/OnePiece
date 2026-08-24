/**
 * Core domain types for the Grand Line Archive.
 * Every character record (pirate, marine, revolutionary) conforms to these shapes.
 */

export type FactionId = 'straw-hat' | 'navy' | 'revolutionary';

export interface Faction {
  id: FactionId;
  name: string;
  tagline: string;
  description: string;
  colorAccent: string; // tailwind color token name, e.g. 'flame', 'teal', 'gold'
  emblem: EmblemKind;
}

export type EmblemKind = 'jolly-roger' | 'navy-seagull' | 'revolutionary-flame';

/**
 * A "signature move" is the one standout animated technique we showcase
 * for each character — rendered via an SVG/CSS keyframe sequence, not video.
 */
export interface SignatureMove {
  name: string;
  shortLabel: string; // small chip label
  description: string;
  animationKind: AnimationKind;
  impactWord: string; // big stylized word shown at the climax frame, e.g. "GEAR FOURTH"
}

/**
 * Identifies which animation component renders this move.
 * Each kind maps 1:1 to a component in components/animations.
 */
export type AnimationKind =
  | 'haki-burst'
  | 'blade-slash'
  | 'fire-blast'
  | 'ice-spread'
  | 'lightning-strike'
  | 'rubber-stretch'
  | 'smoke-cloud'
  | 'light-flash'
  | 'shockwave'
  | 'transformation-glow';

export interface BountyInfo {
  amount: string; // formatted, e.g. "3,000,000,000"
  currency: string; // "Berries"
  status: 'active' | 'unknown' | 'frozen' | 'none';
}

export interface CharacterStats {
  swordsmanship?: number; // 0-5 scale used for the radial stat chart
  strength?: number;
  durability?: number;
  intellect?: number;
  speed?: number;
  hakiControl?: number;
}

export interface Character {
  id: string;
  name: string;
  epithet: string; // e.g. "Straw Hat", "Hawk Eyes"
  factionId: FactionId;
  role: string; // e.g. "Captain", "Fleet Admiral", "Chief of Staff"
  age: number | string;
  origin: string;
  devilFruit?: {
    name: string;
    type: 'Paramecia' | 'Zoan' | 'Logia' | 'none' | 'Mythical Zoan';
    description: string;
  };
  bounty?: BountyInfo;
  height: string;
  bio: string;
  personalityNotes: string[];
  signatureMove: SignatureMove;
  stats: CharacterStats;
  quote?: string;
  portraitPalette: [string, string]; // gradient pair for the poster background (hex)
  /**
   * Optional path/URL to user-supplied artwork or a photo for this character.
   * Left undefined by default. Point this at your own image (e.g.
   * '/portraits/luffy.jpg' in /public) to have it render instead of the
   * stylized monogram placeholder.
   */
  imageUrl?: string;
}
