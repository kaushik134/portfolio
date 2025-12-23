"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ChecksGrid } from "@/components/ui/ChecksGrid";

export function FeaturedProjects() {
    // Show only the first 2 projects
    const featured = projects.slice(0, 2);

    return (
        // <section id="projects" className="py-16 bg-background">
            // <div className="container mx-auto px-4 md:px-6">
        <section id="projects" className="py-16 bg-background relative overflow-hidden">
            <ChecksGrid variant="fade-out" opacity="opacity-50" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
                        <p className="text-muted-foreground text-sm md:text-base">Recent work that showcases scale and performance.</p>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border hover:bg-secondary/50 transition-colors text-sm font-medium w-full lg:w-auto"
                    >
                        View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
