import {
  categories,
  getServicesForCategory,
  type ServiceCategory,
} from "@/data/categories";
import { brandName, truncateMeta } from "@/data/business";
import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";
import { getMatrixContent } from "@/data/matrixContent";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type LocationServicePage = {
  locationSlug: string;
  /** Fixed category identifier — links to the county-wide category hub page. */
  categorySlug: string;
  /** Per-town URL segment for this matrix page, e.g. "composite-decking-largs". */
  matrixSlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: LocationServiceFaq[];
  location: LocationPage;
  category: ServiceCategory;
};

const brand = brandName();

/** Only these towns get dedicated town × service pages, each with hand-written copy in
 * matrixContent.ts. Every other town is served by its single location page, and its old
 * town × service URLs 301 to that page (see static/_redirects). */
export const MATRIX_TOWN_SLUGS = [
  "ayr",
  "prestwick",
  "troon",
  "kilmarnock",
  "irvine",
  "kilwinning",
  "largs",
  "cumnock",
  "girvan",
  "stewarton",
];

export const hasMatrixPages = (locationSlug: string) => MATRIX_TOWN_SLUGS.includes(locationSlug);

export const getMatrixSlug = (category: ServiceCategory, locationSlug: string) =>
  `${category.baseSlug}-${locationSlug}`;

const buildLocationServicePage = (
  location: LocationPage,
  category: ServiceCategory,
): LocationServicePage => {
  const displayName = location.shortName ?? location.name;
  const content = getMatrixContent(location.slug, category.baseSlug);
  if (!content) {
    throw new Error(`Missing matrix content for ${location.slug}:${category.baseSlug}`);
  }

  return {
    locationSlug: location.slug,
    categorySlug: category.slug,
    matrixSlug: getMatrixSlug(category, location.slug),
    title: `${category.matrixTitleSuffix} in ${displayName} | ${brand}`,
    h1: `${category.matrixTitleSuffix} in ${displayName}`,
    metaDescription: truncateMeta(content.metaDescription),
    intro: content.intro,
    localParagraph: content.localParagraph,
    bodyParagraph: content.bodyParagraph,
    faqs: content.faqs,
    location,
    category,
  };
};

export const locationServicePages: LocationServicePage[] = locations
  .filter((location) => hasMatrixPages(location.slug))
  .flatMap((location) => categories.map((category) => buildLocationServicePage(location, category)));

export const getLocationServicePage = (locationSlug: string, matrixSlug: string) =>
  locationServicePages.find(
    (page) => page.locationSlug === locationSlug && page.matrixSlug === matrixSlug,
  );

export const getLocationServicePagesForLocation = (locationSlug: string) =>
  locationServicePages.filter((page) => page.locationSlug === locationSlug);

export const getLocationServicePagesForCategory = (categorySlug: string) =>
  locationServicePages.filter((page) => page.categorySlug === categorySlug);

export const getNearbyLocationServiceLinks = (
  page: LocationServicePage,
): Array<{ name: string; href: string }> => {
  const nearby = getNearbyLocationLinks(page.location);
  return nearby.slice(0, 4).map((loc) => ({
    name: loc.name,
    href: hasMatrixPages(loc.slug)
      ? `/locations/${loc.slug}/${getMatrixSlug(page.category, loc.slug)}`
      : `/locations/${loc.slug}`,
  }));
};

export const getLocationServicePath = (locationSlug: string, matrixSlug: string) =>
  `/locations/${locationSlug}/${matrixSlug}`;

export const getServicesForLocationServicePage = (page: LocationServicePage) =>
  getServicesForCategory(page.category);
