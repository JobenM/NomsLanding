⏺ Build a landing page for NomsAI — a minimalist, privacy-first AI calorie tracking app for iOS and Android. The app lets users type what they ate (e.g. "2 eggs and toast") and
uses AI to instantly estimate macros. No login required, no ads, device-only food logs.

## Project setup

- Astro + Tailwind CSS
- Deploy target: GitHub Pages (static output only, no SSR)
- Custom domain will be added later via GitHub Pages settings
- New repo, start from scratch

## SEO — priority number one

- Every page must be fully static HTML at build time (no client-side rendering of content)
- Proper meta tags on every page: title, description, og:image, og:title, og:description, twitter:card
- Sitemap generated at build time
- robots.txt
- Semantic HTML throughout (h1, h2, article, nav, footer etc)
- Target keywords: "AI calorie tracker", "calorie counter AI", "macro tracker no login", "AI food diary"
- Fast page loads — aim for 100 Lighthouse performance score

## Pages

1. `/` — Hero landing page
2. `/how-it-works` — 3-step explainer (type food → AI parses → review macros)
3. `/faq` — Common questions
4. `/blog` or `/articles` — Content marketing, articles about nutrition/calorie tracking (Astro content collections for this)
5. `/privacy` — Privacy policy (I'll provide the HTML content)
6. `/terms` — Terms of service (I'll provide the HTML content)

## Design

- Clean, minimal, modern — no clutter
- Mobile-first responsive
- Dark mode support
- Professional, trustworthy feel — this is a health app
- App screenshots/mockups section (placeholder for now)
- iOS App Store and Google Play Store badge links (placeholder hrefs for now)

## Animations and effects — surprise and delight

- GSAP + ScrollTrigger for scroll-driven animations
- Smooth scroll-triggered reveals on sections as user scrolls down
- Hero section should be visually striking
- Subtle parallax effects where appropriate
- Micro-interactions on buttons and CTAs
- Keep animations tasteful — not gimmicky, reinforce the premium feel
- Use Astro islands (client:load) only where needed for animation/interactivity, everything else stays static

## Content structure for homepage

- Hero: strong headline communicating AI + simplicity + privacy, CTA to app stores
- Social proof / key stats section (placeholder)
- How it works: 3 steps, visual and clean
- Key features: no login, privacy-first, instant AI, works offline
- App store download section with badges
- FAQ preview (3-4 questions, link to full FAQ)
- Footer with links to privacy, terms, socials

## Analytics

- Add Plausible Analytics script (privacy-friendly, no cookie banner needed)
- Placeholder src for now, I'll add my actual domain later

## GitHub Pages specifics

- Output to `dist/` folder
- Include a `.nojekyll` file in the output
- GitHub Actions workflow to build and deploy to `gh-pages` branch on push to `main`
- The workflow should: checkout, install deps, build, deploy to gh-pages

## Tech constraints

- Astro latest stable
- Tailwind CSS v3
- GSAP via npm (not CDN)
- No heavy UI component libraries — custom components only
- TypeScript throughout

Start by scaffolding the full project structure, GitHub Actions workflow, and homepage. Make it look genuinely impressive from day one.
