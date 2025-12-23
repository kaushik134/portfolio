"use client";

import { Lightbulb, Code, Users } from "lucide-react";
import { motion } from "framer-motion";

const philosophies = [
    {
        icon: Code,
        title: "Clean Code",
        description: "Writing code that is readable, testable, and maintainable is my top priority. I adhere to SOLID principles.",
    },
    {
        icon: Users,
        title: "Team Leadership",
        description: "Empowering developers through mentorship and clear communication. Success is a team effort.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Focusing on the root cause rather than symptoms. I enjoy tackling complex architectural challenges.",
    },
];

export function Philosophy() {
    return (
        <section className="py-20 container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">My Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {philosophies.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors"
                    >
                        <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
