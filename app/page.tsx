'use client';

import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";
import { useState, useEffect } from "react";

// ----------------------------------------

export default function Home() {
  const { t } = useLanguage();
  
  // Rotating image display
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/api/placeholder/800/300",
    "/api/placeholder/800/300", 
    "/api/placeholder/800/300",
    "/api/placeholder/800/300"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with light gray background */}
      <header className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="post-header text-center">
            <h1 className="text-4xl font-bold text-black mb-4">
              動物醫院牙科部 Animal_Hospital:Dental_Dept
            </h1>
          </div>
        </div>
      </header>

      {/* Rotating Image Display Wall */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Hospital image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with white background and black text */}
      <main className="bg-white text-black">
        <div className="container mx-auto px-4 py-8">
          
          {/* 最新消息 Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black border-b-2 border-gray-200 pb-2">
              最新消息 Latest News
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-black mb-1">
                  新設備引進通知
                </h3>
                <p className="text-gray-700 text-sm mb-1">2024-01-15</p>
                <p className="text-gray-800">
                  本院最新引進先進牙科治療設備，提供更精確的診斷與治療服務。
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-black mb-1">
                  春節期間門診時間調整
                </h3>
                <p className="text-gray-700 text-sm mb-1">2024-01-10</p>
                <p className="text-gray-800">
                  春節假期期間，門診時間將有所調整，請提前預約或來電確認。
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-black mb-1">
                  免費口腔健康檢查活動
                </h3>
                <p className="text-gray-700 text-sm mb-1">2024-01-05</p>
                <p className="text-gray-800">
                  本月推出寵物免費口腔健康檢查活動，歡迎預約參加。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-300 mb-8" />

          {/* About Section - Simplified */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {Array.isArray(t('about_section_content')) ? (
                  (t('about_section_content') as string[]).map((paragraph, index) => (
                    <p key={index} className="text-lg text-black mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg text-black mb-4 leading-relaxed">
                    {t('about_section_content')}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Services Section - Simple List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-black">{t('services_title')}</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-black">{t('service_cleaning_title')}</h3>
                <p className="text-gray-700">{t('service_cleaning_desc')}</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-black">{t('service_extraction_title')}</h3>
                <p className="text-gray-700">{t('service_extraction_desc')}</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-black">{t('service_preventive_title')}</h3>
                <p className="text-gray-700">{t('service_preventive_desc')}</p>
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
      </main>
    </div>
  );
}
