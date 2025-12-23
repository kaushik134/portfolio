import { resumeData } from "@/lib/data";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: resumeData.hero.name,
        url: "https://kaushik.dev",
        jobTitle: resumeData.hero.role,
        image: "https://kaushik.dev/profile.jpg",
        sameAs: [
            "https://github.com/kaushik134",
            "https://www.linkedin.com/in/kaushik-vaghasiya-6b0788215",
            `mailto:${resumeData.hero.social.email}`
        ],
        description: resumeData.hero.summary,
        knowsAbout: [
            ...resumeData.skills.backend,
            ...resumeData.skills.database,
            ...resumeData.skills.tools
        ],
        worksFor: {
            "@type": "Organization",
            name: "Current Company" // Could extract from experience[0].company if desired
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
