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
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Define specific categories in order
    const categories = ["All", "Full-Stack", "E-commerce", "Portal", "Healthcare", "Civic Tech"];

    const filteredAndSortedProjects = useMemo(() => {
        let result = [...projects];

        if (filter !== "All") {
            // Case-insensitive matching for robust filtering
            result = result.filter((p) =>
                p.categories.some(c => c.toLowerCase() === filter.toLowerCase())
            );
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
                    <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <div className="flex gap-2 min-w-max">
                            <div className="flex items-center text-sm font-medium mr-2 text-muted-foreground">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter:
                            </div>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap border",
                                        filter === cat
                                            ? "bg-primary text-primary-foreground border-primary font-medium shadow-sm"
                                            : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3 shrink-0 relative z-20">
                        <div className="flex items-center text-sm font-medium text-muted-foreground">
                            <SortDesc className="w-4 h-4 mr-2" />
                            Sort by:
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                onBlur={() => setTimeout(() => setIsSortOpen(false), 200)}
                                className="flex items-center justify-between min-w-[160px] appearance-none bg-background border border-border rounded-lg pl-3 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer hover:bg-secondary/30 transition-all shadow-sm text-foreground group"
                            >
                                <span>{sort === "impact" ? "Highest Impact" : "Newest First"}</span>
                                <motion.div
                                    animate={{ rotate: isSortOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 text-muted-foreground group-hover:text-primary transition-colors">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isSortOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -5, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                                        transition={{ duration: 0.1 }}
                                        className="absolute right-0 top-full mt-2 w-full bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
                                    >
                                        <button
                                            onClick={() => { setSort("impact"); setIsSortOpen(false); }}
                                            className={cn(
                                                "w-full text-left px-4 py-2.5 text-sm transition-colors",
                                                sort === "impact" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                            )}
                                        >
                                            Highest Impact
                                        </button>
                                        <button
                                            onClick={() => { setSort("recency"); setIsSortOpen(false); }}
                                            className={cn(
                                                "w-full text-left px-4 py-2.5 text-sm transition-colors",
                                                sort === "recency" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                            )}
                                        >
                                            Newest First
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
