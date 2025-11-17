/**
 * Contact Component
 *
 * Purpose: Displays contact information and social media links in the modal.
 * Controls: Centered contact card with animated envelope icon, professional introduction text,
 * prominent email button (brandon.doey@icloud.com), and social media links
 * (LinkedIn, GitHub, Facebook, Twitter) with hover animations. Features spring-based
 * entrance animations and interactive scale effects on all clickable elements.
 */

import React from 'react';
import { motion } from 'framer-motion';

const SocialLink: React.FC<{ href: string; icon: string; label: string; delay: number }> = ({ href, icon, label, delay }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-12 h-12 border-2 border-dark-600 rounded-full transition-all duration-200 hover:bg-cyan-600/20 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
      aria-label={label}
    >
      <i className={`fa-brands ${icon} text-lg`}></i>
    </motion.a>
  </motion.li>
);

const Contact: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white/20 pb-2 mb-8 text-gradient"
            >
                Contact
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="surface-elevated p-8 text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="inline-block mb-6"
                >
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                        <i className="fas fa-envelope text-3xl text-white"></i>
                    </div>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold text-gradient mb-4"
                >
                    Let's Connect!
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/80 leading-relaxed mb-6"
                >
                    As a Data & ML Engineer, I specialize in building machine learning models that not only solve complex problems but also drive actionable insights. My work encompasses everything from data preprocessing and feature engineering to model evaluation and deployment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="mailto:brandon.doey@icloud.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                    >
                        <i className="fas fa-paper-plane"></i>
                        Email Me
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 pt-8 border-t border-white/10"
                >
                    <p className="text-white/60 text-sm mb-4">Find me on social media</p>
                    <ul className="flex justify-center space-x-4">
                        <SocialLink href="https://www.linkedin.com/in/bdoey" icon="fa-linkedin" label="LinkedIn" delay={0.8} />
                        <SocialLink href="https://github.com/bdoey" icon="fa-github" label="GitHub" delay={0.9} />
                        <SocialLink href="https://www.facebook.com/bdoey" icon="fa-facebook-f" label="Facebook" delay={1.0} />
                        <SocialLink href="https://x.com/bdoey" icon="fa-square-x-twitter" label="X" delay={1.1} />
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
