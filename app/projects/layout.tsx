import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Kaushik Vaghasiya - Backend Engineering Portfolio',
    description: 'Explore my portfolio of backend engineering projects, including scalable microservices, e-commerce platforms, and civic-tech solutions using Node.js, Go, and AWS.',
    alternates: {
        canonical: 'https://kaushik-vaghasiya.vercel.app/projects',
    },
    openGraph: {
        title: 'Projects | Kaushik Vaghasiya - Backend Engineering Portfolio',
        description: 'Explore my portfolio of backend engineering projects, including scalable microservices, e-commerce platforms, and civic-tech solutions using Node.js, Go, and AWS.',
        url: 'https://kaushik-vaghasiya.vercel.app/projects',
        images: ['/projects-og.jpg'], // Assuming a generic projects OG image or fallback to profile
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
