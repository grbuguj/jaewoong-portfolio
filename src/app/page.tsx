import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import GraphViewWrapper from '@/components/GraphViewWrapper';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <GraphViewWrapper />
      </main>
      <footer className="py-8 text-center text-[12px] text-slate-400 font-mono border-t border-slate-100">
        © 2026 Kim Jae Ung · Built with Next.js
      </footer>
    </>
  );
}
