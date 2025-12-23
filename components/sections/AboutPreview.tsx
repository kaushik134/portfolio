"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
    return (
        <section className="py-16 bg-background border-b border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                            Passionate About Building <br />
                            <span className="text-primary">Complex Systems</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                            I specialize in architecting robust backend systems that can handle high scale. My philosophy revolves around writing clean, maintainable code and solving hard engineering problems.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Code className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-sm md:text-base">Clean Code & Architecture</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Database className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-sm md:text-base">Scalable Database Design</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-sm md:text-base">Cloud Native Solutions</span>
                            </div>
                        </div>
                        <Link
                            href="/about"
                            className="inline-flex items-center text-primary font-semibold hover:tracking-wide transition-all"
                        >
                            Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[300px] md:h-[400px] w-full rounded-2xl bg-secondary/30 border border-border overflow-hidden flex items-center justify-center p-8 mt-8 lg:mt-0"
                    >
                        {/* System Architecture Visualization */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

                        {/* Central Hub */}
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                            {/* Orbit Ring */}
                            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 border border-primary/10 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 border border-primary/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Core Node */}
                            <div className="relative z-20 flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-card border border-primary/20 shadow-lg shadow-primary/5">
                                <Code className="w-8 h-8 text-primary" />
                                <span className="text-[10px] font-mono mt-1 text-muted-foreground">API Core</span>
                            </div>

                            {/* Satellite Nodes */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64">
                                {/* DB Node */}
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center"
                                >
                                    <Database className="w-5 h-5 text-muted-foreground" />
                                </div>
                                {/* Cloud Node */}
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center"
                                >
                                    <Globe className="w-5 h-5 text-muted-foreground" />
                                </div>
                                {/* Service Node 1 */}
                                <div
                                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center"
                                >
                                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/40" />
                                </div>
                                {/* Service Node 2 */}
                                <div
                                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center"
                                >
                                    <div className="w-5 h-5 rounded-sm border-2 border-muted-foreground/40" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

