// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./certifications";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}
