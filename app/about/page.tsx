import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SkillSection from "@/components/home/Skills";
import { FadeUp, MaskLines } from "@/components/shared/motion";
import { Accent, accentLines } from "@/components/shared/Accent";
import { ABOUT, PAGE_SEO } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = pageMetadata({ ...PAGE_SEO.about, path: "/about" });

export default function AboutPage() {
  return (
    <main className="pb-28 md:pb-40">
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <PageHeader
        eyebrow={ABOUT.eyebrow}
        headline={ABOUT.headline}
      />

      {/* Intro + facts */}
      <section className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <FadeUp className="lg:col-span-7">
          <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.03em]">
            <Accent text={ABOUT.intro} />
          </p>
          <p className="mt-6 text-lg text-muted-foreground">{ABOUT.tagline}</p>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {ABOUT.facts.map((f) => (
              <div key={f.label} className="bg-background p-5 md:p-6">
                <dt className="label text-muted-foreground mb-3">{f.label}</dt>
                <dd className="text-2xl md:text-3xl font-medium tracking-[-0.03em]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </section>

      {/* Expertise */}
      <section className="container-custom mt-24 md:mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ABOUT.expertise.map((e, i) => (
            <FadeUp
              key={e.title}
              delay={i * 0.08}
              className="rounded-2xl border border-line bg-surface/50 p-6 md:p-8 min-h-[14rem] flex flex-col justify-between"
            >
              <span className="font-serif italic text-5xl text-brand leading-none">{i + 1}</span>
              <div className="mt-10">
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.04em] mb-3">{e.title}</h3>
                <p className="text-muted-foreground leading-snug">{e.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Skills */}
      <div className="mt-24 md:mt-40">
        <SkillSection />
      </div>

      {/* Philosophy */}
      <section className="container-custom mt-24 md:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-line pt-6">
        <h2 className="lg:col-span-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          <MaskLines onView lines={accentLines(ABOUT.philosophyTitle.split("\n"))} />
        </h2>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg md:text-2xl leading-snug tracking-tight text-muted-foreground">
          {ABOUT.philosophy.map((p, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p>
                <Accent text={p} />
              </p>
            </FadeUp>
          ))}
          <FadeUp>
            <Link
              href="/contact"
              className="group mt-4 inline-flex h-14 items-center gap-2 rounded-full bg-brand px-7 text-base font-medium text-brand-foreground"
            >
              Work with me
              <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
