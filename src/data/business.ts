/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  /** Empty string = no phone published yet (form-only lead capture). */
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  /** Empty string = no live page yet. */
  facebookUrl: string;
  /** Empty string = no live GBP listing yet. */
  googleMapsUrl: string;
  whatsappUrl: string | null;
  /** Single-city brand — see citiesLabel()/homepageTitle() in this file. */
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "Ayrshire Decking Solutions",
  alternateName: "Ayrshire Decking Solutions",
  tagline: "Composite and timber decking installers covering Ayrshire and the surrounding area.",
  gbpCategory: "Deck Builder",

  phone: "+44 7360 544321",
  phoneDisplay: "+44 7360 544321",
  phoneLocal: "07360 544321",
  trackingPhone: null,
  trackingPhoneLocal: null,

  // TODO: replace with a real inbox before launch.
  email: "hello@deckingayrshire.co.uk",
  siteUrl: "https://deckingayrshire.co.uk",
  // Pre-launch: no live Facebook page or Google Business Profile yet.
  facebookUrl: "",
  googleMapsUrl: "",
  whatsappUrl: null,

  primaryCity: "Ayrshire",
  secondaryCity: "",
  region: "South West Scotland",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Ayr",
    addressRegion: "Ayrshire",
    addressCountry: "GB",
  },

  // Central Ayr, with a service-area polygon covering South, East and North Ayrshire
  // (Ayr, Prestwick, Troon, Kilmarnock, Irvine, Kilwinning, Largs, Cumnock and Girvan).
  mapCenter: [55.4586, -4.6292],
  serviceAreaPolygon: [
    [55.24, -4.86],
    [55.62, -4.90],
    [55.78, -4.75],
    [55.78, -4.40],
    [55.55, -4.20],
    [55.35, -4.35],
    [55.24, -4.86],
  ],

  assets: {
    hero: "/deckingayrshire-hero.webp",
    logo: "/deckingayrshire-logo.png",
    about: "/deckingayrshire-about.webp",
    gallery: [
      "/deckingayrshire-gal-01.webp",
      "/deckingayrshire-gal-02.webp",
      "/deckingayrshire-gal-03.webp",
      "/deckingayrshire-gal-04.webp",
      "/deckingayrshire-gal-05.webp",
      "/deckingayrshire-gal-06.webp",
    ],
  },

  serviceTypes: [
    "Composite decking installation",
    "Composite decking balustrades",
    "Timber decking installation",
    "Raised timber decking",
    "Decking repairs and replacement",
    "Decking resurfacing and restoration",
    "Commercial decking",
    "Decking balustrades and railings",
    "Decking cost and quote guidance",
    "Decking design",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

/** Single-city brand: secondaryCity is unused here (kept in the type for template compatibility). */
export const citiesLabel = () => business.primaryCity;

export const homepageTitle = () =>
  `Decking Ayrshire | Decking Installers & Fitters | ${business.alternateName}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} installs composite and timber decking across Ayrshire and surrounding areas. Decking installation, repairs and free quotes.`,
  );

export const homepageH1 = () => "Decking Installers Ayrshire";

export const defaultKeywords = () =>
  `decking Ayrshire, decking installers Ayrshire, composite decking Ayrshire, timber decking Ayrshire, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} — decking installers in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
