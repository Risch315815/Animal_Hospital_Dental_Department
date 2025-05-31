'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            {t('site_title')} {t('dental_department')}
          </h3>
          <p className="text-gray-300">
            {t('footer_description')}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{t('quick_links')}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="text-gray-300 hover:text-white">
                {t('footer_our_specialists')}
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="text-gray-300 hover:text-white">
                {t('footer_appointment_system')}
              </Link>
            </li>
            <li>
              <Link href="/announcements" className="text-gray-300 hover:text-white">
                {t('footer_important_announcements')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{t('footer_contact_us')}</h3>
          <address className="not-italic text-gray-300">
            <div className="mb-2">123 We Care Avenue</div>
            <div className="mb-2">Furrinary District, VT 12345</div>
            <div className="mb-2">{t('footer_hotline')}: (555) 123-4567</div>
            <div className="mb-2">{t('footer_mailbox')}: YourOpinionMatters@animalhospital.com</div>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} {t('greetings')}</p>
      </div>
    </footer>
  );
} 