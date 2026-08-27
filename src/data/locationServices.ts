import {
  categories,
  getServicesForCategory,
  type ServiceCategory,
} from "@/data/categories";
import { brandName, truncateMeta } from "@/data/business";
import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type LocationServicePage = {
  locationSlug: string;
  /** Fixed category identifier — links to the county-wide category hub page. */
  categorySlug: string;
  /** Per-town URL segment for this matrix page, e.g. "composite-decking-fairlie". */
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

export const getMatrixSlug = (category: ServiceCategory, locationSlug: string) =>
  `${category.baseSlug}-${locationSlug}`;

const buildLocationServicePage = (
  location: LocationPage,
  category: ServiceCategory,
): LocationServicePage => {
  const town = location.name;
  const displayName = location.shortName ?? location.name;
  const nearbyNames = location.nearby;

  return {
    locationSlug: location.slug,
    categorySlug: category.slug,
    matrixSlug: getMatrixSlug(category, location.slug),
    title: `${category.matrixTitleSuffix} in ${displayName} | ${brand}`,
    h1: `${category.matrixTitleSuffix} in ${displayName}`,
    metaDescription: truncateMeta(category.metaTemplate(displayName)),
    intro: category.introTemplate(town),
    localParagraph: category.localTemplate(town, nearbyNames),
    bodyParagraph: category.bodyTemplate(town),
    faqs: category.faqTemplates(town),
    location,
    category,
  };
};

export const locationServicePages: LocationServicePage[] = locations.flatMap((location) =>
  categories.map((category) => buildLocationServicePage(location, category)),
);

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
    href: `/locations/${loc.slug}/${getMatrixSlug(page.category, loc.slug)}`,
  }));
};

export const getLocationServicePath = (locationSlug: string, matrixSlug: string) =>
  `/locations/${locationSlug}/${matrixSlug}`;

export const getServicesForLocationServicePage = (page: LocationServicePage) =>
  getServicesForCategory(page.category);
