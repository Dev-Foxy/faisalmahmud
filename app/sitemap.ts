import type { MetadataRoute } from "next";
import { getProjects, getPosts } from "@/lib/content";
import { absolute } from "@/lib/seo";

/** /sitemap.xml — updates automatically when you add projects or posts. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: absolute("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absolute("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absolute("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: absolute("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: absolute("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const projects = getProjects().map((p) => ({
    url: absolute(`/projects/${p.slug}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const posts = getPosts().map((p) => ({
    url: absolute(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projects, ...posts];
}
