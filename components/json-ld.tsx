import { resumeData } from "@/lib/data";

export function JsonLd() {
    const personId = "https://kaushik-vaghasiya.vercel.app/#person";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": personId,
        name: resumeData.hero.name,
        url: "https://kaushik-vaghasiya.vercel.app",
        jobTitle: resumeData.hero.role,
        image: "https://kaushik-vaghasiya.vercel.app/profile.jpg",
        sameAs: [
            "https://github.com/kaushik134",
            "https://www.linkedin.com/in/kaushik-vaghasiya-6b0788215",
            `mailto:${resumeData.hero.social.email}`
        ],
        description: resumeData.hero.summary,
        email: resumeData.hero.social.email,
        telephone: resumeData.hero.social.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Surat",
            addressRegion: "Gujarat",
            addressCountry: "IN"
        },
        knowsAbout: [
            ...resumeData.skills.backend,
            ...resumeData.skills.database,
            ...resumeData.skills.tools
        ],
        worksFor: {
            "@type": "Organization",
            name: "Current Company" // In future fetch from resumeData.experience[0].company
        },
        contactPoint: {
            "@type": "ContactPoint",
            email: resumeData.hero.social.email,
            contactType: "Enquiries"
        }
    };

    const websiteLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Kaushik Vaghasiya Portfolio",
        url: "https://kaushik-vaghasiya.vercel.app",
        author: {
            "@id": personId
        }
    };

    const profilePageLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        dateCreated: "2024-01-01T00:00:00+05:30",
        dateModified: new Date().toISOString(),
        mainEntity: {
            "@id": personId
        }
    };

    const allJsonLd = [jsonLd, websiteLd, profilePageLd];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }}
        />
    );
}
