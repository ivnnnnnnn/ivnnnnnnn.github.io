import { Mail, Phone, MapPin, Linkedin, Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const apiUrl = `${supabaseUrl}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal mengirim pesan');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim pesan');
      console.error('Contact form error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Hubungi Saya</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-6">
            Tertarik untuk berkolaborasi atau ingin mendiskusikan peluang? Saya selalu terbuka untuk peluang baru dan percakapan menarik tentang marketing dan bisnis.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:sarah.putri@email.com"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Email</div>
                <div className="font-semibold text-gray-900">sarah.putri@email.com</div>
              </div>
            </a>

            <a
              href="tel:+6281234567890"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 bg-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Telepon</div>
                <div className="font-semibold text-gray-900">+62 812-3456-7890</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
              <div className="p-3 bg-purple-500 rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Lokasi</div>
                <div className="font-semibold text-gray-900">Jakarta, Indonesia</div>
              </div>
            </div>

            <a
              href="https://linkedin.com/in/sarahputri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 via-blue-100 to-teal-100 rounded-xl hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">LinkedIn</div>
                <div className="font-semibold text-gray-900">linkedin.com/in/sarahputri</div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted || isLoading}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitted
                  ? 'bg-green-500 hover:bg-green-600'
                  : isLoading
                  ? 'bg-blue-400 opacity-75 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600'
              }`}
            >
              {isSubmitted ? (
                <>
                  <span>Pesan Terkirim!</span>
                </>
              ) : isLoading ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <span>Kirim Pesan</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
