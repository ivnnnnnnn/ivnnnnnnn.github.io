import { Rocket, TrendingUp, Target, Award } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-teal-100 rounded-lg">
          <Rocket className="w-6 h-6 text-teal-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Proyek & Portfolio</h2>
      </div>

      <div className="border-2 border-teal-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg flex-shrink-0">
              <Target className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Kampanye Digital Marketing untuk UMKM Lokal
              </h3>
              <p className="text-teal-50">
                Strategi marketing komprehensif yang mengubah bisnis lokal
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-600" />
              Ringkasan Proyek
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Merancang dan mengeksekusi kampanye digital marketing end-to-end untuk UMKM lokal yang fokus pada produk fashion. Proyek ini meliputi strategi konten, social media management, dan optimasi e-commerce yang menghasilkan peningkatan penjualan online sebesar 40% dalam waktu 3 bulan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-teal-600 mb-1">40%</div>
              <div className="text-sm text-gray-700">Peningkatan Penjualan Online</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-gray-700">Bulan Durasi Kampanye</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">2.5x</div>
              <div className="text-sm text-gray-700">ROI Marketing Spend</div>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200 flex items-center gap-2"
          >
            {isExpanded ? 'Sembunyikan Detail' : 'Lihat Detail Lengkap'}
            <TrendingUp className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {isExpanded && (
            <div className="mt-6 space-y-4 animate-fadeIn">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-3">Strategi yang Diimplementasikan:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span><strong>Content Strategy:</strong> Membuat 50+ konten visual berkualitas tinggi untuk Instagram dan Facebook dengan storytelling yang kuat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span><strong>Social Media Ads:</strong> Mengoptimalkan kampanye iklan dengan budget efisien, targeting audience yang tepat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span><strong>E-commerce Optimization:</strong> Meningkatkan UX website dan conversion rate melalui A/B testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span><strong>Data Analytics:</strong> Monitoring real-time metrics dan membuat laporan mingguan untuk optimasi berkelanjutan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">✓</span>
                    <span><strong>Community Management:</strong> Membangun engagement dengan customer melalui responsive communication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-3">Tools yang Digunakan:</h5>
                <div className="flex flex-wrap gap-2">
                  {['Meta Ads Manager', 'Instagram Analytics', 'Canva', 'Google Analytics', 'Shopify', 'Hootsuite', 'Google Sheets'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
