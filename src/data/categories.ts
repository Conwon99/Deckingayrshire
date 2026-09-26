import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

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
    intro: `Where in Ayrshire does composite decking make the most sense? Mostly where timber struggles: salt-exposed seafront gardens from Largs down to Girvan, shaded plots under mature trees, and damp valley towns where a timber deck never quite dries out.`,
    localParagraph: `Across ${region}, the choice between composite and timber usually comes down to exposure and how much upkeep you're willing to do. On the Clyde coast — Largs, Saltcoats, Ardrossan, Troon, Prestwick and Ayr's seafront — salt air fades and corrodes ordinary materials, so composite with stainless fixings is the safer long-term bet. In the Irvine, Garnock and Doon valleys, higher rainfall and shade make timber prone to algae and rot, and composite avoids most of that. On sheltered, sunny inland plots, the case is closer, and we'll price both honestly.`,
    image: assets.gallery[0],
    imageAlt: `Composite decking installation by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["composite-decking-installation", "composite-decking-balustrades"],
    matrixTitleSuffix: "Composite Decking",
    serviceNameLower: "composite decking",
    contractorPhrase: "composite decking contractor",
    nearMePhrase: "composite decking installers near me",
  },
  {
    slug: "timber-decking-ayrshire",
    baseSlug: "timber-decking",
    name: "Timber Decking",
    title: `Timber Decking in ${cities}`,
    description: `Timber decking installation across ${cities} and ${region}. Softwood and hardwood decks, raised decking and free quotes.`,
    intro: `Timber remains the most common decking choice across Ayrshire, and for good reason: it's the lowest upfront cost, it's easy to shape around awkward plots, and it's the natural material for the tall raised frames that Ayrshire's hillside gardens often need.`,
    localParagraph: `Timber works best in the more sheltered, sunnier parts of ${region}, such as inland commuter villages like Symington, Coylton and Kilmaurs, and the level estates of Kilmarnock, Irvine and Stewarton, where a well-built deck dries out between showers. It's also the usual structural choice for steep gardens in Skelmorlie, Largs, Maybole and the Irvine Valley, even when composite boards go on top. Timber needs more care right on the coast and in the wettest valley towns, and we'll tell you if composite would serve you better.`,
    image: "/deckingayrshire-timber-installation.jpg",
    imageAlt: `Natural timber decking installation by ${brand}`,
    serviceSlugs: ["timber-decking-installation", "raised-timber-decking"],
    matrixTitleSuffix: "Timber Decking",
    serviceNameLower: "timber decking",
    contractorPhrase: "timber decking contractor",
    nearMePhrase: "timber decking installers near me",
  },
  {
    slug: "decking-repairs-ayrshire",
    baseSlug: "decking-repairs",
    name: "Decking Repairs",
    title: `Decking Repairs in ${cities}`,
    description: `Decking repairs, resurfacing and restoration across ${cities} and ${region}. Rotten boards, loose balustrades and tired decks made safe again.`,
    intro: `The deck problems we see across Ayrshire follow the landscape. Coastal decks fail at the fixings, valley decks rot from underneath, and the estate decks many homes got in the early 2000s are now reaching the end of their working life all at once.`,
    localParagraph: `On the coast, salt corrodes zinc-plated screws and loosens balustrades long before the timber gives up, so a re-fix with stainless fixings often saves the deck. In damp inland and valley towns such as Cumnock, Dalmellington, Kilbirnie and the Irvine Valley, the usual culprit is a frame built too close to wet ground. On the large estates around Kilmarnock, Irvine and Ayr, many 15–20-year-old decks need a proper frame check before anyone spends money on new boards. Every repair starts with that check.`,
    image: assets.gallery[3],
    imageAlt: `Decking steps built by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["decking-repairs-replacement", "decking-resurfacing-restoration"],
    matrixTitleSuffix: "Decking Repairs",
    serviceNameLower: "decking repairs",
    contractorPhrase: "decking repair contractor",
    nearMePhrase: "decking repairs near me",
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
