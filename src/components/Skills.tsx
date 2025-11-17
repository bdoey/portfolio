/**
 * Skills Component
 *
 * Purpose: Displays core competencies and technical skills in a dedicated section.
 * Controls: Technical skills organized by category with animated badge chips.
 * Features scroll-triggered animations using Intersection Observer and staggered
 * entrance effects for each skill badge with enhanced visual card design.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../constants';
import { SkillGroup, SkillCategory } from '../types';

// Category icon mapping
const categoryIcons: Record<SkillCategory, string> = {
    'Languages & Modeling': 'fas fa-code',
    'AI & ML Frameworks': 'fas fa-brain',
    'Generative & Agentic AI': 'fas fa-robot',
    'MLOps & Business Intelligence': 'fas fa-chart-line'
};

// Category color mapping for gradient accents
const categoryColors: Record<SkillCategory, { border: string; glow: string; icon: string }> = {
    'Languages & Modeling': {
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/10',
        icon: 'text-blue-400'
    },
    'AI & ML Frameworks': {
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/10',
        icon: 'text-purple-400'
    },
    'Generative & Agentic AI': {
        border: 'border-cyan-500/30',
        glow: 'shadow-cyan-500/10',
        icon: 'text-cyan-400'
    },
    'MLOps & Business Intelligence': {
        border: 'border-emerald-500/30',
        glow: 'shadow-emerald-500/10',
        icon: 'text-emerald-400'
    }
};

const SkillBadge: React.FC<{ name: string; icon?: string; iconUrl?: string; index: number }> = ({ name, icon, iconUrl, index }) => {
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
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-dark-800/90 text-slate-200 text-sm font-medium px-3 py-2 rounded-full border border-dark-600 hover:border-cyan-500/50 hover:shadow-sm hover:shadow-cyan-500/20 transition-all cursor-default inline-flex items-center gap-2"
        >
            {icon && (
                <i className={`${icon} text-cyan-400`} style={{ fontSize: '1rem' }}></i>
            )}
            {!icon && iconUrl && (
                <img
                    src={iconUrl}
                    alt={`${name} icon`}
                    className="w-4 h-4 object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(40%) saturate(697%) hue-rotate(154deg) brightness(95%) contrast(93%)' }}
                />
            )}
            {name}
        </motion.span>
    );
};

const SkillCategoryCard: React.FC<{ group: SkillGroup; groupIndex: number }> = ({ group, groupIndex }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const colors = categoryColors[group.category];
    const icon = categoryIcons[group.category];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.005, delay: groupIndex * 0.001 }}
            className={`relative card card-hover ${colors.border} ${colors.glow} p-6 overflow-hidden group`}
        >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${colors.icon.split('-')[1]}-500 to-transparent opacity-50`}></div>

            {/* Header with icon and category name */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className={`${colors.icon} text-2xl`}
                    >
                        <i className={icon}></i>
                    </motion.div>
                    <h4 className="font-bold text-slate-200 text-base tracking-wide">{group.category}</h4>
                </div>

                {/* Skill count badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.03, delay: groupIndex * 0.001 + 0.02 }}
                    className={`${colors.icon.replace('text-', 'bg-')}/10 ${colors.icon} text-xs font-bold px-2 py-1 rounded-full border ${colors.border}`}
                >
                    {group.skills.length}
                </motion.div>
            </div>

            {/* Skills grid */}
            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        iconUrl={skill.iconUrl}
                        index={index}
                    />
                ))}
            </div>

            {/* Hover effect overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${colors.icon.split('-')[1]}-500/0 to-${colors.icon.split('-')[1]}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
        </motion.div>
    );
};

const Skills: React.FC = () => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white/20 pb-2 mb-6 text-gradient"
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS.map((group: SkillGroup, groupIndex) => (
                    <SkillCategoryCard key={group.category} group={group} groupIndex={groupIndex} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
