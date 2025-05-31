'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <Link href="/" className="flex items-center">
            <div className="font-bold text-xl">{t('site_title')}</div>
            <div className="ml-2 bg-white text-gray-800 px-2 py-1 rounded-md text-xs font-semibold">
              {t('dental_department')}
            </div>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              {t('nav_home')}
            </Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">
              {t('nav_services')}
            </Link>
            <Link href="/appointments" className="hover:text-gray-300 transition-colors">
              {t('nav_appointments')}
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              {t('nav_about')}
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              {t('nav_contact')}
            </Link>
          </div>
          
          <div className="lg:ml-6">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
} 