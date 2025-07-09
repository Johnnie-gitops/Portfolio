export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Certification {
  title: string;
  date: string;
  location?: string;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}