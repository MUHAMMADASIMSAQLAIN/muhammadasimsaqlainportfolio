# Muhammad Asim Saqlain — Portfolio

Static two-page portfolio:
- **Full-Stack AI & Data Science Engineering** (`/`)
- **AI Content & Creative Studio** (`/#studio`)

## Features
- Complete dual-profile showcase (AI Engineering & Creative Studio with videos)
- **Admin Panel & Editor** (`/#admin`):
  - Accessible via the **⚙ Admin Login** button in the footer or **Admin** link in the header navigation
  - Password-protected with client-side PBKDF2/SHA-256 encryption
  - Live editing of Profile, About, Stats, Skills, Services, Projects, Timeline, Media (Logo, Photo, CV), Studio Services, Studio Works, Studio Ads, Studio Channels, Security & SEO
  - Instant local persistence via `localStorage`, JSON backup export/import, and automatic download of updated `index.html` for deployment

## Files
- `index.html` – the whole site (HTML, CSS and JS in one file; content is stored as JSON inside it)
- `portfolio-data.json` – readable copy of all content (profile, skills, projects, studio showcase, channels, ads)
- `videos/` – the AI UGC-style ad videos
- `Muhammad_Asim_Saqlain_CV.pdf` – the CV behind the Download CV buttons
- `vercel.json` – Vercel settings

## Deploy on Vercel
Import the repo, Framework Preset **Other**, empty build command, output directory = project root.

## Contact form
Set `formEndpoint` (e.g. a Formspree URL) in the `profile` data. Until then the form reports "not sent".
