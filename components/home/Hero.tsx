"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "@/lib/hero.png";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax: The image moves slower than the scroll
  // We map 0-1000px of scroll to 0 to -150px of movement
  const imgY = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7 z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs uppercase tracking-[0.5em] font-bold text-neutral-500 mb-8 block">
                Based in Dhaka • Available for work
              </span>

              <h1 className="text-[14vw] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-10 pointer-events-none">
                FAISAL <br />
                <span className="text-neutral-300 dark:text-neutral-800 italic transition-colors">
                  MAHMUD.
                </span>
              </h1>

              <div className="max-w-lg mb-12">
                <TypeAnimation
                  sequence={[
                    "Building scalable web applications.",
                    2000,
                    "Designing immersive user experiences.",
                    2000,
                    "Creating intelligent AI agents.",
                    2000,
                  ]}
                  className="text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-400"
                  repeat={Infinity}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Portrait Image Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              /* The Outer Frame: Fixed Aspect Ratio */
              className="relative aspect-3/4 w-full max-w-112.5 mx-auto lg:ml-auto rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl"
            >
              {/* The Inner Container: Taller than the frame to allow movement without gaps */}
              <motion.div
                style={{ y: imgY }}
                className="relative w-full h-[120%] -top-[10%]"
              >
                <Image
                  src={HeroImage}
                  alt="Faisal Mahmud Portrait"
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Gradient Overlay for that Premium Depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Ambient Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(120,119,198,0.15)_0%,transparent_70%)] hidden dark:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
