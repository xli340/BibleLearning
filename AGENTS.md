# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js app router pages. Each subfolder (e.g., `timeline/`, `about/`) exposes a route via `page.tsx`.
- `components/` houses reusable UI and provider modules. Grouped by domain (`timeline/`) or primitive (`ui/`).
- `content/timeline/` stores editable data. Update `events.json` to add timeline entries; types live in `index.ts`.
- `lib/` provides shared utilities (`utils.ts`) and localization dictionaries (`i18n.ts`).
- `public/` can host static assets if added later. Keep images organized by feature.

## Build, Test, and Development Commands
- `npm install` — install dependencies before first run.
- `npm run dev` — start Next.js in development mode with hot reload at `http://localhost:3000`.
- `npm run build` — create the production bundle; run before deploying.
- `npm run start` — serve the production build locally (requires prior `npm run build`).
- `npm run lint` — execute Next.js ESLint (first run will prompt to scaffold config).

## Coding Style & Naming Conventions
- TypeScript-first. Prefer `tsx` for components, `ts` for modules.
- Use functional React components with hooks; keep components small and composable.
- Enforce Tailwind for styling; utility classes should follow logical grouping (layout → spacing → color).
- Names: camelCase for variables/functions, PascalCase for components, kebab-case for files unless React component.
- Localization keys live in `lib/i18n.ts`; mirror structure when adding languages.

## Testing Guidelines
- Testing libraries are not yet configured. When adding tests, use Jest + React Testing Library under `__tests__/`.
- Prefer descriptive test names (`it("renders timeline events in order")`).
- Add snapshot or integration tests whenever updating core timeline rendering logic.

## Commit & Pull Request Guidelines
- Commits should be scoped and imperative (`feat: add alternating timeline layout`).
- Reference related issues in commit body or PR description (`Closes #12`).
- Pull requests: include summary, testing notes, and screenshots/GIFs for UI changes. Ensure lint/build pass before requesting review.

## Security & Configuration Tips
- Environment variables belong in `.env.local`; never commit secrets.
- Avoid dynamic `eval` or direct user HTML injection; rely on React rendering and sanitized content sources.
