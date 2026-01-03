import { Summary } from "@/components/sections/about/Summary";
import { Timeline } from "@/components/sections/about/Timeline";
import { Philosophy } from "@/components/sections/about/Philosophy"; // I'll create this too
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Kaushik Vaghasiya",
    description: "Learn about Kaushik Vaghasiya, a Senior Backend Developer from Surat. Discover my journey in software engineering, my philosophy on scalable architecture, and my leadership experience.",
    alternates: {
        canonical: "https://kaushik-vaghasiya.vercel.app/about",
    },
};

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-8">
            <BreadcrumbJsonLd items={[
                { name: "Home", item: "/" },
                { name: "About", item: "/about" }
            ]} />
            <Summary />
            <Timeline />
            <Philosophy />
        </div>
    );
}
