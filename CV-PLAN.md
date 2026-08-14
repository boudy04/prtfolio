# CV Improvement Plan — Abdelrahman Magdy

> Single source of truth for the 8-week build-out that takes the CV from **6.5/10 → 8.5/10**.
> Each project below closes specific gaps flagged in the review. Work top-to-bottom; do not skip #1.

## Current status

- **CV score:** 6.5/10 (sophomore level)
- **Biggest problem:** claims without evidence — nothing shipped, linked, or deployed.
- **Working dir:** `D:\app\prtfolio` (currently empty — will host the portfolio site).

---

## Part A — Critical gaps (blocking interviews)

| ID | Gap | Fix |
|----|-----|-----|
| G1 | Zero shipped projects | 2–3 public GitHub repos w/ READMEs + screenshots |
| G2 | No GitHub link | Create account (`abdelrahmanmagdy` or `amagdy-dev`), pin 3 repos |
| G3 | No deployment / live artifact | ≥1 deployed project (Render/Railway/GitHub Pages) |
| G4 | No backend / API experience | 1 CRUD API with real DB |
| G5 | No testing | ≥5 unit tests in every shipped project's README |
| G6 | No CI/CD | 1-file `ci.yml` running tests on push, per repo |

## Part B — Medium gaps (seniority signals)

| ID | Gap | Fix |
|----|-----|-----|
| M1 | Kotlin vs Java indistinct | Kotlin-primary Android app, or downgrade Kotlin to "familiar" |
| M2 | C/C++ claimed, no systems project | 1 small systems project (shell, emulator, allocator) or mark "familiar" |
| M3 | Multithreading claimed, no artifact | Thread-pool / producer-consumer / async project to point at |
| M4 | Thin quantification | Add numbers everywhere (latency, concurrency, scale) |
| M5 | Generic professional summary | Replace filler with sharp positioning line (see bottom) |

## Part C — Strengths to keep

- ✅ Clean, verifiable education section
- ✅ Mentorship bullet (most credible item — keep)
- ✅ MARIE CPU + Digital Logic (CS depth differentiator)
- ✅ GPA 3.89 (keep prominent)
- ✅ Single-page, ATS-friendly format

---

## Part D — Project backlog

### Tier 1 — Quick wins (1 weekend each)
| # | Project | Stack | Closes | Effort |
|---|---------|-------|--------|--------|
| 1 | **Portfolio site** (resume + project cards) | HTML/CSS/JS → GitHub Pages | G1,G2,G3 | ~6h |
| 2 | **Java CLI tool** (MD→HTML / JSON→CSV / git-log stats) | Java + JUnit | G1,G4,M2 | 1 wknd |
| 3 | **Python automation script** w/ weekly GH Action | Python + GH Actions | G1,G6 | 1 wknd |

### Tier 2 — Heavy hitters (2–3 weekends each)
| # | Project | Stack | Closes | Effort |
|---|---------|-------|--------|--------|
| 4 | **REST API + lifecycle** (CRUD + DB + tests + Docker + CI + deploy) | Spring Boot / FastAPI / Express | G1,G3,G4,G5,G6,M4 | 3–5 wknd |
| 5 | **Kotlin Android app** (consumes #4 API, Room cache) | Kotlin + Retrofit + Room | G1,M1,M4 | 2–3 wknd |
| 6 | **Multithreaded server** (thread-pool HTTP/chat) | Java/C + threads | G1,M2,M3 | 2–3 wknd |
| 7 | **Algorithm visualizer** (Dijkstra/A*/sort/BFS) | JS + canvas | G1,M4 | 2–3 wknd |

### Tier 3 — Flagship (3–4 weekends, or OSS)
| # | Project | Stack | Closes | Effort |
|---|---------|-------|--------|--------|
| 8 | **Tiny Unix shell** (parse, pipes, redirect, bg jobs, history) | C + Unix APIs | G1,M2,M3 | 3–4 wknd |
| 9 | **Chip-8 emulator** (CPU, display, input) | C++/Java | G1,M2 | 3–4 wknd |
| 10 | **1 merged OSS PR** (`good-first-issue` / `first-timers-only`) | Any | G1,M4 | varies |

---

## Part E — Execution sequence (the 8-week plan)

| Week | Project | Output |
|------|---------|--------|
| 1 | #1 Portfolio site + create GitHub account | Live site + 1 repo |
| 2 | #2 Java CLI tool | 2nd repo, first w/ tests |
| 3–5 | #4 REST API (tests + CI + deploy) | 3rd repo — headline |
| 6–7 | #5 Kotlin app using that API | 4th repo — mobile depth |
| 8 | #10 One merged OSS PR | merged PR link on CV |

**After 8 weeks you'll have:** 4 personal repos · 1 live API · 1 live portfolio · 1 merged OSS PR · tests + CI on every repo.

**Then:** rewrite CV to add a **Technical Projects** section (links + stack + 1-line impact) between Summary and Skills.

---

## Part F — Definition of done (per repo, non-negotiable)

- [ ] Public GitHub repo, pinned
- [ ] `README.md` with: what it is, stack, how to run, screenshots, ≥5 test commands
- [ ] Tests present and passing
- [ ] `.github/workflows/ci.yml` runs tests on push
- [ ] At least one project deployed to a live URL

---

## Part G — CV copy to swap in (after projects ship)

**Professional summary (replace generic line):**
> Software Engineering student (GPA 3.89, AAST) building Android apps in Kotlin and backend services in Java/Python. Currently shipping open-source projects to GitHub.

**New section order:**
1. Contact / links (GitHub, LinkedIn, portfolio URL)
2. Professional Summary
3. **Technical Projects** ← new, top-billing
4. Skills
5. Education
6. Experience / Mentorship
7. Coursework (MARIE CPU, Digital Logic)

---

## Tracking

| Week | Item | Status |
|------|------|--------|
| 1 | Portfolio site + GitHub account | ✅ live: https://boudy04.github.io/prtfolio/ |
| 2 | Java CLI tool | ⬜ |
| 3–5 | REST API | ⬜ |
| 6–7 | Kotlin app | ⬜ |
| 8 | OSS PR | ⬜ |
| — | CV rewrite w/ Projects section | ⬜ |
