"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/content";
import { EASE } from "@/components/shared/motion";

export default function Services() {
  return (
    <section id="services" className="container-custom scroll-mt-24">
      <SectionHeading
        index="02"
        label="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="font-serif italic font-normal tracking-[-0.02em]">
              launch
            </span>
          </>
        }
      />

      <ul className="border-b border-line">
        {SERVICES.map((service, i) => (
          <motion.li
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}
            className="group relative border-t border-line overflow-hidden"
          >
            {/* Fill that wipes in on hover */}
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-700 ease-expo group-hover:scale-y-100" />

            <div className="relative grid grid-cols-12 gap-4 py-8 md:py-10 px-0 group-hover:px-4 md:group-hover:px-8 transition-[padding,color] duration-700 ease-expo group-hover:text-background">
              <span className="col-span-2 md:col-span-1 label pt-2 text-muted-foreground group-hover:text-brand transition-colors">
                0{i + 1}
              </span>
              <h3 className="col-span-10 md:col-span-5 text-3xl md:text-5xl font-medium tracking-[-0.04em] leading-none">
                {service.title}
              </h3>
              <div className="col-span-12 md:col-span-6 md:pl-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <p className="text-muted-foreground group-hover:text-background/70 transition-colors leading-snug max-w-md">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[14rem]">
                  {service.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line group-hover:border-background/20 px-3 py-1 text-xs transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
