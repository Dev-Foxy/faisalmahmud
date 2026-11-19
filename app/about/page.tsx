"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Globe2, Zap, Cpu, Code2, Rocket } from "lucide-react";
import { PERSONAL_INFO, SKILL_TABS } from "@/data/content"; // Ensure this path matches your data file
import SkillSection from "@/components/home/Skills";

const AboutPage = () => {
  // Extracting all skill names for the marquee
  const allSkills = SKILL_TABS.flatMap((tab) => tab.skills.map((s) => s.name));

  const stats = [
    { label: "Experience", value: "4+ Years" },
    { label: "Availability", value: "Freelance" },
    { label: "Localization", value: "17+ Langs" },
    { label: "Specialty", value: "AI & SaaS" },
  ];

  return (
    <main className="min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="container-custom pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6 block">
            {PERSONAL_INFO.location} • {PERSONAL_INFO.availability}
          </span>
          <h1 className="text-6xl md:text-[8vw] font-bold tracking-tighter leading-[0.8] uppercase mb-12">
            Engineering <br />
            <span className="font-serif font-normal normal-case tracking-tight text-brand italic">
              Evolution
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl leading-relaxed tracking-tight text-neutral-600 dark:text-neutral-300"
            >
              {PERSONAL_INFO.bio}
              <span className="text-black dark:text-white font-medium block mt-6">
                Bridging human intent with machine efficiency since 2020.
              </span>
            </motion.p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8 border-l border-neutral-100 dark:border-neutral-900 pl-10">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                  {stat.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERTISE GRID (Mapped from Skills) --- */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-neutral-100 dark:border-neutral-900">
          <div className="p-10 border-r border-b border-neutral-100 dark:border-neutral-900 group">
            <Zap className="mb-6 group-hover:text-yellow-500 transition-colors" />
            <h3 className="text-xl font-bold mb-4">AI Orchestration</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Specializing in Agentic workflows and RAG systems. Helping
              startups integrate LLMs into production environments using Python
              and Node.js.
            </p>
          </div>
          <div className="p-10 border-r border-b border-neutral-100 dark:border-neutral-900 group">
            <Globe2 className="mb-6 group-hover:text-blue-500 transition-colors" />
            <h3 className="text-xl font-bold mb-4">Fullstack Systems</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Engineering robust architectures with Next.js, Prisma, and
              PostgreSQL. Built systems supporting 17+ languages and complex
              multi-tenant logic.
            </p>
          </div>
          <div className="p-10 border-b border-neutral-100 dark:border-neutral-900 group">
            <Gamepad2 className="mb-6 group-hover:text-green-500 transition-colors" />
            <h3 className="text-xl font-bold mb-4">Interactive Logic</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Fluent in Godot and GDScript. I apply game-design principles to
              web UX to create highly engaging, fluid digital experiences.
            </p>
          </div>
        </div>
      </section>

      <SkillSection />

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="container-custom py-32">
        <div className="max-w-4xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-400 mb-10 block">
            The Philosophy
          </h2>
          <div className="space-y-12 text-lg md:text-xl text-neutral-500 leading-relaxed">
            <p>
              Formal paths are often the slowest. As a 4th-year{" "}
              <span className="text-black dark:text-white underline decoration-neutral-800">
                CSE Undergraduate
              </span>
              , I’ve prioritized real-world shipping over legacy classroom
              theory.
            </p>
            <p>
              I believe{" "}
              <span className="text-black dark:text-white italic font-medium">
                Self-Learning
              </span>{" "}
              is the ultimate edge. It allowed me to master the T3 stack and AI
              integration while the industry was still debating their utility.
            </p>
            <p>
              From luxury e-commerce like{" "}
              <span className="text-black dark:text-white">Fragcy</span> to
              educational platforms like{" "}
              <span className="text-black dark:text-white">AI Bhaia</span>, my
              goal is to build software that feels invisible because it works
              perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="container-custom py-20">
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="bg-black dark:bg-white text-white dark:text-black p-12 md:p-24 rounded-[3rem] text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-neutral-900 dark:bg-neutral-100 rounded-full">
              <Rocket size={32} className="text-white dark:text-black" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">
            Build for the Future.
          </h2>
          <a
            href="/contact"
            className="inline-block border-b-2 border-white dark:border-black pb-2 text-xl font-medium hover:opacity-70 transition-opacity"
          >
            {PERSONAL_INFO.email}
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
