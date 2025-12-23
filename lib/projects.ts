import { resumeData } from "./data";

export type Project = {
    id: string;
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    challenges: string;
    solutions: string;
    impact: string[];
    stack: string[];
    categories: string[];
    images: string[];
    date: string; // YYYY-MM-DD
    impactScore: number; // 1-100
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
};

export const projects: Project[] = resumeData.projects;

