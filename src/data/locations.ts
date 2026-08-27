import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you install decking in ${name}?`,
    answer: `Yes. ${brand} installs and repairs decking in ${name} and nearby areas, including ${categoryNames.toLowerCase()}. Free quotes are available.`,
  },
  {
    question: `Do you offer composite decking in ${name}?`,
    answer: `Yes. ${brand} fits composite decking in ${name} as well as timber decking, repairs and balustrades.`,
  },
  {
    question: `How do I get a decking quote for ${name}?`,
    answer: `Use the contact form with a brief description of the garden and your location in ${name}. Photos are helpful. Free quotes are available with no obligation to proceed.`,
  },
  {
    question: `Is there a decking contractor near ${name}?`,
    answer: `Yes. ${brand} is an Ayrshire-wide decking contractor covering ${name} and surrounding areas, including neighbouring towns and villages.`,
  },
  {
    question: `Do you cover areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and the surrounding ${business.region} area. If you are nearby, get in touch and we can confirm coverage.`,
  },
];

type Character = "town" | "suburbanGarden";

type LocationSeed = {
  slug: string;
  name: string;
  character: Character;
  nearby: string[];
};

const describe = (name: string, character: Character, nearby: string[]): { description: string; intro: string } => {
  const nearbyPair = nearby.slice(0, 2).join(" and ");

  if (character === "town") {
    return {
      description: `${brand} installs decking for homes and gardens across ${name} and the surrounding area.`,
      intro: `${name} has a mix of housing types and garden sizes, and ${brand} plans decking projects to suit whatever space is available, from compact yards to larger family gardens. Coverage extends to nearby ${nearbyPair}.`,
    };
  }

  return {
    description: `${brand} installs composite and timber decking for gardens across ${name}, ${business.region}.`,
    intro: `Many homes in ${name} have private gardens well suited to a full-size deck, and ${brand} helps plan a layout that works with the space, the slope of the garden and how it will be used. The team also covers nearby ${nearbyPair}.`,
  };
};

const locationSeeds: LocationSeed[] = [
  // Priority tier — largest towns / strongest search signal
  { slug: "ayr", name: "Ayr", character: "town", nearby: ["Alloway", "Prestwick", "Monkton", "Coylton"] },
  { slug: "prestwick", name: "Prestwick", character: "town", nearby: ["Ayr", "Monkton", "Troon", "Symington"] },
  { slug: "troon", name: "Troon", character: "town", nearby: ["Prestwick", "Dundonald", "Monkton", "Ayr"] },
  { slug: "kilmarnock", name: "Kilmarnock", character: "town", nearby: ["Kilmaurs", "Hurlford", "Crosshouse", "Fenwick"] },
  { slug: "irvine", name: "Irvine", character: "town", nearby: ["Kilwinning", "Dreghorn", "Springside", "Stevenston"] },
  { slug: "kilwinning", name: "Kilwinning", character: "town", nearby: ["Irvine", "Stevenston", "Dalry", "Beith"] },
  { slug: "largs", name: "Largs", character: "town", nearby: ["Fairlie", "Skelmorlie", "West Kilbride", "Dalry"] },
  { slug: "cumnock", name: "Cumnock", character: "town", nearby: ["Auchinleck", "New Cumnock", "Mauchline", "Dalmellington"] },
  { slug: "girvan", name: "Girvan", character: "town", nearby: ["Barr", "Dailly", "Maybole", "Patna"] },
  { slug: "stewarton", name: "Stewarton", character: "suburbanGarden", nearby: ["Kilmaurs", "Fenwick", "Dreghorn", "Irvine"] },

  // South Ayrshire
  { slug: "alloway", name: "Alloway", character: "suburbanGarden", nearby: ["Ayr", "Maybole", "Coylton", "Monkton"] },
  { slug: "monkton", name: "Monkton", character: "suburbanGarden", nearby: ["Prestwick", "Ayr", "Symington", "Troon"] },
  { slug: "symington", name: "Symington", character: "suburbanGarden", nearby: ["Prestwick", "Troon", "Monkton", "Dundonald"] },
  { slug: "dundonald", name: "Dundonald", character: "suburbanGarden", nearby: ["Troon", "Symington", "Kilmarnock", "Crosshouse"] },
  { slug: "tarbolton", name: "Tarbolton", character: "suburbanGarden", nearby: ["Annbank", "Mauchline", "Coylton", "Ayr"] },
  { slug: "annbank", name: "Annbank", character: "suburbanGarden", nearby: ["Tarbolton", "Mauchline", "Ayr", "Coylton"] },
  { slug: "coylton", name: "Coylton", character: "suburbanGarden", nearby: ["Ayr", "Tarbolton", "Annbank", "Patna"] },
  { slug: "maybole", name: "Maybole", character: "town", nearby: ["Alloway", "Girvan", "Dailly", "Ayr"] },
  { slug: "dailly", name: "Dailly", character: "suburbanGarden", nearby: ["Girvan", "Maybole", "Patna", "Barr"] },
  { slug: "barr", name: "Barr", character: "suburbanGarden", nearby: ["Girvan", "Dailly", "Patna", "Maybole"] },
  { slug: "patna", name: "Patna", character: "suburbanGarden", nearby: ["Dalmellington", "Coylton", "Girvan", "Ayr"] },

  // East Ayrshire
  { slug: "galston", name: "Galston", character: "town", nearby: ["Newmilns", "Darvel", "Hurlford", "Kilmarnock"] },
  { slug: "newmilns", name: "Newmilns", character: "suburbanGarden", nearby: ["Galston", "Darvel", "Hurlford", "Kilmarnock"] },
  { slug: "darvel", name: "Darvel", character: "suburbanGarden", nearby: ["Newmilns", "Galston", "Hurlford", "Kilmarnock"] },
  { slug: "hurlford", name: "Hurlford", character: "suburbanGarden", nearby: ["Kilmarnock", "Galston", "Crosshouse", "Newmilns"] },
  { slug: "crosshouse", name: "Crosshouse", character: "suburbanGarden", nearby: ["Kilmarnock", "Hurlford", "Dundonald", "Kilmaurs"] },
  { slug: "mauchline", name: "Mauchline", character: "suburbanGarden", nearby: ["Tarbolton", "Annbank", "Auchinleck", "Cumnock"] },
  { slug: "auchinleck", name: "Auchinleck", character: "suburbanGarden", nearby: ["Cumnock", "Mauchline", "New Cumnock", "Galston"] },
  { slug: "new-cumnock", name: "New Cumnock", character: "suburbanGarden", nearby: ["Cumnock", "Auchinleck", "Dalmellington", "Patna"] },
  { slug: "kilmaurs", name: "Kilmaurs", character: "suburbanGarden", nearby: ["Kilmarnock", "Stewarton", "Crosshouse", "Fenwick"] },
  { slug: "fenwick", name: "Fenwick", character: "suburbanGarden", nearby: ["Kilmarnock", "Stewarton", "Kilmaurs", "Galston"] },
  { slug: "dalmellington", name: "Dalmellington", character: "suburbanGarden", nearby: ["Patna", "New Cumnock", "Cumnock", "Girvan"] },

  // North Ayrshire
  { slug: "saltcoats", name: "Saltcoats", character: "town", nearby: ["Ardrossan", "Stevenston", "Kilwinning", "West Kilbride"] },
  { slug: "ardrossan", name: "Ardrossan", character: "town", nearby: ["Saltcoats", "Stevenston", "West Kilbride", "Kilwinning"] },
  { slug: "stevenston", name: "Stevenston", character: "suburbanGarden", nearby: ["Saltcoats", "Ardrossan", "Kilwinning", "Irvine"] },
  { slug: "west-kilbride", name: "West Kilbride", character: "suburbanGarden", nearby: ["Largs", "Fairlie", "Ardrossan", "Saltcoats"] },
  { slug: "dalry", name: "Dalry", character: "suburbanGarden", nearby: ["Kilwinning", "Beith", "Kilbirnie", "Largs"] },
  { slug: "beith", name: "Beith", character: "suburbanGarden", nearby: ["Dalry", "Kilbirnie", "Kilwinning", "Largs"] },
  { slug: "kilbirnie", name: "Kilbirnie", character: "suburbanGarden", nearby: ["Beith", "Dalry", "Largs", "Kilwinning"] },
  { slug: "skelmorlie", name: "Skelmorlie", character: "suburbanGarden", nearby: ["Largs", "Fairlie", "West Kilbride", "Dalry"] },
  { slug: "fairlie", name: "Fairlie", character: "suburbanGarden", nearby: ["Largs", "Skelmorlie", "West Kilbride", "Ardrossan"] },
  { slug: "dreghorn", name: "Dreghorn", character: "suburbanGarden", nearby: ["Irvine", "Springside", "Kilwinning", "Kilmarnock"] },
  { slug: "springside", name: "Springside", character: "suburbanGarden", nearby: ["Irvine", "Dreghorn", "Kilwinning", "Kilmarnock"] },
];

export const locations: LocationPage[] = locationSeeds.map(({ slug, name, character, nearby }) => {
  const { description, intro } = describe(name, character, nearby);
  return {
    slug,
    name,
    title: `Decking Installers in ${name} | ${brand}`,
    description,
    intro,
    nearby,
    locationFaqs: makeLocationFaqs(name),
  };
});

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
