import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Faq from "@/components/home/Faq";
import { getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="flex flex-col gap-y-28 md:gap-y-44 pb-28 md:pb-44">
      <div>
        <Hero />
        <Marquee />
      </div>
      <Projects projects={featured.length ? featured : projects} total={projects.length} />
      <Services />
      <About />
      <Process />
      <Faq />
    </main>
  );
}
