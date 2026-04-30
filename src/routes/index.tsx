import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Asim Saqlain — Full-Stack AI Engineer" },
      {
        name: "description",
        content:
          "Full-Stack AI Engineer building custom AI agents, RAG systems and n8n automations. Python, LangChain, MLOps. Available for freelance & full-time work.",
      },
      { property: "og:title", content: "Muhammad Asim Saqlain — Full-Stack AI Engineer" },
      {
        property: "og:description",
        content:
          "Custom AI agents, RAG systems, and workflow automation that turn manual chaos into intelligent 24/7 systems.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
