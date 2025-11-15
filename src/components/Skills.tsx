/**
 * Skills Component
 *
 * Purpose: Displays core competencies and technical skills in a dedicated section.
 * Controls: Technical skills organized by category with animated badge chips.
 * Features scroll-triggered animations using Intersection Observer and staggered
 * entrance effects for each skill badge.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../constants';
import { SkillGroup } from '../types';

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
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-dark-800/90 text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-dark-600 hover:border-cyan-500/50 hover:shadow-sm hover:shadow-cyan-500/20 transition-all cursor-default"
        >
            {name}
        </motion.span>
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
        </div>
    );
};

export default Skills;
