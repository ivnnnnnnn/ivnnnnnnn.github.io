import { Sparkles, TrendingUp, Target } from 'lucide-react';

export default function Summary() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Sparkles className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Ringkasan Profesional</h2>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="mb-4">
          Marketing professional yang passionate dengan pengalaman dalam mengembangkan strategi digital marketing yang menghasilkan pertumbuhan terukur. Lulusan <span className="font-semibold text-blue-600">Manajemen Bisnis dari Universitas Indonesia</span> dengan track record meningkatkan engagement media sosial hingga 30% dan penjualan online hingga 40%.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Kemampuan Analitis</h3>
              <p className="text-sm text-gray-700">
                Menganalisis data kampanye untuk mengoptimalkan ROI dan mengidentifikasi peluang pertumbuhan melalui insight berbasis data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
            <Target className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Pemecahan Masalah</h3>
              <p className="text-sm text-gray-700">
                Mengembangkan solusi kreatif untuk tantangan marketing, dari meningkatkan engagement hingga optimasi konversi penjualan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
