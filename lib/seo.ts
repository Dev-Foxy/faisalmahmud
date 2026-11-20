/**
 * SEO helpers: the site's absolute URL and schema.org JSON-LD builders.
 * Content comes from content/site.ts — edit that file, not this one.
 */
import type { Metadata } from "next";
import { PERSON, SEO, SOCIALS, SERVICES, FAQ } from "@/content/site";
import type { Project, Post } from "@/utils/types";
import HeroImage from "@/lib/hero.png";

/** Absolute site URL — from site.ts, an env var, or Vercel's production URL. */
export const SITE_URL = (
  SEO.siteUrl ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const absolute = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const sameAs = SOCIALS.map((s) => s.href).filter(Boolean);

/**
 * Shared per-page metadata: canonical URL + complete Open Graph/Twitter tags.
 * (A page's openGraph object replaces the layout's, so everything is restated here.)
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Share image; defaults to the site-wide one */
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${SEO.siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type,
      siteName: SEO.siteName,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: SEO.twitter || undefined,
    },
  };
}

/* ------------------------------------------------------------ JSON-LD */

/** Site-wide graph: you as a Person, your freelance service, and the website. */
export function siteJsonLd() {
  const [city, country] = PERSON.location.split(",").map((s) => s.trim());
  const address = {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: country === "Bangladesh" ? "BD" : country,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PERSON.name,
        jobTitle: PERSON.role,
        description: SEO.description,
        url: SITE_URL,
        image: absolute(HeroImage.src),
        email: `mailto:${PERSON.email}`,
        address,
        nationality: { "@type": "Country", name: "Bangladesh" },
        knowsAbout: [
          "Web development",
          "Web design",
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "E-commerce development",
          "UI/UX design",
          "Search engine optimization",
          "AI integration",
        ],
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: `${PERSON.name} — Freelance Web Developer`,
        description: SEO.description,
        url: SITE_URL,
        image: absolute(HeroImage.src),
        email: PERSON.email,
        founder: { "@id": PERSON_ID },
        address,
        areaServed: SEO.areaServed.map((name) =>
          name === "Worldwide" || name === "Europe"
            ? { "@type": "Place", name }
            : { "@type": "Country", name },
        ),
        knowsLanguage: ["en", "bn"],
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web development services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SEO.siteName,
        description: SEO.description,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absolute(`/projects/${project.slug}`),
    image: project.cover ? absolute(project.cover) : absolute(`/projects/${project.slug}/opengraph-image`),
    dateCreated: project.year || undefined,
    genre: project.category,
    keywords: project.stack.join(", "),
    creator: { "@id": PERSON_ID },
    ...(project.client ? { sourceOrganization: { "@type": "Organization", name: project.client } } : {}),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}

export function postJsonLd(post: Post) {
  const url = absolute(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    image: post.cover ? absolute(post.cover) : absolute(`/blog/${post.slug}/opengraph-image`),
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en",
    author: { "@id": PERSON_ID, "@type": "Person", name: PERSON.name, url: SITE_URL },
    publisher: { "@id": PERSON_ID },
  };
}
