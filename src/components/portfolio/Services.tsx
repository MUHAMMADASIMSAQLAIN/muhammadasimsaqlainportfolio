import { Bot, Workflow, Database, Plug, Mic, Server, MessagesSquare } from "lucide-react";
import { SectionLabel } from "./About";
import { services } from "@/lib/portfolio/data";

const icons = { bot: Bot, workflow: Workflow, database: Database, plug: Plug, mic: Mic, server: Server, messages: MessagesSquare };

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>02 — Services</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          What I <span className="text-gradient">deliver</span>.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <article
                key={s.title}
                className="group relative rounded-2xl glass p-7 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
