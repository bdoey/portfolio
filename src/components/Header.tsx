
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
      className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-400/50"
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
      className="block px-5 h-11 leading-[2.75rem] text-xs uppercase tracking-[0.2rem] transition-all duration-300 hover:bg-white/10 hover:text-sky-400 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

const Header: React.FC = () => {
  return (
    <header className="relative flex flex-col items-center text-center max-w-full p-4 overflow-hidden">
      {/* Animated gradient background - enhanced for smoothness */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 via-purple-900/20 to-transparent animate-gradient bg-[length:200%_200%]"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/30 via-sky-900/20 to-transparent animate-gradient bg-[length:200%_200%]" style={{ animationDelay: '4s' }}></div>

      {/* Enhanced floating orbs with viewport-relative sizing and positioning for fluid animations */}
      <div className="absolute" style={{ top: '5vh', left: '5vw', width: '15vw', height: '15vw', maxWidth: '200px', maxHeight: '200px', minWidth: '100px', minHeight: '100px' }}>
        <div className="w-full h-full bg-gradient-to-br from-sky-400/20 to-sky-600/15 rounded-full blur-[40px] animate-float"></div>
      </div>
      <div className="absolute" style={{ top: '15vh', right: '8vw', width: '12vw', height: '12vw', maxWidth: '180px', maxHeight: '180px', minWidth: '80px', minHeight: '80px', animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-to-br from-purple-400/25 to-purple-600/20 rounded-full blur-[40px] animate-drift"></div>
      </div>
      <div className="absolute" style={{ bottom: '10vh', left: '10vw', width: '18vw', height: '18vw', maxWidth: '220px', maxHeight: '220px', minWidth: '120px', minHeight: '120px', animationDelay: '1s' }}>
        <div className="w-full h-full bg-gradient-to-br from-sky-500/20 to-cyan-600/15 rounded-full blur-[45px] animate-float-delayed"></div>
      </div>
      <div className="absolute" style={{ bottom: '5vh', right: '5vw', width: '20vw', height: '20vw', maxWidth: '250px', maxHeight: '250px', minWidth: '140px', minHeight: '140px', animationDelay: '3s' }}>
        <div className="w-full h-full bg-gradient-to-br from-purple-500/25 to-pink-600/20 rounded-full blur-[50px] animate-drift"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Profile Image with animation */}
        <motion.div
          className="mb-8 inline-block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-xl shadow-sky-400/30"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://raw.githubusercontent.com/bdoey/bdoey.github.io/refs/heads/main/images/bdoey.jpeg"
              alt="Brandon Doey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-500/20"></div>
          </motion.div>
        </motion.div>

        {/* Main content card */}
        <motion.div
          className="w-full glass glass-hover rounded-lg shadow-2xl py-8 px-4 border"
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
            <a href="#contact" className="hover:text-sky-300 transition-colors">Brandon Doey</a>
          </motion.h1>

          <motion.div
            className="mt-4 uppercase text-sm tracking-[0.2rem] font-semibold text-sky-300 min-h-[1.5rem]"
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
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <ul className="flex glass rounded-md overflow-hidden shadow-lg">
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
