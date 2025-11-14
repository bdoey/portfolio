/**
 * Navigation Component
 *
 * Purpose: Sticky navigation header for single-page scroll design.
 * Controls: Active section highlighting using intersection observer,
 * smooth scroll to sections, responsive mobile menu, and scroll-based
 * visibility with backdrop blur effect.
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'home' ? 0 : 80; // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      style={{ opacity: isScrolled ? opacity : 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700 shadow-lg'
          : 'pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-semibold text-gradient transition-opacity ${
              isScrolled ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Brandon Doey
          </motion.button>

          {/* Navigation Links */}
          <ul className={`flex items-center space-x-1 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group ${
                    activeSection === item.id
                      ? 'text-cyan-300'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 rounded-lg bg-cyan-600/0 group-hover:bg-cyan-600/10 transition-colors duration-200" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
