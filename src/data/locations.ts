import { brandName } from "@/data/business";
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
  /** Hand-written paragraph about the real setting of the town and what it means for decking. */
  localDetail: string;
  /** Practical, town-specific things to plan for before building a deck here. */
  considerations: string[];
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();

type LocationSeed = Omit<LocationPage, "title">;

// Every town below is written individually from well-known, publicly verifiable facts about the
// place (geography, housing, landmarks). Nothing here is generated from a shared template — if a
// new town is added, it needs its own copy rather than a variant of an existing entry.
const locationSeeds: LocationSeed[] = [
  // Priority tier — largest towns / strongest search signal
  {
    slug: "ayr",
    name: "Ayr",
    character: "coastalResort",
    nearby: ["Alloway", "Prestwick", "Monkton", "Coylton"],
    description: `Decking for Ayr homes, from sandstone villas near the racecourse to newer estates at Holmston and Belmont. Composite, timber and repairs from ${brand}.`,
    intro: `Ayr's housing covers almost every type of garden you'll find in Ayrshire — long walled plots behind Victorian villas in the south of the town, tight terraces near the town centre and open-plan estates on the eastern edge. ${brand} designs each deck around the garden in front of us rather than a stock layout.`,
    localDetail: `As the county town, Ayr has a wider spread of property ages than anywhere else we cover. The sandstone villas off Racecourse Road and around Wellington Square often have mature trees, walled boundaries and gardens that sit a few steps below the back door, so a deck usually needs to bridge that level change. Closer to the Low Green and the seafront, gardens take the full force of westerly wind and rain off the Firth of Clyde. Estates such as Belmont, Holmston, Forehill and Whitletts tend to have flatter, more regular plots where a ground-level deck off the patio doors is the common request.`,
    considerations: [
      "Villa gardens often sit below floor level, so a raised or stepped deck is common to meet the back door.",
      "Mature trees near the older villas mean more shade and leaf fall — composite boards cope with this better than untreated timber.",
      "Seafront properties need stainless or coated fixings to stand up to salt-laden air.",
    ],
    locationFaqs: [
      { question: "Can you build a deck to meet the back door of an older Ayr villa?", answer: `Yes. Many of the older houses in south Ayr have a noticeable drop from the back door to the garden. ${brand} builds raised or stepped decks that bring the outdoor level up to the door, with steps and balustrades where needed.` },
      { question: "Is composite decking a good idea under trees in Ayr?", answer: "Usually, yes. Composite boards don't hold moisture the way timber does, so they are far less prone to going green and slippery in the shaded, leafy gardens common around Ayr's older streets." },
      { question: "Do you cover the whole of Ayr, including the newer estates?", answer: `Yes. ${brand} covers all of Ayr — the town centre, the seafront, the villa streets and estates such as Belmont, Holmston, Forehill and Whitletts.` },
    ],
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    character: "coastalResort",
    nearby: ["Ayr", "Monkton", "Troon", "Symington"],
    description: `Decking in Prestwick built for flat, sandy coastal ground and open sea-facing gardens. Composite and timber decks, repairs and free quotes from ${brand}.`,
    intro: `Prestwick sits on low, flat ground between the esplanade and the airport, with a lot of bungalows and 1930s semi-detached homes. That makes it one of the easier towns to deck — but the sandy soil and open exposure to the sea still need planning for.`,
    localDetail: `Much of Prestwick is built on the old links land that gave the town its golf course, so ground is generally level and free-draining. That suits ground-level decks well, although sandy soil means post footings need to go deep enough to stay put. Bungalows are common across the town, and owners often want a deck that steps down only slightly from the patio doors for easy access. Gardens on the streets nearest the esplanade are exposed to strong onshore wind, so balustrades and screening need solid fixings.`,
    considerations: [
      "Level ground means most Prestwick decks can be built low, with little or no step down from the house.",
      "Sandy ground needs properly set footings so the subframe doesn't shift over time.",
      "Bungalow owners often ask for a step-free or single-step deck for easy access.",
    ],
    locationFaqs: [
      { question: "Can you build a step-free deck for a Prestwick bungalow?", answer: `Often, yes. Because much of Prestwick is level, ${brand} can usually build a low deck that sits close to the height of the patio door threshold, keeping steps to a minimum.` },
      { question: "Does sandy ground in Prestwick affect how a deck is built?", answer: "It affects the footings. Sandy soil drains well, which is good for a deck, but posts need to be set deep enough and properly bedded so the frame doesn't move." },
      { question: "Will a deck near Prestwick seafront need anything different?", answer: "Mainly fixings and screening. Gardens close to the esplanade get strong onshore wind and salt air, so stainless fixings and well-anchored balustrades are recommended." },
    ],
  },
  {
    slug: "troon",
    name: "Troon",
    character: "coastalResort",
    nearby: ["Prestwick", "Dundonald", "Monkton", "Ayr"],
    description: `Decking for Troon homes, from large villas near the golf courses to harbour-side properties. Composite decks, balustrades and repairs from ${brand}.`,
    intro: `Troon is known for its links golf, its harbour and marina, and the large detached houses on the streets between them. Gardens here are often generous, which opens up bigger decks, built-in seating and glass balustrades that keep the view open.`,
    localDetail: `Troon sits on a headland with sea on two sides, so few gardens are completely sheltered. The bigger detached houses on the south side of town, towards the golf courses, tend to have wide gardens where a deck is one part of a larger landscaped space. Nearer the harbour and the Ballast Bank, plots are smaller and more exposed to wind coming off the water. Across the town, owners often want to keep a sea view, which makes glass or low-profile balustrades a popular choice.`,
    considerations: [
      "Glass balustrades are popular where a raised deck would otherwise block a sea or golf-course view.",
      "Larger gardens suit multi-level decks or decks combined with built-in seating and planters.",
      "Properties near the harbour need marine-grade fixings to cope with salt spray.",
    ],
    locationFaqs: [
      { question: "Can you fit glass balustrades on a deck in Troon?", answer: `Yes. Glass balustrades are a common request in Troon because they keep the sea view open. ${brand} can fit glass, composite or timber balustrades depending on the look you want.` },
      { question: "Can you build a multi-level deck for a large Troon garden?", answer: "Yes. Larger Troon gardens often suit two or more levels — for example a dining area near the house stepping down to a lounge area further out." },
      { question: "Do harbour-side properties in Troon need special materials?", answer: "They benefit from them. Stainless or coated fixings and composite boards hold up much better against the salt spray near the harbour than standard timber and zinc screws." },
    ],
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    character: "marketTown",
    nearby: ["Kilmaurs", "Hurlford", "Crosshouse", "Fenwick"],
    description: `Decking in Kilmarnock, from sandstone terraces near the town centre to estates such as Onthank, Bonnyton and Kirkstyle. New decks and repairs by ${brand}.`,
    intro: `Kilmarnock is the largest town in East Ayrshire, and its gardens range from narrow plots behind sandstone terraces to the open lawns of the post-war and modern estates. ${brand} builds and repairs decks right across the town.`,
    localDetail: `Kilmarnock grew as an industrial town, and a lot of the older housing near the centre and along London Road is stone-built with long, narrow gardens. Further out, estates such as Onthank, Bonnyton, New Farm Loch and Kirkstyle have more regular plots. Many homes on these estates had timber decks fitted in the early 2000s that are now reaching the end of their life, so repairs and replacements make up a large share of the work here. Being inland, Kilmarnock gets less salt air than the coast but plenty of rain, so drainage under the deck matters.`,
    considerations: [
      "Many older estate decks are now 15–20 years old and worth checking for rotten joists before resurfacing.",
      "Narrow terrace gardens suit a deck that runs the width of the plot near the house, leaving lawn beyond.",
      "Good drainage beneath the frame is important given the amount of rain the town gets.",
    ],
    locationFaqs: [
      { question: "My Kilmarnock deck is about 20 years old — can it be repaired?", answer: `Often it can. ${brand} checks the joists and posts first. If the frame is sound, new boards can go on top; if the frame is rotten, a rebuild is usually better value.` },
      { question: "What works best for a narrow garden behind a Kilmarnock terrace?", answer: "A deck across the width of the garden close to the house usually works best, leaving the rest of the plot as lawn or planting. Built-in steps and storage can help in a tight space." },
      { question: "Do you cover all of Kilmarnock?", answer: `Yes. ${brand} covers the town centre and all the surrounding estates, including Onthank, Bonnyton, New Farm Loch, Kirkstyle and Shortlees.` },
    ],
  },
  {
    slug: "irvine",
    name: "Irvine",
    character: "harbourTown",
    nearby: ["Kilwinning", "Dreghorn", "Springside", "Stevenston"],
    description: `Decking for Irvine's New Town estates, the old town and the harbourside. Composite and timber decks, repairs and free quotes from ${brand}.`,
    intro: `Irvine was designated a New Town in 1966, so most of its housing sits on planned estates like Girdle Toll, Bourtreehill, Broomlands and Castlepark, alongside the older town centre and the harbourside. ${brand} builds decks to suit each of these very different plot types.`,
    localDetail: `Because so much of Irvine was built in a relatively short period, many gardens on the same estate share a similar shape and size — often a modest rectangular plot with a fence line close behind. That makes a well-planned deck an easy way to add usable space. The older streets around the town centre and Fullarton have more varied gardens, and properties near the harbour and Beach Park get more wind and salt air coming in off the coast. Some New Town gardens also sit on a slope where the estates were laid out on rising ground.`,
    considerations: [
      "Many New Town plots are compact rectangles — a deck that fills the full width makes the most of the space.",
      "Harbourside and Beach Park properties need corrosion-resistant fixings.",
      "Sloping estate gardens may need a partly raised deck to create a level area.",
    ],
    locationFaqs: [
      { question: "Can you deck a small New Town garden in Irvine?", answer: `Yes. A lot of Irvine's estate gardens are compact, and ${brand} regularly designs decks that make the most of a small plot, including built-in steps and storage.` },
      { question: "Do you work near the Irvine harbourside?", answer: "Yes. Homes near the harbour and Beach Park are more exposed to coastal weather, so we recommend composite boards and stainless fixings there." },
      { question: "Which parts of Irvine do you cover?", answer: `All of it — including Girdle Toll, Bourtreehill, Broomlands, Castlepark, Fullarton, the town centre and the harbourside.` },
    ],
  },
  {
    slug: "kilwinning",
    name: "Kilwinning",
    character: "marketTown",
    nearby: ["Irvine", "Stevenston", "Dalry", "Beith"],
    description: `Decking in Kilwinning, from the older streets near the abbey to newer estates such as Pennyburn and Whitehirst Park. Decks, repairs and free quotes from ${brand}.`,
    intro: `Kilwinning is centred on the ruins of its medieval abbey, with older streets close to the centre and larger estates spreading out towards the River Garnock and the A78. ${brand} builds and repairs decks across the town.`,
    localDetail: `Kilwinning's older housing near the abbey and Main Street has smaller, often enclosed gardens, while estates such as Pennyburn and Whitehirst Park have more regular modern plots. The town sits low beside the River Garnock, and some gardens can be slow to drain after heavy rain, which makes a well-ventilated deck frame raised slightly off the ground a sensible choice. Its position as a rail junction also makes it popular with commuters, and many owners want low-maintenance decking that doesn't take up weekends.`,
    considerations: [
      "Low-lying gardens near the River Garnock benefit from a frame that lets air circulate underneath.",
      "Enclosed gardens near the old town centre often suit a compact deck with built-in seating.",
      "Commuters often prefer composite boards to avoid yearly staining.",
    ],
    locationFaqs: [
      { question: "My Kilwinning garden gets waterlogged — can I still have a deck?", answer: `Yes. ${brand} can build the frame slightly higher and leave space for air to move underneath, with a membrane below, so the deck stays dry even when the ground is wet.` },
      { question: "What's the lowest-maintenance deck option in Kilwinning?", answer: "Composite decking. It doesn't need staining or sanding, which suits busy households who don't want the yearly upkeep a timber deck requires." },
      { question: "Do you cover the newer estates in Kilwinning?", answer: `Yes. ${brand} covers the whole town, including Pennyburn, Whitehirst Park and the streets around the abbey.` },
    ],
  },
  {
    slug: "largs",
    name: "Largs",
    character: "coastalResort",
    nearby: ["Fairlie", "Skelmorlie", "West Kilbride", "Dalry"],
    description: `Decking in Largs for sea-view gardens and hillside plots above the Clyde. Composite decks, glass balustrades and repairs from ${brand}.`,
    intro: `Largs faces straight across the Firth of Clyde to Great Cumbrae, and the town climbs steeply from the seafront up the hillside behind it. That combination — sea views and sloping gardens — shapes almost every deck we design here.`,
    localDetail: `Along the promenade and the streets just behind it, gardens are flat but fully exposed to wind and spray coming off the Clyde. As you move up the hill, towards the upper parts of the town, plots start to slope noticeably, and a raised deck is often the only practical way to get a level outdoor space that also takes advantage of the view. Largs also has a lot of retirement flats and bungalows, where owners often want a low-maintenance, step-free area rather than a large deck.`,
    considerations: [
      "Hillside gardens frequently need a raised deck with steps and balustrades to create a level space.",
      "Glass balustrades are a popular choice to keep the view across to Cumbrae and Arran.",
      "Composite boards and stainless fixings hold up best near the promenade.",
    ],
    locationFaqs: [
      { question: "Can you build a raised deck on a sloping Largs garden?", answer: `Yes. Many gardens on the hill above Largs slope away from the house, and ${brand} builds raised decks with proper footings, steps and balustrades to create a safe, level area.` },
      { question: "Will a balustrade block my sea view in Largs?", answer: "Not if it's glass. Glass balustrades are a common choice in Largs because they keep the view open while still meeting safety requirements on a raised deck." },
      { question: "Is composite decking suitable for Largs seafront homes?", answer: "Yes. Composite boards resist salt, moisture and fading much better than timber, which makes them well suited to properties near the promenade." },
    ],
  },
  {
    slug: "cumnock",
    name: "Cumnock",
    character: "marketTown",
    nearby: ["Auchinleck", "New Cumnock", "Mauchline", "Dalmellington"],
    description: `Decking in Cumnock and the surrounding upland area of East Ayrshire. Timber and composite decks, repairs and free quotes from ${brand}.`,
    intro: `Cumnock is the main town for the upland part of East Ayrshire, sitting on the Lugar Water near Dumfries House. It's higher and more inland than the coastal towns, so winters are colder and wetter, and decks here need to be built with that in mind.`,
    localDetail: `Cumnock grew around its market square and the coal industry that once surrounded it. The housing is a mix of older stone properties near the centre, council-built estates and newer private housing on the edges of the town. Gardens are often a decent size, but the higher rainfall and cooler temperatures mean timber stays damp for longer, so good drainage, ventilation and properly treated timber — or composite — are important. Frost can also make shaded decks slippery in winter.`,
    considerations: [
      "Higher rainfall and cooler winters make ventilation under the deck important to prevent rot.",
      "Anti-slip or grooved boards help on shaded decks that hold frost.",
      "Composite is worth considering where a timber deck would stay damp for long periods.",
    ],
    locationFaqs: [
      { question: "Does the weather in Cumnock affect what decking I should choose?", answer: "It can. Cumnock is higher and wetter than the coast, so timber stays damp for longer. Composite boards, or well-treated timber with good ventilation underneath, will last longer." },
      { question: "How do I stop my Cumnock deck getting slippery in winter?", answer: `Choosing anti-slip boards and positioning the deck to catch sun where possible both help. ${brand} can also advise on cleaning to keep algae down.` },
      { question: "Do you cover the villages around Cumnock?", answer: `Yes. ${brand} covers Cumnock along with nearby Auchinleck, New Cumnock, Mauchline and the surrounding area.` },
    ],
  },
  {
    slug: "girvan",
    name: "Girvan",
    character: "harbourTown",
    nearby: ["Barr", "Dailly", "Maybole", "Patna"],
    description: `Decking in Girvan, from harbour-side homes to hillside gardens looking out to Ailsa Craig. Composite and timber decks and repairs from ${brand}.`,
    intro: `Girvan is a working harbour town at the south of the Ayrshire coast, with Ailsa Craig on the horizon and Byne Hill rising behind it. Gardens range from flat seafront plots to sloping ones on the higher streets with views across the water.`,
    localDetail: `The streets nearest the harbour and the seafront get the full weather coming in off the Firth of Clyde, so salt and wind exposure are part of the brief. Further from the shore, housing climbs gently towards the hills, and gardens with a view of Ailsa Craig are often worth raising a deck to make the most of. Girvan is also further from the bigger Ayrshire towns than most places we cover, so many owners want a durable deck that won't need regular callouts.`,
    considerations: [
      "Raising a deck slightly can open up views towards Ailsa Craig from sloping gardens.",
      "Seafront properties need composite boards and marine-grade fixings to cope with salt.",
      "Durable, low-maintenance materials suit a town further from the larger service centres.",
    ],
    locationFaqs: [
      { question: "Can you build a deck to make the most of a view of Ailsa Craig?", answer: `Yes. On sloping Girvan gardens, ${brand} can build a raised deck positioned to face the view, with glass or low balustrades so it isn't blocked.` },
      { question: "Is Girvan too far south for you to cover?", answer: `No. ${brand} covers Girvan and the surrounding villages, including Dailly and Barr.` },
      { question: "What decking lasts longest near Girvan harbour?", answer: "Composite boards on a well-drained frame with stainless fixings. They cope far better with salt air than standard timber and zinc-plated screws." },
    ],
  },
  {
    slug: "stewarton",
    name: "Stewarton",
    character: "marketTown",
    nearby: ["Kilmaurs", "Fenwick", "Dreghorn", "Irvine"],
    description: `Decking in Stewarton, including the town's many newer housing developments. Composite and timber decks and free quotes from ${brand}.`,
    intro: `Stewarton, once known as the "bonnet toun" for its bonnet-making trade, has grown quickly in recent decades as a commuter town with a rail link to Glasgow. A lot of its housing is new-build, and many owners are looking to add their first deck.`,
    localDetail: `Stewarton's older centre sits along the Annick Water, while much of the town's growth has come from new housing developments on its outskirts. New-build gardens here are typically turfed, fairly level and bounded by close-board fencing, which makes them straightforward to deck — but the ground in newly built plots can still be settling, so footings need to be set properly. Many buyers of new homes want a deck that feels like part of the house, laid at door height with matching colours.`,
    considerations: [
      "New-build plots may still be settling, so footings need to go down to firm ground.",
      "A deck at door threshold height is a popular way to extend living space from bifold or patio doors.",
      "Composite colours can be chosen to match modern render, cladding or window frames.",
    ],
    locationFaqs: [
      { question: "Can you deck a new-build garden in Stewarton?", answer: `Yes. ${brand} regularly builds on new-build plots. We set footings down to firm ground because new gardens can still settle for a while after the house is finished.` },
      { question: "Can a deck be level with my bifold doors?", answer: "In most cases, yes. We build the frame to bring the deck surface close to the door threshold so it feels like an extension of the room." },
      { question: "Do you cover the older part of Stewarton too?", answer: "Yes — the whole town, from the older streets by the Annick Water to the newer developments on the edges." },
    ],
  },

  // South Ayrshire
  {
    slug: "alloway",
    name: "Alloway",
    character: "commuterVillage",
    nearby: ["Ayr", "Maybole", "Coylton", "Monkton"],
    description: `Decking in Alloway for large gardens and older properties in a conservation setting near the River Doon. Composite and hardwood-style decks from ${brand}.`,
    intro: `Alloway is best known as the birthplace of Robert Burns, with Burns Cottage, the Brig o' Doon and the Burns Monument all in the village. It's also one of the most sought-after addresses near Ayr, with large detached homes and mature gardens.`,
    localDetail: `Alloway's gardens are among the largest we work on, often with mature trees, established planting and a lot of shade in parts of the plot. Owners here tend to want a deck that sits well alongside the existing landscaping rather than dominating it, and higher-end composite boards with a natural woodgrain finish are a common choice. The village has a conservation area, so for raised decks or anything visible from the street it's worth checking with South Ayrshire Council before work starts.`,
    considerations: [
      "Conservation area rules may apply — raised decks visible from the street should be checked with the council.",
      "Mature trees mean shade and leaf fall; composite boards resist green algae better than timber.",
      "Larger gardens suit decks placed away from the house to catch evening sun.",
    ],
    locationFaqs: [
      { question: "Do I need planning permission for a deck in Alloway?", answer: `Most ground-level decks don't, but Alloway has a conservation area and raised decks have stricter rules. ${brand} recommends checking with South Ayrshire Council for anything raised or visible from the street.` },
      { question: "Can a deck be built away from the house in a large Alloway garden?", answer: "Yes. A free-standing deck at the far end of the garden is a good way to catch evening sun or create a separate seating area among existing planting." },
      { question: "Which decking looks most natural in an established garden?", answer: "A woodgrain composite in a warm brown or grey tone tends to sit well among mature planting while avoiding the upkeep of timber." },
    ],
  },
  {
    slug: "monkton",
    name: "Monkton",
    character: "commuterVillage",
    nearby: ["Prestwick", "Ayr", "Symington", "Troon"],
    description: `Decking in Monkton, the village beside Glasgow Prestwick Airport. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Monkton is a small village right next to Glasgow Prestwick Airport, close to where the A77 and A78 meet. Newer housing has been added alongside the older village streets, giving a mix of garden sizes.`,
    localDetail: `Monkton sits on flat, open land north of Prestwick, and gardens here aren't sheltered by much — wind comes straight across the fields and from the coast. The village's newer homes have standard modern plots, while the older cottages near the church have smaller, more irregular gardens. Because the village is so close to the airport, some owners want a deck with solid screening on one or more sides to create a more private, sheltered seating area.`,
    considerations: [
      "Open, exposed ground means screening or a windbreak can make a deck much more usable.",
      "Flat plots suit simple ground-level decks off the back of the house.",
      "Older cottage gardens may have irregular shapes that need a made-to-measure layout.",
    ],
    locationFaqs: [
      { question: "Can you add screening to a deck in Monkton?", answer: `Yes. ${brand} can add slatted or solid screening to one or more sides of a deck to give shelter from the wind and more privacy.` },
      { question: "Do you work on the older cottages in Monkton?", answer: "Yes. We build decks for the older cottages as well as newer homes, shaping the layout around irregular gardens where needed." },
      { question: "Is Monkton in your coverage area?", answer: `Yes. Monkton is a short distance from Prestwick and Ayr and is covered as standard by ${brand}.` },
    ],
  },
  {
    slug: "symington",
    name: "Symington",
    character: "commuterVillage",
    nearby: ["Prestwick", "Troon", "Monkton", "Dundonald"],
    description: `Decking in Symington, a small South Ayrshire village just off the A77. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Symington is a small, quiet village just off the A77 between Kilmarnock and Ayr, with a historic parish church at its heart. It's a popular spot for commuters who want village life within easy reach of both towns.`,
    localDetail: `Symington's housing is mostly detached and semi-detached homes on reasonably sized plots, with a handful of older properties close to the village centre. Gardens are generally level and open to farmland on the edge of the village, which gives a lot of homes a rural outlook worth facing a deck towards. Being inland, salt isn't an issue, but the open aspect means wind can still be a factor on the edges of the village.`,
    considerations: [
      "Gardens backing onto farmland suit a deck positioned to face the open outlook.",
      "Level plots mean most decks can be built low with minimal groundwork.",
      "Edge-of-village gardens may benefit from screening on the windward side.",
    ],
    locationFaqs: [
      { question: "Can you position a deck to face the countryside in Symington?", answer: `Yes. ${brand} can place and shape the deck so the main seating area faces the view over the fields rather than back towards the house.` },
      { question: "Is Symington too small a village for you to cover?", answer: "Not at all. Symington is covered as standard, along with nearby Monkton, Dundonald and Prestwick." },
      { question: "What's a typical deck size for a Symington garden?", answer: "It varies, but most gardens here have room for a comfortable dining or seating deck without taking over the whole lawn. We measure up and suggest a size that suits the space." },
    ],
  },
  {
    slug: "dundonald",
    name: "Dundonald",
    character: "commuterVillage",
    nearby: ["Troon", "Symington", "Kilmarnock", "Crosshouse"],
    description: `Decking in Dundonald, the village below Dundonald Castle between Troon and Kilmarnock. Composite and timber decks from ${brand}.`,
    intro: `Dundonald sits beneath the hilltop ruins of Dundonald Castle, halfway between Troon and Kilmarnock. The village combines older cottages along its main street with more recent housing built as it has grown.`,
    localDetail: `Because Dundonald is built along the base of the castle hill, some gardens on the higher side of the village have a noticeable slope, while those on the lower side are flatter. The newer developments tend to have regular modern plots. The village is close enough to the coast to get some sea weather, but it's more sheltered than Troon, which gives more flexibility on materials. Many homes have a view of the castle or the surrounding hills that owners like to make the most of.`,
    considerations: [
      "Gardens on the higher side of the village may need a partly raised deck to level out the slope.",
      "Views towards the castle and hills are worth considering when positioning the deck.",
      "Both timber and composite work well in the more sheltered parts of the village.",
    ],
    locationFaqs: [
      { question: "My Dundonald garden slopes — can it still be decked?", answer: `Yes. ${brand} can build a deck that is raised at one end and sits close to the ground at the other, creating a level area on a sloping plot.` },
      { question: "Is timber decking OK in Dundonald, or should I choose composite?", answer: "Both work. Dundonald is more sheltered than the coast, so well-treated timber is a reasonable choice. Composite is still the better option if you want to avoid yearly maintenance." },
      { question: "Do you cover Dundonald and the surrounding area?", answer: "Yes — Dundonald along with Troon, Symington, Crosshouse and Kilmarnock." },
    ],
  },
  {
    slug: "tarbolton",
    name: "Tarbolton",
    character: "commuterVillage",
    nearby: ["Annbank", "Mauchline", "Coylton", "Ayr"],
    description: `Decking in Tarbolton, the village home to the Bachelors' Club. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Tarbolton is a village between Ayr and Mauchline, known for the Bachelors' Club — the 17th-century house where Robert Burns and his friends formed a debating society, now run by the National Trust for Scotland.`,
    localDetail: `Tarbolton sits on higher ground than the coastal towns, surrounded by farmland, and its gardens tend to be open to the weather. The village has a mix of older properties near the centre and newer homes on its edges. Many gardens have space for a good-sized deck, and owners often want a sheltered corner to sit in, so screens and partial roofs or pergolas over part of the deck are popular additions.`,
    considerations: [
      "Higher, open ground means screening or a pergola can make a deck more sheltered.",
      "Good-sized plots allow room for separate dining and seating areas.",
      "Farmland outlooks make it worth thinking about which way the deck faces.",
    ],
    locationFaqs: [
      { question: "Can you add a pergola to a deck in Tarbolton?", answer: `Yes. ${brand} can build a pergola or screen over part of the deck to create a more sheltered seating area on open, exposed gardens.` },
      { question: "Do you cover Tarbolton?", answer: "Yes. Tarbolton is covered as standard, along with Annbank, Mauchline and Coylton." },
      { question: "What's the best position for a deck in an open Tarbolton garden?", answer: "Usually the spot that gets afternoon and evening sun while being sheltered from the prevailing westerly wind. We'll look at the garden and suggest the best position." },
    ],
  },
  {
    slug: "annbank",
    name: "Annbank",
    character: "commuterVillage",
    nearby: ["Tarbolton", "Mauchline", "Ayr", "Coylton"],
    description: `Decking in Annbank, a former mining village above the River Ayr. Timber and composite decks and free quotes from ${brand}.`,
    intro: `Annbank is a former mining village a few miles east of Ayr, set above the River Ayr, with neighbouring Mossblown just to the west. It's grown into a quiet commuter village with a mix of older and newer homes.`,
    localDetail: `Annbank's older miners' rows and cottages have narrow gardens, while more recent housing on the edges of the village has larger, more regular plots. Parts of the village sit on ground that drops towards the river, so some gardens slope away from the house. Owners here often want a practical, hard-wearing deck for family use rather than a showpiece, and value good value timber or entry-level composite.`,
    considerations: [
      "Gardens that drop towards the river may need a raised section to create a level area.",
      "Narrow cottage gardens suit a deck across the width of the plot near the house.",
      "Practical, hard-wearing decks for family use are the most common request.",
    ],
    locationFaqs: [
      { question: "Can you build a deck on a garden that slopes away in Annbank?", answer: `Yes. ${brand} can raise the far end of the deck on posts so the surface stays level, with steps down to the lawn.` },
      { question: "What's a good value decking option in Annbank?", answer: "Pressure-treated timber is the lowest upfront cost. Entry-level composite costs more but saves on staining and upkeep over the years. We can price both." },
      { question: "Do you cover Mossblown as well as Annbank?", answer: "Yes. Mossblown and Annbank are covered together, along with Tarbolton and Coylton." },
    ],
  },
  {
    slug: "coylton",
    name: "Coylton",
    character: "commuterVillage",
    nearby: ["Ayr", "Tarbolton", "Annbank", "Patna"],
    description: `Decking in Coylton, the village along the A70 east of Ayr. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Coylton stretches along the A70 a few miles east of Ayr. It has grown significantly with newer housing developments, making it a popular choice for families who work in Ayr but want a village setting.`,
    localDetail: `Coylton is spread out, with different parts of the village built at different times. The newer developments have regular, often fairly small modern gardens, while older properties nearer the original village have more space. Many new homes here have kitchen-diners opening onto the garden, and owners want a deck that extends that space outside. Being inland and a little higher than Ayr, Coylton gets slightly cooler, damper conditions, so ventilation under the deck is worth getting right.`,
    considerations: [
      "Decks built off kitchen-diner doors work best close to threshold height.",
      "Newer plots are often compact, so a deck may need to share space with lawn and a shed.",
      "Good ventilation under the frame helps in the slightly damper inland climate.",
    ],
    locationFaqs: [
      { question: "Can you build a deck off my kitchen doors in Coylton?", answer: `Yes. ${brand} can set the deck close to the level of the door threshold so it works as an extension of the kitchen or dining area.` },
      { question: "How much of a small Coylton garden should a deck take up?", answer: "It depends how you use the garden. Many families keep some lawn for children and use the deck for seating and dining. We'll suggest a size that balances both." },
      { question: "Do you cover all parts of Coylton?", answer: "Yes — the whole village, including the newer developments and the older properties along the A70." },
    ],
  },
  {
    slug: "maybole",
    name: "Maybole",
    character: "marketTown",
    nearby: ["Alloway", "Girvan", "Dailly", "Ayr"],
    description: `Decking in Maybole, the hillside town known as the historic capital of Carrick. Raised decks, composite and timber from ${brand}.`,
    intro: `Maybole is the historic capital of Carrick, built on a hillside with Maybole Castle and its old tolbooth at the centre of town. Culzean Castle and Country Park are just a few miles away on the coast.`,
    localDetail: `Maybole's hillside setting means a lot of its gardens aren't level. Properties on the steeper streets often have gardens that rise or fall sharply from the house, which is where a raised or tiered deck earns its keep by turning an unusable slope into a proper outdoor space. The town has a lot of older stone buildings as well as post-war and newer housing on its edges. Its elevated position also gives some homes a view across the countryside towards the coast.`,
    considerations: [
      "Steep gardens often need a raised or multi-level deck with steps between tiers.",
      "Raised decks over a certain height need balustrades and may need planning permission.",
      "Elevated gardens may have views worth orienting the deck towards.",
    ],
    locationFaqs: [
      { question: "Can you deck a steep garden in Maybole?", answer: `Yes. ${brand} builds raised and multi-level decks for sloping gardens, with steps between levels and balustrades where the drop requires them.` },
      { question: "Do I need planning permission for a raised deck in Maybole?", answer: "In Scotland, a deck with its surface more than 0.5m above ground level usually falls outside permitted development and needs planning permission. We'll flag it at quote stage if your design is likely to need it." },
      { question: "Do you cover the villages around Maybole?", answer: "Yes — Maybole along with Dailly, Alloway, Girvan and the countryside around Culzean." },
    ],
  },
  {
    slug: "dailly",
    name: "Dailly",
    character: "ruralVillage",
    nearby: ["Girvan", "Maybole", "Patna", "Barr"],
    description: `Decking in Dailly, a village in the Water of Girvan valley. Timber and composite decks for rural gardens from ${brand}.`,
    intro: `Dailly is a small village in the Water of Girvan valley, inland from Girvan. Once a coal-mining community, it's now a quiet rural village surrounded by farmland and wooded hills.`,
    localDetail: `Dailly's valley setting means it gets plenty of rain and can feel quite damp, especially in gardens shaded by the surrounding hills and trees. Properties range from the village's older cottages and former miners' housing to farmhouses and rural homes nearby with much larger grounds. In the damper valley conditions, choosing materials that resist moss and rot makes a big difference to how long a deck lasts and how safe it is underfoot.`,
    considerations: [
      "Valley gardens can stay damp — composite or well-ventilated timber lasts longer.",
      "Shaded decks benefit from anti-slip boards.",
      "Rural properties nearby often have space for larger decks or outdoor entertaining areas.",
    ],
    locationFaqs: [
      { question: "Will a deck in Dailly get mossy?", answer: `Shaded timber decks in damp valleys can. ${brand} recommends composite boards or grooved anti-slip timber, with good airflow under the frame, to reduce moss and slipperiness.` },
      { question: "Do you cover farms and rural properties near Dailly?", answer: "Yes, as long as there's reasonable access for materials. We cover Dailly and the surrounding countryside." },
      { question: "Is Dailly within your coverage area?", answer: "Yes. Dailly is covered alongside Girvan, Maybole and Barr." },
    ],
  },
  {
    slug: "barr",
    name: "Barr",
    character: "ruralVillage",
    nearby: ["Girvan", "Dailly", "Patna", "Maybole"],
    description: `Decking in Barr, the small village in the Stinchar valley on the edge of Galloway Forest Park. Decks for rural properties from ${brand}.`,
    intro: `Barr is a small, remote village in the Stinchar valley, south-east of Girvan, on the edge of the Galloway Forest Park. It's one of the most rural places we cover, with cottages, farms and holiday homes set in open hill country.`,
    localDetail: `Many properties around Barr are cottages, farmhouses or holiday lets with generous plots and views over the valley. Access for materials on narrow rural roads needs planning, and because the village is quite remote, owners often want a deck that is built to last with as little maintenance as possible. Holiday let owners in particular tend to choose composite, as it keeps looking good between guests without regular treatment.`,
    considerations: [
      "Access for delivery vehicles on narrow rural roads should be checked before work starts.",
      "Holiday lets benefit from composite boards that stay presentable with minimal upkeep.",
      "Valley views are worth considering when choosing where the deck faces.",
    ],
    locationFaqs: [
      { question: "Do you work as far out as Barr?", answer: `Yes. ${brand} covers Barr and the Stinchar valley. We'll check access for materials when we quote.` },
      { question: "What decking is best for a holiday let near Barr?", answer: "Composite is usually the best choice. It doesn't need staining, resists moss and stays presentable between guests with just a wash." },
      { question: "Can you build a large deck for a rural property?", answer: "Yes. Rural plots often have space for bigger decks, including separate dining and lounging areas or a deck wrapped around part of the house." },
    ],
  },
  {
    slug: "patna",
    name: "Patna",
    character: "ruralVillage",
    nearby: ["Dalmellington", "Coylton", "Girvan", "Ayr"],
    description: `Decking in Patna, the Doon Valley village on the A713. Timber and composite decks with free quotes from ${brand}.`,
    intro: `Patna is a village in the Doon Valley on the A713, built largely to house workers in the area's ironworks and coal mines. The River Doon runs right through it, with open hills rising on either side.`,
    localDetail: `Much of Patna's housing dates from the 20th century, when the village was expanded for mining families, and gardens are often a practical size with a slope towards or away from the river. The valley gets more rain than the coast, and gardens facing away from the sun can stay damp for long spells. Hard-wearing, low-maintenance decks that don't turn green and slippery are what most owners here are after.`,
    considerations: [
      "Gardens sloping towards the river may need a raised section.",
      "Higher rainfall makes drainage and airflow under the deck important.",
      "Anti-slip boards are worth considering for north-facing gardens.",
    ],
    locationFaqs: [
      { question: "Do you cover Patna and the Doon Valley?", answer: `Yes. ${brand} covers Patna, Dalmellington and the rest of the Doon Valley.` },
      { question: "My Patna garden faces north — what decking should I use?", answer: "North-facing decks stay damp longer, so composite or grooved anti-slip boards on a well-ventilated frame are the best choice." },
      { question: "Can you replace an old, slippery deck in Patna?", answer: "Yes. We can remove the old deck and build a new one, or replace just the boards if the frame is still sound." },
    ],
  },

  // East Ayrshire
  {
    slug: "galston",
    name: "Galston",
    character: "marketTown",
    nearby: ["Newmilns", "Darvel", "Hurlford", "Kilmarnock"],
    description: `Decking in Galston, at the foot of the Irvine Valley. Timber and composite decks, repairs and free quotes from ${brand}.`,
    intro: `Galston sits at the western end of the Irvine Valley, near the ruins of Loudoun Castle and the tower house of Barr Castle. It's the largest of the three Irvine Valley towns, with a mix of older stone houses and newer estates.`,
    localDetail: `Galston's older housing is built close to the River Irvine and the town centre, with smaller gardens, while newer estates on the rising ground to the north and south have larger, often sloping plots. The valley setting shelters the town from the worst coastal wind but brings plenty of rain. Many owners here want a deck to replace an old patio that has become uneven or is prone to puddling.`,
    considerations: [
      "Sloping estate gardens may need a raised deck or retaining work.",
      "A deck is a good way to replace an uneven or poorly draining old patio.",
      "Valley rainfall makes drainage beneath the deck important.",
    ],
    locationFaqs: [
      { question: "Can you replace an old patio with decking in Galston?", answer: `Yes. ${brand} can build a deck over or in place of an old patio, which is often easier than relaying slabs on uneven ground.` },
      { question: "Do you cover the whole Irvine Valley?", answer: "Yes — Galston, Newmilns and Darvel, plus Hurlford and Kilmarnock." },
      { question: "My Galston garden slopes uphill from the house. Can it be decked?", answer: "Yes. We can build a raised deck further up the garden with steps down to the house, or cut in a level area at the house end." },
    ],
  },
  {
    slug: "newmilns",
    name: "Newmilns",
    character: "formerIndustrial",
    nearby: ["Galston", "Darvel", "Hurlford", "Kilmarnock"],
    description: `Decking in Newmilns, the Irvine Valley lace town. Raised and stepped decks for sloping gardens from ${brand}.`,
    intro: `Newmilns is a small town in the Irvine Valley, famous for its lace-making industry, which grew in the 19th century and is still carried on locally today. The town is built along the River Irvine with the valley sides rising steeply behind it.`,
    localDetail: `Because Newmilns is squeezed into the valley, many of its streets climb the hillside, and gardens behind the older terraces and weavers' cottages can be steep, narrow or both. A level outdoor space is often hard to come by, which makes raised and stepped decks especially useful here. Being tucked into the valley also means some gardens are shaded for much of the day in winter.`,
    considerations: [
      "Steep, narrow gardens often suit a raised deck with steps down to the rest of the plot.",
      "Shaded valley gardens benefit from composite or anti-slip boards.",
      "Access through terraced housing can be tight — materials may need to be carried through.",
    ],
    locationFaqs: [
      { question: "Can you build a deck in a steep Newmilns garden?", answer: `Yes. ${brand} builds raised and stepped decks that turn steep valley-side gardens into usable, level space.` },
      { question: "What if there's no side access to my Newmilns garden?", answer: "That's common with terraced homes. We can carry materials through the house or over a wall where that's the only option, protecting floors as we go." },
      { question: "Do you cover Newmilns?", answer: "Yes — Newmilns along with Galston, Darvel and the rest of the Irvine Valley." },
    ],
  },
  {
    slug: "darvel",
    name: "Darvel",
    character: "formerIndustrial",
    nearby: ["Newmilns", "Galston", "Hurlford", "Kilmarnock"],
    description: `Decking in Darvel, at the head of the Irvine Valley. Timber and composite decks for hillside gardens from ${brand}.`,
    intro: `Darvel is the furthest east of the Irvine Valley towns, with open hills beyond it. It's known for its lace mills and as the birthplace of Sir Alexander Fleming, the discoverer of penicillin, who was born at Lochfield farm nearby.`,
    localDetail: `Darvel's main street runs along the valley floor, with housing climbing the hillside on either side. Gardens on the higher streets often slope and have a view down the valley. As the highest of the valley towns, Darvel sees colder winters and more frost than Kilmarnock, and decks here need to be built to cope with freeze-thaw cycles and wet ground.`,
    considerations: [
      "Hillside gardens may need raised decks to create a level area with a valley view.",
      "Frost and cold winters mean anti-slip boards and good drainage are important.",
      "Ventilation under the deck helps timber dry out between wet spells.",
    ],
    locationFaqs: [
      { question: "Does Darvel's colder weather affect decking?", answer: `It does a little. ${brand} recommends anti-slip boards and a well-drained, ventilated frame so the deck copes with frost and wet winters.` },
      { question: "Can you build a raised deck to enjoy the view down the valley?", answer: "Yes. On sloping gardens we can build a raised deck positioned to face the view, with balustrades to suit." },
      { question: "Is Darvel too far up the valley for you to cover?", answer: "No. Darvel is covered along with Newmilns, Galston and Kilmarnock." },
    ],
  },
  {
    slug: "hurlford",
    name: "Hurlford",
    character: "formerIndustrial",
    nearby: ["Kilmarnock", "Galston", "Crosshouse", "Newmilns"],
    description: `Decking in Hurlford, the village beside the River Irvine just east of Kilmarnock. Decks and repairs with free quotes from ${brand}.`,
    intro: `Hurlford sits on the River Irvine just east of Kilmarnock, where the Cessnock Water joins it. It grew as an industrial village around ironworks and mining, and has since expanded with newer housing.`,
    localDetail: `Hurlford's older streets have compact gardens behind terraced and semi-detached housing, while newer developments have larger, more open plots. Parts of the village are low-lying near the river, so drainage is worth thinking about. Because it's so close to Kilmarnock, many owners here are replacing older timber decks or adding a first deck to a newer home.`,
    considerations: [
      "Low-lying gardens near the river benefit from a well-ventilated deck frame.",
      "Compact gardens behind older terraces suit a deck close to the house.",
      "Older timber decks may need a frame check before resurfacing.",
    ],
    locationFaqs: [
      { question: "Can you replace just the boards on my Hurlford deck?", answer: `If the frame is sound, yes. ${brand} checks joists and posts first, then replaces the boards with timber or composite.` },
      { question: "Is Hurlford covered?", answer: "Yes. Hurlford is covered as standard along with Kilmarnock, Galston and Crosshouse." },
      { question: "My Hurlford garden is damp — will a deck help?", answer: "It can. A raised frame with a weed membrane and space for airflow keeps the deck dry and gives you a usable surface even when the ground is wet." },
    ],
  },
  {
    slug: "crosshouse",
    name: "Crosshouse",
    character: "commuterVillage",
    nearby: ["Kilmarnock", "Hurlford", "Dundonald", "Kilmaurs"],
    description: `Decking in Crosshouse, the village just west of Kilmarnock. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Crosshouse is a village just west of Kilmarnock, home to University Hospital Crosshouse and known as the birthplace of Andrew Fisher, who went on to become Prime Minister of Australia.`,
    localDetail: `Crosshouse is a former mining village that has grown with newer private housing. The older part of the village has traditional rows and cottages with long, narrow gardens, while the newer estates have more regular modern plots. Many residents work shifts at the hospital or commute into Kilmarnock, and a low-maintenance deck that doesn't need weekend upkeep is a common request.`,
    considerations: [
      "Low-maintenance composite suits households with busy or shift-work schedules.",
      "Long, narrow older gardens can suit a deck at the far end to catch the sun.",
      "Newer estate gardens are usually level and straightforward to deck.",
    ],
    locationFaqs: [
      { question: "What's the lowest-maintenance decking for a Crosshouse home?", answer: `Composite. It doesn't need staining or oiling — an occasional wash keeps it looking good. ${brand} can price composite and timber side by side.` },
      { question: "Can a deck go at the bottom of the garden instead of by the house?", answer: "Yes. In long gardens a deck at the far end often gets more sun and gives you a separate seating area." },
      { question: "Do you cover Crosshouse?", answer: "Yes. Crosshouse is covered with Kilmarnock, Kilmaurs, Hurlford and Dundonald." },
    ],
  },
  {
    slug: "mauchline",
    name: "Mauchline",
    character: "ruralVillage",
    nearby: ["Tarbolton", "Annbank", "Auchinleck", "Cumnock"],
    description: `Decking in Mauchline, the East Ayrshire village with close Burns connections. Timber and composite decks from ${brand}.`,
    intro: `Mauchline has strong links to Robert Burns, who farmed at nearby Mossgiel and married Jean Armour here — the Burns House Museum is in the village. It's also home to one of the world's main makers of curling stones, and the Ballochmyle Viaduct is close by.`,
    localDetail: `Mauchline is a small, rural village surrounded by farmland, with a mix of older stone cottages near the centre and newer homes on its edges. Gardens are often a good size and open to the countryside. Being inland and on higher ground, it doesn't have the salt exposure of the coast, but winters are cold and wet, so the frame and boards need to cope with long damp spells.`,
    considerations: [
      "Larger gardens open up options like wraparound decks or separate seating areas.",
      "Cold, wet winters make ventilation and drainage under the deck important.",
      "Stone cottages may have uneven ground or old paving to clear first.",
    ],
    locationFaqs: [
      { question: "Can you work around an older stone cottage in Mauchline?", answer: `Yes. ${brand} often works on older properties where the ground is uneven or there's old paving to lift. We'll clear and level the area before building.` },
      { question: "Do you cover Mauchline and nearby villages?", answer: "Yes — Mauchline, Tarbolton, Annbank, Auchinleck and Cumnock." },
      { question: "Should I choose timber or composite for a rural Mauchline garden?", answer: "Both work. Timber is cheaper upfront; composite needs less upkeep through wet winters. We can talk through the differences for your garden." },
    ],
  },
  {
    slug: "auchinleck",
    name: "Auchinleck",
    character: "formerIndustrial",
    nearby: ["Cumnock", "Mauchline", "New Cumnock", "Galston"],
    description: `Decking in Auchinleck, the former mining village near Cumnock. Timber and composite decks and repairs from ${brand}.`,
    intro: `Auchinleck is a former mining village just north-west of Cumnock, historically linked with the Boswell family of Auchinleck House. The preserved Barony A-frame, a reminder of the area's coal-mining past, stands nearby.`,
    localDetail: `Auchinleck's housing is largely made up of former miners' homes and later council-built estates, with gardens of a practical, regular size. Many owners are looking for good value, family-friendly decking rather than elaborate designs. The village is inland and fairly high, so it gets its share of wind and rain, and decks here need to be well built to handle wet winters.`,
    considerations: [
      "Practical, family-friendly decks at a sensible budget are the most common request.",
      "Wet, windy winters make secure fixings and good drainage important.",
      "Regular estate gardens are generally straightforward to deck.",
    ],
    locationFaqs: [
      { question: "What does a basic deck cost in Auchinleck?", answer: `It depends on size and materials. ${brand} can quote for a simple treated timber deck as well as composite so you can compare before deciding.` },
      { question: "Do you cover Auchinleck?", answer: "Yes. Auchinleck is covered with Cumnock, New Cumnock and Mauchline." },
      { question: "Can you build a child-friendly deck in Auchinleck?", answer: "Yes. We can add balustrades, gates and anti-slip boards so the deck is safer for young children." },
    ],
  },
  {
    slug: "new-cumnock",
    name: "New Cumnock",
    character: "formerIndustrial",
    nearby: ["Cumnock", "Auchinleck", "Dalmellington", "Patna"],
    description: `Decking in New Cumnock, the upland village on the River Nith and Afton Water. Hard-wearing decks from ${brand}.`,
    intro: `New Cumnock sits high in the south of East Ayrshire where the Afton Water — made famous by Burns in "Sweet Afton" — meets the River Nith. It's a former mining village surrounded by upland hills and moorland.`,
    localDetail: `New Cumnock is one of the highest and most exposed places we cover, with colder winters, more frost and heavier rainfall than towns on the coast. Gardens are generally a practical size, and the priority for most owners is a deck that is safe underfoot and lasts through harsh weather. A well-built frame and anti-slip boards matter more here than in more sheltered towns.`,
    considerations: [
      "Cold, exposed conditions mean anti-slip boards and a strong frame are a priority.",
      "Frost and freeze-thaw make good drainage essential.",
      "Composite boards cope well with long wet spells.",
    ],
    locationFaqs: [
      { question: "Will a deck last in New Cumnock's weather?", answer: `Yes, if it's built for it. ${brand} uses a well-drained, ventilated frame and recommends anti-slip or composite boards for colder, exposed spots like New Cumnock.` },
      { question: "Is New Cumnock within your coverage area?", answer: "Yes. It's covered along with Cumnock, Auchinleck and Dalmellington." },
      { question: "How do I keep a deck safe in frosty weather?", answer: "Choose grooved or anti-slip boards, keep the deck clean of algae, and position it to catch as much winter sun as possible." },
    ],
  },
  {
    slug: "kilmaurs",
    name: "Kilmaurs",
    character: "commuterVillage",
    nearby: ["Kilmarnock", "Stewarton", "Crosshouse", "Fenwick"],
    description: `Decking in Kilmaurs, the historic village north-west of Kilmarnock. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Kilmaurs is a historic village just north-west of Kilmarnock, with its 17th-century tolbooth — complete with the "jougs", an iron collar once used for punishment — still standing on the main street. It has a railway station and is popular with commuters.`,
    localDetail: `Kilmaurs has a traditional village core of older stone houses and cottages, surrounded by newer private housing. The older homes have narrower gardens, often with stone walls, while the newer estates have regular, open-plan plots. The Carmel Water runs past the village, and some gardens on the lower ground can be damp. Owners often want a deck that suits the character of an older property or adds usable space to a newer one.`,
    considerations: [
      "Stone-walled cottage gardens may need a deck shaped around existing walls.",
      "Lower-lying gardens near the Carmel Water benefit from good ventilation under the frame.",
      "Newer estate plots suit decks built close to door height.",
    ],
    locationFaqs: [
      { question: "Can you build a deck around stone walls in a Kilmaurs cottage garden?", answer: `Yes. ${brand} builds made-to-measure decks that fit around existing walls, steps and planting.` },
      { question: "Do you cover Kilmaurs?", answer: "Yes. Kilmaurs is covered with Kilmarnock, Stewarton, Crosshouse and Fenwick." },
      { question: "Which decking suits an older property in Kilmaurs?", answer: "A warm-toned timber or woodgrain composite usually suits stone buildings best. We can bring samples so you can see them against the house." },
    ],
  },
  {
    slug: "fenwick",
    name: "Fenwick",
    character: "commuterVillage",
    nearby: ["Kilmarnock", "Stewarton", "Kilmaurs", "Galston"],
    description: `Decking in Fenwick, the village on the edge of Fenwick Moor north of Kilmarnock. Composite and timber decks from ${brand}.`,
    intro: `Fenwick is a small village just off the M77 north of Kilmarnock, on the edge of Fenwick Moor. It's known as the home of the Fenwick Weavers' Society, founded in 1761 and one of the earliest co-operative societies in the world.`,
    localDetail: `Fenwick's position on the edge of open moorland makes it one of the more exposed villages we cover, with wind coming across the moor and plenty of rain. The village is a mix of older weavers' cottages and larger, newer detached homes with good-sized gardens. Many owners want a sheltered spot to sit outside, so screening, pergolas and well-positioned decks are common requests.`,
    considerations: [
      "Exposure to wind off the moor makes screening or a pergola worth considering.",
      "Larger gardens on newer properties suit bigger decks or separate seating areas.",
      "Composite boards cope well with the high rainfall.",
    ],
    locationFaqs: [
      { question: "Can you build a sheltered deck in Fenwick?", answer: `Yes. ${brand} can add screens or a pergola and position the deck to be as sheltered as possible from the wind off the moor.` },
      { question: "Is Fenwick in your coverage area?", answer: "Yes. Fenwick is covered with Kilmarnock, Kilmaurs and Stewarton." },
      { question: "Can you build a large deck for a detached home in Fenwick?", answer: "Yes. We build larger decks with built-in seating, planters or multiple levels for bigger gardens." },
    ],
  },
  {
    slug: "dalmellington",
    name: "Dalmellington",
    character: "formerIndustrial",
    nearby: ["Patna", "New Cumnock", "Cumnock", "Girvan"],
    description: `Decking in Dalmellington, at the head of the Doon Valley near Loch Doon. Hard-wearing decks from ${brand}.`,
    intro: `Dalmellington sits at the head of the Doon Valley, a few miles from Loch Doon and the edge of the Galloway Forest Park. A former ironworks and coal-mining town, it's surrounded by hills and open countryside.`,
    localDetail: `Dalmellington is one of the higher towns in Ayrshire and gets some of the heaviest rainfall. Housing is a mix of older stone buildings, former miners' homes and later council estates, with some gardens sloping steeply up the valley sides. Hard-wearing materials and a well-drained, ventilated frame are essential here, as a poorly built deck will quickly turn green and slippery.`,
    considerations: [
      "Heavy rainfall makes drainage and airflow under the deck essential.",
      "Sloping valley-side gardens may need raised or stepped decks.",
      "Composite or anti-slip boards reduce the risk of a slippery surface.",
    ],
    locationFaqs: [
      { question: "What decking is best for Dalmellington's wet climate?", answer: `Composite boards on a well-ventilated frame, or anti-slip timber. ${brand} builds with drainage in mind so the deck dries quickly after rain.` },
      { question: "Do you cover Dalmellington and Loch Doon?", answer: "Yes. We cover Dalmellington and the surrounding area, including properties towards Loch Doon where access allows." },
      { question: "Can you deck a sloping garden in Dalmellington?", answer: "Yes. We build raised and stepped decks to create level space on sloping valley-side gardens." },
    ],
  },

  // North Ayrshire
  {
    slug: "saltcoats",
    name: "Saltcoats",
    character: "harbourTown",
    nearby: ["Ardrossan", "Stevenston", "Kilwinning", "West Kilbride"],
    description: `Decking in Saltcoats, the seafront town on the North Ayrshire coast. Composite decks and repairs built for coastal weather by ${brand}.`,
    intro: `Saltcoats is a seaside town on the North Ayrshire coast, with a promenade, a small historic harbour and a well-known tidal bathing pool. Its name comes from the salt-panning industry that once operated along the shore.`,
    localDetail: `Saltcoats faces straight out onto the Firth of Clyde, and homes along the seafront and the streets behind it take a lot of wind, rain and salt spray. The town has a mix of Victorian villas, tenements and later housing estates further inland. Gardens near the front are often small and exposed, so decks here need to be built with stronger fixings and materials that won't corrode or rot in the salty air.`,
    considerations: [
      "Salt spray near the front calls for composite boards and stainless fixings.",
      "Exposed gardens may need screening to make a deck usable on windy days.",
      "Estates further inland are more sheltered and suit a wider range of materials.",
    ],
    locationFaqs: [
      { question: "What's the best decking for a Saltcoats seafront home?", answer: `Composite boards with stainless steel fixings. ${brand} recommends these for seafront properties because they resist salt, rot and fading.` },
      { question: "Can you add wind screening to a Saltcoats deck?", answer: "Yes. We can fit glass, slatted or solid screens to shelter the deck from wind off the Clyde." },
      { question: "Do you cover all of Saltcoats?", answer: "Yes. The whole town is covered, along with Ardrossan and Stevenston." },
    ],
  },
  {
    slug: "ardrossan",
    name: "Ardrossan",
    character: "harbourTown",
    nearby: ["Saltcoats", "Stevenston", "West Kilbride", "Kilwinning"],
    description: `Decking in Ardrossan, the harbour town and ferry port for Arran. Composite decks and balustrades built for coastal conditions by ${brand}.`,
    intro: `Ardrossan is the ferry port for the Isle of Arran, with its harbour, marina and the ruins of Ardrossan Castle on Castle Hill overlooking the town. Many homes here have views across the water to Arran.`,
    localDetail: `Ardrossan's layout ranges from Victorian terraces and villas close to the harbour and South Beach to newer housing on the higher ground inland. Properties on the rising ground often have gardens with a slope and a view out to Arran, which makes a raised deck with glass balustrades a popular request. Close to the shore, salt and wind exposure are the main concerns.`,
    considerations: [
      "Raised decks with glass balustrades can make the most of views to Arran.",
      "Harbour-side properties need marine-grade fixings.",
      "Sloping gardens on higher ground may need raised or stepped decks.",
    ],
    locationFaqs: [
      { question: "Can you build a deck with a view of Arran in Ardrossan?", answer: `Yes. On sloping gardens, ${brand} can build a raised deck facing the view, with glass balustrades so the outlook isn't blocked.` },
      { question: "Is composite decking better near Ardrossan harbour?", answer: "Yes. Composite resists salt and moisture much better than timber, making it the better long-term choice near the shore." },
      { question: "Do you cover Ardrossan?", answer: "Yes. Ardrossan is covered with Saltcoats, Stevenston and West Kilbride." },
    ],
  },
  {
    slug: "stevenston",
    name: "Stevenston",
    character: "harbourTown",
    nearby: ["Saltcoats", "Ardrossan", "Kilwinning", "Irvine"],
    description: `Decking in Stevenston, the coastal town beside Ardeer and the North Ayrshire dunes. Composite and timber decks from ${brand}.`,
    intro: `Stevenston sits between Saltcoats and Irvine, beside the sand dunes of Ardeer — once home to Alfred Nobel's explosives works. The town has a long sandy beach at Stevenston Point and plenty of open coastal land.`,
    localDetail: `Much of Stevenston is built on low, sandy ground near the coast, with a mix of older terraces, post-war housing and newer estates. The sandy soil drains well, but posts need to be set deep enough to stay firm. Gardens nearest the beach and dunes can be exposed to windblown sand and salt, so smooth-surfaced composite boards that are easy to sweep and wash are a practical choice.`,
    considerations: [
      "Sandy ground drains well but needs properly set footings.",
      "Windblown sand near the dunes makes easy-clean composite boards practical.",
      "Coastal exposure calls for corrosion-resistant fixings.",
    ],
    locationFaqs: [
      { question: "Does sandy soil in Stevenston affect decking?", answer: `It affects the footings. ${brand} sets posts deep enough and properly bedded so the deck stays firm on sandy ground.` },
      { question: "Which decking is easiest to keep clean near the beach?", answer: "Composite boards. They're easy to sweep and wash, and sand doesn't get into the grain the way it can with timber." },
      { question: "Do you cover Stevenston?", answer: "Yes. Stevenston is covered with Saltcoats, Ardrossan, Kilwinning and Irvine." },
    ],
  },
  {
    slug: "west-kilbride",
    name: "West Kilbride",
    character: "coastalResort",
    nearby: ["Largs", "Fairlie", "Ardrossan", "Saltcoats"],
    description: `Decking in West Kilbride and Seamill, with sea views towards Arran. Composite decks and glass balustrades from ${brand}.`,
    intro: `West Kilbride is known as Scotland's Craft Town, with the coastal settlement of Seamill just below it and the 14th-century Portencross Castle nearby. The village sits on rising ground, and many homes look out across the Firth of Clyde to Arran.`,
    localDetail: `West Kilbride's housing climbs from Seamill and the shore up the hillside, so a lot of gardens slope, and many have a sea view that owners want to make the most of. The village has a lot of detached and semi-detached homes with generous gardens, and quality finishes are often a priority. Near Seamill, gardens are more exposed to wind and salt.`,
    considerations: [
      "Sloping gardens often need raised decks, and glass balustrades keep the sea view.",
      "Higher-end composite finishes are a popular choice for larger homes.",
      "Seamill properties closer to the shore need marine-grade fixings.",
    ],
    locationFaqs: [
      { question: "Can you build a raised deck with sea views in West Kilbride?", answer: `Yes. ${brand} builds raised decks on sloping gardens, with glass balustrades to keep the view to Arran open.` },
      { question: "Do you cover Seamill as well as West Kilbride?", answer: "Yes. Seamill, West Kilbride and Portencross are all covered, along with Fairlie and Largs." },
      { question: "What's the most premium decking option?", answer: "High-end capped composite boards with hidden fixings and glass balustrades give the cleanest, longest-lasting finish." },
    ],
  },
  {
    slug: "dalry",
    name: "Dalry",
    character: "marketTown",
    nearby: ["Kilwinning", "Beith", "Kilbirnie", "Largs"],
    description: `Decking in Dalry, the Garnock Valley town on the River Garnock. Timber and composite decks and repairs from ${brand}.`,
    intro: `Dalry is a small town in the Garnock Valley, where the River Garnock meets the Rye Water. It grew as a weaving and ironworking town, and the Blair Estate lies on its southern edge.`,
    localDetail: `Dalry's older housing is packed closely around its central square and the streets leading off it, with small gardens. Newer housing on the edges of town has more space. The valley setting means some gardens slope towards the river, and low-lying ones can be damp. Most owners want a practical, good-value deck that gives them a dry, level space to sit out.`,
    considerations: [
      "Low-lying gardens near the river benefit from a well-ventilated frame.",
      "Small town-centre gardens suit a compact deck with built-in storage or seating.",
      "Sloping gardens may need a partly raised deck.",
    ],
    locationFaqs: [
      { question: "Can you build a deck in a small Dalry garden?", answer: `Yes. ${brand} designs compact decks for small gardens, including built-in seating or storage to make the most of the space.` },
      { question: "My Dalry garden is damp — is decking a good idea?", answer: "Yes, if it's built properly. A raised, ventilated frame with a membrane underneath keeps the deck dry and usable." },
      { question: "Do you cover the Garnock Valley?", answer: "Yes — Dalry, Beith and Kilbirnie are all covered." },
    ],
  },
  {
    slug: "beith",
    name: "Beith",
    character: "marketTown",
    nearby: ["Dalry", "Kilbirnie", "Kilwinning", "Largs"],
    description: `Decking in Beith, the hilltop town in the Garnock Valley. Timber and composite decks with free quotes from ${brand}.`,
    intro: `Beith is a small town on a hill at the northern end of the Garnock Valley, close to Kilbirnie Loch. Historically known for furniture-making, it's now a popular commuter town within reach of both Glasgow and the Ayrshire coast.`,
    localDetail: `Because Beith sits on a hilltop, gardens around the town slope in different directions, and many have views over the surrounding countryside. The older centre has stone houses with smaller gardens, while newer developments on the edges of town have larger plots. The elevated position also makes Beith more exposed to wind than the valley towns below it.`,
    considerations: [
      "Hillside gardens often need raised or stepped decks.",
      "Countryside views are worth considering when positioning the deck.",
      "The exposed hilltop position makes screening and secure fixings worthwhile.",
    ],
    locationFaqs: [
      { question: "Can you build a deck to make the most of a view in Beith?", answer: `Yes. ${brand} can position and raise the deck to face the view, with glass or low balustrades to keep it open.` },
      { question: "Is Beith windy for a deck?", answer: "It can be, given its hilltop position. We use secure fixings and can add screening to make the deck more sheltered." },
      { question: "Do you cover Beith?", answer: "Yes. Beith is covered with Dalry, Kilbirnie and the rest of the Garnock Valley." },
    ],
  },
  {
    slug: "kilbirnie",
    name: "Kilbirnie",
    character: "marketTown",
    nearby: ["Beith", "Dalry", "Largs", "Kilwinning"],
    description: `Decking in Kilbirnie, beside Kilbirnie Loch in the Garnock Valley. Timber and composite decks and repairs from ${brand}.`,
    intro: `Kilbirnie is a Garnock Valley town beside Kilbirnie Loch. It grew around its thread mills and the Glengarnock steelworks, and the loch is now popular for watersports and walking.`,
    localDetail: `Kilbirnie's housing is mostly terraced and semi-detached homes from its industrial past, along with post-war and newer estates. Gardens are generally a regular size, some sloping towards the valley floor. The town gets a lot of rain, so well-drained, well-ventilated decks last much longer. Owners here are often looking to replace old, worn timber decks or create a first outdoor seating area.`,
    considerations: [
      "High rainfall makes drainage and ventilation under the deck important.",
      "Older timber decks may need their frames checking before resurfacing.",
      "Sloping gardens may need partly raised decks.",
    ],
    locationFaqs: [
      { question: "Can you replace a worn deck in Kilbirnie?", answer: `Yes. ${brand} can resurface an old deck if the frame is sound, or remove it and build a new one if it isn't.` },
      { question: "Do you cover Kilbirnie?", answer: "Yes. Kilbirnie is covered with Beith, Dalry and the rest of the Garnock Valley." },
      { question: "How do I stop my Kilbirnie deck rotting?", answer: "Good ventilation, drainage gaps between boards and properly treated timber — or composite boards — make the biggest difference." },
    ],
  },
  {
    slug: "skelmorlie",
    name: "Skelmorlie",
    character: "coastalResort",
    nearby: ["Largs", "Fairlie", "West Kilbride", "Dalry"],
    description: `Decking in Skelmorlie, the steep hillside village above the Firth of Clyde. Raised decks and glass balustrades from ${brand}.`,
    intro: `Skelmorlie is the northernmost village in Ayrshire, built on a steep hillside above the Firth of Clyde with views across to Bute and Cowal. It's split between the upper village on the hill and the shore road below.`,
    localDetail: `Skelmorlie has some of the steepest gardens we work on. Many of its large Victorian villas were built to take in the view over the Clyde, and their gardens drop sharply from the house. A raised deck is often the only practical way to create a level outdoor space. The combination of height, exposure and sea air means these decks need strong footings, secure balustrades and corrosion-resistant fixings.`,
    considerations: [
      "Steep gardens often need tall raised decks with engineered footings.",
      "Glass balustrades keep the view across the Clyde open.",
      "Planning permission may be needed for decks raised well above ground level.",
    ],
    locationFaqs: [
      { question: "Can you build a deck on a very steep Skelmorlie garden?", answer: `Yes. ${brand} builds raised decks for steep gardens, with deep footings, strong frames and balustrades suitable for the height.` },
      { question: "Will I need planning permission for a raised deck in Skelmorlie?", answer: "In Scotland, a deck with its surface more than 0.5m above ground level usually falls outside permitted development and needs planning permission. We'll flag it at quote stage if your design is likely to need it." },
      { question: "Do you cover Skelmorlie?", answer: "Yes. Skelmorlie is covered with Largs, Fairlie and West Kilbride." },
    ],
  },
  {
    slug: "fairlie",
    name: "Fairlie",
    character: "coastalResort",
    nearby: ["Largs", "Skelmorlie", "West Kilbride", "Ardrossan"],
    description: `Decking in Fairlie, the small Clyde coast village between Largs and Hunterston. Composite decks for sea-view gardens from ${brand}.`,
    intro: `Fairlie is a small coastal village between Largs and Hunterston, looking across the water to Great Cumbrae. Kelburn Castle and its country park sit on the hillside just to the north.`,
    localDetail: `Fairlie's homes range from cottages along the shore to larger houses on the hillside behind, and many gardens have a view of Cumbrae and the Clyde. Properties by the water face the weather head-on, while those on the hill often have sloping gardens where a raised deck makes sense. It's a quiet village, and owners tend to want a deck that feels part of the garden rather than dominating it.`,
    considerations: [
      "Shore-side properties need composite boards and marine-grade fixings.",
      "Hillside gardens may suit raised decks facing the view of Cumbrae.",
      "Natural-looking woodgrain finishes suit the village's quieter character.",
    ],
    locationFaqs: [
      { question: "Can you build a deck facing Cumbrae in Fairlie?", answer: `Yes. ${brand} can position the deck to take in the view, with glass balustrades on raised decks so the outlook stays open.` },
      { question: "Which decking lasts best on Fairlie's shore?", answer: "Composite boards with stainless fixings. They hold up far better than timber against salt and spray." },
      { question: "Do you cover Fairlie?", answer: "Yes. Fairlie is covered with Largs, Skelmorlie and West Kilbride." },
    ],
  },
  {
    slug: "dreghorn",
    name: "Dreghorn",
    character: "commuterVillage",
    nearby: ["Irvine", "Springside", "Kilwinning", "Kilmarnock"],
    description: `Decking in Dreghorn, the village on the eastern edge of Irvine. Composite and timber decks with free quotes from ${brand}.`,
    intro: `Dreghorn sits on the eastern edge of Irvine, with its distinctive octagonal parish church dating from 1780. It's a mix of the original village and newer housing built as Irvine New Town expanded.`,
    localDetail: `Dreghorn's older part has traditional cottages and houses with smaller gardens, while the surrounding estates have regular modern plots. Its position between Irvine and Kilmarnock makes it popular with commuters and families. The ground is mostly fairly level, which makes decks straightforward to build, and a lot of owners want a family-friendly space that works for children as well as adults.`,
    considerations: [
      "Level ground makes low, ground-level decks straightforward.",
      "Family gardens benefit from balustrades, gates and anti-slip boards.",
      "Compact estate plots suit decks that share space with lawn.",
    ],
    locationFaqs: [
      { question: "Can you build a family-friendly deck in Dreghorn?", answer: `Yes. ${brand} can add balustrades, gates and anti-slip boards so the deck is safer for young children.` },
      { question: "Do you cover Dreghorn?", answer: "Yes. Dreghorn is covered with Irvine, Springside and Kilwinning." },
      { question: "How big a deck can I fit in a Dreghorn garden?", answer: "It depends on the plot. We measure the garden and suggest a size that leaves room for lawn or play space if you want it." },
    ],
  },
  {
    slug: "springside",
    name: "Springside",
    character: "commuterVillage",
    nearby: ["Irvine", "Dreghorn", "Kilwinning", "Kilmarnock"],
    description: `Decking in Springside, the former mining village east of Irvine. Timber and composite decks with free quotes from ${brand}.`,
    intro: `Springside is a small former mining village just east of Irvine and Dreghorn. It's a close-knit community with a mix of older housing and newer homes.`,
    localDetail: `Springside's gardens are mostly a practical size behind terraced and semi-detached homes, with some newer properties on larger plots. The village is on fairly level ground, which keeps groundwork simple. Owners here are usually after a straightforward, good-value deck that gives them a clean, dry place to sit out and is easy to look after.`,
    considerations: [
      "Level ground keeps groundwork and costs down.",
      "Good-value treated timber or entry-level composite are the most common choices.",
      "Compact gardens suit a deck close to the house.",
    ],
    locationFaqs: [
      { question: "Can you build a budget-friendly deck in Springside?", answer: `Yes. ${brand} can quote for treated timber and entry-level composite so you can compare costs.` },
      { question: "Is Springside covered?", answer: "Yes. Springside is covered with Irvine, Dreghorn and Kilwinning." },
      { question: "How long does a simple deck take to build?", answer: "A straightforward ground-level deck on a level garden is usually finished in a few days, depending on size." },
    ],
  },
];

export const locations: LocationPage[] = locationSeeds.map((seed) => ({
  ...seed,
  title: `Decking Installers in ${seed.name} | ${brand}`,
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
