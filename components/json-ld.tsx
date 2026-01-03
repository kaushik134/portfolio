import { resumeData } from "@/lib/data";

export function JsonLd() {
    const personId = "https://kaushik-vaghasiya.vercel.app/#person";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": personId,
        name: resumeData.hero.name,
        givenName: "Kaushik",
        familyName: "Vaghasiya",
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
            ...resumeData.skills.tools,
            "System Architecture",
            "Cloud Computing"
        ],
        worksFor: {
            "@type": "Organization",
            name: "Travel Booking Platform", // From resumeData experience[0]
        },
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Shree Uttar Gujarat BBA & BCA College",
            sameAs: "https://www.sugbbabca.org" // Best guess or placeholder
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
        alternateName: "Kaushik Vaghasiya - Senior Backend Developer",
        url: "https://kaushik-vaghasiya.vercel.app",
        author: {
            "@id": personId
        },
        potentialAction: {
            "@type": "SearchAction",
            target: "https://kaushik-vaghasiya.vercel.app/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const profilePageLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        dateCreated: "2024-01-01T00:00:00+05:30",
        dateModified: new Date().toISOString(),
        mainEntity: {
            "@id": personId
        },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://kaushik-vaghasiya.vercel.app"
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects",
                    item: "https://kaushik-vaghasiya.vercel.app/projects"
                }
            ]
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
