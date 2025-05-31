export type Language = 'zh-hant' | 'en';

export interface Translation {
  [key: string]: {
    'zh-hant': string | string[];
    'en': string | string[];
  };
}

export const translations: Translation = {
  // Navigation
  nav_home: {
    'zh-hant': '首頁',
    'en': 'Home'
  },
  nav_services: {
    'zh-hant': '服務項目',
    'en': 'Services'
  },
  nav_appointments: {
    'zh-hant': '預約',
    'en': 'Appointments'
  },
  nav_about: {
    'zh-hant': '關於我們',
    'en': 'About Us'
  },
  nav_contact: {
    'zh-hant': '聯繫我們',
    'en': 'Contact'
  },
  
  // Home page
  site_title: {
    'zh-hant': '動物醫院',
    'en': 'Animal Hospital'
  },
  dental_department: {
    'zh-hant': '牙科部',
    'en': 'Dental Department'
  },
  hero_title: {
    'zh-hant': '為您的寵物提供專業牙科護理',
    'en': 'Specialized Dental Care for Your Pets'
  },
  hero_subtitle: {
    'zh-hant': '我們的專業團隊為您的寵物提供全面的牙科服務，讓您的毛孩保持健康快樂。',
    'en': 'Our specialized team provides comprehensive dental services to keep your pets healthy and happy.'
  },
  book_appointment: {
    'zh-hant': '立即預約',
    'en': 'Book an Appointment'
  },
  
  
  // Why choose us
  why_choose_title: {
    'zh-hant': '為什麼選擇我們的牙科部',
    'en': 'Why Choose Our Dental Department'
  },
  expertise_title: {
    'zh-hant': '專業技術',
    'en': 'Specialized Expertise'
  },
  expertise_desc: {
    'zh-hant': '我們的獸醫師在動物牙科學方面接受過專業培訓，為您的寵物提供最佳護理。',
    'en': 'Our veterinarians have specialized training in animal dentistry to provide the best care for your pets.'
  },
  equipment_title: {
    'zh-hant': '先進設備',
    'en': 'Advanced Equipment'
  },
  equipment_desc: {
    'zh-hant': '專為動物牙科手術設計的最先進牙科設備。',
    'en': 'State-of-the-art dental equipment designed specifically for animal dental procedures.'
  },
  care_title: {
    'zh-hant': '關懷護理',
    'en': 'Compassionate Care'
  },
  care_desc: {
    'zh-hant': '我們了解牙科手術對寵物來說可能有壓力，因此我們專注於溫和、關懷的護理。',
    'en': 'We understand dental procedures can be stressful for pets, so we focus on gentle, compassionate care.'
  },
  aftercare_title: {
    'zh-hant': '完整的後續護理',
    'en': 'Complete Aftercare'
  },
  aftercare_desc: {
    'zh-hant': '詳細的後續護理說明和追蹤預約，確保您的寵物康復。',
    'en': 'Detailed aftercare instructions and follow-up appointments to ensure your pet\'s recovery.'
  },
  
  // Call to action
  cta_title: {
    'zh-hant': '準備好預約牙科檢查了嗎？',
    'en': 'Ready to Schedule a Dental Checkup?'
  },
  cta_subtitle: {
    'zh-hant': '不要等到您的寵物出現牙科問題。預防護理是您寵物整體健康的關鍵。',
    'en': 'Don\'t wait until your pet has dental problems. Preventive care is key to your pet\'s overall health.'
  },
  
  // Contact
  contact_us: {
    'zh-hant': '聯繫我們',
    'en': 'Contact Us'
  },
  
  // Footer
  footer_description: {
    'zh-hant': '為您的所有寵物提供專業牙科護理。',
    'en': 'Providing specialized dental care for all your pets.'
  },
  quick_links: {
    'zh-hant': '快速連結',
    'en': 'Quick Links'
  },
  copyright: {
    'zh-hant': '動物醫院牙科部。保留所有權利。',
    'en': 'Animal Hospital Dental Department. All rights reserved.'
  }
}; 