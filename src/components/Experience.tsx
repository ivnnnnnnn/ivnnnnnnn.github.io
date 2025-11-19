import { Briefcase, Calendar, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: 'briefcase' | 'users';
  color: string;
}

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: 'Marketing Intern',
      company: 'Startup Lokal',
      period: 'Juni 2023 - Agustus 2023',
      description: 'Bertanggung jawab mengelola kampanye digital marketing dan meningkatkan brand awareness melalui berbagai platform media sosial.',
      achievements: [
        'Meningkatkan engagement media sosial sebesar 30%',
        'Mengembangkan strategi konten yang konsisten',
        'Berkolaborasi dengan tim untuk kampanye product launch',
        'Melakukan analisis kompetitor dan market research'
      ],
      icon: 'briefcase',
      color: 'blue'
    },
    {
      title: 'Wakil Ketua Klub Marketing',
      company: 'Universitas Indonesia',
      period: 'Januari 2022 - Januari 2023',
      description: 'Memimpin tim dalam mengorganisir berbagai acara kampus dan meningkatkan visibilitas klub di kalangan mahasiswa.',
      achievements: [
        'Mengorganisir 5 acara kampus yang sukses',
        'Menjangkau 500+ mahasiswa melalui berbagai kegiatan',
        'Mengelola tim volunteer dan koordinasi event',
        'Mengembangkan strategi promosi untuk setiap acara'
      ],
      icon: 'users',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    return {
      bg: color === 'blue' ? 'bg-blue-100' : 'bg-teal-100',
      text: color === 'blue' ? 'text-blue-600' : 'text-teal-600',
      border: color === 'blue' ? 'border-blue-200' : 'border-teal-200',
      gradient: color === 'blue'
        ? 'from-blue-50 to-blue-100'
        : 'from-teal-50 to-teal-100'
    };
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Briefcase className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Pengalaman Kerja</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const colors = getColorClasses(exp.color);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border-2 ${colors.border} rounded-xl p-6 transition-all duration-300 ${
                isHovered ? 'shadow-lg scale-[1.02]' : 'shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 ${colors.bg} rounded-lg flex-shrink-0`}>
                  {exp.icon === 'briefcase' ? (
                    <Briefcase className={`w-6 h-6 ${colors.text}`} />
                  ) : (
                    <Users className={`w-6 h-6 ${colors.text}`} />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className={`text-lg font-semibold ${colors.text} mb-2`}>
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <div className={`bg-gradient-to-r ${colors.gradient} rounded-lg p-4`}>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className={`w-5 h-5 ${colors.text}`} />
                      <span className="font-semibold text-gray-900">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className={`${colors.text} mt-1`}>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
