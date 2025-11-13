/**
 * Resume Component
 *
 * Purpose: Displays comprehensive professional resume information in the modal.
 * Controls: Three main sections - Core Competencies (technical skills organized by category
 * with animated badge chips), Professional Experience (timeline view with company, role,
 * duration, and achievement bullets), and Education (degree information with university
 * and concentration details). Features scroll-triggered animations using Intersection
 * Observer and staggered entrance effects for each item.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS, EXPERIENCE, EDUCATION } from '../constants';
import { SkillGroup, Experience, Education as EducationType } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-lg font-semibold uppercase tracking-widest text-gradient mt-8 mb-4 border-b border-white/20 pb-2"
    >
        {children}
    </motion.h3>
);

const SkillBadge: React.FC<{ name: string; index: number }> = ({ name, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.0001, delay: index * 0.00001 }}
            whileHover={{ scale: 1.0001, y: -2 }}
            className="bg-slate-900/50 text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-slate-500/30 hover:bg-slate-800/60 hover:border-slate-400/50 transition-all cursor-default"
        >
            {name}
        </motion.span>
    );
};

const ExperienceCard: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.006, delay: index * 0.001 }}
            className="relative pl-8 pb-8 border-l-2 border-slate-500/30 last:pb-0"
        >
            {/* Timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.04, delay: index * 0.01 + 0.02 }}
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-500 border-2 border-[#1b1f22] shadow-lg shadow-slate-500/50"
            />

            <div className="glass glass-hover rounded-lg p-5 border">
                <h4 className="font-bold text-lg text-slate-300">{exp.role}</h4>
                <p className="text-white/70 text-sm mt-1">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.duration}</span>
                </p>
                <ul className="mt-4 space-y-2 text-white/90 text-sm">
                    {exp.points.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.004, delay: index * 0.001 + i * 0.001 }}
                            className="flex items-start"
                        >
                            <span className="text-slate-400 mr-2 mt-1">▹</span>
                            <span>{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const EducationCard: React.FC<{ edu: EducationType; index: number }> = ({ edu, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.005, delay: index * 0.001 }}
            className="glass glass-hover rounded-lg p-5 border"
        >
            <div className="flex items-start">
                <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    className="text-slate-400 text-2xl mr-4 mt-1"
                >
                    <i className="fas fa-graduation-cap"></i>
                </motion.div>
                <div className="flex-1">
                    <h4 className="font-bold text-lg text-white">{edu.degree}</h4>
                    <p className="text-slate-300 text-sm mt-1">{edu.university}</p>
                    <p className="text-xs text-white/60 italic mt-2 leading-relaxed">
                        {edu.concentration}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Resume: React.FC = () => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white/20 pb-2 mb-6 text-gradient"
            >
                Resume
            </motion.h2>

            <SectionTitle>Core Competencies & Technical Skills</SectionTitle>
            <div className="space-y-6">
                {SKILLS.map((group: SkillGroup, groupIndex) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.01 }}
                    >
                        <h4 className="font-bold text-slate-300 mb-3 text-base">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, index) => (
                                <SkillBadge key={skill.name} name={skill.name} index={index} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <SectionTitle>Professional Experience</SectionTitle>
            <div className="mt-6">
                {EXPERIENCE.map((exp: Experience, index) => (
                    <ExperienceCard key={exp.role} exp={exp} index={index} />
                ))}
            </div>

            <SectionTitle>Education</SectionTitle>
            <div className="space-y-4 mt-6">
                {EDUCATION.map((edu: EducationType, index) => (
                    <EducationCard key={edu.degree} edu={edu} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Resume;
