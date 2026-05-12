import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/shared/Navbar";

// Premium Fonts
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faisal Mahmud | Fullstack Developer & Designer",
  description:
    "A premium portfolio showcasing high-end web development, AI, and design work.",
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
          "min-h-screen antialiased selection:bg-neutral-200 selection:text-black dark:selection:bg-neutral-800 dark:selection:text-white",
          geistSans.variable,
          geistMono.variable,
          jetbrainsMono.variable,
          "font-sans", // Default to Sans, use font-mono where needed
        )}
      >
        <ThemeProvider>
          {/* Main Background Wrapper */}
          <Navbar />
          <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-black transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white">
            {/* Ambient Background Effect - Professional Touch */}
            <div className="fixed inset-0 z-[-1] overflow-hidden">
              {/* Light Mode Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)] dark:hidden" />

              {/* Dark Mode Gradient & Mesh */}
              <div className="hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:block" />
              <div
                className="hidden absolute inset-0 bg-[matrix(1,0,0,1,0,0)] opacity-[0.03] dark:block"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Page Content */}
            <div className="relative z-10 px-6 sm:px-12 lg:px-20 xl:px-24">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
