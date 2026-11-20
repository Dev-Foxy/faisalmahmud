/**
 * Generates the 1200×630 preview image shown when a page is shared
 * (WhatsApp, LinkedIn, Facebook, X, Slack…) and in some search results.
 */
import { ImageResponse } from "next/og";
import { PERSON } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };

export function renderOg({
  eyebrow,
  title,
  footer = `${PERSON.name} · Freelance Web Developer · ${PERSON.location}`,
  bg = "#0c0c0b",
  ink = "#efede8",
}: {
  eyebrow: string;
  title: string;
  footer?: string;
  bg?: string;
  ink?: string;
}) {
  const size = title.length > 48 ? 64 : title.length > 28 ? 84 : 110;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: bg,
          color: ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, opacity: 0.75 }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#ff5a2b" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: size, lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 600, maxWidth: 1050 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.6 }}>
          <span>{footer}</span>
          <span style={{ color: "#ff5a2b", opacity: 1 }}>Available worldwide →</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
