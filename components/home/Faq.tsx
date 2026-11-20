import SectionHeading from "@/components/shared/SectionHeading";
import { Accent } from "@/components/shared/Accent";
import { FadeUp } from "@/components/shared/motion";
import JsonLd from "@/components/shared/JsonLd";
import { FAQ, FAQ_TITLE } from "@/content/site";
import { faqJsonLd } from "@/lib/seo";

/** FAQ accordion — native <details>, so answers stay in the HTML for search engines. */
export default function Faq() {
  return (
    <section id="faq" className="container-custom scroll-mt-24">
      <JsonLd data={faqJsonLd()} />
      <SectionHeading index="05" label="FAQ" title={<Accent text={FAQ_TITLE} color={false} />} />

      <div className="border-b border-line">
        {FAQ.map(({ q, a }, i) => (
          <FadeUp key={q} delay={i * 0.03} y={16}>
            <details className="group border-t border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 md:py-8 [&::-webkit-details-marker]:hidden">
                <h3 className="text-xl md:text-3xl font-medium tracking-[-0.03em] leading-tight">{q}</h3>
                <span
                  aria-hidden
                  className="relative mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-colors group-open:bg-brand group-open:border-brand group-open:text-brand-foreground"
                >
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:scale-0" />
                </span>
              </summary>
              <p className="max-w-3xl pb-8 -mt-1 text-muted-foreground text-lg leading-relaxed">{a}</p>
            </details>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
