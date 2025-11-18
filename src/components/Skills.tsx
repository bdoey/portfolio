/**
 * Skills Component
 *
 * Purpose: Displays core competencies and technical skills in a dedicated section.
 * Controls: Technical skills organized by category with animated badge chips.
 * Features scroll-triggered animations using Intersection Observer and staggered
 * entrance effects for each skill badge with enhanced visual card design.
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

interface SkillBadgeProps {
    name: string;
    icon?: string;
    iconUrl?: string;
    description?: string;
    index: number;
    onSelect: (skill: { name: string; description?: string; position: { x: number; y: number } } | null) => void;
    isSelected: boolean;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, iconUrl, description, index, onSelect, isSelected }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const badgeRef = useRef<HTMLSpanElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (description) {
            if (isSelected) {
                onSelect(null);
            } else {
                // Get the position of the clicked badge
                const rect = badgeRef.current?.getBoundingClientRect();
                if (rect) {
                    onSelect({
                        name,
                        description,
                        position: {
                            x: rect.left + rect.width / 2,
                            y: rect.bottom
                        }
                    });
                }
            }
        }
    };

    return (
        <div className="relative">
            <motion.span
                ref={(node) => {
                    // Combine refs
                    if (node) {
                        (badgeRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
                    }
                    if (typeof ref === 'function') {
                        ref(node);
                    }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.0001, delay: index * 0.00001 }}
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={handleClick}
                className={`bg-dark-800/90 text-slate-200 text-sm font-medium px-3 py-2 rounded-full border transition-all inline-flex items-center gap-2 ${
                    description ? 'cursor-pointer' : 'cursor-default'
                } ${
                    isSelected
                        ? 'border-cyan-500 shadow-md shadow-cyan-500/30'
                        : 'border-dark-600 hover:border-cyan-500/50 hover:shadow-sm hover:shadow-cyan-500/20'
                }`}
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
        </div>
    );
};

// Popup component for skill descriptions
const SkillPopup: React.FC<{
    skill: { name: string; description?: string; position: { x: number; y: number } } | null;
    onClose: () => void;
}> = ({ skill, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [adjustedPosition, setAdjustedPosition] = useState<{ left: number; top: number } | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (skill) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [skill, onClose]);

    // Calculate adjusted position to keep popup on screen
    useEffect(() => {
        if (skill && popupRef.current) {
            const popup = popupRef.current;
            const popupRect = popup.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const padding = 16;

            let left = skill.position.x - popupRect.width / 2;
            let top = skill.position.y + 8;

            // Adjust horizontal position if popup goes off screen
            if (left < padding) {
                left = padding;
            } else if (left + popupRect.width > viewportWidth - padding) {
                left = viewportWidth - popupRect.width - padding;
            }

            // Adjust vertical position if popup goes off screen bottom
            if (top + popupRect.height > viewportHeight - padding) {
                // Show above the skill instead
                top = skill.position.y - popupRect.height - 40;
            }

            setAdjustedPosition({ left, top });
        } else {
            setAdjustedPosition(null);
        }
    }, [skill]);

    return (
        <AnimatePresence>
            {skill && skill.description && (
                <motion.div
                    ref={popupRef}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="fixed z-[9999] w-80 max-w-[calc(100vw-32px)]"
                    style={{
                        left: adjustedPosition?.left ?? skill.position.x - 160,
                        top: adjustedPosition?.top ?? skill.position.y + 8,
                    }}
                >
                    <div className="bg-dark-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/10 p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-cyan-400 text-sm">{skill.name}</h5>
                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-slate-200 transition-colors"
                                aria-label="Close"
                            >
                                <i className="fas fa-times text-xs"></i>
                            </button>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const SkillCategoryCard: React.FC<{ group: SkillGroup; groupIndex: number }> = ({ group, groupIndex }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [selectedSkill, setSelectedSkill] = useState<{ name: string; description?: string; position: { x: number; y: number } } | null>(null);

    const colors = categoryColors[group.category];
    const icon = categoryIcons[group.category];

    const handleSkillSelect = (skill: { name: string; description?: string; position: { x: number; y: number } } | null) => {
        setSelectedSkill(skill);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.005, delay: groupIndex * 0.001 }}
            className={`relative card card-hover ${colors.border} ${colors.glow} p-6 overflow-visible group`}
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
            <div className="flex flex-wrap gap-2 relative">
                {group.skills.map((skill, index) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        iconUrl={skill.iconUrl}
                        description={skill.description}
                        index={index}
                        onSelect={handleSkillSelect}
                        isSelected={selectedSkill?.name === skill.name}
                    />
                ))}
            </div>

            {/* Skill description popup */}
            <SkillPopup skill={selectedSkill} onClose={() => setSelectedSkill(null)} />

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
