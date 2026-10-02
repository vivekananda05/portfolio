# Vivekananda Giri — Portfolio

Personal portfolio website (single page) for **Vivekananda Giri** — PhD candidate,
IIT Bombay. Light/off-white theme, built to host free on GitHub Pages, like the
HyperPrompt project page.

## Files
```
index.html                the page
style.css                 styling (light theme, animations)
script.js                 nav, scroll reveals, rotating keyword, back-to-top
Vivekananda_Giri_CV.pdf   linked by the "Download CV" button
```

## Sections
Hero → About (research interests) → Research (BMVC 2026 publication) →
Experience → Projects → Skills → Education → Contact.

## Things to update
- **CV**: replace `Vivekananda_Giri_CV.pdf` whenever you update your CV (keep the
  same filename, or change the two `href="Vivekananda_Giri_CV.pdf"` links in
  `index.html`).
- **Paper (arXiv)**: in `index.html`, the "Paper (arXiv)" link in the Research
  section is `href="#"` — set it to your arXiv URL when available.
- All content (bio, projects, education, links) is plain text in `index.html` —
  edit directly.

## Hosting on GitHub Pages (free)

### Option A — new repo
1. Create a repo, e.g. `portfolio` (or `vivekananda05.github.io` to serve at your
   root domain).
2. Upload **all files** (index.html, style.css, script.js, the CV PDF) to the repo
   root — drag-and-drop on github.com, or:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/vivekananda05/portfolio.git
   git push -u origin main
   ```
3. **Settings → Pages → Build and deployment → Source** = *Deploy from a branch*.
4. Branch = `main`, folder = `/ (root)`, **Save**.
5. Live in ~1 min at `https://vivekananda05.github.io/portfolio/`
   (or `https://vivekananda05.github.io/` if you named the repo
   `vivekananda05.github.io`).

### Tips
- Keep filenames exactly as-is (GitHub Pages is case-sensitive).
- After any edit, push again — Pages redeploys automatically.
- Custom domain later: **Settings → Pages → Custom domain**.
