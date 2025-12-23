import { Metadata } from "next";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2, Layers, Server } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Kaushik Vaghasiya`,
            description: project.fullDescription,
            type: "article",
            url: `https://kaushik.dev/projects/${project.slug}`,
            section: "Portfolio",
            tags: project.categories,
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    // Find project (in a real app, fetch from DB or CMS)
    // Since this is a static list, we can just find it
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-background border-b border-border/40">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 relative z-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            {project.categories.map((cat) => (
                                <span key={cat} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                    {cat}
                                </span>
                            ))}
                            <span className="flex items-center text-muted-foreground text-sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(project.date).getFullYear()}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            {project.description}
                        </p>

                        <div className="flex gap-4 mt-8">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Code
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Content */}
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Overview */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight flex items-center">
                                <Layers className="w-6 h-6 mr-3 text-primary" />
                                Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-8">
                            <section className="space-y-4 bg-secondary/10 p-6 rounded-2xl border border-border/50">
                                <h3 className="text-xl font-bold">The Challenge</h3>
                                <p className="text-muted-foreground">
                                    {project.challenges}
                                </p>
                            </section>
                            <section className="space-y-4 bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                <h3 className="text-xl font-bold text-primary">The Solution</h3>
                                <p className="text-muted-foreground">
                                    {project.solutions}
                                </p>
                            </section>
                        </div>

                        {/* Impact */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">Key Outcomes & Impact</h2>
                            <div className="grid gap-4">
                                {project.impact.map((item, i) => (
                                    <div key={i} className="flex items-start p-4 rounded-lg bg-background border border-border">
                                        <CheckCircle2 className="w-6 h-6 mr-4 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Tech Stack & Architecture */}
                    <div className="space-y-8">
                        <section className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold mb-6 flex items-center">
                                <Server className="w-5 h-5 mr-2" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-md bg-secondary text-sm font-medium text-secondary-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
