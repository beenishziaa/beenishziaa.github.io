// Personal Information Constants
export const PERSONAL_INFO = {
    // Basic Info
    name: "Beenish Zia",
    firstName: "Beenish",
    lastName: "Zia",
    displayName: "Beenish",
    title: "Software Quality Assurance Engineer",

    // Contact Details
    email: "beenishzia6@gmail.com",
    phone: "+92 318 4787770",
    location: "Lahore, Pakistan",
    timezone: "Asia/Karachi", // Pakistan Time

    // Professional Summary
    experience: "4+ years",
    usersServed: "30%+", // Improving overall test coverage by 30%
    description:
        "Results-driven Software QA Engineer with 4+ years of hands-on experience ensuring the quality, reliability, and performance of web and mobile applications across diverse industry domains.",

    // Social Links
    social: {
        github: "https://github.com/beenishzia",
        linkedin: "https://www.linkedin.com/in/beenish-",
        stackoverflow: "https://www.linkedin.com/in/beenish-", // keep for compatibility
        email: "mailto:beenishzia6@gmail.com",
        phone: "tel:+923184787770",
    },

    // Website & SEO
    website: {
        url: "https://beenishzia.github.io",
        domain: "beenishzia.github.io",
        title: "Beenish Zia | Software QA Engineer",
        description:
            "4+ years experience ensuring the quality, reliability, and performance of web and mobile applications. Specializing in manual testing, API testing, and test case management.",
        keywords:
            "software qa engineer, quality assurance, manual testing, API testing, Jira, TestRail, Postman, software testing, Beenish Zia, Lahore",
    },

    // Resume
    resume: {
        filename: "Beenish_Zia_Resume.pdf",
        path: "/downloads/Beenish_Zia_Resume.pdf",
    },

    // Images
    images: {
        profile: "/images/profile.jpg",
        socialPreview: "/images/social-preview.jpg",
        cover: "/images/cover.jpg",
    },

    // Analytics
    analytics: {
        googleAnalyticsId: "",
    },

    // Current Work Status
    currentWork: {
        company: "Abyan Technology",
        position: "Software QA Engineer",
        type: "Full-time",
        startDate: "Sep 2024",
        currentStatus: "Present",
        location: "Lahore, Pakistan",
    },
} as const

// Tech Stack
export const TECH_STACK = {
    primary: ["Jira", "TestRail", "Postman", "LambdaTest", "BrowserStack", "GitHub", "Chrome DevTools"],
    languages: ["HTML", "CSS", "JavaScript", "SQL"],
    frameworks: ["Web Applications", "iOS (Native & Hybrid)", "Android (Native & Hybrid)", "REST APIs"],
    databases: ["MySQL", "MongoDB", "SQL Server"],
    cloud: ["GitHub", "Git"],
    testing: ["Functional Testing", "Regression Testing", "Smoke Testing", "Sanity Testing", "API Testing", "Cross-Browser Testing", "UAT"],
} as const

// Education & Certifications
export const EDUCATION = {
  degrees: [
    {
      degree: "MPhil Computer Science",
      school: "COMSATS University Islamabad, Sahiwal Campus",
      location: "Sahiwal, Pakistan",
      period: "2021",
      description: "Advanced studies in computer science with focus on software engineering concepts and systems development.",
      achievements: ["Advanced Software Engineering", "Data Structures & Algorithms", "Quality Metrics & Research"],
    },
    {
      degree: "BS Information Technology",
      school: "The Islamia University, Bahawalpur",
      location: "Bahawalpur, Pakistan",
      period: "2018",
      description: "Comprehensive education in information technology, systems analysis, databases, and software fundamentals.",
      achievements: ["Database Design & Administration", "Web Technologies", "Software Development Fundamentals"],
    },
  ],
  certifications: [],
  courses: [],
} as const

// Contact Form
export const CONTACT_FORM = {
    formspreeEndpoint: "https://formspree.io/f/mnnvgrdd",
    subjects: {
        default: "New contact form submission from Beenish's portfolio",
    },
} as const

// Navigation Items
export const NAVIGATION_ITEMS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
] as const
