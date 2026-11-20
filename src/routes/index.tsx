import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const TITLE = "Muhammad Asim Saqlain — AI & Full-Stack Engineer | RAG & Agentic AI";
const DESCRIPTION =
  "Muhammad Asim Saqlain: AI and Full-Stack Engineer specializing in RAG pipelines, MCP-based autonomous AI agents, computer vision, and FastAPI/Node.js systems.";

const LINKEDIN_URL = "https://www.linkedin.com/in/muhammad-asim-saqlain-8ab182317";
const GITHUB_URL = "https://github.com/MUHAMMADASIMSAQLAIN";
const UPWORK_URL = "https://www.upwork.com/freelancers/~019b7c3041d768074e";
const EMAIL_PRIMARY = "asimsaqlain85@gmail.com";
const EMAIL_SECONDARY = "asimsaqlain195@gmail.com";
const PHONE = "+92 316 5101890";
const RESUME_PATH = "/downloads/Muhammad-Asim-Saqlain-Resume.pdf";

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
      text: `Opening your email client to send message to ${EMAIL_PRIMARY}...`,
      color: "#8fd19e",
    });

    const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(
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
              <a href="#creative" onClick={() => setMenuOpen(false)}>
                Creative
              </a>
              <a href="#credentials" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <a
                href={RESUME_PATH}
                download="Muhammad-Asim-Saqlain-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn s"
                style={{ padding: "6px 14px", fontSize: ".82rem" }}
              >
                Resume ↓
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
                AI and Full-Stack Engineer who builds and deploys applications with Python (FastAPI), Node.js, and
                MongoDB/PostgreSQL. Hands-on expertise in RAG pipelines, MCP-based autonomous AI agents, computer vision,
                and containerized microservices.
              </p>
              <div className="cta">
                <a className="btn p" href="#projects">
                  Explore My Projects →
                </a>
                <a
                  className="btn s"
                  href={RESUME_PATH}
                  download="Muhammad-Asim-Saqlain-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV ↓
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
                  <b>6+</b>
                  <span>Certifications</span>
                </div>
                <div className="stat">
                  <b>5+</b>
                  <span>Featured systems</span>
                </div>
                <div className="stat">
                  <b>BS CS (AI)</b>
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
                I hold a Bachelor of Science in Computer Science with a specialization in Artificial Intelligence from
                UIIT, PMAS Arid Agriculture University, Rawalpindi (2021–2026). I build intelligent systems:
                full-stack web applications, LLM-powered assistants, RAG and multi-agent automation, and computer vision
                models.
              </p>
              <p>
                My approach is practical and engineering-focused. I start from real business workflows, develop
                containerized production-ready services, and document what is finished and what scales in deployment.
              </p>
              <div className="grid" style={{ marginTop: 14 }}>
                <div className="card" style={{ padding: 14 }}>
                  AI-driven problem solving &amp; autonomous agents
                </div>
                <div className="card" style={{ padding: 14 }}>
                  Scalable full-stack backend engineering (FastAPI / Node.js)
                </div>
                <div className="card" style={{ padding: 14 }}>
                  Clean, containerized, and maintainable software
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
                <h3>Languages &amp; Core</h3>
                <p>Python, JavaScript, TypeScript, Node.js, Express.js, Kotlin, SQL, HTML5, CSS3.</p>
              </div>
              <div className="card">
                <h3>Frontend Engineering</h3>
                <p>React, TanStack Start, Vite, Tailwind CSS, Responsive Design, UI/UX Layout.</p>
              </div>
              <div className="card">
                <h3>Backend &amp; Cloud</h3>
                <p>FastAPI, Flask, REST APIs, Docker, PostgreSQL, Supabase (pgvector), MongoDB Atlas, Pinecone, Firebase, AWS.</p>
              </div>
              <div className="card">
                <h3>AI &amp; LLM Engineering</h3>
                <p>RAG, AI Agents, Tool Calling, Model Context Protocol (MCP), LangChain, AutoGen, OpenAI API, Gemini API, Vector Embeddings, Pydantic.</p>
              </div>
              <div className="card">
                <h3>Machine Learning &amp; CV</h3>
                <p>YOLOv8, OpenCV, TensorFlow, PyTorch, Scikit-learn, Keras, Roboflow, Pandas, Data Augmentation.</p>
              </div>
              <div className="card">
                <h3>Workflow Automation</h3>
                <p>n8n, Zapier, Webhooks, JSON Parsing, ETL Pipelines, Data Validation, Airtable, Google Sheets.</p>
              </div>
              <div className="card">
                <h3>Security &amp; Auth</h3>
                <p>JWT (Access/Refresh Tokens), Role-Based Access Control (RBAC), bcrypt, REST API Security.</p>
              </div>
              <div className="card">
                <h3>Tools &amp; DevOps</h3>
                <p>Git, GitHub, Docker, Postman, Linux Terminal, Figma, Vercel CI/CD.</p>
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
                <p>Ordering, admin and brand websites with Python (FastAPI) or Node.js back ends.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>AI &amp; LLM Applications</h3>
                <p>Autonomous tool-calling assistants built on Gemini, OpenAI, and MCP protocols.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Agentic AI &amp; RAG Systems</h3>
                <p>High-accuracy semantic retrieval, Supabase pgvector pipelines, and multi-agent systems.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Computer Vision Solutions</h3>
                <p>Real-time YOLOv8 object and license plate detection models trained on custom datasets.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Workflow Automation &amp; APIs</h3>
                <p>n8n, Zapier, Webhooks, MCP, and high-throughput FastAPI integrations.</p>
                <span className="link">See related work →</span>
              </a>
              <a href="#projects" className="card">
                <h3>Dashboards &amp; Analytics</h3>
                <p>Business intelligence, MongoDB/PostgreSQL pipelines, and Power BI reporting.</p>
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

              {/* PROJECT 4: AGENTIC AI RAG ASSISTANT */}
              <div className="card">
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
                  <h3 style={{ margin: 0, fontSize: "1.15rem" }}>Agentic AI &amp; RAG Context Retrieval Pipeline</h3>
                  <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px", whiteSpace: "nowrap" }}>
                    Production Architecture · MCP
                  </span>
                </div>
                <p style={{ fontSize: ".88rem", lineHeight: 1.5, margin: ".6em 0" }}>
                  Built RAG pipelines using Supabase pgvector for namespace-isolated semantic retrieval, dynamic chunking,
                  and context injection. Developed autonomous AI agents with dynamic tool calling and multi-step reasoning
                  using Model Context Protocol (MCP). Exposed production-ready FastAPI endpoints with structured error handling
                  for deterministic JSON responses.
                </p>
                <div className="tags">
                  {[
                    "LangChain",
                    "FastAPI",
                    "Supabase pgvector",
                    "MCP Protocol",
                    "OpenAI API",
                    "Google AI Studio",
                    "Docker",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROJECT 5: BLUEWAVE AI PLATFORM */}
              <div className="card">
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
                  <h3 style={{ margin: 0, fontSize: "1.15rem" }}>BlueWave AI E-Commerce Platform</h3>
                  <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px", whiteSpace: "nowrap" }}>
                    Graded 'A' · Autonomous Multi-Agent System
                  </span>
                </div>
                <p style={{ fontSize: ".88rem", lineHeight: 1.5, margin: ".6em 0" }}>
                  Designed and deployed a full-stack AI-powered e-commerce platform incorporating autonomous AI agents for
                  business and customer workflows (Final Year Project, graded 'A'). Built scalable REST APIs with FastAPI,
                  containerized with Docker, MongoDB Atlas persistence, JWT authentication with RBAC, and multi-agent n8n
                  workflows for LLM reasoning and ElevenLabs voice synthesis.
                </p>
                <div className="tags">
                  {[
                    "FastAPI",
                    "Docker",
                    "MongoDB Atlas",
                    "n8n Workflows",
                    "Gemini API",
                    "ElevenLabs",
                    "JWT / RBAC",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 · CREATIVE & DIGITAL MEDIA */}
        <section id="creative">
          <div className="wrap">
            <div className="eyebrow">05 · CREATIVE &amp; DIGITAL MEDIA</div>
            <h2>
              Design, Video Editing &amp; <span className="gold">Digital Marketing</span>
            </h2>
            <p>
              High-retention visual content, brand identity systems, short-form video production, and conversion-focused growth marketing.
            </p>

            <div className="grid g2" style={{ marginTop: 24 }}>
              {/* Card 1: Video Editing */}
              <div className="card">
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
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Video Editing &amp; Motion Production</h3>
                  <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px" }}>
                    CapCut · Premiere · Motion
                  </span>
                </div>
                <p style={{ fontSize: ".9rem", lineHeight: 1.6, margin: ".6em 0" }}>
                  Producing scroll-stopping, high-retention video content engineered with pattern interrupts and dynamic visual
                  hooks within the first 3 seconds. Specialized in kinetic captions, audio mixing, atmospheric sound design (SFX),
                  color grading, and format optimization (9:16 vertical reels, TikTok &amp; YouTube Shorts, 16:9 promos).
                </p>
                <div className="tags">
                  {[
                    "Short-Form Reels",
                    "Kinetic Subtitles",
                    "Sound Design & SFX",
                    "Pacing & Visual Rhythm",
                    "YouTube Shorts & TikTok",
                    "16:9 Promos",
                    "CapCut Pro",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <a
                    href="https://youtube.com/watch?v=26j4Z3ZUoUY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Watch 3D Showcase ↗
                  </a>
                  <a
                    href="https://youtube.com/watch?v=eXlFPS0aJ7o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn s"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Watch Poetic Mood Reel ↗
                  </a>
                </div>
              </div>

              {/* Card 2: Graphic Design */}
              <div className="card">
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
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Graphic Design &amp; Brand Identity</h3>
                  <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px" }}>
                    Canva Pro · Photoshop · Figma
                  </span>
                </div>
                <p style={{ fontSize: ".9rem", lineHeight: 1.6, margin: ".6em 0" }}>
                  Designing high-CTR digital and print marketing collateral that commands attention while maintaining strict brand
                  consistency. Crafting custom campaign posters, event flyers, social media kits, multi-slide educational carousels,
                  custom thumbnails, and complete typography and visual identity systems.
                </p>
                <div className="tags">
                  {[
                    "Brand Identity",
                    "High-CTR Thumbnails",
                    "Social Media Kits",
                    "Campaign Posters",
                    "Multi-Slide Carousels",
                    "Typography Hierarchy",
                    "Canva Pro",
                    "Photoshop",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3: Digital Marketing */}
              <div className="card">
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
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Digital Marketing &amp; Social Strategy</h3>
                  <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px" }}>
                    Growth · Meta · YouTube · SEO
                  </span>
                </div>
                <p style={{ fontSize: ".9rem", lineHeight: 1.6, margin: ".6em 0" }}>
                  Multi-platform growth strategies across YouTube, LinkedIn, Instagram, TikTok, and Meta Business Suite. Managing
                  audience retention curves, testing creative variants through A/B testing to maximize click-through rates (CTR),
                  social SEO, and executing content calendars that turn viewers into engaged followers and leads.
                </p>
                <div className="tags">
                  {[
                    "Social Media Marketing",
                    "Audience Retention",
                    "A/B Testing Creatives",
                    "YouTube SEO",
                    "Meta Business Suite",
                    "CTR Analytics",
                    "Content Calendars",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 4: AI Multimedia */}
              <div className="card">
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
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>AI-Assisted Multimedia &amp; Audio</h3>
                  <span className="badge" style={{ fontSize: ".72rem", padding: "2px 8px" }}>
                    Generative AI · ElevenLabs · Voice
                  </span>
                </div>
                <p style={{ fontSize: ".9rem", lineHeight: 1.6, margin: ".6em 0" }}>
                  Leveraging next-gen generative tools (Google AI Studio, ElevenLabs, Google Flow AI) for voiceover synthesis,
                  audio cleanup, generative concept visualization, and rapid creative prototyping. Combining human storytelling
                  intuition with AI acceleration for fast-turnaround creative campaigns.
                </p>
                <div className="tags">
                  {[
                    "AI Voice Synthesis",
                    "ElevenLabs",
                    "Audio Mastering",
                    "Generative Concept Art",
                    "Stock Asset Curation",
                    "AI Storyboarding",
                    "Rapid Prototyping",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 · EXPERIENCE & EDUCATION */}
        <section id="credentials">
          <div className="wrap">
            <div className="eyebrow">06 · EXPERIENCE &amp; CREDENTIALS</div>
            <h2>
              Experience, Education &amp; <span className="gold">certifications</span>
            </h2>
            <p>
              Professional engineering engagements, formal academic degree, and documented industry credentials.
            </p>
            <div className="tl" style={{ marginTop: 24 }}>
              {/* FREELANCE EXPERIENCE */}
              <div className="it">
                <small>JAN 2024 — PRESENT</small>
                <h3>Full-Stack AI and Computer Vision Developer (Freelance)</h3>
                <p style={{ color: "var(--gold2)", fontSize: ".85rem", marginTop: 2 }}>
                  Self-Employed · Remote &amp; Contract Engagements
                </p>
                <p>
                  • Built production RAG pipelines and autonomous AI agents using LangChain, Supabase pgvector, and Model Context Protocol (MCP) tool calling.
                </p>
                <p>
                  • Developed scalable FastAPI and Node.js backends and containerized services with Docker for reproducible deployments.
                </p>
                <p>
                  • Integrated OpenAI and Gemini APIs into pipelines for classification, structured data extraction, and conversational workflows.
                </p>
                <p>
                  • Designed and built enterprise n8n automation workflows connecting webhooks, REST APIs, LLMs, and databases.
                </p>
                <p>
                  • Trained and deployed real-time YOLOv8 and OpenCV computer vision models for automated object detection.
                </p>
              </div>

              {/* DEGREE */}
              <div className="it">
                <small>2021 — 2026</small>
                <h3>Bachelor of Science in Computer Science (Artificial Intelligence)</h3>
                <p>
                  University Institute of Information Technology (UIIT), PMAS Arid Agriculture University, Rawalpindi.
                  Graduation: 2026. Relevant Coursework: Artificial Intelligence, Computer Vision, Data Mining, Machine Learning,
                  Deep Learning, Software Engineering, Database Management Systems, Design and Analysis of Algorithms.
                </p>
              </div>

              {/* CERTIFICATIONS */}
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

        {/* 07 · CONTACT */}
        <section id="contact">
          <div className="wrap">
            <div className="eyebrow">07 · CONTACT</div>
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
                <p style={{ margin: "6px 0 10px 0" }}>
                  <strong>Location:</strong> Rawalpindi, Punjab, Pakistan
                </p>
                <p style={{ margin: "4px 0 14px 0" }}>
                  <strong>Phone:</strong> <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="gold">{PHONE}</a>
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
                <p style={{ marginTop: 12, marginBottom: 4 }}>
                  <a href={`mailto:${EMAIL_PRIMARY}`} className="gold" style={{ fontWeight: 600 }}>
                    {EMAIL_PRIMARY}
                  </a>
                </p>
                <p style={{ margin: "4px 0 12px 0" }}>
                  <a href={`mailto:${EMAIL_SECONDARY}`} className="gold" style={{ fontSize: ".9rem", opacity: .9 }}>
                    {EMAIL_SECONDARY}
                  </a>
                </p>
                <div style={{ marginTop: 16 }}>
                  <a
                    href={RESUME_PATH}
                    download="Muhammad-Asim-Saqlain-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p"
                    style={{ padding: "8px 16px", fontSize: ".85rem" }}
                  >
                    Download Official CV (PDF) ↓
                  </a>
                </div>
                <p style={{ fontSize: ".84rem", color: "var(--mute)", marginTop: 14 }}>
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
