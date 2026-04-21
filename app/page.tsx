import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />

      <footer className="w-full py-10 mt-auto flex justify-center">
        <p className="text-[9px] sm:text-[10px] text-zinc-600 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Zaki Adi Nugroho. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
