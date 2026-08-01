# Sanity CMS for all editorial content and business facts

Le Paddock is a single-page marketing site with no user accounts, no orders, and no other reason to need a backend. The obvious default for a site this size is to hardcode copy directly in the React components and redeploy on every change.

We used Sanity instead (see `sanity/schemaTypes/`, `sanity/lib/`) because the venue owner is non-technical and needs to edit copy, menus, opening hours, and special events without redeploying or touching code. The trade-off: every content type needs a schema, a GROQ query, and a typed fetch function (`sanity/lib/fetch.ts`) — real ongoing overhead for a static page — in exchange for the owner being able to self-serve content changes through the embedded Studio at `/studio`.
