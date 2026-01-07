import { Metadata } from "next";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2, Layers, Server, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectFeatures } from "@/components/project-features";
import { ProjectJsonLd } from "@/components/project-json-ld";

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
        alternates: {
            canonical: `/projects/${project.slug}`,
        },
        openGraph: {
            title: `${project.title} | Kaushik Vaghasiya`,
            description: project.fullDescription,
            type: "article",
            url: `https://kaushik-vaghasiya.vercel.app/projects/${project.slug}`,
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

import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    // Find project (in a real app, fetch from DB or CMS)
    // Since this is a static list, we can just find it
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20 relative selection:bg-primary/10 selection:text-primary">
            {/* Structured Data */}
            <ProjectJsonLd project={project} />
            <BreadcrumbJsonLd items={[
                { name: "Home", item: "/" },
                { name: "Projects", item: "/projects" },
                { name: project.title, item: `/projects/${project.slug}` }
            ]} />

            {/* fixed background pattern - Custom image for Grabit, CSS grid for others */}
            {project.slug === 'grabit-ecommerce' ? (
                <div className="fixed inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-[0.03] pointer-events-none" />
            ) : (
                <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
            )}

            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-border/40 bg-background/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16 relative z-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 md:mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
                            {project.categories.map((cat) => (
                                <span key={cat} className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                    {cat}
                                </span>
                            ))}
                            <span className="flex items-center text-muted-foreground text-xs md:text-sm ml-auto md:ml-0">
                                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
                                {new Date(project.date).getFullYear()}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            {project.logo && (
                                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden bg-secondary/20 p-2 border border-border/50">
                                    <Image
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        fill
                                        className={cn("object-contain p-1", project.logoDark && "dark:hidden")}
                                    />
                                    {project.logoDark && (
                                        <Image
                                            src={project.logoDark}
                                            alt={`${project.title} logo dark`}
                                            fill
                                            className="hidden dark:block object-contain p-1"
                                        />
                                    )}
                                </div>
                            )}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                {project.title}
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors text-sm md:text-base"
                                >
                                    <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    View Code
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm md:text-base"
                                >
                                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Content */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Overview */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight flex items-center">
                                <Layers className="w-5 h-5 md:w-6 md:h-6 mr-3 text-primary" />
                                Overview
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {project.fullDescription}
                            </p>
                        </section>

                        {/* Roles & Technologies - Only if roles exist */}
                        {project.roles && (
                            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="p-5 md:p-6 rounded-2xl bg-secondary/20 border border-border/50">
                                    <h3 className="text-lg font-semibold mb-3">User Roles</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.roles.map(role => (
                                            <span key={role} className="px-2.5 py-1 rounded-full bg-background border border-border text-xs md:text-sm font-medium shadow-sm">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.coreFeatures && (
                                    <ProjectFeatures features={project.coreFeatures} />
                                )}
                            </section>
                        )}

                        {/* Challenges & Solutions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <section className="space-y-4 bg-secondary/10 p-5 md:p-6 rounded-2xl border border-border/50">
                                <h3 className="text-xl font-bold flex items-center">
                                    <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mr-3 text-sm">⚠️</span>
                                    The Challenge
                                </h3>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="space-y-4 bg-primary/5 p-5 md:p-6 rounded-2xl border border-primary/10">
                                <h3 className="text-xl font-bold text-primary flex items-center">
                                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">💡</span>
                                    The Solution
                                </h3>
                                <ul className="space-y-3">
                                    {project.solutions.map((solution, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Workflows Carousel/Grid */}
                        {project.systemFlow && (
                            <div className="space-y-6 md:space-y-8">
                                <h2 className="text-2xl font-bold tracking-tight">System Workflows</h2>

                                <div className="border border-border rounded-xl overflow-hidden bg-background/50">
                                    <div className="bg-muted/50 px-4 md:px-6 py-3 border-b border-border font-semibold text-sm">System Flow</div>
                                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {Object.entries(project.systemFlow).map(([step, items], i) => (
                                            <div key={step} className="relative">
                                                {i !== Object.keys(project.systemFlow!).length - 1 && (
                                                    <div className="hidden md:block absolute top-3 -right-4 w-8 border-t-2 border-dashed border-muted-foreground/30" />
                                                )}
                                                <h4 className="font-medium capitalize mb-3 text-primary flex items-center">
                                                    <span className="md:hidden w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center mr-2">{i + 1}</span>
                                                    {step}
                                                </h4>
                                                <ul className="space-y-2 pl-8 md:pl-0 border-l md:border-l-0 border-primary/20 md:border-none">
                                                    {(items as string[]).map((item, idx) => (
                                                        <li key={idx} className="text-xs text-muted-foreground bg-secondary/30 p-2 rounded border border-border/50">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Project Gallery */}
                        {project.images && project.images.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold tracking-tight flex items-center">
                                    <ImageIcon className="w-5 h-5 md:w-6 md:h-6 mr-3 text-primary" />
                                    Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    {project.images.map((img, i) => (
                                        <div key={i} className="relative rounded-xl overflow-hidden border border-border/50 shadow-sm aspect-video group bg-secondary/10">
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${i + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

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
                        <section className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24 space-y-8">

                            {/* Detailed Tech Stack */}
                            {project.techStack ? (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold flex items-center">
                                        <Server className="w-5 h-5 mr-2" />
                                        Tech Stack
                                    </h3>
                                    {Object.entries(project.techStack).map(([category, techs]) => (
                                        <div key={category}>
                                            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2 tracking-wider">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(techs as string[]).map((tech) => (
                                                    <span key={tech} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground border border-secondary-foreground/10">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
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
                                </div>
                            )}

                            {/* Payments & Integrations */}
                            {(project.paymentsAndPayouts || project.notifications) && (
                                <div className="pt-6 border-t border-border space-y-6">
                                    {project.paymentsAndPayouts && (
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                                                Payments
                                            </h4>
                                            <p className="text-xs text-muted-foreground mb-2">
                                                Gateways: {project.paymentsAndPayouts.paymentGateways.join(", ")}
                                            </p>
                                            <div className="text-xs bg-secondary/50 p-2 rounded text-muted-foreground">
                                                Cycle: {project.paymentsAndPayouts.payoutCycle}
                                            </div>
                                        </div>
                                    )}

                                    {project.notifications && (
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                                Notifications
                                            </h4>
                                            <div className="flex flex-wrap gap-1">
                                                {project.notifications.map(n => (
                                                    <span key={n} className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-background">
                                                        {n}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
