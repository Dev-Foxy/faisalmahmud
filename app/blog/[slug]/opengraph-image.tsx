import { renderOg, OG_SIZE } from "@/lib/og";
import { getPost, getPosts } from "@/lib/content";

export const alt = "Journal article";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return renderOg({
    eyebrow: post ? `Journal · ${post.category}` : "Journal",
    title: post?.title ?? "Article",
  });
}
