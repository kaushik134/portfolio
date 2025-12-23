import { Summary } from "@/components/sections/about/Summary";
import { Timeline } from "@/components/sections/about/Timeline";
import { Philosophy } from "@/components/sections/about/Philosophy"; // I'll create this too
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Kaushik Vaghasiya, his career journey, and technical philosophy.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-8">
            <Summary />
            <Timeline />
            <Philosophy />
        </div>
    );
}
