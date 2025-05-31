'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import teamData from '../../data/team.json';

export default function ServicesPage() {
  const { language } = useLanguage();

  // Team members data from team.json
  const teamMembers = [
    {
      id: 'Extractosaurus',
      name: language === 'zh-hant' ? '拔牙暴龍' : 'Extractosaurus',
      specialty: language === 'zh-hant' ? '口腔外科' : 'Maxillofacial Surgery',
      image: '/images/team/Extractosaurus.png',
      profileKey: 'Extractosaurus_profile'
    },
    {
      id: 'ScalingKitty',
      name: language === 'zh-hant' ? '洗牙貓貓' : 'Scaling Kitty',
      specialty: language === 'zh-hant' ? '牙周病科' : 'Periodontics',
      image: '/images/team/ScalingKitty.png',
      profileKey: 'ScalingKitty_profile'
    },
    {
      id: 'ProsthoWolf',
      name: language === 'zh-hant' ? '波索沃' : 'ProsthoWolf',
      specialty: language === 'zh-hant' ? '補綴科' : 'Prosthodontics',
      image: '/images/team/ProsthoWolf.png',
      profileKey: 'ProsthoWolf_profile'
    },
    {
      id: 'R3_5Cow',
      name: language === 'zh-hant' ? 'R3.5牛' : 'R3.5 Cow',
      specialty: language === 'zh-hant' ? '家庭牙科住院醫師' : 'Family Dentistry Resident',
      image: '/images/team/R3_5Cow.png',
      profileKey: 'R3_5Cow_profile'
    },
    {
      id: 'CaptainFrontalLobotomy',
      name: language === 'zh-hant' ? '前額葉切除隊長' : 'Captain Frontal Lobotomy',
      specialty: language === 'zh-hant' ? '神經外科' : 'Neurosurgery',
      image: '/images/team/CaptainFrontalLobotomy.png',
      profileKey: 'CaptainFrontalLobotomy_profile'
    },
    {
      id: 'OralPathAnteater',
      name: language === 'zh-hant' ? '口病食蟻獸' : 'Oral Pathology Anteater',
      specialty: language === 'zh-hant' ? '口腔病理科' : 'Oral Pathology',
      image: '/images/team/OralPathAnteater_text.png',
      profileKey: 'OralPathAnteater_profile'
    },
    {
      id: 'PedoRabbit',
      name: language === 'zh-hant' ? '兒牙兔' : 'PedoRabbit',
      specialty: language === 'zh-hant' ? '兒童牙科' : 'Pedodontics',
      image: '/images/team/PedoRabbit.png',
      profileKey: 'PedoRabbit_profile'
    },
    {
      id: 'Lavisheep',
      name: language === 'zh-hant' ? '敗家綿羊' : 'Lavisheep',
      specialty: language === 'zh-hant' ? '齒顎矯正科' : 'Orthodontics',
      image: '/images/team/Lavisheep.png',
      profileKey: 'Lavisheep_profile'
    },
    {
      id: 'TerribleDad',
      name: language === 'zh-hant' ? '西醫歐(洗牙貓貓他爸)' : 'CEO (Scaling Kitty\'s Dad)',
      specialty: language === 'zh-hant' ? '耳鼻喉科' : 'ENT',
      image: '/images/team/TerribleDad.png',
      profileKey: 'TerribleDad_profile'
    },
    {
      id: 'Manager',
      name: language === 'zh-hant' ? '管理層' : 'Manager',
      specialty: language === 'zh-hant' ? '管理科' : 'Administration',
      image: '/images/team/Manager.png',
      profileKey: 'Manager_profile'
    }
  ];

  // Get profile text from team.json with proper typing
  const getProfileText = (profileKey: string): string => {
    const profile = (teamData as Record<string, unknown>)[profileKey];
    if (profile && typeof profile === 'object' && profile !== null && 'text' in profile) {
      const textData = (profile as { text: Record<string, string> }).text;
      return textData[language] || textData['zh-hant'] || '';
    }
    return '';
  };

  // Get team title and description with proper typing
  const getTeamData = (key: string): string => {
    const data = (teamData as Record<string, unknown>)[key];
    if (data && typeof data === 'object' && data !== null && 'text' in data) {
      const textData = (data as { text: Record<string, string> }).text;
      return textData[language] || textData['zh-hant'] || '';
    }
    return key === 'team_title' ? 'Our Specialists' : '';
  };

  const teamTitle = getTeamData('team_title');
  const teamDescription = getTeamData('team_description');

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

      {/* Team Members */}
      <main className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Character Image */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg"
                        priority={index < 3}
                      />
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="lg:w-1/2">
                    <div className="text-center lg:text-left">
                      <h2 className="text-3xl font-bold text-black mb-2">
                        {member.name}
                      </h2>
                      <h3 className="text-xl text-blue-600 font-semibold mb-6">
                        {member.specialty}
                      </h3>
                      
                      {/* Profile Description */}
                      <div 
                        className="text-gray-700 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{ 
                          __html: getProfileText(member.profileKey) 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            {language === 'zh-hant' ? '準備好預約專科服務了嗎？' : 'Ready to Schedule a Specialist Service?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            {language === 'zh-hant' 
              ? '我們的專業團隊準備為您的寵物提供最佳的專科護理。' 
              : 'Our specialist team is ready to provide the best care for your pet.'
            }
          </p>
          <a
            href="/appointments"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-block"
          >
            {language === 'zh-hant' ? '立即預約' : 'Book an Appointment'}
          </a>
        </div>
      </section>
    </div>
  );
} 