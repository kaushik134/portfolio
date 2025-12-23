"use client";

import { cn } from "@/lib/utils";

interface ChecksGridProps {
    variant?: 'fade-out' | 'radial' | 'mask-left' | 'mask-right' | 'full' | 'corner-accent' | 'dense';
    className?: string;
    opacity?: string;
}

export function ChecksGrid({ variant = 'full', className, opacity = "opacity-40" }: ChecksGridProps) {
    const masks = {
        'fade-out': "[mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]",
        'radial': "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]",
        'mask-left': "[mask-image:linear-gradient(to_right,black_0%,transparent_50%)]",
        'mask-right': "[mask-image:linear-gradient(to_left,black_0%,transparent_50%)]",
        'full': "",
        'corner-accent': "[mask-image:radial-gradient(circle_at_bottom_right,black_20%,transparent_70%)]",
        'dense': "" // Dense variant uses no mask by default, but changes grid size below
    };

    const gridSize = variant === 'dense' ? "bg-[size:16px_16px]" : "bg-[size:24px_24px]";
    const crossSize = variant === 'dense' ? "[background-size:16px_16px] [background-position:8px_8px]" : "[background-size:24px_24px] [background-position:12px_12px]";

    return (
        <div className={cn("absolute inset-0 w-full h-full pointer-events-none", opacity, className)}>
            {/* Grid */}
            <div className={cn(
                `absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] ${gridSize}`,
                masks[variant]
            )} />

            {/* Crosses */}
            <div className={cn(
                `absolute inset-0 bg-[radial-gradient(#80808050_0.5px,transparent_0.5px)] ${crossSize}`, // Offset specific for cross alignment
                masks[variant]
            )} />
        </div>
    );
}
