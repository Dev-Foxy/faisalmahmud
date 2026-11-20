import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Cursor from "@/components/shared/Cursor";
import { SEO, PERSON } from "@/content/site";
import { SITE_URL, siteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/shared/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: `%s | ${SEO.siteName}` },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: SEO.siteName,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: SEO.twitter || undefined,
    site: SEO.twitter || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(SEO.googleVerification ? { verification: { google: SEO.googleVerification } } : {}),
  other: {
    "geo.region": "BD-13",
    "geo.placename": PERSON.location,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased",
          geistSans.variable,
          geistMono.variable,
          instrumentSerif.variable,
        )}
      >
        <JsonLd data={siteJsonLd()} />
        <ThemeProvider>
          <SmoothScroll />
          <Cursor />
          <div className="grain hidden md:block" aria-hidden />
          <Navbar />
          <div className="relative w-full overflow-x-clip bg-background text-foreground">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
