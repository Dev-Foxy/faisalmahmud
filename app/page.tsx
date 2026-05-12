import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 md:gap-y-40 pb-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}
