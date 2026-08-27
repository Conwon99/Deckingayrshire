/**
 * No real customer reviews exist yet (pre-launch site). TOTAL_REVIEW_COUNT MUST stay in
 * sync with the visible review count on site and in schema — see BaseLayout.astro,
 * ReviewsSection, RatingDisplay and reviews.astro, all of which hide review UI when this
 * is 0 rather than fabricate testimonials. Populate this once real reviews are collected.
 */
export const TOTAL_REVIEW_COUNT = 0;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [];
