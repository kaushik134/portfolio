import { resumeData } from "./data";

export type Project = {
    id: string;
    title: string;
    slug: string;
    description: string;
    fullDescription: string;

    // Extended details (optional for backward compatibility)
    roles?: string[];
    coreFeatures?: string[];
    challenges: string[]; // Changed to array
    solutions: string[]; // Changed to array

    systemFlow?: {
        [key: string]: string[] | undefined;
    };

    paymentsAndPayouts?: {
        paymentGateways: string[];
        payoutCycle?: string;
        supportedModes?: string[];
        reconciliation?: string;
    };

    notifications?: string[];
    adminCapabilities?: string[];

    techStack?: {
        backend?: string[];
        frontend?: string[];
        database?: string[];
        payments?: string[];
        notifications?: string[];
        infrastructure?: string[];
        versionControl?: string[];
        [key: string]: string[] | undefined;
    };

    impact: string[];
    stack: string[];
    categories: string[];
    images: string[];
    logo?: string;
    logoDark?: string;
    date: string; // YYYY-MM-DD
    impactScore: number; // 1-100
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    featuredPriority: number;
};

export const projects: Project[] = resumeData.projects;

