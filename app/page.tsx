import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Process from "@/components/home/Process";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-28 md:gap-y-44 pb-28 md:pb-44">
      <div>
        <Hero />
        <Marquee />
      </div>
      <Projects />
      <Services />
      <About />
      <Process />
    </main>
  );
}
