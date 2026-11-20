"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { PROCESS, HOME } from "@/content/site";
import { Accent } from "@/components/shared/Accent";
import { EASE } from "@/components/shared/motion";

export default function Process() {
  return (
    <section id="process" className="container-custom">
      <SectionHeading
        index="04"
        label="Process"
        title={<Accent text={HOME.processTitle} color={false} />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: EASE, delay: i * 0.1 }}
            className="group relative flex min-h-[20rem] flex-col justify-between rounded-2xl border border-line bg-surface/50 p-6 md:p-8 transition-colors duration-500 hover:bg-brand hover:text-brand-foreground hover:border-brand"
          >
            <div className="flex items-center justify-between">
              <span className="text-6xl font-serif italic leading-none">
                {i + 1}
              </span>
              <span className="label text-muted-foreground group-hover:text-brand-foreground/70 transition-colors">
                {step.duration}
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-medium tracking-[-0.04em] mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-brand-foreground/80 transition-colors leading-snug">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
