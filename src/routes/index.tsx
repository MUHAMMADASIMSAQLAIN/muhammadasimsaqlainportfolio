import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const TITLE = "Muhammad Asim Saqlain — Full-Stack AI Developer & Computer Vision Engineer";
const DESCRIPTION =
  "Muhammad Asim Saqlain, Rawalpindi: AI applications, agentic AI and RAG, computer vision and full-stack web development.";

const LINKEDIN_URL = "https://www.linkedin.com/in/muhammad-asim-saqlain-8ab182317";
const GITHUB_URL = "https://github.com/MUHAMMADASIMSAQLAIN";
const UPWORK_URL = "https://www.upwork.com/freelancers/~019b7c3041d768074e";
const EMAIL = "asimsaqlain195@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:image", content: "/assets/profile.jpg?v=2" },
      { name: "twitter:image", content: "/assets/profile.jpg?v=2" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<{ text: string; color: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Please enter a valid email address.";
    if (!formData.subject.trim()) errors.subject = "Please enter a subject.";
    if (!formData.message.trim()) errors.message = "Please enter your message.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setFormStatus({
      text: `Opening your email client to send message to ${EMAIL}...`,
      color: "#8fd19e",
    });

    const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(bodyContent)}`;
  };

  return (
    <div style={{ backgroundColor: "#0b0b09", minHeight: "100vh", color: "#f5f1e4" }}>
      {/* Sticky Header */}
      <header>
        <div className="wrap">
          <nav aria-label="Main">
            <a href="#home" className="logo">
              <span className="mono">
                <img
                  src="/assets/logo.png?v=2"
                  alt="Logo"
                  width="38"
                  height="38"
                  style={{ objectFit: "contain" }}
                />
              </span>
              <span>Asim Saqlain</span>
            </a>
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
            <div className={`links ${menuOpen ? "open" : ""}`} id="links">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#credentials" onClick={() => setMenuOpen(false)}>
                Credentials
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <a
                href="#contact"
                className="btn p"
                onClick={() => setMenuOpen(false)}
                style={{ color: "#16120a", borderBottom: "1px solid var(--gold)" }}
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" style={{ paddingTop: 40 }}>
          <div className="wrap hero">
            <div>
              <span className="badge">Muhammad Asim Saqlain · Rawalpindi, Pakistan</span>
              <h1>
                Building <span className="gold">Intelligent AI</span> Solutions &amp; Modern Web Experiences
              </h1>
              <p>
                Full-Stack AI Developer and Computer Vision Engineer. I build AI-powered applications, agentic and RAG
                systems, computer vision pipelines, and practical business software.
              </p>
              <div className="cta">
                <a className="btn p" href="#projects">
                  Explore My Projects →
                </a>
                <a className="btn s" href="#contact">
                  Contact Me
                </a>
              </div>
              <div className="soc">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
                  Upwork
                </a>
              </div>
              <div className="stats">
                <div className="stat">
                  <b>6</b>
                  <span>Certificates</span>
                </div>
                <div className="stat">
                  <b>3</b>
                  <span>Featured projects</span>
                </div>
                <div className="stat">
                  <b>BS CS</b>
                  <span>UIIT, 2021–2026</span>
                </div>
              </div>
            </div>
            <div className="orb" role="img" aria-label="Portrait of Muhammad Asim Saqlain">
              <img
                src="/assets/profile.jpg?v=2"
                alt="Muhammad Asim Saqlain"
                width="480"
                height="480"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* 01 · ABOUT */}
        <section id="about">
          <div className="wrap grid g2" style={{ alignItems: "center" }}>
            <div className="orb" style={{ maxWidth: 320, borderRadius: 20 }}>
              <img
                src="/assets/profile.jpg?v=2"
                alt="Muhammad Asim Saqlain"
                loading="lazy"
                style={{ borderRadius: 20, objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <div className="eyebrow">01 · ABOUT</div>
              <h2>
                Building solutions with <span className="gold">code &amp; intelligence</span>
              </h2>
              <p>
                I hold a Bachelor of Science in Computer Science from UIIT, PMAS Arid Agriculture University,
                Rawalpindi (2021–2026), and I build intelligent software: full-stack web applications, LLM-powered
                assistants, RAG and multi-agent automation, and computer vision models.
              </p>
              <p>
                My approach is practical. I start from a real business workflow, ship a working version, and document
                what is finished and what still needs production setup.
              </p>
              <div className="grid" style={{ marginTop: 14 }}>
                <div className="card" style={{ padding: 14 }}>
                  AI-driven problem solving
                </div>
                <div className="card" style={{ padding: 14 }}>
                  Scalable full-stack engineering
                </div>
                <div className="card" style={{ padding: 14 }}>
                  Clean, maintainable, user-focused software
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 · SKILLS */}
        <section id="skills">
          <div className="wrap">
            <div className="eyebrow">02 · SKILLS</div>
            <h2>
              Skills &amp; <span className="gold">technologies</span>
            </h2>
            <p>Documented technical competencies across AI systems, full-stack engineering, and cloud platforms.</p>
            <div className="grid g4" style={{ marginTop: 18 }}>
              <div className="card">
                <h3>Languages</h3>
                <p>Python, JavaScript, TypeScript.</p>
              </div>
              <div className="card">
                <h3>Frontend</h3>
                <p>React, TanStack Start, Vite, Tailwind CSS, vanilla JavaScript.</p>
              </div>
              <div className="card">
                <h3>Backend &amp; APIs</h3>
                <p>FastAPI, REST API development.</p>
              </div>
              <div className="card">
                <h3>AI &amp; LLM</h3>
                <p>Gemini AI, RAG, agentic AI, prompt engineering, MCP integrations.</p>
              </div>
              <div className="card">
                <h3>Computer Vision</h3>
                <p>YOLO (Nano), dataset augmentation, vehicle detection.</p>
              </div>
              <div className="card">
                <h3>Data &amp; Databases</h3>
                <p>MongoDB, Supabase pgvector, Power BI, data analytics.</p>
              </div>
              <div className="card">
                <h3>Automation</h3>
                <p>n8n, Zapier, multi-agent workflows.</p>
              </div>
              <div className="card">
                <h3>Cloud, Tools &amp; Networking</h3>
                <p>AWS, Google Cloud Platform (GCP), Vercel, Git, GitHub, Cisco CCNA training, cyber security basics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 · SERVICES */}
        <section id="services">
          <div className="wrap">
            <div className="eyebrow">03 · SERVICES</div>
            <h2>
              What I can <span className="gold">build for you</span>
            </h2>
            <div className="grid g3" style={{ marginTop: 18 }}>
              <a href="#projects" className="card">
                <h3>Full-Stack Web Applications</h3>
                <p>Ordering, admin and brand websites with Python or JavaScript back ends.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>AI &amp; LLM Applications</h3>
                <p>Assistants and tools built on LLM APIs such as Gemini.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Agentic AI &amp; RAG Systems</h3>
                <p>Retrieval-augmented assistants and multi-agent orchestration.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Computer Vision Solutions</h3>
                <p>Object detection models trained and evaluated on custom data.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Workflow Automation &amp; APIs</h3>
                <p>n8n, Zapier, MCP and FastAPI integrations.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Dashboards &amp; Analytics</h3>
                <p>Business intelligence and Power BI reporting.</p>
                <span className="link">See related work →</span>
              </a>
            </div>
          </div>
        </section>

        {/* 04 · PROJECTS */}
        <section id="projects">
          <div className="wrap">
            <div className="eyebrow">04 · PROJECTS</div>
            <h2>
              Featured <span className="gold">projects</span>
            </h2>
            <div className="grid g2" style={{ marginTop: 18 }} id="projGrid">
              {/* BIG HERO FEATURED PROJECT */}
              <div className="card" style={{ gridColumn: "1 / -1" }}>
                <div>
                  <div className="shot">
                    <img
                      src="/assets/dental.jpg?v=2"
                      alt="Dental Clinic Management System"
                      loading="lazy"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Dental Clinic Management System</h3>
                    <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px", whiteSpace: "nowrap" }}>
                      Live · Full-Stack Web Application
                    </span>
                  </div>
                  <p style={{ fontSize: ".9rem", lineHeight: 1.5, margin: ".6em 0" }}>
                    A web-based dental clinic management system featuring an administrative dashboard, specialist and service
                    management, clinic settings, and an interactive FAQ chatbot. The live application demonstrates a complete
                    clinic portal with dentist directory, step-by-step appointment scheduling flow, and patient support chat.
                  </p>
                  <div className="tags">
                    {["React / Vite", "Node.js", "Express.js", "MongoDB Atlas", "REST API", "JWT", "Vercel"].map(
                      (t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <a
                    href="https://dentalclinicsystem-lemon.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href="https://github.com/MUHAMMADASIMSAQLAIN/dentalclinicsystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn s"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Source Code
                  </a>
                </div>
              </div>

              {/* PROJECT 2: MUNTAHA FOODS */}
              <div className="card">
                <div>
                  <div className="shot">
                    <img
                      src="/assets/muntaha.jpg?v=2"
                      alt="Muntaha Home Kitchen"
                      loading="lazy"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: "1.15rem" }}>Muntaha Home Kitchen</h3>
                    <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px", whiteSpace: "nowrap" }}>
                      Live · Food Delivery Platform
                    </span>
                  </div>
                  <p style={{ fontSize: ".88rem", lineHeight: 1.5, margin: ".6em 0" }}>
                    Full-stack homemade food ordering and delivery web application serving Islamabad and Rawalpindi. Features an
                    interactive customer storefront, daily specials, meal packages, checkout, and order tracking. Includes a staff
                    admin dashboard, live delivery rider portal, payment proof verification (Easypaisa, UPaisa, Cash on Delivery), and a
                    Google Gemini AI concierge for automated dish recommendations.
                  </p>
                  <div className="tags">
                    {[
                      "Python",
                      "FastAPI",
                      "MongoDB Atlas",
                      "Gemini Flash API",
                      "HTML5 / CSS / JS",
                      "Vercel",
                    ].map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <a
                    href="https://muntaha-foods.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

              {/* PROJECT 3: ASIM SAQLAIN PERFUMES */}
              <div className="card">
                <div>
                  <div className="shot">
                    <img
                      src="/assets/perfume.jpg?v=2"
                      alt="ASIM SAQLAIN Fragrances — Luxury Perfume Brand Website"
                      loading="lazy"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: "1.15rem" }}>
                      ASIM SAQLAIN Fragrances — Luxury Perfume Brand Website
                    </h3>
                    <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px", whiteSpace: "nowrap" }}>
                      Live · Brand Showcase &amp; Digital Storefront
                    </span>
                  </div>
                  <p style={{ fontSize: ".88rem", lineHeight: 1.5, margin: ".6em 0" }}>
                    A luxury fragrance brand website built around the concept &quot;Fragrance After Dark&quot;. Features
                    cinematic visuals, refined typography, and a dark-and-gold aesthetic, with a dedicated MIDNIGHT OUD
                    product presentation, fragrance collection showcase, scent storytelling, and a responsive layout focused on
                    product imagery, atmosphere, and luxury brand positioning.
                  </p>
                  <div className="tags">
                    {[
                      "Luxury Branding",
                      "Product Showcase",
                      "Responsive Design",
                      "UI/UX Design",
                      "Modern CSS",
                      "Vercel",
                    ].map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <a
                    href="https://asim-saqlain-perfume.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 · EDUCATION & CREDENTIALS */}
        <section id="credentials">
          <div className="wrap">
            <div className="eyebrow">05 · EDUCATION &amp; CREDENTIALS</div>
            <h2>
              Education &amp; <span className="gold">certifications</span>
            </h2>
            <p>
              Formal degree education, certified technical training, and documented industry credentials.
            </p>
            <div className="tl" style={{ marginTop: 20 }}>
              <div className="it">
                <small>2021 — 2026</small>
                <h3>Bachelor of Science in Computer Science (BS CS)</h3>
                <p>
                  University Institute of Information Technology (UIIT), PMAS Arid Agriculture University, Rawalpindi.
                  Graduation: 2026.
                </p>
              </div>
              <div className="it">
                <small>ISSUED 25 JUL 2024</small>
                <h3>Artificial Intelligence using Python</h3>
                <p>DigiSkills.pk · DSTP2.0 Batch 07</p>
              </div>
              <div className="it">
                <small>ISSUED 25 JUL 2024</small>
                <h3>UI/UX Design &amp; Workflow</h3>
                <p>DigiSkills.pk · DSTP2.0 Batch 07</p>
              </div>
              <div className="it">
                <small>MAY 2024</small>
                <h3>Data Analytics &amp; Business Intelligence</h3>
                <p>DigiSkills.pk · DSTP2.0 Batch 07</p>
              </div>
              <div className="it">
                <small>MAY 2024</small>
                <h3>Freelancing &amp; Professional Client Communication</h3>
                <p>DigiSkills.pk · DSTP2.0 Batch 07</p>
              </div>
              <div className="it">
                <small>7 SEP 2024</small>
                <h3>Prompt Engineering with ChatGPT &amp; DeepSeek</h3>
                <p>Udemy Certificate of Completion · 4 Hours Comprehensive Training</p>
              </div>
              <div className="it">
                <small>JUN — SEP 2024</small>
                <h3>Cisco CCNA Training (Routing, Switching &amp; Network Basics)</h3>
                <p>
                  Technologics Certificate of Completion
                </p>
              </div>
              <div className="it">
                <small>SUMMER 2024</small>
                <h3>Cyber Security Fundamentals</h3>
                <p>UIIT Summer Short Courses, PMAS-AAUR</p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 · CONTACT */}
        <section id="contact">
          <div className="wrap">
            <div className="eyebrow">06 · CONTACT</div>
            <h2>
              Let's build something <span className="gold">intelligent</span> together.
            </h2>
            <div className="grid g2" style={{ marginTop: 18 }}>
              <form id="form" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="n">Name</label>
                  <input
                    id="n"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {formErrors.name && <div className="err">{formErrors.name}</div>}
                </div>
                <div>
                  <label htmlFor="e">Email</label>
                  <input
                    id="e"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  {formErrors.email && <div className="err">{formErrors.email}</div>}
                </div>
                <div>
                  <label htmlFor="s">Subject</label>
                  <input
                    id="s"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                  {formErrors.subject && <div className="err">{formErrors.subject}</div>}
                </div>
                <div>
                  <label htmlFor="m">Message</label>
                  <textarea
                    id="m"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  {formErrors.message && <div className="err">{formErrors.message}</div>}
                </div>
                <button className="btn p" id="send" type="submit">
                  Send Message
                </button>
                {formStatus && (
                  <div id="status" style={{ color: formStatus.color, marginTop: 8 }}>
                    {formStatus.text}
                  </div>
                )}
              </form>
              <div className="card" id="contactInfo">
                <h3>Contact details</h3>
                <p style={{ margin: "6px 0 14px 0" }}>
                  <strong>Location:</strong> Rawalpindi, Punjab, Pakistan
                </p>
                <div className="soc" style={{ marginBottom: 14 }}>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a
                    href={UPWORK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Upwork
                  </a>
                </div>
                <p style={{ marginTop: 12 }}>
                  <a href={`mailto:${EMAIL}`} className="gold" style={{ fontWeight: 600 }}>
                    {EMAIL}
                  </a>
                </p>
                <p style={{ fontSize: ".84rem", color: "var(--mute)", marginTop: 8 }}>
                  Available for full-time engineering roles, contracts, and freelance projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <img
              src="/assets/logo.png?v=2"
              alt="Logo"
              width="28"
              height="28"
              style={{ objectFit: "contain" }}
            />{" "}
            © {new Date().getFullYear()} Muhammad Asim Saqlain. All rights reserved.
          </span>
          <a href="#home" aria-label="Back to top" className="btn s" style={{ padding: "6px 12px" }}>
            ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
