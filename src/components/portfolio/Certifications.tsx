import { useState } from "react";
import { X, BadgeCheck } from "lucide-react";
import { SectionLabel } from "./About";
import { certifications } from "@/lib/portfolio/data";
import certPrompt from "@/assets/cert-prompt.jpg";
import certCisco from "@/assets/cert-cisco.jpg";
import certCyber from "@/assets/cert-cybersecurity.jpg";
import certBI from "@/assets/cert-bi.jpg";
import certFreelancing from "@/assets/cert-freelancing.jpg";

type Cert = { title: string; issuer: string; date: string; src: string };

const gallery: Cert[] = [
  {
    title: "Prompt Engineering with ChatGPT & Deepseek",
    issuer: "Udemy",
    date: "Sept 2025",
    src: certPrompt,
  },
  {
    title: "Data Analytics & Business Intelligence",
    issuer: "DigiSkills.pk",
    date: "Dec 2025",
    src: certBI,
  },
  { title: "Freelancing", issuer: "DigiSkills.pk", date: "Dec 2025", src: certFreelancing },
  {
    title: "CISCO Certified Network Associate (CCNA)",
    issuer: "Cisco / Technologixs",
    date: "Sep 2024",
    src: certCisco,
  },
  {
    title: "Cyber Security — Summer Short Course",
    issuer: "PMAS Arid Agriculture University (UIIT)",
    date: "2024",
    src: certCyber,
  },
];

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>06 — Certifications</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Verified <span className="text-gradient">credentials</span>.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {certifications.map((c) => (
            <article key={c.credentialId} className="rounded-2xl glass p-6">
              <div className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-primary">
                    {c.issuer} · {c.date}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground break-all">
                    Credential ID: {c.credentialId}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-14 font-display text-xl font-semibold">Certificate gallery</h3>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((c) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setActive(c)}
              aria-label={`View certificate: ${c.title}`}
              className="group text-left rounded-2xl glass overflow-hidden hover:shadow-glow transition"
            >
              <img
                src={c.src}
                alt={`${c.title} certificate issued by ${c.issuer}`}
                loading="lazy"
                className="h-40 w-full object-cover object-top border-b border-border"
              />
              <div className="p-4">
                <div className="font-medium text-sm leading-snug">{c.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {c.issuer} · {c.date}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl glass p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close certificate viewer"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface-elevated text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={active.src}
              alt={`${active.title} certificate issued by ${active.issuer}`}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
