import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "Get in touch with Kaushik Vaghasiya.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-12 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-6">Let's work together</h1>
                        <p className="text-muted-foreground text-lg mb-12">
                            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to drop a message.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <a href="mailto:contact@kaushik.dev" className="text-muted-foreground hover:text-foreground transition-colors">
                                        kaushikvaghasiya605@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-foreground transition-colors">
                                        +91 6353 125 194
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Location</h3>
                                    <p className="text-muted-foreground">
                                        Surat, Gujarat, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
