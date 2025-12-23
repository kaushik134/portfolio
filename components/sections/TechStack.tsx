"use client";

import { motion } from "framer-motion";

const technologies = [
    "Node.js", "Express.js", "NestJS", "TypeScript",
    "MongoDB", "PostgreSQL", "Redis", "Docker",
    "AWS", "Kubernetes", "Next.js", "React",
    "GraphQL", "gRPC", "RabbitMQ", "Kafka"
];

export function TechStack() {
    return (
        <section className="py-16 bg-background overflow-hidden border-b border-border/40">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold tracking-tighter"
                >
                    Core Technologies
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground mt-2"
                >
                    Tools I use to build scalable systems
                </motion.p>
            </div>

            <div className="relative flex overflow-hidden mask-linear-gradient">
                <motion.div
                    className="flex flex-nowrap gap-8 md:gap-12"
                    animate={{
                        x: [0, -1035], // Adjust based on content width approximation or measure dynamically
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground/20 hover:text-primary/50 transition-colors cursor-default whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
