"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/utils/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isPortrait = project.imageOrientation === "portrait";
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full border-b border-neutral-100 dark:border-neutral-900 pb-20 lg:pb-32 last:border-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Side: Index & Identity (The Anchor) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col pt-2">
          <span className="font-mono text-sm font-bold tracking-tighter text-neutral-300 dark:text-neutral-700">
            {displayIndex}
          </span>
          <div className="h-24 w-px bg-neutral-100 dark:bg-neutral-900 mt-4 mx-auto" />
        </div>

        {/* Middle: The Media Exhibit */}
        <div
          className={cn(
            "relative lg:col-span-6 order-2 lg:order-0",
            isPortrait ? "max-w-105" : "w-full",
          )}
        >
          <Link
            href={`/projects/${project.id}`}
            className="block relative overflow-hidden rounded-sm group/img"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative bg-neutral-100 dark:bg-neutral-900",
                isPortrait ? "aspect-3/4" : "aspect-video",
              )}
            >
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000"
              />
              {/* Subtle Scanline Overlay for Tech Vibe */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_2px,3px_100%] pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity" />
            </motion.div>
          </Link>

          {/* Floating Category Label */}
          <div className="absolute -bottom-4 -right-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
            {isPortrait ? "Experimental" : "Production"}
          </div>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="lg:col-span-5 flex flex-col pt-0 lg:pt-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Stack /
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="group/title inline-block"
          >
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] mb-8 wrap-break-word">
              {project.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="block group-hover/title:italic transition-all duration-500"
                >
                  {word}
                </span>
              ))}
            </h3>
          </Link>

          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm mb-10">
            {project.description}
          </p>

          <Link
            href={`/projects/${project.id}`}
            className="group/btn flex items-center gap-6 w-fit"
          >
            <div className="relative p-5 rounded-full border border-black/10 dark:border-white/10 group-hover/btn:bg-black dark:group-hover/btn:bg-white transition-all duration-500">
              <ArrowUpRight
                size={24}
                className="group-hover/btn:text-white dark:group-hover/btn:text-black transition-colors"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] border-b border-transparent group-hover/btn:border-black dark:group-hover/btn:border-white transition-all">
              View Case
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
