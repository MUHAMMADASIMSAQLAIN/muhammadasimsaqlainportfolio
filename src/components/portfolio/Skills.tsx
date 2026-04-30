import { SectionLabel } from "./About";

const groups = [
  {
    title: "Generative AI",
    items: ["LLMs", "RAG", "LangChain", "AI Agents", "NLP", "Generative AI"],
  },
  {
    title: "Development",
    items: ["Python", "API Integration", "Full-Stack AI", "API Deployment", "Computer Vision"],
  },
  {
    title: "Ops & Automation",
    items: ["MLOps", "n8n", "Workflow Optimization", "Business Process Automation"],
  },
  {
    title: "Data & Analytics",
    items: ["Data Science", "Data Mining", "Business Intelligence", "Data Visualization"],
  },
  {
    title: "Networking & Security",
    items: ["CCNA-W", "Cisco Systems", "LAN-WAN", "Network Security", "Cybersecurity"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>03 — Expertise</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          A toolkit built for <span className="text-gradient">real systems</span>.
        </h2>

        <div className="mt-14 space-y-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="grid md:grid-cols-[200px_1fr] gap-6 items-start border-t border-border pt-6"
            >
              <div className="font-display text-lg font-semibold text-foreground">{g.title}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
