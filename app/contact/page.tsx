import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Contact from "@/components/home/Contact";
import LocalTime from "@/components/shared/LocalTime";
import { CONTACT, PERSON, PAGE_SEO } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = pageMetadata({ ...PAGE_SEO.contact, path: "/contact" });

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <PageHeader
        eyebrow={CONTACT.eyebrow}
        headline={CONTACT.headline}
        aside={
          <div className="md:text-right">
            <p className="label text-muted-foreground mb-2">Local time · {PERSON.location}</p>
            <LocalTime className="text-2xl font-medium tracking-tight" />
          </div>
        }
      />
      <div className="border-t border-line">
        <Contact />
      </div>
    </main>
  );
}
