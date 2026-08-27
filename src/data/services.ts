import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const iconPlanks = "/icons/icon-composite-planks.svg";
const iconBalustrade = "/icons/icon-balustrade.svg";
const iconTimberGrain = "/icons/icon-timber-grain.svg";
const iconSteps = "/icons/icon-steps.svg";
const iconWrench = "/icons/icon-repair-wrench.svg";
const iconRefresh = "/icons/icon-resurface-refresh.svg";
const iconBuilding = "/icons/icon-commercial-building.svg";
const iconPriceTag = "/icons/icon-price-tag.svg";
const iconPencil = "/icons/icon-design-pencil.svg";
const iconQuoteBubble = "/icons/icon-quote-bubble.svg";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "composite-decking-installation",
    title: "Composite Decking Installation",
    shortTitle: "Composite Decking",
    navTitle: "Composite Decking Installation",
    parentCategorySlug: "composite-decking-ayrshire",
    description: `Composite decking installation in ${cities} and ${business.region}. Low-maintenance boards, tidy finishing and free quotes from ${brand}.`,
    cardDescription: `Full composite decking installations with low-maintenance boards that hold up well in Scottish weather.`,
    iconUrl: iconPlanks,
    iconAlt: "Composite decking installation icon",
    image: assets.gallery[0],
    imageAlt: `Composite decking installation by ${brand} in ${business.primaryCity}`,
    about: `${brand} installs composite decking for gardens, patios and commercial spaces across ${business.region}. Composite boards are made from a mix of recycled wood fibre and plastic, giving a consistent colour and grain without the splitting, warping or annual staining that timber needs.`,
    why: `Composite decking suits Ayrshire's climate particularly well. It does not absorb water the way timber does, so it resists rot, mould and slip risk through wet, coastal winters, and the colour does not fade or need re-staining year after year.`,
    signsYouNeed: `If you are planning a new deck and want to avoid ongoing maintenance, composite is usually the better long-term choice over timber. It is also worth considering if a previous timber deck rotted, warped or became slippery within a few years — composite boards are far more resistant to all three.`,
    options: `${brand} fits a range of composite board colours and profiles, from light grey and sandstone tones to darker woodgrain finishes, along with matching edge trims, fascia boards and composite or glass balustrades. Boards can be laid over a new timber or steel subframe, and old timber decking or paving can be removed first if needed.`,
    localContext: `Properties across ${cities} and ${business.region} often deal with damp ground, overhanging trees and exposed gardens — all conditions where composite decking performs better than timber over time. If you are searching for composite decking installers near ${business.primaryCity}, ${brand} covers the whole local area.`,
    whatToExpect: `${brand} will discuss board colour, layout and any balustrades or steps needed, then measure the site and provide a clear quote. On installation day, the subframe is built first, checked for level and drainage, and boards are then fitted with hidden fixings for a clean finish.`,
    whyChooseUs: `${brand} fits composite decking properly — with correct joist spacing, drainage gaps and edge detailing — so the deck performs the way composite is meant to. Customers get a free quote, a clear timeline and a tidy site when the work is finished.`,
    benefits: [
      "Low-maintenance boards that never need staining or sanding.",
      "Strong resistance to rot, mould and slipping in wet weather.",
      "A wide range of colours and edge trim options.",
      `Free quotes across ${cities} and surrounding areas.`,
    ],
    process: [
      "Discuss board colour, layout and any extras such as balustrades.",
      "Measure the site and provide a clear, itemised quote.",
      "Remove old decking or paving and build a level, well-drained subframe.",
      "Fit composite boards and trims and leave the site tidy.",
    ],
    faq: [
      {
        question: "How long does composite decking last?",
        answer: "Good quality composite decking typically lasts 20-30 years with very little maintenance, well beyond the practical lifespan of most timber decks.",
      },
      {
        question: "Do you remove old decking before installing composite?",
        answer: `Yes. ${brand} can remove and dispose of old timber decking, slabs or gravel before building the new subframe.`,
      },
      {
        question: `Do you offer composite decking installers near me in ${business.primaryCity}?`,
        answer: `Yes. ${brand} installs composite decking across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "composite-decking-balustrades",
    title: "Composite Decking Balustrades",
    shortTitle: "Composite Balustrades",
    navTitle: "Composite Balustrades",
    parentCategorySlug: "composite-decking-ayrshire",
    description: `Composite decking balustrades and glass railings in ${cities} and ${business.region}. Fitted to match new or existing composite decks.`,
    cardDescription: `Composite and glass balustrades fitted to raised decks and split-level gardens for safety and a clean, modern finish.`,
    iconUrl: iconBalustrade,
    iconAlt: "Composite decking balustrade icon",
    image: assets.gallery[2],
    imageAlt: `Composite decking balustrade fitted by ${brand}`,
    about: `${brand} fits composite and glass balustrade systems to raised decks, steps and split-level gardens, either as part of a new composite deck build or added to an existing one.`,
    why: `Raised decking of more than a few hundred millimetres generally needs a balustrade for safety, and a composite or glass system keeps the same low-maintenance look as the deck itself rather than mixing in timber posts that need separate upkeep.`,
    signsYouNeed: `A balustrade is worth adding if a deck sits noticeably above garden level, if there are young children or pets using the space, or if an existing timber rail has started to rot, wobble or split at the post bases.`,
    options: `${brand} fits post-and-rail composite balustrades, glass panel systems for an open view, and matching corner and step details. Balustrades can be colour-matched to new composite boards or chosen to contrast for a modern look.`,
    localContext: `Many gardens across ${cities} slope away from the house, leaving decks raised on one or more sides. ${brand} can assess whether a balustrade is needed for safety and fit one that suits the rest of the deck.`,
    whatToExpect: `${brand} will check deck height, post spacing and any building control requirements, then fit posts securely into the deck frame before adding rails or glass panels. The result is checked for stability before the job is signed off.`,
    whyChooseUs: `${brand} fits balustrades that are properly secured into the deck structure, not just screwed to the surface boards, so they stay solid for years. Free quotes are available for balustrades alone or as part of a full composite deck build.`,
    benefits: [
      "Post-and-rail composite or glass panel balustrade options.",
      "Fitted securely into the deck frame, not just the surface boards.",
      "Colour-matched or contrasting finishes available.",
      "Free quotes for standalone or full-deck balustrade jobs.",
    ],
    process: [
      "Check deck height and confirm whether a balustrade is needed.",
      "Agree the balustrade style — post-and-rail or glass panel.",
      "Fit posts securely into the deck frame.",
      "Add rails or glass panels and check stability before finishing.",
    ],
    faq: [
      {
        question: "Do I need a balustrade on my deck?",
        answer: "As a general guide, a raised deck of more than around 600mm usually needs a balustrade for safety. Get in touch and we can advise for your specific deck.",
      },
      {
        question: "Can you add a balustrade to an existing deck?",
        answer: `Yes. ${brand} can fit composite or glass balustrades to an existing composite or timber deck, as long as the frame is sound.`,
      },
    ],
  },
  {
    slug: "timber-decking-installation",
    title: "Timber Decking Installation",
    shortTitle: "Timber Decking",
    navTitle: "Timber Decking Installation",
    parentCategorySlug: "timber-decking-ayrshire",
    description: `Timber decking installation in ${cities} and ${business.region}. Softwood and hardwood decks built to a solid frame with free quotes from ${brand}.`,
    cardDescription: `Softwood and hardwood decking built on a solid, well-drained subframe for a natural garden finish.`,
    iconUrl: iconTimberGrain,
    iconAlt: "Timber decking installation icon",
    image: "/deckingayrshire-timber-installation.jpg",
    imageAlt: `Natural timber decking installation by ${brand}`,
    about: `${brand} designs and builds timber decking for gardens and outdoor spaces across ${business.region}, using pressure-treated softwood or hardwood boards depending on budget and the look required.`,
    why: `Timber decking gives a natural, warm finish and is usually the more affordable option for larger areas compared with composite, making it a good fit for budget-conscious garden projects.`,
    signsYouNeed: `Timber decking is worth considering for a new garden project, or where an uneven or sloped garden needs levelling out to create a usable outdoor space. It also suits customers who prefer the natural look and feel of real wood.`,
    options: `${brand} can build ground-level or raised timber decks, using pressure-treated softwood for a cost-effective option or hardwood for a more premium finish. Steps, balustrades and built-in seating or planters can be added to suit the garden layout.`,
    localContext: `Gardens across ${cities} and ${business.region} vary widely in size and slope, and timber decking is a flexible way to create a level, usable space regardless of the starting ground conditions. If you are searching for timber decking installers near ${business.primaryCity}, ${brand} covers the full local area.`,
    whatToExpect: `${brand} will discuss the size, shape and timber type for the deck, then measure up and provide a clear quote. Work starts with a properly spaced and levelled subframe on suitable foundations, followed by board fitting and any balustrades or steps.`,
    whyChooseUs: `${brand} builds timber decks with correctly spaced joists, adequate ventilation underneath and treated timber throughout, so the deck stays solid and dry for years rather than sagging or rotting prematurely.`,
    benefits: [
      "Softwood and hardwood options to suit different budgets.",
      "Solid, well-drained subframes built to last.",
      "Steps, balustrades and seating can be added.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Discuss deck size, shape and timber type.",
      "Measure the garden and provide a clear quote.",
      "Build a level, well-ventilated subframe on solid foundations.",
      "Fit deck boards, steps and balustrades as agreed.",
    ],
    faq: [
      {
        question: "How long does timber decking last?",
        answer: "With annual cleaning and re-staining, a well-built timber deck typically lasts 10-15 years before boards need significant repair or replacement.",
      },
      {
        question: "Softwood or hardwood — which is better?",
        answer: `Softwood is more affordable and works well for most gardens when properly treated. Hardwood costs more but is naturally more durable. ${brand} can advise based on your budget and how the deck will be used.`,
      },
      {
        question: `Do you offer timber decking installers near me in ${business.primaryCity}?`,
        answer: `Yes. ${brand} installs timber decking across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "raised-timber-decking",
    title: "Raised Timber Decking",
    shortTitle: "Raised Decking",
    navTitle: "Raised Timber Decking",
    parentCategorySlug: "timber-decking-ayrshire",
    description: `Raised timber decking for sloped and split-level gardens in ${cities} and ${business.region}. Free quotes from ${brand}.`,
    cardDescription: `Raised timber decks built on sloped or uneven gardens to create a level, usable outdoor space.`,
    iconUrl: iconSteps,
    iconAlt: "Raised timber decking icon",
    image: "/deckingayrshire-timber-raised.jpg",
    imageAlt: `Raised timber decking with balustrade built by ${brand}`,
    about: `${brand} builds raised timber decking for gardens that slope away from the house or sit at a different level to the rest of the plot. A raised deck creates a flat, safe outdoor area supported on posts and joists rather than resting directly on the ground.`,
    why: `Many properties across ${business.region}, particularly on hillside streets and older housing estates, have gardens that drop steeply from the back door. A raised deck turns that awkward slope into usable outdoor space rather than a wasted bank of grass.`,
    signsYouNeed: `If your garden slopes noticeably from the house, or you have a split-level plot with an unusable lower or upper section, raised decking is usually more practical and often more cost-effective than extensive groundworks or retaining walls.`,
    options: `${brand} designs raised decks on concrete post foundations sized to the height and load involved, with balustrades fitted as standard once the deck reaches typical raised heights. Steps down to the garden, built-in seating and lighting can all be included.`,
    localContext: `Sloped gardens are common across parts of ${cities} and the wider ${business.region} area, and a raised deck is often the most straightforward way to create a level, family-friendly outdoor space without moving large amounts of earth.`,
    whatToExpect: `${brand} will assess the slope and ground conditions, agree the deck height and layout, and design a post and joist structure to suit. Foundations are set first, followed by the frame, decking boards, balustrades and any steps.`,
    whyChooseUs: `${brand} designs raised decks with properly sized posts and foundations for the height involved, rather than under-building a structure that will flex or sag over time. Free quotes are provided after assessing the slope and garden layout.`,
    benefits: [
      "Turns a sloped or split-level garden into usable space.",
      "Post and joist structures sized correctly for the height involved.",
      "Balustrades and steps included as standard where needed.",
      "Free quotes after an initial assessment of the garden.",
    ],
    process: [
      "Assess the slope, ground conditions and desired deck height.",
      "Agree the layout, including steps and balustrades.",
      "Set foundations and build the post and joist structure.",
      "Fit decking boards, balustrades and steps.",
    ],
    faq: [
      {
        question: "Is raised decking more expensive than ground-level decking?",
        answer: "Raised decking generally costs more than ground-level decking because of the additional foundations, structure and balustrades required, but it is usually far more cost-effective than levelling a sloped garden with groundworks.",
      },
      {
        question: "Do I need planning permission for raised decking?",
        answer: `Most raised domestic decks fall under permitted development, but height, boundary proximity and other factors can affect this. ${brand} can advise based on your specific garden.`,
      },
    ],
  },
  {
    slug: "decking-repairs-replacement",
    title: "Decking Repairs & Replacement",
    shortTitle: "Decking Repairs",
    navTitle: "Decking Repairs",
    parentCategorySlug: "decking-repairs-ayrshire",
    description: `Decking repairs and replacement in ${cities} and ${business.region}. Rotten boards, loose balustrades and full deck replacement. Free quotes.`,
    cardDescription: `Repairs for rotten boards, loose balustrades and failing joists, or full deck replacement where needed.`,
    iconUrl: iconWrench,
    iconAlt: "Decking repair icon",
    image: assets.gallery[3],
    imageAlt: `Decking steps built by ${brand}`,
    about: `A deck left untreated over a Scottish winter can quickly develop soft or rotten boards, algae and loose fixings. ${brand} repairs both timber and composite decking across ${business.region}, from single board replacement to full resurfacing.`,
    why: `A focused repair can often restore a deck to a safe, usable condition for a fraction of the cost of a full rebuild, as long as the underlying frame is still sound.`,
    signsYouNeed: `Soft or spongy boards, visible rot around joints, algae making the surface slippery, and loose or wobbly balustrade posts are all common signs that repairs are needed. Left unaddressed, these issues tend to spread to neighbouring boards and joists.`,
    options: `${brand} can replace individual rotten boards, resurface a full deck with new boards on the existing frame, repair or replace failing joists, and re-secure loose balustrades. Where the frame itself has failed, full replacement is usually the more sensible option.`,
    localContext: `Timber decking across ${cities} and ${business.region} is particularly exposed to the damp winters and short summers typical of west-central Scotland, which speeds up rot if a deck has not been treated or maintained. ${brand} can assess damage and recommend the most practical repair.`,
    whatToExpect: `${brand} will inspect the deck, check the condition of the frame as well as the visible boards, and recommend repair or replacement based on what is found. A clear quote is given before any work starts, and old timber is cleared away once finished.`,
    whyChooseUs: `${brand} gives straightforward advice on repair versus replacement rather than defaulting to the more expensive option, and completes repairs to the same standard as a new installation.`,
    benefits: [
      "Repairs for rotten boards, loose balustrades and failing joists.",
      "Full resurfacing where boards are worn but the frame is sound.",
      "Honest advice on repair versus full replacement.",
      "Old timber cleared away as part of the job.",
    ],
    process: [
      "Inspect the deck, including the boards and the frame underneath.",
      "Identify the cause of the damage or instability.",
      "Recommend repair, resurfacing or full replacement.",
      "Complete the agreed work and clear the site.",
    ],
    faq: [
      {
        question: "Can you repair just a few rotten boards?",
        answer: `Yes. If the frame underneath is sound, ${brand} can usually replace individual rotten or damaged boards without needing to rebuild the whole deck.`,
      },
      {
        question: "How do I know if my deck needs replacing rather than repairing?",
        answer: "If the joists or support posts are rotten or the deck feels unstable when walked on, replacement is usually the safer and more cost-effective option. A visual inspection or photos can help confirm this.",
      },
      {
        question: `Do you offer decking repairs near me in ${business.primaryCity}?`,
        answer: `Yes. ${brand} repairs decking across ${cities} and ${business.region}. Contact us with photos of the damage for a quicker quote.`,
      },
    ],
  },
  {
    slug: "decking-resurfacing-restoration",
    title: "Decking Resurfacing & Restoration",
    shortTitle: "Resurfacing",
    navTitle: "Resurfacing & Restoration",
    parentCategorySlug: "decking-repairs-ayrshire",
    description: `Decking resurfacing and restoration in ${cities} and ${business.region}. Fresh boards on an existing frame with free quotes from ${brand}.`,
    cardDescription: `Fresh decking boards fitted to a sound existing frame, restoring the look and safety of a tired deck.`,
    iconUrl: iconRefresh,
    iconAlt: "Decking resurfacing icon",
    image: "/deckingayrshire-project-kilmarnock.webp",
    imageAlt: `Composite decking steps built by ${brand}`,
    about: `Where a deck's frame is still structurally sound but the surface boards are worn, faded or slippery, ${brand} can resurface the deck with new boards rather than rebuilding it from scratch.`,
    why: `Resurfacing is usually significantly cheaper and faster than a full rebuild, and gives the option to switch from tired timber boards to low-maintenance composite while keeping the existing structure.`,
    signsYouNeed: `If a deck's frame and joists check out as sound but the surface is faded, splintering, algae-covered or simply looks tired, resurfacing is often the most cost-effective way to bring the deck back to a good standard.`,
    options: `${brand} can resurface with new timber boards to match the existing style, or switch to composite boards for a lower-maintenance finish going forward. Edge trims and balustrades are updated to match the new surface.`,
    localContext: `Many decks across ${cities} built more than 8-10 years ago are due a refresh, particularly where boards have not been re-stained regularly. Resurfacing is a practical option before considering a full replacement.`,
    whatToExpect: `${brand} will check the frame and joists first to confirm they are sound, then strip back the old surface boards and fit new ones, along with new trims where needed. The finished deck is checked for level and secure fixings before completion.`,
    whyChooseUs: `${brand} only recommends resurfacing where the frame genuinely supports it, so customers are not left with a good-looking surface on an unsafe structure. Free quotes are provided after an inspection.`,
    benefits: [
      "A cost-effective refresh where the frame is still sound.",
      "Option to switch from timber to low-maintenance composite boards.",
      "New edge trims and balustrades to match.",
      "Free quotes after inspecting the existing structure.",
    ],
    process: [
      "Inspect the frame and joists to confirm they are sound.",
      "Agree new board material — timber or composite.",
      "Strip old boards and fit the new surface.",
      "Fit new trims and balustrades and check the finished deck.",
    ],
    faq: [
      {
        question: "Can I switch from timber to composite when resurfacing?",
        answer: `Yes, as long as the existing frame and joist spacing suit composite boards. ${brand} can confirm this during an inspection.`,
      },
      {
        question: "How long does resurfacing take compared to a full rebuild?",
        answer: "Resurfacing is usually quicker than a full rebuild since the frame and foundations are already in place — most domestic decks can be resurfaced within a day or two.",
      },
    ],
  },
  {
    slug: "commercial-decking",
    title: "Commercial Decking",
    shortTitle: "Commercial Decking",
    navTitle: "Commercial Decking",
    parentCategorySlug: null,
    description: `Commercial decking installation across ${cities} and ${business.region} for pubs, restaurants, offices and hospitality venues. Free quotes from ${brand}.`,
    cardDescription: `Decking for beer gardens, restaurant terraces, office spaces and other commercial venues.`,
    iconUrl: iconBuilding,
    iconAlt: "Commercial decking icon",
    image: assets.gallery[4],
    imageAlt: `Large composite decking platform installed by ${brand}`,
    about: `${brand} installs decking for commercial premises across ${business.region}, including beer gardens, restaurant terraces, office break-out spaces and hospitality venues that need a durable, presentable outdoor area.`,
    why: `Commercial decking sees far heavier footfall than a domestic garden deck, so it needs to be built to a higher specification — both for durability and for compliance with access and safety requirements.`,
    signsYouNeed: `If a venue wants to create or expand outdoor seating, needs a safe outdoor walkway or ramp, or has an existing commercial deck that is worn, slippery or no longer meets access standards, it is worth getting a professional assessment.`,
    options: `${brand} can install composite decking for low-maintenance, high-footfall areas, timber decking for a more traditional look, and can incorporate ramps, wider boards for slip resistance, and balustrades that meet commercial safety requirements.`,
    localContext: `Hospitality and office venues across ${cities} increasingly rely on outdoor space to extend usable capacity through the warmer months. ${brand} works with commercial clients to plan decking that suits both the business and the site.`,
    whatToExpect: `${brand} will discuss the venue's requirements, footfall expectations and any access or safety considerations, then provide a detailed quote covering materials, build time and any out-of-hours working needed to avoid disrupting the business.`,
    whyChooseUs: `${brand} understands that commercial projects often need to work around trading hours and higher usage levels than a domestic deck. Free, no-obligation quotes are provided for commercial enquiries of any size.`,
    benefits: [
      "Built to withstand heavy commercial footfall.",
      "Composite or timber options depending on the venue.",
      "Ramps, wider boards and balustrades for access and safety.",
      "Work scheduled to minimise disruption to trading.",
    ],
    process: [
      "Discuss the venue's requirements and footfall expectations.",
      "Assess access, safety and any planning considerations.",
      "Provide a detailed quote covering materials and timescale.",
      "Complete the build, scheduling around trading hours where needed.",
    ],
    faq: [
      {
        question: "Do you work on commercial decking projects of all sizes?",
        answer: `Yes. ${brand} takes on commercial decking projects from small café terraces to larger beer gardens and office spaces across ${cities} and ${business.region}.`,
      },
      {
        question: "Can you work outside normal trading hours?",
        answer: "Yes, where needed. Commercial projects can often be scheduled around a venue's opening hours to minimise disruption — this can be discussed when arranging a quote.",
      },
    ],
  },
  {
    slug: "decking-balustrades-railings",
    title: "Decking Balustrades & Railings",
    shortTitle: "Balustrades & Railings",
    navTitle: "Balustrades & Railings",
    parentCategorySlug: null,
    description: `Decking balustrades and railings across ${cities} and ${business.region}. Timber, composite and glass options with free quotes from ${brand}.`,
    cardDescription: `Balustrades and railings for raised decks and steps, in timber, composite or glass.`,
    iconUrl: iconBalustrade,
    iconAlt: "Decking balustrade icon",
    image: "/deckingayrshire-project-prestwick.webp",
    imageAlt: `Composite decking balustrade installed by ${brand}`,
    about: `${brand} fits decking balustrades and railings across ${business.region}, whether for a new deck build, an existing deck that needs a safety upgrade, or a full balustrade replacement.`,
    why: `Balustrades are often the first part of a deck to fail, since posts take repeated knocks and leaning weight — a loose or rotten balustrade is a safety issue that is worth addressing quickly.`,
    signsYouNeed: `If a balustrade post moves when pushed, a rail has cracked or split, or an older timber balustrade has never been replaced since the deck was built, it is worth getting it checked and repaired or replaced.`,
    options: `${brand} fits timber balustrades to match an existing deck, composite balustrades for a low-maintenance match to composite decking, and glass panel balustrades for an open, modern look on raised decks and terraces.`,
    localContext: `Raised decks are common across sloped gardens in ${cities} and the wider ${business.region} area, and a secure balustrade is essential wherever a deck sits a meaningful height above ground level.`,
    whatToExpect: `${brand} will check the condition of the existing posts and deck frame, agree the balustrade style, and fit new posts securely into the structure before adding rails or glass panels. Everything is checked for stability before completion.`,
    whyChooseUs: `${brand} fits balustrades properly secured into the deck frame rather than surface-mounted fixings that work loose over time. Free quotes are available for balustrade work on its own or as part of a wider deck project.`,
    benefits: [
      "Timber, composite and glass balustrade options.",
      "Posts fitted securely into the deck frame.",
      "Matches new or existing decking styles.",
      "Free quotes for standalone balustrade jobs.",
    ],
    process: [
      "Check the condition of existing posts and the deck frame.",
      "Agree the balustrade style and materials.",
      "Fit new posts securely into the structure.",
      "Add rails or glass panels and check stability.",
    ],
    faq: [
      {
        question: "Can you replace just the balustrade on my deck?",
        answer: `Yes. ${brand} regularly replaces balustrades on existing decks without needing to touch the decking boards themselves, as long as the frame is sound.`,
      },
      {
        question: "What height of balustrade do I need?",
        answer: "Requirements vary by deck height and use, but a common minimum for a raised residential deck is around 900mm-1100mm. We can confirm what applies to your deck.",
      },
    ],
  },
  {
    slug: "decking-costs",
    title: "Decking Costs & Prices",
    shortTitle: "Decking Costs",
    navTitle: "Decking Costs",
    parentCategorySlug: null,
    description: `Decking installation costs in ${cities} and ${business.region}. Composite and timber decking prices, what affects cost, and how to get an accurate quote from ${brand}.`,
    cardDescription: `A guide to composite and timber decking costs, and what affects the price of a new deck.`,
    iconUrl: iconPriceTag,
    iconAlt: "Decking cost guide icon",
    image: assets.gallery[5],
    imageAlt: `Decking project completed by ${brand}`,
    about: `Decking costs vary considerably depending on size, material, ground conditions and any extras such as balustrades, steps or lighting. ${brand} provides free, itemised quotes so customers across ${business.region} know exactly what they are paying for before work starts.`,
    why: `Understanding what drives decking costs helps customers compare quotes properly and avoid being caught out by extras that were not included in an initial estimate.`,
    signsYouNeed: `If you are planning a new deck, comparing timber against composite, or trying to budget for a garden project, getting a clear breakdown of costs early on makes it much easier to plan the rest of the project around it.`,
    options: `As a general guide, timber decking is usually the more budget-friendly option per square metre, while composite decking costs more upfront but needs far less ongoing maintenance. Ground conditions, whether old decking needs removing, the size and shape of the deck, and any balustrades or steps all affect the final price. ${brand} provides a free, no-obligation quote broken down by these factors so there are no surprises.`,
    localContext: `Ground conditions across ${cities} vary from flat suburban gardens to sloped or uneven plots, which can affect the amount of groundwork and foundation work needed and, in turn, the overall cost. If you are searching for decking installation cost ${business.primaryCity}, getting a site visit or photos to ${brand} is the quickest way to a realistic figure.`,
    whatToExpect: `${brand} will ask for the approximate size of the deck, the material preference, and photos or a site visit to assess ground conditions. A written quote is then provided covering materials, labour, any groundwork and extras such as balustrades, with no hidden costs added later.`,
    whyChooseUs: `${brand} gives itemised, honest quotes rather than a single vague figure, so customers can see exactly what they are paying for and where costs come from.`,
    benefits: [
      "Free, itemised quotes with no hidden extras.",
      "Clear guidance on timber versus composite costs.",
      "Costs adjusted for ground conditions and site access.",
      "No obligation to proceed after receiving a quote.",
    ],
    process: [
      "Share the approximate deck size and material preference.",
      "Provide photos or arrange a site visit to assess ground conditions.",
      "Receive a written, itemised quote.",
      "Confirm the work and schedule a start date, with no obligation beforehand.",
    ],
    faq: [
      {
        question: "How much does composite decking cost compared to timber?",
        answer: "Composite decking typically costs more per square metre than timber upfront, but avoids the recurring cost of staining, sanding and repairs that timber usually needs over its lifetime. Exact figures depend on the size and specification of the deck.",
      },
      {
        question: "What affects the cost of a new deck?",
        answer: "Deck size, material choice, ground conditions, whether old decking or paving needs removing, and extras such as balustrades, steps or lighting all affect the final price.",
      },
      {
        question: `Do you offer a free decking quote in ${business.primaryCity}?`,
        answer: `Yes. ${brand} provides free, no-obligation quotes for decking projects across ${cities} and ${business.region}.`,
      },
    ],
  },
  {
    slug: "decking-design-ideas",
    title: "Decking Design Ideas",
    shortTitle: "Decking Design",
    navTitle: "Decking Design",
    parentCategorySlug: null,
    description: `Decking design ideas for gardens across ${cities} and ${business.region}. Layouts, materials and features to plan before your decking project with ${brand}.`,
    cardDescription: `Ideas and planning advice for garden decking layouts, materials and features.`,
    iconUrl: iconPencil,
    iconAlt: "Decking design icon",
    image: assets.gallery[5],
    imageAlt: `Decking design project by ${brand}`,
    about: `Before building a new deck, it helps to think through layout, material and features so the finished space actually suits how the garden will be used. ${brand} works through these decisions with customers across ${business.region} as part of every quote.`,
    why: `A deck that is well planned around the shape of the garden, the direction of the sun and how the space will be used tends to get used far more than one that is simply the largest area that would fit.`,
    signsYouNeed: `If you are at the early planning stage for a garden project and unsure whether to go for a single large deck, a smaller seating area, or split levels to work with a sloped garden, it is worth talking through the options before committing to a design.`,
    options: `Common layouts include a single full-width deck off the back of the house, a smaller feature deck further into the garden, split-level decks for sloped plots, and multi-purpose designs incorporating built-in seating, planters or a pergola. Composite or timber can both be used depending on the desired look and maintenance preference.`,
    localContext: `Gardens across ${cities} range from small urban courtyards to larger suburban plots, and the right decking design depends heavily on plot size, orientation and how much of the garden is being given over to decking versus lawn or planting.`,
    whatToExpect: `${brand} will discuss how the space is used — dining, relaxing, entertaining — along with sun direction and any level changes in the garden, and suggest a layout and material to suit before providing a quote.`,
    whyChooseUs: `${brand} treats design as part of the quote process rather than an extra cost, so customers get a deck that is planned around their garden rather than a standard template.`,
    benefits: [
      "Layouts planned around how the space will actually be used.",
      "Advice on single-level, split-level and feature deck designs.",
      "Guidance on composite versus timber for the chosen design.",
      "Design input included as part of every quote.",
    ],
    process: [
      "Discuss how the outdoor space will be used.",
      "Consider sun direction, garden shape and any level changes.",
      "Suggest a layout and material to suit the garden.",
      "Confirm the design as part of the written quote.",
    ],
    faq: [
      {
        question: "Can you help me decide on a decking layout?",
        answer: `Yes. ${brand} discusses layout options as part of every quote, based on how the garden will be used and its shape and orientation.`,
      },
      {
        question: "Should I choose composite or timber for a new deck design?",
        answer: "This depends on budget and how much maintenance you want to take on long-term. Composite costs more upfront but needs little upkeep; timber is more budget-friendly but needs regular treatment.",
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Decking Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free decking quote from ${brand} for composite or timber decking across ${cities} and ${business.region}.`,
    cardDescription: `Message ${brand} to discuss your decking project and arrange a free, no-obligation quote.`,
    iconUrl: iconQuoteBubble,
    iconAlt: "Free decking quote icon",
    image: assets.gallery[5],
    imageAlt: `Decking project completed by ${brand}`,
    about: `If you are not sure where to start with a decking project, send ${brand} a message with a few details about the garden and what you have in mind. The team can talk through composite versus timber, rough sizing and next steps.`,
    why: `A quick conversation helps clarify the scope of the job, whether a site visit is needed, and roughly what to expect before committing to anything.`,
    signsYouNeed: `If you know you want new decking, repairs, or a balustrade but are unsure of material, cost or timing, a free quote is the best first step. Photos of the garden and your location help ${brand} respond quickly with practical advice.`,
    options: `${brand} quotes for all decking services listed on this site, from full composite or timber installations to repairs, balustrades and commercial decking. You can get in touch through the contact form with details of the job.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region}. If you are nearby and searching for decking installers near me, get in touch to confirm coverage for your postcode.`,
    whatToExpect: `Send a message through the contact form with the type of decking work you need. Share photos of the garden if helpful. The team will confirm the service area and arrange a visit or quote as needed.`,
    whyChooseUs: `Free, no-obligation quotes and honest advice on the most practical option for your garden and budget across ${cities}.`,
    benefits: [
      "Free quotes for all decking services listed on this site.",
      "Clear next steps before any work starts.",
      `Local service across ${cities} and ${business.region}.`,
      "Honest advice on composite versus timber for your project.",
    ],
    process: [
      "Send a message through the contact form with details of the work.",
      "Share photos or details of the garden if they help explain the job.",
      "Arrange a visit or quote where required.",
      "Agree the work, materials and timing before starting.",
    ],
    faq: [
      {
        question: "What details should I include for a decking quote?",
        answer: "A short description of the garden, roughly how large an area you want decked, whether you prefer composite or timber, and your location. Photos are helpful but not essential.",
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding areas in ${business.region}.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
