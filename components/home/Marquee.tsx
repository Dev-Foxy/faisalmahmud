"use client";
import { VelocityMarquee } from "@/components/shared/motion";

const ITEMS = [
  "Web Design",
  "Development",
  "E-commerce",
  "AI Agents",
  "Web Apps",
  "Motion",
  "Branding",
];

export default function Marquee() {
  return (
    <section aria-label="Services" className="border-y border-line py-6 md:py-8">
      <VelocityMarquee baseVelocity={-1.5}>
        {ITEMS.map((item) => (
          <span
            key={item}
            className="flex items-center text-[clamp(2rem,5vw,4.5rem)] font-medium tracking-[-0.04em] leading-none"
          >
            <span className="px-6 md:px-10">{item}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-[0.45em] w-[0.45em] text-brand"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
              />
            </svg>
          </span>
        ))}
      </VelocityMarquee>
    </section>
  );
}
