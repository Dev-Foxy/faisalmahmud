"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOGS } from "@/data/content";
import PageTitle from "@/components/shared/PageTitle";

const Blogs = () => {
  return (
    <section id="blog" className="container-custom py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <PageTitle title="Insights" subtitle="03 / Articles" />

        <Link
          href="/blog"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors"
        >
          View all posts
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BLOGS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 mb-6">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest border border-black/5 dark:border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-tighter text-neutral-500">
                  <span>{post.date}</span>
                  <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800" />
                  <span>5 min read</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 max-w-md">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
