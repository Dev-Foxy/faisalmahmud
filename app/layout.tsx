import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Cursor from "@/components/shared/Cursor";

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
  title: "Faisal Mahmud — Fullstack Developer & Designer",
  description:
    "I design and build fast, distinctive websites, web apps and AI-powered products for brands that want to stand out. Based in Dhaka, working worldwide.",
  openGraph: {
    title: "Faisal Mahmud — Fullstack Developer & Designer",
    description:
      "Design-led websites, web apps and AI products that grow brands.",
    type: "website",
  },
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
        <ThemeProvider>
          <SmoothScroll />
          <Cursor />
          <div className="grain" aria-hidden />
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
