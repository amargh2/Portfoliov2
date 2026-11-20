import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Experience from "./experience";
import Certifications from "./certifications";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
