/**
 * Projects Component
 *
 * Purpose: Displays filterable project portfolio gallery in the modal.
 * Controls: Category filter buttons (Generative AI, FinTech Apps, Data Science, Machine Learning),
 * responsive grid layout of project cards showing images, titles, descriptions, and tech stack badges,
 * hover effects with scale and overlay animations, and external links to GitHub notebooks.
 * Features smooth category transitions using AnimatePresence and scroll-triggered card animations.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative card card-hover border-accent-blue overflow-hidden"
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="relative overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>

                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-200 shadow-lg shadow-cyan-500/50">
                            <i className="fas fa-external-link-alt text-white text-xl"></i>
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <h4 className="font-bold text-lg text-gradient mb-2 group-hover:text-slate-300 transition-colors">
                        {project.title}
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed mb-3">
                        {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.techStack.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                                    className="px-2 py-1 text-xs bg-blue-600/10 text-blue-300 rounded border border-blue-600/30 hover:bg-blue-600/20 hover:border-blue-500/50 transition-colors"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </div>
            </a>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const categories = useMemo(() => Array.from(new Set(PROJECTS.map(p => p.category))), []);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white/20 pb-2 mb-6 text-gradient"
            >
                Projects
            </motion.h2>

            {/* Category Filter Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 flex flex-wrap gap-3"
            >
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 font-medium ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                                : 'bg-dark-800/80 border border-dark-700 text-white/80 hover:text-white hover:border-cyan-500/50 hover:shadow-sm hover:shadow-cyan-500/20'
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Projects;
