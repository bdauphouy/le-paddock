# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a freshly bootstrapped Next.js app (via `create-next-app`) — the App Router structure exists but `app/page.tsx` still contains the default starter content. No custom application logic, components, or routes have been built yet. A design system (`DESIGN.md`) has been defined for the target UI and should be applied as the app is built out.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

- `pnpm dev` — start the dev server (Next.js, with Turbopack by default)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint (flat config in `eslint.config.mjs`)

There is no test runner configured in this repo yet.

## Architecture

- **Next.js 16 App Router**: routes/pages live under `app/`. `app/layout.tsx` is the root layout (loads the Geist Sans/Mono fonts via `next/font/google` and sets global HTML/body structure); `app/page.tsx` is the root `/` route.
- **Styling**: Tailwind CSS v4, configured via the `@theme inline` block in `app/globals.css` (no separate `tailwind.config` — v4 uses CSS-based config). Dark mode is handled with `dark:` variants driven by `prefers-color-scheme`.
- **TypeScript**: path alias `@/*` maps to the repo root (`tsconfig.json`).
- **Static assets**: `public/` contains SVGs and a numbered set of images under `public/images/` (`1.png`–`27.png`) not yet referenced from any component.

## Design system (`DESIGN.md`)

`DESIGN.md` is the source of truth for this app's visual language — a claymation-meets-data interface styled after Clay.com. Read it before building or restyling any UI. Key rules to follow when implementing components:

- **Canvas**: cream-tinted white (`#fffaf0`), never cool gray. Footer stays cream too — this system never uses a dark footer.
- **Type**: Plain Black (fallback: Inter 500 with negative letter-spacing) for display headlines; Inter for everything else (body, nav, buttons). Display weight never exceeds 500.
- **Brand color cards**: a fixed 6-color palette (hot pink, deep teal, lavender, peach, ochre, cream) used for feature cards, cycled in sequence — never repeat the same color twice in a row, and don't introduce a 7th.
- **Radius scale**: 12px buttons/inputs, 16px content cards, 24px feature cards, pill for tabs/badges — defined in `rounded.*` tokens.
- **Illustration**: 3D claymation-style illustrations (mountains, mascots) are the primary brand artifact for heroes and CTA bands; don't substitute flat vector art.
- Use the token references (`{colors.*}`, `{typography.*}`, `{spacing.*}`, `{rounded.*}`, `{component.*}`) from `DESIGN.md` rather than inlining raw hex/px values when translating this system into Tailwind/CSS.
- See `DESIGN.md`'s "Do's and Don'ts", "Known Gaps", and "Responsive Behavior" sections before making layout or component decisions.
