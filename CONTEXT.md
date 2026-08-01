# Le Paddock

Marketing site for Le Paddock, a bar/restaurant/tapas venue in Plessé, France. All editorial content and business facts live in Sanity CMS, not in code (see ADR-0001).

## Language

**Homepage**:
The singleton Sanity document holding editorial copy for each section of the page (hero, about, menu, experience, reviews, practical info, privatization) — headline, eyebrow, and body text. Does not hold business facts like phone number or opening hours.
_Avoid_: Page content, site content

**Site Settings**:
The singleton Sanity document holding business facts: name, address, phone, email, social URLs, opening hours. Distinct from Homepage — Site Settings is what changes rarely and factually; Homepage is what an editor tunes for tone and messaging.
_Avoid_: Business info, config

**Special Event**:
A dated, orderable announcement (e.g. a themed evening, a one-off offer) shown in the header ticker. Has an `active` flag — inactive events stay in Sanity as a record but are excluded from the ticker.
_Avoid_: Announcement, promo

**Testimonial**:
A customer quote curated by the venue owner in Sanity Studio, name + quote text. Rendered with a Google-style badge for visual trust, but is never fetched from or synced with Google — the styling is cosmetic only, not a second data source.
_Avoid_: Google review, avis (the French section label, not a distinct concept), review

**Privatization**:
Renting the venue for a private event (birthday, corporate event, etc.), requested via a form that opens a pre-filled `mailto:` link. Not the economic/political sense of the word.
_Avoid_: Booking (a booking is a single reservation; privatization is renting the whole venue)

**Menu Category** / **Menu Item** / **Price Tier**:
A Menu (Food or Drinks) is a flat list of Menu Categories, each holding Menu Items. A Menu Item usually has a single `price`, but some (e.g. a bottle available in two sizes) instead carry an array of Price Tiers (`label` + `value`) — the two are mutually exclusive per item, not layered.
_Avoid_: Product, dish (Menu Item covers both food and drinks)
