
import React from 'react';

const SocialLink: React.FC<{ href: string; icon: string; label: string }> = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-colors hover:bg-white/10"
      aria-label={label}
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  </li>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li className="border-l border-white first:border-l-0">
    <a href={href} className="block px-5 h-11 leading-[2.75rem] text-xs uppercase tracking-[0.2rem] transition-colors hover:bg-white/10">
      {children}
    </a>
  </li>
);

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center max-w-full bg-radial-gradient p-4">
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border border-white">
          <img src="https://picsum.photos/seed/avatar/200" alt="Brandon Doey" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full border-t border-b border-white py-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.5rem] leading-tight">
          <a href="#contact">Brandon Doey</a>
        </h1>
        <p className="mt-4 uppercase text-sm tracking-[0.2rem]">
          <b>Data & ML Engineer: Bridging Infrastructure and Insight</b>
        </p>
        <p className="mt-4 text-sm max-w-2xl mx-auto">
          I thrive on leveraging data to uncover insights that drive impactful business decisions. My goal is to help organizations unlock the full potential of their data, delivering strategic recommendations that fuel growth, optimize operations, and drive innovation.
        </p>
        <ul className="flex justify-center space-x-3 mt-6">
          <SocialLink href="https://www.linkedin.com/in/bdoey" icon="fa-linkedin" label="LinkedIn" />
          <SocialLink href="https://github.com/bdoey" icon="fa-github" label="GitHub" />
          <SocialLink href="https://www.facebook.com/bdoey" icon="fa-facebook-f" label="Facebook" />
          <SocialLink href="https://twitter.com/bdoey" icon="fa-twitter" label="Twitter" />
        </ul>
      </div>
      <nav className="mt-8">
        <ul className="flex border border-white rounded-md overflow-hidden">
          <NavLink href="#resume">Resume</NavLink>
          <NavLink href="#publications">Publications</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
