"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroImage from "@/lib/hero.png";
import { PERSON, HOME } from "@/content/site";
import { Accent, accentLines } from "@/components/shared/Accent";
import { MaskLines, Magnetic, RollText, EASE } from "@/components/shared/motion";
import LocalTime from "@/components/shared/LocalTime";

export default function Hero() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], [0, 120]);
  const titleY = useTransform(scrollY, [0, 800], [0, -80]);

  return (
    <section className="relative min-h-[100svh] flex flex-col pt-28 md:pt-36 pb-8">
      <div className="container-custom flex flex-1 flex-col">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14"
        >
          {PERSON.available ? (
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {PERSON.availability}
            </span>
          ) : (
            <span />
          )}
          <span className="label text-muted-foreground hidden sm:block">
            {PERSON.role}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{ y: titleY }}
          className="text-[clamp(3.25rem,11.5vw,12.5rem)] font-medium leading-[0.86] tracking-[-0.055em]"
        >
          {/* The kicker is part of the H1 so Google reads "Freelance web developer in Bangladesh" as the main heading */}
          <span className="block label text-muted-foreground font-normal tracking-[0.14em] mb-5 md:mb-7">
            {PERSON.name} — {HOME.hero.kicker}
          </span>
          <MaskLines delay={0.1} lines={accentLines(HOME.hero.headline)} />
        </motion.h1>

        {/* Bottom row */}
        <div className="mt-auto pt-14 md:pt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.7 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <p className="text-lg md:text-xl leading-snug tracking-tight text-muted-foreground max-w-md">
              <Accent text={HOME.hero.intro} />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  href={HOME.hero.primaryCta.href}
                  className="group inline-flex h-14 items-center gap-2 rounded-full bg-brand px-7 text-base font-medium text-brand-foreground"
                >
                  <RollText>{HOME.hero.primaryCta.label}</RollText>
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </Magnetic>
              <Link
                href={HOME.hero.secondaryCta.href}
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-line px-7 text-base hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <RollText>{HOME.hero.secondaryCta.label}</RollText>
              </Link>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
            className="md:col-span-4 md:col-start-7 lg:col-span-3 lg:col-start-7 relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-surface"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-x-0 -top-[12%] h-[124%]">
              <Image
                src={HeroImage}
                alt={`Portrait of ${PERSON.name}`}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 90vw, 25vw"
                className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-1000"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hidden md:flex md:col-span-2 md:col-start-11 lg:col-span-2 lg:col-start-11 flex-col items-end gap-6 text-right"
          >
            <div>
              <p className="label text-muted-foreground mb-1">Based in</p>
              <p className="text-sm">{PERSON.location}</p>
              <LocalTime className="text-sm text-muted-foreground" />
            </div>
            <a
              href="#work"
              aria-label="Scroll to work"
              className="grid h-12 w-12 place-items-center rounded-full border border-line hover:bg-foreground hover:text-background transition-colors"
            >
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={16} />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
