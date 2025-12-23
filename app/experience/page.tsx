import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Experience",
    description: "Detailed professional timeline and career achievements of Kaushik Vaghasiya.",
};

export default function ExperiencePage() {
    return (
        <div className="flex flex-col min-h-screen pt-12 pb-20">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Professional Experience</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A track record of building scalable systems, leading teams, and driving business impact.
                </p>
            </div>
            <ExperienceTimeline />
        </div>
    );
}
