"use client";
import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/utils/types";

/** Project grid with category filter (categories come from each project's `category`). */
export default function ProjectsArchive({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="container-custom">
      {categories.length > 2 && (
        <div className="flex flex-wrap gap-2 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "h-10 rounded-full border px-5 text-sm transition-colors",
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-line text-muted-foreground hover:text-foreground hover:border-foreground",
              )}
            >
              {cat}
              <span className="ml-2 opacity-50">
                {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Keyed by filter so the grid re-mounts cleanly instead of animating layout while scrolling */}
      <div key={filter} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-24">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} featured={i === 0 && visible.length > 1} />
        ))}
      </div>
    </section>
  );
}
