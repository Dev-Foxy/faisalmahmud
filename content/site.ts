/**
 * ============================================================================
 *  SITE CONTENT — all the wording on your pages lives here.
 * ============================================================================
 *
 *  • Projects  → one Markdown file each in  content/projects/
 *  • Blog posts → one Markdown file each in content/blog/
 *  • Everything else (hero, services, about page, socials…) → this file.
 *
 *  Tip: wrap a word in *asterisks* inside any headline to make it the
 *  orange italic accent, e.g.  "websites *that*"  →  websites  that
 * ============================================================================
 */
import type { Tab, Service, ProcessStep } from "@/utils/types";

/* ---------------------------------------------------------------- About you */
export const PERSON = {
  name: "Faisal Mahmud",
  firstName: "Faisal",
  role: "Fullstack Developer & Designer",
  location: "Dhaka, Bangladesh",
  /** IANA time zone used for the live clock */
  timeZone: "Asia/Dhaka",
  timeZoneLabel: "GMT+6",
  email: "faisalmahmud1513@gmail.com",
  /** Shown in the green badge. Set `available: false` to hide the badge. */
  available: true,
  availability: "Available for new projects",
};

/** Fill in your profile URLs — empty ones are hidden on the site. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/Dev-Foxy" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faisal-mahmud-760794182/",
  },
  { label: "X / Twitter", href: "https://x.com/devfaisal1513" },
  { label: "Facebook", href: "https://www.facebook.com/MohammodFaisalMahmud/" },
];

/* ---------------------------------------------------------------------- SEO */
export const SEO = {
  /**
   * ⚠️ Your live domain, e.g. "https://faisalmahmud.com" (no trailing slash).
   * Used for the sitemap, canonical links and social previews.
   * (On Vercel it falls back to your production URL automatically.)
   */
  siteUrl: "",
  /** Brand name appended to every page title: "Work — Faisal Mahmud" */
  siteName: "Faisal Mahmud",
  /** Home page <title> — the most important line for Google */
  title: "Faisal Mahmud — Freelance Web Developer in Bangladesh | Next.js & Full-Stack",
  description:
    "Freelance web developer & designer in Dhaka, Bangladesh. I build fast, SEO-friendly websites, web apps, e-commerce stores and AI integrations for businesses in Bangladesh and clients worldwide.",
  keywords: [
    "web developer in Bangladesh",
    "best web developer in Bangladesh",
    "freelance web developer Bangladesh",
    "web development freelancer Bangladesh",
    "web developer Dhaka",
    "hire web developer Bangladesh",
    "Next.js developer",
    "React developer",
    "full-stack developer",
    "freelance web designer",
    "e-commerce website developer",
    "remote web developer",
    "hire freelance web developer",
    "AI integration developer",
  ],
  /** X/Twitter handle for share cards */
  twitter: "@devfaisal1513",
  /** Paste the code from Google Search Console → Settings → Ownership (HTML tag method) */
  googleVerification: "",
  /** Countries you serve — helps Google show you to local AND international searchers */
  areaServed: ["Bangladesh", "United States", "United Kingdom", "Canada", "Australia", "Europe", "Worldwide"],
};

/* -------------------------------------------------------------- Home page */
export const HOME = {
  hero: {
    /** Small line above the headline — part of the page's main heading for Google */
    kicker: "Freelance web developer & designer in Bangladesh",
    /** One string per line of the big headline */
    headline: ["Design-led", "websites *that*", "grow brands."],
    intro:
      "I’m Faisal — a **full-stack web developer** based in Dhaka, Bangladesh. I build fast, distinctive websites, web apps and AI-powered products for brands in Bangladesh and around the world.",
    primaryCta: { label: "Start a project", href: "/contact" },
    secondaryCta: { label: "See my work", href: "#work" },
  },

  /** Words in the scrolling ticker under the hero */
  marquee: [
    "Web Design",
    "Development",
    "E-commerce",
    "AI Agents",
    "Web Apps",
    "Motion",
    "Branding",
  ],

  workTitle: "Work that *speaks* for itself",
  servicesTitle: "Everything you need to *launch*",
  processTitle: "A clear path from *idea* to launch",

  about:
    "Working from Dhaka with clients in Bangladesh and abroad, I bridge the gap between thoughtful design and solid engineering. From luxury e-commerce to AI-powered learning platforms, I care about one thing: products that look exceptional, load instantly and move your numbers.",

  stats: [
    { value: 20, suffix: "+", label: "Projects delivered" },
    { value: 5, suffix: "+", label: "Years building for the web" },
    { value: 17, suffix: "+", label: "Languages shipped in one product" },
  ],
};

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

/* -------------------------------------------------------------------- FAQ */
/** Shown on the home page AND sent to Google as FAQ rich results. Keep answers honest. */
export const FAQ_TITLE = "Questions, *answered*";
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. I work remotely with clients in Bangladesh and around the world — including the US, UK, Europe and Australia. I’m based in Dhaka (GMT+6), which overlaps well with European and Asian working hours, and I schedule calls to suit US time zones.",
  },
  {
    q: "How much does a website cost?",
    a: "Every project gets a clear, fixed quote after a short discovery call. The price depends on scope — a landing page is quicker than a custom web app or e-commerce store — and you’ll know exactly what’s included before we start.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most websites take 2–5 weeks from discovery to launch. Larger web apps are planned in milestones, with weekly previews so you can see progress and give feedback early.",
  },
  {
    q: "Which technologies do you use?",
    a: "Mainly Next.js, React and TypeScript on the front end, Node.js, Prisma and PostgreSQL on the back end, and Python for AI features. I pick the stack that fits your project, not the other way round.",
  },
  {
    q: "Will my website be fast and SEO-friendly?",
    a: "Yes. Every site is built for speed, mobile devices and search engines from day one — with clean semantic markup, optimized images, metadata, sitemaps and structured data.",
  },
  {
    q: "Can you build an e-commerce store with local payments like bKash?",
    a: "Yes. I build custom online stores with secure payments, including bKash for Bangladeshi customers and Stripe for international ones, plus inventory and order management.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. I handle deployment, analytics and SEO setup, and I’m available for ongoing improvements, new features and maintenance after your site goes live.",
  },
];

/* ------------------------------------------------------------- About page */
export const ABOUT = {
  eyebrow: "Freelance full-stack web developer · Dhaka, Bangladesh",
  headline: ["Engineering", "*evolution*"],
  intro:
    "I’m a **freelance full-stack web developer** based in Dhaka, Bangladesh. I bridge the gap between complex backend architecture and high-fidelity user interfaces, specializing in Next.js, AI agent orchestration, and interactive game development.",
  tagline: "Bridging human intent with machine efficiency since 2020.",
  facts: [
    { label: "Experience", value: "5+ Years" },
    { label: "Availability", value: "Freelance" },
    { label: "Localization", value: "17+ Langs" },
    { label: "Specialty", value: "AI & SaaS" },
  ],
  expertise: [
    {
      title: "AI Orchestration",
      text: "Agentic workflows and RAG systems. Helping startups integrate LLMs into production using Python and Node.js.",
    },
    {
      title: "Fullstack Systems",
      text: "Robust architectures with Next.js, Prisma and PostgreSQL — including systems supporting 17+ languages and multi-tenant logic.",
    },
    {
      title: "Interactive Logic",
      text: "Fluent in Godot and GDScript. I apply game-design principles to web UX to create engaging, fluid experiences.",
    },
  ],
  skillsTitle: "Tools I *trust*",
  philosophyTitle: "The *philosophy*",
  /** Each string is a paragraph. **double asterisks** make text bold/highlighted. */
  philosophy: [
    "Formal paths are often the slowest. As a 4th-year **CSE undergraduate**, I’ve prioritized real-world shipping over legacy classroom theory.",
    "I believe **self-learning** is the ultimate edge. It allowed me to master the T3 stack and AI integration while the industry was still debating their utility.",
    "From luxury e-commerce like **Fragcy** to educational platforms like **AI Bhaia**, my goal is to build software that feels invisible because it works perfectly.",
  ],
};

/* ----------------------------------------------------------- Contact page */
export const CONTACT = {
  eyebrow: "Hire a freelance web developer — Bangladesh & worldwide",
  headline: ["Let’s build", "*together.*"],
  formTitle: ["Ready to bring", "*your vision*", "to life?"],
  formIntro: "Currently accepting new projects and technical consultations.",
};

/* ------------------------------------------- Page titles for Google (SEO) */
/** Title + description shown in Google results for each page */
export const PAGE_SEO = {
  work: {
    title: "Web Development Portfolio",
    description:
      "Selected websites, web apps, e-commerce stores and AI products by Faisal Mahmud, a freelance web developer in Bangladesh working with clients worldwide.",
  },
  about: {
    title: "About — Freelance Full-Stack Web Developer in Dhaka",
    description:
      "Faisal Mahmud is a freelance full-stack web developer and designer in Dhaka, Bangladesh, specializing in Next.js, React, e-commerce and AI integrations.",
  },
  contact: {
    title: "Hire a Web Developer in Bangladesh",
    description:
      "Hire Faisal Mahmud, a freelance web developer in Bangladesh, for your website, web app or e-commerce project. Available for clients in Bangladesh and worldwide.",
  },
  blog: {
    title: "Journal — Web Development Articles",
    description:
      "Articles on web development, Next.js performance, design and AI by Faisal Mahmud, a full-stack web developer in Bangladesh.",
  },
};

/* -------------------------------------------------------- Projects & blog */
export const WORK_PAGE = {
  eyebrow: "Web development portfolio",
  headline: ["Selected *works*"],
  intro:
    "Websites, web apps and AI products I’ve designed and developed for clients in Bangladesh and abroad, from 2024 to 2026.",
};

export const BLOG_PAGE = {
  eyebrow: "Web development articles & insights",
  headline: ["The *journal*"],
};

/* ----------------------------------------------------------------- Footer */
export const FOOTER = {
  eyebrow: "Have a project in mind?",
  /** Small line in the footer — also helps Google understand who you are */
  tagline: "Freelance web developer & designer in Dhaka, Bangladesh — working with clients worldwide.",
  headline: ["Let’s work", "*together*"],
  button: "Start a project",
};

/* ----------------------------------------------------------------- Skills */
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
