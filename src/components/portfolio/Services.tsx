import { Bot, Brain, Workflow, BarChart3 } from "lucide-react";
import { SectionLabel } from "./About";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    desc: "Intelligent bots that handle customer support, scheduling, and complex tasks without human intervention.",
  },
  {
    icon: Brain,
    title: "RAG Systems",
    desc: "Chat with your data — internal search engines that answer questions from your company documents instantly.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "n8n + Python pipelines that connect your apps and automate repetitive processes, saving hundreds of hours.",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    desc: "Turn raw numbers into predictive models and clear dashboards so you can make data-driven decisions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>02 — Services</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          How I can <span className="text-gradient">help you</span>.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl glass p-7 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
