import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter/Outfit as per plan
import "../styles/globals.css";
import "../styles/theme.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/json-ld";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushik.dev"),
  title: {
    default: "Kaushik Vaghasiya | Senior Backend Developer",
    template: "%s | Kaushik Vaghasiya",
  },
  description: "Senior Node.js Developer & Team Lead specializing in scalable backend systems, microservices, and cloud architecture. 4+ years of experience.",
  keywords: ["Kaushik Vaghasiya", "Backend Developer", "Node.js", "Express.js", "Microservices", "System Architecture", "Web Developer", "Software Engineer"],
  authors: [{ name: "Kaushik Vaghasiya", url: "https://kaushik.dev" }],
  creator: "Kaushik Vaghasiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaushik.dev",
    title: "Kaushik Vaghasiya | Senior Backend Developer",
    description: "Senior Node.js Developer & Team Lead specializing in scalable backend systems, microservices, and cloud architecture.",
    siteName: "Kaushik Vaghasiya Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Assuming we will have one eventually, generic fallback
        width: 1200,
        height: 630,
        alt: "Kaushik Vaghasiya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Vaghasiya | Senior Backend Developer",
    description: "Senior Node.js Developer & Team Lead specializing in scalable backend systems, microservices, and cloud architecture.",
    creator: "@kaushik", // Placeholder, updating if social link exists
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
        </ThemeProvider>
      </body>
    </html>
  );
}
