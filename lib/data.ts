export const resumeData = {
    hero: {
        name: "Kaushik Vaghasiya",
        image: "/profile.jpg",
        role: "Development Team Head | Sr. Node.js Developer",
        summary: "Solution-oriented Sr. Node.js Developer & Team Lead with 4+ years of experience in architecting and delivering scalable web and mobile applications. Proven expertise in backend systems, REST & GraphQL APIs, microservices, cloud deployment, and third-party integrations.",
        stats: {
            years: "4+",
            efficiency: "35%",
            users: "10K+"
        },
        social: {
            email: "kaushikvaghasiya605@gmail.com",
            phone: "+91 6353125194",
            linkedin: "https://www.linkedin.com/in/kaushik-vaghasiya-6b0788215",
            github: "https://github.com/kaushik134"
        }
    },
    experience: [
        {
            role: "Sr. Node.js Developer (Contract | Remote)",
            company: "Travel Booking Platform", // Company name not explicitly clear in "Contract", using description
            location: "Remote",
            period: "Oct 2025 - Present",
            description: "Designed and developed scalable backend services for a travel booking & itinerary management platform using Node.js and Express.js.",
            achievements: [
                "Integrated Stripe Payment Gateway for secure transactions.",
                "Implemented Cloudinary for media uploads and automatic image optimization."
            ],
            tech: ["Node.js", "Express.js", "Stripe", "Cloudinary"]
        },
        {
            role: "Development Team Head | Sr. Node.js Developer",
            company: "Corenet Tech India",
            location: "Ahmedabad, Gujarat", // Inferring loc from prev context or standard
            period: "March 2024 - Oct 2025",
            description: "Spearheaded the end-to-end SDLC for multiple web and mobile applications by leading and mentoring a cross-functional Agile team.",
            achievements: [
                "Engineered scalable Node.js/Express.js solutions, boosting system efficiency by 25%.",
                "Executed CI/CD pipelines, accelerating development cycles by 30%.",
                "Integrated Firebase Cloud Messaging and GCS for real-time data handling."
            ],
            tech: ["Node.js", "Express.js", "CI/CD", "Firebase", "GCS"]
        },
        {
            role: "Frontend Developer | Jr. Full Stack Developer",
            company: "Hit InfoTech",
            location: "Surat, Gujarat", // Inferring loc
            period: "Aug 2022 - Feb 2024",
            description: " improved user retention by 15% through optimized full-stack application performance and responsive feature delivery.",
            achievements: [
                "Improved full-stack application performance by 20%, reducing load times.",
                "Collaborated with backend developers and UX designers to deliver 5+ responsive features."
            ],
            tech: ["React.js", "Node.js", "API Integrations"]
        },
        {
            role: "Backend Developer",
            company: "Swicktech Solution",
            location: "Ahmedabad, Gujarat", // Inferring loc
            period: "Oct 2021 - Jul 2022",
            description: "Built and maintained secure, high-performance backend services for a task management platform serving 10,000+ active monthly users.",
            achievements: [
                "Integrated 5+ third-party services and optimized MongoDB queries.",
                "Improved server response time by 35% and reduced downtime incidents by 20%."
            ],
            tech: ["Node.js", "MongoDB", "Backend Optimization"]
        }
    ],
    projects: [
        {
            id: "1",
            title: "Grabit",
            slug: "grabit-ecommerce",
            description: "Multi-role e-commerce platform with automated payouts.",
            fullDescription: "Developed and enhanced a multi-role platform (User, Business, Admin) with shop, order management, and automated payout modules.",
            challenges: "Complex multi-role permission handling and automated payout scheduling.",
            solutions: "Integrated Razorpay & Cashfree for payments and implemented Twilio-based notifications.",
            impact: ["Boosted merchant adoption by 20%."],
            stack: ["Node.js", "React.js", "MongoDB", "Razorpay", "Cashfree", "Twilio"],
            categories: ["Full-Stack", "E-commerce", "Fintech"],
            images: ["/projects/grabit-1.jpg"], // Placeholder
            date: "2024-01-01", // Approx
            impactScore: 92,
            featured: true
        },
        {
            id: "2",
            title: "Skill Connect (Job Portal)",
            slug: "skill-connect-job-portal",
            description: "Secure dual-registration job placement portal.",
            fullDescription: "Engineered a secure dual registration & authentication system for companies and job candidates, ensuring 100% data isolation & compliance.",
            challenges: "Ensuring 100% data isolation between candidates and companies.",
            solutions: "Automated job posting renewals and interview scheduling.",
            impact: ["Reduced manual workload by 50%."],
            stack: ["Node.js", "React.js", "AngularJS", "MongoDB", "PayPal"],
            categories: ["Full-Stack", "Portal", "Automation"],
            images: ["/projects/job-portal-1.jpg"],
            date: "2023-06-01", // Approx
            impactScore: 88,
            featured: true
        },
        {
            id: "3",
            title: "Clutchly AI",
            slug: "clutchly-ai",
            description: "Scalable microservices for fantasy sports scoring.",
            fullDescription: "Designed scalable microservices with ETL pipelines and ML models. Built a config-driven scoring engine supporting multiple fantasy platforms (Dream11, MPL).",
            challenges: "Handling high-volume real-time scoring data for multiple platforms.",
            solutions: "Implemented ETL pipelines and ML models achieving <2s latency.",
            impact: ["Achieved <2s latency and 99.5% uptime."],
            stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Microservices"],
            categories: ["Backend", "AI/ML", "Microservices"],
            images: ["/projects/clutchly-1.jpg"],
            date: "2023-11-01", // Approx
            impactScore: 95,
            featured: true
        },
        {
            id: "4",
            title: "Janadesh",
            slug: "janadesh-civic-platform",
            description: "Civic engagement platform with complaint tracking.",
            fullDescription: "Enhanced a civic engagement platform with complaint tracking, KYC, and social features. Directed the development of government dashboards.",
            challenges: "Complex workflow management for complaint resolution.",
            solutions: "Developed government dashboards for post moderation and analytics.",
            impact: ["Streamlined complaint resolution workflows."],
            stack: ["Node.js", "Express.js", "MongoDB"],
            categories: ["Backend", "Civic Tech", "Dashboard"],
            images: ["/projects/janadesh-1.jpg"],
            date: "2023-03-01",
            impactScore: 85,
            featured: false
        },
        {
            id: "5",
            title: "E-Commerce Platform",
            slug: "ecommerce-platform-api",
            description: "REST API backend for product catalog and payments.",
            fullDescription: "Expanded a REST API backend for product catalog, inventory, orders, and payments. Implemented Stripe payments ensuring secure transactions.",
            challenges: "Scalable inventory and secure payment processing.",
            solutions: "Implemented Stripe payments and robust REST API architecture.",
            impact: ["Ensured secure and reliable transactions."],
            stack: ["Node.js", "Express.js", "MongoDB", "Stripe"],
            categories: ["Backend", "E-commerce", "API"],
            images: ["/projects/ecommerce-api-1.jpg"],
            date: "2022-09-01",
            impactScore: 80,
            featured: false
        },
        {
            id: "6",
            title: "LithiaRX",
            slug: "lithiarx-pharma",
            description: "Full-stack service with 2FA security.",
            fullDescription: "Developed full-stack services with robust backend (Express.js) and dynamic AngularJS frontend. Strengthened platform security by implementing Two-Factor Authentication (2FA).",
            challenges: "High security requirements for pharma/medical data.",
            solutions: "Implemented Two-Factor Authentication (2FA) and dynamic frontend.",
            impact: ["Strengthened platform security."],
            stack: ["Node.js", "Express.js", "AngularJS", "MongoDB", "2FA"],
            categories: ["Full-Stack", "Healthcare", "Security"],
            images: ["/projects/lithiarx-1.jpg"],
            date: "2022-04-01",
            impactScore: 82,
            featured: false
        }
    ],
    education: [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Shree Uttar Gujarat BBA & BCA College",
            location: "Gujarat, India",
            year: "March 2023",
            grade: "Completed",
            gpa: "N/A",
            status: "Completed",
            description: "Specialized in Computer Applications with a focus on full-stack development and software engineering.",
            achievements: [
                "Built strong foundation in programming and software engineering.",
                "Active participation in technical projects."
            ],
            coursework: [
                "Data Structures",
                "Web Technologies",
                "Database Management",
                "Software Engineering",
                "Object-Oriented Programming"
            ],
            verified: true
        }
    ],
    skills: {
        backend: ["Node.js", "Express.js", "Microservices", "REST APIs", "GraphQL"],
        database: ["MongoDB", "MySQL", "Mongoose", "Database Optimization"],
        frontend: ["React.js", "AngularJS", "JavaScript (ES6+)", "HTML", "CSS"],
        tools: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Postman"],
        integrations: ["Stripe", "Razorpay", "PayPal", "Twilio", "Firebase"]
    }
};
