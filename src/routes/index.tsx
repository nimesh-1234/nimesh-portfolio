import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimesh Dilshan — Full-Stack Developer & Software Engineer" },
      { name: "description", content: "Portfolio of Nimesh Dilshan — Full-Stack Developer building scalable web apps and AI-powered tools with React, Laravel, Node.js, and LangChain." },
      { property: "og:title", content: "Nimesh Dilshan — Full-Stack Developer" },
      { property: "og:description", content: "Full-Stack Developer & Software Engineer crafting modern web experiences and exploring emerging AI technologies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
