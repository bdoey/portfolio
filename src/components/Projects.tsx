
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h4 className="font-bold text-md text-sky-300">{project.title}</h4>
                <p className="text-sm text-white/80 mt-2">{project.description}</p>
            </div>
        </a>
    </div>
);

const Projects: React.FC = () => {
    const categories = useMemo(() => Array.from(new Set(PROJECTS.map(p => p.category))), []);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);
    
    return (
        <div>
            <h2 className="major text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white pb-2 mb-6">Projects</h2>
            
            <div className="mb-6 flex flex-wrap gap-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm rounded-md transition-colors ${
                            activeCategory === category 
                                ? 'bg-sky-500 text-white font-semibold' 
                                : 'bg-white/10 hover:bg-white/20'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
            <div className="flex flex-col gap-6">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
