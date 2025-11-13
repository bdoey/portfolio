import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const SocialLink: React.FC<{ href: string; icon: string; label: string; delay: number }> = ({ href, icon, label, delay }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-all duration-150 hover:bg-white/10 hover:scale-110 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-400/50"
      aria-label={label}
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  </motion.li>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li className="border-l border-white first:border-l-0">
    <a
      href={href}
      className="block px-5 h-11 leading-[2.75rem] text-xs uppercase tracking-[0.2rem] transition-all duration-150 hover:bg-white/10 hover:text-slate-400 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-150 group-hover:w-full"></span>
    </a>
  </li>
);

const Header: React.FC = () => {
  return (
    <header className="relative flex flex-col items-center text-center w-full p-4 bg-transparent">
      
      {/* REPLACEMENT BACKGROUND:
        Removed the purple gradients and floating orbs.
        Replaced with a single, subtle, and professional animated gradient
        that uses dark, tech-friendly grayscale colors (slate).
        It re-uses your existing 'animate-gradient' animation class.
      */}        
      
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950/20 to-slate-900 animate-gradient bg-[length:200%_200%] pointer-events-none -z-10"></div>


      {/* --- ALTERNATIVE PROFESSIONAL BACKGROUND (Static Dot Grid) ---
        If you want a static (non-animated) background that feels very 'data' and 'tech',
        delete the 'div' above (line 55) and uncomment this one. This creates a clean, dark slate background with a subtle dot grid.

      
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(#cbd5e133_1px,transparent_1px)] [background-size:16px_16px]"></div>
      */}      

      <div className="relative z-10 w-full bg-transparent">
        {/* Profile Image with animation */}
        <motion.div
          className="mb-8 inline-block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-400/50 shadow-xl shadow-slate-400/30"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://raw.githubusercontent.com/bdoey/portfolio/refs/heads/main/bdoey4.jpg"
              alt="Brandon Doey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-600/20"></div>
          </motion.div>
        </motion.div>

        {/* Main content card */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.5rem] leading-tight text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a href="#contact" className="hover:text-slate-300 transition-colors">Brandon Doey</a>
          </motion.h1>

          <motion.div
            className="mt-4 uppercase text-sm tracking-[0.2rem] font-semibold text-slate-300 min-h-[1.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Senior Data Scientist',
                2000,
                'ML Engineer',
                2000,
                'Independent Researcher',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="mt-4 text-sm max-w-2xl mx-auto text-white/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I thrive on leveraging data to uncover insights that drive impactful business decisions. My goal is to help organizations unlock the full potential of their data, delivering strategic recommendations that fuel growth, optimize operations, and drive innovation.
          </motion.p>

          {/* Social Links */}
          <ul className="flex justify-center space-x-3 mt-6">
            <SocialLink href="https://www.linkedin.com/in/bdoey" icon="fa-linkedin" label="LinkedIn" delay={1.2} />
            <SocialLink href="https://github.com/bdoey" icon="fa-github" label="GitHub" delay={1.3} />
            <SocialLink href="https://www.facebook.com/bdoey" icon="fa-facebook-f" label="Facebook" delay={1.4} />
            <SocialLink href="https://twitter.com/bdoey" icon="fa-twitter" label="Twitter" delay={1.5} />
          </ul>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <ul className="inline-flex glass rounded-md overflow-hidden shadow-lg">
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
