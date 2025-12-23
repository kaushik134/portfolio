"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, ArrowUpRight } from "lucide-react";

import { resumeData } from "@/lib/data";

const experienceData = resumeData.experience;


export function ExperienceTimeline() {
    return (
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="relative space-y-12 pb-12">
                {/* Scroll-linked Timeline Line */}
                <div className="absolute left-4 md:left-6 top-2 bottom-0 w-0.5 bg-border/30">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent"
                        style={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </div>

                {experienceData.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="relative pl-12 md:pl-16 group transition-colors duration-300"
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                            className="absolute left-[11px] md:left-[19px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background group-hover:bg-primary group-hover:scale-125 transition-all duration-300 z-10"
                        />

                        {/* Card Content */}
                        <div className="p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-secondary/30 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{job.role}</h3>
                                    <div className="flex items-center text-lg font-medium text-muted-foreground mt-1">
                                        <Building2 className="w-4 h-4 mr-2" />
                                        {job.company}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Calendar className="w-3 h-3 mr-2" />
                                        {job.period}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-3 h-3 mr-2" />
                                        {job.location}
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-muted-foreground/90">
                                {job.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 flex items-center text-sm uppercase tracking-wide text-primary opacity-80 group-hover:opacity-100">
                                    Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground">
                                            <ArrowUpRight className="w-4 h-4 mr-2 mt-1 text-primary shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {job.tech.map((tech, i) => (
                                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
