'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../../data/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-white">
        {language === 'zh-hant' ? '選擇語言：' : 'Choose Language:'}
      </span>
      <div className="flex space-x-1">
        <button
          onClick={() => handleLanguageChange('zh-hant')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === 'zh-hant'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          繁中
        </button>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === 'en'
              ? 'bg-gray-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
} 