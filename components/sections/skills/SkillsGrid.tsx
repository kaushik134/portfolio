"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Shield, CreditCard, Layout } from "lucide-react";

// Categorized skills based on prompt
const skillCategories = [
    {
        title: "Backend Engineering",
        icon: Server,
        skills: ["Node.js", "Express.js", "NestJS", "Microservices", "REST APIs", "GraphQL", "gRPC"],
    },
    {
        title: "Database Strategy",
        icon: Database,
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Query Optimization", "Indexing"],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "DigitalOcean", "GCS"],
    },
    {
        title: "Security",
        icon: Shield,
        skills: ["JWT Authentication", "OAuth2", "RBAC", "2FA Implementation", "API Security", "Data Encryption"],
    },
    {
        title: "Payments & Integrations",
        icon: CreditCard,
        skills: ["Stripe Connect", "PayPal", "Razorpay", "Twilio", "SendGrid", "OneSignal", "Cashfree"],
    },
    {
        title: "Frontend Support",
        icon: Layout,
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    },
];

export function SkillsGrid() {
    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 h-full hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
