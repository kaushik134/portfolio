"use client";

import { motion, Variants } from "framer-motion";
import { Database, Server, Globe, Cpu, Cloud, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export function SystemOrbit() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const floatingVariants: Variants = {
        initial: { y: 0 },
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    // Using global primary/foreground colors instead of specific hardcoded colors
    const icons = [
        { Icon: Globe, label: "Frontend", x: 0, y: -160, size: 28 },
        { Icon: Server, label: "Backend", x: -140, y: -60, size: 28 },
        { Icon: Database, label: "Database", x: 140, y: -60, size: 28 },
        { Icon: Shield, label: "Security", x: -100, y: 120, size: 24 },
        { Icon: Cloud, label: "DevOps", x: 100, y: 120, size: 24 },
        { Icon: Cpu, label: "Core", x: 0, y: 180, size: 24 },
    ];

    return (
        <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />

            <motion.div
                className="relative w-full h-full flex items-center justify-center transform-style-3d"
                style={{
                    rotateX: mousePosition.y,
                    rotateY: mousePosition.x,
                }}
                transition={{ type: "spring", stiffness: 75, damping: 20 }}
            >
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.05" />
                            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                    {icons.map((icon, index) => (
                        <motion.line
                            key={`line-${index}`}
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${icon.x}px)`}
                            y2={`calc(50% + ${icon.y}px)`}
                            stroke="url(#line-gradient)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                        />
                    ))}
                    <motion.line x1={`calc(50% - 140px)`} y1={`calc(50% - 60px)`} x2={`calc(50% + 140px)`} y2={`calc(50% - 60px)`} stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Central Core */}
                <motion.div
                    className="relative z-20 w-40 h-40 bg-background/90 backdrop-blur-xl border border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(var(--primary),0.1)]"
                    animate={{
                        boxShadow: ["0 0 60px rgba(var(--primary),0.1)", "0 0 80px rgba(var(--primary),0.2)", "0 0 60px rgba(var(--primary),0.1)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <div className="absolute inset-0 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-3 rounded-full border border-primary/10 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-8 rounded-full border border-primary/5 animate-pulse" />

                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-primary">
                            KV
                        </span>
                        <span className="text-[10px] text-primary/60 font-mono mt-1 tracking-widest">SYSTEMS</span>
                    </div>
                </motion.div>

                {/* Orbiting Nodes */}
                {icons.map(({ Icon, label, x, y, size }, index) => (
                    <motion.div
                        key={index}
                        className={`absolute z-10 flex flex-col items-center gap-3`}
                        style={{ x, y }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            custom={index}
                        >
                            <div className="relative group">
                                <div className={`absolute inset-0 bg-background rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10`} />
                                <div className="relative p-4 bg-background border border-border rounded-xl shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    <Icon size={size} className="text-primary" />
                                </div>

                                {/* Badge Label */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-background/80 backdrop-blur-md rounded-md border border-border text-[10px] uppercase font-bold tracking-wider text-muted-foreground shadow-xl whitespace-nowrap">
                                    {label}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
