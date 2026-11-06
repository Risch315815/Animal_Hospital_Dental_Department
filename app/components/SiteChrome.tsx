'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortfolio = pathname === '/en' || pathname.startsWith('/en/');

  return (
    <>
      {!isPortfolio && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isPortfolio && <Footer />}
    </>
  );
}
