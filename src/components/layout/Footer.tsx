import { CompassMark } from './CompassMark';

/** Site footer with archive framing copy and faction credits. */
export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-ink-deep py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <CompassMark className="h-10 w-10" />
        <p className="font-display text-2xl tracking-widest text-parchment">GRAND LINE ARCHIVE</p>
        <p className="max-w-md font-serif text-sm text-parchment-dark">
          A fan-made dossier cataloguing the pirates, marines, and revolutionaries of one
          imagined Grand Line. Built for the love of the sea.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dark/60">
          Unofficial fan project — not affiliated with the original creators or publishers.
        </p>
      </div>
    </footer>
  );
}
