import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="work" className="container-custom scroll-mt-24">
      <SectionHeading
        index="01"
        label="Selected work"
        title={
          <>
            Work that{" "}
            <span className="font-serif italic font-normal tracking-[-0.02em]">
              speaks
            </span>{" "}
            for itself
          </>
        }
        aside={
          <Link
            href="/projects"
            className="label text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            All projects ({String(PROJECTS.length).padStart(2, "0")})
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-24">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
