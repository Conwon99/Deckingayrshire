import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";
import type { Character } from "@/data/locationCharacter";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  character: Character;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

type CharacterFaqPair = [LocationFaq, LocationFaq];

const characterFaqs: Record<Character, (name: string) => CharacterFaqPair> = {
  coastalResort: (name) => [
    {
      question: `Does composite decking hold up to sea air in ${name}?`,
      answer: `Yes. Composite decking resists the salt air and damp that coastal towns like ${name} see more of than inland areas, without the rot or fading risk that comes with untreated timber.`,
    },
    {
      question: `Do you build decking for sea-facing gardens in ${name}?`,
      answer: `Yes. ${brand} plans decking for exposed, sea-facing plots in ${name} with secure fixings and weather-resistant boards suited to the coastal conditions.`,
    },
  ],
  harbourTown: (name) => [
    {
      question: `Can you install decking on an older harbourside property in ${name}?`,
      answer: `Yes. ${brand} works with the older housing stock common near the harbour in ${name}, as well as newer estates further from the water.`,
    },
    {
      question: `Does coastal weather affect decking choices in ${name}?`,
      answer: `Yes. ${name}'s coastal position means more damp and salt exposure than inland towns, so ${brand} usually recommends composite boards or well-treated timber for a longer-lasting deck.`,
    },
  ],
  marketTown: (name) => [
    {
      question: `Can you build decking for a compact garden in ${name}'s town centre?`,
      answer: `Yes. ${brand} regularly designs decking for the smaller rear gardens found behind ${name}'s terraced and semi-detached town centre properties, making the most of the available space.`,
    },
    {
      question: `Do you also cover properties on the edge of ${name}?`,
      answer: `Yes. ${brand} covers ${name} town centre as well as larger properties on the outskirts with bigger gardens.`,
    },
  ],
  formerIndustrial: (name) => [
    {
      question: `Can you build decking on a stepped or sloped garden in ${name}?`,
      answer: `Yes. Many gardens in ${name} have changes in level from the town's older terraced housing, and ${brand} regularly builds raised or stepped decking to create a level, usable space.`,
    },
    {
      question: `Do you work on older properties in ${name}?`,
      answer: `Yes. ${brand} fits decking to older terraced and cottage-style properties in ${name} as well as newer housing in the area.`,
    },
  ],
  commuterVillage: (name) => [
    {
      question: `Do you install decking on newer housing estates in ${name}?`,
      answer: `Yes. ${brand} regularly fits decking on newer-build gardens in ${name}, as well as larger gardens on the village's older streets.`,
    },
    {
      question: `Is there a decking contractor covering ${name}?`,
      answer: `Yes. ${brand} is an Ayrshire-wide decking contractor covering ${name} and the surrounding villages and towns.`,
    },
  ],
  ruralVillage: (name) => [
    {
      question: `Can you build decking for a larger rural garden in ${name}?`,
      answer: `Yes. ${brand} builds full-size decks and outdoor seating areas for the larger gardens common around ${name}, as well as smaller patio-style decks.`,
    },
    {
      question: `Do you cover rural properties near ${name}?`,
      answer: `Yes. ${brand} covers ${name} and the surrounding countryside, including farms and rural properties outside the village itself.`,
    },
  ],
};

const makeLocationFaqs = (name: string, character: Character): LocationFaq[] => [
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
  ...characterFaqs[character](name),
];

type LocationSeed = {
  slug: string;
  name: string;
  character: Character;
  nearby: string[];
};

const describe = (name: string, character: Character, nearby: string[]): { description: string; intro: string } => {
  const nearbyPair = nearby.slice(0, 2).join(" and ");

  switch (character) {
    case "coastalResort":
      return {
        description: `${brand} installs decking built to handle sea air and coastal weather for homes across ${name} and the surrounding coastline.`,
        intro: `${name} is one of Ayrshire's coastal towns, and homes here often deal with salt-laden winds and exposed gardens facing the water. ${brand} plans decking with this in mind, choosing boards and fixings that hold up to coastal conditions. The team also covers nearby ${nearbyPair}.`,
      };
    case "harbourTown":
      return {
        description: `${brand} installs decking for homes across ${name}, a working coastal town on the Ayrshire coast.`,
        intro: `${name}'s housing stock ranges from harbourside terraces to newer estates further from the water, and ${brand} plans decking to suit whichever type of garden or yard is available. Coastal damp and salt air are also factored into board and fixing choices. Coverage extends to nearby ${nearbyPair}.`,
      };
    case "marketTown":
      return {
        description: `${brand} installs decking for homes across ${name} and the surrounding market town area.`,
        intro: `${name} has a traditional town centre with terraced and semi-detached homes nearby, many with compact rear gardens where careful planning makes the most of the available space. ${brand} also builds larger decks for properties on the edge of town with bigger plots. The team covers nearby ${nearbyPair}.`,
      };
    case "formerIndustrial":
      return {
        description: `${brand} installs decking for homes across ${name}, including its older terraced streets and newer housing.`,
        intro: `Many properties in ${name} sit on streets built during the town's mining or weaving past, often with stepped or uneven gardens behind. ${brand} regularly builds raised or level decking to work with this kind of terrain, as well as decking for newer housing nearby. Coverage extends to ${nearbyPair}.`,
      };
    case "ruralVillage":
      return {
        description: `${brand} installs composite and timber decking for gardens across ${name} and the surrounding countryside.`,
        intro: `Properties around ${name} tend to have larger gardens and more rural surroundings than towns further along the coast, giving more scope for a full-size deck or outdoor seating area. ${brand} helps plan a layout that suits the space and the way it will be used. The team also covers nearby ${nearbyPair}.`,
      };
    case "commuterVillage":
    default:
      return {
        description: `${brand} installs decking for homes and gardens across ${name} and the surrounding area.`,
        intro: `${name} has grown with a mix of newer housing estates and older streets, so garden sizes vary from compact new-build plots to larger established gardens. ${brand} plans each deck around the space actually available rather than a standard layout. The team also covers nearby ${nearbyPair}.`,
      };
  }
};

const locationSeeds: LocationSeed[] = [
  // Priority tier — largest towns / strongest search signal
  { slug: "ayr", name: "Ayr", character: "coastalResort", nearby: ["Alloway", "Prestwick", "Monkton", "Coylton"] },
  { slug: "prestwick", name: "Prestwick", character: "coastalResort", nearby: ["Ayr", "Monkton", "Troon", "Symington"] },
  { slug: "troon", name: "Troon", character: "coastalResort", nearby: ["Prestwick", "Dundonald", "Monkton", "Ayr"] },
  { slug: "kilmarnock", name: "Kilmarnock", character: "marketTown", nearby: ["Kilmaurs", "Hurlford", "Crosshouse", "Fenwick"] },
  { slug: "irvine", name: "Irvine", character: "harbourTown", nearby: ["Kilwinning", "Dreghorn", "Springside", "Stevenston"] },
  { slug: "kilwinning", name: "Kilwinning", character: "marketTown", nearby: ["Irvine", "Stevenston", "Dalry", "Beith"] },
  { slug: "largs", name: "Largs", character: "coastalResort", nearby: ["Fairlie", "Skelmorlie", "West Kilbride", "Dalry"] },
  { slug: "cumnock", name: "Cumnock", character: "marketTown", nearby: ["Auchinleck", "New Cumnock", "Mauchline", "Dalmellington"] },
  { slug: "girvan", name: "Girvan", character: "harbourTown", nearby: ["Barr", "Dailly", "Maybole", "Patna"] },
  { slug: "stewarton", name: "Stewarton", character: "marketTown", nearby: ["Kilmaurs", "Fenwick", "Dreghorn", "Irvine"] },

  // South Ayrshire
  { slug: "alloway", name: "Alloway", character: "commuterVillage", nearby: ["Ayr", "Maybole", "Coylton", "Monkton"] },
  { slug: "monkton", name: "Monkton", character: "commuterVillage", nearby: ["Prestwick", "Ayr", "Symington", "Troon"] },
  { slug: "symington", name: "Symington", character: "commuterVillage", nearby: ["Prestwick", "Troon", "Monkton", "Dundonald"] },
  { slug: "dundonald", name: "Dundonald", character: "commuterVillage", nearby: ["Troon", "Symington", "Kilmarnock", "Crosshouse"] },
  { slug: "tarbolton", name: "Tarbolton", character: "commuterVillage", nearby: ["Annbank", "Mauchline", "Coylton", "Ayr"] },
  { slug: "annbank", name: "Annbank", character: "commuterVillage", nearby: ["Tarbolton", "Mauchline", "Ayr", "Coylton"] },
  { slug: "coylton", name: "Coylton", character: "commuterVillage", nearby: ["Ayr", "Tarbolton", "Annbank", "Patna"] },
  { slug: "maybole", name: "Maybole", character: "marketTown", nearby: ["Alloway", "Girvan", "Dailly", "Ayr"] },
  { slug: "dailly", name: "Dailly", character: "ruralVillage", nearby: ["Girvan", "Maybole", "Patna", "Barr"] },
  { slug: "barr", name: "Barr", character: "ruralVillage", nearby: ["Girvan", "Dailly", "Patna", "Maybole"] },
  { slug: "patna", name: "Patna", character: "ruralVillage", nearby: ["Dalmellington", "Coylton", "Girvan", "Ayr"] },

  // East Ayrshire
  { slug: "galston", name: "Galston", character: "marketTown", nearby: ["Newmilns", "Darvel", "Hurlford", "Kilmarnock"] },
  { slug: "newmilns", name: "Newmilns", character: "formerIndustrial", nearby: ["Galston", "Darvel", "Hurlford", "Kilmarnock"] },
  { slug: "darvel", name: "Darvel", character: "formerIndustrial", nearby: ["Newmilns", "Galston", "Hurlford", "Kilmarnock"] },
  { slug: "hurlford", name: "Hurlford", character: "formerIndustrial", nearby: ["Kilmarnock", "Galston", "Crosshouse", "Newmilns"] },
  { slug: "crosshouse", name: "Crosshouse", character: "commuterVillage", nearby: ["Kilmarnock", "Hurlford", "Dundonald", "Kilmaurs"] },
  { slug: "mauchline", name: "Mauchline", character: "ruralVillage", nearby: ["Tarbolton", "Annbank", "Auchinleck", "Cumnock"] },
  { slug: "auchinleck", name: "Auchinleck", character: "formerIndustrial", nearby: ["Cumnock", "Mauchline", "New Cumnock", "Galston"] },
  { slug: "new-cumnock", name: "New Cumnock", character: "formerIndustrial", nearby: ["Cumnock", "Auchinleck", "Dalmellington", "Patna"] },
  { slug: "kilmaurs", name: "Kilmaurs", character: "commuterVillage", nearby: ["Kilmarnock", "Stewarton", "Crosshouse", "Fenwick"] },
  { slug: "fenwick", name: "Fenwick", character: "commuterVillage", nearby: ["Kilmarnock", "Stewarton", "Kilmaurs", "Galston"] },
  { slug: "dalmellington", name: "Dalmellington", character: "formerIndustrial", nearby: ["Patna", "New Cumnock", "Cumnock", "Girvan"] },

  // North Ayrshire
  { slug: "saltcoats", name: "Saltcoats", character: "harbourTown", nearby: ["Ardrossan", "Stevenston", "Kilwinning", "West Kilbride"] },
  { slug: "ardrossan", name: "Ardrossan", character: "harbourTown", nearby: ["Saltcoats", "Stevenston", "West Kilbride", "Kilwinning"] },
  { slug: "stevenston", name: "Stevenston", character: "harbourTown", nearby: ["Saltcoats", "Ardrossan", "Kilwinning", "Irvine"] },
  { slug: "west-kilbride", name: "West Kilbride", character: "coastalResort", nearby: ["Largs", "Fairlie", "Ardrossan", "Saltcoats"] },
  { slug: "dalry", name: "Dalry", character: "marketTown", nearby: ["Kilwinning", "Beith", "Kilbirnie", "Largs"] },
  { slug: "beith", name: "Beith", character: "marketTown", nearby: ["Dalry", "Kilbirnie", "Kilwinning", "Largs"] },
  { slug: "kilbirnie", name: "Kilbirnie", character: "marketTown", nearby: ["Beith", "Dalry", "Largs", "Kilwinning"] },
  { slug: "skelmorlie", name: "Skelmorlie", character: "coastalResort", nearby: ["Largs", "Fairlie", "West Kilbride", "Dalry"] },
  { slug: "fairlie", name: "Fairlie", character: "coastalResort", nearby: ["Largs", "Skelmorlie", "West Kilbride", "Ardrossan"] },
  { slug: "dreghorn", name: "Dreghorn", character: "commuterVillage", nearby: ["Irvine", "Springside", "Kilwinning", "Kilmarnock"] },
  { slug: "springside", name: "Springside", character: "commuterVillage", nearby: ["Irvine", "Dreghorn", "Kilwinning", "Kilmarnock"] },
];

export const locations: LocationPage[] = locationSeeds.map(({ slug, name, character, nearby }) => {
  const { description, intro } = describe(name, character, nearby);
  return {
    slug,
    name,
    character,
    title: `Decking Installers in ${name} | ${brand}`,
    description,
    intro,
    nearby,
    locationFaqs: makeLocationFaqs(name, character),
  };
});

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
