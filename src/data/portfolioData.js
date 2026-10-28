/**
 * Samrawit Abayneh - Portfolio Data
 * Centralized, verifiable project and profile configuration.
 */

export const personalInfo = {
  name: "Samrawit Abayneh",
  monogram: "SA",
  role: "Computer Science Student & Aspiring Software Developer",
  headline: "Building useful software through thoughtful engineering.",
  tagline: "Computer Science · Software Development",
  availability: "Open to learning, collaboration & entry opportunities",
  bio: "I'm a Computer Science student and aspiring software developer passionate about backend architecture, REST APIs, relational database design, and responsive React frontend development. I focus on writing clean, purposeful code and understanding how software works from the database layer to the user interface.",
  aboutLead: "I enjoy understanding how software works behind the scenes and turning that knowledge into reliable applications people can use.",
  location: "Hawassa / Addis Ababa, Ethiopia",
  // Real profile URLs can be configured below. If left empty, optional links remain gracefully hidden.
  githubUrl: "",
  linkedinUrl: "",
  email: "samrawit.abayneh@example.com",
};

export const stats = [
  {
    value: "Final Year",
    label: "BSc in Computer Science",
    sublabel: "Hawassa University",
  },
  {
    value: "Backend & UI",
    label: "Full Stack Growth",
    sublabel: "REST APIs, PostgreSQL, React",
  },
  {
    value: "Macrovian",
    label: "Industry Internship",
    sublabel: "Backend & Admin Engineering",
  },
  {
    value: "Core Focus",
    label: "Purposeful Engineering",
    sublabel: "Understanding code from first principles",
  },
];

export const skillCategories = [
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting server-side business logic, designing secure RESTful endpoints, and managing application state.",
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "REST API development",
      "Authentication and authorization",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, component-driven user interfaces with clean styling and accessible interactions.",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Vite",
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Designing structured relational schemas, defining constraints, and querying both relational and document stores.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Database design and relational data concepts",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Employing industry-standard developer tooling for version control, package management, and API debugging.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "API testing and debugging",
    ],
  },
];

export const projects = [
  {
    id: "betnutri",
    number: "01",
    title: "Betnutri Platform",
    category: "BACKEND & ADMIN PORTAL",
    statusBadge: "Internship Project",
    statusType: "internship",
    roleDescription: "Backend & Administration Portal Development",
    summary:
      "Contributed to the backend architecture and administrative portal for a family food and nutrition platform during my internship at Macrovian Technology.",
    contributionNote:
      "My contribution focused specifically on backend API development, database integration, authentication security, and administrative dashboard functionality within a collaborative engineering environment.",
    technologies: [
      "Laravel REST API",
      "PostgreSQL",
      "Laravel Sanctum",
      "Role-Based Access Control (RBAC)",
      "React",
      "PHP",
    ],
    features: [
      "Engineered modular REST API endpoints for user profiles and nutritional data",
      "Configured authentication and token lifecycles with Laravel Sanctum",
      "Implemented Role-Based Access Control (RBAC) to enforce permission boundaries",
      "Built administrative dashboard functionality and operational preference settings",
      "Integrated dashboard metrics and payment-related API workflows",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "contentguard",
    number: "02",
    title: "ContentGuard",
    category: "CONTENT PROTECTION & INTEGRITY",
    statusBadge: "Active Development",
    statusType: "active",
    roleDescription: "Full-Stack System Architecture & Event Monitoring",
    summary:
      "A content protection and assessment integrity system designed to monitor candidate browser activity and record violation events during online examinations.",
    contributionNote:
      "To provide full transparency, features are categorized by what is currently implemented in code versus planned milestones.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Browser Event APIs",
    ],
    implementedFeatures: [
      "React-based candidate examination interface",
      "Node.js and Express backend REST API server",
      "MongoDB database storage for exams, candidate sessions, and violation records",
      "Examination session lifecycle management",
      "Tab-switch and window-focus event monitoring",
      "Inactivity detection during examination sessions",
      "Violation event capture and automated logging API",
    ],
    plannedFeatures: [
      "Examination integrity summary reports and risk scoring",
      "Administrative session review dashboard with violation event timeline",
      "Automated anomaly pattern analysis",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "portfolio",
    number: "03",
    title: "Personal Developer Portfolio",
    category: "FRONTEND ENGINEERING & DESIGN SYSTEM",
    statusBadge: "Completed & Maintained",
    statusType: "completed",
    roleDescription: "Solo Design, Architecture & React Implementation",
    summary:
      "A bespoke personal portfolio engineered with React and Vite to articulate my software engineering journey, technical competencies, and project history with high editorial polish.",
    contributionNote:
      "Demonstrates modular React component architecture, responsive CSS design tokens, smooth micro-interactions, and accessible web standards.",
    technologies: [
      "React 19",
      "Vite",
      "Framer Motion",
      "Vanilla CSS Design Tokens",
      "Lucide Icons",
      "Oxlint",
    ],
    features: [
      "Strict semantic HTML5 structure with high-contrast, editorial typography",
      "Bespoke near-black charcoal palette with warm gold accents and subtle borders",
      "Fluid Framer Motion scroll animations respecting prefers-reduced-motion",
      "Fully accessible keyboard focus states and responsive mobile drawer navigation",
      "Client-side validated contact interaction with transparent delivery guidance",
      "Strict build and lint verification with zero warnings",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

export const experience = [
  {
    organization: "Macrovian Technology",
    role: "Intern — Backend Development & Administration Portal",
    period: "June 27 – August 16, 2026",
    location: "Addis Ababa, Ethiopia",
    workAreas: [
      "Laravel backend development and REST API endpoint architecture",
      "PostgreSQL database integration, table design, and migrations",
      "Authentication and token management with Laravel Sanctum",
      "Role-based permissions and access control enforcement",
      "React-based administrative features, dashboard metrics, and preferences",
      "Payment-related workflows and third-party API integration",
    ],
    responsibilities: [
      "Collaborated with the development team to design and implement RESTful API endpoints supporting platform features.",
      "Worked on database integration with PostgreSQL, ensuring data consistency and efficient relationship modeling.",
      "Configured token-based authentication with Laravel Sanctum and set up role-based access control (RBAC) to separate administrator and user permissions.",
      "Developed React-based administrative views, including metrics visualization and operational preference controls.",
      "Participated in API testing, debugging, and team Git workflows to maintain clean code and resolve issues promptly.",
    ],
    learnings: [
      "Gained hands-on experience structuring production Laravel controllers and services",
      "Learned how to connect complex backend business rules with frontend admin interfaces",
      "Practiced disciplined debugging and error-handling across full API request cycles",
    ],
  },
];

export const education = {
  institution: "Hawassa University",
  program: "BSc in Computer Science",
  department: "Department of Computer Science",
  academicStatus: "Final-year student / graduating student",
  focusAreas: [
    "Data Structures & Algorithms",
    "Database Management Systems & Relational Modeling",
    "Object-Oriented Software Engineering",
    "Web Technologies & REST API Architecture",
    "Computer Networks & Communication Protocols",
    "Operating Systems & Systems Foundations",
    "Software Testing, Debugging & Verification",
  ],
  statement:
    "My Computer Science education at Hawassa University has grounded me in the core principles of computing. I believe that a solid grasp of data structures, relational schemas, and operating system basics is what turns writing code into building reliable, durable software.",
};

export const technicalInterests = [
  {
    title: "Backend Systems & REST APIs",
    description:
      "Designing structured, predictable RESTful APIs with clean routing, strict request validation, descriptive error responses, and secure token authentication.",
  },
  {
    title: "Database Design & Data Modeling",
    description:
      "Understanding relational schema architecture, foreign-key constraints, and indexing in PostgreSQL, alongside document-based models in MongoDB.",
  },
  {
    title: "Security & Access Control",
    description:
      "Working with modern authentication patterns such as Laravel Sanctum, session lifecycles, and Role-Based Access Control (RBAC) to protect sensitive administrative endpoints.",
  },
  {
    title: "Practical React Frontend Engineering",
    description:
      "Building clean, maintainable user interfaces in React that pair seamlessly with backend APIs, prioritizing component reusability and accessible design.",
  },
];

export const personalStatement = {
  quote:
    "I believe great software is built from the inside out. Understanding how data travels through the stack—from database queries and API payloads to the user interface—is what makes software reliable, maintainable, and genuinely useful.",
  approach:
    "My approach to engineering is grounded in patience and curiosity: tracing errors to their root causes, reading documentation, and understanding why a solution works rather than copying quick fixes. I am motivated to continue growing by tackling real-world problems alongside collaborative engineering teams.",
};
