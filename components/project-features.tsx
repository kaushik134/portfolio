"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn exists, usually it does in shadcn/ui setups or standard nextjs starters. If not I'll just use template literals. 
// Checking for utils.. usually in lib/utils.ts. I see lib/data.ts etc. I'll assume it exists or check. 
// Actually I'll check first or write safe code. 
// Let's use template literals to be safe if I don't check. 
// Wait, I can see `import { cn } from "@/lib/utils"` in many files usually. 
// I'll assume standard lucide-react icons are available as they were used in page.tsx.

interface ProjectFeaturesProps {
    features: string[];
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
    const [showAll, setShowAll] = useState(false);
    const displayedFeatures = showAll ? features : features.slice(0, 4);
    const hasMore = features.length > 4;

    return (
        <div className="p-5 md:p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-3 text-primary">Core Features</h3>
            <ul className="space-y-2">
                {displayedFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2 mt-1.5 shrink-0" />
                        <span className="flex-1">{feature}</span>
                    </li>
                ))}
            </ul>

            {hasMore && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 flex items-center text-xs font-medium text-primary hover:underline focus:outline-none"
                >
                    {showAll ? (
                        <>
                            Show Less <ChevronUp className="ml-1 w-3 h-3" />
                        </>
                    ) : (
                        <>
                            Show {features.length - 4} More <ChevronDown className="ml-1 w-3 h-3" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
}
