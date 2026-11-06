'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from '../contexts/LanguageContext';

const PAGE_BG = '#042878';
const INK = '#95DEFF';

type Category = 'Cheatsheet' | 'Treatment Options' | 'Comic';

type Piece = {
  id: string;
  title: string;
  category: Category;
  /** Set this to a public path, such as /images/portfolio/piece-01.png, when the real file is ready. */
  image?: string;
  aspect: string;
  hideFromAll?: boolean;
};

const CATEGORIES: Array<'All' | Category> = [
  'All',
  'Cheatsheet',
  'Treatment Options',
  'Comic',
];

const ROADMAPS = [
  { title: 'Oral Surgery', href: '/en/oral-surgery', image: '/images/portfolio/roadmap-oral-surgery.jpg' },
  { title: 'Endodontics', href: '/en/endodontics', image: '/images/portfolio/roadmap-endodontics.jpg' },
  { title: 'Operative Dentistry', href: '/en/operative-dentistry', image: '/images/portfolio/roadmap-operative-dentistry.jpg' },
  { title: 'Implantology', href: '/en/implantology', image: '/images/portfolio/roadmap-implantology.jpg' },
];

// Swap titles, categories, and image paths when the seminar pieces are ready.
const PIECES: Piece[] = [
  { id: 'referral', title: 'General Dentistry Referral', category: 'Cheatsheet', image: '/images/portfolio/general-dentistry-referral.png', aspect: '3 / 4', hideFromAll: true },
  { id: 'referral-en', title: 'General Practitioner Referral', category: 'Cheatsheet', image: '/images/portfolio/general-practitioner-referral.png', aspect: '3 / 4' },
  { id: 'fx-en', title: 'Fracture from Trauma', category: 'Cheatsheet', image: '/images/portfolio/fracture-from-trauma.png', aspect: '3 / 4' },
  { id: 'pathology', title: 'Pathology Pathway', category: 'Cheatsheet', image: '/images/portfolio/pathology-pathway.png', aspect: '3 / 4', hideFromAll: true },
  { id: 'fx-zh', title: 'Fracture Pathway', category: 'Cheatsheet', image: '/images/portfolio/fracture-pathway.png', aspect: '3 / 4', hideFromAll: true },
  { id: 'bridge', title: 'Cannot Remove Bridge', category: 'Treatment Options', image: '/images/portfolio/cannot-remove-bridge.png', aspect: '1 / 1' },
  { id: 'abutment-broken', title: 'Abutment Broken or Severely Adjusted', category: 'Treatment Options', image: '/images/portfolio/abutment-broken.png', aspect: '1 / 1' },
  { id: 'implant-fx', title: 'Implant or Screw Fractured', category: 'Treatment Options', image: '/images/portfolio/implant-screw-fractured.png', aspect: '1 / 1' },
  { id: 'abutment-seat', title: 'Abutment Direction, Seating, or Loose Screw', category: 'Treatment Options', image: '/images/portfolio/abutment-not-seated.png', aspect: '1 / 1' },
  { id: 'esthetics', title: 'Esthetics', category: 'Treatment Options', image: '/images/portfolio/esthetics.png', aspect: '1 / 1' },
  { id: 'esthetic-abutment', title: 'Esthetic Abutment', category: 'Treatment Options', image: '/images/portfolio/esthetic-abutment.jpg', aspect: '1 / 1' },
  { id: 'shallow-placement', title: 'Shallow Placement', category: 'Comic', image: '/images/portfolio/shallow-placement.png', aspect: '1 / 1' },
  { id: 'implant-criteria', title: 'That Implant Over There', category: 'Comic', image: '/images/portfolio/implant-criteria.png', aspect: '1 / 1' },
];

function PlaceholderFrame({ piece }: { piece: Piece }) {
  return (
    <div
      className="relative w-full overflow-hidden border"
      style={{
        aspectRatio: piece.aspect,
        backgroundColor: '#0a3d9e',
        borderColor: 'rgba(149, 222, 255, 0.35)',
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect x="18" y="18" width="164" height="164" fill="none" stroke={INK} strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="100" cy="92" r="28" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="1.5" />
        <path d="M70 138h60" stroke={INK} strokeOpacity="0.45" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <span className="text-[11px] tracking-[0.32em] uppercase" style={{ color: INK }}>
          Placeholder
        </span>
        <span className="text-3xl font-semibold tracking-widest" style={{ color: INK }}>
          {piece.id}
        </span>
      </div>
    </div>
  );
}

function imageSrc(image: string, basePath: string) {
  return image.startsWith('http') ? image : `${basePath}${image}`;
}

export default function EnglishHome() {
  const { setLanguage } = useLanguage();
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [openPiece, setOpenPiece] = useState<Piece | null>(null);

  const basePath = '/Animal_Hospital_Dental_Department';

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  useEffect(() => {
    const previous = document.body.style.background;
    document.body.style.background = PAGE_BG;
    return () => {
      document.body.style.background = previous;
    };
  }, []);

  useEffect(() => {
    if (!openPiece) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenPiece(null);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [openPiece]);

  const visible = PIECES.filter((piece) => {
    if (category === 'All') return !piece.hideFromAll;
    return piece.category === category;
  });

  const renderPiece = (piece: Piece) => (
    <article key={piece.id} className="mb-3 break-inside-avoid">
      {piece.image ? (
        <button
          type="button"
          onClick={() => setOpenPiece(piece)}
          className="group relative block w-full cursor-zoom-in overflow-hidden text-left"
          aria-label={`Open ${piece.title}`}
        >
          <img
            src={imageSrc(piece.image, basePath)}
            alt={piece.title}
            className="block h-auto w-full bg-white"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 px-4 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundColor: 'rgba(4, 40, 120, 0.82)' }}
          >
            <p className="text-sm tracking-[0.14em] uppercase">{piece.title}</p>
            <p className="mt-1 text-[11px] tracking-[0.2em] uppercase opacity-70">{piece.category}</p>
          </div>
        </button>
      ) : (
        <PlaceholderFrame piece={piece} />
      )}
    </article>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: PAGE_BG, color: INK }}>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
        <p className="mb-8 text-center text-xs tracking-[0.38em]" style={{ color: INK }}>
          JoeBing DDS
          <br />
          <br />
          PORTFOLIO
        </p>
        <div className="mx-auto mb-8 h-px w-44" style={{ backgroundColor: INK, opacity: 0.45 }} />

        <div className="mb-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-[0.12em] sm:text-6xl">
            ILLUSTRATIONS
          </h1>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {CATEGORIES.map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className="px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase transition-colors"
                style={{
                  backgroundColor: active ? INK : 'transparent',
                  color: active ? PAGE_BG : INK,
                  opacity: active ? 1 : 0.62,
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="columns-1 gap-3 sm:columns-2">
          {visible.map(renderPiece)}
        </div>

        <div className="mx-auto mb-10 mt-20 h-px w-44" style={{ backgroundColor: INK, opacity: 0.45 }} />
        <div className="mb-10 flex items-center justify-center">
          <h2 className="w-full text-center text-4xl font-bold tracking-[0.12em] sm:text-6xl">
            DENTAL ROADMAP
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ROADMAPS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block overflow-hidden bg-white"
            >
              <img
                src={imageSrc(item.image, basePath)}
                alt={item.title}
                className="block h-auto w-full"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-4 py-3"
                style={{ backgroundColor: 'rgba(4, 40, 120, 0.82)' }}
              >
                <p className="text-center text-sm tracking-[0.14em] uppercase">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <nav className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm tracking-[0.16em]">
          <a
            href="https://www.facebook.com/xu.zhen.jie.48103/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/chen-chieh-hsu-9835a631a/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://www.threads.com/@joebingdds"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Threads
          </a>
          <a
            href="https://www.instagram.com/joebingdds/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Instagram
          </a>
          <a
            href="https://risch315815.github.io/JoeBingDDS/en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Personal Page
          </a>
        </nav>
      </section>

      {openPiece?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(2, 12, 40, 0.92)' }}
          onClick={() => setOpenPiece(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openPiece.title}
        >
          <button
            type="button"
            onClick={() => setOpenPiece(null)}
            className="absolute right-4 top-4 px-3 py-2 text-sm tracking-[0.2em] uppercase"
            style={{ color: INK }}
          >
            Close
          </button>
          <img
            src={imageSrc(openPiece.image, basePath)}
            alt={openPiece.title}
            className="max-h-[90vh] max-w-[94vw] bg-white object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
