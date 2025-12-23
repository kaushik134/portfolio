"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const beams: Beam[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Beam {
            x: number;
            y: number;
            length: number;
            angle: number;
            speed: number;
            opacity: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.length = Math.random() * 200 + 100;
                this.angle = -Math.PI / 4; // Diagonal
                this.speed = Math.random() * 0.5 + 0.1;
                this.opacity = Math.random() * 0.3 + 0.1;
                // Use CSS variable colors if possible, or fallback to manual
                this.color = `rgba(120, 120, 120, ${this.opacity})`;
            }

            update() {
                this.x -= this.speed * Math.cos(this.angle);
                this.y -= this.speed * Math.sin(this.angle);

                // Reset if out of bounds
                if (this.x < -this.length || this.y < -this.length) {
                    this.x = canvas!.width + Math.random() * 200;
                    this.y = Math.random() * canvas!.height;
                }

                this.draw();
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1.5;

                // Gradient fade
                const gradient = ctx.createLinearGradient(
                    this.x,
                    this.y,
                    this.x + this.length * Math.cos(this.angle),
                    this.y + this.length * Math.sin(this.angle)
                );
                gradient.addColorStop(0, "transparent");
                gradient.addColorStop(0.5, this.color);
                gradient.addColorStop(1, "transparent");

                ctx.strokeStyle = gradient;

                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x + this.length * Math.cos(this.angle),
                    this.y + this.length * Math.sin(this.angle)
                );
                ctx.stroke();
            }
        }

        const init = () => {
            resizeCanvas();
            for (let i = 0; i < 30; i++) {
                beams.push(new Beam());
            }
            animate();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            beams.forEach((beam) => beam.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        init();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={beamsRef}
            className={cn(
                "fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay",
                className
            )}
        />
    );
};
