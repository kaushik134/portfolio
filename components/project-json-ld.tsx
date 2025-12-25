import { projects } from "@/lib/projects";

interface Props {
    project: typeof projects[0];
}

export function ProjectJsonLd({ project }: Props) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        author: {
            "@type": "Person",
            name: "Kaushik Vaghasiya",
        },
        codeRepository: project.githubUrl,
        programmingLanguage: project.stack,
        datePublished: project.date,
        dateModified: new Date().toISOString(),
        image: project.images && project.images.length > 0 ? project.images[0] : undefined,
        license: "https://opensource.org/licenses/MIT", // Assuming MIT, or make dynamic
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
