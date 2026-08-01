# Le Paddock

Marketing site for Le Paddock, a bar/restaurant/tapas venue in Plessé, France, next to the Solokart circuit. Single-page Next.js site (`app/page.tsx`) backed by a Sanity CMS, with an embedded Sanity Studio at `/studio`.

## Getting started

Package manager is [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the site, or [http://localhost:3000/studio](http://localhost:3000/studio) for the CMS.

## Commands

- `pnpm dev` — start the dev server (Turbopack)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint

## Docs

- [`CLAUDE.md`](./CLAUDE.md) — architecture, conventions, and project state for anyone (human or AI) picking up this codebase
- [`DESIGN.md`](./DESIGN.md) — design tokens and component inventory, kept in sync with `app/globals.css`
