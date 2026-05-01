import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import OnlineProfiles from './components/OnlineProfiles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      {/* Background Effect */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-12 space-y-32 overflow-hidden">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <OnlineProfiles />
        <Contact />
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Mahmudul Hasan. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
