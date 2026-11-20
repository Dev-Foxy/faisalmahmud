import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPosts, getPost, formatDate } from "@/lib/content";
import { MaskLines, FadeUp } from "@/components/shared/motion";
import Markdown from "@/components/shared/Markdown";
import { PERSON } from "@/content/site";
import JsonLd from "@/components/shared/JsonLd";
import { pageMetadata, postJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const base = pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, type: "article", image: `/blog/${post.slug}/opengraph-image` });
  return {
    ...base,
    keywords: post.tags,
    authors: [{ name: PERSON.name }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [PERSON.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = posts[index];
  const next = posts[(index + 1) % posts.length];

  return (
    <main className="pb-20">
      <JsonLd data={postJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Journal", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <header className="container-custom pt-28 md:pt-40 pb-12 md:pb-20">
        <FadeUp>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 label text-muted-foreground hover:text-foreground transition-colors mb-10 md:mb-16"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Journal
          </Link>
          <p className="label text-muted-foreground mb-6">
            <span className="text-brand">{post.category}</span> · {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
        </FadeUp>
        <h1 className="max-w-6xl text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em] break-words">
          <MaskLines lines={[post.title]} />
        </h1>
        {post.excerpt && (
          <FadeUp delay={0.3}>
            <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-snug tracking-tight text-muted-foreground">
              {post.excerpt}
            </p>
          </FadeUp>
        )}
      </header>

      {post.cover && (
        <FadeUp className="container-custom">
          <div className="relative aspect-16/10 md:aspect-21/9 overflow-hidden rounded-2xl bg-surface">
            <Image src={post.cover} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </FadeUp>
      )}

      <section className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24">
        <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start order-2 lg:order-1 border-t border-line pt-6">
          <p className="label text-muted-foreground mb-2">Written by</p>
          <p>{PERSON.name}</p>
          <p className="text-sm text-muted-foreground">{PERSON.role}</p>
          {post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 text-sm">
                  {t}
                </span>
              ))}
            </div>
          )}
        </aside>
        <FadeUp className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2 min-w-0">
          <Markdown>{post.body}</Markdown>
        </FadeUp>
      </section>

      {next.slug !== post.slug && (
        <Link href={`/blog/${next.slug}`} data-cursor="Read" className="group block border-t border-line">
          <div className="container-custom py-20 md:py-28 text-center">
            <p className="label text-muted-foreground mb-6">Next article</p>
            <h2 className="mx-auto max-w-4xl text-[clamp(2rem,6vw,5rem)] font-medium leading-[1] tracking-[-0.05em] transition-colors duration-500 group-hover:text-brand">
              {next.title}
            </h2>
          </div>
        </Link>
      )}
    </main>
  );
}
