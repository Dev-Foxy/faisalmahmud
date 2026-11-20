import type { MetadataRoute } from "next";
import { PERSON, SEO } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO.title,
    short_name: PERSON.name,
    description: SEO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0b",
    theme_color: "#0c0c0b",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
