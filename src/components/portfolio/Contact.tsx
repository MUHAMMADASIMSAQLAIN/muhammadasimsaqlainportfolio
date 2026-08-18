import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";
import { UPWORK_URL, profile } from "@/lib/portfolio/data";

const contacts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-asim-saqlain",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MUHAMMADASIMSAQLAIN",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-16 shadow-elegant">
          <div className="absolute inset-0 bg-radial-glow opacity-60 -z-10" />

          <SectionLabel>07 — Hire me</SectionLabel>
          <h2 className="mt-6 font-display text-3xl md:text-6xl font-bold tracking-tighter max-w-3xl">
            What can I build for <span className="text-gradient">your business?</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Tell me the manual process you want removed — order handling, support replies, document
            search, voice intake or an internal workflow — and I'll map it to an AI agent,
            automation and backend that runs it.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              Hire Me on Upwork
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold text-foreground hover:bg-surface-elevated transition"
            >
              Email me
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/60 px-5 py-4 hover:border-primary/60 hover:bg-surface-elevated transition"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                  <c.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate font-medium text-foreground">{c.value}</div>
                </div>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-foreground transition"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {profile.location} — working with clients worldwide
          </p>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. AI Automation Engineer.
        </footer>
      </div>
    </section>
  );
}
