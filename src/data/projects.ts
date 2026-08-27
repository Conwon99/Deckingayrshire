import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();

export const projects: ProjectPage[] = [
  {
    slug: "composite-decking-prestwick",
    title: "Composite Decking in Prestwick",
    description: `A composite decking installation with a raised platform, steps and balustrade for a Prestwick garden, completed by ${brand}.`,
    intro: `This project involved installing a new composite deck with steps and a balustrade for a property in Prestwick, giving the garden a level, secure outdoor space right off the back door.`,
    details: `${brand} built a raised composite deck platform with a full run of steps down to garden level, finished with a black composite balustrade for safety. The dark grey composite boards were chosen to complement the property's stonework, and the balustrade was fitted securely into the deck frame rather than just the surface boards. The finished space gives direct, level access from the house into the garden.`,
    highlights: [
      "Raised composite deck platform with a full run of steps",
      "Black composite balustrade fitted securely into the deck frame",
      "Dark grey composite boards chosen to suit the property",
      "Level, secure access created between house and garden",
    ],
    serviceType: "Composite Decking",
    location: "Prestwick",
    image: "/deckingayrshire-project-prestwick.webp",
    imageAlt: `Composite decking platform, steps and balustrade installed by ${brand} in Prestwick`,
  },
  {
    slug: "garden-decking-troon",
    title: "Garden Decking with Built-In Seating in Troon",
    description: `Composite decking with built-in bench seating and planters, completed by ${brand} for a Troon garden backing onto open fields.`,
    intro: `A Troon garden bordering open farmland needed a decked seating area that made the most of the view without a lot of loose garden furniture.`,
    details: `${brand} built an L-shaped composite deck with built-in bench seating and matching planters along two sides, framed with a darker composite border for a crisp, defined edge against the lighter decking. The layout was planned to face out towards the fields at the rear of the property, giving a permanent seating and planting area that needs far less upkeep than a bed of loose furniture and pots.`,
    highlights: [
      "L-shaped composite deck with built-in bench seating",
      "Matching planters built into the deck structure",
      "Two-tone composite border for a defined, tidy edge",
      "Layout planned to make the most of the view over open fields",
    ],
    serviceType: "Decking Design",
    location: "Troon",
    image: "/deckingayrshire-project-troon.webp",
    imageAlt: `Composite decking with built-in bench seating and planters installed by ${brand} in Troon`,
  },
  {
    slug: "composite-decking-kilmarnock",
    title: "Composite Decking Steps in Kilmarnock",
    description: `A composite decking installation with a run of wide steps, completed by ${brand} for a Kilmarnock property.`,
    intro: `This Kilmarnock project needed a run of composite steps connecting a raised deck area down to the lower garden, replacing an old and uneven timber staircase.`,
    details: `${brand} removed the existing timber steps and built a new run of wide composite steps and risers, matched to the grey composite decking above. Wider treads were used to make the steps more comfortable and safer to use than the original narrow staircase. The composite construction means the steps will not warp, split or become slippery in the way the old timber ones had.`,
    highlights: [
      "Old timber staircase removed and replaced",
      "Wide composite steps and risers for safer, easier use",
      "Grey composite finish matched to the deck above",
      "No warping, splitting or slippery boards going forward",
    ],
    serviceType: "Composite Decking",
    location: "Kilmarnock",
    image: "/deckingayrshire-project-kilmarnock.webp",
    imageAlt: `Composite decking steps installed by ${brand} in Kilmarnock`,
  },
  {
    slug: "composite-decking-alloway",
    title: "Composite Decking Platform in Alloway",
    description: `A diamond-shaped composite decking platform over an existing garden pond, completed by ${brand} in Alloway.`,
    intro: `An Alloway garden with an existing pond needed a decked platform to create usable seating space without disturbing the pond itself.`,
    details: `${brand} built a raised composite deck platform on posts around the edge of the existing pond, shaped to fit neatly against the property's garden layout. A darker composite border frames the lighter decking for a clean, defined edge, and the structure was built clear of the water to avoid any impact on the pond and planting below. The finished platform gives a stable, low-maintenance seating area in a part of the garden that was previously difficult to use.`,
    highlights: [
      "Raised composite deck built around an existing garden pond",
      "Structure kept clear of the water and pond planting",
      "Two-tone composite border for a clean, defined edge",
      "New usable seating space in a previously awkward corner of the garden",
    ],
    serviceType: "Composite Decking",
    location: "Alloway",
    image: "/deckingayrshire-project-alloway.webp",
    imageAlt: `Composite decking platform built over a garden pond by ${brand} in Alloway`,
  },
  {
    slug: "composite-decking-irvine",
    title: "Composite Decking in Irvine",
    description: `A composite decking installation with steps down to a lower garden area, completed by ${brand} in Irvine.`,
    intro: `This Irvine project involved decking a raised area at the back of the house and adding steps down to a lower section of garden, next to an existing pond and log store.`,
    details: `${brand} installed a composite deck on the raised section of the garden, with a run of steps connecting down to the lower level near the pond. The layout worked around existing features already in the garden, including the pond edge and a timber log store, rather than requiring them to be moved. The finished deck gives a low-maintenance, level surface in a garden with several different levels and features to work around.`,
    highlights: [
      "Composite deck built on a raised section of the garden",
      "Steps added connecting down to a lower garden level",
      "Layout planned around existing pond and log store",
      "Low-maintenance surface across a multi-level garden",
    ],
    serviceType: "Composite Decking",
    location: "Irvine",
    image: "/deckingayrshire-project-irvine.webp",
    imageAlt: `Composite decking with steps to a lower garden level installed by ${brand} in Irvine`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
