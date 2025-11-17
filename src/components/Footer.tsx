/**
 * Footer Component
 *
 * Purpose: Simple footer section displayed at the bottom of the home page.
 * Controls: "Home" link that scrolls back to the top of the page with hover effects
 * including text color change, underline animation, and subtle lift effect.
 */

import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full text-center mt-8 pb-4">
      <p className="text-sm sm:text-base">
        <a
          href="#top"
          onClick={scrollToTop}
          className="inline-block border-b border-dotted border-white/50 hover:border-slate-400/50 hover:text-slate-400 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-slate-400/20"
        >
          Home
        </a>
      </p>
    </footer>
  );
};

export default Footer;
