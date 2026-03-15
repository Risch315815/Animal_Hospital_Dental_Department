'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function EndoMapPage() {
  const { language } = useLanguage();
  const basePath = process.env.NODE_ENV === 'production' ? '/Animal_Hospital_Dental_Department' : '';
  const title = language === 'zh-hant' ? '根管治療地圖' : 'Map for Endodontic Treatment';
  const backLabel = language === 'zh-hant' ? '回專科醫師團隊' : 'Back to Specialists';

  const images = [
    { file: 'Endo-map01.png' },
    { file: 'Endo-map02.png' },
    { file: 'Endo-map03.png' },
    { file: 'Endo-map04.png' },
    { file: 'Endo-map05.png' },
    { file: 'Endo-map06.png' },
    { file: 'Endo-map07.png' },
    { file: 'Endo-map08.png' },
    { file: 'Endo-map09.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
          <Link
            href="/services"
            className="mt-6 inline-block text-blue-600 hover:underline font-medium"
          >
            ← {backLabel}
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-10">
            {images.map((img, index) => (
              <div key={img.file} className="rounded-lg shadow-lg overflow-hidden bg-white">
                <Image
                  src={`${basePath}/images/education/Endo-map/${img.file}`}
                  alt={
                    language === 'zh-hant'
                      ? `根管治療地圖 第${index + 1}張`
                      : `Endodontic treatment map ${index + 1}`
                  }
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
