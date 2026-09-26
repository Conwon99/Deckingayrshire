import { brandName } from "@/data/business";

export type MatrixFaq = {
  question: string;
  answer: string;
};

export type MatrixContent = {
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: MatrixFaq[];
};

const brand = brandName();

/**
 * Hand-written copy for each town × service page. Only the priority towns get these pages, and
 * each entry is written for that specific combination — how that service applies to that town's
 * housing, ground and weather. Keys are `${locationSlug}:${category.baseSlug}`.
 *
 * Do not add entries by copying another town's text and changing the name: a town only earns a
 * page here if there is something genuinely different to say about the service in that place.
 */
export const matrixContent: Record<string, MatrixContent> = {
  // ─── Ayr ────────────────────────────────────────────────────────────────
  "ayr:composite-decking": {
    metaDescription: `Composite decking in Ayr for villa gardens under mature trees and exposed seafront plots. Board colours, hidden fixings and free quotes from ${brand}.`,
    intro: `In Ayr, composite decking earns its keep in two very different places: the shaded, leafy gardens behind the older villas in the south of town, and the exposed plots near the seafront and Low Green. Both are tough on timber, and composite handles both.`,
    localParagraph: `The big sandstone villas off Racecourse Road and around Wellington Square often have mature beech and sycamore trees, which drop leaves and keep parts of the garden damp and shaded. Timber decks in these spots tend to go green and slippery within a couple of years. Composite boards don't absorb moisture the same way, so they stay cleaner and safer underfoot. Near the seafront the problem is salt and wind rather than shade, and composite with stainless fixings stands up to both.`,
    bodyParagraph: `Many Ayr villa gardens sit below the level of the back door, so a lot of our composite work here is raised by a few steps, finished with composite fascia boards to hide the frame and matching step treads. On the newer estates like Belmont and Holmston, the usual request is a ground-level deck off the patio doors in a grey or charcoal board to match modern window frames.`,
    faqs: [
      { question: "Will composite decking go green under trees in Ayr?", answer: "Much less than timber. Composite can pick up surface dirt under trees, but a wash a couple of times a year keeps it clean — it doesn't soak up moisture and turn slippery like timber does." },
      { question: "Can composite decking be raised to meet an Ayr villa's back door?", answer: `Yes. ${brand} builds the raised frame first and finishes the sides with composite fascia so you don't see the joists, with matching composite steps down to the garden.` },
      { question: "Which composite colours suit Ayr's sandstone houses?", answer: "Warm browns and mid-greys usually sit best against red or blonde sandstone. We can bring board samples so you can see them against the house." },
    ],
  },
  "ayr:timber-decking": {
    metaDescription: `Timber decking in Ayr, from raised decks on villa gardens to budget-friendly estate decks. Pressure-treated timber and free quotes from ${brand}.`,
    intro: `Timber is still the most popular decking choice on Ayr's estates, where people want a solid deck at a sensible price. It also suits some of the older villa gardens, where a natural wood finish sits better alongside stone walls and mature planting.`,
    localParagraph: `On estates like Forehill, Whitletts and Belmont, most gardens are level and fairly regular, which keeps a timber deck simple and affordable. The older villa gardens are a different job: they often need a raised timber frame to bridge the drop from the back door, and the extra height means balustrades and steps are part of the build.`,
    bodyParagraph: `${brand} uses pressure-treated timber for the frame on every Ayr job, with joists spaced properly and boards laid with a gap for drainage — important in a town that gets as much rain as Ayr. For shaded or tree-lined gardens, we suggest grooved anti-slip boards and positioning the deck to catch as much sun as possible.`,
    faqs: [
      { question: "Is timber decking a good choice for an Ayr estate garden?", answer: "Yes, for most level estate gardens. It's the most affordable option and lasts well if it's treated every year or two." },
      { question: "How often will a timber deck in Ayr need treating?", answer: "Usually every one to two years, depending on how much sun and shade it gets. Shaded decks near trees may need cleaning more often." },
      { question: "Can you build a raised timber deck for an Ayr villa?", answer: `Yes. ${brand} regularly builds raised timber decks where the garden sits below the back door, with steps and balustrades as needed.` },
    ],
  },
  "ayr:decking-repairs": {
    metaDescription: `Decking repairs in Ayr — rotten boards, loose balustrades and failing frames on older decks. Honest repair-or-replace advice from ${brand}.`,
    intro: `A lot of Ayr's decks were built in the 2000s, and many are now showing their age — soft boards, wobbly balustrades and frames that have started to rot where they sit on damp ground. ${brand} repairs and resurfaces decks across the town.`,
    localParagraph: `The most common problems we see in Ayr are decks under trees that have stayed damp for years and rotted from beneath, and decks near the seafront where fixings have corroded in the salt air and boards have started to lift. In both cases, the first job is checking the frame — if the joists are sound, new boards can go straight on top.`,
    bodyParagraph: `${brand} can replace individual boards, rebuild a failing section of frame, re-fix loose balustrades, or strip old boards and resurface the whole deck in composite. Where a raised deck in an older villa garden has become unsafe, we'll say so plainly and quote for a rebuild instead of patching it.`,
    faqs: [
      { question: "My deck in Ayr is rotting where it's shaded by trees. Can it be fixed?", answer: "Often, yes. If the rot is limited to boards or a few joists, we can replace those parts. If it's spread through the frame, a rebuild is usually better value." },
      { question: "Can you replace rusted fixings on a seafront deck in Ayr?", answer: `Yes. ${brand} can re-fix boards and balustrades with stainless screws, which last much longer in salty air.` },
      { question: "Can I put composite boards on my old timber frame?", answer: "If the frame is sound and the joist spacing suits composite, yes. We'll check before quoting — some older frames need extra joists added first." },
    ],
  },

  // ─── Prestwick ─────────────────────────────────────────────────────────
  "prestwick:composite-decking": {
    metaDescription: `Composite decking in Prestwick for level bungalow gardens and sea-facing homes. Low, step-free decks and free quotes from ${brand}.`,
    intro: `Prestwick has a lot of bungalows on level ground, and many owners want a low, step-free deck they won't need to maintain. Composite is ideal for that — it can be built close to the ground and doesn't need staining or sanding.`,
    localParagraph: `Much of Prestwick sits on flat, sandy ground, which suits a low composite deck. Because composite boards need a slightly closer joist spacing than timber, and low decks need good airflow, we plan the frame carefully so it sits as close to the door threshold as possible without trapping moisture underneath. Near the esplanade, wind and salt air make composite's resistance to fading and corrosion a real advantage.`,
    bodyParagraph: `${brand} usually recommends a lighter grey or sandstone board for Prestwick bungalows, which keeps the deck cooler in summer and suits the lighter render common in the town. For customers who want easier access, we can keep the deck at a single step or make it step-free where the ground allows.`,
    faqs: [
      { question: "Can composite decking be step-free in Prestwick?", answer: `Often, yes. On level Prestwick gardens, ${brand} can usually keep the deck close to the door threshold height so there's no step down.` },
      { question: "Is composite decking OK near the sea in Prestwick?", answer: "Yes. Composite holds its colour and doesn't rot in salty air, and we use stainless fixings near the esplanade." },
      { question: "Which colour composite is best for a Prestwick bungalow?", answer: "Lighter greys and sandstone tones are popular — they stay cooler in the sun and suit the lighter render on many Prestwick homes." },
    ],
  },
  "prestwick:timber-decking": {
    metaDescription: `Timber decking in Prestwick built on firm footings for sandy coastal ground. Affordable, well-drained decks and free quotes from ${brand}.`,
    intro: `Timber decking suits Prestwick's level gardens well, and it's the best choice when budget matters most. The main thing to get right here is the footings, because Prestwick's sandy ground behaves differently from the clay found further inland.`,
    localParagraph: `Prestwick's links-land soil drains quickly, which is good for a timber deck because the frame doesn't sit in wet ground. But loose sand means posts need to go deep enough and be properly bedded, or the deck can move and become uneven over time. We set footings to suit the ground on each property rather than using one standard depth.`,
    bodyParagraph: `${brand} builds Prestwick timber decks with pressure-treated frames and boards, drainage gaps between each board, and screws rather than nails so boards stay flat. Near the esplanade, we recommend stainless fixings and a yearly treatment to keep the timber protected from salt air.`,
    faqs: [
      { question: "Does sandy ground make a timber deck less stable?", answer: "Not if the footings are right. We set posts deep enough and firmly bedded so the deck stays level on Prestwick's sandy soil." },
      { question: "Is timber decking cheaper than composite in Prestwick?", answer: "Yes, timber is cheaper upfront. It needs treating every year or two, whereas composite needs almost no upkeep." },
      { question: "How long will a timber deck last near Prestwick seafront?", answer: "With good fixings and regular treatment, 10–15 years is realistic. Skipping maintenance near the sea shortens that noticeably." },
    ],
  },
  "prestwick:decking-repairs": {
    metaDescription: `Decking repairs in Prestwick — sunken posts, lifted boards and corroded fixings. Repair or resurface with ${brand}. Free quotes.`,
    intro: `The deck repairs we see most often in Prestwick come down to two things: posts that have sunk or shifted in sandy ground, and fixings that have corroded in the sea air. Both are usually fixable without replacing the whole deck.`,
    localParagraph: `When a Prestwick deck starts to feel uneven or springy, it's often because the original posts weren't set deep enough in the sandy soil. We can lift and re-set the affected posts and level the frame again. Closer to the esplanade, zinc-plated screws rust and boards start to lift at the ends — replacing them with stainless fixings usually solves it.`,
    bodyParagraph: `${brand} can also resurface a tired Prestwick deck by replacing old boards with new timber or composite, provided the frame underneath is still in good shape. If a bungalow owner wants to lower an old stepped deck to make access easier, we can rework the frame to bring it closer to the door threshold.`,
    faqs: [
      { question: "My Prestwick deck has become uneven. Can it be levelled?", answer: `Usually, yes. ${brand} can lift and re-set sunken posts and re-level the frame without rebuilding the whole deck.` },
      { question: "Can you replace rusty screws on my deck?", answer: "Yes. We replace old screws with stainless fixings, which last much longer in Prestwick's sea air." },
      { question: "Can you make my deck step-free when you repair it?", answer: "Sometimes. If the ground allows, we can rework the frame to bring the deck closer to the door threshold." },
    ],
  },

  // ─── Troon ─────────────────────────────────────────────────────────────
  "troon:composite-decking": {
    metaDescription: `Composite decking in Troon with glass balustrades for sea and golf-course views. Premium boards, hidden fixings and free quotes from ${brand}.`,
    intro: `Troon's larger homes and generous gardens make it one of the places we build the most premium composite decks, often with glass balustrades so the sea or golf-course view isn't lost.`,
    localParagraph: `Many of Troon's detached houses sit on wide plots towards the golf courses on the south side of town, where a composite deck is part of a larger landscaped garden. Owners here usually want capped composite boards with hidden fixings for a clean look, and they want the deck to last. Nearer the harbour, salt spray is the main concern, which composite handles much better than timber.`,
    bodyParagraph: `${brand} often builds multi-level composite decks in Troon — a dining area off the kitchen stepping down to a lounge area — finished with glass or composite balustrades. We use closer joist spacing and a ventilated frame so the boards stay flat and quiet underfoot, and stainless fixings throughout on properties near the water.`,
    faqs: [
      { question: "Can you fit glass balustrades on a composite deck in Troon?", answer: `Yes. Glass balustrades are one of the most popular options in Troon because they keep the view open. ${brand} fits them with posts or a base channel depending on the look you want.` },
      { question: "Is capped composite worth it for a Troon home?", answer: "For most Troon properties, yes. Capped boards have a protective outer layer that resists fading and staining better, which suits exposed sea-facing gardens." },
      { question: "Can you build a multi-level composite deck in Troon?", answer: "Yes. Larger Troon gardens often suit two or more levels, with steps between them and matching fascia boards." },
    ],
  },
  "troon:timber-decking": {
    metaDescription: `Timber decking in Troon, including hardwood-style finishes and decks for older harbour-side homes. Free quotes from ${brand}.`,
    intro: `Timber decking still has a place in Troon, especially where owners want a natural wood look to suit an older sandstone home or a more traditional garden. It needs more care in Troon's sea air, so the build details matter.`,
    localParagraph: `Near the harbour and Ballast Bank, a timber deck takes the full force of salt spray and wind, so we recommend stainless fixings, a well-ventilated frame and a yearly treatment to keep it in good condition. On the more sheltered streets further inland, timber lasts well and gives a warm, natural finish that some owners prefer to composite.`,
    bodyParagraph: `${brand} builds timber decks in Troon with pressure-treated frames and a choice of smooth or grooved boards. For bigger gardens, we can build timber decks with integrated planters, benches or pergolas. We'll always explain honestly where composite would be the better long-term choice.`,
    faqs: [
      { question: "Will a timber deck survive Troon's sea air?", answer: "Yes, with the right fixings and regular treatment. Stainless screws and a yearly oil or stain make a big difference near the harbour." },
      { question: "Can you build a timber deck with built-in seating in Troon?", answer: `Yes. ${brand} can add built-in benches, planters and pergolas to a timber deck.` },
      { question: "Should I choose timber or composite in Troon?", answer: "Timber is cheaper and has a natural look; composite needs far less upkeep in sea air. We'll give you both prices and explain the trade-offs." },
    ],
  },
  "troon:decking-repairs": {
    metaDescription: `Decking repairs in Troon — salt-damaged boards, corroded fixings and loose balustrades. Repairs, resurfacing and free quotes from ${brand}.`,
    intro: `In Troon, most deck repairs come down to the effects of the sea — fixings that have corroded, boards that have split and greyed, and balustrades that have worked loose in the wind. ${brand} repairs and restores decks across the town.`,
    localParagraph: `Troon's position on a headland means few gardens are fully sheltered. On decks near the harbour or seafront, we often find zinc-plated screws rusted through and boards lifting, while posts for balustrades have been rocked loose by wind. On larger properties, older multi-level timber decks can develop problems where water collects between levels.`,
    bodyParagraph: `${brand} can re-fix boards with stainless screws, replace damaged sections, re-secure or replace balustrades, and resurface the whole deck in composite if the frame is sound. Where an older deck has lost its colour, sanding and re-treating can bring timber back to life at a fraction of the cost of replacement.`,
    faqs: [
      { question: "Can you replace a loose balustrade on my Troon deck?", answer: `Yes. ${brand} can re-secure existing balustrades or replace them with new timber, composite or glass.` },
      { question: "My Troon deck has gone grey. Can it be restored?", answer: "Usually, yes. Sanding and re-treating timber can bring back its colour, provided the boards aren't rotten." },
      { question: "Can I switch my old timber deck to composite?", answer: "If the frame is sound and suitable, we can replace the timber boards with composite. We'll check the frame first." },
    ],
  },

  // ─── Kilmarnock ────────────────────────────────────────────────────────
  "kilmarnock:composite-decking": {
    metaDescription: `Composite decking in Kilmarnock, replacing tired timber decks on estates like Onthank and Kirkstyle. Low-maintenance boards and free quotes from ${brand}.`,
    intro: `In Kilmarnock, a lot of composite decking work is replacing old timber decks that have reached the end of their life. Owners who've spent years staining and scrubbing a timber deck often decide it's time for something that doesn't need the upkeep.`,
    localParagraph: `Many homes on estates such as Onthank, Bonnyton, New Farm Loch and Kirkstyle had timber decks fitted in the early 2000s. After 15–20 years of Ayrshire rain, many are soft, slippery or rotting. Where the original frame is sound, we can resurface with composite boards; where it isn't, we build a new frame and deck from scratch.`,
    bodyParagraph: `For the narrow gardens behind Kilmarnock's older sandstone terraces, ${brand} often recommends a composite deck across the width of the garden near the house, with integrated steps and sometimes built-in storage. Darker greys and browns are popular in Kilmarnock because they hide dirt well in a town that gets a lot of rain.`,
    faqs: [
      { question: "Can I replace my old timber deck with composite in Kilmarnock?", answer: `Yes. ${brand} can put composite boards on your existing frame if it's sound, or build a new frame if it isn't.` },
      { question: "Is composite decking worth it for a Kilmarnock estate home?", answer: "If you're tired of staining a timber deck every year, yes. Composite costs more upfront but saves on maintenance for decades." },
      { question: "Which composite colour hides dirt best?", answer: "Mid to dark greys and browns tend to hide dirt and leaf marks best in a wet climate like Kilmarnock's." },
    ],
  },
  "kilmarnock:timber-decking": {
    metaDescription: `Timber decking in Kilmarnock for terraced gardens and estate homes. Pressure-treated decks with proper drainage and free quotes from ${brand}.`,
    intro: `Timber is the most affordable way to add a deck in Kilmarnock, and it works well on both the narrow terraced gardens near the town centre and the regular plots on the newer estates.`,
    localParagraph: `Kilmarnock gets plenty of rain, and the heavier clay soils in parts of the town can hold water. That means a timber deck needs a frame that sits clear of the ground, with space for air to move underneath and a membrane to stop weeds growing through. We build every Kilmarnock deck with that in mind so the timber can dry out between showers.`,
    bodyParagraph: `On the longer, narrow gardens behind the terraces off London Road and around the town centre, ${brand} often builds a timber deck close to the house with steps down to a lawn, or a separate deck at the far end of the garden to catch the evening sun. On newer estates, level plots keep timber decks simple and cost-effective.`,
    faqs: [
      { question: "How do you stop a Kilmarnock timber deck rotting?", answer: `${brand} builds the frame clear of the ground, leaves space for airflow and drainage, and uses pressure-treated timber throughout.` },
      { question: "Can you build a deck at the bottom of a long Kilmarnock garden?", answer: "Yes. In longer gardens, a deck at the far end often gets more sun and creates a separate seating area." },
      { question: "Is timber decking cheaper than composite in Kilmarnock?", answer: "Yes, it's cheaper upfront, but it needs treating every year or two to keep it in good condition." },
    ],
  },
  "kilmarnock:decking-repairs": {
    metaDescription: `Decking repairs in Kilmarnock — rotten joists, soft boards and slippery decks on older estate homes. Repair or replace advice from ${brand}.`,
    intro: `Kilmarnock has a lot of timber decks built around 15–20 years ago that are now showing signs of rot. ${brand} repairs, resurfaces and replaces decks across the town, and we'll always tell you honestly which option makes sense.`,
    localParagraph: `The most common problem in Kilmarnock is rot in the joists where they sit close to damp ground, which often isn't visible until boards start to feel soft. On estates like Onthank and Bonnyton, decks from the early 2000s are now reaching the point where the frame, not just the boards, needs attention. Slippery algae on shaded decks is another frequent reason people get in touch.`,
    bodyParagraph: `${brand} starts every Kilmarnock repair by lifting a few boards and checking the frame. If the joists and posts are sound, we can replace boards, fix loose steps or resurface in composite. If rot has spread through the frame, we'll recommend a rebuild — patching a failing frame rarely lasts.`,
    faqs: [
      { question: "My Kilmarnock deck feels soft underfoot. What does that mean?", answer: "Usually rot in the boards or joists. We'll lift some boards to check how far it has spread before recommending a repair or a rebuild." },
      { question: "Can you fix a slippery deck in Kilmarnock?", answer: `Yes. ${brand} can clean and re-treat timber, or replace boards with anti-slip timber or composite.` },
      { question: "Is it worth repairing a 20-year-old deck?", answer: "If the frame is sound, yes — new boards on a good frame is good value. If the frame is rotten, a rebuild is usually better." },
    ],
  },

  // ─── Irvine ────────────────────────────────────────────────────────────
  "irvine:composite-decking": {
    metaDescription: `Composite decking in Irvine for compact New Town gardens and harbourside homes. Space-saving designs and free quotes from ${brand}.`,
    intro: `Many of Irvine's New Town gardens are compact, and composite decking is a good way to turn a small plot into a usable, low-maintenance outdoor room. It's also the best option for homes near the harbourside and Beach Park.`,
    localParagraph: `On estates like Girdle Toll, Bourtreehill and Broomlands, gardens are often small, rectangular and bounded by fences close behind the house. A composite deck across the full width can double the usable outdoor space without the upkeep of a lawn. Near the harbourside, where salt air and wind are part of daily life, composite boards and stainless fixings last far longer than timber.`,
    bodyParagraph: `${brand} often designs Irvine composite decks with built-in storage under steps, integrated planters and a slightly raised section to deal with gardens that slope up from the house. Lighter greys work well in small gardens because they make the space feel bigger.`,
    faqs: [
      { question: "Is composite decking good for a small Irvine garden?", answer: `Yes. Composite makes a small garden more usable and needs almost no upkeep. ${brand} can add built-in storage to make the most of the space.` },
      { question: "Do you fit composite decking near Irvine harbourside?", answer: "Yes. We use stainless fixings near the harbour and Beach Park to resist corrosion from the salt air." },
      { question: "Which composite colour makes a small garden feel bigger?", answer: "Lighter greys and sandstone tones reflect more light and tend to make compact gardens feel more open." },
    ],
  },
  "irvine:timber-decking": {
    metaDescription: `Timber decking in Irvine for New Town estates and sloping gardens. Affordable pressure-treated decks with free quotes from ${brand}.`,
    intro: `Timber is the most affordable way to deck an Irvine garden, and it works particularly well on the sloping plots found on some of the New Town estates, where a partly raised frame is needed to create a level space.`,
    localParagraph: `Parts of Irvine New Town were built on rising ground, and some gardens slope up or down from the back of the house. A timber deck with a partly raised frame is one of the easiest ways to create a level area on these plots. On flatter estates like Castlepark, a simple ground-level timber deck is quick and cost-effective to build.`,
    bodyParagraph: `${brand} builds Irvine timber decks with pressure-treated frames, grooved or smooth boards and proper drainage gaps. For raised sections, we add sturdy steps and balustrades. We'll also advise where composite would be the better choice, such as close to the harbour.`,
    faqs: [
      { question: "Can you build a timber deck on a sloping Irvine garden?", answer: `Yes. ${brand} builds partly raised timber decks to create a level area on sloping New Town gardens.` },
      { question: "How much does a timber deck cost in Irvine?", answer: "It depends on the size, height and finish. We'll measure up and give you a clear, itemised quote." },
      { question: "Do you cover all the Irvine estates?", answer: "Yes — Girdle Toll, Bourtreehill, Broomlands, Castlepark, Fullarton and the rest of the town." },
    ],
  },
  "irvine:decking-repairs": {
    metaDescription: `Decking repairs in Irvine — worn boards, loose steps and failing frames on New Town estate decks. Free quotes from ${brand}.`,
    intro: `With so much of Irvine built around the same time, many of the town's decks were added in the same era too — and many are now wearing out together. ${brand} repairs and resurfaces decks across Irvine.`,
    localParagraph: `On New Town estates, the most common problems are worn or split boards, loose steps, and frames that have started to rot where soil or leaves have built up against them. Near the harbourside and Beach Park, corroded fixings and weathered boards are more common. Most of these can be fixed without a full rebuild.`,
    bodyParagraph: `${brand} checks the frame first, then replaces damaged boards, re-fixes loose steps and balustrades, or resurfaces the whole deck in new timber or composite. We can also clear debris from under the deck and improve drainage to stop the same problems coming back.`,
    faqs: [
      { question: "Can you fix loose steps on my Irvine deck?", answer: `Yes. ${brand} can re-fix or rebuild loose or rotten steps, and add a handrail if needed.` },
      { question: "My deck has leaves and soil built up under it. Is that a problem?", answer: "It can be — it traps moisture against the frame. We can clear it out and improve airflow to help prevent rot." },
      { question: "Can my Irvine deck be resurfaced rather than replaced?", answer: "If the frame is sound, yes. New boards on a good frame is usually much cheaper than a full rebuild." },
    ],
  },

  // ─── Kilwinning ────────────────────────────────────────────────────────
  "kilwinning:composite-decking": {
    metaDescription: `Composite decking in Kilwinning for low-lying gardens near the River Garnock and busy commuter households. Free quotes from ${brand}.`,
    intro: `Kilwinning's rail links make it a popular commuter town, and composite decking suits households that want outdoor space without weekend maintenance. It also copes well in the lower-lying gardens near the River Garnock.`,
    localParagraph: `Some Kilwinning gardens, especially on lower ground near the River Garnock, can be slow to drain after heavy rain. Composite boards don't absorb water and won't rot, which makes them a good choice for damp gardens. We build the frame high enough to let air circulate underneath and lay a membrane below to keep weeds down.`,
    bodyParagraph: `On estates like Pennyburn and Whitehirst Park, ${brand} usually builds composite decks at door height to extend the living space. In the enclosed gardens near the abbey and Main Street, compact composite decks with built-in seating make the most of limited space.`,
    faqs: [
      { question: "Is composite decking suitable for a damp Kilwinning garden?", answer: `Yes. Composite doesn't absorb water, and ${brand} builds a ventilated frame to keep the deck dry even on damp ground.` },
      { question: "Can a composite deck be built at door height in Kilwinning?", answer: "Yes. On most estate homes we can build the deck close to the door threshold so it feels like an extension of the room." },
      { question: "Do you cover Pennyburn and Whitehirst Park?", answer: "Yes — along with the rest of Kilwinning." },
    ],
  },
  "kilwinning:timber-decking": {
    metaDescription: `Timber decking in Kilwinning built for damp, low-lying ground. Ventilated frames, pressure-treated timber and free quotes from ${brand}.`,
    intro: `A timber deck is an affordable way to add outdoor space in Kilwinning, but in a town that sits low beside the River Garnock, the frame needs to be built to handle damp ground.`,
    localParagraph: `Kilwinning's lower-lying gardens can stay wet after rain, which is hard on timber that sits too close to the ground. ${brand} builds timber decks here on a raised, ventilated frame with a membrane underneath so the timber can dry out properly. That makes a big difference to how long the deck lasts.`,
    bodyParagraph: `We use pressure-treated timber throughout, with drainage gaps between boards and stainless or coated screws. In the smaller gardens near the old town centre, we often build compact timber decks with built-in benches.`,
    faqs: [
      { question: "Can timber decking last on damp ground in Kilwinning?", answer: "Yes, if it's built on a ventilated frame with good drainage and treated regularly." },
      { question: "Can you build a timber deck with built-in seating?", answer: `Yes. ${brand} can add benches and planters, which work well in Kilwinning's smaller gardens.` },
      { question: "How much maintenance does a timber deck need?", answer: "Usually a clean and treatment every one to two years to keep it protected and looking good." },
    ],
  },
  "kilwinning:decking-repairs": {
    metaDescription: `Decking repairs in Kilwinning — rot from damp ground, soft boards and wobbly frames. Repair, resurfacing and free quotes from ${brand}.`,
    intro: `In Kilwinning, the most common deck problem is rot caused by a frame sitting too close to damp ground. ${brand} repairs, resurfaces and rebuilds decks across the town.`,
    localParagraph: `Many older decks in Kilwinning were built directly on the ground or with little airflow underneath. On lower-lying gardens near the River Garnock, that leads to joists and posts rotting from beneath. Often the first sign is a board that feels soft or a section of deck that has dropped.`,
    bodyParagraph: `${brand} checks the frame, replaces rotten joists and boards, and where possible improves airflow and drainage so the problem doesn't come back. If the rot has spread too far, we'll recommend rebuilding the deck on a raised, ventilated frame.`,
    faqs: [
      { question: "Why has my Kilwinning deck rotted underneath?", answer: "Usually because the frame sits too close to damp ground with little airflow. We can fix it and improve ventilation so it doesn't happen again." },
      { question: "Can a sagging section of deck be repaired?", answer: `Often, yes. ${brand} can replace the affected joists or posts and re-level the deck.` },
      { question: "Should I repair or replace my Kilwinning deck?", answer: "It depends how far the rot has spread. We'll check the frame and give you honest advice." },
    ],
  },

  // ─── Largs ─────────────────────────────────────────────────────────────
  "largs:composite-decking": {
    metaDescription: `Composite decking in Largs for seafront homes and hillside gardens with views of Cumbrae. Glass balustrades and free quotes from ${brand}.`,
    intro: `In Largs, composite decking has to deal with two things: salt spray along the promenade, and steep gardens on the hill behind the town. It handles both well, and it keeps looking good with very little upkeep.`,
    localParagraph: `Along the seafront and the streets just behind it, salt spray and wind off the Clyde fade and corrode ordinary materials quickly. Composite boards resist fading and don't rot, and we use stainless fixings throughout. Higher up the hill, many gardens slope steeply away from the house, and a raised composite deck with glass balustrades creates a level space that makes the most of the view across to Great Cumbrae and Arran.`,
    bodyParagraph: `${brand} also builds a lot of low, step-free composite decks for Largs bungalows and retirement properties, where owners want an easy-access outdoor space that doesn't need maintenance. Capped composite boards with hidden fixings give the cleanest finish for sea-view properties.`,
    faqs: [
      { question: "Can you build a raised composite deck on a sloping Largs garden?", answer: `Yes. ${brand} builds raised composite decks with strong footings, steps and balustrades to create a level space on hillside gardens.` },
      { question: "Is composite decking suitable for a Largs seafront property?", answer: "Yes. Composite resists salt and fading, and we use stainless fixings near the promenade." },
      { question: "Can a composite deck be step-free for an older resident?", answer: "Often, yes. On level gardens we can build a low deck close to the door threshold for easy access." },
    ],
  },
  "largs:timber-decking": {
    metaDescription: `Timber decking in Largs, including raised timber decks on steep hillside plots. Pressure-treated timber and free quotes from ${brand}.`,
    intro: `Timber decking is often the most practical way to build a raised deck on one of Largs' steep hillside gardens, where the frame needs to be tall and strong. It's also the most budget-friendly option.`,
    localParagraph: `As the town climbs up from the seafront, many Largs gardens slope sharply away from the house. A raised timber deck lets you create a level outdoor space at house height, with steps down to the rest of the garden. On the more sheltered upper streets, timber holds up well; near the seafront, we recommend composite instead because of the salt air.`,
    bodyParagraph: `${brand} builds raised timber decks in Largs with deep footings, braced posts and sturdy balustrades. Where a deck will be well above ground level, we'll let you know if planning permission is likely to be needed.`,
    faqs: [
      { question: "Can timber be used for a tall raised deck in Largs?", answer: `Yes. ${brand} uses structural pressure-treated timber with braced posts and deep footings for raised decks.` },
      { question: "Is timber OK near the Largs seafront?", answer: "It can be, but composite is the better choice right on the front because of salt spray. Timber is fine on more sheltered streets." },
      { question: "Will I need planning permission for a raised deck in Largs?", answer: "In Scotland, a deck with its surface more than 0.5m above ground level usually needs planning permission. We'll flag this at quote stage." },
    ],
  },
  "largs:decking-repairs": {
    metaDescription: `Decking repairs in Largs — salt-corroded fixings, loose balustrades and weathered raised decks. Free quotes from ${brand}.`,
    intro: `Largs is hard on decks — salt spray along the front and exposed, raised decks on the hillside both take a beating. ${brand} repairs and restores decks across the town.`,
    localParagraph: `On seafront decks, we often find rusted screws and boards lifting at the ends. On raised hillside decks, balustrades can work loose in the wind, and posts can start to rot where they meet the ground. Both need attention before they become unsafe, especially on decks well above ground level.`,
    bodyParagraph: `${brand} re-fixes boards with stainless screws, replaces rotten posts and joists, re-secures or replaces balustrades, and can resurface old decks with composite. For raised decks, safety comes first — if a structure isn't sound, we'll recommend a rebuild.`,
    faqs: [
      { question: "My raised deck in Largs feels wobbly. Is it safe?", answer: `It should be checked. ${brand} can inspect the posts, bracing and footings and tell you whether it can be repaired or needs rebuilding.` },
      { question: "Can you replace a balustrade with glass in Largs?", answer: "Yes. Replacing an old timber balustrade with glass is a popular way to open up the view." },
      { question: "Can you fix rusty fixings on a Largs seafront deck?", answer: "Yes. We replace them with stainless fixings, which last much longer in salty air." },
    ],
  },

  // ─── Cumnock ───────────────────────────────────────────────────────────
  "cumnock:composite-decking": {
    metaDescription: `Composite decking in Cumnock built for colder, wetter upland winters. Anti-slip boards and free quotes from ${brand}.`,
    intro: `Cumnock sits higher and further inland than the coastal towns, with colder winters and more rain. Composite decking is well suited to those conditions because it won't rot or split with repeated wet and frost.`,
    localParagraph: `In Cumnock, timber decks often stay damp for long periods, which leads to algae, slippery surfaces and eventually rot. Composite boards don't absorb water, and many have a textured surface for extra grip. We still build a ventilated frame underneath so the deck dries quickly after rain, and we position the deck to catch as much winter sun as possible.`,
    bodyParagraph: `${brand} recommends textured or grooved composite boards for Cumnock decks, especially in shaded gardens where frost can linger. Mid-to-dark colours are popular because they hide dirt and warm up faster in the sun.`,
    faqs: [
      { question: "Will composite decking cope with Cumnock's winters?", answer: `Yes. Composite doesn't absorb water or split with frost. ${brand} recommends textured boards for extra grip.` },
      { question: "Is composite decking slippery in frost?", answer: "Any surface can be slippery in frost, but textured composite boards give better grip than smooth timber." },
      { question: "Do you cover Cumnock and nearby villages?", answer: "Yes — Cumnock, Auchinleck, New Cumnock and Mauchline." },
    ],
  },
  "cumnock:timber-decking": {
    metaDescription: `Timber decking in Cumnock with ventilated frames and anti-slip boards for upland weather. Free quotes from ${brand}.`,
    intro: `Timber decking is an affordable choice in Cumnock, but in a colder, wetter town it needs to be built well and looked after to last. ${brand} builds timber decks here with drainage and grip in mind.`,
    localParagraph: `Cumnock's higher rainfall means timber stays damp longer than it would on the coast. We build timber decks here on a raised, ventilated frame and recommend grooved anti-slip boards. Regular cleaning and treatment every year or two will keep a timber deck safe and looking good.`,
    bodyParagraph: `Many Cumnock gardens are a decent size, which gives room for a larger timber deck or a separate seating area. ${brand} can build timber decks with steps, balustrades and built-in benches to suit.`,
    faqs: [
      { question: "How do I stop a timber deck in Cumnock going green?", answer: "Good airflow under the frame, positioning the deck in the sun and cleaning it once or twice a year all help." },
      { question: "Are anti-slip timber boards worth it in Cumnock?", answer: `Yes. ${brand} recommends grooved anti-slip boards for Cumnock's wetter, frostier climate.` },
      { question: "Can you build a large timber deck in Cumnock?", answer: "Yes. Many Cumnock gardens have room for larger decks or separate seating areas." },
    ],
  },
  "cumnock:decking-repairs": {
    metaDescription: `Decking repairs in Cumnock — rot, algae and frost damage on older timber decks. Repair or resurface with ${brand}.`,
    intro: `Cumnock's wet, cold winters are hard on timber decks. Rot, algae and frost damage are the most common reasons people call ${brand} for a repair here.`,
    localParagraph: `We often find Cumnock decks where water has sat on or under the boards for years, leading to rot in the joists and slippery algae on the surface. Freeze-thaw can also open up splits in older boards. If caught early, most of this can be repaired.`,
    bodyParagraph: `${brand} checks the frame, replaces rotten boards and joists, cleans and re-treats sound timber, or resurfaces the deck in composite. We can also improve airflow under the deck to reduce future damp problems.`,
    faqs: [
      { question: "My Cumnock deck has split boards. Can they be replaced?", answer: `Yes. ${brand} can replace split or rotten boards with new timber or composite.` },
      { question: "Can you clean off algae from my deck?", answer: "Yes. We can clean and re-treat the deck, and suggest changes to reduce algae in the future." },
      { question: "Is it worth repairing an old deck in Cumnock?", answer: "If the frame is sound, yes. If it's rotten, we'll recommend a rebuild." },
    ],
  },

  // ─── Girvan ────────────────────────────────────────────────────────────
  "girvan:composite-decking": {
    metaDescription: `Composite decking in Girvan for harbour-side homes and gardens with views of Ailsa Craig. Salt-resistant boards and free quotes from ${brand}.`,
    intro: `In Girvan, composite decking is the practical choice for homes near the harbour and seafront, where salt and wind are constant. It's also a popular choice for sloping gardens with views out to Ailsa Craig.`,
    localParagraph: `Girvan's seafront gets the full weather coming in off the Firth of Clyde. Composite boards resist salt, fading and rot far better than timber, and we use stainless fixings throughout. On the higher streets, raised composite decks with glass or low balustrades make the most of the view across the water.`,
    bodyParagraph: `Because Girvan is further from the larger towns, many owners want a deck that will last for years without needing callouts. ${brand} builds composite decks here with durable capped boards, ventilated frames and hidden fixings.`,
    faqs: [
      { question: "Is composite decking best near Girvan harbour?", answer: `Yes. Composite resists salt and rot, and ${brand} uses stainless fixings for seafront properties.` },
      { question: "Can you build a raised composite deck facing Ailsa Craig?", answer: "Yes. On sloping gardens we can build a raised deck positioned to face the view." },
      { question: "Do you travel to Girvan for composite decking?", answer: "Yes. Girvan and the surrounding villages are covered as standard." },
    ],
  },
  "girvan:timber-decking": {
    metaDescription: `Timber decking in Girvan for sheltered gardens and budget-friendly projects. Pressure-treated decks and free quotes from ${brand}.`,
    intro: `Timber decking is an affordable choice for Girvan gardens away from the seafront, where there's more shelter from the salt and wind coming off the water.`,
    localParagraph: `Girvan's streets further from the harbour, towards Byne Hill, are more sheltered than the seafront, and timber decks hold up well there with regular treatment. For gardens that slope, a partly raised timber deck can create a level area with a view.`,
    bodyParagraph: `${brand} builds timber decks in Girvan with pressure-treated timber, proper drainage and stainless fixings. We'll advise honestly if your garden's exposure means composite would be the better long-term choice.`,
    faqs: [
      { question: "Is timber decking suitable for Girvan?", answer: "Yes, especially away from the seafront. Regular treatment will keep it in good condition." },
      { question: "Can you build a raised timber deck in Girvan?", answer: `Yes. ${brand} builds raised timber decks on sloping gardens with steps and balustrades.` },
      { question: "How much maintenance does timber need in Girvan?", answer: "A clean and treatment every one to two years, more often on exposed decks near the sea." },
    ],
  },
  "girvan:decking-repairs": {
    metaDescription: `Decking repairs in Girvan — salt-damaged boards, corroded fixings and rotten frames. Free quotes from ${brand}.`,
    intro: `Girvan's coastal weather takes a toll on decks, especially near the harbour. ${brand} repairs, resurfaces and rebuilds decks across the town.`,
    localParagraph: `Near the seafront, we often see corroded fixings, split boards and balustrades loosened by the wind. Further inland, older timber decks may have rot where the frame sits on damp ground. Both can usually be repaired if caught early.`,
    bodyParagraph: `${brand} replaces damaged boards, re-fixes with stainless screws, repairs or replaces balustrades, and can resurface old decks with composite. We'll always check the frame and give honest advice.`,
    faqs: [
      { question: "Can you repair a salt-damaged deck in Girvan?", answer: `Usually, yes. ${brand} replaces damaged boards and corroded fixings with salt-resistant alternatives.` },
      { question: "Can you replace a loose balustrade in Girvan?", answer: "Yes. We can re-secure it or replace it with new timber, composite or glass." },
      { question: "Do you cover the villages around Girvan for repairs?", answer: "Yes — including Dailly and Barr." },
    ],
  },

  // ─── Stewarton ─────────────────────────────────────────────────────────
  "stewarton:composite-decking": {
    metaDescription: `Composite decking in Stewarton for new-build homes, matched to modern render and windows. Door-height decks and free quotes from ${brand}.`,
    intro: `A lot of Stewarton's homes are new-builds, and composite decking is a popular way to add a first outdoor living space that matches the modern look of the house.`,
    localParagraph: `New-build gardens in Stewarton are usually turfed, fairly level and fenced. Many homes have bifold or French doors opening onto the garden, and owners want a composite deck at door height to extend the living space. Because new plots can still be settling, we set the footings down to firm ground.`,
    bodyParagraph: `${brand} can match composite board colours to modern grey window frames, render or cladding. For the older properties near the Annick Water, warmer woodgrain composites often suit the stone better.`,
    faqs: [
      { question: "Can a composite deck be level with bifold doors in Stewarton?", answer: `Usually, yes. ${brand} builds the frame so the deck surface sits close to the door threshold.` },
      { question: "Is it OK to build a deck on a new-build plot?", answer: "Yes, as long as the footings go down to firm ground. New plots can still settle, so we take care with this." },
      { question: "Which composite colour suits a new-build home?", answer: "Greys and charcoals are popular because they match modern window frames and cladding." },
    ],
  },
  "stewarton:timber-decking": {
    metaDescription: `Timber decking in Stewarton for new-build and older homes. Affordable decks with firm footings and free quotes from ${brand}.`,
    intro: `Timber decking is a cost-effective way to add outdoor space to a Stewarton home, whether it's a new-build on the edge of town or an older property near the centre.`,
    localParagraph: `In Stewarton's newer developments, gardens are generally level, which keeps a timber deck straightforward. Because the ground on new plots can still settle, we make sure footings reach firm ground. Near the older centre and the Annick Water, gardens can be more irregular and may need a made-to-measure layout.`,
    bodyParagraph: `${brand} builds timber decks in Stewarton with pressure-treated frames, drainage gaps and stainless or coated fixings. We can add steps, balustrades and built-in seating to suit.`,
    faqs: [
      { question: "Is timber decking a good choice for a Stewarton new-build?", answer: "Yes, if you're happy to treat it every year or two. It's the most affordable option." },
      { question: "Can you build a timber deck around an irregular garden?", answer: `Yes. ${brand} builds made-to-measure decks to fit irregular gardens.` },
      { question: "Do you cover all of Stewarton?", answer: "Yes — the older centre and the newer developments." },
    ],
  },
  "stewarton:decking-repairs": {
    metaDescription: `Decking repairs in Stewarton — uneven decks on settling ground, loose boards and worn timber. Free quotes from ${brand}.`,
    intro: `In Stewarton, a common deck problem on newer properties is a deck that has become uneven as the ground has settled. ${brand} repairs and re-levels decks across the town.`,
    localParagraph: `Where a deck was built soon after a new home was finished, the ground can settle under the footings and leave the deck sloping or springy. On older decks, loose boards, worn surfaces and rot are the usual issues. Most can be fixed without a full rebuild.`,
    bodyParagraph: `${brand} can re-set sunken posts and re-level the frame, replace damaged boards, or resurface the deck in new timber or composite. We'll check the frame and give honest advice on repair versus replacement.`,
    faqs: [
      { question: "My Stewarton deck has become uneven. Can it be fixed?", answer: `Usually, yes. ${brand} can re-set sunken posts and re-level the deck.` },
      { question: "Can you replace worn boards on my Stewarton deck?", answer: "Yes. We can replace individual boards or resurface the whole deck." },
      { question: "Should I resurface with composite?", answer: "If the frame is sound and suitable, composite is a good low-maintenance option." },
    ],
  },
};

export const getMatrixContent = (locationSlug: string, baseSlug: string) =>
  matrixContent[`${locationSlug}:${baseSlug}`];
