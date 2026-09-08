import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";
import { characterDescriptors, characterTraits, type Character } from "@/data/locationCharacter";

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
  introTemplate: (town: string, character: Character, nearby: string[]) => string;
  localTemplate: (town: string, nearby: string[], character: Character) => string;
  bodyTemplate: (town: string, character: Character) => string;
  faqTemplates: (town: string, character: Character, nearby: string[]) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

/** Deterministic small-integer hash used to spread towns across a large pool of hand-written
 * phrasing options for each content slot. Town names are unique across the dataset, so the name
 * itself is a safe selection salt. */
const hashIndex = (input: string, modulo: number): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash % modulo;
};

const pick = <T>(pool: T[], salt: string): T => pool[hashIndex(salt, pool.length)];

const nearbyList = (nearby: string[]) => nearby.slice(0, 3).join(", ") || "surrounding towns";

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
    introTemplate: (town, character) => {
      const descriptor = characterDescriptors[character];
      const trait = characterTraits[character];
      const variants = [
        `${brand} installs composite decking in ${town}, giving homes a durable, low-maintenance outdoor space that does not need annual staining or sanding. Boards, colours and edging are chosen to suit the property and how the space will be used.`,
        `${brand} fits composite decking across ${town} — ${descriptor} — where low-maintenance boards suit ${trait} well. Layout and colour are worked out for the space actually available.`,
        `Composite decking is a popular choice in ${town}, and ${brand} installs it with board colour and edging chosen to suit ${trait} rather than a standard size.`,
        `${brand} has fitted composite decking throughout ${town}, where ${trait} means no two projects look quite the same. Board and layout choices follow the plot.`,
        `Being ${descriptor}, ${town} sees composite decking hold up particularly well against the local weather. ${brand} installs it across the town, sized to whatever garden is on offer.`,
        `${brand} designs composite decking for ${town} properties around ${trait}, choosing board colour and edging to suit the actual space rather than a template.`,
      ];
      return pick(variants, town + "-composite-intro");
    },
    localTemplate: (town, nearby, character) => {
      const descriptor = characterDescriptors[character];
      const trait = characterTraits[character];
      const variants = [
        `Composite decking copes with damp Scottish weather without warping or splitting, which suits ${town} well given it's ${descriptor}. ${brand} covers ${town} and nearby areas including ${nearbyList(nearby)}.`,
        `${town}'s position as ${descriptor} means composite boards hold their finish better than untreated timber would, without the annual sanding or staining. ${brand} covers ${town} and nearby ${nearbyList(nearby)}.`,
        `With ${trait} typical of ${town}, composite decking's low-maintenance finish is a practical match for the local housing. ${brand} installs it across ${town} and out to ${nearbyList(nearby)}.`,
        `${town} sees the same damp Ayrshire weather as the rest of the coast and inland towns alike, and composite decking holds up to that far better than untreated timber. ${brand} covers ${town} and nearby ${nearbyList(nearby)}.`,
        `Because ${town} is ${descriptor}, ${brand} regularly recommends composite decking for its low-maintenance finish, suited to ${trait}. Coverage extends to nearby ${nearbyList(nearby)}.`,
        `${brand} fits composite decking for ${town} properties with ${trait} in mind, avoiding the yearly upkeep timber would need through an Ayrshire winter. The team also covers ${nearbyList(nearby)}.`,
      ];
      return pick(variants, town + "-composite-local");
    },
    bodyTemplate: (town, character) => {
      const trait = characterTraits[character];
      const variants = [
        `From full garden decks to smaller patio areas, ${brand} installs composite decking in ${town} with a proper subframe, drainage and edge trims for a neat, long-lasting finish. Old timber decking or slabs can be removed and disposed of where needed before the new composite deck goes down. Contact ${brand} for a free composite decking quote in ${town}.`,
        `${brand} builds every composite deck in ${town} on a proper subframe with drainage worked in from the start — particularly relevant given ${trait} — finishing edges with trims rather than leaving boards exposed. Get in touch for a free composite decking quote for a ${town} property.`,
        `Whatever the size of the plot in ${town}, ${brand} starts with a level, well-drained subframe before boards go down, then finishes with edge trims for a tidy result. Old timber decking or paving can be removed as part of the job. Contact ${brand} for a free quote.`,
        `Composite decking installs in ${town} follow the same careful process regardless of plot size: a proper subframe, drainage that keeps water moving away from the boards, and neat edge trims to finish. ${brand} can also clear old decking or slabs beforehand.`,
        `${brand} pays close attention to drainage and subframe levelling on every composite job in ${town}, since a poorly drained frame is the main cause of problems further down the line — worth extra care given ${trait}. Contact ${brand} for a free ${town} quote.`,
        `For composite decking in ${town}, ${brand} builds a proper subframe and drainage layer before boards are laid, with edge trims added at the end for a clean finish. Get a free composite decking quote for your ${town} property.`,
      ];
      return pick(variants, town + "-composite-body");
    },
    faqTemplates: (town, character) => {
      const descriptor = characterDescriptors[character];
      const q1 = pick(
        [
          { question: `Do you install composite decking in ${town}?`, answer: `Yes. ${brand} installs composite decking in ${town} and nearby areas, including full garden decks, raised decks and balustrades. Free quotes are available.` },
          { question: `Can I get composite decking fitted in ${town}?`, answer: `Yes — ${brand} covers ${town} for composite decking, from full garden installs to smaller platforms and balustrades. Free, no-obligation quotes are available.` },
          { question: `Does ${brand} cover ${town} for composite decking work?`, answer: `Yes. ${town} is within ${brand}'s standard composite decking coverage, alongside raised decks, balustrades and repairs.` },
          { question: `Is composite decking something you install in ${town} specifically?`, answer: `Yes — ${town} is a regular coverage area for ${brand}, including full garden decks, raised sections and balustrades. Free quotes, no obligation.` },
        ],
        town + "-composite-faq1",
      );
      const q2 = pick(
        [
          { question: `Is composite decking worth it for a ${town} garden?`, answer: `Composite decking generally costs more upfront than timber, but needs far less maintenance and holds up well against Scottish weather. ${brand} can talk through the cost difference for your project in ${town}.` },
          { question: `Does composite decking cost more than timber in ${town}?`, answer: `Upfront, yes — composite costs more than timber, but it needs far less upkeep over the years. ${brand} can run through the real cost difference for a ${town} project.` },
          { question: `Is the extra cost of composite decking worth it for ${town} homes?`, answer: `For most ${town} properties, being ${descriptor}, the lower ongoing maintenance tends to offset the higher upfront cost over a few years. ${brand} can compare composite and timber costs for your garden.` },
          { question: `How does composite decking compare on cost to timber in ${town}?`, answer: `Composite costs more to install than timber but needs no annual staining or sanding, which adds up over time. ${brand} can quote both options for a ${town} property so you can compare.` },
        ],
        town + "-composite-faq2",
      );
      const q3 = pick(
        [
          { question: `How do I get a composite decking quote in ${town}?`, answer: `Use the contact form with a brief description of the space and your location in ${town}. Photos help speed up the quote. There is no obligation to proceed.` },
          { question: `What's the quickest way to get a composite decking quote for ${town}?`, answer: `Send a short description and, ideally, a few photos of the space in ${town} through the contact form — that's usually enough for an initial quote with no obligation to proceed.` },
          { question: `Do you need to visit before quoting for composite decking in ${town}?`, answer: `Not always — for many ${town} projects, a description and photos through the contact form are enough for an initial quote. A visit can follow if needed.` },
          { question: `Can I get a composite decking estimate for ${town} without a site visit?`, answer: `Often, yes. Photos and a brief description of the space in ${town} sent through the contact form usually give ${brand} enough to provide an initial estimate.` },
        ],
        town + "-composite-faq3",
      );
      return [q1, q2, q3];
    },
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
    introTemplate: (town, character) => {
      const descriptor = characterDescriptors[character];
      const trait = characterTraits[character];
      const variants = [
        `${brand} installs timber decking in ${town}, from simple ground-level decks to raised structures for sloped gardens. Timber type and finish are chosen to suit the budget and how the deck will be used.`,
        `${brand} builds timber decking for ${town} properties — ${descriptor} — where ${trait} sets the scale of what's practical.`,
        `Timber decking remains a popular choice across ${town}, and ${brand} fits it to suit ${trait}, from ground-level decks to raised platforms.`,
        `${brand} designs timber decking for ${town} gardens with a budget-first approach — softwood or hardwood, ground-level or raised, chosen to suit ${trait}.`,
        `Given ${town} is ${descriptor}, ${brand} has built timber decks to suit ${trait} — that can mean a simple ground-level deck or a full raised structure depending on the plot.`,
        `${town} homes are typically defined by ${trait}, and ${brand} fits timber decking to match — softwood for budget projects, hardwood for a longer-lasting finish.`,
      ];
      return pick(variants, town + "-timber-intro");
    },
    localTemplate: (town, nearby, character) => {
      const descriptor = characterDescriptors[character];
      const trait = characterTraits[character];
      const variants = [
        `Where a ${town} garden has changes in level or drainage issues, timber remains a popular and cost-effective way to create a level, usable space. ${brand} covers ${town} and nearby areas including ${nearbyList(nearby)}.`,
        `${town} — ${descriptor} — often has ${trait}, and timber decking suits that range particularly well as a cost-effective way to use the space. ${brand} covers ${town} and nearby ${nearbyList(nearby)}.`,
        `Sloped or uneven gardens are common in parts of ${town}, and timber is often the most cost-effective way to level things out. ${brand} covers ${town} and out to ${nearbyList(nearby)}.`,
        `With ${trait} typical of ${town}'s housing stock, timber decking gives a budget-friendly route to a usable outdoor space. ${brand} also covers nearby ${nearbyList(nearby)}.`,
        `${brand} regularly builds timber decking for ${town} properties, where ${trait} means garden layouts vary a lot from plot to plot. Coverage extends to ${nearbyList(nearby)}.`,
        `Timber suits the range of gardens found around ${town} — from compact plots to larger ones — and ${brand} sizes each job accordingly, also covering ${nearbyList(nearby)}.`,
      ];
      return pick(variants, town + "-timber-local");
    },
    bodyTemplate: (town, character) => {
      const trait = characterTraits[character];
      const variants = [
        `${brand} builds timber decking in ${town} with pressure-treated joists, a proper subframe and either softwood or hardwood boards depending on budget and appearance. Balustrades, steps and lighting can be added where needed. Contact ${brand} for a free timber decking quote in ${town}.`,
        `Every timber deck ${brand} builds in ${town} starts with pressure-treated joists and a proper subframe, with softwood or hardwood boards chosen depending on budget. Steps, balustrades and lighting can be added afterwards.`,
        `${brand} uses pressure-treated joists and a solid subframe on every timber decking job in ${town} — worth getting right given ${trait} — then finishes with softwood or hardwood boards to suit the budget.`,
        `Timber decking in ${town} is built by ${brand} on pressure-treated joists with a proper subframe underneath — softwood keeps costs down, hardwood lasts longer. Free quotes available.`,
        `${brand} treats the subframe as the most important part of any timber deck in ${town}: pressure-treated joists, properly levelled, before softwood or hardwood boards go down. Contact ${brand} for a free ${town} quote.`,
        `For timber decking in ${town}, ${brand} builds a pressure-treated joist frame first — factoring in ${trait} — then lays softwood or hardwood boards depending on budget and finish.`,
      ];
      return pick(variants, town + "-timber-body");
    },
    faqTemplates: (town, character) => {
      const trait = characterTraits[character];
      const q1 = pick(
        [
          { question: `Do you install timber decking in ${town}?`, answer: `Yes. ${brand} installs timber decking in ${town} and nearby areas, including raised decks for sloped gardens. Free quotes are available.` },
          { question: `Can you fit timber decking in ${town}?`, answer: `Yes — ${brand} installs timber decking across ${town} and nearby areas, including raised decks for sloped gardens.` },
          { question: `Does ${brand} cover ${town} for timber decking?`, answer: `Yes. ${town} is within ${brand}'s regular timber decking coverage, including raised structures for sloped or uneven gardens.` },
          { question: `Is timber decking something you fit in ${town} specifically?`, answer: `Yes — ${brand} regularly fits timber decking in ${town}, including raised decks where a garden needs levelling.` },
        ],
        town + "-timber-faq1",
      );
      const q2 = pick(
        [
          { question: `Can you build raised decking on a sloped garden in ${town}?`, answer: `Yes. Many gardens in and around ${town} are sloped or uneven, and ${brand} regularly builds raised timber decking to create a level, safe outdoor space.` },
          { question: `Do you handle sloped or uneven gardens in ${town}?`, answer: `Yes. Given ${trait} is typical of ${town}, ${brand} regularly builds raised timber decking to create a level, safe space.` },
          { question: `My ${town} garden isn't level — can you still fit decking?`, answer: `Yes — an uneven garden is common around ${town}, and ${brand} builds raised or stepped timber decking to work with the slope rather than against it.` },
          { question: `Can timber decking cope with a steep garden in ${town}?`, answer: `In most cases, yes. ${brand} has built raised timber decking on sloped ${town} gardens before, to create a level, usable area.` },
        ],
        town + "-timber-faq2",
      );
      const q3 = pick(
        [
          { question: `How do I get a timber decking quote in ${town}?`, answer: `Send a brief description of the space and your location in ${town} through the contact form. Photos are helpful. There is no obligation to proceed.` },
          { question: `What's the quickest way to get a timber decking quote for ${town}?`, answer: `Send a brief description and photos of the space in ${town} through the contact form — that's usually enough for an initial quote.` },
          { question: `Do I need a site visit for a timber decking quote in ${town}?`, answer: `Not always — a description and photos of the ${town} garden through the contact form are often enough for an initial quote.` },
          { question: `How do I get an estimate for timber decking in ${town}?`, answer: `Use the contact form with details and, ideally, photos of the ${town} garden — that usually gives enough to provide an initial estimate.` },
        ],
        town + "-timber-faq3",
      );
      return [q1, q2, q3];
    },
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
    introTemplate: (town, character) => {
      const descriptor = characterDescriptors[character];
      const trait = characterTraits[character];
      const variants = [
        `${brand} repairs decking in ${town}, from replacing individual rotten or damaged boards to resurfacing a full deck. Both timber and composite decking are covered.`,
        `${brand} inspects and repairs decking across ${town} — ${descriptor} — where properties are typically defined by ${trait}.`,
        `${brand} repairs decking across ${town}, timber and composite both — whether that's a handful of rotten boards or a full resurface.`,
        `${town} properties, being ${descriptor}, see ${brand} repair decking to match — from a quick board swap to stripping back and resurfacing an older deck.`,
        `${brand} covers decking repairs throughout ${town}, on both timber and composite decks, whatever the age or style of property.`,
        `Whether it's a handful of rotten boards or a full resurface, ${brand} repairs decking in ${town}, where ${trait} is common.`,
      ];
      return pick(variants, town + "-repairs-intro");
    },
    localTemplate: (town, nearby, character) => {
      const descriptor = characterDescriptors[character];
      const variants = [
        `Decking that has been left untreated over winter can develop soft or slippery boards and loose balustrades, and ${town} — ${descriptor} — is no exception. ${brand} covers ${town} and nearby areas including ${nearbyList(nearby)}.`,
        `${town} properties see the same damp winters as the rest of Ayrshire, and older decks are often the first to show soft boards or loose fixings. ${brand} covers ${town} and nearby ${nearbyList(nearby)}.`,
        `A deck left untreated over an Ayrshire winter can quickly develop soft boards and loose fixings, and ${town} is no exception. ${brand} covers repairs here and out to ${nearbyList(nearby)}.`,
        `Older decks in ${town} are often the first to show wear, particularly given ${town}'s position as ${descriptor}. ${brand} also covers nearby ${nearbyList(nearby)}.`,
        `${brand} regularly repairs decks in ${town} that have been neglected for a season or two — a common issue given how much damp Ayrshire winters bring. Coverage extends to ${nearbyList(nearby)}.`,
        `Whether it's a deck in the centre of ${town} or one on its outskirts, ${brand} repairs decking throughout ${town} and the surrounding area, including ${nearbyList(nearby)}.`,
      ];
      return pick(variants, town + "-repairs-local");
    },
    bodyTemplate: (town, character) => {
      const trait = characterTraits[character];
      const variants = [
        `${brand} inspects decking in ${town} to identify rotten joists, failing boards and loose balustrade posts, then repairs or replaces only what is needed. Where a deck has gone beyond economical repair, ${brand} can also quote for a full replacement. Contact ${brand} for a free decking repair quote in ${town}.`,
        `${brand} starts every repair job in ${town} with an inspection — checking joists, boards and balustrade posts — before fixing only what actually needs it. A full replacement is quoted where repair isn't economical.`,
        `In ${town}, ${brand} inspects the frame as well as the visible boards before quoting a repair — rot often starts in joists that look fine from above. Where the deck is beyond economical repair, a full replacement is quoted instead.`,
        `${brand} checks joists, boards and balustrade fixings on every ${town} repair job, replacing only what's failed rather than the whole deck. Free repair quotes available.`,
        `For decking repairs in ${town}, ${brand} identifies exactly what's failed — rotten joists, worn boards, loose balustrade posts — and repairs only that, factoring in ${trait} where relevant. Contact ${brand} for a free ${town} quote.`,
        `${brand}'s repair process in ${town} starts with checking the structure, not just the boards on top, since loose balustrades and rot often trace back to the frame. Replacement is quoted only where repair won't hold.`,
      ];
      return pick(variants, town + "-repairs-body");
    },
    faqTemplates: (town, character) => {
      const descriptor = characterDescriptors[character];
      const q1 = pick(
        [
          { question: `Do you repair decking in ${town}?`, answer: `Yes. ${brand} repairs timber and composite decking in ${town} and nearby areas, from single board replacement to full resurfacing. Free quotes are available.` },
          { question: `Can you repair a decking in ${town}?`, answer: `Yes — ${brand} repairs timber and composite decking across ${town} and nearby areas, from single board replacement to full resurfacing.` },
          { question: `Does ${brand} do decking repairs in ${town}?`, answer: `Yes. ${town} is within ${brand}'s regular repair coverage, whether that's a few boards or a full resurface.` },
          { question: `Is decking repair something you offer in ${town} specifically?`, answer: `Yes — ${brand} regularly repairs decking in ${town}, covering both timber and composite.` },
        ],
        town + "-repairs-faq1",
      );
      const q2 = pick(
        [
          { question: `Can you fix a wobbly or unsafe deck in ${town}?`, answer: `Yes. ${brand} can inspect a deck in ${town}, identify the cause of movement or instability, and repair joists, fixings or balustrades so the deck is safe to use again.` },
          { question: `My deck in ${town} feels unsafe — can you fix it?`, answer: `Yes. ${brand} can inspect a deck in ${town}, work out what's causing the movement, and repair joists, fixings or balustrades so it's safe to use again.` },
          { question: `Can you sort out a wobbly balustrade or deck in ${town}?`, answer: `Usually, yes. Loose balustrades and unstable decking in ${town} are common after a Scottish winter, and ${brand} repairs the underlying fixings rather than just the surface.` },
          { question: `Is a wobbly deck in ${town} repairable or does it need replacing?`, answer: `Often repairable — ${brand} inspects the frame and fixings on ${town} decks before recommending repair or replacement, so you're not paying for a full rebuild unless it's genuinely needed.` },
        ],
        town + "-repairs-faq2",
      );
      const q3 = pick(
        [
          { question: `Is it cheaper to repair or replace decking in ${town}?`, answer: `It depends on the condition of the frame. ${brand} will give straightforward advice on repair versus replacement after seeing photos or visiting the property in ${town}.` },
          { question: `How much does decking repair cost compared to replacement in ${town}?`, answer: `It depends on the frame's condition. ${brand} gives straightforward repair-versus-replace advice after seeing photos or visiting a property in ${town}.` },
          { question: `Is it usually cheaper to repair decking in ${town} rather than replace it?`, answer: `Often, yes, if the frame is sound — ${brand} can confirm which makes sense after seeing photos or visiting the ${town} property.` },
          { question: `Should I repair or replace my deck in ${town}?`, answer: `That depends on how far the damage goes below the boards. Given ${town} is ${descriptor}, ${brand} will give honest repair-versus-replace advice rather than defaulting to a full rebuild.` },
        ],
        town + "-repairs-faq3",
      );
      return [q1, q2, q3];
    },
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
