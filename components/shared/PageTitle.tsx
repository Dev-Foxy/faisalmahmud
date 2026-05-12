"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageTitle = ({ title, subtitle, className }: PageTitleProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-4">
        {/* Decorative Line - Grows on scroll/view */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="h-px bg-black dark:bg-white origin-left"
        />

        {/* Category Label */}
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          {subtitle || "Section"}
        </span>
      </div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default PageTitle;
