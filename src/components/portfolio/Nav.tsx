import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { UPWORK_URL } from "@/lib/portfolio/data";
import { handleExternalClick } from "@/lib/portfolio/links";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-3 transition-all ${
            scrolled || open ? "glass shadow-elegant" : ""
          }`}
        >
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-display font-bold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground text-sm">
              MA
            </span>
            <span className="hidden sm:inline text-foreground">Muhammad Asim Saqlain</span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalClick}
              className="hidden sm:inline-flex rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Hire Me on Upwork
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass text-foreground"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-3xl glass shadow-elegant p-4">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base text-foreground/90 hover:bg-surface-elevated transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  setOpen(false);
                  handleExternalClick(e);
                }}
                className="mt-2 text-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Hire Me on Upwork
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
