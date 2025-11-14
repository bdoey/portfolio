/**
 * Root Application Component
 *
 * Purpose: Main orchestrator component for the portfolio website with single-page scroll design.
 * Controls: Active section tracking via intersection observer, smooth scroll behavior,
 * sticky navigation, and orchestrates the layout of all portfolio sections in a continuous
 * scroll experience with Three.js animated gradient mesh background, noise textures, and parallax effects.
 */

import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollSection from './components/ScrollSection';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPreloading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionVisible = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className={`min-h-screen text-white font-light leading-relaxed ${isPreloading ? 'opacity-0' : 'opacity-100 transition-opacity duration-150'}`}>
      {/* Three.js animated background with gradient mesh and parallax effects */}
      <Background />

      {/* Sticky Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <ScrollSection
        id="home"
        onVisible={handleSectionVisible}
        fullHeight
        className="flex flex-col items-center justify-center"
      >
        <Header />
      </ScrollSection>

      {/* Resume Section */}
      <ScrollSection
        id="resume"
        onVisible={handleSectionVisible}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="surface-elevated p-8 sm:p-12">
            <Resume />
          </div>
        </div>
      </ScrollSection>

      {/* Projects Section */}
      <ScrollSection
        id="projects"
        onVisible={handleSectionVisible}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <div className="surface-elevated p-8 sm:p-12">
            <Projects />
          </div>
        </div>
      </ScrollSection>

      {/* Publications Section */}
      <ScrollSection
        id="publications"
        onVisible={handleSectionVisible}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="surface-elevated p-8 sm:p-12">
            <Publications />
          </div>
        </div>
      </ScrollSection>

      {/* Contact Section */}
      <ScrollSection
        id="contact"
        onVisible={handleSectionVisible}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <div className="surface-elevated p-8 sm:p-12">
            <Contact />
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-dark-700">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
