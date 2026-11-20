import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import ProjectsArchive from "@/components/project/ProjectsArchive";
import { getProjects } from "@/lib/content";
import { WORK_PAGE, PAGE_SEO } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = pageMetadata({ ...PAGE_SEO.work, path: "/projects" });

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="pb-28 md:pb-40">
      <JsonLd data={breadcrumbJsonLd([{ name: "Work", path: "/projects" }])} />
      <PageHeader eyebrow={WORK_PAGE.eyebrow} headline={WORK_PAGE.headline} intro={WORK_PAGE.intro} />
      <ProjectsArchive projects={projects} />

      <div className="container-custom mt-28 md:mt-40 border-t border-line pt-16 text-center">
        <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">Have a unique idea?</h3>
        <Link
          href="/contact"
          className="inline-flex h-14 items-center rounded-full bg-brand px-8 font-medium text-brand-foreground transition-transform hover:scale-105"
        >
          Start a project with me
        </Link>
      </div>
    </main>
  );
}
