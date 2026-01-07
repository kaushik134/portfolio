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
        },
        openToNetwork: true
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
            location: "Surat, Gujarat", // Inferring loc from prev context or standard
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
            location: "Surat, Gujarat", // Inferring loc
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
                "/projects/grabit-biz-1.svg",
                "/projects/grabit-biz-2.svg",
                "/projects/grabit-biz-3.svg",
            ],
            logo: "/projects/grabit-logo-light.svg",
            logoDark: "/projects/grabit-logo-dark.svg",
            date: "2024-01-01",
            impactScore: 92,
            featured: true,
            featuredPriority: 1,
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

            images: [
                "/projects/clutchly-1.png",
                "/projects/clutchly-2.png",
                "/projects/clutchly-3.png",
                "/projects/clutchly-4.png",
                "/projects/clutchly-5.png",
            ],
            logo: "/projects/clutchly-logo.svg",

            date: "2023-11-01",
            impactScore: 95,
            featured: true,
            featuredPriority: 3
        },
        {
            id: "3",
            title: "Skill Connect (Job Portal)",
            slug: "skill-connect-job-portal",

            description:
                "Dual-dashboard job placement platform enabling companies to post jobs and candidates to apply, with secure role-based workflows and premium subscriptions.",

            fullDescription: `
Skill Connect is a backend-driven recruitment platform enabling companies to post jobs,
candidates to apply, and admins to govern platform operations.
The system is designed with strict role-based access control, secure authentication,
application lifecycle management (ATS), and subscription-based monetization.
`,

            roles: ["Admin", "Candidate", "Company"],

            coreFeatures: [
                "JWT-based authentication and authorization",
                "Role-based access control (RBAC)",
                "Job posting and application lifecycle APIs",
                "Application Tracking System (ATS)",
                "Interview scheduling workflows",
                "Premium subscription and payment handling",
                "Email-based notification system",
                "Admin moderation and analytics APIs"
            ],

            challenges: [
                "Ensuring complete data isolation between candidates and companies",
                "Designing scalable job-post → apply → shortlist → interview → hire workflows",
                "Securing authentication tokens and session lifecycle",
                "Handling concurrent job applications at scale",
                "Maintaining consistency across job, application, and interview states"
            ],

            solutions: [
                "Implemented JWT authentication with middleware-based RBAC enforcement",
                "Designed normalized MongoDB schemas for jobs, applications, and interviews",
                "Used transactional updates and status enums for ATS consistency",
                "Built modular REST APIs following controller-service-repository pattern",
                "Applied pagination, indexing, and query optimization for large datasets"
            ],

            systemFlow: {
                "Authentication & Authorization": [
                    "User login with JWT token issuance",
                    "Role-based middleware validation (Admin / Candidate / Company)",
                    "Secure session expiration and refresh handling"
                ],
                "Job Management": [
                    "Company creates, updates, and publishes job posts",
                    "Admin moderation and approval of job listings",
                    "Job visibility based on subscription tier"
                ],
                "Application Lifecycle (ATS)": [
                    "Candidate applies to job",
                    "Company shortlists or rejects candidates",
                    "Interview scheduling and status updates",
                    "Final hiring decision and application closure"
                ],
                "Monetization": [
                    "Subscription purchase for premium job posting",
                    "Featured job listings and renewals",
                    "Payment verification and access control"
                ]
            },

            paymentsAndSubscriptions: {
                paymentGateway: ["PayPal"],
                model: "Subscription-based premium job posting",
                billingFlow: [
                    "Plan selection",
                    "Payment verification via webhook",
                    "Feature access based on active subscription"
                ]
            },

            notifications: [
                "Email notifications for application status changes",
                "Interview scheduling alerts",
                "Subscription and payment confirmations"
            ],

            adminCapabilities: [
                "User and company account management",
                "Job listing moderation",
                "Subscription and payment monitoring",
                "Platform analytics and reporting APIs"
            ],

            techStack: {
                backend: ["Node.js", "Express.js"],
                frontend: [
                    "React.js",
                    "Vite",
                    "Redux Toolkit",
                    "Bootstrap 5",
                    "SASS",
                    "Chart.js"
                ],
                database: ["MongoDB"],
                auth: ["JWT", "BCrypt"],
                architecture: [
                    "RESTful APIs",
                    "Controller-Service pattern",
                    "Middleware-based security"
                ],
                notifications: ["Zoho Mail"],
                payments: ["PayPal"],
                tools: ["Postman", "GitHub"],
            },

            impact: [
                "Reduced manual recruitment workload by 50%",
                "Improved hiring turnaround time for companies",
                "Enhanced candidate experience with application tracking",
                "Enabled scalable hiring via premium subscription model"
            ],

            // Consolidated stack for existing UI compatibility
            stack: [
                "Node.js",
                "React.js",
                "MongoDB",
                "Google Maps API",
                "JWT",
                "PayPal"
            ],

            categories: ["Backend", "Job Portal", "Recruitment", "Automation"],

            images: ["/projects/skill-connect-1.png", "/projects/skill-connect-2.png"],

            date: "2023-06-01",
            impactScore: 88,
            featured: true,
            featuredPriority: 5,
        },
        {
            id: "4",
            title: "Janadesh",
            slug: "janadesh-civic-platform",

            description:
                "Civic engagement and complaint management platform enabling citizens to raise issues with geo-tagged media and track resolution by government authorities.",

            fullDescription: `
Janadesh is a civic-tech social platform designed to bridge the gap between citizens and
government departments. The platform enables users to raise public complaints, share
geo-tagged photos and videos, post anonymously when required, and track complaint
resolution status. Government authorities manage, moderate, and resolve issues through
dedicated dashboards, while Admin ensures platform governance and compliance.
`,

            roles: ["User", "Government", "Admin"],

            coreFeatures: [
                "Citizen complaint posting with live photo/video uploads",
                "Geo-location tagging for complaints and posts",
                "Anonymous complaint and post creation",
                "Complaint lifecycle tracking (Submitted → In Review → Resolved)",
                "Government dashboard for complaint moderation and resolution",
                "Role-based authentication and access control",
                "Multi-channel notifications (push & SMS)",
                "Social features: posts, comments, hashtags, mentions"
            ],

            challenges: [
                "Managing complex complaint workflows across multiple government departments",
                "Ensuring strict role separation between citizens, government, and admin",
                "Handling high-volume media uploads securely and efficiently",
                "Maintaining anonymity while preserving backend traceability",
                "Preventing abuse, spam, and malicious activity on a public platform"
            ],

            solutions: [
                "Designed role-based access control (RBAC) using JWT",
                "Built structured complaint lifecycle states with audit trails",
                "Integrated AWS S3 for secure and optimized media storage",
                "Implemented anonymous posting with internal traceability for moderation",
                "Hardened APIs using rate limiting, security headers, and encryption"
            ],

            systemFlow: {
                "Authentication & Identity": [
                    "JWT-based authentication for User, Government, and Admin",
                    "Role-based access enforcement at API and service level",
                    "KYC verification for citizen identity validation"
                ],
                "Complaint & Social Posting": [
                    "User creates complaint with text, images/videos, and geo-location",
                    "Option to post complaints anonymously",
                    "Social interactions via comments, reposts, and hashtags"
                ],
                "Government Resolution Flow": [
                    "Government views complaints assigned to their department",
                    "Status updates (In Review, Action Taken, Resolved)",
                    "Resolution notes and evidence upload"
                ],
                "Moderation & Governance": [
                    "Admin moderation of reported posts and users",
                    "Analytics on complaint volume and resolution timelines",
                    "Platform-wide reporting and insights"
                ]
            },

            notifications: [
                "Firebase Cloud Messaging (FCM) for real-time push notifications",
                "Twilio for SMS alerts on complaint status updates"
            ],

            adminCapabilities: [
                "User, Government, and department management",
                "Complaint and content moderation",
                "Analytics dashboards for civic engagement",
                "Security monitoring and abuse prevention"
            ],

            techStack: {
                backend: ["Node.js", "Express.js"],
                frontend: [
                    "React Native",
                    "Redux / Redux Toolkit",
                    "React Navigation",
                ],
                database: ["MongoDB (Mongoose)"],
                security: [
                    "JWT Authentication",
                    "RBAC",
                    "Helmet",
                    "Express Rate Limit",
                    "BCrypt"
                ],
                mediaStorage: ["AWS S3"],
                notifications: ["Firebase Cloud Messaging", "Twilio"],
                documentation: ["Swagger / OpenAPI"],
                infrastructure: ["DigitalOcean", "AWS"],
                versionControl: ["GitHub"]
            },

            impact: [
                "Streamlined complaint resolution workflows for government authorities",
                "Improved transparency and accountability in civic issue handling",
                "Enabled citizens to raise issues safely via anonymous posting",
                "Increased platform reliability under high public engagement"
            ],

            // Consolidated stack for backward compatibility
            stack: [
                "React Native",
                "Node.js",
                "Express.js",
                "MongoDB",
                "AWS S3",
                "Firebase",
                "Twilio",
                "JWT"
            ],

            categories: ["Backend", "Civic Tech", "Social Platform", "Dashboard"],

            images: [
                "/projects/janadesh-1.png",
                "/projects/janadesh-2.png",
                "/projects/janadesh-3.png",
                "/projects/janadesh-4.png",
            ],
            logo: "/projects/janadesh-logo.svg",

            date: "2023-03-01",
            impactScore: 85,
            featured: false,
            featuredPriority: 4,
        },
        {
            id: "5",
            title: "Behind The Take",
            slug: "behind-the-take",

            description:
                "Backend system for a casting and audition platform connecting talent with casting directors through secure authentication, media handling, and audition workflows.",

            fullDescription: `
Behind The Take is a centralized casting and audition management platform designed to
connect actors with casting directors. The backend architecture supports secure
OTP-based authentication, role-based access control, audition posting and applications,
portfolio media management, and scalable data handling using PostgreSQL.
`,

            roles: ["Actor", "Casting Director", "Admin"],

            coreFeatures: [
                "JWT-based authentication and authorization",
                "OTP-based mobile signup and login using AWS Pinpoint",
                "Role-Based Access Control (RBAC)",
                "Audition posting and application system",
                "Save auditions for later review",
                "Portfolio and media management",
                "Secure file storage and retrieval",
                "Privacy controls including user blocking"
            ],

            challenges: [
                "Designing secure authentication combining JWT and OTP flows",
                "Managing large media files for portfolios and showreels",
                "Ensuring data consistency across auditions and applications",
                "Implementing scalable role-based access for multiple user types",
                "Optimizing high-traffic audition feed APIs"
            ],

            solutions: [
                "Implemented JWT authentication with refresh and expiry handling",
                "Integrated AWS Pinpoint for OTP-based mobile verification",
                "Built a dedicated file service using AWS S3 with GUID-based file naming",
                "Designed normalized PostgreSQL schemas with Knex.js migrations",
                "Optimized database queries for audition feeds and application submissions"
            ],

            systemFlow: {
                "Authentication & Security": [
                    "OTP-based mobile signup and login",
                    "JWT token issuance for authenticated sessions",
                    "RBAC enforcement for Actors, Casting Directors, and Admin",
                    "Password reset and recovery flows"
                ],
                "Audition & Applications": [
                    "Casting Directors create and manage audition posts",
                    "Actors browse, save, and apply for auditions",
                    "Application status tracking per audition"
                ],
                "Media & Portfolio Management": [
                    "Actors upload headshots, showreels, and portfolio media",
                    "Files stored securely on AWS S3",
                    "Controlled access for upload, download, and deletion"
                ],
                "Engagement & Privacy": [
                    "User interaction tracking",
                    "Block user/entity functionality",
                    "Privacy-aware content visibility"
                ]
            },

            dataArchitecture: {
                database: "PostgreSQL",
                orm: "Knex.js",
                schemaEntities: [
                    "Users",
                    "Profiles",
                    "Auditions",
                    "Applications",
                    "Media",
                    "Interactions"
                ],
                migrations: "Versioned schema migrations using Knex.js"
            },

            notifications: [
                "OTP delivery via AWS Pinpoint / SNS"
            ],

            adminCapabilities: [
                "User and role management",
                "Audition and content moderation",
                "System configuration management",
                "Platform monitoring and maintenance"
            ],

            techStack: {
                backend: [
                    "Node.js",
                    "Express.js",
                    "TypeScript"
                ],
                database: [
                    "PostgreSQL",
                    "Knex.js"
                ],
                authentication: [
                    "JWT",
                    "OTP (AWS Pinpoint)"
                ],
                storage: [
                    "AWS S3"
                ],
                infrastructure: [
                    "AWS"
                ],
                tools: [
                    "Git",
                    "Postman"
                ]
            },

            impact: [
                "Enabled secure and scalable audition management workflows",
                "Improved talent discovery through structured application flows",
                "Ensured reliable media handling for portfolios and showreels",
                "Reduced authentication risks with OTP-based verification"
            ],

            // Consolidated stack for existing UI compatibility
            stack: [
                "TypeScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Knex.js",
                "AWS S3",
                "JWT"
            ],

            categories: ["Backend", "Media Platform", "Casting", "SaaS"],

            images: [

            ],

            date: "2024-02-01",
            impactScore: 90,
            featured: true,
            featuredPriority: 7,
        },
        {
            id: "6",
            title: "Empower Edge Club",
            slug: "empower-edge-club-backend",

            description:
                "Comprehensive backend system for an international education and career support platform with subscriptions, financial aid workflows, and digital wallet management.",

            fullDescription: `
Empower Edge Club is a backend-driven platform designed to support international students
with education, career guidance, and financial assistance services.
The system manages user onboarding, subscription plans, complex support applications,
secure document handling, payment processing, and an internal digital wallet system,
all built with scalability and security in mind.
`,

            roles: ["User (Student)", "Admin", "Support Team"],

            coreFeatures: [
                "RESTful API architecture for full user lifecycle management",
                "JWT-based authentication with secure password hashing",
                "Complex MongoDB data models with relational mappings",
                "Specialized support modules for living, jobs, and scholarships",
                "Multi-file document upload and verification workflows",
                "Subscription and one-time payment processing",
                "Internal digital wallet and transaction ledger system",
                "Multi-region support for countries, cities, and currencies"
            ],

            challenges: [
                "Designing scalable schemas to manage highly relational data in MongoDB",
                "Handling sensitive financial and personal documents securely",
                "Maintaining transactional consistency across wallet and payment systems",
                "Supporting multiple international regions and currencies",
                "Implementing secure authentication with OTP and recovery flows"
            ],

            solutions: [
                "Architected over 25 MongoDB models using Mongoose for modular scalability",
                "Implemented Multer-based secure document upload pipelines",
                "Built an internal wallet and ledger system with passbook-style history tracking",
                "Integrated Moneris and GoCardless for secure payment workflows",
                "Applied JWT, Bcrypt, and OTP verification for robust authentication"
            ],

            systemFlow: {
                "Authentication & User Lifecycle": [
                    "User registration and login with JWT authentication",
                    "Password hashing using Bcrypt",
                    "OTP verification and password reset via email"
                ],
                "Support Services Workflow": [
                    "Users submit applications for Living, Job Hunting, or Scholarship support",
                    "Multi-file document uploads (bank statements, acceptance letters, etc.)",
                    "Support team reviews and processes requests"
                ],
                "Payments & Wallet": [
                    "Users purchase subscriptions or services",
                    "Payments processed via Moneris or GoCardless",
                    "Transactions recorded in internal wallet ledger",
                    "Passbook-style transaction history available to users"
                ],
                "Administration & Global Data": [
                    "Admin manages users, subscriptions, and support requests",
                    "Global configuration for countries, cities, and currencies",
                    "System monitoring and operational oversight"
                ]
            },

            paymentsAndWallet: {
                paymentGateways: ["Moneris", "GoCardless"],
                paymentTypes: ["Subscriptions", "One-time Payments"],
                walletSystem: [
                    "User balance tracking",
                    "Debit/Credit ledger entries",
                    "Transaction history (passbook)"
                ]
            },

            notifications: [
                "Email notifications via Nodemailer",
                "OTP delivery for verification and password reset"
            ],

            adminCapabilities: [
                "User and subscription management",
                "Support request review and approval",
                "Payment and wallet reconciliation",
                "Global configuration management"
            ],

            techStack: {
                backend: ["Node.js", "Express.js"],
                database: ["MongoDB", "Mongoose"],
                authentication: ["JWT", "Bcrypt", "OTP"],
                payments: ["Moneris API", "GoCardless API"],
                fileHandling: ["Multer"],
                validation: ["Joi"],
                email: ["Nodemailer"],
                templating: ["EJS"],
                tools: ["Git", "Postman"]
            },

            impact: [
                "Enabled end-to-end digital support for international students",
                "Reduced manual processing through structured support workflows",
                "Improved financial transparency with internal wallet ledger",
                "Built a scalable backend supporting multi-region operations"
            ],

            // Consolidated stack for existing UI compatibility
            stack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "Moneris",
                "GoCardless"
            ],

            categories: ["Backend", "EdTech", "Fintech", "SaaS"],

            images: [

            ],

            date: "2024-04-01",
            impactScore: 91,
            featured: true,
            featuredPriority: 9,
        },
        {
            id: "7",
            title: "Folo Trip",
            slug: "folo-trip-travel-platform-backend",

            description:
                "Scalable backend system for a community-driven travel platform where users create and book itineraries or guide services, with admin moderation.",

            fullDescription: `
Folo is a community-driven travel and itinerary platform where users can create,
share, and book travel itineraries as well as offer guide services.
Any user can act as a traveler or a guide by creating a guide profile.
The backend system supports itinerary creation, guide profiles, bookings, reviews,
secure payments, admin moderation, and scalable search using MongoDB aggregation pipelines.
`,

            roles: ["User", "Admin"],

            coreFeatures: [
                "User-created multi-day itineraries",
                "Users can book itineraries created by other users",
                "Guide profile creation by users",
                "Users can book other users as guides",
                "Advanced search and filtering using aggregation pipelines",
                "Booking lifecycle and payout request workflows",
                "User reviews and ratings for itineraries and guides",
                "Role-based access control (User / Admin)",
                "Admin moderation and analytics APIs"
            ],

            challenges: [
                "Designing flexible schemas supporting users as both creators and consumers",
                "Handling itinerary and guide bookings under a single user role",
                "Implementing scalable search and filtering for large datasets",
                "Managing booking and payout workflows securely",
                "Ensuring admin-level moderation without breaking user autonomy"
            ],

            solutions: [
                "Designed user-centric MongoDB schemas allowing role behavior via profiles",
                "Implemented aggregation pipelines for high-performance search",
                "Built unified booking workflows for itineraries and guides",
                "Applied middleware-based RBAC distinguishing User and Admin",
                "Created admin-controlled moderation and approval flows"
            ],

            systemFlow: {
                "Authentication & Security": [
                    "JWT-based stateless authentication",
                    "Google OAuth integration using Passport.js",
                    "Password hashing with Bcrypt",
                    "Security hardening using Helmet and XSS protection"
                ],
                "Itinerary & Guide Creation": [
                    "Users create multi-day itineraries",
                    "Users create guide profiles with services, rates, and location",
                    "Users manage their own listings and availability"
                ],
                "Booking & Payments": [
                    "Users book itineraries created by other users",
                    "Users book guide services offered by other users",
                    "Order status management (Pending, Confirmed, Cancelled)",
                    "Payment tracking and payout request workflow"
                ],
                "Reviews & Engagement": [
                    "Users rate and review itineraries",
                    "Users rate and review guides",
                    "Profile management with social media links"
                ],
                "Administration": [
                    "Admin moderation of users, itineraries, and guide profiles",
                    "Content approval and removal",
                    "Platform analytics and revenue insights"
                ]
            },

            dataArchitecture: {
                database: "MongoDB",
                odm: "Mongoose",
                keyModels: [
                    "Users",
                    "GuideProfiles",
                    "Itineraries",
                    "Bookings",
                    "Reviews",
                    "PayoutRequests",
                    "Collections"
                ],
                search: "MongoDB Aggregation Pipelines",
                indexing: "Compound indexes for destination, price, and ratings"
            },

            paymentsAndPayouts: {
                bookingTypes: ["Itinerary Booking", "Guide Booking"],
                orderStatuses: ["Pending", "Confirmed", "Cancelled"],
                payoutFlow: [
                    "User submits payout request",
                    "Admin review and approval",
                    "Earnings withdrawal processing"
                ],
                paymentGateways: ["Stripe"],
                payoutCycle: "Manual / On-Demand",
                paymentIntegration: "Stripe Checkout & Webhooks"
            },

            notifications: [
                "Booking confirmations and status updates",
                "Guide booking and payout notifications"
            ],

            adminCapabilities: [
                "User moderation and account management",
                "Itinerary and guide profile moderation",
                "Booking and payout monitoring",
                "Platform analytics (users, revenue, growth)"
            ],

            techStack: {
                backend: ["Node.js", "Express.js"],
                database: ["MongoDB", "Mongoose"],
                authentication: [
                    "JWT",
                    "Passport.js (Google OAuth)",
                    "Bcrypt"
                ],
                security: [
                    "Helmet",
                    "XSS-Clean",
                    "express-mongo-sanitize"
                ],
                fileStorage: ["Cloudinary", "Multer"],
                validation: ["Joi"],
                documentation: ["Swagger / OpenAPI"],
                tools: ["Git", "Postman", "Docker"]
            },

            impact: [
                "Enabled users to act as both travelers and guides",
                "Improved platform flexibility with user-driven marketplace model",
                "Streamlined booking and review workflows",
                "Built a secure and scalable backend for travel experiences"
            ],

            stack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "Cloudinary",
                "Passport.js"
            ],

            categories: ["Backend", "Travel Tech", "Marketplace", "SaaS"],

            images: ["/projects/folo-1.png"],
            logo: "/projects/loopmate-logo.webp",

            date: "2024-05-01",
            impactScore: 90,
            featured: true,
            featuredPriority: 2,
        },
        {
            id: "8",
            title: "TMS (Task Management System)",
            slug: "tms-internal-task-management",

            description:
                "Internal task and workflow management system built for Corenet Tech to manage workspaces, teams, department-wise task flows, and progress reporting.",

            fullDescription: `
TMS is an internal task management system developed for the Corenet Tech team to
organize work across multiple departments and teams.
The platform supports workspace-based project management where Super Admin creates
workspaces, assigns Admins and Managers, and manages department-wise task workflows.
Tasks move through predefined status pipelines and provide full visibility to Admin,
Manager, and Team Leaders with reporting and tracking capabilities.
`,

            roles: [
                "Super Admin",
                "Admin",
                "Manager",
                "Team Leader",
                "Employee"
            ],

            coreFeatures: [
                "Workspace creation and management by Super Admin",
                "Admin and Manager assignment per workspace",
                "Department-wise team and folder structure",
                "Custom task status pipelines per department",
                "Role-based dashboards and access control",
                "Task creation, assignment, and lifecycle tracking",
                "Real-time notifications and inbox updates",
                "Work reports and performance tracking"
            ],

            challenges: [
                "Designing flexible workflows for multiple departments",
                "Managing different task status pipelines per team",
                "Ensuring proper role-based visibility and access",
                "Tracking task progress across large internal teams",
                "Generating accurate work and progress reports"
            ],

            solutions: [
                "Implemented workspace-based multi-tenant architecture",
                "Designed department-specific status pipelines",
                "Applied role-based access control for all user levels",
                "Built centralized task lifecycle tracking system",
                "Created reporting modules for admins and managers"
            ],

            systemFlow: {
                "Workspace Setup": [
                    "Super Admin creates workspace",
                    "Admin and Manager assigned to workspace",
                    "Departments created (Developer, UI/UX, Marketing, Design, etc.)"
                ],
                "Department & Task Flow": [
                    "Department-wise folders created",
                    "Custom status pipelines per department",
                    "Team Leader creates tasks for their department"
                ],
                "Execution & Progress": [
                    "Tasks appear on employee dashboard",
                    "Employee receives inbox notification",
                    "Employee moves task to In Progress and Complete",
                    "Task automatically moves to next workflow stage"
                ],
                "Monitoring & Reporting": [
                    "Admin, Manager, and Team Leader track task progress",
                    "Department-wise and employee-wise reports generated",
                    "Overall workspace performance monitoring"
                ]
            },

            departmentWorkflows: {
                Developer: [
                    "To Do",
                    "In Progress",
                    "Testing",
                    "Bug",
                    "Production",
                    "Complete",
                    "Reject"
                ],
                "UI/UX": [
                    "To Do",
                    "Designing",
                    "Review",
                    "Approved",
                    "Complete",
                    "Reject"
                ],
                "Digital Marketing": [
                    "To Do",
                    "Planning",
                    "Execution",
                    "Review",
                    "Live",
                    "Complete",
                    "Reject"
                ],
                "Graphics Design": [
                    "To Do",
                    "Designing",
                    "Client Review",
                    "Revision",
                    "Approved",
                    "Complete",
                    "Reject"
                ]
            },

            notifications: [
                "Task assignment notifications",
                "Status change alerts",
                "Inbox notifications for employees",
                "Completion and rejection alerts"
            ],

            adminCapabilities: [
                "Workspace and role management",
                "Department and team configuration",
                "Full task visibility across workspace",
                "Employee performance tracking",
                "Report generation and export"
            ],

            techStack: {
                backend: ["Node.js", "Express.js"],
                database: ["MongoDB"],
                authentication: ["JWT"],
                realtime: ["Socket-based notifications"],
                frontend: ["React.js"],
                architecture: [
                    "RESTful APIs",
                    "Middleware-based RBAC",
                    "Aggregation pipelines for reporting"
                ],
                tools: ["Git", "Postman"]
            },

            impact: [
                "Improved internal task visibility across departments",
                "Standardized workflows for different teams",
                "Reduced dependency on manual follow-ups",
                "Enabled data-driven performance reporting"
            ],

            // Consolidated stack for existing UI compatibility
            stack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "React.js"
            ],

            categories: ["Backend", "Internal Tool", "Task Management", "Workflow Automation", "SaaS"],

            images: [],

            date: "2024-02-15",
            impactScore: 87,
            featured: true,
            featuredPriority: 6,
        },
        {
            id: "9",
            title: "Khana & Company",
            slug: "khana-company-vendor-management-backend",

            description:
                "Backend system for vendor onboarding, payment processing, and automated communication using Razorpay and Zoho email templates.",

            fullDescription: `
Khana & Company is a backend-driven vendor management system where vendors onboard
through dynamic forms, complete payments, and receive automated communications.
The backend handles vendor data collection, payment processing via Razorpay,
and template-based email notifications using Zoho Mail.
`,

            roles: ["Vendor", "Admin"],

            coreFeatures: [
                "Vendor onboarding form APIs",
                "Vendor data validation and storage",
                "Online payment processing via Razorpay",
                "Payment verification and status tracking",
                "Automated email notifications using Zoho templates",
                "Admin dashboard APIs for vendor and payment monitoring"
            ],

            challenges: [
                "Designing flexible vendor onboarding forms",
                "Handling secure online payments and verification",
                "Synchronizing payment status with vendor records",
                "Automating email communication post-payment",
                "Ensuring reliability of transactional emails"
            ],

            solutions: [
                "Built RESTful APIs for vendor onboarding and management",
                "Integrated Razorpay Checkout with server-side payment verification",
                "Implemented webhook handling for payment success and failure",
                "Used Zoho Mail template-based emails for consistent communication",
                "Applied validation and error handling for reliable workflows"
            ],

            systemFlow: {
                "Vendor Onboarding": [
                    "Vendor fills onboarding form",
                    "Backend validates and stores vendor details",
                    "Vendor proceeds to payment"
                ],
                "Payment Processing": [
                    "Vendor completes payment via Razorpay",
                    "Backend verifies payment signature",
                    "Payment status updated in database"
                ],
                "Communication": [
                    "Zoho email template triggered after successful payment",
                    "Different templates sent based on vendor type or status",
                    "Admin notified for new vendor onboarding"
                ],
                "Administration": [
                    "Admin views vendor list and payment status",
                    "Admin manages vendor approvals and records"
                ]
            },

            paymentsAndPayouts: {
                paymentGateways: ["Razorpay"],
                paymentType: "One-time Vendor Payment",
                verification: "Server-side signature verification",
                webhookEvents: ["payment.captured", "payment.failed"]
            },

            notifications: [
                "Vendor confirmation email via Zoho Mail",
                "Payment success/failure notification",
                "Admin notification on new vendor onboarding"
            ],

            adminCapabilities: [
                "Vendor data management",
                "Payment monitoring and reconciliation",
                "Email template management",
                "Operational reporting"
            ],

            techStack: {
                backend: ["Node.js", "Express.js"],
                database: ["MongoDB", "Mongoose"],
                payments: ["Razorpay"],
                email: ["Zoho Mail (Template-based)"],
                validation: ["Joi"],
                tools: ["Git", "Postman"]
            },

            impact: [
                "Automated vendor onboarding process",
                "Reduced manual payment follow-ups",
                "Improved communication consistency using email templates",
                "Enabled scalable vendor management"
            ],

            // Consolidated stack for existing UI compatibility
            stack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Razorpay",
                "Zoho Mail"
            ],

            categories: ["Backend", "Vendor Management", "Payments", "Automation"],

            images: ["/projects/khana-1.png"],
            logo: "/projects/khana-logo.svg",

            date: "2024-03-10",
            impactScore: 86,
            featured: true,
            featuredPriority: 8,
        },
        {
            id: "10",
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
            featured: false,
            featuredPriority: 11,
        },
        {
            id: "11",
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
            featured: false,
            featuredPriority: 10,
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
