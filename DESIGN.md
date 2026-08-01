# DESIGN.md

The visual language for Le Paddock, a bar/restaurant/tapas site. This document is generated from what's actually implemented — it has no tokens or components that don't exist in the code.

**Source of truth is `app/globals.css`.** Every token below is a Tailwind v4 `@theme` variable defined there; the tables just give you the value and where it's used without opening the CSS file. **If you change a token in `app/globals.css`, update the matching row here in the same commit** — this file drifted out of sync with the code once already (it used to document an unrelated SaaS product's design system), and the fix is to never let the two move independently again.

The overall feel: a dark, editorial two-tone site — near-black ground with cream-paper card surfaces — built around large photography of the venue, one red accent color, and a condensed display face for headlines. No claymation, no multi-color card palette, no SaaS-style pricing/tab components — this is a single-page restaurant site, not a product marketing site.

## Colors

| Token | Tailwind class(es) | Value | Usage |
|---|---|---|---|
| `--color-ground` | `bg-ground` | `#15161a` | Page background (`body`), Hero background layer |
| `--color-surface` | `bg-surface` | `#1d1f24` | Elevated dark sections — footer, `PracticalInfo`, form fields, cards on dark ground |
| `--color-surface-paper` | `bg-surface-paper` | `#efe6d2` | Cream card surfaces — `MenuTabsCard` |
| `--color-hairline` | `border-hairline` | `#2c2e35` | 1px borders on dark surfaces (nav, footer, buttons, inputs, photo frames) |
| `--color-hairline-paper` | `border-hairline-paper` | `#d8cdae` | 1px borders on cream surfaces (menu item rows) |
| `--color-ink` | `text-ink` | `#f5f1e6` | Primary text and headlines on dark ground |
| `--color-ink-on-paper` | `text-ink-on-paper` | `#17181c` | Primary text on cream surfaces |
| `--color-muted` | `text-muted` | `#a19c8f` | Secondary text on dark ground (sub-heads, nav links, footer body) |
| `--color-muted-on-paper` | `text-muted-on-paper` | `#5c574a` | Secondary text on cream surfaces |
| `--color-action` | `bg-action` / `text-action` | `#d0010a` | The brand red. Solid fills, icons, accents on light/paper surfaces |
| `--color-action-strong` | `text-action-strong` / `border-action-strong` | `#e14a52` | Lighter red tint — text/links/hovers directly on dark ground, where `action` alone fails 4.5:1 contrast |
| `--color-success` | `text-success` etc. | `#4caf6b` | Semantic success (not yet used in a component) |
| `--color-warning` | `text-warning` etc. | `#e2a13c` | Semantic warning (not yet used in a component) |
| `--color-error` | `text-error` etc. | `#d1453d` | Semantic error (not yet used in a component) |

There is no multi-color brand palette. One accent (`action`/`action-strong`) does all brand-color work — buttons, links, active tab state, badges, eyebrow text.

## Typography

Two font families, loaded in `app/layout.tsx` via `next/font/google` and exposed as CSS variables:

- **`--font-sans` → Lexend** — `font-sans` (the `<body>` default). Body copy, nav, buttons, form fields, everything that isn't a section headline.
- **`--font-display` → Oswald** — `font-display`. Section headlines only (`h1`/`h2` via `SectionHeading` and `Hero`).

| Token | Tailwind class | Size | Weight | Line height | Tracking | Usage |
|---|---|---|---|---|---|---|
| `display-xl` | `text-display-xl` | 72px | 600 | 1 | -0.015em | Hero `h1` |
| `display-lg` | `text-display-lg` | 56px | 600 | 1.05 | -0.01em | Hero `h1` (mobile size, `md:` switches to `display-xl`) |
| `display-md` | `text-display-md` | 40px | 500 | 1.1 | -0.01em | Section `h2` (`md:` size) |
| `display-sm` | `text-display-sm` | 32px | 500 | 1.15 | — | Section `h2` (default/mobile size) |
| `title-lg` | `text-title-lg` | 24px | 600 | 1.3 | — | Not yet used |
| `title-md` | `text-title-md` | 18px | 600 | 1.4 | — | Not yet used |
| `title-sm` | `text-title-sm` | 16px | 600 | 1.4 | — | Card/row titles — menu item name, review author name, "Une table, ce soir ?" |
| `body-md` | `text-body-md` | 16px | 400 | 1.55 | — | Default running text |
| `body-sm` | `text-body-sm` | 14px | 400 | 1.55 | — | Secondary/smaller copy — review quotes, footer body, form captions |
| `caption` | `text-caption` | 13px | 500 | 1.4 | — | Fine print, menu item origin line |
| `caption-uppercase` | `text-caption-uppercase` | 16px | 600 | 1.4 | 0 | Eyebrow labels above headlines, ticker text |
| `button` | `text-button` | 14px | 600 | 1 | — | Button labels |
| `nav-link` | `text-nav-link` | 14px | 500 | 1.4 | — | Header/footer nav links |

`SectionHeading` is the canonical pattern: `text-caption-uppercase text-action-strong` eyebrow → `font-display text-display-sm md:text-display-md` title → `text-body-md text-muted` sub. Every section headline on the page follows this exact stack.

## Radius scale

| Token | Class | Value | Usage |
|---|---|---|---|
| `--radius-xs` | `rounded-xs` | 6px | Not yet used |
| `--radius-sm` | `rounded-sm` | 8px | Not yet used |
| `--radius-md` | `rounded-md` | 12px | Buttons, form inputs, mobile menu button |
| `--radius-lg` | `rounded-lg` | 16px | `PhotoFrame`, `GoogleReviewCard`, inline info panels |
| `--radius-xl` | `rounded-xl` | 24px | `MenuTabsCard` |
| `--radius-pill` | `rounded-pill` | 9999px | `Badge`, menu category tabs |

## Spacing

Base Tailwind numeric scale (4px unit) plus two semantic aliases:

- `--spacing-card` → `p-card` = 32px — used as horizontal/bottom padding on `MenuTabsCard`'s content area at `sm:` and up
- `--spacing-section` → `py-section` = 96px — vertical rhythm between every major page section

Max content width is 1280px via `Container` (`max-w-[1280px]`, responsive `px-4 md:px-6 lg:px-8`).

## Components

Only real, implemented components — nothing speculative.

**`Button`** (`components/primitives/Button.tsx`) — four variants: `primary` (red fill, `bg-action text-ink`), `secondary` (transparent, hairline border), `on-color` (dark fill for use over the red), `text-link` (underlined inline text). All share `h-11 rounded-md px-5 text-button`. Renders `<a>` for external/`tel:`/`mailto:` links, `<Link>` otherwise.

**`Badge`** (`components/primitives/Badge.tsx`) — two variants: `accent` (translucent red, `rounded-pill`) and `paper` (cream, for use on the paper surface). Used for Hero highlight chips.

**`SectionHeading`** (`components/primitives/SectionHeading.tsx`) — eyebrow + `h2` + optional sub-line, `align` (`left`/`center`) and `light` (for use on `surface-paper`) props. The one canonical section-title pattern, reused by every section.

**`Container`** (`components/primitives/Container.tsx`) — the only layout-width primitive. Every section wraps its content in one.

**`PhotoFrame`** (`components/primitives/PhotoFrame.tsx`) — `rounded-lg`, hairline border, `next/image` `fill`, optional bottom-to-top gradient overlay toward `ground`. The standard way any photo appears outside the Hero background.

**`MenuTabsCard`** (`components/primitives/MenuTabsCard.tsx`) — the paper-surface card: optional header image, pill category tabs (`bg-action` active / `bg-ink-on-paper/5` inactive), animated height transition (Motion) between categories, rows via `MenuItemRow`.

**`MenuItemRow`** (`components/primitives/MenuItemRow.tsx`) — name/description/origin on the left, price or price-tier list on the right, hairline-paper divider between rows, fade+rise-in on mount.

**`GoogleReviewCard`** / **`GoogleReviewsWidget`** (`components/primitives/GoogleReviewCard.tsx`, `GoogleReviewsWidget.tsx`) — white card (note: literal `bg-white`, not a token — the one place the palette is broken; flag if touching this component) with `Avatar`, name, `StarRating`, quote. Widget is a horizontal snap-scroll track with two round hairline-border nav buttons.

**`Avatar`** (`components/primitives/Avatar.tsx`) — initials-or-generic-icon circle, cycles through 3 fill variants by index (`bg-action`, `bg-ink-on-paper`, `bg-muted-on-paper`).

**`StarRating`** (`components/primitives/StarRating.tsx`) — fixed 5-star row, hardcoded `#F4B400` gold (decorative, not data-driven — there's no rating field on the testimonial content type).

**`Logo`** (`components/primitives/Logo.tsx`) — `next/image` wrapping `public/logo.svg`, fixed `h-9`.

**`Reveal`** (`components/primitives/Reveal.tsx`) — Motion wrapper: fade + rise (`y: 24 → 0`) on scroll into view, `once: true`. Wraps almost every section's content block; this is the standard entrance animation, not a one-off.

**`Parallax`** (`components/primitives/Parallax.tsx`) — scroll-linked transform, used once (Hero background image).

**`Ticker`** (`components/primitives/Ticker.tsx`) — CSS-keyframe marquee (`animate-marquee`, defined in `globals.css`, respects `prefers-reduced-motion`) for the events strip under the header.

**`SiteHeader`** / **`MobileNav`** / **`SiteFooter`** (`components/layout/`) — all three consume the shared `NAV_LINKS` array from `lib/nav.ts`, a fixed 6-item list of same-page anchor links (`#about`, `#carte`, `#experience`, `#avis`, `#privatisation`, `#infos`). Header is `fixed`, `bg-ground/80 backdrop-blur`. Footer sits on `bg-surface`.

**Section components** (`components/sections/*.tsx`) — each wraps `Container` + `Reveal` + `SectionHeading` + section-specific content; each `async`-fetches its own slice of `getHomepage()` (see `CLAUDE.md` for the data-fetching convention, including the server/client split used by `Hero`/`HeroContent` and `PrivatizationCta`/`PrivatizationCtaForm`). `PrivatizationCtaForm` is the one form: plain `<input>`/`<textarea>` styled inline (`fieldClasses` constant, not a token — no shared `TextInput` component yet), submits via `mailto:` link construction, no backend.

## Motion conventions

All animation goes through `motion` (Motion / Framer Motion), configured globally by `MotionProvider` (`app/providers.tsx`) with `reducedMotion="user"` — respects the OS setting everywhere without per-component checks, except `Hero` which also calls `useReducedMotion()` directly to gate its own bespoke transforms. Three vocabulary pieces cover nearly every animation on the site: `Reveal` (scroll-triggered entrance), `Parallax` (Hero background), and Motion's `AnimatePresence`/`animate` for `MenuTabsCard`'s tab-switch. Don't introduce a fourth animation approach without a reason — extend one of these three.

## Do's and Don'ts

### Do
- Use `action` (`#d0010a`) as the only brand accent — buttons, links, active states, eyebrow text.
- Use `action-strong` (`#e14a52`) instead of `action` for text/links sitting directly on `ground` — `action` alone doesn't clear contrast there.
- Pair dark-ground components with `ink`/`muted`/`hairline`; pair paper-surface components with `ink-on-paper`/`muted-on-paper`/`hairline-paper`. Don't cross the two token sets on the same surface.
- Use `font-display` (Oswald) only for section headlines via `SectionHeading`/`Hero`. Everything else is `font-sans` (Lexend).
- Wrap new section content in `Reveal` for the entrance animation, matching every existing section.
- Use `Container` for width, `py-section` for vertical rhythm — every section on the page already does.

### Don't
- Don't introduce a second brand color. One red accent is the system.
- Don't reach for claymation, illustration, or SaaS-style multi-color feature cards — this is a photography-led restaurant site.
- Don't hardcode a hex value that already has a token above (`GoogleReviewCard`'s `bg-white` is the one existing exception — don't add a second).
- Don't add a new animation pattern outside `Reveal`/`Parallax`/Motion's built-ins without a stated reason.

## Responsive behavior

Breakpoints: Tailwind defaults (`md` 768px, `lg` 1024px) plus one custom one, `--breakpoint-wide` at 1440px (`90rem`), used for extra `Container` padding and Hero's scroll-cue offset.

- **Header/nav**: full horizontal nav + socials + phone button at `md:` and up; below that, a hamburger button opens `MobileNav`.
- **Hero**: `display-lg` on mobile → `display-xl` at `md:`.
- **Section grids**: `About` and `PrivatizationCta` go `lg:grid-cols-2`, single column below. `Experience`'s photo gallery is `grid-cols-2` on mobile, `md:grid-cols-4` above.
- **`PrivatizationCta` form**: name/email `sm:grid-cols-2`; phone/date/guests `md:grid-cols-3`.

## Known gaps

- No dedicated form-input component — `PrivatizationCta` styles `<input>`/`<textarea>` inline via a local `fieldClasses` string. If a second form appears, that's the point to extract a `TextInput` primitive.
- `success`/`warning`/`error` tokens exist in `globals.css` but nothing consumes them yet.
- `title-lg` and `title-md` typography tokens exist but aren't used by any current component.
- `GoogleReviewCard`'s `bg-white` is a hardcoded exception to the token system (see Do's and Don'ts).
