import { renderOg, OG_SIZE } from "@/lib/og";
import { getProject, getProjects } from "@/lib/content";

export const alt = "Project case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  return renderOg({
    eyebrow: project ? `Case study · ${project.category}` : "Case study",
    title: project?.title ?? "Project",
    bg: project?.color,
    ink: project?.ink,
  });
}
