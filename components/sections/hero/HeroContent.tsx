"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { resumeData } from "@/lib/data";

export function HeroContent() {
    const [text, setText] = useState("");
    const fullText = resumeData.hero.summary;

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(timer);
            }
        }, 20); // Speed of typing
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-2xl mx-auto md:mx-0">
            {/* Top Pill */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-lg px-4 py-2"
            >
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                    {resumeData.hero.role}
                </span>
            </motion.div>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            >
                {resumeData.hero.name}
            </motion.h1>

            {/* Decorator */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100px" }}
                transition={{ delay: 0.3 }}
                className="h-1 bg-primary rounded-full"
            />

            {/* Typewriter Description */}
            <div className="relative min-h-[100px] md:min-h-[120px] max-w-xl md:max-w-none">
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-mono">
                    <span className="text-primary mr-2">{"//"}</span>
                    {text}
                    <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
                </p>
            </div>

            {/* Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            >
                <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-200 bg-primary rounded-lg hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background w-full sm:w-auto"
                >
                    View Selected Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                <a
                    href="/resume.pdf"
                    download="Kaushik_Vaghasiya_Resume.pdf"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-foreground transition-all duration-200 bg-secondary/50 border border-border rounded-lg hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border focus:ring-offset-background w-full sm:w-auto"
                >
                    Download Resume
                    <Download className="w-5 h-5 ml-2" />
                </a>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="grid grid-cols-3 gap-4 md:gap-12 pt-8 md:pt-12 border-t border-border/50 w-full mt-8"
            >
                <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{resumeData.hero.stats.years}</div>
                    <div className="text-[10px] md:text-xs font-bold text-muted-foreground tracking-widest uppercase">Years Exp</div>
                </div>
                <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{resumeData.hero.stats.efficiency}</div>
                    <div className="text-[10px] md:text-xs font-bold text-muted-foreground tracking-widest uppercase">Efficiency</div>
                </div>
                <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{resumeData.hero.stats.users}</div>
                    <div className="text-[10px] md:text-xs font-bold text-muted-foreground tracking-widest uppercase">Users</div>
                </div>
            </motion.div>

        </div>
    );
}
