# Lily Poursoltan — Academic Website

A single-page, static academic job-market website. Pure HTML/CSS/JS — no build step, no framework.

```
site/
├── index.html                  ← the whole page
├── assets/
│   ├── css/style.css           ← design system (colors, type, layout)
│   ├── js/main.js              ← nav, scrollspy, subtle reveal
│   └── img/
│       ├── lily-poursoltan.jpg        ← hero headshot (web-optimized)
│       └── lily-poursoltan-small.jpg  ← spare smaller version
└── files/
    ├── Lily-Poursoltan-CV.pdf  ← your CV (linked from nav, hero, footer)
    └── Poursoltan_JMP.pdf      ← ADD THIS: your job market paper PDF
```

## View it locally

From inside the `site/` folder:

```bash
cd "site"
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Stop the server with `Ctrl+C`.

## Before it goes live — quick checklist

Search `index.html` for `TODO` and replace these placeholder links with your real URLs:

- **Google Scholar** — your profile URL (appears in hero + footer)
- **ORCID** — your ORCID URL
- **UC San Diego profile** — your Rady/UCSD faculty/student profile
- **LinkedIn** — confirm `linkedin.com/in/lilypoursoltan` is correct
- **Job Market Paper PDF** — drop the file at `files/Poursoltan_JMP.pdf`
- **JMP abstract** — I wrote a plausible 4-sentence abstract; replace with your own wording
- **JMP author order / status** — confirm venue + co-authors

## Hosting options (all free)

### Option A — GitHub Pages (recommended, gives you a clean URL)
1. Create a GitHub repo named `lilypoursoltan.github.io` (public).
2. Upload the **contents** of `site/` to the repo root.
3. Settings → Pages → Source: `main` branch, `/root`.
4. Live at `https://lilypoursoltan.github.io` in ~1 minute.
5. (Optional) Add a custom domain like `lilypoursoltan.com` in Settings → Pages.

### Option B — Netlify / Cloudflare Pages (drag-and-drop)
1. Sign in at netlify.com (or Cloudflare Pages).
2. Drag the `site/` folder onto the deploy area.
3. Live instantly; add a custom domain in the dashboard.

### Option C — University web space
Many departments give you `~username` web space. Upload the contents of `site/`
via SFTP. (A custom domain reads as more senior — prefer A or B if possible.)

## Notes
- Fully responsive (desktop → mobile hamburger menu) and print-friendly.
- Respects `prefers-reduced-motion` — animation is disabled for those users.
- Every fact matches the CV. Keep them in sync when either changes.
