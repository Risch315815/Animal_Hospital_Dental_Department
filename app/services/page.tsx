'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const TEAM_TITLE = { 'zh-hant': '專科醫師團隊', en: 'Our Specialists' } as const;
const TEAM_DESCRIPTION = {
  'zh-hant': '<strong>動物醫院牙科部</strong>  由一群在乎專業超過病患人身安全的醫師組成，只提供最高標準的治療。',
  en: "<strong>The Animal Hospital's Dental Department</strong> is equipped with a team of specialists who prioritize professional excellence over patient safety, only providing treatment of the utmost standard."
} as const;

const TEAM_PROFILES = {
  Extractosaurus: {
    'zh-hant': '<strong>專長項目：</strong><strong>一般拔牙，阻生齒拔牙，舒眠拔牙</strong><br>齒槽骨整形術，各種病理組織切除，植牙<br><br><strong>特殊能力：</strong> 只要是牙齒，不管多深，位置多刁鑽，花多久時間，都能拔下來',
    en: "<strong>Treatment Specialties:</strong><strong>Simple & impacted tooth extraction, sedation tooth extraction</strong><br>alveoloplasty, pathological lesion excision<br><br><strong>Special Ability:</strong> As long as it's a tooth, no matter how deep it is, how hard it is, or how long it takes, he'll get it out."
  },
  ScalingKitty: {
    'zh-hant': '<strong>專長項目：</strong>口腔衛生教育，牙周深度清潔，牙周再生手術<br>牙齦美觀手術，上顎竇增高術，微創植牙<br><br><strong>特殊能力：</strong> 手術技巧微創到幾乎不見血，但就是收不到病人',
    en: "<strong>Treatment Specialties:</strong>Oral hygiene instruction, root planing, regenerative surgery<br>esthetic gingiva surgery, sinus augmentation, minimally-invasive dental implant<br><br><strong>Special Ability:</strong> Wields extraordinary minimally-invasive surgical skill, but still can't get patients"
  },
  ProsthoWolf: {
    'zh-hant': '<strong>專長項目：</strong>3D齒雕，美學貼片，美學陶瓷假牙，美學植牙假牙<br>過渡性活動義齒，吸附性活動義齒，根管治療<br><br><strong>特殊能力：</strong> 人際手腕極高，甚至用言語賞奧客巴掌也不會被投訴',
    en: "<strong>Treatment Specialties:</strong>Esthetic inlay/onlay, esthetic ceramic crown, esthetic implant restoration<br>interim denture, removable denture, endodontic treatment<br><br><strong>Special Ability:</strong> Extremely gregarious such that difficult patients never thought to file complaints even after being slapped in the face by his insults."
  },
  R3_5Cow: {
    'zh-hant': '<strong>專長項目：</strong>任何牙科治療<br><br><strong>特殊能力：</strong> 對自己未經證實的臨床技能有超乎常人的信心',
    en: "<strong>Treatment Specialties:</strong><strong>Any dental treatment</strong><br><br><strong>Special Ability:</strong> Holds unparalleled confidence in his uncorroborated clinical skills."
  },
  DrShaw: {
    'zh-hant': '<strong>專長項目：</strong><strong>任何</strong>病理診斷(包含<strong>神經感覺異常</strong>)<br><br><strong>特殊能力：</strong> 在讀博班期間獲得了病理神之義眼，能洞悉患者的病理機轉到分子層次',
    en: "<strong>Treatment Specialties:</strong><strong>ANY</strong> pathologic diagnosis (including <strong>paresthesia</strong>)<br><br><strong>Special Ability:</strong> Obtained all-seeing-eye for pathologic disorder during his PhD period, enabling him to perceive the pathologic mechanism to the molecular level."
  },
  PedoRabbit: {
    'zh-hant': '<strong>專長項目：</strong>舒眠牙科治療，早期矯正<br>幼兒行為控制，齲齒治療，乳牙牙髓治療<br><br><strong>特殊能力：</strong> 用❤️讓兒童患者不吵',
    en: "<strong>Treatment Specialties:</strong>Sedative dental treatment, early orthodontics<br>behavior control, caries treatment, primary endodontic treatment<br><br><strong> Special Ability:</strong>Silencing children with ❤️."
  },
  Lavisheep: {
    'zh-hant': '<strong>專長項目：</strong>傳統齒顎矯正，隱形矯正，唇顎裂矯正<br><br><strong>特殊能力：</strong> 花的比賺的多',
    en: "<strong>Treatment Specialties:</strong>Orthodontics, invisible braces, cleft lip/palate treatment<br><br><strong>Special Ability:</strong> Spending more than earned."
  },
  TerribleDad: {
    'zh-hant': '<strong>專長項目：</strong>鼻腔內視鏡手術，鼻咽癌/口腔癌手術<br>鼻軟骨塑型術，扁桃切除術，聲帶成形術<br><br><strong>特殊能力：</strong> 口腔癌、鼻咽癌手術專家(拔牙暴龍的偶像)；讓全院最有耐心的醫師(洗牙貓貓)覺得他很煩',
    en: "<strong>Treatment Specialties:</strong>Sinonasal endoscopic surgery, nasopharyngeal/oral cancer resection<br>nasal cartilage plasty, tonsillectomy, vocal cord plasty<br><br><strong>Special Ability:</strong> Expert in oral and nasopharyngeal cancer surgery (Extractosaurus is a fan); annoying the most patient dentist of the entire hospital(Scaling Kitty)."
  },
  Manager: {
    'zh-hant': '<strong>專長項目：</strong>醫院管理，財務規劃，公關與行銷<br><br><strong>特殊能力：</strong>替醫院賺$$',
    en: "<strong>Treatment Specialties:</strong>Hospital administration, financial planning, public relation and marketing<br><br><strong>Special Ability:</strong> <strong>Profittability</strong>."
  }
} as const;

export default function ServicesPage() {
  const { language } = useLanguage();

  const basePath = process.env.NODE_ENV === 'production' ? '/Animal_Hospital_Dental_Department' : '';

  const teamMembers = [
    { id: 'Extractosaurus', name: { 'zh-hant': '拔牙暴龍', en: 'Extractosaurus' }, specialty: { 'zh-hant': '口腔外科', en: 'Maxillofacial Surgery' }, imagePath: 'Extractosaurus', profileKey: 'Extractosaurus' as keyof typeof TEAM_PROFILES },
    { id: 'ScalingKitty', name: { 'zh-hant': '洗牙貓貓', en: 'Scaling Kitty' }, specialty: { 'zh-hant': '牙周病科', en: 'Periodontics' }, imagePath: 'ScalingKitty', profileKey: 'ScalingKitty' as keyof typeof TEAM_PROFILES },
    { id: 'ProsthoWolf', name: { 'zh-hant': '波索沃', en: 'ProsthoWolf' }, specialty: { 'zh-hant': '補綴科 | 牙體復型科 | 牙髓病科', en: 'Prosthodontics | Operative Dentistry | Endodontics' }, imagePath: 'ProsthoWolf', profileKey: 'ProsthoWolf' as keyof typeof TEAM_PROFILES },
    { id: 'R3_5Cow', name: { 'zh-hant': 'R3.5牛', en: 'R3.5 Cow' }, specialty: { 'zh-hant': '家庭牙科住院醫師', en: 'Family Dentistry Resident' }, imagePath: 'R3_5Cow', profileKey: 'R3_5Cow' as keyof typeof TEAM_PROFILES },
    { id: 'DrShaw', name: { 'zh-hant': '蕭博士', en: 'Dr. Shaw' }, specialty: { 'zh-hant': '口腔病理科', en: 'Oral Pathology' }, imagePath: 'DrShaw', profileKey: 'DrShaw' as keyof typeof TEAM_PROFILES },
    { id: 'PedoRabbit', name: { 'zh-hant': '兒牙兔', en: 'PedoRabbit' }, specialty: { 'zh-hant': '兒童牙科', en: 'Pedodontics' }, imagePath: 'PedoRabbit', profileKey: 'PedoRabbit' as keyof typeof TEAM_PROFILES },
    { id: 'Lavisheep', name: { 'zh-hant': '敗家綿羊', en: 'Lavisheep' }, specialty: { 'zh-hant': '齒顎矯正科', en: 'Orthodontics' }, imagePath: 'Lavisheep', profileKey: 'Lavisheep' as keyof typeof TEAM_PROFILES },
    { id: 'TerribleDad', name: { 'zh-hant': '西醫歐(洗牙貓貓他爸)', en: "CEO (Scaling Kitty's Dad)" }, specialty: { 'zh-hant': '耳鼻喉科', en: 'ENT' }, imagePath: 'TerribleDad', profileKey: 'TerribleDad' as keyof typeof TEAM_PROFILES },
    { id: 'Manager', name: { 'zh-hant': '管理層', en: 'Manager' }, specialty: { 'zh-hant': '管理科', en: 'Administration' }, imagePath: 'Manager', profileKey: 'Manager' as keyof typeof TEAM_PROFILES }
  ];

  const teamTitle = TEAM_TITLE[language] ?? TEAM_TITLE['zh-hant'];
  const teamDescription = TEAM_DESCRIPTION[language] ?? TEAM_DESCRIPTION['zh-hant'];

  const referralTitle = language === 'zh-hant' ? '院內轉診地圖' : 'Specialist Referral';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">
              {teamTitle}
            </h1>
            <div 
              className="text-lg text-gray-700 max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: teamDescription }}
            />
          </div>
        </div>
      </header>

      {/* Referral flowchart */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
              {referralTitle}
            </h2>
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-50">
              <Image
                src={`${basePath}/images/referral-departments.png`}
                alt={referralTitle}
                width={1200}
                height={800}
                className="w-[80vw] md:w-[50vw] h-auto mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialists intro + Team Members */}
      <main className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-black mb-10 text-center">
            {language === 'zh-hant' ? '認識我們的專科醫師' : 'Meet Our Specialists'}
          </h2>
          <div className="space-y-16">
            {teamMembers.map((member, index) => {
              const imgLang = language === 'zh-hant' ? 'zh' : 'en';
              const profile = TEAM_PROFILES[member.profileKey];
              const profileHtml = (profile[language] ?? profile['zh-hant']) || '';
              return (
                <div key={member.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <div className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="lg:w-1/2">
                      <div className="relative">
                        <Image
                          src={`${basePath}/images/team/${member.imagePath}_${imgLang}.png`}
                          alt={member.name[language] ?? member.name['zh-hant']}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg shadow-lg"
                          priority={index < 3}
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-black mb-2">
                          {member.name[language] ?? member.name['zh-hant']}
                        </h2>
                        <h3 className="text-xl text-blue-600 font-semibold mb-6">
                          {member.specialty[language] ?? member.specialty['zh-hant']}
                        </h3>
                        <div
                          className="text-gray-700 leading-relaxed text-lg"
                          dangerouslySetInnerHTML={{ __html: profileHtml }}
                        />
                        <a
                          href={`${basePath}/education`}
                          className="mt-4 inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg font-medium text-base transition-colors"
                        >
                          {language === 'zh-hant' ? '衛教專區' : 'Educational Content'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            {language === 'zh-hant' ? '預約我們的服務吧！' : 'Let us serve you!'}
          </h2>
          <a
            href="/JoeBingDDS/#schedule"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-block"
          >
            {language === 'zh-hant' ? '立即預約' : 'Book an Appointment'}
          </a>
        </div>
      </section>
    </div>
  );
} 