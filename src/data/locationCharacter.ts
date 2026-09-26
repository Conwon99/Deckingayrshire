// Broad settlement type for each location (coastal resort, market town, former industrial town...).
// Used for grouping only — page copy is hand-written per town in locations.ts, never generated
// from this typology.

export type Character =
  | "coastalResort"
  | "harbourTown"
  | "marketTown"
  | "formerIndustrial"
  | "commuterVillage"
  | "ruralVillage";
