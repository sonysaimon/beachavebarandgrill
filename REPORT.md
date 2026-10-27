# Beach Ave Bar & Grill — build report

Local preview: http://localhost:8095/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/beach-ave-bar-and-grill/

## Business facts
| | Value | Source |
|---|---|---|
| Name | Beach Ave Bar & Grill | logo / own site |
| Category | Bar & grill (casual waterfront restaurant) | Google |
| Address | #1–1012 Beach Avenue, Vancouver, BC V6E 1T7 | own site + Google |
| Phone | (604) 676-2337 | own site |
| Email | info@beachavebarandgrill.com | own site |
| Hours | Mon–Fri 11:30–10, Sat–Sun 10–10; HH Mon–Fri 3–5; brunch Sat–Sun 10–2 | own site + menu PDFs + IG |
| Booking | Phone + walk-in only (no OpenTable/Resy found) | searched OpenTable/Resy |
| Ratings | Google 4.5 (694) · $20–30/person | Google Maps |
| Team | None promoted | — |

**Conflicts between sources:** Instagram bio shows postal code "v6z0e7" — a typo; site and
Google agree on V6E 1T7 (used). Brunch handhelds PDF lists bacon add-on at $2.50 vs $2.95 on
the dinner menu — kept each as printed per menu.

## Sources used
- Their website (menus as PDF + all photos + hours), Instagram @beachavebar (bio voice,
  captions, reposted reviews), Google Maps (rating, reviews, review keyword counts),
  web search (no reservation platform exists).

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Cardero's | 4.6 (7,411) | carderos.com | — (site refused connections) | no |
| Tap & Barrel Bridges | 4.6 (3,821) | tapandbarrel.com | Concrete numbers ("36 taps"), book CTA, HH hours | numbers in trust strip |
| Cactus Club English Bay | 4.4 (5,082) | cactusclubcafe.com | HTML menus, promo blocks, features list | HTML menus, promo-style HH/brunch sections |
| CRAFT Beer Market English Bay | 4.4 (1,789) | craftbeermarket.com | Big hero + value prop, "best sunset views" positioning, HH "$10 or less" framing | hero formula, HH framing |
| LOCAL Public Eatery | chain | localpubliceatery.com | Warm neighbourhood story copy | story section tone |

Table stakes: reserve/call CTA up top, accessible menus, merchandised happy hour, patio
photography, hours+map+phone, IG links.
Opportunities nobody uses (all adopted): real Google reviews on the site, full menus with
prices in HTML, full happy-hour menu with prices, indie sunset-neighbourhood positioning.

## Design decisions
- **Palette from their logo**: Bay Night #11131F, Beach Ave teal #2BB8AC, seafoam, foam white,
  plus sunset coral — sunset is their #1 review theme (70+ mentions of the view).
- **Type**: Archivo Expanded Black (boardwalk-poster wide caps) + Hanken Grotesk body; menu
  category headings use the letterspaced caps style of their printed menus.
- **Signature**: live "Tonight at English Bay" sunset-time card in the hero — computed
  client-side (no API) for their exact location; horizon-gradient (coral→gold→teal) dividers.
- **Checker motif**: the blue-checkered liner from their food photos appears as an accent edge
  behind the story photo.
- **Structure**: multi-page (user's choice) — home / menu / visit, mirroring their current nav.
  Primary action everywhere is tap-to-call (they take reservations by phone only).

## What was built
- **index.html** — hero (their food-spread photo, "Sunsets served daily", facts line, call +
  menu CTAs, sunset card); trust strip (4.5★/694, 10 taps, HH 3–5, brunch 10–2); The Hits
  (4 signature dishes with prices + real review quotes); full happy hour board with prices;
  brunch feature; neighbourhood story in their IG voice; gallery; 4.5★ + 6 Google review
  quotes; hours + live Google map; footer; sticky mobile Call/Menu/Directions bar.
- **menu.html** — all four menus (Food/Brunch/Drinks/Happy Hour) tabbed, every price as
  printed, rendered from services.js; deep links (#brunch etc.); links to their PDFs.
- **visit.html** — hours/contact/map, getting-here (seawall, bike lane, parking/transit), FAQ
  (reservations, HH, brunch, groups, kids, GF, takeout).
- JSON-LD Restaurant schema with hours, geo, rating; OG tags; favicon.

## Assumptions
- Demo site; absolute URLs point at web.soichirosaimon.com/beach-ave-bar-and-grill/.
- Phone is the right primary CTA (no booking platform exists).
- Parking/transit guidance (Aquatic Centre lot, #23 bus, False Creek Ferries) inferred from
  the location, not confirmed by the owner.
- FAQ answers on groups/kids/takeout inferred from Google listing + reviews.
- "10 BC craft beers on tap" counted from their printed drinks menu.

## Open questions for the owner
- Delivery/online ordering links (Google shows "Order online") — add if wanted.
- Any events/group-booking offer worth its own section?
- Patio dog policy, and exact takeout process.

## Needs from the owner
- A real sunset/patio wide shot for the hero (current hero is their food spread — good, but a
  golden-hour patio photo would be stronger).
- Confirm parking/transit notes and FAQ answers.

## QA
Desktop 1440 and 390px mobile checked on all three pages · no horizontal overflow · no console
errors · no broken images · menu tabs + deep links verified · map embed loads with correct pin ·
sunset time verified (6:22pm vs actual ~6:24pm) · reduced motion + print fallbacks for reveal
animations · lazy images with width/height.

## Placeholder / generated images
None — every photo is the restaurant's own, taken from beachavebarandgrill.com.
