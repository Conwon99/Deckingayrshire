# AI Site Build — Complete Reference (All-in-One)

Use this single document when building a UK local home-service website from the Astro template in this repository. Attach `@fbscrape_{slug}/` alongside this file.

---

## PART 1 — YOUR TASK

You are a local SEO web developer. Populate the template with real business data from a Facebook scrape folder. Follow every rule in this document.

### Hard constraints (never break these)

1. **Do NOT change** component layouts, Tailwind classes, page routes, or file structure under `src/sections/`.
2. **Only edit:** `src/data/*.ts`, `static/` images, `src/data/business.ts`, `astro.config.mjs`, `static/robots.txt`, and owner/team text blocks in `src/pages/about.astro`.
3. **Do NOT** create pages for services the business does not offer.
4. **Do NOT** use lorem ipsum or placeholder phone numbers at launch.
5. Use **UK English** (neighbouring, kerb, specialise).
6. `TOTAL_REVIEW_COUNT` in `reviews.ts` must match schema `reviewCount` and the count shown on site.
7. Service cards link to `/services/[slug]` — never `/contact`.
8. When adding SEO copy, change **text only** — do not redesign layouts.

---

## PART 2 — USER INPUTS (fill before starting)

```
DOMAIN:              https://www.example.co.uk
PRIMARY CITY:        [City A]
SECONDARY CITY:      [City B]
REGION:              [e.g. Renfrewshire]
SERVICE AREAS:       [10–15 towns, comma-separated]
EMAIL:               [from scrape or user]
TRACKING PHONE:      null   (or +44 number if provided)
GOOGLE MAPS URL:     [optional]
GOOGLE ANALYTICS ID: [optional — empty to disable]
FORMSPREE ENDPOINT:  [optional — in ContactForm.tsx]
FBSCRAPE FOLDER:     fbscrape_{slug}/
```

---

## PART 3 — FACEBOOK SCRAPE FORMAT

### Folder structure

```
fbscrape_{slug}/
├── info_{slug}.json
├── reviews_{slug}.json
├── posts_{slug}.json
├── {slug}.json              (optional combined export)
├── hero_{slug}.jpg
├── logo_{slug}.png
├── about_{slug}.jpg
├── gal_1_{slug}.jpg … gal_6_{slug}.jpg
```

Reference example: `fbscrape_landscaping_ltd_paisley/`

### Field mapping — `info_{slug}.json`

| Scrape field | Target |
|--------------|--------|
| `title` | `businessName` (full GBP name) + `alternateName` (short brand) |
| `category` | `gbpCategory` |
| `intro`, `info[]` | Homepage/about copy, `tagline` |
| `phone` | `phone`, `phoneDisplay`, `phoneLocal` |
| `address` | Parse postcodes/towns → `locations.ts`; `address` in business.ts |
| `facebookUrl` | `facebookUrl` + schema `sameAs` |
| `whatsapp_number` / `wa_link` | `whatsappUrl` |
| `websites[0]` (maps URL) | `googleMapsUrl` |
| `ratingCount` | `TOTAL_REVIEW_COUNT` baseline |
| `business_hours` | `openingHours` in business.ts |

### Field mapping — `reviews_{slug}.json`

- `user.name` → review `name`
- `text` → review `text`
- `isRecommended: true` → `meta: "Facebook review"`, `time: "recommended"`
- First letter of name → `initial`; assign `initialBg` from: `bg-green-600`, `bg-emerald-500`, `bg-lime-600`, `bg-teal-600`
- Carousel shows a **sample**; `TOTAL_REVIEW_COUNT` = **total** reviews (all on Facebook/GBP)

### Field mapping — `posts_{slug}.json`

- Extract **only services actually mentioned** in post captions
- Group into 3–5 categories with child services
- Use job photos for `projects.ts`
- Do not invent services not in posts

### Image copy — scrape → `static/`

| Template path | Copy from |
|---------------|-----------|
| `/hero.jpg` | `hero_{slug}.jpg` |
| `/logo.png` | `logo_{slug}.png` |
| `/about.jpg` | `about_{slug}.jpg` |
| `/gal_01.jpg` … `/gal_06.jpg` | `gal_1_{slug}.jpg` … `gal_6_{slug}.jpg` |

Reuse best job photos if fewer than 6 gallery images exist.

---

## PART 4 — BUILD ORDER

Execute in this exact order:

1. Copy images → `static/`
2. `src/data/business.ts`
3. `astro.config.mjs` (`site` field) + `static/robots.txt` (Sitemap URL)
4. `src/data/categories.ts`
5. `src/data/services.ts`
6. `src/data/locations.ts` (10–15 towns)
7. `src/data/faqs.ts`
8. `src/data/reviews.ts`
9. `src/data/projects.ts` (4–6 case studies)
10. `src/pages/about.astro` (owner/team blocks only — keep HTML structure)
11. `npm run build` → fix errors → verify checklist (Part 10)

**Do NOT edit** `src/data/locationServices.ts` manually — matrix pages auto-generate from `categories.ts` + `locations.ts`.

---

## PART 5 — FILE SCHEMAS

### `src/data/business.ts`

Central config. All components read from here.

```typescript
businessName: string;        // Must match GBP exactly
alternateName: string;       // Short brand for nav/titles
tagline: string;
gbpCategory: string;
phone: string;                 // +44 format
phoneDisplay: string;
phoneLocal: string;            // 07xxx format for display
trackingPhone: string | null;  // null = no client-side swap
trackingPhoneLocal: string | null;
email: string;
siteUrl: string;               // https://www.domain.co.uk — no trailing slash
facebookUrl: string;
googleMapsUrl: string;
whatsappUrl: string | null;
primaryCity: string;
secondaryCity: string;
region: string;
geoRegion: string;             // e.g. GB-SCT
address: { addressLocality, addressRegion, addressCountry, postalCode? };
mapCenter: [lat, lng];
serviceAreaPolygon: [lat, lng][];  // polygon around service area
assets: {
  hero: "/hero.jpg",
  logo: "/logo.png",
  about: "/about.jpg",
  gallery: ["/gal_01.jpg", ..., "/gal_06.jpg"]
};
serviceTypes: string[];       // All services for schema
openingHours: [{ dayOfWeek[], opens, closes }];
googleAnalyticsId: string;     // "" to disable
googleAdsId: string;           // "" to disable
```

Helpers already exist: `brandName()`, `citiesLabel()`, `homepageTitle()`, `homepageDescription()`, `absoluteUrl()`, `truncateMeta()`.

### `src/data/categories.ts` — 3–5 categories

Each category object:

```typescript
{
  slug: string;              // "{category}-{primary-city-slug}-{secondary-city-slug}"
  name: string;
  title: string;             // "{Category} in {City A} & {City B}"
  description: string;
  intro: string;
  localParagraph: string;
  image: string;             // from business.assets.gallery
  imageAlt: string;
  serviceSlugs: string[];
  // Matrix SEO (used by locationServices.ts):
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;    // e.g. "landscaping contractor"
  nearMePhrase: string;      // e.g. "landscaping near me"
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => { question, answer }[];
}
```

Use `brandName()`, `citiesLabel()`, `business.region` inside template strings.

### `src/data/services.ts` — all services

Each service object (600–800 words total across fields):

```typescript
{
  slug: string;                    // service only, no town
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null; // null for free-quotes
  description: string;             // meta description length
  cardDescription: string;
  iconUrl: string;                 // keep existing animaapp icon URLs
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;            // include "near me" phrasing
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];              // 4 items
  process: string[];               // 4 steps
  faq: { question, answer }[];     // 2–4 items, include near-me question
}
```

**Always include** a `free-quotes` service with `parentCategorySlug: null`.

Service page H2 order (already in layout — fill these sections):
About → Signs you need → Options → Local context → What to expect → Why choose us → FAQs

### `src/data/locations.ts` — 10–15 towns

Each location:

```typescript
{
  slug: string;           // lowercase-hyphenated
  name: string;
  shortName?: string;     // optional shorter display name
  description: string;
  intro: string;
  nearby: string[];       // 3–4 neighbouring town NAMES (must match other entries)
  // title and locationFaqs auto-generated by makeLocationFaqs()
}
```

`locationFaqs` need minimum 4 per town including: "Do you cover {town}?", contractor-near-me variant, quote question, nearby areas question.

### `src/data/reviews.ts`

```typescript
export const TOTAL_REVIEW_COUNT = N;  // MUST match total reviews, not just carousel sample

export const reviews: CustomerReview[] = [
  { name, meta: "Facebook review", time: "recommended", initial, initialBg, text }
];
```

Show 3–4 best reviews in carousel; count reflects all reviews.

### `src/data/faqs.ts` — homepage FAQs

Minimum 4: free quotes, areas covered, core services, how to get started.

Use `buildFaqSchema(faqs)` for JSON-LD — already wired on homepage and contact.

### `src/data/projects.ts` — 4–6 case studies

```typescript
{
  slug: string;
  title: string;           // "{Work Type} in {Town} | {Brand}" — title field is work type only
  description: string;
  intro: string;
  details: string;         // 100–200 words
  highlights: string[];    // 4 bullets
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
}
```

### Files that auto-update from data (do not hardcode business names)

- `src/data/locationServices.ts` — matrix pages from categories × locations
- `src/pages/sitemap.xml.ts` — from all data files
- `src/layouts/BaseLayout.astro` — schema from business.ts + reviews + locations
- All React sections — read from `business.ts` and data files

---

## PART 6 — PAGE ARCHITECTURE

| Page type | URL | Sitemap priority |
|-----------|-----|------------------|
| Homepage | `/` | 1.0 |
| Services hub | `/services` | 0.7 |
| Service page | `/services/[slug]` | 0.85 |
| Category hub | `/[category-slug]` | 0.8 |
| Locations hub | `/locations` | 0.75 |
| Town page | `/locations/[town-slug]` | 0.8 |
| Matrix page | `/locations/[town]/[category-slug]` | 0.75 |
| About | `/about` | 0.5 |
| Contact | `/contact` | 0.5 |
| Reviews | `/reviews` | 0.75 |
| Project | `/projects/[slug]` | 0.6 |
| 404 | `/404` | noindex |

### Page count formula

```
1 + 1 + N_services + N_categories + 1 + N_towns + (N_towns × N_categories) + 3 + N_projects + 1
```

Example: 6 services, 4 categories, 15 towns, 6 projects = **98 pages**.

Target for production: **10–15 towns × 3–5 categories = 90–100+ pages**.

---

## PART 7 — SEO RULES

### Title tag formats

| Page | Format |
|------|--------|
| Homepage | `{Brand} \| {Services} in {City A} & {City B}` |
| Service | `{Service Name} in {City A} & {City B} \| {Brand}` |
| Location | `{Services} in {Town} \| {Brand}` |
| Matrix | `{Category} in {Town} \| {Brand}` |
| Category hub | `{Category} in {City A} & {City B} \| {Brand}` |
| Project | `{Work Type} in {Town} \| {Brand}` |

### Meta descriptions

- 140–160 characters
- Include primary service + cities + "free quote" CTA
- Unique per page — never copy-paste site-wide

### H1 rules

- Exactly **one H1** per page
- Homepage: `{Primary Services} in {City A} & {City B}`
- Service: `{Service Name} in {City A} and {City B}`
- Location: `{Services} in {Town}`
- Matrix: `{Category} in {Town}`

### URL rules

- Lowercase, hyphenated slugs only
- Category slugs include geo: `/landscaping-paisley-motherwell`
- Service slugs are service-only: `/services/grass-cutting` (town on location/matrix pages)
- Canonical: absolute HTTPS, no trailing slash
- Internal links: root-relative `/services/...` not hardcoded domains

### Keyword placement (each page)

Title, H1, first paragraph, one H2, meta description, image alt, one FAQ question.

### Near-me language (body/FAQs only — not titles)

- "If you are searching for a {service} contractor near {Town}..."
- "Do you offer {service} near me in {City A} or {City B}?"

### Internal linking minimums

- Every service page → parent category hub + related services
- Every location page → all matrix pages for that town + nearby towns
- Every category hub → all matrix pages for that category
- Every matrix page → 3–4 nearby town matrix pages (same category)
- Footer: top town × category links for primary cities

### Schema (JSON-LD)

**Global (BaseLayout):** LocalBusiness + WebSite with NAP, areaServed, serviceType, sameAs, aggregateRating, openingHours.

**Per page:**
- Homepage: WebPage + FAQPage
- Service: WebPage + Service + FAQPage + BreadcrumbList
- Category: WebPage + Service + BreadcrumbList
- Location: WebPage + Place + FAQPage + BreadcrumbList
- Matrix: WebPage + Service + Place + FAQPage + BreadcrumbList
- Contact: WebPage + ContactPage + FAQPage
- Project: WebPage + BreadcrumbList

**Schema rules:**
- `reviewCount` = `TOTAL_REVIEW_COUNT`
- `businessName` = GBP name exactly
- `inLanguage: "en-GB"` on all WebPage schemas
- Breadcrumb URLs point to real hubs (`/services`, `/locations`) not `#`

### GBP alignment

- Website business name = GBP business name exactly
- `alternateName` = short brand
- Phone on site = GBP phone
- Every GBP category has a matching website category page
- Link/embed GBP on About and Reviews pages

---

## PART 8 — WHAT NOT TO DO

1. Do not rely on homepage alone for rankings — build town + service matrix pages
2. Do not create thin location pages (one paragraph only)
3. Do not duplicate location sections on the same page
4. Do not redesign layouts when adding SEO copy
5. Do not chase keywords for services not offered
6. Do not leave breadcrumb schema pointing to `#`
7. Do not mismatch review counts (schema vs visible)
8. Do not omit matrix pages — highest-impact local SEO addition
9. Do not link service cards to `/contact`
10. Do not use US spelling
11. Do not keyword stuff
12. Do not copy competitor content word-for-word

---

## PART 9 — ABOUT PAGE (E-E-A-T)

In `src/pages/about.astro`, replace only the placeholder blocks (keep HTML structure):

- **How {brand} Got Started** — business story from Facebook intro/posts
- **Meet the Team** — owner name, role, bio, real photo (`business.assets.about`)
- **Licensed, Insured** — add real credentials if known; otherwise honest placeholders
- **Find Us on Google** — `business.googleMapsUrl`
- **Follow Us** — `business.facebookUrl`

Mark replaced sections; remove `<!-- AI: replace -->` comments when done.

---

## PART 10 — VALIDATION CHECKLIST (run before finishing)

### Content
- [ ] No "Your Business Name", "Primary City", or placeholder phones remain
- [ ] All services from Facebook posts only (nothing invented)
- [ ] 10–15 location towns with `nearby[]` cross-links
- [ ] Matrix page for every town × category
- [ ] 4–6 project pages from real photos
- [ ] 600–800 words per service page across all sections
- [ ] UK English throughout

### SEO
- [ ] All title formats match Part 7
- [ ] One H1 per page
- [ ] Meta descriptions 140–160 chars, unique
- [ ] Category slugs include geo keywords
- [ ] Near-me phrasing in localContext and FAQs

### Technical
- [ ] `business.siteUrl` = `astro.config.mjs` site = `robots.txt` sitemap domain
- [ ] `TOTAL_REVIEW_COUNT` matches schema and reviews page text
- [ ] Images in `static/` with correct filenames
- [ ] `npm run build` passes with zero errors
- [ ] Page count matches formula
- [ ] NAP identical across business.ts, schema, contact page, footer

### Post-build
```bash
npm run build
```

Grep check: no placeholder strings in `src/`.

---

## PART 11 — EXAMPLE (Landscaping Ltd Paisley)

### Inputs
```
DOMAIN: https://www.landscapingltdpaisley.co.uk
PRIMARY CITY: Paisley
SECONDARY CITY: Motherwell
REGION: Renfrewshire
SERVICE AREAS: Paisley, Renfrew, Johnstone, Motherwell, Barrhead, Erskine, Linwood, Bridge of Weir, Kilbarchan, Howwood, Elderslie, Lochwinnoch, Newton Mearns, Giffnock, Clarkston
FBSCRAPE: fbscrape_landscaping_ltd_paisley/
TRACKING PHONE: null
```

### From scrape
- **businessName:** Landscaping Ltd | Paisley → use "Landscaping Ltd" or full GBP name
- **alternateName:** Landscaping Ltd
- **phone:** +44 7935 499327 / 07935 499327
- **category:** Landscape Company
- **Services from posts:** grass cutting, de-weeding, hedge trimming, flat-pack building/assembly, garden tidy-ups
- **Categories suggested:** Grass Cutting, Garden Maintenance (de-weeding, hedges), Garden Buildings (flat-pack)
- **Reviews:** 3 total (Iain Donald, Sharon Wallace, Nic Coutts)
- **whatsapp:** available

### Expected page count (example)
4 services + 3 categories + 15 towns + (15×3) matrix + 4 projects + hubs ≈ **75+ pages**

---

## PART 12 — QUICK REFERENCE: FILES TO EDIT

| File | Action |
|------|--------|
| `static/hero.jpg` etc. | Copy from fbscrape |
| `src/data/business.ts` | Fill all fields |
| `astro.config.mjs` | Set `site` |
| `static/robots.txt` | Set Sitemap URL |
| `src/data/categories.ts` | 3–5 categories with matrix templates |
| `src/data/services.ts` | All services + free-quotes |
| `src/data/locations.ts` | 10–15 towns |
| `src/data/faqs.ts` | 4+ homepage FAQs |
| `src/data/reviews.ts` | Real reviews + TOTAL_REVIEW_COUNT |
| `src/data/projects.ts` | 4–6 case studies |
| `src/pages/about.astro` | Owner/team blocks only |
| `src/data/locationServices.ts` | **DO NOT EDIT** — auto-generated |

---

*End of reference. Attach `@AI-SITE-BUILD-REFERENCE.md` + `@fbscrape_{slug}/` in your AI prompt.*
