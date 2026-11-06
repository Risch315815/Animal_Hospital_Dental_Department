'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export const PAGE_BG = '#042878';
export const INK = '#95DEFF';
export const BASE_PATH = '/Animal_Hospital_Dental_Department';

export function portfolioImageSrc(image: string) {
  return image.startsWith('http') ? image : `${BASE_PATH}${image}`;
}

export default function PortfolioFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { setLanguage } = useLanguage();

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

  return (
    <div className="min-h-screen" style={{ backgroundColor: PAGE_BG, color: INK }}>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
        <p className="mb-8 text-center text-xs tracking-[0.38em]" style={{ color: INK }}>
          JoeBing DDS
          <br />
          <br />
          <Link href="/en" className="hover:underline">
            PORTFOLIO
          </Link>
        </p>
        <div className="mx-auto mb-8 h-px w-44" style={{ backgroundColor: INK, opacity: 0.45 }} />

        <div className="mb-10 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold tracking-[0.12em] sm:text-6xl">
            {title}
          </h1>
        </div>

        {children}

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
    </div>
  );
}
