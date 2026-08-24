import type { Character } from '../types';

export const revolutionaryMembers: Character[] = [
  {
    id: 'dragon',
    name: 'Monkey D. Dragon',
    imageUrl: '/portraits/DRAGON.jpg',
    epithet: 'The Revolutionary',
    factionId: 'revolutionary',
    role: 'Commander-in-Chief',
    age: 'Unknown',
    origin: 'East Blue',
    height: '202 cm',
    bio: "The figurehead of an organization built to dismantle the World Government from the outside, rarely seen and almost never explained — even by the people closest to him. Father to the world's most talked-about pirate, a relationship he's never publicly acknowledged.",
    personalityNotes: [
      'Speaks rarely, and when he does, subordinates treat it as scripture.',
      'Appears at exactly the moment a crisis needs tipping, then vanishes.',
      'Inspires fierce loyalty despite — or because of — his distance.',
    ],
    signatureMove: {
      name: 'Wind-Wind Current',
      shortLabel: 'Storm Calling',
      description:
        'Said to command weather itself, summoning a localized storm system out of clear skies that can swallow entire fleets in minutes.',
      animationKind: 'shockwave',
      impactWord: 'STORM CALL',
    },
    stats: {
      hakiControl: 5,
      strength: 4,
      intellect: 5,
      speed: 3,
      durability: 4,
    },
    quote:
      "Whether you're born poor matters not. As long as you survive, you have the right to dream.",
    portraitPalette: ['#0B1220', '#D9A441'],
  },

  {
    id: 'sabo',
    name: 'Sabo',
    imageUrl: '/portraits/SABO.jpg',
    epithet: 'Flame Emperor',
    factionId: 'revolutionary',
    role: 'Chief of Staff',
    age: 23,
    origin: 'Goa Kingdom, East Blue',
    devilFruit: {
      name: 'Flame-Flame Fruit',
      type: 'Logia',
      description:
        'Inherited from a fallen comrade, lets the user become, control, and weaponize fire at will — searing strikes and rapid mid-air combustion bursts.',
    },
    bounty: {
      amount: '602,000,000',
      currency: 'Berries',
      status: 'active',
    },
    height: '187 cm',
    bio: "Lost his memories in an explosion meant to silence him, then rebuilt his identity from scratch inside the Revolutionary Army — only for those memories to return at the worst possible moment, mid-war. Sworn brother to two of the era's most-watched pirates.",
    personalityNotes: [
      'Carries unresolved grief for a brother he believes he failed.',
      "Switches between sharp formality and old-friend warmth depending on who he's talking to.",
      "Took up his fallen friend's power and his fallen friend's fire, almost as a vow.",
    ],
    signatureMove: {
      name: 'Dragon Claw',
      shortLabel: 'Dragon Claw',
      description:
        'Wreathes both hands in superheated flame and strikes in a raking, claw-like arc that sears through steel and stone alike.',
      animationKind: 'fire-blast',
      impactWord: 'DRAGON CLAW',
    },
    stats: {
      strength: 4,
      speed: 4,
      hakiControl: 4,
      durability: 3,
      intellect: 4,
    },
    quote: "I'll carry your dream too.",
    portraitPalette: ['#C8472B', '#9A3420'],
  },

  {
    id: 'koala',
    name: 'Koala',
    imageUrl: '/portraits/KOALA.jpg',
    epithet: '—',
    factionId: 'revolutionary',
    role: 'Officer / Fish-Man Karate Instructor',
    age: 28,
    origin: 'South Blue',
    height: '160 cm',
    bio: 'Rescued as a trafficked child by a Revolutionary Army crew, and chose to join the organization that saved her rather than return to a "normal" life. Trained personally in Fish-Man Karate by one of its most renowned masters.',
    personalityNotes: [
      'Carries a quiet, focused fury toward human trafficking specifically.',
      'Fiercely protective of younger recruits who remind her of her own rescue.',
      'Maintains warmth even in an organization built around hard, violent decisions.',
    ],
    signatureMove: {
      name: 'Fish-Man Karate: Spiral',
      shortLabel: 'Spiral Strike',
      description:
        "A rotational palm strike that drives a corkscrewing shock of force directly into a target's center, built to disable rather than kill.",
      animationKind: 'shockwave',
      impactWord: 'SPIRAL STRIKE',
    },
    stats: {
      strength: 3,
      speed: 3,
      hakiControl: 2,
      intellect: 3,
      durability: 3,
    },
    quote:
      "I'll keep fighting until no kid has to go through what I did.",
    portraitPalette: ['#3B9AA3', '#102325'],
  },

  {
    id: 'ivankov',
    name: 'Emporio Ivankov',
    imageUrl: '/portraits/IVANKOV.jpg',
    epithet: 'Okama King',
    factionId: 'revolutionary',
    role: 'Officer (formerly "S" rank)',
    age: 41,
    origin: 'Unknown',
    devilFruit: {
      name: 'Horm-Horm Fruit',
      type: 'Paramecia',
      description:
        'Lets the user inject hormones into themselves or others, triggering dramatic physical transformations — emergency healing surges, sex changes, or grotesque empowerment at a cost.',
    },
    height: '210 cm',
    bio: 'Once a prisoner on a hidden island for those who defied the World Government, organizing a years-long escape network before joining the Revolutionary Army outright. Ran an entire underground kingdom of escapees with theatrical, unbreakable authority.',
    personalityNotes: [
      'Treats every entrance as a performance, complete with dramatic flair.',
      'Fiercely protects the marginalized and outcast people who found refuge under him.',
      'Combines genuine medical brilliance with absolute showmanship.',
    ],
    signatureMove: {
      name: 'Emergency Hormone Surge',
      shortLabel: 'Healing Surge',
      description:
        "Injects an emergency hormonal burst into an ally at death's door, forcing the body into a temporary, explosive surge of strength and vitality.",
      animationKind: 'transformation-glow',
      impactWord: 'HORMONE SURGE',
    },
    stats: {
      hakiControl: 3,
      intellect: 5,
      speed: 4,
      strength: 3,
      durability: 3,
    },
    quote: 'Hell hath no fury like a queen scorned!',
    portraitPalette: ['#D9A441', '#8a3c8a'],
  },

  {
    id: 'belo-betty',
    name: 'Belo Betty',
    imageUrl: '/portraits/BETTY.jpg',
    epithet: '—',
    factionId: 'revolutionary',
    role: 'Officer',
    age: 38,
    origin: 'Unknown',
    height: '173 cm',
    bio: "A composed, by-the-book strategist within an organization that otherwise runs on charisma and improvisation, often the one keeping field operations from spiraling. Trusted with intelligence-gathering missions too sensitive for louder operatives.",
    personalityNotes: [
      'Calm under fire to the point of unsettling allies as much as enemies.',
      "Values precision and planning over Dragon's more instinctive leadership style.",
      'Rarely raises her voice, which somehow makes orders land harder.',
    ],
    signatureMove: {
      name: 'Marking Volley',
      shortLabel: 'Marker Shot',
      description:
        'A precision firearm technique that marks vital points on multiple targets in a single sweep, setting up a coordinated team strike.',
      animationKind: 'light-flash',
      impactWord: 'MARKER VOLLEY',
    },
    stats: {
      intellect: 4,
      speed: 3,
      strength: 2,
      hakiControl: 2,
      durability: 2,
    },
    quote:
      'A plan that survives contact with the enemy is the only plan worth having.',
    portraitPalette: ['#1F6F78', '#0a2326'],
  },

  {
    id: 'morley',
    name: 'Morley',
    imageUrl: '/portraits/MORLEY.jpg',
    epithet: '—',
    factionId: 'revolutionary',
    role: 'Officer',
    age: 'Unknown',
    origin: 'Unknown',
    devilFruit: {
      name: 'Giant-Giant Fruit',
      type: 'Zoan',
      description:
        "Grants the user a giant's towering, mountain-like physique, turning raw size and reach into a battlefield advantage few opponents can match.",
    },
    height: 'Giant-class',
    bio: 'Liberated alongside thousands of others from a brutal slave-labor mining operation, and chose to fight rather than simply walk free. Brings a giant\'s raw scale to a Revolutionary Army that otherwise wins through subtlety.',
    personalityNotes: [
      'Slow to anger, but immovable once provoked.',
      'Carries the memory of the mines into every fight against forced labor.',
      'Gentle with the rescued and the weak, merciless with their captors.',
    ],
    signatureMove: {
      name: 'Mountain Crusher',
      shortLabel: 'Crusher Slam',
      description:
        "A two-handed overhead slam delivered with a giant's full mass behind it, cratering the ground and sending shockwaves through solid stone.",
      animationKind: 'shockwave',
      impactWord: 'CRUSHER SLAM',
    },
    stats: {
      strength: 5,
      durability: 5,
      speed: 1,
      hakiControl: 2,
      intellect: 2,
    },
    quote: 'No one chains a free man twice.',
    portraitPalette: ['#D9A441', '#5a4015'],
  },
];