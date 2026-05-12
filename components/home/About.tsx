"use client";
import { motion } from "framer-motion";
import PageTitle from "@/components/shared/PageTitle";

export default function About() {
  return (
    <section id="about" className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <PageTitle title="The Creative Mind" />
          <h2 className="text-4xl md:text-5xl font-bold mt-10 mb-8 tracking-tight">
            Engineering digital solutions with a human-centric approach.
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-10">
            Based in Bangladesh, I specialize in the Next.js ecosystem. Whether
            it's an AI-powered educational platform or a complex e-commerce
            engine, I focus on performance and "vibey" aesthetics.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-6xl font-bold">20+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-6xl font-bold">05+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                Years of Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
