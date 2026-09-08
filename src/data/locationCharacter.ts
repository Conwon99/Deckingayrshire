// Shared location "character" typology used to ground copy for the many location and
// location×category pages in a genuine, verifiable trait of each settlement type (coastal resort,
// market town, former industrial town...) rather than inventing hyperlocal facts we don't have.

export type Character =
  | "coastalResort"
  | "harbourTown"
  | "marketTown"
  | "formerIndustrial"
  | "commuterVillage"
  | "ruralVillage";

/** A short, genuinely distinguishing real-world descriptor for each settlement type. These are
 * general, verifiable characteristics of the town type (not invented street-level detail) used as
 * building blocks so composed copy is grounded in something real about the place. */
export const characterDescriptors: Record<Character, string> = {
  coastalResort: "a coastal resort town, with sea air and exposed, water-facing gardens",
  harbourTown: "a working coastal town built up around its harbour",
  marketTown: "a traditional market town with a compact town centre",
  formerIndustrial: "a former mining or weaving town with older terraced streets",
  commuterVillage: "a village that has grown with newer housing estates alongside its older streets",
  ruralVillage: "a rural village surrounded by open countryside",
};

/** A second, distinct real trait per character type, used so a single sentence can draw on more
 * than one genuine characteristic instead of repeating the same descriptor every time. */
export const characterTraits: Record<Character, string> = {
  coastalResort: "salt-laden winds and gardens that face straight onto the water",
  harbourTown: "housing that ranges from older harbourside terraces to newer estates further inland",
  marketTown: "terraced and semi-detached homes clustered close to the town centre",
  formerIndustrial: "gardens that often step down or up with the slope of the old mill and mining streets",
  commuterVillage: "a mix of compact new-build plots and larger, longer-established gardens",
  ruralVillage: "larger plots than you'd find in a town, often backing onto farmland",
};
