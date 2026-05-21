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
      {/* 1. The Fixed Header */}
      <Navbar />

      {/* 2. The Hero Section (Landing) */}
      <Hero />

      <About />

      <Skills />

      {/* 3. Education & Experience (Academic Journey) */}
      <Education />

      {/* 4. Projects (Your Work) */}
      <Projects />

      {/* 5. Contact & Footer (The Finish Line) */}
      <Contact />

      <Footer />
    </main>
  );
}
