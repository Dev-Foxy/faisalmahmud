import { renderOg, OG_SIZE } from "@/lib/og";
import { HOME } from "@/content/site";

export const alt = "Faisal Mahmud — Freelance Web Developer in Bangladesh";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: HOME.hero.kicker,
    title: HOME.hero.headline.join(" ").replace(/\*/g, ""),
  });
}
