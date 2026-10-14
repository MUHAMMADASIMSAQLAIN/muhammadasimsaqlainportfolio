# Portfolio Upgrade Plan

## Phase 1 result: original project found
- This chat already runs your original project (ID 3141c544-...), the one behind muhammadasimsaqlainportfolio.lovable.app. No new project is needed.
- Current site: hero, about, services, skills, projects (10 projects with case-study pages, BlueWave AI screenshots), experience, certifications, contact, mobile menu, sky-blue theme, your real photo.
- Your GitHub repo `muhammadasimsaqlainportfolio` exists. To check it is still synced: Plus (+) menu in chat, then GitHub. If it says "Connect project", reconnect it there. I cannot do this step for you.
- The Vercel copy deploys from GitHub, so it updates once sync works. I will not publish anything without your approval.

## Phase 2: sources reviewed
- GitHub (public repos read): Artificial-Intelligence-using-Python, asim-saqlain-perfume (live on Vercel), Data-Analytics-and-Business-Intelligence-PORTFOLIO (Excel, MySQL, Power BI), Microsoft-Power-Bi, Python- (NumPy, pandas, scikit-learn, TensorFlow), Z3W business management platform (inventory, orders, invoicing, analytics, ML stock predictions).
- LinkedIn blocks automated reading. I will keep the details you already gave me.

## Phase 3-6: changes
1. Positioning: headline becomes "AI Engineer | Agentic AI Developer | Generative AI & Automation", with wording that presents you as an aspiring engineer and does not overstate experience.
2. Project status labels: each card shows Completed, Prototype or In progress.
3. New project: ASIM SAQLAIN Perfumes, shown as your own brand and e-commerce project, with live site and source links. The details come from the repository code.
4. BlueWave AI / Z3W: link the Z3W repository and match the description to what the repo shows (inventory, orders, invoicing, analytics, stock prediction).
5. Data Analytics & BI and Power BI: one project card linking both repos. It lists only the tools and dashboards those repos show, with no made-up numbers.
6. AI using Python: card linking the repo (ML/DL exercises, OOP, data projects).
7. Skills list matched to your list: Python/ML, GenAI/LLMs, agents, prompt engineering, RAG, LangChain, MCP, n8n, OpenAI/Gemini, Flask/FastAPI, MongoDB/Supabase/SQL, analytics.
8. Add a GitHub link to the nav, hero and contact sections. Projects get "Live demo" and "Source code" buttons where those links exist.
9. Keep the current design and theme. Only polish spacing and readability.

## Phase 7: checks
- Build check, a click-through test of every link (LinkedIn, GitHub, email, Upwork, demos, repos), and screenshots on mobile and desktop.
- At the end you get a summary of what changed and anything left open.

## Technical details
- Edit `src/lib/portfolio/data.ts` (add `status`, `liveUrl`, `repoUrl`, `GITHUB_URL`), `Projects.tsx`, `projects.$slug.tsx`, `Hero.tsx`, `Nav.tsx`, `Contact.tsx`, the MCP data file and SEO head tags. No new dependencies.
