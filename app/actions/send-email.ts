"use server";

import React from "react";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import ContactFormEmail from "@/components/email/contact-form-email";

const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
};

const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String((error as any).message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }
    return message;
};

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const senderName = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return { error: "Invalid sender email" };
    }
    if (!validateString(subject, 500)) {
        return { error: "Invalid subject" };
    }
    if (!validateString(message, 5000)) {
        return { error: "Invalid message" };
    }
    if (!validateString(senderName, 500)) {
        return { error: "Invalid name" };
    }

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail as string)) {
        return { error: "Invalid email format" };
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
        return { error: "Server configuration error: Missing Gmail credentials" };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const emailHtml = await render(
            React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
                senderName: senderName as string,
                subject: subject as string,
            })
        );

        await transporter.sendMail({
            from: `"${senderName}" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER, // Send to yourself
            replyTo: senderEmail as string,
            subject: `Portfolio Message: ${subject}`,
            html: emailHtml,
        });

        return { data: "Email sent successfully" };
    } catch (error: unknown) {
        console.error("Server Action Error:", error);
        return { error: getErrorMessage(error) };
    }
};
