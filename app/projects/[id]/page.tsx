"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Github } from "lucide-react";
import { PROJECTS } from "@/data/content";

export default function ProjectDetail() {
  const params = useParams();
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const cover = project.images[0];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Navigation */}
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors mb-20"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Archive
        </Link>

        {/* Hero Section */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
              {project.name}
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
              <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                {project.description}
              </p>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 px-8 py-4 bg-brand text-brand-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  <Globe size={16} />
                  Live Site
                </a>
              )}
            </div>
          </motion.div>
        </header>

        {/* Main Exhibit Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl mb-32 aspect-[4/5] md:aspect-video"
          style={{ backgroundColor: project.color ?? "var(--surface)" }}
        >
          {cover ? (
            <div className="absolute inset-[8%]">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 grid place-items-center font-serif italic text-[clamp(3rem,10vw,9rem)]"
              style={{ color: project.ink }}
            >
              {project.name}
            </div>
          )}
        </motion.div>

        {/* Technical Deep Dive Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-neutral-200 dark:bg-neutral-800" />
              Project Specs
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-bold border-b border-black/10 dark:border-white/10 pb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
                  Role
                </h3>
                <p className="text-sm font-bold">
                  Fullstack Lead & UI Engineer
                </p>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
                  Year
                </h3>
                <p className="text-sm font-bold">{project.year ?? "2024 — 2026"}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-24">
            <div className="prose prose-2xl dark:prose-invert max-w-none">
              <h4 className="text-4xl font-bold tracking-tighter mb-8 italic">
                The Challenge
              </h4>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Every project comes with its unique set of hurdles. For{" "}
                {project.name}, the goal was to push the boundaries of what's
                possible within the {project.techStack[0]} ecosystem, ensuring a
                balance between computational efficiency and aesthetic fluidity.
              </p>
            </div>

            {/* Additional Project Layout Elements (Placeholders) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-neutral-50 dark:bg-neutral-900 rounded-sm border border-black/5 dark:border-white/5 flex items-center justify-center text-[10px] uppercase text-neutral-400">
                Detailed Module 01
              </div>
              <div className="aspect-square bg-neutral-50 dark:bg-neutral-900 rounded-sm border border-black/5 dark:border-white/5 flex items-center justify-center text-[10px] uppercase text-neutral-400">
                Detailed Module 02
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Next Project Link */}
      <footer className="border-t border-black/5 dark:border-white/5 pt-20">
        <div className="container-custom text-center">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-400 mb-6">
            Next Project
          </p>
          <Link href={`/projects/${nextProject.id}`} data-cursor="Next" className="group inline-block pb-20">
            <h2 className="text-5xl md:text-8xl font-medium tracking-[-0.05em] group-hover:font-serif group-hover:italic group-hover:text-brand transition-colors">
              {nextProject.name}
            </h2>
          </Link>
        </div>
      </footer>
    </main>
  );
}
