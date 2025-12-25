"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, User, Mail, MessageSquare, GripHorizontal, Check, AlertCircle } from "lucide-react";

import { sendEmail } from "@/app/actions/send-email";
import toast from "react-hot-toast";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error on change
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("message", formData.message);

        const { data, error } = await sendEmail(formDataToSend);

        setIsSubmitting(false);

        if (error) {
            toast.error(error);
            return;
        }

        setSuccess(true);
        // toast.success("Email sent successfully!");
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const inputClasses = "w-full bg-transparent border-b border-border py-4 outline-none transition-all duration-300 placeholder:text-transparent focus:border-primary text-foreground";

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {!success ? (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="group relative">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'name' || formData.name ? '-top-3 text-xs text-primary' : 'top-4 text-muted-foreground'}`}
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`${inputClasses} ${errors.name ? "border-red-500" : ""}`}
                                />
                                <User className="absolute right-0 top-4 w-4 h-4 text-muted-foreground/30 pointer-events-none" />
                                {errors.name && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                            </div>
                            <div className="group relative">
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'email' || formData.email ? '-top-3 text-xs text-primary' : 'top-4 text-muted-foreground'}`}
                                >
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`${inputClasses} ${errors.email ? "border-red-500" : ""}`}
                                />
                                <Mail className="absolute right-0 top-4 w-4 h-4 text-muted-foreground/30 pointer-events-none" />
                                {errors.email && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                            </div>
                        </div>

                        <div className="group relative">
                            <label
                                htmlFor="subject"
                                className={`absolute left-0 transition-all duration-300 ${focusedField === 'subject' || formData.subject ? '-top-3 text-xs text-primary' : 'top-4 text-muted-foreground'}`}
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('subject')}
                                onBlur={() => setFocusedField(null)}
                                className={`${inputClasses} ${errors.subject ? "border-red-500" : ""}`}
                            />
                            <GripHorizontal className="absolute right-0 top-4 w-4 h-4 text-muted-foreground/30 pointer-events-none" />
                            {errors.subject && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
                        </div>

                        <div className="group relative">
                            <label
                                htmlFor="message"
                                className={`absolute left-0 transition-all duration-300 ${focusedField === 'message' || formData.message ? '-top-3 text-xs text-primary' : 'top-4 text-muted-foreground'}`}
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className={`${inputClasses} resize-none ${errors.message ? "border-red-500" : ""}`}
                            />
                            <MessageSquare className="absolute right-0 top-4 w-4 h-4 text-muted-foreground/30 pointer-events-none" />
                            {errors.message && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className={`mr-2 outline-none transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'group-hover:translate-x-1'}`}>
                                    Send Message
                                </span>
                                {isSubmitting ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    </div>
                                ) : (
                                    <Send className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                )}
                            </button>
                        </div>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="flex flex-col items-center justify-center h-[400px] text-center space-y-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                            <div className="relative w-24 h-24 bg-gradient-to-tr from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center shadow-2xl shadow-primary/30">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                >
                                    <Check className="w-12 h-12" />
                                </motion.div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                            >
                                Message Sent!
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-muted-foreground max-w-xs mx-auto text-lg"
                            >
                                Thanks for reaching out. I'll get back to you shortly.
                            </motion.p>
                        </div>
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => setSuccess(false)}
                            className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all text-sm font-semibold text-primary"
                        >
                            Send Another
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
