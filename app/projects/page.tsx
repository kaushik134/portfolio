"use client";

import { useState, useMemo } from "react";
import { projects, Project } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, SortDesc } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("impact"); // impact | recency

    // Get unique categories
    const categories = useMemo(() => {
        const allCats = projects.flatMap((p) => p.categories);
        return ["All", ...Array.from(new Set(allCats))];
    }, []);

    const filteredAndSortedProjects = useMemo(() => {
        let result = [...projects];

        if (filter !== "All") {
            result = result.filter((p) => p.categories.includes(filter));
        }

        result.sort((a, b) => {
            if (sort === "impact") {
                return b.impactScore - a.impactScore;
            } else {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
        });

        return result;
    }, [filter, sort]);

    return (
        <div className="min-h-screen bg-background pt-8 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">All Projects</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            A complete archive of my engineering work, from scalable backends to complex frontends.
                        </p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between border-b border-border/40 pb-6">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-sm font-medium mr-2 text-muted-foreground">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter:
                        </div>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-3 py-1.5 rounded-full text-sm transition-all",
                                    filter === cat
                                        ? "bg-primary text-primary-foreground font-medium shadow-md"
                                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center text-sm font-medium text-muted-foreground">
                            <SortDesc className="w-4 h-4 mr-2" />
                            Sort by:
                        </div>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="bg-secondary/30 border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="impact">Highest Impact</option>
                            <option value="recency">Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredAndSortedProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
