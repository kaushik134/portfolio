import { SkillsGrid } from "@/components/sections/skills/SkillsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills, Expertise & Tech Stack",
    description: "Explore Kaushik Vaghasiya's technical expertise in Node.js, Go, Microservices, AWS, Docker, Kubernetes, and Database Optimization. See the full tech stack.",
    alternates: {
        canonical: "https://kaushik-vaghasiya.vercel.app/skills",
    },
};

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export default function SkillsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12 pb-20">
            <BreadcrumbJsonLd items={[
                { name: "Home", item: "/" },
                { name: "Skills", item: "/skills" }
            ]} />
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Technical Expertise</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive overview of the technologies and tools I leverage to build enterprise-grade solutions.
                </p>
            </div>
            <SkillsGrid />
        </div>
    );
}
