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
  categorySlug: string;
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

export const getLocationServicePage = (locationSlug: string, categorySlug: string) =>
  locationServicePages.find(
    (page) => page.locationSlug === locationSlug && page.categorySlug === categorySlug,
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
    href: `/locations/${loc.slug}/${page.categorySlug}`,
  }));
};

export const getLocationServicePath = (locationSlug: string, categorySlug: string) =>
  `/locations/${locationSlug}/${categorySlug}`;

export const getServicesForLocationServicePage = (page: LocationServicePage) =>
  getServicesForCategory(page.category);
