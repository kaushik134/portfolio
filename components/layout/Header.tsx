"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection Observer for active section
    useEffect(() => {
        if (pathname !== "/" && pathname !== "/projects") return; // Only run on home or projects page loop? Actually strictly home for sections.

        // If we are not on home page, likely we shouldn't highlight home sections except maybe "Projects" if we are on /projects?
        // Let's assume this strictly works on landing page.
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // 50% visibility to trigger
        );

        // IDs corresponding to nav links
        const sections = ["home", "projects", "experience", "education", "contact"];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (pathname !== "/" && href.startsWith("/#")) {
            // Let Link component handle navigation to home + hash
            return;
        }

        // If on home page, smooth scroll
        if (pathname === "/" && href.startsWith("/#")) {
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id); // Optimistic update
            }
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" onClick={() => handleNavClick("/#home")} className="text-2xl font-bold tracking-tighter cursor-pointer">
                            Kaushik<span className="text-primary">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => {
                                const isHashLink = link.href.startsWith("/#");
                                const sectionId = link.href.replace("/#", "");
                                const isActive = pathname === "/"
                                    ? activeSection === sectionId
                                    : (pathname.startsWith("/projects") && sectionId === "projects");

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            if (pathname === "/" && isHashLink) {
                                                e.preventDefault();
                                                handleNavClick(link.href);
                                            }
                                        }}
                                        className={cn(
                                            "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                                            isActive
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <a href="https://github.com/kaushik134" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/kaushik-vaghasiya-6b0788215" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                            aria-label="Toggle Theme"
                        >
                            {mounted ? (
                                theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
                            ) : (
                                <div className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
                        >
                            {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => {
                                const sectionId = link.href.replace("/#", "");
                                const isActive = pathname === "/" ? activeSection === sectionId : pathname === link.href;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            if (pathname === "/" && link.href.startsWith("/#")) {
                                                e.preventDefault();
                                                handleNavClick(link.href);
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={cn(
                                            "block px-3 py-2 rounded-md text-base font-medium",
                                            isActive
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

