import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter/Outfit as per plan
import "../styles/globals.css";
import "../styles/theme.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/json-ld";
import { ScrollToTop } from "@/components/common/ScrollToTop";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushik-vaghasiya.vercel.app"),
  title: {
    default: "Kaushik Vaghasiya | Senior Backend Developer & Team Lead",
    template: "%s | Kaushik Vaghasiya | Node.js & Cloud Architect",
  },
  description: "Senior Node.js Developer and Team Lead with 4+ years of experience in architecting scalable backend systems, microservices, and cloud solutions using AWS, Docker, and Kubernetes. Based in Surat, Gujarat.",
  keywords: [
    "Kaushik Vaghasiya",
    "Kaushik Vaghasiya Portfolio",
    "Senior Backend Developer",
    "Node.js Developer",
    "Express.js Expert",
    "Microservices Architect",
    "Go Developer",
    "Golang",
    "Software Engineer Surat",
    "React.js Developer",
    "Full Stack Developer",
    "Technical Team Lead",
    "AWS Cloud Architect",
    "Docker",
    "Kubernetes",
    "Backend Optimization",
    "System Design",
    "Database Management"
  ],
  authors: [{ name: "Kaushik Vaghasiya", url: "https://kaushik-vaghasiya.vercel.app" }],
  creator: "Kaushik Vaghasiya",
  publisher: "Kaushik Vaghasiya",
  applicationName: "Kaushik Vaghasiya Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://kaushik-vaghasiya.vercel.app",
    languages: {
      'en-US': 'https://kaushik-vaghasiya.vercel.app',
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Kaushik",
    lastName: "Vaghasiya",
    username: "kaushik134",
    gender: "male",
    locale: "en_US",
    url: "https://kaushik-vaghasiya.vercel.app",
    title: "Kaushik Vaghasiya | Senior Backend Developer & Architect",
    description: "Senior Node.js Developer & Team Lead specializing in scalable backend systems, microservices, and cloud architecture. Explore my portfolio and technical expertise.",
    siteName: "Kaushik Vaghasiya Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Kaushik Vaghasiya - Senior Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Vaghasiya | Senior Backend Developer",
    description: "Senior Node.js Developer & Team Lead specializing in scalable backend systems, microservices, and cloud architecture.",
    creator: "@kaushik134", // Assuming github handle roughly maps, but safer to leave generic if unknown. User mentioned 'kaushik134' for github.
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "fydKu7l2t51NVU3GY0-LPLeW-rtRcFZ9HQ2jdUAzKlU", // Keeping existing
    // Add bing/yandex if needed
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
