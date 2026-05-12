"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Works", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-100 transition-all duration-300 px-6 sm:px-12 lg:px-20 xl:px-24",
        scrolled ? "md:py-4" : "md:py-8",
      )}
    >
      <nav
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border",
          scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-lg"
            : "bg-transparent border-transparent",
        )}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter group">
          FM
          <span className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            .
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
                >
                  <Moon size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
                >
                  <Sun size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-white dark:bg-neutral-950 border border-black/5 dark:border-white/10 rounded-[2rem] shadow-2xl md:hidden z-50"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-2xl font-bold tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mt-4 px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                Switch Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
