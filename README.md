# Portfolio Site — Project #1

Static, zero-build personal site for Abdelrahman Magdy. Hosted free on GitHub Pages.

## Run locally
Open `index.html` in a browser. No install, no build step.

## Deploy (GitHub Pages)
1. Repo already created at `github.com/boudy04/prtfolio`.
2. Push to `main`: `git push origin main`.
3. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. Live at `https://boudy04.github.io/prtfolio/`.

## What's inside
- Single `index.html` (inline CSS + vanilla JS, no framework).
- Fonts (Instrument Serif + Outfit) loaded non-blocking from Google Fonts, so the page never hangs if the CDN is unreachable.
- Resume sections: Projects, Skills, Education, Experience, Activities.
- Interactions: theme toggle (persisted), custom cursor + magnetic buttons (desktop only), scroll reveals (mobile-safe, no-JS fallback), minimal Canvas UI-inspired radial gradient following cursor.

## Gaps this closes
G1 (shipped project), G2 (GitHub link), G3 (live deployment).

## Definition of done (per repo)
- [x] Public repo, pinned
- [x] README with run + deploy steps
- [x] Deployed to live URL (`https://boudy04.github.io/prtfolio/`)
- [ ] CI workflow (optional — add `.github/workflows/ci.yml` if the site grows logic)
