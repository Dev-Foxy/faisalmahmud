"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_TABS } from "@/data/content";
import PageTitle from "@/components/shared/PageTitle";
import { cn } from "@/lib/utils";

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState(SKILL_TABS[0].label);

  const activeSkills =
    SKILL_TABS.find((tab) => tab.label === activeTab)?.skills || [];

  return (
    <section id="skills" className="container-custom py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <PageTitle title="Proficiencies" subtitle="02 / Expertise" />

        {/* Modern Tab Switcher */}
        <div className="flex flex-wrap gap-2 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl md:rounded-full border border-black/5 dark:border-white/5">
          {SKILL_TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={cn(
                "relative px-4 py-2 md:px-6 md:py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all rounded-full",
                activeTab === tab.label
                  ? "text-white dark:text-black"
                  : "text-neutral-500 hover:text-black dark:hover:text-white",
              )}
            >
              {activeTab === tab.label && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black dark:bg-white rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid - Optimized for many items */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {activeSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative p-5 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                {/* Icon & Name Header */}
                <div className="flex items-center justify-between">
                  <div className="relative w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                      // Fallback for missing icons
                      onError={(e) => {
                        (e.target as any).style.display = "none";
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-mono text-[11px] uppercase tracking-tighter text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors truncate">
                    {skill.name}
                  </h3>

                  {/* Level Indicator - Minimalist Line */}
                  <div className="h-0.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-black dark:bg-white"
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-black/2 to-transparent dark:from-white/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SkillSection;
