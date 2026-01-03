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
        hasOccupation: {
            "@type": "Occupation",
            name: "Senior Backend Developer",
            occupationLocation: {
                "@type": "City",
                name: "Surat"
            },
            skills: [
                "Node.js",
                "System Architecture",
                "Microservices"
            ]
        },
        nationality: {
            "@type": "Country",
            name: "India"
        },
        gender: "Male",
        image: "https://kaushik-vaghasiya.vercel.app/profile.jpg",
        sameAs: [
            "https://github.com/kaushik134",
            "https://www.linkedin.com/in/kaushik-vaghasiya-6b0788215",
            `mailto:${resumeData.hero.social.email}`
        ],
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://kaushik-vaghasiya.vercel.app"
        },
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
        },
        makesOffer: {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Backend Development, Cloud Architecture & Technical Consultancy",
                "areaServed": [
                    { "@type": "City", "name": "Surat" },
                    { "@type": "City", "name": "Ahmedabad" },
                    { "@type": "City", "name": "Gandhinagar" },
                    { "@type": "City", "name": "Mumbai" },
                    { "@type": "City", "name": "Pune" },
                    { "@type": "City", "name": "Bangalore" },
                    { "@type": "City", "name": "Delhi" },
                    { "@type": "City", "name": "Noida" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Place", "name": "Worldwide" }
                ]
            }
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
        publisher: {
            "@id": personId
        },
        isFamilyFriendly: true,
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
