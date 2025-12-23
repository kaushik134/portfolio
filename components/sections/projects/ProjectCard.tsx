import { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative h-56 bg-secondary/20 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60" />

                {/* Placeholder or actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/10 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-sm uppercase tracking-widest font-semibold text-muted-foreground/50 border border-muted-foreground/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                        {project.title} Preview
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 z-20">
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50">
                                {tech}
                            </span>
                        ))}
                        {project.stack.length > 4 && (
                            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50">
                                +{project.stack.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Action */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
}
