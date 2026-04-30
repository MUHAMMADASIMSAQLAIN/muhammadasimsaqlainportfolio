import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "asimsaqlain85@gmail.com",
    href: "mailto:asimsaqlain85@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+92 316 5101890", href: "tel:+923165101890" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-asim-saqlain",
    href: "https://www.linkedin.com/in/muhammad-asim-saqlain-8ab182317",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MUHAMMADASIMSAQLAIN",
    href: "https://github.com/MUHAMMADASIMSAQLAIN",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 shadow-elegant">
          <div className="absolute inset-0 bg-radial-glow opacity-60 -z-10" />

          <SectionLabel>05 — Let's build</SectionLabel>
          <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
            Have a workflow worth <span className="text-gradient">automating?</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I'm taking on new freelance & collaboration projects. Send me a note about your problem
            — I'll reply within 24 hours.
          </p>

          <a
            href="mailto:asimsaqlain85@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            Send me an email
            <ArrowUpRight className="h-5 w-5" />
          </a>

          <div className="mt-12 grid sm:grid-cols-2 gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 px-5 py-4 hover:border-primary/60 hover:bg-surface-elevated transition"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary-glow">
                  <c.icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate font-medium text-foreground">{c.value}</div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary-glow" />
            Based in Islamabad, Pakistan — working worldwide
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Asim Saqlain. Built with care.
        </footer>
      </div>
    </section>
  );
}
