"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/utils/types";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/shared/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  /** Wide 16:9 stage, used for the lead project */
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const image = project.images[0];
  const ink = project.ink ?? "#0f0f0e";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, ease: EASE, delay: featured ? 0 : (index % 2) * 0.1 }}
      className={cn(featured && "md:col-span-2")}
    >
      <Link
        ref={ref}
        href={`/projects/${project.id}`}
        data-cursor="View"
        className="group block"
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl",
            featured ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]" : "aspect-[4/5]",
          )}
          style={{ backgroundColor: project.color ?? "var(--surface)" }}
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 flex items-center justify-center p-[9%]"
          >
            {image ? (
              <div className="relative h-full w-full transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                />
              </div>
            ) : (
              <span
                className="font-serif italic text-[clamp(3rem,9vw,8rem)] leading-none tracking-[-0.03em] transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.06]"
                style={{ color: ink }}
              >
                {project.name}
              </span>
            )}
          </motion.div>

          <div
            className="absolute left-5 top-5 hidden sm:flex gap-2 label"
            style={{ color: ink }}
          >
            {project.techStack.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1.5 backdrop-blur-sm"
                style={{ borderColor: `${ink}33` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-medium tracking-[-0.04em] leading-tight">
              {project.name}
            </h3>
            <p className="mt-2 max-w-xl text-muted-foreground leading-snug line-clamp-2">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <span className="hidden sm:block label text-muted-foreground text-right">
              {project.category}
              <br />
              {project.year}
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors duration-500 group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground">
              <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
