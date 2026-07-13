import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pipeline } from "@/components/Pipeline";
import { About } from "@/components/About";
import { ResearchInterests } from "@/components/ResearchInterests";
import { News } from "@/components/News";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Gallery } from "@/components/Gallery";
import { Timeline } from "@/components/Timeline";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Accessibility: jump straight to content */}
      <a
        href="#pipeline"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-contrast"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Pipeline />
        <About />
        <ResearchInterests />
        <News />
        <Publications />
        <Projects />
        <Gallery />
        <Timeline />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
