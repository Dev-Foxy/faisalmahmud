"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollText, FadeUp, RollText } from "@/components/shared/motion";
import { HOME } from "@/content/site";

const STATS = HOME.stats;

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = String(Math.round(v)).padStart(2, "0") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref}>
      {String(to).padStart(2, "0")}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-line pt-5">
        <FadeUp className="lg:col-span-3">
          <span className="label text-muted-foreground">
            <span className="text-brand">(03)</span>&nbsp;&nbsp;About
          </span>
        </FadeUp>

        <div className="lg:col-span-9">
          <ScrollText
            className="text-[clamp(1.75rem,3.6vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em]"
            text={HOME.about}
          />

          <FadeUp className="mt-12">
            <Link
              href="/about"
              className="group inline-flex h-14 items-center gap-2 rounded-full border border-line px-7 hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <RollText>More about me</RollText>
              <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </FadeUp>

          <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08} className="bg-background p-6 md:p-8">
                <p className="text-6xl md:text-7xl font-medium tracking-[-0.05em]">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-6 text-sm text-muted-foreground">{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
