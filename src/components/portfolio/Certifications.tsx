import { useState } from "react";
import { FileText, X, ExternalLink } from "lucide-react";
import { SectionLabel } from "./About";
import certCisco from "@/assets/cert-cisco.jpg";
import certPrompt from "@/assets/cert-prompt.jpg";
import certCyber from "@/assets/cert-cybersecurity.jpg";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  type: "image" | "pdf";
  src: string;
  thumb?: string;
};

const certs: Cert[] = [
  {
    title: "CISCO Certified Network Associate (CCNA)",
    issuer: "Cisco / Technologixs",
    date: "Sep 2024",
    type: "image",
    src: certCisco,
  },
  {
    title: "Prompt Engineering with ChatGPT & DeepSeek",
    issuer: "Udemy",
    date: "Sept 2025",
    type: "image",
    src: certPrompt,
  },
  {
    title: "Cyber Security — Summer Short Course",
    issuer: "PMAS Arid Agriculture University (UIIT)",
    date: "2024",
    type: "image",
    src: certCyber,
  },
  {
    title: "Data Analytics & Business Intelligence",
    issuer: "DigiSkills.pk (DSTP 3.0)",
    date: "Dec 2025",
    type: "pdf",
    src: "/certs/Business_Intelligence_Certificate.pdf",
  },
  {
    title: "Freelancing",
    issuer: "DigiSkills.pk",
    date: "Dec 2025",
    type: "pdf",
    src: "/certs/Freelancing_Certificate.pdf",
  },
];

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="py-28 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>06 — Credentials</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Verified <span className="text-gradient">certifications</span>.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <button
              key={c.title}
              onClick={() => setActive(c)}
              className="group relative text-left rounded-2xl glass overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                {c.type === "image" ? (
                  <img
                    src={c.src}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center bg-gradient-to-br from-surface to-surface-elevated">
                    <FileText className="h-14 w-14 text-primary-glow" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-primary-glow">{c.date}</div>
                <h3 className="mt-1.5 font-display font-semibold leading-snug text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/85 backdrop-blur-md p-4 md:p-10 animate-in fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] glass rounded-2xl overflow-hidden shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="min-w-0">
                <div className="font-display font-semibold truncate">{active.title}</div>
                <div className="text-xs text-muted-foreground">
                  {active.issuer} · {active.date}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={active.src}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-secondary hover:bg-surface-elevated transition"
                  aria-label="Open"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-secondary hover:bg-surface-elevated transition"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="bg-background h-[75vh] overflow-auto">
              {active.type === "image" ? (
                <img src={active.src} alt={active.title} className="w-full h-full object-contain" />
              ) : (
                <iframe src={active.src} title={active.title} className="w-full h-full" />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
