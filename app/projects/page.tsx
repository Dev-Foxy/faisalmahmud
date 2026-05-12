"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/content";
import ProjectCard from "@/components/project/ProjectCard";
import PageTitle from "@/components/shared/PageTitle";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Web", "AI", "Games"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  // Filter logic based on techStack or name for now
  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    if (filter === "AI")
      return project.techStack.some(
        (t) => t.includes("AI") || t.includes("Python"),
      );
    if (filter === "Games")
      return project.id.includes("game") || project.techStack.includes("Godot");
    if (filter === "Web")
      return (
        project.techStack.includes("Next.js") ||
        project.techStack.includes("React")
      );
    return true;
  });

  return (
    <main className="min-h-screen pt-40 pb-20">
      <div className="container-custom">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div>
            <PageTitle title="Selected Works" subtitle="Archive" />
            <p className="text-neutral-500 dark:text-neutral-400 mt-6 max-w-md text-lg">
              A collection of digital experiences, AI experiments, and
              interactive games built between 2024 and 2026.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all",
                  filter === cat
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "border-black/10 dark:border-white/10 text-neutral-500 hover:border-black dark:hover:border-white",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-32 md:gap-48">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center py-20 border-t border-black/5 dark:border-white/5"
        >
          <h3 className="text-3xl font-bold tracking-tighter mb-6">
            Have a unique idea?
          </h3>
          <a
            href="/#contact"
            className="text-sm font-mono uppercase tracking-[0.3em] underline decoration-neutral-300 underline-offset-8 hover:text-neutral-500 transition-colors"
          >
            Start a project with me
          </a>
        </motion.div>
      </div>
    </main>
  );
}
