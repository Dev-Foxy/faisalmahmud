import React from "react";
import { MaskLines, FadeUp } from "@/components/shared/motion";
import { accentLines } from "@/components/shared/Accent";

/** Big title block used at the top of inner pages. */
export default function PageHeader({
  eyebrow,
  headline,
  intro,
  aside,
}: {
  eyebrow: string;
  headline: string[];
  intro?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className="container-custom pt-32 md:pt-44 pb-16 md:pb-24">
      {/* The eyebrow sits inside the H1 so search engines read it as part of the page's main heading */}
      <h1 className="text-[clamp(3rem,11vw,10.5rem)] font-medium leading-[0.88] tracking-[-0.055em] break-words">
        <FadeUp inline>
          <span className="label text-muted-foreground font-normal flex items-center gap-3 mb-8 leading-normal">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            {eyebrow}
          </span>
        </FadeUp>
        <MaskLines lines={accentLines(headline)} />
      </h1>
      {(intro || aside) && (
        <FadeUp delay={0.3} className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          {intro && <div className="max-w-xl text-lg md:text-xl text-muted-foreground leading-snug">{intro}</div>}
          {aside}
        </FadeUp>
      )}
    </header>
  );
}
