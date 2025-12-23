"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { resumeData } from "@/lib/data";
import { ChecksGrid } from "@/components/ui/ChecksGrid";
import React from "react";

const educationData = resumeData.education;

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-primary/10 bg-card/50 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary), 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative">{children}</div>
        </div>
    );
}

export function Education() {
    return (
        <section id="education" className="py-24 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <ChecksGrid variant="radial" opacity="opacity-30" />
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20 backdrop-blur-md"
                    >
                        <GraduationCap className="w-3 h-3" />
                        Academic Foundation
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Education & <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Building technical expertise through structured learning and academic excellence.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.01 }}
                            className="relative"
                        >
                            <SpotlightCard className="rounded-2xl backdrop-blur-md hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                                {/* Holographic Noise Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                                <div className="p-8 md:p-10">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-border/50 pb-6 mb-8 relative">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                                <Calendar className="w-4 h-4" />
                                                {edu.year}
                                            </div>
                                            <h3 className="text-3xl font-bold text-foreground tracking-tight">{edu.degree}</h3>
                                            <div className="text-lg text-muted-foreground font-medium">{edu.institution}</div>
                                            <div className="flex items-center gap-3 text-sm mt-2">
                                                <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground border border-border/50">
                                                    {edu.location}
                                                </span>
                                                {edu.gpa !== "N/A" && (
                                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-semibold shadow-sm shadow-primary/10">
                                                        GPA: {edu.gpa}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-1.5 rounded-full border border-green-500/20 text-sm font-semibold shadow-inner shadow-green-500/5">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            {edu.status}
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-foreground/80 leading-relaxed text-lg">
                                                {edu.description}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                                                    <Award className="w-4 h-4" />
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-3">
                                                    {edu.achievements.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            whileHover={{ x: 5 }}
                                                            className="flex items-start text-muted-foreground text-sm group/item"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-3 shrink-0 group-hover/item:bg-primary group-hover/item:scale-125 transition-all" />
                                                            <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                                                    <BookOpen className="w-4 h-4" />
                                                    Coursework
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, i) => (
                                                        <motion.span
                                                            key={i}
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/60 text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm cursor-default"
                                                        >
                                                            {course}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
