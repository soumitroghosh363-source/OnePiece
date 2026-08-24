import type { Faction } from '../types';

export const factions: Faction[] = [
  {
    id: 'straw-hat',
    name: 'Straw Hat Pirates',
    tagline: 'Sailing for the one piece, one crewmate at a time.',
    description:
      'A pirate crew built less on ambition than on loyalty — every member joined chasing a personal dream, and the captain never asked them to give it up.',
    colorAccent: 'flame',
    emblem: 'jolly-roger',
  },
  {
    id: 'navy',
    name: 'The Navy',
    tagline: 'Absolute Justice, enforced across every sea.',
    description:
      'The military arm of the World Government, tasked with hunting pirates and keeping order — though "order" means something different to every officer who wears the coat.',
    colorAccent: 'teal',
    emblem: 'navy-seagull',
  },
  {
    id: 'revolutionary',
    name: 'Revolutionary Army',
    tagline: 'Burning down the throne from the outside in.',
    description:
      'An underground force working to topple the World Government entirely, built from rebels, refugees, and defectors who decided the system itself was the enemy.',
    colorAccent: 'gold',
    emblem: 'revolutionary-flame',
  },
];

export const getFaction = (id: string) => factions.find((f) => f.id === id);
