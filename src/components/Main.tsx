/**
 * Main Modal Component
 *
 * Purpose: Modal container that displays different content sections in a centered overlay.
 * Controls: Modal visibility and animations, backdrop blur effect, close button functionality,
 * and dynamically renders the appropriate content component (Resume, Projects, Publications,
 * or Contact) based on the active hash navigation route. Features smooth slide-up entrance
 * and fade transitions.
 */

import React from 'react';
import Resume from './Resume';
import Projects from './Projects';
import Publications from './Publications';
import Contact from './Contact';

interface MainProps {
  activeArticle: string;
  isVisible: boolean;
}

const CloseButton = () => (
    <a href="#" className="absolute top-0 right-0 w-16 h-16 cursor-pointer group" aria-label="Close">
      <div className="absolute top-3 left-3 w-10 h-10 rounded-full transition-all duration-200 ease-in-out group-hover:bg-cyan-600/20 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
        <svg className="w-10 h-10 text-white group-hover:text-cyan-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
    </a>
  );

const Main: React.FC<MainProps> = ({ activeArticle, isVisible }) => {
    const articleClasses = `
        relative z-10
        w-[40rem] max-w-[95vw] bg-zinc-900/95 rounded-lg border border-dark-700 shadow-2xl
        transition-all duration-200 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
    `;

    const overlayClasses = `
        absolute inset-0 bg-black/60
        transition-opacity duration-200 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
    `;

  return (
    <main className="fixed inset-0 z-20 flex items-center justify-center p-4">
        {/* Backdrop overlay.
          Now 'absolute' to fill its 'fixed' parent <main>.
        */}
        <a href="#" className={overlayClasses} aria-label="Close modal"></a>

        {/* Modal content.
          Now 'relative' and 'z-10' to ensure it's on top of the overlay.
        */}
        <div className={articleClasses}>
            <div className="relative p-6 sm:p-10 max-h-[90vh] overflow-y-auto scrollbar-thin">
                <CloseButton />
                {activeArticle === 'resume' && <Resume />}
                {activeArticle === 'projects' && <Projects />}
                {activeArticle === 'publications' && <Publications />}
                {activeArticle === 'contact' && <Contact />}
            </div>
        </div>
    </main>
  );
};

export default Main;
