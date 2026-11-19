"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { RollText, EASE } from "@/components/shared/motion";

const navLinks = [
  { name: "Work", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/blog" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const pathname = usePathname();


  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200);
    setScrolled(y > 40);
  });

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="fixed inset-x-0 top-0 z-[90]"
      >
        <div
          className={cn(
            "transition-[background-color,backdrop-filter,border-color] duration-500 border-b",
            scrolled && !open
              ? "bg-background/75 backdrop-blur-xl border-line"
              : "bg-transparent border-transparent",
          )}
        >
          <nav className="container-custom flex h-16 md:h-20 items-center justify-between">
            <Link
              href="/"
              className="group relative z-10 flex items-center gap-2 text-[15px] font-medium tracking-tight"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand transition-transform duration-500 group-hover:scale-150" />
              <RollText>Faisal Mahmud</RollText>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "group text-[15px] tracking-tight transition-colors",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <RollText>{link.name}</RollText>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-line hover:bg-surface transition-colors"
              >
                <span className="block h-4 w-4 rounded-full border border-foreground bg-[linear-gradient(90deg,var(--foreground)_50%,transparent_50%)] transition-transform duration-700 ease-expo dark:rotate-180" />
              </button>

              <Link
                href="/contact"
                className="group hidden sm:inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <RollText>Let&apos;s talk</RollText>
              </Link>

              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="relative z-10 md:hidden grid h-10 w-10 place-items-center rounded-full border border-line"
              >
                <span className="relative block h-2.5 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-500 ease-expo",
                      open && "translate-y-[5px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform duration-500 ease-expo",
                      open && "-translate-y-[5px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[80] flex flex-col justify-between bg-background pt-28 pb-10 md:hidden"
          >
            <div className="container-custom flex flex-col">
              {[{ name: "Home", href: "/" }, ...navLinks, { name: "Contact", href: "/contact" }].map(
                (link, i) => (
                  <div key={link.name} className="overflow-hidden border-b border-line">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-3 text-5xl font-medium tracking-[-0.04em]"
                      >
                        {link.name}
                        <span className="label text-muted-foreground">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ),
              )}
            </div>
            <div className="container-custom label text-muted-foreground">
              Dhaka, Bangladesh — Working worldwide
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
