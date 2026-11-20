"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SKILL_TABS, ABOUT } from "@/content/site";
import { Accent } from "@/components/shared/Accent";
import { MaskLines } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState(SKILL_TABS[0].label);
  const activeSkills = SKILL_TABS.find((tab) => tab.label === activeTab)?.skills ?? [];

  return (
    <section id="skills" className="container-custom">
      <div className="border-t border-line pt-6 mb-10 md:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          <MaskLines onView lines={[<Accent key="t" text={ABOUT.skillsTitle} />]} />
        </h2>

        {/* Tabs — scroll sideways on small screens instead of wrapping */}
        <div className="-mx-[clamp(1.25rem,4vw,3.5rem)] px-[clamp(1.25rem,4vw,3.5rem)] overflow-x-auto [scrollbar-width:none] lg:mx-0 lg:px-0">
          <div className="flex w-max gap-1 rounded-full border border-line p-1">
            {SKILL_TABS.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={cn(
                  "h-9 whitespace-nowrap rounded-full px-4 text-sm transition-colors",
                  activeTab === tab.label
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Keyed by tab: a quick fade instead of layout animations (which jitter while scrolling on phones) */}
      <div key={activeTab} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {activeSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-500 hover:border-foreground/30"
          >
            <div className="flex items-center justify-between">
              <div className="relative h-8 w-8 opacity-80 transition-opacity group-hover:opacity-100">
                <Image src={skill.icon} alt="" fill sizes="32px" className="object-contain" />
              </div>
              <span className="label text-muted-foreground">{skill.level}%</span>
            </div>
            <h3 className="mt-6 text-sm font-medium truncate">{skill.name}</h3>
            <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-line">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.03 }}
                className="h-full bg-brand"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
