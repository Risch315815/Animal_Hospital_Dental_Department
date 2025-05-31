'use client';

import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Post Header - Simple like the original */}
      <div className="post-header text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          動物醫院牙科部 Animal_Hospital:Dental_Dept
        </h1>
        <br />
      </div>

      <hr className="border-gray-300 mb-8" />
      <br />

      {/* About Section - Simplified */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {Array.isArray(t('about_section_content')) ? (
              (t('about_section_content') as string[]).map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('about_section_content')}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services Section - Simple List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('services_title')}</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold text-gray-800">{t('service_cleaning_title')}</h3>
            <p className="text-gray-600">{t('service_cleaning_desc')}</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">{t('service_extraction_title')}</h3>
            <p className="text-gray-600">{t('service_extraction_desc')}</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">{t('service_preventive_title')}</h3>
            <p className="text-gray-600">{t('service_preventive_desc')}</p>
          </li>
        </ul>
      </section>

      {/* Quick Links - Simple like the original */}
      <section className="text-center">
        <div className="space-x-4">
          <Link
            href="/appointments"
            className="inline-block text-blue-600 hover:text-blue-800 underline font-semibold"
          >
            {t('book_appointment')}
          </Link>
          <Link
            href="/contact"
            className="inline-block text-blue-600 hover:text-blue-800 underline font-semibold"
          >
            {t('contact_us')}
          </Link>
        </div>
      </section>
    </div>
  );
}
