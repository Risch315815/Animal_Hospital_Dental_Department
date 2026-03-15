'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';

export default function PeriodonticsMapPage() {
  const { language } = useLanguage();
  const basePath = process.env.NODE_ENV === 'production' ? '/Animal_Hospital_Dental_Department' : '';
  const title = language === 'zh-hant' ? '牙周病科地圖' : 'Map for Periodontics';
  const backLabel = language === 'zh-hant' ? '回專科醫師團隊' : 'Back to Specialists';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {language === 'zh-hant'
              ? '此頁面為牙周病科轉診與治療地圖，內容建置中。'
              : 'This page is for the periodontics referral and treatment map. Content coming soon.'}
          </p>
          <Link
            href={`${basePath}/services`}
            className="mt-6 inline-block text-blue-600 hover:underline font-medium"
          >
            ← {backLabel}
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center text-gray-500">
            {language === 'zh-hant' ? '（地圖或衛教內容可放置於此）' : '(Map or educational content can be placed here)'}
          </div>
        </div>
      </section>
    </div>
  );
}
