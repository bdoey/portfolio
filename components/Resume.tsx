
import React from 'react';
import { SKILLS, EXPERIENCE, EDUCATION } from '../constants';
import { SkillGroup, Experience, Education as EducationType } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-lg font-semibold uppercase tracking-widest text-white/90 mt-8 mb-4 border-b border-white/20 pb-2">
        {children}
    </h3>
);

const Resume: React.FC = () => {
    return (
        <div>
            <h2 className="major text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white pb-2 mb-6">Resume</h2>
            
            <SectionTitle>Core Competencies & Technical Skills</SectionTitle>
            <div className="space-y-4">
                {SKILLS.map((group: SkillGroup) => (
                    <div key={group.category}>
                        <h4 className="font-semibold text-sky-300 mb-2">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map(skill => (
                                <span key={skill.name} className="bg-sky-900/50 text-sky-200 text-xs font-medium px-3 py-1 rounded-full">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <SectionTitle>Professional Experience</SectionTitle>
            <div className="space-y-6">
                {EXPERIENCE.map((exp: Experience) => (
                    <div key={exp.role}>
                        <h4 className="font-semibold text-lg text-white">{exp.role}</h4>
                        <p className="text-white/70">{exp.company} | {exp.duration}</p>
                        <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-white/90">
                            {exp.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <SectionTitle>Education</SectionTitle>
            <div className="space-y-4">
                {EDUCATION.map((edu: EducationType) => (
                    <div key={edu.degree}>
                        <h4 className="font-semibold text-lg text-white">{edu.degree}</h4>
                        <p className="text-white/70">{edu.university}</p>
                        <p className="text-sm text-white/60 italic">{edu.concentration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume;
