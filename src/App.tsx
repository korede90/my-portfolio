import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { ProjectItem } from './data/portfolioData';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('ko-portfolio-theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('ko-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('ko-portfolio-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to projects
      </a>

      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <Hero darkMode={darkMode} />
        <Projects
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Skills darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      <ProjectModal
        key={selectedProject?.id ?? 'none'}
        project={selectedProject}
        darkMode={darkMode}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
