# AI Build Prompt — Home Service Website Template

Copy everything below this line into your AI assistant (Cursor, ChatGPT, etc.) along with the attached files.

---

## Attach these files

- `@SEO-MASTER-GUIDE.txt` — follow every rule exactly (merged master guide)
- `@fbscrape_{slug}/` — Facebook scrape folder for the business
- This prompt (`AI_BUILD_PROMPT.md`)

## Provide these values

```
DOMAIN: https://www.example.co.uk
PRIMARY CITY: [City A]
SECONDARY CITY: [City B]
REGION: [e.g. Renfrewshire, Perthshire]
SERVICE AREAS: [List 10–15 towns — expand beyond scrape address if needed]
EMAIL: [optional — extract from scrape or ask user]
GOOGLE MAPS URL: [optional]
GBP URL: [optional — for About page embed]
TRACKING PHONE: [optional — null to disable call tracking swap]
GOOGLE ANALYTICS ID: [optional — empty to disable]
FORMSPREE ENDPOINT: [optional — update in ContactForm.tsx]
```

---

## Your role

You are a local SEO web developer building a UK home-service website from the Astro template in this repository. You must follow `SEO-MASTER-GUIDE.txt` exactly.

## Hard constraints

1. **Do NOT change** component layouts, Tailwind classes, page routes, or file structure under `src/sections/` and `src/pages/`. **You MAY change visible text strings** (headings, paragraphs, labels) inside `.tsx` section components and `.astro` page files — just not the HTML structure or styling.
2. **Change** data files, `static/` images, `business.ts`, `astro.config.mjs`, `robots.txt`, page-specific titles/descriptions in `.astro` frontmatter, **and visible text inside `src/sections/` `.tsx` components**.
3. **Do NOT** create pages for services the business does not offer (SEO rule 1.5).
4. **Do NOT** use lorem ipsum or leave placeholder phone numbers at launch.
5. Use UK English spelling (neighbouring, kerb, specialise).
6. `TOTAL_REVIEW_COUNT` in `reviews.ts` must equal the total review count shown on site and in schema.

---

## Step 1 — Extract data from Facebook scrape

Read `info_{slug}.json`:

| Scrape field | Target |
|--------------|--------|
| `title` | Parse into `businessName` and `alternateName` |
| `category` | `gbpCategory` |
| `intro`, `info[]` | Homepage/about copy seed |
| `phone` | `phone`, `phoneDisplay`, `phoneLocal` |
| `address` | Parse towns/postcodes → seed `locations.ts` |
| `facebookUrl` | `facebookUrl` + schema `sameAs` |
| `whatsapp_number` / `wa_link` | `whatsappUrl` if present |

Read `reviews_{slug}.json`:

- Map each recommendation to `reviews.ts` entry (`name`, `text`, `initial`, `initialBg`)
- Set `TOTAL_REVIEW_COUNT` to total available reviews

Read `posts_{slug}.json`:

- Identify services mentioned in captions (e.g. "DE-WEEDING", "HEDGES", "grass cutting")
- Group into 3–5 **categories** with child **services**
- Use post photos for `projects.ts` descriptions
- Do not invent services not mentioned

---

## Step 2 — Copy images to static/

Copy from `fbscrape_{slug}/` to `static/` using a **business-specific prefix** to avoid browser cache collisions with the template's placeholder images:

```
hero_{slug}.jpg   → {business-slug}-hero.jpg
logo_{slug}.png   → {business-slug}-logo.png
about_{slug}.jpg  → {business-slug}-about.jpg
gal_1_{slug}.jpg  → {business-slug}-gal-01.jpg
gal_2_{slug}.jpg  → {business-slug}-gal-02.jpg
gal_3_{slug}.jpg  → {business-slug}-gal-03.jpg
gal_4_{slug}.jpg  → {business-slug}-gal-04.jpg
gal_5_{slug}.jpg  → {business-slug}-gal-05.jpg
gal_6_{slug}.jpg  → {business-slug}-gal-06.jpg
```

Example: for `landscapingltdpaisley`, files become `landscapingltdpaisley-hero.jpg`, `landscapingltdpaisley-logo.png`, etc.

Update `assets` in `src/data/business.ts` to use the new prefixed filenames.

**Why the prefix matters:** Netlify and browsers aggressively cache static files at the same URL. Using new filenames guarantees the real images are served on first deploy rather than stale cached placeholders.

If fewer than 6 gallery images exist, reuse best job photos.

---

## Step 3 — Update config files

### `src/data/business.ts`

Fill all fields. Key rules:

- `businessName` must match Google Business Profile exactly
- `siteUrl` = provided DOMAIN (no trailing slash)
- `mapCenter` and `serviceAreaPolygon` = coordinates covering service towns
- `serviceTypes[]` = list of all services for schema
- `trackingPhone: null` unless tracking number provided
- `assets.hero/logo/about/gallery` = prefixed filenames from Step 2

### `astro.config.mjs`

Set `site` to DOMAIN.

### `static/robots.txt`

Set Sitemap URL to `{DOMAIN}/sitemap.xml`.

---

## Step 4 — Generate data files

### `src/data/categories.ts` (3–5 categories)

Each category needs:

- `slug`: `{category-name}-{primary-city-slug}-{secondary-city-slug}` (lowercase, hyphens)
- `name`, `title`, `description`, `intro`, `localParagraph`
- `serviceSlugs[]`
- Matrix SEO fields: `matrixTitleSuffix`, `serviceNameLower`, `contractorPhrase`, `nearMePhrase`
- Template functions: `metaTemplate`, `introTemplate`, `localTemplate`, `bodyTemplate`, `faqTemplates`
- `image`, `imageAlt` from gallery assets

### `src/data/services.ts` (all services)

Each service needs ALL fields per SEO guide section 6.2:

- `slug`, `title`, `shortTitle`, `navTitle`, `parentCategorySlug`
- `description`, `cardDescription`, `about`, `why`
- `signsYouNeed`, `options`, `localContext`, `whatToExpect`, `whyChooseUs`
- `benefits[]` (4 items), `process[]` (4 steps)
- `faq[]` (minimum 2–4, include "near me" phrasing)
- `image`, `imageAlt`, `iconUrl`, `iconAlt`
- **600–800 words total** across all text fields

Include a `free-quotes` service with `parentCategorySlug: null`.

### `src/data/locations.ts` (10–15 towns recommended)

Each town needs:

- `slug`, `name`, `shortName?`, `title`, `description`, `intro`
- `nearby[]` (3–4 neighbouring town **names** matching other location entries)
- `locationFaqs[]` (minimum 4, include contractor-near-me question)

### `src/data/locationServices.ts`

**Do not edit manually** — matrix pages auto-generate from `categories.ts` + `locations.ts`. Ensure category matrix template functions use the brand name from `business.ts`.

### `src/data/faqs.ts`

Minimum 4 homepage FAQs covering: free quotes, areas covered, core services, how to get started.

### `src/data/reviews.ts`

Real reviews from scrape. `TOTAL_REVIEW_COUNT` = total count.

### `src/data/projects.ts` (4–6 recommended)

Each project:

- `slug`, `title`, `description`, `intro`, `details` (100–200 words)
- `highlights[]`, `serviceType`, `location`, `image`, `imageAlt`
- Link-worthy case studies from real job photos

---

## Step 5 — Update hardcoded text in section components

Two section components contain visible text strings that **must be updated** for each business. These are the only `.tsx` files under `src/sections/` that need editing:

### `src/sections/ExperienceSection/components/ExperienceContent.tsx`

- Update the `<h2>` heading (currently "Need Home Service Help?") to match the business type, e.g. "Need Your Property Cleaned?" or "Need a Free Quote?"
- Update the `<p>` description to describe the actual services offered, using the phone number extracted from the scrape

### `src/sections/HomepageContentSection/index.tsx`

- Update the `<h2>` heading (currently "Home Services in {cities}") to reflect the actual service category, e.g. "Exterior Cleaning Services in {cities}" or "Landscaping Services in {cities}"
- Update the `<p>` description to describe what the business actually does

Do not change any Tailwind classes, JSX structure, or other components in `src/sections/`.

---

## Step 6 — Update About page content

In `src/pages/about.astro`, replace placeholder owner/team blocks with real info from Facebook intro and posts. Keep HTML structure unchanged.

Also update in `src/pages/about.astro`:
- The `<title>` and schema `name` — replace "Home Service Specialists" with the actual service type (e.g. "Exterior Cleaning Specialists")
- The description meta tag

---

## Step 7 — Update services index page

In `src/pages/services/index.astro`:
- Update the `<h1>` to reflect the actual services (e.g. "Exterior Cleaning Services in {cities}") — **check for any previous-build placeholder text here; the template may contain a hardcoded H1 from an example business**
- Update the schema `name` and `description` fields to match

---

## Step 8 — SEO validation checklist

Before finishing, verify against `SEO-MASTER-GUIDE.txt`:

### Titles (Section 4)

- [ ] Homepage: `{Brand} | {Services} in {City A} & {City B}`
- [ ] Service: `{Service} in {City A} & {City B} | {Brand}`
- [ ] Location: `{Services} in {Town} | {Brand}`
- [ ] Matrix: `{Category} in {Town} | {Brand}`
- [ ] Category hub: `{Category} in {City A} & {City B} | {Brand}`

### Content (Sections 5–6)

- [ ] Exactly one H1 per page
- [ ] Service pages have H2 sections in order: About → Signs → Options → Local → What to expect → Why choose us → FAQs
- [ ] Matrix page for **every** town × category combination
- [ ] Meta descriptions 140–160 chars, unique per page
- [ ] No keyword stuffing

### Schema (Section 8)

- [ ] `reviewCount` in schema = `TOTAL_REVIEW_COUNT`
- [ ] Business name in schema = GBP name
- [ ] FAQ schema on homepage, services, locations, matrix, contact
- [ ] Breadcrumbs point to real hub URLs

### Technical (Section 9)

- [ ] Canonical URLs use absolute HTTPS domain
- [ ] Sitemap generated from data files
- [ ] All images have descriptive alt text
- [ ] Internal links use root-relative paths

---

## Step 9 — Build and verify

```bash
npm run build
```

Expected page count:

```
1 + 1 + N_services + N_categories + 1 + N_towns + (N_towns × N_categories) + 3 + N_projects + 1
```

Verify:

- [ ] Zero build errors
- [ ] No "Your Business Name", "Primary City", or placeholder phone numbers remain
- [ ] No "Home Service Help", "Home Services in", or generic descriptions remain — grep: `grep -r "Home Service Help\|home and outdoor services\|tidy workmanship" src/`
- [ ] No hardcoded city/business names from previous builds remain — grep: `grep -r "Perth\|Dundee\|Landscaping\|Fencing" src/`
- [ ] Grep confirms no old business name in `src/`
- [ ] Sitemap lists all expected URLs

---

## Example invocation

```
Build this site following SEO-MASTER-GUIDE.txt and AI_BUILD_PROMPT.md.

Facebook data: fbscrape_landscaping_ltd_paisley/
Domain: https://www.landscapingltdpaisley.co.uk
Primary city: Paisley
Secondary city: Motherwell
Region: Renfrewshire
Service areas: Paisley, Renfrew, Johnstone, Motherwell, Barrhead, Erskine, Linwood, Bridge of Weir, Kilbarchan, Howwood, Elderslie, Lochwinnoch
Email: hello@landscapingltd.co.uk
Tracking phone: null
```

---

## File edit order (recommended)

1. Copy images → `static/` with business-specific prefix
2. `src/data/business.ts` (including prefixed asset paths)
3. `astro.config.mjs` + `static/robots.txt`
4. `src/data/categories.ts`
5. `src/data/services.ts`
6. `src/data/locations.ts`
7. `src/data/faqs.ts`
8. `src/data/reviews.ts`
9. `src/data/projects.ts`
10. `src/sections/ExperienceSection/components/ExperienceContent.tsx` — update heading + description text
11. `src/sections/HomepageContentSection/index.tsx` — update heading + description text
12. `src/pages/about.astro` (owner/team blocks + title)
13. `src/pages/services/index.astro` (H1 + schema name)
14. `npm run build` → fix errors → re-verify checklist

---

## Common mistakes to avoid

- Mismatched review counts (schema says 10, page shows 4)
- Missing matrix pages (highest-impact local SEO pages)
- Category slugs without geo keywords where natural
- Linking service cards to `/contact` instead of service pages
- Redesigning page layouts when adding SEO copy
- Chasing competitor keywords for services not offered
- Forgetting to update `astro.config.mjs` and `robots.txt` domain
- **Using the same image filenames as the template** — always use a business-specific prefix to avoid browser cache serving old placeholder images
- **Leaving hardcoded text in `ExperienceContent.tsx` and `HomepageContentSection/index.tsx`** — these are not covered by data files and must be updated manually
- **Leaving hardcoded previous-build content in `src/pages/services/index.astro` H1** — always check this file for leftover example business names
