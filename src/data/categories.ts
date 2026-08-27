import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  /** Stable prefix used to build per-town matrix URLs, e.g. "composite-decking" + "-fairlie". */
  baseSlug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "composite-decking-ayrshire",
    baseSlug: "composite-decking",
    name: "Composite Decking",
    title: `Composite Decking in ${cities}`,
    description: `Composite decking installation and balustrades across ${cities} and ${region}. Low-maintenance boards, tidy finishing and free quotes.`,
    intro: `${brand} installs composite decking for gardens, patios and commercial spaces across ${region}. Composite boards give a consistent, low-maintenance finish that holds its colour and resists rot, splitting and slipping far better than timber.`,
    localParagraph: `Ayrshire's weather — coastal winds, regular rain and damp winters — is exactly the kind of climate composite decking is designed for. Properties across ${cities} and nearby towns increasingly choose composite boards over timber to cut down on annual staining, sanding and rot repairs.`,
    image: assets.gallery[0],
    imageAlt: `Composite decking installation by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["composite-decking-installation", "composite-decking-balustrades"],
    matrixTitleSuffix: "Composite Decking",
    serviceNameLower: "composite decking",
    contractorPhrase: "composite decking contractor",
    nearMePhrase: "composite decking installers near me",
    metaTemplate: (displayName) =>
      `Composite decking installers in ${displayName} by ${brand}. Low-maintenance composite boards, balustrades and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} installs composite decking in ${town}, giving homes a durable, low-maintenance outdoor space that does not need annual staining or sanding. Boards, colours and edging are chosen to suit the property and how the space will be used.`,
    localTemplate: (town, nearby) =>
      `Gardens in ${town} vary from tight urban plots to larger suburban gardens, and composite decking suits most of them well because it copes with damp Scottish weather without warping or splitting. If you are searching for composite decking installers near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From full garden decks to smaller patio areas, ${brand} installs composite decking in ${town} with a proper subframe, drainage and edge trims for a neat, long-lasting finish. Old timber decking or slabs can be removed and disposed of where needed before the new composite deck goes down. Contact ${brand} for a free composite decking quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install composite decking in ${town}?`,
        answer: `Yes. ${brand} installs composite decking in ${town} and nearby areas, including full garden decks, raised decks and balustrades. Free quotes are available.`,
      },
      {
        question: `Is composite decking worth it for a ${town} garden?`,
        answer: `Composite decking generally costs more upfront than timber, but needs far less maintenance and holds up well against Scottish weather. ${brand} can talk through the cost difference for your project in ${town}.`,
      },
      {
        question: `How do I get a composite decking quote in ${town}?`,
        answer: `Use the contact form with a brief description of the space and your location in ${town}. Photos help speed up the quote. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "timber-decking-ayrshire",
    baseSlug: "timber-decking",
    name: "Timber Decking",
    title: `Timber Decking in ${cities}`,
    description: `Timber decking installation across ${cities} and ${region}. Softwood and hardwood decks, raised decking and free quotes.`,
    intro: `${brand} designs and installs timber decking for gardens and outdoor spaces across ${region}. Timber gives a natural look and is often the more budget-friendly option for a new deck, especially for larger areas.`,
    localParagraph: `Many older and newer homes across ${cities} have sloped or uneven gardens, and timber decking is a practical way to create a level, usable outdoor space. ${brand} can also build raised decking where a garden sits well below or above the house.`,
    image: "/deckingayrshire-timber-installation.jpg",
    imageAlt: `Natural timber decking installation by ${brand}`,
    serviceSlugs: ["timber-decking-installation", "raised-timber-decking"],
    matrixTitleSuffix: "Timber Decking",
    serviceNameLower: "timber decking",
    contractorPhrase: "timber decking contractor",
    nearMePhrase: "timber decking installers near me",
    metaTemplate: (displayName) =>
      `Timber decking installers in ${displayName} by ${brand}. Softwood, hardwood and raised timber decking with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} installs timber decking in ${town}, from simple ground-level decks to raised structures for sloped gardens. Timber type and finish are chosen to suit the budget and how the deck will be used.`,
    localTemplate: (town, nearby) =>
      `Gardens in ${town} often have changes in level or drainage that make a level deck useful, and timber remains a popular and cost-effective choice for larger areas. If you are searching for timber decking installers near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} builds timber decking in ${town} with pressure-treated joists, a proper subframe and either softwood or hardwood boards depending on budget and appearance. Balustrades, steps and lighting can be added where needed. Contact ${brand} for a free timber decking quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install timber decking in ${town}?`,
        answer: `Yes. ${brand} installs timber decking in ${town} and nearby areas, including raised decks for sloped gardens. Free quotes are available.`,
      },
      {
        question: `Can you build raised decking on a sloped garden in ${town}?`,
        answer: `Yes. Many gardens in and around ${town} are sloped or uneven, and ${brand} regularly builds raised timber decking to create a level, safe outdoor space.`,
      },
      {
        question: `How do I get a timber decking quote in ${town}?`,
        answer: `Send a brief description of the space and your location in ${town} through the contact form. Photos are helpful. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "decking-repairs-ayrshire",
    baseSlug: "decking-repairs",
    name: "Decking Repairs",
    title: `Decking Repairs in ${cities}`,
    description: `Decking repairs, resurfacing and restoration across ${cities} and ${region}. Rotten boards, loose balustrades and tired decks made safe again.`,
    intro: `${brand} repairs and restores tired, damaged or unsafe decking across ${region}, whether the deck is timber or composite. A focused repair can often extend the life of a deck by years without a full rebuild.`,
    localParagraph: `Timber decking left untreated over a Scottish winter can quickly develop soft, rotten boards, algae and loose fixings. ${brand} regularly repairs decks across ${cities} that have been neglected for a season or two, as well as older decks that are simply reaching the end of their life.`,
    image: assets.gallery[3],
    imageAlt: `Decking steps built by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["decking-repairs-replacement", "decking-resurfacing-restoration"],
    matrixTitleSuffix: "Decking Repairs",
    serviceNameLower: "decking repairs",
    contractorPhrase: "decking repair contractor",
    nearMePhrase: "decking repairs near me",
    metaTemplate: (displayName) =>
      `Decking repairs in ${displayName} by ${brand}. Rotten board replacement, resurfacing and balustrade repairs with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} repairs decking in ${town}, from replacing individual rotten or damaged boards to resurfacing a full deck. Both timber and composite decking are covered.`,
    localTemplate: (town, nearby) =>
      `Decking in ${town} that has been left untreated over winter can develop soft or slippery boards and loose balustrades. If you are searching for decking repairs near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} inspects decking in ${town} to identify rotten joists, failing boards and loose balustrade posts, then repairs or replaces only what is needed. Where a deck has gone beyond economical repair, ${brand} can also quote for a full replacement. Contact ${brand} for a free decking repair quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you repair decking in ${town}?`,
        answer: `Yes. ${brand} repairs timber and composite decking in ${town} and nearby areas, from single board replacement to full resurfacing. Free quotes are available.`,
      },
      {
        question: `Can you fix a wobbly or unsafe deck in ${town}?`,
        answer: `Yes. ${brand} can inspect a deck in ${town}, identify the cause of movement or instability, and repair joists, fixings or balustrades so the deck is safe to use again.`,
      },
      {
        question: `Is it cheaper to repair or replace decking in ${town}?`,
        answer: `It depends on the condition of the frame. ${brand} will give straightforward advice on repair versus replacement after seeing photos or visiting the property in ${town}.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
