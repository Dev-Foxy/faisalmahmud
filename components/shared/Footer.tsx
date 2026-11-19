"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowUp, Copy, Check } from "lucide-react";
import { PERSONAL_INFO, SOCIALS } from "@/data/content";
import { MaskLines, Magnetic, RollText } from "@/components/shared/motion";
import LocalTime from "@/components/shared/LocalTime";

export default function Footer() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const showCta = pathname !== "/contact";
  const socials = SOCIALS.filter((s) => s.href);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {showCta && (
        <div className="container-custom pt-24 md:pt-36 pb-16 md:pb-24">
          <div className="flex items-center gap-3 label opacity-60 mb-8 md:mb-12">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Have a project in mind?
          </div>

          <div className="relative">
            <h2 className="text-[clamp(3.5rem,13vw,13rem)] font-medium leading-[0.86] tracking-[-0.05em]">
              <MaskLines
                onView
                lines={[
                  "Let’s work",
                  <span key="t" className="font-serif italic font-normal tracking-[-0.02em] text-brand">
                    together
                  </span>,
                ]}
              />
            </h2>

            <div className="mt-12 md:mt-0 md:absolute md:right-0 md:bottom-4">
              <Magnetic strength={0.4}>
                <Link
                  href="/contact"
                  data-cursor="Say hi"
                  className="group grid h-36 w-36 md:h-48 md:w-48 place-items-center rounded-full bg-brand text-brand-foreground text-base md:text-lg font-medium transition-transform duration-500 ease-expo hover:scale-105"
                >
                  <span className="flex items-center gap-1.5">
                    Start a project
                    <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </Link>
              </Magnetic>
            </div>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group text-xl md:text-3xl tracking-tight"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                {PERSONAL_INFO.email}
              </span>
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-background/20 px-4 py-2 label hover:bg-background hover:text-foreground transition-colors"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      )}

      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-background/15 py-12">
          <div>
            <p className="label opacity-50 mb-4">Local time</p>
            <LocalTime className="text-sm" />
            <p className="text-sm opacity-70 mt-1">{PERSONAL_INFO.location}</p>
          </div>
          <div>
            <p className="label opacity-50 mb-4">Menu</p>
            <ul className="space-y-1.5 text-sm">
              {[
                ["Home", "/"],
                ["Work", "/projects"],
                ["About", "/about"],
                ["Journal", "/blog"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="group opacity-80 hover:opacity-100">
                    <RollText>{name}</RollText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label opacity-50 mb-4">Socials</p>
            <ul className="space-y-1.5 text-sm">
              {socials.length ? (
                socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 opacity-80 hover:opacity-100"
                    >
                      <RollText>{s.label}</RollText>
                      <ArrowUpRight size={12} />
                    </a>
                  </li>
                ))
              ) : (
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="group opacity-80 hover:opacity-100">
                    <RollText>Email</RollText>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-12 w-12 place-items-center rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-colors"
            >
              <ArrowUp size={16} />
            </button>
            <p className="label opacity-50">© {new Date().getFullYear()} Faisal Mahmud</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
