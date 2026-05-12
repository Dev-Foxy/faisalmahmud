"use client";
import React from "react";
import { motion } from "framer-motion";
import Contact from "@/components/home/Contact"; // Adjust path to where your component is saved
import { ArrowDown } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* 1. Page Header Section */}
      <section className="relative h-[60vh] flex flex-col justify-end pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6 block">
                Available for worldwide collaboration
              </span>
              <h1 className="text-6xl md:text-[10vw] font-bold tracking-tighter leading-[0.85] uppercase">
                Let&apos;s build <br />
                <span className="italic font-light text-neutral-300 dark:text-neutral-800">
                  Together.
                </span>
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-start lg:items-end text-left lg:text-right"
            >
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">
                Local Time
              </p>
              <p className="text-2xl font-medium mb-10">
                {new Date().toLocaleTimeString("en-US", {
                  timeZone: "Asia/Dhaka",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}{" "}
                GMT+6
              </p>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-4 rounded-full border border-neutral-100 dark:border-neutral-900"
              >
                <ArrowDown size={20} className="text-neutral-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Interactive Contact Component */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Contact />
      </motion.div>

      {/* 3. Footer Accent / Location Section */}
      <footer className="container-custom py-20 border-t border-neutral-100 dark:border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
              Office
            </h4>
            <p className="text-lg">Dhaka, Bangladesh</p>
            <p className="text-neutral-500">Remote Worldwide</p>
          </div>

          <div className="max-w-xs">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
              The Philosophy
            </h4>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Every pixel serves a purpose. Every line of code tells a story. I
              believe in creating digital experiences that are as functional as
              they are beautiful.
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-300">
              © 2026 Faisal Mahmud
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
