import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjects, getProject } from "@/lib/content";
import { MaskLines, FadeUp } from "@/components/shared/motion";
import Markdown from "@/components/shared/Markdown";
import JsonLd from "@/components/shared/JsonLd";
import { pageMetadata, projectJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    ...pageMetadata({
      title: `${project.title} — ${project.category} Case Study`,
      description: project.summary,
      path: `/projects/${project.slug}`,
      image: `/projects/${project.slug}/opengraph-image`,
    }),
    keywords: [...project.stack, project.category, "web development case study", "web developer Bangladesh"],
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const projects = getProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
  ].filter((f) => f.value);

  return (
    <main>
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Work", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />
      {/* ---------- Header ---------- */}
      <header className="container-custom pt-28 md:pt-40">
        <FadeUp>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 label text-muted-foreground hover:text-foreground transition-colors mb-10 md:mb-16"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            All work
          </Link>
        </FadeUp>

        <h1 className="text-[clamp(3rem,12vw,11rem)] font-medium leading-[0.88] tracking-[-0.055em] break-words">
          <MaskLines lines={[project.title]} />
        </h1>

        <FadeUp delay={0.3} className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-2xl text-lg md:text-2xl leading-snug tracking-tight text-muted-foreground">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 font-medium text-brand-foreground"
              >
                Visit live site
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 hover:bg-foreground hover:text-background transition-colors"
              >
                Source code
              </a>
            )}
          </div>
        </FadeUp>
      </header>

      {/* ---------- Cover ---------- */}
      <FadeUp delay={0.2} className="container-custom mt-14 md:mt-20">
        <div
          className="relative overflow-hidden rounded-2xl aspect-4/5 sm:aspect-16/10 lg:aspect-video"
          style={{ backgroundColor: project.color }}
        >
          {project.cover ? (
            <div className="absolute inset-[8%]">
              <Image
                src={project.cover}
                alt={project.coverAlt ?? project.title}
                fill
                priority
                sizes="100vw"
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 grid place-items-center px-6 text-center font-serif italic text-[clamp(3rem,10vw,9rem)] leading-none"
              style={{ color: project.ink }}
            >
              {project.title}
            </div>
          )}
        </div>
      </FadeUp>

      {/* ---------- Details + case study ---------- */}
      <section className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 py-20 md:py-32">
        {/* Sticky only on large screens — on phones it simply sits above the text */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <dl className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-8 border-t border-line pt-6">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="label text-muted-foreground mb-2">{f.label}</dt>
                <dd className="text-base">{f.value}</dd>
              </div>
            ))}
            {project.stack.length > 0 && (
              <div className="col-span-2 lg:col-span-1">
                <dt className="label text-muted-foreground mb-3">Stack</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 text-sm">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </aside>

        <div className="lg:col-span-8 min-w-0">
          {project.body ? (
            <FadeUp>
              <Markdown>{project.body}</Markdown>
            </FadeUp>
          ) : null}

          {project.gallery.length > 0 && (
            <div className="mt-16 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <FadeUp
                  key={src}
                  delay={(i % 2) * 0.1}
                  className={project.gallery.length === 1 ? "sm:col-span-2" : undefined}
                >
                  <div
                    className="relative aspect-4/5 sm:aspect-square overflow-hidden rounded-2xl"
                    style={{ backgroundColor: project.color }}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain p-[8%]"
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- Next project ---------- */}
      {next.slug !== project.slug && (
        <Link
          href={`/projects/${next.slug}`}
          data-cursor="Next"
          className="group block border-t border-line"
        >
          <div className="container-custom py-20 md:py-32 text-center">
            <p className="label text-muted-foreground mb-6">Next project</p>
            <h2 className="text-[clamp(3rem,10vw,9rem)] font-medium leading-none tracking-[-0.05em] break-words transition-colors duration-500 group-hover:text-brand">
              {next.title}
            </h2>
          </div>
        </Link>
      )}
    </main>
  );
}
