/**
 * TypeScript Type Definitions
 *
 * Purpose: Defines all TypeScript interfaces and types used throughout the portfolio.
 * Controls: Type safety and IntelliSense for portfolio data structures including skills,
 * work experience, education, projects, and publications. These types ensure consistent
 * data shapes across all components and prevent runtime errors.
 */

export type SkillCategory = 'Languages & Modeling' | 'AI & ML Frameworks' | 'Generative & Agentic AI' | 'MLOps & Business Intelligence';

export interface Skill {
  name: string;
  icon?: string;     // Font Awesome icon class (e.g., 'fab fa-python')
  iconUrl?: string;  // URL to image file (png, jpeg, etc.) - used if icon is not provided
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
  techStack?: string[];
}

export interface Publication {
  title: string;
  meta: string;
  authors: string;
  abstract: string;
  doi: string;
}
