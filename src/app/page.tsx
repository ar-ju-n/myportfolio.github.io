import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skiils";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
