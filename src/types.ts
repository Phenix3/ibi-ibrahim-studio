export type Language = 'fr' | 'en';

export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'saas' | 'plugin' | 'ecommerce' | 'web';
  year: string;
  badge?: string;
  competition?: string;
  summary: {
    fr: string;
    en: string;
  };
  details: {
    fr: {
      problem: string;
      solution: string;
      highlights: string[];
    };
    en: {
      problem: string;
      solution: string;
      highlights: string[];
    };
  };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  period: {
    fr: string;
    en: string;
  };
  role: {
    fr: string;
    en: string;
  };
  company: string;
  companyUrl?: string;
  location: string;
  description: {
    fr: string;
    en: string;
  };
  highlights: {
    fr: string[];
    en: string[];
  };
  technologies: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  skills: {
    name: string;
    level?: 'Advanced' | 'Expert' | 'Proficient';
    highlight?: boolean;
    tag?: string;
  }[];
  iconName: string;
}

export interface Education {
  year: string;
  degree: {
    fr: string;
    en: string;
  };
  institution: string;
  location: string;
  details?: {
    fr: string;
    en: string;
  };
}

export interface ProfileData {
  name: string;
  title: {
    fr: string;
    en: string;
  };
  location: string;
  phone: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUsername: string;
  linkedinUrl: string;
  whatsappUrl: string;
  bio: {
    fr: string;
    en: string;
  };
  fullBio: {
    fr: string[];
    en: string[];
  };
  stats: {
    yearsExp: number;
    completedProjects: number;
    teamMembersManaged: number;
    hackathonAwards: number;
  };
  strengths: {
    fr: { title: string; desc: string }[];
    en: { title: string; desc: string }[];
  };
  interests: {
    fr: string[];
    en: string[];
  };
  languagesSpoken: {
    fr: { name: string; level: string }[];
    en: { name: string; level: string }[];
  };
}
