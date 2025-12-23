"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Summary() {
    return (
        <section className="py-16 md:py-20 container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Senior Node.js Developer & <span className="text-primary">Team Leader</span>
                    </h1>
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>
                            With over 5 years of experience in architecting scalable backend systems, I specialize in building high-performance microservices and robust APIs.
                        </p>
                        <p>
                            My journey began with a curiosity for how things work under the hood, leading me to master Node.js and cloud-native technologies. I've successfully led teams to deliver critical projects in Fintech, E-commerce, and AI sectors.
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and solving complex problems with simple, elegant solutions.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/20 border border-border"
                >
                    {/* Abstract Stylized Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full h-full border border-dashed border-primary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                            <div className="text-center space-y-2 relative z-10">
                                <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4">
                                    <span className="text-3xl">👨‍💻</span>
                                </div>
                                <p className="text-sm font-medium text-muted-foreground">Kaushik Vaghasiya</p>
                                <p className="text-xs text-muted-foreground/60">Full Stack Engineer</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
