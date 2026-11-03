'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-hant');

  // Load saved language from localStorage on mount.
  // The two front pages are fixed: / is Chinese, /en is English.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const path = window.location.pathname;
    if (/\/en\/?$/.test(path)) {
      setLanguage('en');
      return;
    }
    if (
      path === '/' ||
      /\/Animal_Hospital_Dental_Department\/?$/.test(path)
    ) {
      setLanguage('zh-hant');
      return;
    }

    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && (savedLang === 'zh-hant' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language);
    }
  }, [language]);

  // Translation function
  const t = (key: string): string | string[] => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 