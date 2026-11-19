"use client";
import React from "react";
import { MaskLines, FadeUp } from "@/components/shared/motion";

export default function SectionHeading({
  index,
  label,
  title,
  aside,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="mb-12 md:mb-20">
      <FadeUp className="flex items-center justify-between border-t border-line pt-5 mb-10 md:mb-14">
        <span className="label text-muted-foreground">
          <span className="text-brand">({index})</span>&nbsp;&nbsp;{label}
        </span>
        {aside}
      </FadeUp>
      <h2 className="max-w-5xl text-[clamp(2.5rem,6.5vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
        <MaskLines onView lines={[title]} />
      </h2>
    </div>
  );
}
