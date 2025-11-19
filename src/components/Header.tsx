import { User, MapPin, Phone, Mail, Linkedin, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 h-40" />

      <div className="px-8 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {!imageError ? (
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sarah Putri"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
                  <User className="w-20 h-20 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left mt-4 md:mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Sarah Putri
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              Marketing Professional
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-600 text-sm">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>sarah.putri@email.com</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <a
                href="https://linkedin.com/in/sarahputri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="https://sarahputri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-50 rounded-full hover:bg-teal-100 transition-colors duration-200"
              >
                <Globe className="w-5 h-5 text-teal-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
