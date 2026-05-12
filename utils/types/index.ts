import { StaticImageData } from "next/image";

/**
 * Image Orientation for Project Layouts
 */
export type ImageOrientation = "landscape" | "portrait";

/**
 * Individual Project Image Structure
 */
export interface ProjectImage {
  src: string | StaticImageData;
  alt: string;
}

/**
 * The core Project interface
 */
export interface Project {
  id: string;
  name: string;
  techStack: string[];
  description: string;
  images: ProjectImage[]; // Changed from Tuple to Array for flexibility
  imageOrientation: ImageOrientation;
  liveUrl?: string;
  githubUrl?: string;
}

/**
 * Skill & Proficiencies
 */
export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100 for progress bars or rings
}

export interface Tab {
  label: string;
  skills: Skill[];
}

/**
 * Blog / Article Structure
 */
export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string | StaticImageData;
  content?: string; // Markdown or HTML string
}

/**
 * Social Media Links
 */
export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "instagram";
  href: string;
  icon?: React.ReactNode;
}
