"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        year: "2023 - Present",
        role: "Team Head / Senior Node.js Developer",
        company: "Tech Company", // Placeholder
        description: "Leading a team of 10+ developers, architecting microservices on AWS, and improving system uptime to 99.9%.",
    },
    {
        year: "2021 - 2023",
        role: "Senior Backend Developer",
        company: "Previous Corp",
        description: "Optimized database queries reducing API latency by 40%. Implemented secure payment gateways handling $1M+ monthly volume.",
    },
    {
        year: "2019 - 2021",
        role: "Backend Developer",
        company: "Startup Inc",
        description: "Built RESTful APIs for mobile apps, managed CI/CD pipelines, and collaborated with frontend teams.",
    },
];

export function Timeline() {
    return (
        <section className="py-20 bg-secondary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Professional Journey</h2>
                    <p className="text-muted-foreground">My path from a backend developer to a technical leader.</p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-[0.5px]"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center md:-ml-5">
                                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                                </div>

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                    <div className={`p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                                            {exp.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                        <div className="text-sm font-medium text-muted-foreground mb-4">{exp.company}</div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for alternate side on desktop */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
