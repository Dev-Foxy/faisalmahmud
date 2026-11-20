import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { FadeUp } from "@/components/shared/motion";
import { getPosts, formatDate } from "@/lib/content";
import { BLOG_PAGE, PAGE_SEO } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = pageMetadata({ ...PAGE_SEO.blog, path: "/blog" });

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="pb-28 md:pb-40">
      <JsonLd data={breadcrumbJsonLd([{ name: "Journal", path: "/blog" }])} />
      <PageHeader eyebrow={BLOG_PAGE.eyebrow} headline={BLOG_PAGE.headline} />

      <section className="container-custom">
        {posts.length === 0 && <p className="text-muted-foreground">No posts yet — check back soon.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-24">
          {posts.map((post, i) => (
            <FadeUp key={post.slug} delay={(i % 2) * 0.1}>
              <Link href={`/blog/${post.slug}`} data-cursor="Read" className="group block">
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-surface">
                  {post.cover && (
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-105"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 label backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="label text-muted-foreground mb-3">
                      {formatDate(post.date)} · {post.readingMinutes} min read
                    </p>
                    <h2 className="text-2xl md:text-4xl font-medium tracking-[-0.04em] leading-tight">{post.title}</h2>
                    {post.excerpt && (
                      <p className="mt-3 max-w-lg text-muted-foreground leading-snug line-clamp-2">{post.excerpt}</p>
                    )}
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line transition-colors duration-500 group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground">
                    <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
