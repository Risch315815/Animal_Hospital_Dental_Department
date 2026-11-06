'use client';

import { useEffect, useState } from 'react';
import { INK, portfolioImageSrc } from './PortfolioFrame';

export type GalleryImage = {
  src: string;
  alt: string;
};

export default function PortfolioGallery({ images }: { images: GalleryImage[] }) {
  const [openImage, setOpenImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!openImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenImage(null);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [openImage]);

  if (images.length === 0) {
    return (
      <p className="text-center text-sm tracking-[0.16em] opacity-70">
        Images coming soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {images.map((image) => (
          <article key={image.src}>
            <button
              type="button"
              onClick={() => setOpenImage(image)}
              className="block w-full cursor-zoom-in overflow-hidden text-left"
              aria-label={`Open ${image.alt}`}
            >
              <img
                src={portfolioImageSrc(image.src)}
                alt={image.alt}
                className="block h-auto w-full bg-white"
              />
            </button>
          </article>
        ))}
      </div>

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(2, 12, 40, 0.92)' }}
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openImage.alt}
        >
          <button
            type="button"
            onClick={() => setOpenImage(null)}
            className="absolute right-4 top-4 px-3 py-2 text-sm tracking-[0.2em] uppercase"
            style={{ color: INK }}
          >
            Close
          </button>
          <img
            src={portfolioImageSrc(openImage.src)}
            alt={openImage.alt}
            className="max-h-[90vh] max-w-[94vw] bg-white object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
