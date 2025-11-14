/**
 * Header Component
 *
 * Purpose: Main header section displayed on the portfolio home page.
 * Controls: Profile photo with animation effects, name display with gradient styling,
 * rotating job title animation (Senior Data Scientist, ML Engineer, Independent Researcher),
 * professional summary/bio text, social media links (LinkedIn, GitHub, Facebook, Twitter),
 * and primary navigation menu to Resume, Publications, and Projects sections.
 * All elements feature staggered entrance animations using Framer Motion.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const SocialLink: React.FC<{ href: string; icon: string; label: string; delay: number }> = ({ href, icon, label, delay }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.15, delay }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 border border-dark-600 rounded-full transition-all duration-200 hover:bg-cyan-600/20 hover:scale-110 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
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
      className="block px-5 h-11 leading-[2.75rem] text-sm tracking-wide transition-all duration-200 hover:bg-cyan-600/20 hover:text-cyan-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-200 group-hover:w-full"></span>
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
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/30"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://raw.githubusercontent.com/bdoey/portfolio/refs/heads/main/bdoey3.png"
              alt="Brandon Doey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20"></div>
          </motion.div>
        </motion.div>

        {/* Main content card */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.08 }}
          >
            <a href="#contact" className="hover:text-slate-300 transition-colors">Brandon Doey</a>
          </motion.h1>

          <motion.div
            className="mt-4 text-base tracking-wide font-medium text-slate-300 min-h-[1.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.09 }}
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
            transition={{ delay: 0.09 }}
          >
            I thrive on leveraging data to uncover insights that drive impactful business decisions. My goal is to help organizations unlock the full potential of their data, delivering strategic recommendations that fuel growth, optimize operations, and drive innovation.
          </motion.p>

          {/* Social Links */}
          <ul className="flex justify-center space-x-3 mt-6">
            <SocialLink href="https://www.linkedin.com/in/bdoey" icon="fa-linkedin" label="LinkedIn" delay={0.09} />
            <SocialLink href="https://github.com/bdoey" icon="fa-github" label="GitHub" delay={0.09} />
            <SocialLink href="https://www.facebook.com/bdoey" icon="fa-facebook-f" label="Facebook" delay={0.09} />
            <SocialLink href="https://twitter.com/bdoey" icon="fa-twitter" label="Twitter" delay={0.09} />
          </ul>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.09 }}
        >
          <ul className="inline-flex surface-elevated overflow-hidden">
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
