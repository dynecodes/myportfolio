import Image from "next/image";
import Hero from "../component/Hero";
import Navbar from "@/component/Navbar";
import About from "@/component/About";
import Projects from "@/component/Project";
import Experience from "@/component/Experience";
import Contact from "@/component/Contact";


export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
