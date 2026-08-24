import { motion } from 'framer-motion';
import type { BountyInfo } from '../../types';
import { formatBounty } from '../../utils/format';

interface BountyStampProps {
  bounty?: BountyInfo;
  delay?: number;
}

/** A rotated, ink-stamp-style bounty marker, animated in with a "stamp" thud. */
export function BountyStamp({ bounty, delay = 0 }: BountyStampProps) {
  if (!bounty) return null;

  return (
    <motion.div
      initial={{ scale: 1.8, opacity: 0, rotate: -6 }}
      animate={{ scale: 1, opacity: 1, rotate: -4 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex flex-col items-center border-2 border-flame px-3 py-1.5 text-flame"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Bounty</span>
      <span className="font-display text-xl leading-none tracking-wide">
        {formatBounty(bounty.amount, bounty.currency, bounty.status)}
      </span>
    </motion.div>
  );
}
