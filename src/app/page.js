import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0b0e14] min-h-screen">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
