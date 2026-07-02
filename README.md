# Ayush Jyala — Portfolio

Rebuilt on **Vite + Tailwind CSS** so you can run it locally with `npm run dev`
and get hot-reload while you edit. Still deploys as a fully static site (GitHub
Pages, Vercel, Netlify — anything that can serve static files).

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/` — upload that folder anywhere (GitHub
Pages, Netlify, Vercel, etc.). `npm run preview` lets you sanity-check the
production build locally before deploying.

## What changed from the single-file version

- **Tooling**: split into a proper Vite project (`index.html` + `src/style.css`
  + `src/main.js`) with Tailwind CSS wired up via PostCSS. Tailwind's config
  (`tailwind.config.js`) carries your exact color tokens, fonts, and radii as
  theme values, so you can reach for Tailwind utility classes in future edits
  without breaking the look.
- **Visual polish** (design system untouched — same colors, fonts, layout,
  section order):
  - Animated conic-gradient border glow around the signature terminal card,
    plus a subtle float animation and a cursor-tracking glow.
  - Terminal lines now type in sequentially on load instead of appearing all
    at once.
  - Gradient-highlighted headline word and section-title accents.
  - Nav links get an animated underline on hover; the status dot pulses.
  - Buttons got a soft shine sweep on hover; cards lift with a soft glow
    shadow on hover instead of a flat border change.
  - Skills/CP/project cards have slightly deeper hover elevation, and the
    Skills grid staggers in on scroll instead of all sections fading in at
    once.
  - Added a faint background grain layer for depth, plus a third ambient
    glow blob.
  - Custom scrollbar styling to match the dark theme.
  - `prefers-reduced-motion` is still respected everywhere.
- **No content, copy, links, or structural changes** beyond what's needed for
  the new build setup (the resume link now points to `resume-placeholder.pdf`
  served from `public/`, same file as before).

## Still-open placeholders (same as the original file)

- `action="https://formspree.io/f/{your-form-id}"` in the contact form —
  swap in your real Formspree endpoint.
- The "View on GitHub" and mini-project card links are still `#` — point them
  at real repos when ready.
- `public/resume-placeholder.pdf` — replace with your real resume PDF (same
  filename, or update the link in `index.html`).

## Anonymity constraints preserved

No email or phone number appears anywhere in the markup. Contact is still via
the Formspree form (client-side only, no address exposed) and the LinkedIn
button. No personal photo — just the "AJ" monogram avatar.
