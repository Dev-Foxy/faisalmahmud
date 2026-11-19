"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";
import PageTitle from "@/components/shared/PageTitle";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }

    // Reset after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="container-custom py-20 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Call to Action & Socials */}
        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <PageTitle title="Let's Connect" subtitle="04 / Contact" />

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-10 mb-8 leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
              >
                Ready to bring
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-serif font-normal normal-case tracking-tight text-brand italic block"
              >
                your vision
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block"
              >
                to life?
              </motion.span>
            </h2>

            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-sm mb-12">
              Currently accepting new projects and technical consultations for
              2026.
            </p>

            <div className="flex flex-col gap-8">
              <motion.a
                whileHover={{ x: 10 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-4 text-xl md:text-2xl font-medium transition-all"
              >
                <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white pb-1">
                  {PERSONAL_INFO.email}
                </span>
              </motion.a>

              <div className="flex gap-4 mt-4">
                {[
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Github size={20} />, href: "#" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-5 rounded-full border border-black/5 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-neutral-50 dark:bg-neutral-900/50 p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5"
        >
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="space-y-2 group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 ml-1 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                Full Name
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Faisal Mahmud"
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-black dark:focus:border-white transition-all duration-500 placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
              />
            </div>

            <div className="space-y-2 group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 ml-1 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                Email Address
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-black dark:focus:border-white transition-all duration-500 placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
              />
            </div>

            <div className="space-y-2 group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 ml-1 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                Project Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 outline-none focus:border-black dark:focus:border-white transition-all duration-500 resize-none placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
              />
            </div>

            <button
              disabled={status === "loading" || status === "success"}
              className="group relative w-full bg-foreground text-background py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.span
                    key="loading"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    Transmitting <Loader2 size={16} className="animate-spin" />
                  </motion.span>
                ) : status === "success" ? (
                  <motion.span
                    key="success"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    Sent Successfully <CheckCircle2 size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    Send Inquiry{" "}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-brand"
                initial={{ x: "-100%" }}
                whileHover={status === "idle" ? { x: 0 } : {}}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>

            {status === "error" && (
              <p className="text-center text-xs text-red-500 font-mono uppercase tracking-widest">
                Error sending. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
