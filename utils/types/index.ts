/**
 * Shapes of the content in /content. You normally never need to edit this
 * file — edit the Markdown files and content/site.ts instead.
 */

export interface Project {
  /** From the file name: content/projects/fragcy.md -> "fragcy" -> /projects/fragcy */
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  role?: string;
  client?: string;
  stack: string[];
  /** Main image, e.g. "/project/p1.png". Leave empty to show a typographic cover. */
  cover?: string;
  coverAlt?: string;
  /** Extra screenshots shown on the case-study page */
  gallery: string[];
  /** Background colour of the image stage */
  color: string;
  /** Text colour on that stage */
  ink: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Show on the home page */
  featured: boolean;
  /** Lower numbers come first */
  order: number;
  /** Case-study text (Markdown) */
  body: string;
}

export interface Post {
  /** From the file name: content/blog/my-post.md -> /blog/my-post */
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-03-10" */
  date: string;
  category: string;
  cover?: string;
  tags: string[];
  readingMinutes: number;
  body: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface Tab {
  label: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
}
