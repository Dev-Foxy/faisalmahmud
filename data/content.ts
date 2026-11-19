import { Project, Tab, Blog, Service, ProcessStep } from "@/utils/types";

export const PERSONAL_INFO = {
  name: "Faisal Mahmud",
  role: "Fullstack Developer & Designer",
  location: "Dhaka, Bangladesh",
  email: "faisalmahmud1513@gmail.com", // Replace with yours
  availability: "Available for new projects",
  bio: "I bridge the gap between complex backend architecture and high-fidelity user interfaces. Specializing in Next.js, AI agent orchestration, and interactive game development.",
};

export const PROJECTS: Project[] = [
  {
    id: "fragcy",
    name: "Fragcy",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Firebase", "ShadCN"],
    description:
      "A luxury fragrance e-commerce experience designed from scratch. Features a custom UI, secure bKash payment integration, and a fluid product discovery flow.",
    imageOrientation: "portrait",
    images: [{ src: "/project/p1.png", alt: "Fragcy Landing Page" }],
    liveUrl: "https://fragcy.com",
    category: "E-commerce",
    year: "2025",
    color: "#16202d",
    ink: "#efede8",
  },
  {
    id: "shop-inventory",
    name: "Shop Inventory",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    description:
      "Enterprise-grade inventory management for FarmtechBD. Engineered complex database schemas for real-time stock tracking and deep analytics.",
    imageOrientation: "landscape",
    images: [{ src: "/project/p2.png", alt: "Dashboard Interface" }],
    category: "Web App",
    year: "2025",
    color: "#cbd8ec",
    ink: "#0f0f0e",
  },
  {
    id: "ai-bhaia",
    name: "AI Bhaia",
    techStack: ["React", "Python", "OpenAI API", "Node.js"],
    description:
      "An AI-powered educational platform designed for the NCTB syllabus. Helping students learn through personalized AI tutoring and active recall.",
    imageOrientation: "landscape",
    // Add a screenshot (e.g. /project/ai-bhaia.png) — a typographic stage shows until then
    images: [],
    category: "AI / EdTech",
    year: "2026",
    color: "#e6dfd0",
    ink: "#0f0f0e",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Websites & Landing Pages",
    description:
      "Fast, animated, search-friendly sites that make a strong first impression and turn visitors into enquiries.",
    tags: ["Next.js", "Motion", "SEO", "CMS"],
  },
  {
    title: "Web Apps & Dashboards",
    description:
      "Custom SaaS products, admin panels and internal tools with solid data models, auth and real-time features.",
    tags: ["React", "Prisma", "PostgreSQL", "Auth"],
  },
  {
    title: "E-commerce",
    description:
      "Bespoke storefronts with smooth product discovery and secure local & global payments (bKash, Stripe).",
    tags: ["Storefront", "Payments", "Inventory"],
  },
  {
    title: "AI Integrations",
    description:
      "AI agents, assistants and automations wired into your product so your team and customers get more done.",
    tags: ["LLMs", "Agents", "Python", "Automation"],
  },
  {
    title: "UI/UX & Interaction Design",
    description:
      "Interfaces designed in Figma and brought to life with motion — clear, distinctive and built to convert.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
];

export const PROCESS: ProcessStep[] = [
  {
    title: "Discover",
    duration: "Week 1",
    description:
      "We align on goals, audience and scope. You get a clear plan, timeline and fixed quote.",
  },
  {
    title: "Design",
    duration: "Week 1–2",
    description:
      "Wireframes become high-fidelity designs and motion prototypes you can click through.",
  },
  {
    title: "Build",
    duration: "Week 2–5",
    description:
      "Production-grade code with weekly previews, so you see progress and steer early.",
  },
  {
    title: "Launch & Grow",
    duration: "Ongoing",
    description:
      "Deployment, analytics and SEO, plus support to iterate after go-live.",
  },
];

/** Fill in your profile URLs — empty entries are hidden on the site. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: "GitHub", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "X / Twitter", href: "" },
  { label: "Dribbble", href: "" },
];

export const SKILL_TABS: Tab[] = [
  {
    label: "Front-end",
    skills: [
      { name: "HTML/CSS", icon: "/icons/html.png", level: 100 },
      { name: "JavaScript", icon: "/icons/javascript.png", level: 90 },
      { name: "TypeScript", icon: "/icons/typescript.png", level: 85 },
      { name: "React.js", icon: "/icons/react.png", level: 90 },
      { name: "Next.js", icon: "/icons/next.png", level: 95 },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png", level: 95 },
      { name: "Framer Motion", icon: "/icons/framermotion.png", level: 80 },
      { name: "GSAP", icon: "/icons/gsap.png", level: 75 },
      { name: "ShadCN", icon: "/icons/shadcn.png", level: 90 },
    ],
  },
  {
    label: "Back-end",
    skills: [
      { name: "Node.js", icon: "/icons/node.png", level: 90 },
      { name: "Prisma", icon: "/icons/prisma.png", level: 100 },
      { name: "PostgreSQL", icon: "/icons/postgresql.png", level: 90 },
      { name: "MongoDB", icon: "/icons/mongodb.png", level: 95 },
      { name: "Firebase", icon: "/icons/firebase.png", level: 90 },
      {
        name: "Auth & Payments",
        icon: "/icons/authentication.png",
        level: 100,
      },
      { name: "REST & GraphQL", icon: "/icons/rest.png", level: 90 },
      { name: "WebSockets", icon: "/icons/websocket.png", level: 75 },
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      { name: "Python", icon: "/icons/python.png", level: 100 },
      { name: "AI Agent Creation", icon: "/icons/ai.png", level: 85 },
      { name: "Automation Scripts", icon: "/icons/script.png", level: 90 },
      { name: "R&D", icon: "/icons/rd.png", level: 100 },
      { name: "Pytorch", icon: "/icons/pytorch.png", level: 80 },
    ],
  },
  {
    label: "Game Dev",
    skills: [
      { name: "Godot Engine", icon: "/icons/godot.png", level: 90 },
      { name: "GDScript", icon: "/icons/gdscript.png", level: 100 },
      { name: "Game UX/Design", icon: "/icons/game.png", level: 85 },
      { name: "2D Art", icon: "/icons/game.png", level: 90 },
    ],
  },
  {
    label: "UI/UX & Creative",
    skills: [
      { name: "Figma", icon: "/icons/figma.png", level: 100 },
      { name: "Adobe Suite", icon: "/icons/photoshop.png", level: 90 },
      { name: "Motion Design", icon: "/icons/motion.png", level: 90 },
      { name: "Filmora", icon: "/icons/filmora.png", level: 85 },
    ],
  },
  {
    label: "Technical Ops",
    skills: [
      { name: "Docker", icon: "/icons/docker.png", level: 90 },
      { name: "Cloud Hosting", icon: "/icons/cloud.png", level: 100 },
      { name: "Linux Mgmt", icon: "/icons/linux.png", level: 90 },
      { name: "Github Actions", icon: "/icons/ga.png", level: 90 },
      { name: "Unit Testing", icon: "/icons/ut.png", level: 85 },
    ],
  },
];

export const BLOGS: Blog[] = [
  {
    id: "1",
    slug: "future-of-ai-agents",
    title: "The Future of AI Agents in Web Apps",
    excerpt:
      "Exploring how LLMs are shifting from simple chatbots to autonomous agents inside our SaaS products.",
    date: "March 2026",
    category: "AI",
    coverImage: "/blog/b1.png",
  },
  {
    id: "2",
    slug: "nextjs-16-performance",
    title: "Optimizing Next.js for the Modern Web",
    excerpt:
      "A deep dive into server components, streaming, and how to achieve a perfect 100 Lighthouse score.",
    date: "Feb 2026",
    category: "Web Dev",
    coverImage: "/blog/b2.png",
  },
];
