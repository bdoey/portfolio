/**
 * ScrollSection Component
 *
 * Purpose: Wrapper component for scroll-based sections with intersection observer.
 * Controls: Visibility detection, scroll animations, active section tracking,
 * and consistent spacing for each major section of the portfolio.
 */

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrollSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  onVisible?: (id: string) => void;
  fullHeight?: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  id,
  children,
  className = '',
  onVisible,
  fullHeight = false,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onVisible) {
            onVisible(id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '-80px 0px -80px 0px', // Account for sticky nav
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, onVisible]);

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={`relative ${fullHeight ? 'min-h-screen' : 'min-h-[50vh]'} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
