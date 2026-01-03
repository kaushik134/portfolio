
import { projects } from "@/lib/projects";

interface Props {
    project: typeof projects[0];
}

export function ProjectJsonLd({ project }: Props) {
    const isWebApplication = project.liveUrl !== undefined;

    // Base schema for source code
    const sourceCodeSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        author: {
            "@type": "Person",
            name: "Kaushik Vaghasiya",
            url: "https://kaushik-vaghasiya.vercel.app"
        },
        codeRepository: project.githubUrl,
        programmingLanguage: project.stack,
        datePublished: project.date,
        dateModified: new Date().toISOString(),
        image: project.images && project.images.length > 0 ? `https://kaushik-vaghasiya.vercel.app${project.images[0]}` : undefined,
    };

    // If it has a live URL, it's also a WebApplication
    const applicationSchema = isWebApplication ? {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: project.title,
        description: project.fullDescription,
        url: project.liveUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        author: {
            "@type": "Person",
            name: "Kaushik Vaghasiya",
            url: "https://kaushik-vaghasiya.vercel.app"
        },
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
        },
        screenshot: project.images && project.images.length > 0 ? `https://kaushik-vaghasiya.vercel.app${project.images[0]}` : undefined,
    } : null;

    // Return array if multiple schemas
    const schema = applicationSchema ? [sourceCodeSchema, applicationSchema] : sourceCodeSchema;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
