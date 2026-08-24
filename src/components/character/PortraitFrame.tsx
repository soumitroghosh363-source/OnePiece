import { useState } from 'react';

interface PortraitFrameProps {
  name: string;
  imageUrl?: string;
  paletteFrom: string;
  paletteTo: string;
}

/**
 * Renders a character's portrait area on the poster front.
 *
 * If `imageUrl` is provided (and loads successfully), it's shown as a
 * cover-fit photo/art. Otherwise — including if the image fails to load —
 * this falls back to a stylized gradient monogram so the card never shows
 * a broken image icon or an empty box.
 */
export function PortraitFrame({ name, imageUrl, paletteFrom, paletteTo }: PortraitFrameProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(imageUrl) && !failed;

  return (
    <div
      className="relative mx-auto flex h-44 w-full items-center justify-center overflow-hidden rounded-sm border border-ink/15"
      style={{ background: `linear-gradient(155deg, ${paletteFrom}, ${paletteTo})` }}
    >
      {showImage ? (
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <span className="font-display text-7xl text-parchment/25">{name.charAt(0)}</span>
          <span className="absolute bottom-2 right-2 font-mono text-[8px] uppercase tracking-wider text-parchment/30">
            No portrait on file
          </span>
        </>
      )}
    </div>
  );
}
