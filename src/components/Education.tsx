import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-teal-100 rounded-lg">
          <GraduationCap className="w-6 h-6 text-teal-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Pendidikan</h2>
      </div>

      <div className="relative">
        <div className="border-2 border-teal-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex-shrink-0">
              <Award className="w-8 h-8 text-teal-600" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sarjana Manajemen Bisnis
              </h3>
              <p className="text-lg font-semibold text-teal-600 mb-3">
                Universitas Indonesia
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-gray-900">Fokus Studi</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Digital Marketing Strategy & Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Consumer Behavior & Market Research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Brand Management & Communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Business Analytics & Data-Driven Decision Making</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  Marketing Management
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Business Strategy
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
