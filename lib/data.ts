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
            description: "Location-based multi-role e-commerce & rewards platform with automated payouts and gamified coin system.",
            fullDescription: `Grabit is a location-aware, multi-role commerce and rewards platform connecting nearby users and local businesses.
The system supports User, Business, and Admin roles with OTP-based authentication, real-time location tracking,
QR-based offer redemption, UPI payments, automated payouts, and a gamified coin mining engine.`,

            roles: ["User", "Business", "Admin"],

            coreFeatures: [
                "OTP-based authentication (mobile & email)",
                "Real-time location tracking (5 km radius)",
                "Nearby business & offer discovery",
                "QR-based offer redemption",
                "UPI payments with automated payouts",
                "Gamified coin mining system",
                "Business subscriptions & promotions",
                "Banner ads & push notifications"
            ],

            challenges: [
                "Handling complex multi-role access control",
                "Real-time geo-based filtering for nearby users and businesses",
                "Secure QR code lifecycle management",
                "Automated payout scheduling and reconciliation",
                "Preventing coin misuse and fraud scenarios"
            ],

            solutions: [
                "Implemented role-based access control (RBAC)",
                "Used geo-indexing for fast 5 km radius queries",
                "Designed secure QR validation and redemption flow",
                "Integrated Razorpay & Cashfree for UPI payments and payouts",
                "Maintained coin transaction logs for audit and fraud prevention"
            ],

            systemFlow: {
                "Auth & Discovery": [
                    "OTP-based authentication (mobile & email)",
                    "User/Business location tracking every 5 mins",
                    "Map-based discovery of nearby offers within 5km"
                ],
                "Transactions & Rewards": [
                    "Coins earned via activity, bill upload, and daily usage",
                    "Direct coin redemption on offers and purchases",
                    "UPI payments and secure QR-based redemption"
                ],
                "Business & Monetization": [
                    "GMB integration and manual business onboarding",
                    "Subscription-based promotion & targeted notifications",
                    "Automated 7-day payout cycles with reconciliation"
                ]
            },

            paymentsAndPayouts: {
                paymentGateways: ["Razorpay", "Cashfree"],
                payoutCycle: "7 working days",
                supportedModes: ["UPI"],
                reconciliation: "Automated payout status tracking in business dashboard"
            },

            notifications: [
                "Fast2SMS for OTP & transactional SMS",
                "Twilio for communication services",
                "Zoho Mail for email notifications"
            ],

            adminCapabilities: [
                "User & business verification",
                "Subscription & commission management",
                "Payout monitoring",
                "Platform analytics & reporting"
            ],

            techStack: {
                backend: ["Node.js"],
                frontend: ["React Native"],
                database: ["MongoDB"],
                payments: ["Razorpay", "Cashfree"],
                notifications: ["Fast2SMS", "Twilio", "Zoho Mail"],
                infrastructure: ["DigitalOcean"],
                versionControl: ["GitHub"]
            },

            impact: [
                "Increased merchant onboarding by 20%",
                "Improved offline store footfall via location targeting",
                "Higher user engagement through gamified rewards",
                "Built trust with transparent automated payouts"
            ],

            // Consolidated stack for backward compatibility
            stack: ["Node.js", "React.js", "MongoDB", "Razorpay", "Cashfree", "Twilio", "DigitalOcean"],
            categories: ["Full-Stack", "E-commerce", "Fintech", "Location-Based"],
            images: [
                "/projects/grabit-4.png",
                "/projects/grabit-5.png",
                "/projects/grabit-1.png",
                "/projects/grabit-2.png",
                "/projects/grabit-3.png",
            ],
            date: "2024-01-01",
            impactScore: 92,
            featured: true
        },
        {
            id: "2",
            title: "Clutchly AI",
            slug: "clutchly-ai",

            description:
                "AI-powered fantasy cricket decision-support platform with real-time scoring, win prediction, and multi-platform optimization.",

            fullDescription: `
Clutchly AI is a cross-platform fantasy cricket assistant designed to help users improve
their winning probability using advanced data pipelines and machine learning models.
The platform supports multi-platform fantasy scoring (Dream11, MPL), real-time match data ingestion,
AI-driven win prediction, squad optimization, and explainable insights.
`,

            roles: ["User", "Admin"],

            coreFeatures: [
                "Multi-login authentication (Email, Google, Facebook)",
                "Live & upcoming match discovery",
                "Drag-and-drop squad builder",
                "Platform-specific scoring engine (Dream11, MPL)",
                "AI-based win probability prediction",
                "Explainable AI (player contribution analysis)",
                "Squad optimization using constraints",
                "What-if team simulation",
                "Push notifications for toss & injuries",
                "Subscription-based premium access"
            ],

            challenges: [
                "Handling high-volume real-time match and scoring data",
                "Supporting multiple fantasy platforms with different scoring rules",
                "Achieving low-latency AI predictions during live matches",
                "Explaining AI predictions in a user-friendly way",
                "Maintaining accuracy while optimizing squads under constraints"
            ],

            solutions: [
                "Built ETL pipelines for ingesting historical and live match data",
                "Designed a config-driven scoring engine using YAML/JSON",
                "Used Python microservices for ML prediction and SHAP explainability",
                "Implemented genetic algorithms for squad optimization",
                "Optimized APIs to achieve sub-2s prediction latency"
            ],

            systemFlow: {
                "Authentication & Match Selection": [
                    "User authentication via Email/Password, Google, or Facebook",
                    "JWT-based session handling",
                    "Fetch upcoming and live matches from external providers"
                ],
                "Squad Building & Scoring": [
                    "Drag-and-drop squad builder with role validation",
                    "Platform-specific scoring matrix applied dynamically",
                    "Real-time projected points calculation"
                ],
                "AI Prediction & Optimization": [
                    "Win probability prediction using ML models",
                    "Explainability layer showing player impact",
                    "Squad optimizer suggesting better XI combinations",
                    "What-if simulation for lineup comparison"
                ],
                "Engagement & Monetization": [
                    "Push notifications for live match events",
                    "ROI dashboard tracking performance",
                    "Subscription-based access to premium AI features"
                ]
            },

            aiAndDataPipeline: {
                dataSources: ["Roanuz (Live Data)", "Sportmonks (Historical Data)"],
                etl: "Scheduled and event-driven ETL pipelines",
                mlModels: [
                    "XGBoost for win probability prediction",
                    "MLP for feature enhancement",
                    "SHAP for explainability"
                ],
                optimization: "Genetic Algorithm with role, budget, and team constraints"
            },

            adminCapabilities: [
                "Dataset upload and management",
                "Model retraining triggers",
                "User subscription monitoring",
                "Platform configuration management",
                "System performance analytics"
            ],

            subscriptionsAndPayments: {
                model: "Freemium with premium AI features",
                paymentGateways: ["Razorpay", "Stripe"],
                accessControl: "Feature-level gating based on subscription plan"
            },

            techStack: {
                backend: ["Node.js", "Express.js"],
                frontendWeb: ["Next.js"],
                database: ["MongoDB"],
                auth: ["Firebase", "JWT", "OAuth"],
                realtime: ["Socket.IO"],
                mlServices: ["Python", "XGBoost", "SHAP"],
                infrastructure: ["Docker (planned)", "GitHub Actions (CI/CD)"]
            },

            impact: [
                "Achieved sub-2 second AI prediction latency",
                "Maintained 99.5% platform uptime during live matches",
                "Improved fantasy team win probability through AI insights",
                "Reduced manual team selection effort for users"
            ],

            // Consolidated stack (for existing UI compatibility)
            stack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Next.js",
                "Microservices",
                "AI/ML"
            ],

            categories: ["Backend", "AI/ML", "Microservices", "Fantasy Sports"],

            images: [],

            date: "2023-11-01",
            impactScore: 95,
            featured: true
        },
        {
            id: "3",
            title: "Skill Connect (Job Portal)",
            slug: "skill-connect-job-portal",
            description: "Secure dual-registration job placement portal.",
            fullDescription: "Engineered a secure dual registration & authentication system for companies and job candidates, ensuring 100% data isolation & compliance.",
            challenges: ["Ensuring 100% data isolation between candidates and companies."],
            solutions: ["Automated job posting renewals and interview scheduling."],
            impact: ["Reduced manual workload by 50%."],
            stack: ["Node.js", "React.js", "AngularJS", "MongoDB", "PayPal"],
            categories: ["Full-Stack", "Portal", "Automation"],
            images: [],
            date: "2023-06-01", // Approx
            impactScore: 88,
            featured: true
        },
        {
            id: "4",
            title: "Janadesh",
            slug: "janadesh-civic-platform",
            description: "Civic engagement platform with complaint tracking.",
            fullDescription: "Enhanced a civic engagement platform with complaint tracking, KYC, and social features. Directed the development of government dashboards.",
            challenges: ["Complex workflow management for complaint resolution."],
            solutions: ["Developed government dashboards for post moderation and analytics."],
            impact: ["Streamlined complaint resolution workflows."],
            stack: ["Node.js", "Express.js", "MongoDB"],
            categories: ["Backend", "Civic Tech", "Dashboard"],
            images: [],
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
            challenges: ["Scalable inventory and secure payment processing."],
            solutions: ["Implemented Stripe payments and robust REST API architecture."],
            impact: ["Ensured secure and reliable transactions."],
            stack: ["Node.js", "Express.js", "MongoDB", "Stripe"],
            categories: ["Backend", "E-commerce", "API"],
            images: [],
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
            challenges: ["High security requirements for pharma/medical data."],
            solutions: ["Implemented Two-Factor Authentication (2FA) and dynamic frontend."],
            impact: ["Strengthened platform security."],
            stack: ["Node.js", "Express.js", "AngularJS", "MongoDB", "2FA"],
            categories: ["Full-Stack", "Healthcare", "Security"],
            images: [],
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
