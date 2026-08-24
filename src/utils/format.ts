/** Formats a bounty amount string with the currency label, or a placeholder if unknown. */
export function formatBounty(
  amount: string | undefined,
  currency = 'Berries',
  status?: string,
): string {
  if (!amount || status === 'unknown') {
    return 'Bounty Unknown';
  }

  if (status === 'none') {
    return 'No Bounty Issued';
  }

  const formattedAmount = `${amount} ${currency}`;

  if (status === 'frozen') {
    return `₿${formattedAmount} (Frozen)`;
  }

  return `₿${formattedAmount}`;
}

/** Maps a faction's accent token to concrete Tailwind class fragments used across components. */
export function accentClasses(accent: string) {
  const map: Record<
    string,
    {
      text: string;
      border: string;
      bg: string;
      bgSoft: string;
      glow: string;
    }
  > = {
    flame: {
      text: 'text-flame',
      border: 'border-flame',
      bg: 'bg-flame',
      bgSoft: 'bg-flame/10',
      glow: 'shadow-[0_0_30px_-5px_rgba(200,71,43,0.5)]',
    },

    teal: {
      text: 'text-teal-light',
      border: 'border-teal',
      bg: 'bg-teal',
      bgSoft: 'bg-teal/10',
      glow: 'shadow-[0_0_30px_-5px_rgba(31,111,120,0.5)]',
    },

    gold: {
      text: 'text-gold',
      border: 'border-gold',
      bg: 'bg-gold',
      bgSoft: 'bg-gold/10',
      glow: 'shadow-[0_0_30px_-5px_rgba(217,164,65,0.5)]',
    },
  };

  return map[accent] ?? map.gold;
}