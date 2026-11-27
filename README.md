# Muhammad Asim Saqlain — Portfolio

Static two-page portfolio:
- **Full-Stack AI & Data Science Engineering** (`/`)
- **AI Content & Creative Studio** (`/#studio`)

## Files
- `index.html` – the whole site (HTML, CSS and JS in one file; content is stored as JSON inside it)
- `portfolio-data.json` – readable copy of all content (profile, skills, projects, studio showcase, channels, ads)
- `videos/` – the AI UGC-style ad videos
- `Muhammad_Asim_Saqlain_CV.pdf` – the CV behind the Download CV buttons
- `vercel.json` – Vercel settings

## Deploy on Vercel
Import the repo, Framework Preset **Other**, empty build command, output directory = project root.

## Editing content
Edit the JSON inside `<script id="sdata">` in `index.html` (see `portfolio-data.json`), or ask Claude. The in-page admin panel only works inside Claude, so it is removed here.

## Contact form
Set `formEndpoint` (e.g. a Formspree URL) in the `profile` data. Until then the form reports "not sent".
