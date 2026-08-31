// Shared location "character" typology used to diversify copy across the many
// location and location×category pages so towns of a genuinely different
// type (coastal resort vs. inland market town vs. former mining village...)
// read differently, rather than every page being the same template with only
// the town name swapped.

export type Character =
  | "coastalResort"
  | "harbourTown"
  | "marketTown"
  | "formerIndustrial"
  | "commuterVillage"
  | "ruralVillage";

type MatrixCategory = "composite" | "timber" | "repairs";

const notes: Record<MatrixCategory, Record<Character, (town: string) => string>> = {
  composite: {
    coastalResort: (town) =>
      `Composite decking is a strong fit for ${town}'s coastal conditions, coping with salt air and damp far better than timber.`,
    harbourTown: (town) =>
      `${town}'s coastal position makes composite boards a popular choice here, since they resist the salt and damp that timber struggles with.`,
    marketTown: (town) =>
      `Composite decking suits the compact rear gardens typical of ${town}'s town centre properties, needing little upkeep in a smaller space.`,
    formerIndustrial: (town) =>
      `Composite decking works well on the raised or stepped decks common in ${town}, since it needs little upkeep once the structure is built.`,
    commuterVillage: (town) =>
      `Composite decking is popular on the newer housing estates in ${town}, giving a tidy, low-maintenance finish that matches modern gardens.`,
    ruralVillage: (town) =>
      `Composite decking holds up well on the larger, more exposed gardens typical around ${town}, without the yearly staining timber would need.`,
  },
  timber: {
    coastalResort: (town) =>
      `Timber decking can also work well in ${town} when properly treated, though composite is worth considering for the most exposed, sea-facing spots.`,
    harbourTown: (town) =>
      `Timber decking remains a popular, cost-effective choice in ${town}, particularly for gardens set back from the immediate coastline.`,
    marketTown: (town) =>
      `Timber decking suits the traditional character of many ${town} properties and can be shaped to fit smaller or irregular town centre gardens.`,
    formerIndustrial: (town) =>
      `Timber decking is a cost-effective option for the sloped or stepped gardens common in ${town}, with raised sections built where needed.`,
    commuterVillage: (town) =>
      `Timber decking is a budget-friendly option for both new-build and established gardens across ${town}.`,
    ruralVillage: (town) =>
      `Timber decking suits the larger plots typical around ${town}, offering a natural look at a lower cost than composite for bigger areas.`,
  },
  repairs: {
    coastalResort: (town) =>
      `Decking in ${town} is especially exposed to salt air and coastal damp, which speeds up wear on untreated timber and makes regular repairs more likely.`,
    harbourTown: (town) =>
      `${town}'s coastal weather means decking here often needs more frequent attention than inland areas, from loose boards to algae build-up.`,
    marketTown: (town) =>
      `Older decking in ${town}'s town centre gardens often needs repair after years without maintenance, particularly around joints and fixings.`,
    formerIndustrial: (town) =>
      `Decking on the sloped or stepped gardens common in ${town} can develop movement over time, so the supporting structure is worth checking alongside the boards.`,
    commuterVillage: (town) =>
      `Whether on a newer estate or an older street in ${town}, decking left unmaintained for a few years often needs board replacement or resurfacing.`,
    ruralVillage: (town) =>
      `Larger decks around ${town} exposed to open countryside weather can wear faster than more sheltered gardens, making periodic repairs worthwhile.`,
  },
};

export const characterLocalNote = (character: Character, category: MatrixCategory, town: string): string =>
  notes[category][character](town);
