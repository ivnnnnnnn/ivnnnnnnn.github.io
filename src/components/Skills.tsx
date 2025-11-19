import { Zap, BarChart3, Palette, MessageCircle, Users, Database } from 'lucide-react';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: 'chart' | 'palette' | 'message' | 'users' | 'database' | 'zap';
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: 'Digital Marketing', level: 85, category: 'Marketing', icon: 'chart' },
    { name: 'Social Media Management', level: 90, category: 'Marketing', icon: 'message' },
    { name: 'Content Strategy', level: 80, category: 'Marketing', icon: 'palette' },
    { name: 'Marketing Analytics', level: 75, category: 'Analytics', icon: 'database' },
    { name: 'Data Analysis', level: 70, category: 'Analytics', icon: 'chart' },
    { name: 'Team Leadership', level: 85, category: 'Soft Skills', icon: 'users' },
    { name: 'Problem Solving', level: 90, category: 'Soft Skills', icon: 'zap' },
    { name: 'Campaign Management', level: 80, category: 'Marketing', icon: 'palette' }
  ];

  const getIcon = (icon: string) => {
    const iconClass = "w-5 h-5";
    switch (icon) {
      case 'chart': return <BarChart3 className={iconClass} />;
      case 'palette': return <Palette className={iconClass} />;
      case 'message': return <MessageCircle className={iconClass} />;
      case 'users': return <Users className={iconClass} />;
      case 'database': return <Database className={iconClass} />;
      case 'zap': return <Zap className={iconClass} />;
      default: return <Zap className={iconClass} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Marketing':
        return { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' };
      case 'Analytics':
        return { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' };
      case 'Soft Skills':
        return { bg: 'bg-teal-500', light: 'bg-teal-100', text: 'text-teal-600' };
      default:
        return { bg: 'bg-gray-500', light: 'bg-gray-100', text: 'text-gray-600' };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Zap className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Keahlian</h2>
      </div>

      <div className="grid gap-4">
        {skills.map((skill) => {
          const colors = getCategoryColor(skill.category);
          const isHovered = hoveredSkill === skill.name;

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`group transition-all duration-300 ${
                isHovered ? 'scale-[1.02]' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${colors.light} rounded-lg ${colors.text}`}>
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className={`ml-2 text-xs px-2 py-1 ${colors.light} ${colors.text} rounded-full`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out relative`}
                  style={{ width: isHovered ? `${skill.level}%` : '0%' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Tools & Platform
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Google Analytics', 'Meta Ads Manager', 'Canva', 'Instagram Insights', 'Hootsuite', 'Microsoft Excel', 'Google Sheets', 'Mailchimp'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
