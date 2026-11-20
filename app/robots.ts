import type { MetadataRoute } from "next";
import { absolute, SITE_URL } from "@/lib/seo";

/** /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absolute("/sitemap.xml"),
    host: SITE_URL,
  };
}
