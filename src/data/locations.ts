import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";
import { characterDescriptors, characterTraits, type Character } from "@/data/locationCharacter";

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

/** Deterministic small-integer hash used to spread towns across a large pool of hand-written
 * phrasing options for each content slot, so pages differ both from other towns sharing a
 * character bucket and across content slots for the same town. */
const hashIndex = (input: string, modulo: number): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash % modulo;
};

const pick = <T>(pool: T[], salt: string): T => pool[hashIndex(salt, pool.length)];

type LocationSeed = {
  slug: string;
  name: string;
  character: Character;
  nearby: string[];
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

type DescribeVariant = { description: string; intro: string };

const describe = (name: string, character: Character, nearby: string[], slug: string): DescribeVariant => {
  const nearbyPair = nearby.slice(0, 2).join(" and ");
  const nearbyTrio = nearby.slice(0, 3).join(", ");
  const nearbyQuad = nearby.join(", ");
  const descriptor = characterDescriptors[character];
  const trait = characterTraits[character];

  const byCharacter: Record<Character, DescribeVariant[]> = {
    coastalResort: [
      {
        description: `${brand} installs decking built to handle sea air and coastal weather for homes across ${name} and the surrounding coastline.`,
        intro: `${name} is ${descriptor}, and homes here often deal with ${trait}. ${brand} plans decking with this in mind, choosing boards and fixings that hold up to coastal conditions. The team also covers nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} fits weather-resistant decking for ${name} gardens, where ${trait} shapes what materials make sense.`,
        intro: `Being ${descriptor}, ${name} sees more exposure to wind and salt than towns further inland. ${brand} factors that into board and fixing choices for every ${name} project, and also reaches ${nearbyTrio}.`,
      },
      {
        description: `${brand} covers ${name} for decking, working with ${trait} rather than against it.`,
        intro: `${name}'s position as ${descriptor} means ${trait} is part of daily life. ${brand} has fitted decking across the town with that in mind, and the team's coverage extends to nearby ${nearbyPair} as well.`,
      },
      {
        description: `${brand} designs decking for ${name} properties with the coastal conditions front of mind.`,
        intro: `Homes in ${name} — ${descriptor} — regularly deal with ${trait}, which affects board choice more than it would inland. ${brand} plans each project around that reality, and also covers ${nearbyQuad}.`,
      },
      {
        description: `${brand} has fitted decking throughout ${name}, choosing materials to suit ${trait}.`,
        intro: `${name} is one of Ayrshire's coastal towns — ${descriptor} — and ${trait} is part of daily life here. ${brand} designs decking accordingly, with coverage reaching nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} installs decking in ${name} suited to a coastal setting, from board choice to fixings.`,
        intro: `Given ${name} is ${descriptor}, ${trait} is something ${brand} plans around rather than ignores — that shapes both material and layout. The team also covers nearby ${nearbyPair}.`,
      },
    ],
    harbourTown: [
      {
        description: `${brand} installs decking for homes across ${name}, a working coastal town on the Ayrshire coast.`,
        intro: `${name}'s housing stock ranges from harbourside terraces to newer estates further from the water, and ${brand} plans decking to suit whichever type of garden or yard is available. Coastal damp and salt air are also factored into board and fixing choices. Coverage extends to nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} fits decking throughout ${name}, from properties near the harbour to newer housing further out.`,
        intro: `As ${descriptor}, ${name} has ${trait} — ${brand} designs decking to suit whichever applies, with coastal weather always factored into material choice. The team also covers ${nearbyTrio}.`,
      },
      {
        description: `${brand} covers ${name} for decking work, on both older harbourside properties and newer builds.`,
        intro: `${name} grew up around its harbour, and that history shows in the housing: ${trait}. ${brand} has fitted decking across both types of property, and also reaches nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} designs decking for ${name} gardens with the coastal position in mind.`,
        intro: `Being ${descriptor} means ${name} sees more damp and salt exposure than towns further inland, so ${brand} usually recommends composite boards or well-treated timber here. Coverage extends to ${nearbyQuad}.`,
      },
      {
        description: `${brand} has fitted decking across ${name}, working with whatever the property's age and position calls for.`,
        intro: `${trait} is typical of ${name}, a town that grew up as ${descriptor} — older harbourside homes need different treatment to newer estates further back from the water. ${brand} plans for both, and covers nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} installs decking in ${name} suited to its coastal, working-harbour setting.`,
        intro: `${name} is ${descriptor}, and ${brand} has worked on properties across the full range — from older harbourside terraces to newer housing further inland. The team also covers ${nearbyPair}.`,
      },
    ],
    marketTown: [
      {
        description: `${brand} installs decking for homes across ${name} and the surrounding market town area.`,
        intro: `${name} has a traditional town centre with terraced and semi-detached homes nearby, many with compact rear gardens where careful planning makes the most of the available space. ${brand} also builds larger decks for properties on the edge of town with bigger plots. The team covers nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} fits decking for ${name} properties, from compact town-centre gardens to larger plots on the outskirts.`,
        intro: `As ${descriptor}, ${name} has ${trait}, which usually means a smaller rear garden to plan around than you'd find further out. ${brand} sizes each deck to the actual space, and also covers ${nearbyTrio}.`,
      },
      {
        description: `${brand} covers ${name} for decking, working with the tighter plots typical of its town centre.`,
        intro: `${name}'s core is ${descriptor}, with ${trait} — decking here often means making a compact rear garden work hard. ${brand} also fits larger decks for properties further from the centre, and reaches nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} designs decking for ${name} gardens, whether that's a town-centre plot or a larger outskirts garden.`,
        intro: `Properties close to ${name}'s centre tend to have ${trait}, while those further out have more room to work with. ${brand} treats each ${name} project differently as a result, and also covers ${nearbyQuad}.`,
      },
      {
        description: `${brand} has fitted decking throughout ${name}, from the town centre outwards.`,
        intro: `${name} is ${descriptor}, and that shapes what's practical for a deck — ${trait} near the centre, larger plots further out. ${brand} plans accordingly, with coverage extending to nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} installs decking in ${name} sized to whatever garden is actually available.`,
        intro: `Whether it's a compact plot near ${name}'s town centre or a bigger garden on the outskirts, ${brand} has fitted decking across both — ${trait} means no single layout fits every ${name} property. The team also covers ${nearbyPair}.`,
      },
    ],
    formerIndustrial: [
      {
        description: `${brand} installs decking for homes across ${name}, including its older terraced streets and newer housing.`,
        intro: `Many properties in ${name} sit on streets built during the town's mining or weaving past, often with stepped or uneven gardens behind. ${brand} regularly builds raised or level decking to work with this kind of terrain, as well as decking for newer housing nearby. Coverage extends to ${nearbyPair}.`,
      },
      {
        description: `${brand} fits decking for ${name} properties, including the sloped gardens common on its older streets.`,
        intro: `As ${descriptor}, ${name} has ${trait} — that's the main thing ${brand} plans around when quoting a deck here, more so than in a flatter town. The team also covers nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} covers ${name} for decking, building raised structures where the older streets call for it.`,
        intro: `${name}'s history as ${descriptor} left it with ${trait}, and ${brand} regularly builds raised or stepped decking to turn that into a level, usable space. Coverage also reaches ${nearbyPair}.`,
      },
      {
        description: `${brand} designs decking for ${name} gardens with the terrain in mind first.`,
        intro: `Older terraced streets in ${name} often mean ${trait}, and ${brand} treats that as the starting point for design rather than an afterthought. The team also covers ${nearbyQuad}.`,
      },
      {
        description: `${brand} has fitted decking throughout ${name}, on both older mining-era streets and newer housing.`,
        intro: `${name} grew up as ${descriptor}, and ${trait} is still typical of its older streets today. ${brand} builds raised or level decking to suit, and also covers nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} installs decking in ${name} built to cope with a sloped or stepped garden.`,
        intro: `${trait} is common in ${name}, a town whose streets trace back to its days as ${descriptor}. ${brand} works with that terrain rather than around it. The team also covers nearby ${nearbyPair}.`,
      },
    ],
    commuterVillage: [
      {
        description: `${brand} installs decking for homes and gardens across ${name} and the surrounding area.`,
        intro: `${name} has grown with a mix of newer housing estates and older streets, so garden sizes vary from compact new-build plots to larger established gardens. ${brand} plans each deck around the space actually available rather than a standard layout. The team also covers nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} fits decking across ${name}, sizing each project to suit new-build or established gardens alike.`,
        intro: `As ${descriptor}, ${name} has ${trait} — ${brand} treats a new-build plot and an older garden differently rather than applying one layout to both. Coverage also extends to ${nearbyTrio}.`,
      },
      {
        description: `${brand} covers ${name} for decking, whether the garden is a new-build plot or a longer-established one.`,
        intro: `${name}'s growth has left it with ${trait}, and ${brand} has fitted decking on both kinds of property. The team also reaches nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} designs decking for ${name} gardens of every size, new-build and established alike.`,
        intro: `Because ${name} is ${descriptor}, garden sizes vary a lot street to street — ${trait} — and ${brand} measures each one individually. Coverage extends to ${nearbyQuad}.`,
      },
      {
        description: `${brand} has fitted decking throughout ${name}, on newer estates and its older streets.`,
        intro: `${trait} is typical of ${name}, reflecting its growth as ${descriptor}. ${brand} plans each deck around the actual plot rather than assuming a standard size, and also covers nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} installs decking in ${name} to suit whatever type of garden is on offer.`,
        intro: `${name} mixes newer housing estates with older, established streets — ${trait} — and ${brand} has worked on both. The team also covers nearby ${nearbyPair}.`,
      },
    ],
    ruralVillage: [
      {
        description: `${brand} installs composite and timber decking for gardens across ${name} and the surrounding countryside.`,
        intro: `Properties around ${name} tend to have larger gardens and more rural surroundings than towns further along the coast, giving more scope for a full-size deck or outdoor seating area. ${brand} helps plan a layout that suits the space and the way it will be used. The team also covers nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} fits decking for ${name} gardens, making the most of the extra space rural plots usually offer.`,
        intro: `As ${descriptor}, ${name} has ${trait} — that extra room opens up options beyond a basic platform. ${brand} works through those options with each ${name} customer, and also covers ${nearbyTrio}.`,
      },
      {
        description: `${brand} covers ${name} for decking, with layouts sized for genuinely rural gardens.`,
        intro: `${trait} is typical around ${name}, and ${brand} designs decking to make the most of that extra space rather than defaulting to a small platform. Coverage also reaches ${nearbyQuad}.`,
      },
      {
        description: `${brand} designs full-size decks for ${name} properties, where garden space is rarely the limiting factor.`,
        intro: `Being ${descriptor}, ${name} gives most gardens ${trait} — plenty of room for a full-size deck, raised seating area or steps. ${brand} plans around the plot rather than a standard template. The team also covers nearby ${nearbyPair}.`,
      },
      {
        description: `${brand} has built decking throughout ${name} and the surrounding countryside.`,
        intro: `${name}'s setting — ${descriptor} — means gardens here usually have more room to work with than in a town. ${brand} makes the most of that space, and also covers nearby ${nearbyTrio}.`,
      },
      {
        description: `${brand} installs decking in ${name} sized to match its larger, more rural gardens.`,
        intro: `${trait} sums up most ${name} properties, reflecting the village's setting as ${descriptor}. ${brand} plans layouts accordingly, with coverage extending to ${nearbyQuad}.`,
      },
    ],
  };

  const variants = byCharacter[character];
  return variants[hashIndex(slug + "-desc", variants.length)];
};

type CharacterFaqPair = [LocationFaq, LocationFaq];

const characterFaqPools: Record<Character, CharacterFaqPair[]> = {
  coastalResort: [
    [
      { question: `Does composite decking hold up to sea air in {name}?`, answer: `Yes. Composite decking resists the salt air and damp that coastal towns like {name} see more of than inland areas, without the rot or fading risk that comes with untreated timber.` },
      { question: `Do you build decking for sea-facing gardens in {name}?`, answer: `Yes. {brand} plans decking for exposed, sea-facing plots in {name} with secure fixings and weather-resistant boards suited to the coastal conditions.` },
    ],
    [
      { question: `Does the salt air in {name} affect which decking material I should choose?`, answer: `It can — {trait} means composite or well-treated timber tends to outlast standard timber in {name}. {brand} can talk through the trade-offs for your specific garden.` },
      { question: `Is timber decking a bad idea in a coastal town like {name}?`, answer: `Not necessarily, but it needs more upkeep than inland. Given {name} is {descriptor}, {brand} usually flags composite as the lower-maintenance option, while still offering timber if that's the preference.` },
    ],
    [
      { question: `Do exposed gardens in {name} need special fixings for decking?`, answer: `Often, yes. {brand} uses secure, corrosion-resistant fixings for the more exposed gardens found in parts of {name}.` },
      { question: `Can decking in {name} cope with strong coastal winds?`, answer: `{brand} designs the subframe and fixings with that in mind — {name}'s coastal position means wind loading gets more consideration here than it would inland.` },
    ],
  ],
  harbourTown: [
    [
      { question: `Can you install decking on an older harbourside property in {name}?`, answer: `Yes. {brand} works with the older housing stock common near the harbour in {name}, as well as newer estates further from the water.` },
      { question: `Does coastal weather affect decking choices in {name}?`, answer: `Yes. {name}'s coastal position means more damp and salt exposure than inland towns, so {brand} usually recommends composite boards or well-treated timber for a longer-lasting deck.` },
    ],
    [
      { question: `Is decking different for older harbourside homes compared to newer {name} estates?`, answer: `A little — {trait} means older harbourside properties in {name} sometimes need extra groundwork before decking goes in, compared to a newer, more level plot.` },
      { question: `What's the biggest factor for decking in {name}?`, answer: `Coastal damp, mainly — {name} is {descriptor}, and that shapes material choice more than anything else. {brand} can talk through composite versus timber for your specific property.` },
    ],
    [
      { question: `Do you work on decking near {name}'s harbour itself?`, answer: `Yes — {brand} covers all of {name}, including properties close to the harbour as well as those further inland.` },
      { question: `Is there anything unusual about decking gardens in {name}?`, answer: `Mainly the range of housing — {trait} — which means {brand} plans each {name} project individually rather than assuming a standard garden.` },
    ],
  ],
  marketTown: [
    [
      { question: `Can you build decking for a compact garden in {name}'s town centre?`, answer: `Yes. {brand} regularly designs decking for the smaller rear gardens found behind {name}'s terraced and semi-detached town centre properties, making the most of the available space.` },
      { question: `Do you also cover properties on the edge of {name}?`, answer: `Yes. {brand} covers {name} town centre as well as larger properties on the outskirts with bigger gardens.` },
    ],
    [
      { question: `What size garden do most {name} town centre homes have?`, answer: `Usually fairly compact — {trait} — so {brand} focuses on making the most of the space rather than a standard layout.` },
      { question: `Is there enough room for decking in a typical {name} rear garden?`, answer: `In most cases, yes, though the layout has to work harder in a compact {name} town centre garden than it would further out. {brand} plans each project around the actual space.` },
    ],
    [
      { question: `Do properties on the outskirts of {name} have more room for decking?`, answer: `Generally, yes — gardens tend to get larger the further you are from {name}'s town centre. {brand} covers the full range.` },
      { question: `What kind of housing is typical in {name} for decking purposes?`, answer: `{name} is {descriptor}, so {trait} is common — {brand} adjusts the design brief depending on which applies to your property.` },
    ],
  ],
  formerIndustrial: [
    [
      { question: `Can you build decking on a stepped or sloped garden in {name}?`, answer: `Yes. Many gardens in {name} have changes in level from the town's older terraced housing, and {brand} regularly builds raised or stepped decking to create a level, usable space.` },
      { question: `Do you work on older properties in {name}?`, answer: `Yes. {brand} fits decking to older terraced and cottage-style properties in {name} as well as newer housing in the area.` },
    ],
    [
      { question: `Why do so many {name} gardens need raised decking?`, answer: `{trait} — a legacy of {name}'s mining and weaving past. Raised or stepped decking is usually the most practical way to get a level, usable space.` },
      { question: `Is a sloped garden in {name} more expensive to deck?`, answer: `Often a little, since raised or stepped decking needs more groundwork than a level plot — {brand} can confirm the difference once we've seen the {name} garden or photos of it.` },
    ],
    [
      { question: `Can decking help make an uneven {name} garden usable?`, answer: `Yes — that's one of the more common reasons {brand} gets called out to {name}, given {trait}. A raised deck turns a sloped plot into a proper usable space.` },
      { question: `Do newer {name} properties need the same approach as the older streets?`, answer: `Not usually — newer housing in {name} tends to sit on more level ground, so decking there is often more straightforward than on the older mining-era streets.` },
    ],
  ],
  commuterVillage: [
    [
      { question: `Do you install decking on newer housing estates in {name}?`, answer: `Yes. {brand} regularly fits decking on newer-build gardens in {name}, as well as larger gardens on the village's older streets.` },
      { question: `Is there a decking contractor covering {name}?`, answer: `Yes. {brand} is an Ayrshire-wide decking contractor covering {name} and the surrounding villages and towns.` },
    ],
    [
      { question: `Are new-build gardens in {name} big enough for a full deck?`, answer: `Usually, though plots can be more compact than on {name}'s older streets. {brand} measures the actual space rather than assuming a standard size.` },
      { question: `Do older {name} properties have more room for decking than new-build ones?`, answer: `Often, yes — {trait} is typical of {name}, and the older, longer-established gardens tend to have more room to work with.` },
    ],
    [
      { question: `What's typical for decking in a village like {name}?`, answer: `{name} is {descriptor}, so {brand} sees a real mix — modest new-build platforms through to bigger decks on older, more established plots.` },
      { question: `Do you cover the villages around {name} as well?`, answer: `Yes — {brand} covers {name} and the surrounding villages.` },
    ],
  ],
  ruralVillage: [
    [
      { question: `Can you build decking for a larger rural garden in {name}?`, answer: `Yes. {brand} builds full-size decks and outdoor seating areas for the larger gardens common around {name}, as well as smaller patio-style decks.` },
      { question: `Do you cover rural properties near {name}?`, answer: `Yes. {brand} covers {name} and the surrounding countryside, including farms and rural properties outside the village itself.` },
    ],
    [
      { question: `Is a bigger garden in {name} more expensive to deck?`, answer: `Not necessarily proportionally — a larger {name} garden opens up options like a bigger platform or built-in seating, but {brand} can size a design to any budget.` },
      { question: `What can you build with the extra space a {name} garden usually has?`, answer: `{trait} gives real scope — raised sections, built-in seating, a bigger footprint than a typical town garden allows. {brand} works through the options with each customer.` },
    ],
    [
      { question: `Do you fit decking on working farms near {name}?`, answer: `Yes, where access allows — {brand} has worked on rural properties around {name}, not just those within the village itself.` },
      { question: `Is decking a good fit for a rural property like the ones around {name}?`, answer: `Generally, yes — being {descriptor} means most {name} gardens have the space for a proper deck rather than a compromise.` },
    ],
  ],
};

const fillTokens = (text: string, name: string, character: Character): string =>
  text
    .replaceAll("{name}", name)
    .replaceAll("{brand}", brand)
    .replaceAll("{descriptor}", characterDescriptors[character])
    .replaceAll("{trait}", characterTraits[character]);

const makeLocationFaqs = (name: string, slug: string, character: Character, nearby: string[]): LocationFaq[] => {
  const nearbyTrio = nearby.slice(0, 3).join(", ");

  const coverageVariants: LocationFaq[] = [
    { question: `Do you install decking in ${name}?`, answer: `Yes. ${brand} installs and repairs decking in ${name} and nearby areas, including ${categoryNames.toLowerCase()}. Free quotes are available.` },
    { question: `Is ${name} within your decking coverage area?`, answer: `Yes. ${brand} is an Ayrshire-wide decking contractor and ${name} is within the standard coverage area, along with the surrounding streets and neighbouring towns.` },
    { question: `Do you travel to ${name} for decking work?`, answer: `Yes — ${brand} covers ${name} and the surrounding area, including nearby ${nearbyTrio}. There's no extra charge for a ${name} address versus anywhere else in the coverage area.` },
    { question: `Does ${brand} cover ${name} specifically, or just the bigger towns nearby?`, answer: `${name} itself is covered, not just the larger towns around it — ${brand} regularly works in ${name} and the surrounding villages, including ${nearbyTrio}.` },
  ];
  const coverage = pick(coverageVariants, slug + "-coverage");

  const compositeVariants: LocationFaq[] = [
    { question: `Do you offer composite decking in ${name}?`, answer: `Yes. ${brand} fits composite decking in ${name} as well as timber decking, repairs and balustrades.` },
    { question: `Can I get composite decking fitted in ${name}?`, answer: `Yes — composite decking is one of ${brand}'s core services in ${name}, alongside timber decking, repairs and balustrades.` },
    { question: `Does ${brand} do composite as well as timber decking in ${name}?`, answer: `Yes. ${brand} fits both composite and timber decking in ${name}, plus repairs and balustrades — whichever suits the project.` },
    { question: `Is composite decking something you install in ${name} specifically?`, answer: `Yes — ${name} is a regular coverage area for composite decking, timber decking, repairs and balustrades alike.` },
  ];
  const composite = pick(compositeVariants, slug + "-composite-faq");

  const quoteVariants: LocationFaq[] = [
    { question: `How do I get a decking quote for ${name}?`, answer: `Use the contact form with a brief description of the garden and your location in ${name}. Photos are helpful. Free quotes are available with no obligation to proceed.` },
    { question: `What's the quickest way to get a decking quote for a ${name} property?`, answer: `Send a short description and a few photos of the garden in ${name} through the contact form — that's usually enough for an initial quote, with no obligation to proceed.` },
    { question: `Do you need to visit before quoting for a ${name} deck?`, answer: `Not always — for many ${name} gardens, a description and photos through the contact form give enough for an initial quote. A visit can follow if needed.` },
    { question: `Can I get a decking estimate for ${name} without a site visit?`, answer: `Often, yes. Photos and a brief description of the ${name} garden sent through the contact form usually give ${brand} enough for an initial estimate, no obligation to proceed.` },
  ];
  const quote = pick(quoteVariants, slug + "-quote");

  const characterPairs = characterFaqPools[character];
  const [charFaq1, charFaq2] = pick(characterPairs, slug + "-character-faq").map((faq) => ({
    question: fillTokens(faq.question, name, character),
    answer: fillTokens(faq.answer, name, character),
  }));

  return [coverage, composite, charFaq1, quote, charFaq2];
};

export const locations: LocationPage[] = locationSeeds.map(({ slug, name, character, nearby }) => {
  const { description, intro } = describe(name, character, nearby, slug);
  return {
    slug,
    name,
    character,
    title: `Decking Installers in ${name} | ${brand}`,
    description,
    intro,
    nearby,
    locationFaqs: makeLocationFaqs(name, slug, character, nearby),
  };
});

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
