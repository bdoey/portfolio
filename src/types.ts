
export type SkillCategory = 'Languages' | 'AI / ML Frameworks' | 'Generative & Agentic AI' | 'MLOps & Business Intelligence';

export interface Skill {
  name: string;
}

export interface SkillGroup {
    category: SkillCategory;
    skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  university: string;
  concentration: string;
}

export interface Project {
  category: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface Publication {
  title: string;
  meta: string;
  authors: string;
  abstract: string;
  doi: string;
}
