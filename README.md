# Bible Timeline Companion

An immersive Next.js, TypeScript, and Tailwind-powered guide designed to help Bible learners connect events, people, and places. The timeline visualizes Scripture chronologically with bilingual (English/简体中文) support, responsive layouts, and light/dark themes so key moments stay memorable on any device.

## Features
- **Interactive Timeline** — Alternate layout with event highlights, modal detail pages, and curated Scripture references.
- **Bilingual Experience** — Language switcher toggles English and 简体中文; content driven from JSON (`content/timeline/events.json`).
- **Theme Controls** — Light, dark, and system-aware modes using `next-themes`.
- **Mobile Friendly** — Tailwind styling and motion animations tuned for phones, tablets, and desktops.

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000 to explore the timeline locally. Run `npm run build && npm run start` to emulate production.

## Project Structure
```
app/                 # App router pages and route groups
components/          # UI components, providers, timeline views
content/timeline/    # JSON timeline data and TypeScript loader
lib/                 # i18n dictionaries, shared utilities
```

## Development Tools
- `npm run lint` — Next.js + ESLint (prompts to scaffold config on first run).
- Tailwind CSS with shadcn/ui primitives; styles live in `app/globals.css`.
- Framer Motion adds subtle entrance animations; keep them performant and accessible.

Contributions welcome! See `AGENTS.md` for detailed repository guidelines. Feel free to open issues for feature ideas or translations. Discovered a missing event? Update `content/timeline/events.json` and submit a pull request. Together we can make Scripture’s story easier to follow.
