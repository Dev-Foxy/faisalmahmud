"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { BLOGS, PERSONAL_INFO } from "@/data/content"; // Adjust path as needed
import { ArrowLeft, Share2, Clock, Tag } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  // Find the blog post based on the slug
  const post = BLOGS.find((b) => b.slug === slug);

  // If post not found, we can redirect or show a 404 state
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-500 underline">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-32">
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-mono uppercase tracking-widest">
            Back
          </span>
        </button>
        <div className="text-white text-xs font-mono uppercase tracking-[0.3em]">
          {post.category}
        </div>
      </nav>

      {/* --- HEADER SECTION --- */}
      <header className="container-custom pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="flex flex-wrap items-center gap-6 mb-8 text-neutral-400 font-mono text-[10px] uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Clock size={12} /> 5 Min Read
            </span>
            <span>—</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-5xl md:text-[7vw] font-bold tracking-tighter leading-[0.9] uppercase mb-12 max-w-5xl">
            {post.title}
          </h1>

          <p className="text-xl md:text-3xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-3xl font-light italic">
            "{post.excerpt}"
          </p>
        </motion.div>
      </header>

      {/* --- HERO IMAGE --- */}
      <section className="w-full px-4 md:px-10 mb-24">
        <motion.div
          initial={{ clipPath: "inset(0% 10% 0% 10%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="relative aspect-video md:aspect-21/9 overflow-hidden rounded-sm"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* --- CONTENT AREA --- */}
      <section className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Info */}
        <aside className="lg:col-span-3 space-y-12 order-2 lg:order-1">
          <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
              Author
            </p>
            <p className="font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-xs text-neutral-500 uppercase">
              {PERSONAL_INFO.role}
            </p>
          </div>

          <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
              Share
            </p>
            <div className="flex gap-4">
              <button className="p-2 border border-neutral-100 dark:border-neutral-900 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Body Text */}
        <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
          <div className="prose prose-lg dark:prose-invert prose-neutral max-w-none">
            {/* 
                In a real app, this is where you'd render MDX or HTML. 
                For now, we use a beautiful placeholder structure.
            */}
            <p className="text-2xl leading-relaxed mb-12 text-black dark:text-white font-medium">
              As we move into 2026, the boundaries between static interfaces and
              autonomous intelligence are blurring. This transition represents a
              fundamental shift in how we engineer user experiences.
            </p>

            <h2 className="text-3xl font-bold uppercase tracking-tighter mt-16 mb-8">
              The Core Architecture
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              In my experience as a full-stack developer, building systems that
              leverage AI agent orchestration requires a rethink of backend
              predictability. We aren't just calling APIs anymore; we are
              managing emergent behaviors.
            </p>

            <div className="my-16 p-8 bg-neutral-50 dark:bg-neutral-900 border-l-4 border-black dark:border-white italic text-xl">
              "The goal isn't to make the AI smarter; it's to make the
              integration seamless enough that the user forgets it's there."
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Whether working on Next.js performance or game development logic
              in Godot, the focus remains on reducing friction between the
              intent and the outcome.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-20 flex flex-wrap gap-3">
            {["Development", "AI", "UX Design", "Technology"].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded-full text-xs font-medium"
              >
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEXT POST PREVIEW --- */}
      <section className="mt-32 border-t border-neutral-100 dark:border-neutral-900 pt-20 container-custom">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-400 mb-12 text-center">
          Next Article
        </p>
        <Link href="/blog" className="group block text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter transition-all group-hover:italic group-hover:text-neutral-500">
            View All Posts
          </h2>
        </Link>
      </section>
    </main>
  );
};

export default BlogPostPage;
