import { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('summary');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['summary', 'experience', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 right-0 mt-8 mr-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 z-40 hidden md:block">
        <div className="flex flex-col gap-2">
          {[
            { id: 'summary', icon: '📋', label: 'Ringkasan' },
            { id: 'experience', icon: '💼', label: 'Pengalaman' },
            { id: 'education', icon: '🎓', label: 'Pendidikan' },
            { id: 'skills', icon: '⚡', label: 'Keahlian' },
            { id: 'projects', icon: '🚀', label: 'Proyek' },
            { id: 'contact', icon: '📧', label: 'Kontak' },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-50 text-gray-700'
              }`}
              title={label}
            >
              <span className="text-lg">{icon}</span>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Header />

        <div className="mt-12 space-y-16">
          <section id="summary">
            <Summary />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-600 pb-8">
          <p className="text-sm">© 2024 Sarah Putri. All rights reserved.</p>
          <p className="text-xs mt-2">Dibuat dengan React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
