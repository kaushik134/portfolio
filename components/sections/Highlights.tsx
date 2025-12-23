"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Calendar, Layers, Activity, Users } from "lucide-react";

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    // Use useSpring for smooth animation
    const springValue = useSpring(from, {
        duration: duration * 1000,
        bounce: 0,
        stiffness: 50,
        damping: 20
    });

    useEffect(() => {
        if (inView) {
            springValue.set(to);
        }
    }, [inView, to, springValue]);

    // Format number to handle decimals if needed, but for integers Math.floor is fine
    // For 99.9, we need to handle decimals
    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // If it's an integer, show no decimals. If float, show 1 decimal.
                ref.current.textContent = Number.isInteger(to)
                    ? Math.floor(latest).toString()
                    : latest.toFixed(1);
            }
        });
    }, [springValue, to]);

    return <span ref={ref}>{from}</span>;
}

const stats = [
    { label: "Years of Experience", value: 4, suffix: "+", icon: Calendar },
    { label: "Projects Completed", value: 12, suffix: "+", icon: Layers },
    { label: "Uptime Maintained", value: 99.9, suffix: "%", icon: Activity },
    { label: "Users Served", value: 10, suffix: "k+", icon: Users },
];

export function Highlights() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-16 bg-background border-t border-border/40 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                                <div className="relative h-full space-y-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm group-hover:shadow-lg group-hover:shadow-primary/5">
                                    <div className="mx-auto w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2 flex justify-center items-baseline">
                                            <Counter from={0} to={stat.value} duration={2} />
                                            <span className="text-primary text-3xl ml-1">{stat.suffix}</span>
                                        </h3>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
