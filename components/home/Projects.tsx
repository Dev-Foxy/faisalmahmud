import ProjectCard from "@/components/project/ProjectCard";
import { PROJECTS } from "@/data/content"; // Mock data file
import PageTitle from "@/components/shared/PageTitle";

export default function Projects() {
  return (
    <section id="projects" className="container-custom">
      <div className="flex justify-between items-end mb-20">
        <PageTitle title="Works" />
      </div>
      <div className="grid grid-cols-1 gap-40">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
