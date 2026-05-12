"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BLOGS } from "@/data/content"; // Adjust path as needed
import { ArrowUpRight } from "lucide-react";

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white pb-24">
      {/* --- HERO SECTION --- */}
      <section className="container-custom pt-32 pb-20 border-b border-neutral-100 dark:border-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6 block">
            Articles & Insights
          </span>
          <h1 className="text-6xl md:text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase">
            The <br />
            <span className="text-neutral-300 dark:text-neutral-800 italic font-light">
              Journal
            </span>
          </h1>
        </motion.div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {BLOGS.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm mb-8">
                  {/* Image with Scale Effect */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    src={
                      typeof blog.coverImage === "string"
                        ? blog.coverImage
                        : blog.coverImage.src
                    }
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    {blog.date}
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-neutral-500 dark:text-neutral-400 line-clamp-2 max-w-md">
                    {blog.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-2 group/btn">
                    <span className="text-sm font-bold uppercase tracking-tighter border-b border-black dark:border-white pb-1">
                      Read More
                    </span>
                    <div className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 group-hover/btn:bg-black dark:group-hover/btn:bg-white group-hover/btn:text-white dark:group-hover/btn:text-black transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="container-custom py-32 text-center">
        <h3 className="text-2xl font-light text-neutral-400 mb-8">
          Want to stay updated with my latest research?
        </h3>
        <button className="px-12 py-5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all text-sm font-bold uppercase tracking-widest">
          Subscribe to Newsletter
        </button>
      </section>
    </main>
  );
};

export default BlogPage;
