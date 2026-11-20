import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { Accent } from "@/components/shared/Accent";
import { HOME } from "@/content/site";
import type { Project } from "@/utils/types";

export default function Projects({ projects, total }: { projects: Project[]; total: number }) {
  return (
    <section id="work" className="container-custom scroll-mt-24">
      <SectionHeading
        index="01"
        label="Selected work"
        title={<Accent text={HOME.workTitle} color={false} />}
        aside={
          <Link
            href="/projects"
            className="label text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            All projects ({String(total).padStart(2, "0")})
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}
