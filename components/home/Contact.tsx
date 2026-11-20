"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { PERSON, CONTACT, SOCIALS } from "@/content/site";
import { accentLines } from "@/components/shared/Accent";
import { MaskLines, FadeUp, EASE } from "@/components/shared/motion";

const fieldClass =
  "w-full bg-transparent border-b border-line py-4 text-lg outline-none focus:border-foreground transition-colors duration-500 placeholder:text-muted-foreground/50";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const socials = SOCIALS.filter((s) => s.href);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="container-custom py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium tracking-[-0.05em] leading-[0.92] mb-8">
            <MaskLines onView lines={accentLines(CONTACT.formTitle)} />
          </h2>
          <FadeUp>
            <p className="text-lg text-muted-foreground max-w-sm mb-12">{CONTACT.formIntro}</p>

            <a
              href={`mailto:${PERSON.email}`}
              className="group inline-flex max-w-full items-center gap-4 text-lg md:text-2xl tracking-tight"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line transition-colors duration-500 group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground">
                <Mail size={20} />
              </span>
              <span className="min-w-0 break-all">{PERSON.email}</span>
            </a>

            {socials.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </FadeUp>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: EASE }}
          className="rounded-3xl border border-line bg-surface/50 p-6 sm:p-10 md:p-12"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            {[
              { name: "name", label: "Your name", type: "text", placeholder: "Jane Doe" },
              { name: "email", label: "Email address", type: "email", placeholder: "jane@company.com" },
            ].map((f) => (
              <label key={f.name} className="block group">
                <span className="label text-muted-foreground group-focus-within:text-foreground transition-colors">
                  {f.label}
                </span>
                <input name={f.name} required type={f.type} placeholder={f.placeholder} className={fieldClass} />
              </label>
            ))}
            <label className="block group">
              <span className="label text-muted-foreground group-focus-within:text-foreground transition-colors">
                About your project
              </span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Goals, timeline, budget…"
                className={`${fieldClass} resize-none`}
              />
            </label>

            <button
              disabled={status === "loading" || status === "success"}
              className="group relative w-full h-16 rounded-full bg-foreground text-background font-medium overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-expo group-hover:scale-x-100 group-disabled:scale-x-0" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={status}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 flex items-center justify-center gap-2 group-hover:text-brand-foreground transition-colors"
                >
                  {status === "loading" ? (
                    <>Sending <Loader2 size={16} className="animate-spin" /></>
                  ) : status === "success" ? (
                    <>Message sent <CheckCircle2 size={16} /></>
                  ) : (
                    <>Send enquiry <ArrowUpRight size={16} /></>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-destructive">
                Something went wrong — please email me directly at {PERSON.email}.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
