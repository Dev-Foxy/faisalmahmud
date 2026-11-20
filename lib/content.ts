/**
 * Reads projects and blog posts from Markdown files in /content.
 * Server-only (uses the file system) — call it from page.tsx files.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project, Post } from "@/utils/types";

const ROOT = path.join(process.cwd(), "content");
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

type Data = Record<string, unknown>;

function readDir(dir: string) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, file), "utf8"));
      return { file: `content/${dir}/${file}`, slug: file.replace(/\.mdx?$/, ""), data: data as Data, body: content.trim() };
    })
    .filter(({ data }) => SHOW_DRAFTS || data.draft !== true);
}

/* -------- small helpers that turn front-matter values into clean types ---- */
function required(data: Data, key: string, file: string): string {
  const v = data[key];
  if (v === undefined || v === null || String(v).trim() === "") {
    throw new Error(`[content] "${key}" is missing in ${file}`);
  }
  return str(v);
}
function str(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v === undefined || v === null ? "" : String(v).trim();
}
function opt(v: unknown) {
  const s = str(v);
  return s || undefined;
}
function list(v: unknown): string[] {
  if (Array.isArray(v)) return v.map(str).filter(Boolean);
  if (typeof v === "string") return v.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

/* ------------------------------------------------------------- Projects */
export function getProjects(): Project[] {
  return readDir("projects")
    .map(({ file, slug, data, body }) => ({
      slug,
      title: required(data, "title", file),
      summary: required(data, "summary", file),
      category: str(data.category) || "Project",
      year: str(data.year),
      role: opt(data.role),
      client: opt(data.client),
      stack: list(data.stack),
      cover: opt(data.cover),
      coverAlt: opt(data.coverAlt),
      gallery: list(data.gallery),
      color: str(data.color) || "#e9e7e1",
      ink: str(data.ink) || "#0f0f0e",
      liveUrl: opt(data.liveUrl),
      githubUrl: opt(data.githubUrl),
      featured: data.featured !== false,
      order: Number(data.order ?? 999),
      body,
    }))
    .sort((a, b) => a.order - b.order || b.year.localeCompare(a.year));
}

export function getProject(slug: string) {
  return getProjects().find((p) => p.slug === slug);
}

/* ---------------------------------------------------------------- Posts */
export function getPosts(): Post[] {
  return readDir("blog")
    .map(({ file, slug, data, body }) => ({
      slug,
      title: required(data, "title", file),
      excerpt: str(data.excerpt),
      date: required(data, "date", file),
      category: str(data.category) || "Article",
      cover: opt(data.cover),
      tags: list(data.tags),
      readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
      body,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}
