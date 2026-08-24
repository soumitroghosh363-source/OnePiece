import type { ComponentType } from 'react';
import type { AnimationKind } from '../../types';
import { HakiBurst } from './HakiBurst';
import { BladeSlash } from './BladeSlash';
import { FireBlast } from './FireBlast';
import { IceSpread } from './IceSpread';
import { LightningStrike } from './LightningStrike';
import { RubberStretch } from './RubberStretch';
import { SmokeCloud } from './SmokeCloud';
import { LightFlash } from './LightFlash';
import { Shockwave } from './Shockwave';
import { TransformationGlow } from './TransformationGlow';

export interface MoveAnimationProps {
  /** Whether the animation should be actively playing (poster is open/focused). */
  active: boolean;
  /** Hex accent color pulled from the character's portrait palette. */
  accentColor: string;
}

/** Registry mapping each AnimationKind to its renderer component. */
export const moveAnimationRegistry: Record<AnimationKind, ComponentType<MoveAnimationProps>> = {
  'haki-burst': HakiBurst,
  'blade-slash': BladeSlash,
  'fire-blast': FireBlast,
  'ice-spread': IceSpread,
  'lightning-strike': LightningStrike,
  'rubber-stretch': RubberStretch,
  'smoke-cloud': SmokeCloud,
  'light-flash': LightFlash,
  shockwave: Shockwave,
  'transformation-glow': TransformationGlow,
};
