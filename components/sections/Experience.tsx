"use client";

import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { ChecksGrid } from "@/components/ui/ChecksGrid";

export function Experience() {
    return (
        // <section id="experience" className="py-24 bg-background">
        // <div className="container mx-auto px-4 md:px-6">
        <section id="experience" className="py-24 bg-background relative overflow-hidden">
            <ChecksGrid variant="mask-left" opacity="opacity-40" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A track record of building scalable systems and leading technical teams.
                    </p>
                </div>
                <ExperienceTimeline />
            </div>
        </section>
    );
}
