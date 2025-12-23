"use client";

import { HeroContent } from "./hero/HeroContent";
import { SystemOrbit } from "./hero/SystemOrbit";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20 pb-10">
            {/* Checks Cross Background Effect */}
            <div className="absolute inset-0 w-full h-full">
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Crosses at intersections */}
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(#80808050_1px,transparent_1px)] [background-size:4rem_4rem] [background-position:2rem_2rem]" />
                </div>

                {/* Ambient Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Content */}
                    <div className="order-2 md:order-1 flex justify-center md:justify-start">
                        <HeroContent />
                    </div>

                    {/* Right: Visual */}
                    <div className="order-1 md:order-2 hidden md:flex justify-center md:justify-end">
                        <SystemOrbit />
                    </div>
                </div>
            </div>
        </section>
    );
}
