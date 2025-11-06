
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center mt-8 pb-4">
      <p className="text-sm sm:text-base">
        <a
          href="#contact"
          className="inline-block border-b border-dotted border-white/50 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-sky-400/20"
        >
          Contact Me
        </a>
      </p>
    </footer>
  );
};

export default Footer;
