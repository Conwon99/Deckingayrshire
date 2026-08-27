# Home Service Website Template

A reusable **Astro + React** template for UK local home-service businesses (fencing, landscaping, plumbing, cleaning, etc.). Page structure, routing, and styling are fixed; all business-specific content lives in data files and `static/` assets.

Built for **local SEO** following [SEO-RULES-GUIDE.txt](./SEO-RULES-GUIDE.txt).

---

## Quick start (build a new site with AI)

1. Scrape the business Facebook page into a folder like `fbscrape_{slug}/` (see format below).
2. Open this project in Cursor (or your AI editor).
3. Paste the contents of [AI_BUILD_PROMPT.md](./AI_BUILD_PROMPT.md) and attach:
   - `@fbscrape_{slug}/`
   - `@SEO-RULES-GUIDE.txt`
   - Your domain URL and any optional overrides (email, GBP URL, tracking phone).
4. Let the AI update data files, copy images, and run `npm run build`.
5. Deploy the `dist/` folder (Netlify config included).

**Example message:**

> Build this site following `SEO-RULES-GUIDE.txt` and `AI_BUILD_PROMPT.md`.  
> Facebook data: `fbscrape_landscaping_ltd_paisley/`  
> Domain: `https://www.landscapingltdpaisley.co.uk`  
> Primary city: Paisley. Service areas: Paisley, Renfrew, Motherwell, Johnstone…

---

## Prerequisites

- Node.js 18+
- npm

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview production build
```

---

## Project structure

```
├── src/
│   ├── data/
│   │   ├── business.ts       # ★ Central NAP, domain, assets, map, SEO helpers
│   │   ├── services.ts       # Individual service pages
│   │   ├── categories.ts     # Category hubs + matrix SEO templates
│   │   ├── locations.ts      # Town pages
│   │   ├── locationServices.ts  # Auto-generated town × category matrix
│   │   ├── projects.ts       # Case study / gallery pages
│   │   ├── reviews.ts        # Review carousel + TOTAL_REVIEW_COUNT
│   │   ├── faqs.ts           # Shared FAQs + buildFaqSchema()
│   │   └── site.ts           # Re-exports SITE_URL, absoluteUrl(), etc.
│   ├── layouts/BaseLayout.astro   # Global schema, meta, OG tags
│   ├── pages/                # Astro routes (do not change structure)
│   ├── sections/             # React UI sections (do not change styling)
│   └── components/
├── static/                   # Public assets (fixed filenames — see below)
├── fbscrape_*/               # Facebook scrape input (reference example included)
├── SEO-RULES-GUIDE.txt       # SEO checklist for every new site
├── AI_BUILD_PROMPT.md        # One-shot AI prompt to populate a new site
└── netlify.toml              # Deploy config
```

---

## Facebook scrape input format

Reference example: [`fbscrape_landscaping_ltd_paisley/`](./fbscrape_landscaping_ltd_paisley/)

```
fbscrape_{slug}/
├── info_{slug}.json          # NAP, category, phone, intro, social URLs
├── reviews_{slug}.json       # Facebook recommendations
├── posts_{slug}.json         # Business posts (services, captions, photos)
├── {slug}.json               # Optional combined export
├── hero_{slug}.jpg
├── logo_{slug}.png
├── about_{slug}.jpg
├── gal_1_{slug}.jpg … gal_6_{slug}.jpg
```

### Key JSON fields (`info_{slug}.json`)

| Field | Maps to |
|-------|---------|
| `title`, `category`, `intro`, `phone`, `address` | `business.ts` NAP + GBP alignment |
| `facebookUrl` | Schema `sameAs` |
| `profilePictureUrl` / `coverPhotoUrl` | Source for logo/hero if local files missing |

### Reviews (`reviews_{slug}.json`)

Use `text` and `user.name` for `reviews.ts`. Set `TOTAL_REVIEW_COUNT` to match **all** reviews (not just carousel sample).

### Posts (`posts_{slug}.json`)

Extract **only services actually offered** from post captions. Do not add pages for services the business does not provide.

---

## Static asset filenames

When building a site, copy scrape images into `static/` using **these fixed names**:

| Template path | Copy from scrape |
|---------------|------------------|
| `/hero.jpg` | `hero_{slug}.jpg` |
| `/logo.png` | `logo_{slug}.png` |
| `/about.jpg` | `about_{slug}.jpg` |
| `/gal_01.jpg` … `/gal_06.jpg` | `gal_1_{slug}.jpg` … `gal_6_{slug}.jpg` |

Paths are referenced via `business.assets` in [`src/data/business.ts`](./src/data/business.ts).

---

## `business.ts` config reference

| Field | Purpose |
|-------|---------|
| `businessName` | Full GBP-legal name (schema) |
| `alternateName` | Short brand name (nav, titles) |
| `tagline` | Homepage hero subtext |
| `gbpCategory` | Primary Google Business Profile category |
| `phone`, `phoneDisplay`, `phoneLocal` | Canonical NAP phone |
| `trackingPhone`, `trackingPhoneLocal` | Optional call-tracking swap (set `null` to disable) |
| `email` | Contact email |
| `siteUrl` | Production domain (HTTPS, no trailing slash) |
| `facebookUrl`, `googleMapsUrl`, `whatsappUrl` | External links + schema |
| `primaryCity`, `secondaryCity`, `region`, `geoRegion` | Geo targeting |
| `address` | PostalAddress for schema |
| `mapCenter`, `serviceAreaPolygon` | Leaflet service area map |
| `assets` | Hero, logo, about, gallery paths |
| `serviceTypes[]` | Schema service list |
| `openingHours[]` | Schema opening hours |
| `googleAnalyticsId`, `googleAdsId` | Empty string = disabled |

Also update when building:

- [`astro.config.mjs`](./astro.config.mjs) → `site` field
- [`static/robots.txt`](./static/robots.txt) → Sitemap URL

---

## Page architecture

Every site generates these page types automatically from data:

| Page | URL pattern |
|------|-------------|
| Homepage | `/` |
| Services hub | `/services` |
| Service pages | `/services/[slug]` |
| Category hubs | `/[category-slug]` |
| Locations hub | `/locations` |
| Town pages | `/locations/[town-slug]` |
| Town × category matrix | `/locations/[town]/[category-slug]` |
| About | `/about` |
| Contact | `/contact` |
| Reviews | `/reviews` |
| Projects | `/projects/[slug]` |
| 404 | `/404` |

**Page count formula:**

```
1 + 1 + N_services + N_categories + 1 + N_towns + (N_towns × N_categories) + 3 + N_projects + 1
```

Example with 3 services, 2 categories, 3 towns, 2 projects: **24 pages**.

Target for production sites: **10–15 towns × 3–5 categories = 90–100+ pages** (see SEO guide).

---

## Phone tracking

Optional dual-number system:

- **Canonical phone** — SSR, schema, initial HTML
- **Tracking phone** — swapped client-side after JS loads

Set `trackingPhone: null` in `business.ts` to use one number everywhere.

---

## Deploy (Netlify)

[`netlify.toml`](./netlify.toml) is preconfigured:

- Build: `npm run build`
- Publish: `dist/`

After deploy:

1. Update `robots.txt` sitemap URL if not done pre-deploy
2. Submit sitemap in Google Search Console
3. Verify NAP matches Google Business Profile exactly

---

## Post-build checklist

- [ ] `npm run build` passes with zero errors
- [ ] No placeholder text (`Your Business Name`, `Primary City`) remains
- [ ] `TOTAL_REVIEW_COUNT` matches visible reviews + schema
- [ ] Every town × category matrix page exists
- [ ] Sitemap includes all indexable routes
- [ ] NAP identical on website, schema, Facebook, GBP
- [ ] Images copied to `static/` with correct filenames
- [ ] `astro.config.mjs` and `robots.txt` use production domain

---

## What not to change

When populating a new site (human or AI):

- **Do not** redesign components, Tailwind classes, or page routes
- **Do not** collapse service page sections — add SEO copy as separate H2 blocks
- **Do not** create pages for services not offered
- **Do not** link service cards to `/contact` — link to service detail pages

See [SEO-RULES-GUIDE.txt](./SEO-RULES-GUIDE.txt) for full rules.

---

## Reference files

| File | Purpose |
|------|---------|
| [SEO-RULES-GUIDE.txt](./SEO-RULES-GUIDE.txt) | Complete SEO checklist |
| [AI_BUILD_PROMPT.md](./AI_BUILD_PROMPT.md) | Copy-paste AI build prompt |
| [fbscrape_landscaping_ltd_paisley/](./fbscrape_landscaping_ltd_paisley/) | Example Facebook scrape |
