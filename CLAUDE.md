# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Le Paddock is a single-page marketing site for a bar/restaurant/tapas venue in Plessé, France. The homepage (`app/page.tsx`) is fully built: header, hero, about, menu highlights, experience gallery, reviews, practical info, and a privatization CTA, all backed by a Sanity CMS. There is no multi-page routing beyond the homepage and the embedded Sanity Studio at `/studio`.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

- `pnpm dev` — start the dev server (Next.js, with Turbopack by default)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint (flat config in `eslint.config.mjs`)

There is no test runner configured in this repo yet.

## Architecture

- **Next.js 16 App Router**: routes/pages live under `app/`. `app/layout.tsx` is the root layout (loads the Lexend/Oswald fonts via `next/font/google`, sets `lang="fr"`, and wraps children in `MotionProvider`); `app/page.tsx` is the root `/` route; `app/studio/[[...tool]]/page.tsx` mounts the embedded Sanity Studio at `/studio`.
- **Content — Sanity CMS**: all page copy, menu data, opening hours, testimonials, and special events live in Sanity, not in code. `sanity/client.ts` + `sanity/env.ts` configure the client; `sanity/lib/queries.ts` holds the GROQ queries; `sanity/lib/fetch.ts` exposes one typed fetch function per document type (`getSiteSettings`, `getHomepage`, `getFoodMenu`, `getDrinksMenu`, `getTestimonials`, `getActiveSpecialEvents`); `sanity/lib/types.ts` holds the corresponding TypeScript types; `sanity/schemaTypes/` defines the Studio schema (documents: `homepage`, `siteSettings`, `foodMenu`, `drinksMenu`, `specialEvent`, `testimonial`). `scripts/seed.ts` is a one-off script that originally pushed the initial content into Sanity — it is not wired to a package.json script and would overwrite live content if re-run; treat it as historical, not a workflow.
- **Data fetching convention**: every section is an `async` server component that calls `getHomepage()` itself to pull its own slice (Next.js dedupes the repeated calls automatically, so this has no network cost). `app/page.tsx` only fetches `getSiteSettings`/`getActiveSpecialEvents` once, since those aren't part of `Homepage`, and passes `settings`/`events` down as props where a section needs them. `Hero` and `PrivatizationCta` need client-side interactivity (`useReducedMotion`, form `useState`) but data fetching can't happen in a `"use client"` component, so each is split into a server wrapper (`Hero.tsx`/`PrivatizationCta.tsx`, self-fetches, no `"use client"`) and a client presentational component (`HeroContent.tsx`/`PrivatizationCtaForm.tsx`, takes the fetched content as a prop). Follow this split when a new section needs both data-fetching and client interactivity.
- **Motion**: all animation goes through the `motion` package, configured globally by `app/providers.tsx` (`reducedMotion="user"`). See `DESIGN.md`'s "Motion conventions" before adding a new animation.
- **Styling**: Tailwind CSS v4, configured via the `@theme` block in `app/globals.css` (no separate `tailwind.config` — v4 uses CSS-based config). This is the single source of truth for every color/type/radius/spacing token — see `DESIGN.md` for the same tokens with usage notes.
- **TypeScript**: path alias `@/*` maps to the repo root (`tsconfig.json`).
- **Static assets**: `public/images/` holds numbered photography (`1.png`–`27.png`) used across the site's sections; not every number is referenced — check before reusing one.

## Design system (`DESIGN.md`)

`DESIGN.md` is the source of truth for this app's visual language — a dark-ground, cream-paper, single-red-accent editorial site built around venue photography. Read it before building or restyling any UI.

**Keep `DESIGN.md` and `app/globals.css` in sync.** Any change to a color, type, radius, or spacing token in `globals.css` must be reflected in `DESIGN.md`'s token tables in the same commit, and vice versa — these two files describing different things is exactly how `DESIGN.md` went stale before.

Key rules — see `DESIGN.md` for the full token tables, component inventory, and rationale:

- **Surfaces**: dark `ground`/`surface` (with `ink`/`muted` text) and cream `surface-paper` (with `ink-on-paper`/`muted-on-paper` text) are two separate token sets — don't cross them on the same surface.
- **Type**: `font-display` (Oswald) for section headlines only, via `SectionHeading`/`Hero`; `font-sans` (Lexend) for everything else.
- **Accent**: one brand red (`action` / `action-strong`) — no multi-color card palette, no claymation illustration.
- **Radius scale**: 12px buttons/inputs, 16px content cards (`PhotoFrame`, review cards), 24px feature cards (`MenuTabsCard`), pill for tabs/badges.
- Use the Tailwind classes generated from `app/globals.css`'s `@theme` tokens (`bg-action`, `text-ink`, `rounded-lg`, `text-display-md`, `py-section`, etc.) rather than inlining raw hex/px values.
- See `DESIGN.md`'s "Do's and Don'ts", "Known Gaps", and "Responsive Behavior" sections before making layout or component decisions.

## Agent skills

### Issue tracker

Issues live in GitHub Issues for `bdauphouy/le-paddock`, using the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), unmapped. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
