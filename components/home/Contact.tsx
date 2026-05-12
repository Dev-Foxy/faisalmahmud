"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";
import PageTitle from "@/components/shared/PageTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container-custom py-20 border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Call to Action & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PageTitle title="Let's Connect" subtitle="04 / Contact" />

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-10 mb-8 leading-[0.9]">
            Ready to bring <br />
            <span className="text-neutral-300 dark:text-neutral-800 italic">
              your vision
            </span>{" "}
            to life?
          </h2>

          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-sm mb-12">
            Currently accepting new projects and technical consultations for
            2026.
          </p>

          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-4 text-2xl font-medium hover:text-neutral-500 transition-colors"
            >
              <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              {PERSONAL_INFO.email}
            </a>

            <div className="flex gap-4 mt-4">
              {[
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com/...",
                },
                { icon: <Twitter size={20} />, href: "https://x.com/..." },
                { icon: <Github size={20} />, href: "https://github.com/..." },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-4 rounded-2xl border border-black/5 dark:border-white/10 hover:border-black dark:hover:border-white transition-all text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-50 dark:bg-neutral-900/50 p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Faisal Mahmud"
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 ml-1">
                Project Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              />
            </div>

            <button className="group relative w-full bg-black dark:bg-white text-white dark:text-black py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Inquiry <ArrowUpRight size={16} />
              </span>
              <motion.div
                className="absolute inset-0 bg-neutral-800 dark:bg-neutral-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
