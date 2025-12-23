"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { resumeData } from "@/lib/data";

import { ChecksGrid } from "@/components/ui/ChecksGrid";

export function Contact() {
    return (
        // <section id="contact" className="py-24 bg-background border-t border-border/40"></section>
        <section id="contact" className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
            <ChecksGrid variant="corner-accent" opacity="opacity-40" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
                            <p className="text-muted-foreground text-lg">
                                Interested in working together? Let's discuss your project and how I can help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <a href={`mailto:${resumeData.hero.social.email}`} className="text-lg font-semibold hover:text-primary transition-colors">{resumeData.hero.social.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                    <a href={`tel:${resumeData.hero.social.phone}`} className="text-lg font-semibold hover:text-primary transition-colors">{resumeData.hero.social.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                                    <p className="text-lg font-semibold">Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-lg font-semibold mb-4">Connect on Social</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/kaushik134" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/kaushik-vaghasiya-6b0788215" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <div className="flex-1 bg-card/50 backdrop-blur-md border border-primary/10 rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
