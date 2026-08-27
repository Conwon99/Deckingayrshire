import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free decking quotes?",
    answer: `Yes. Use the contact form with a few details about your garden and the type of decking you are considering, and ${brand} will get back to you with a free, no-obligation quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} covers ${cities} and towns across ${business.region}, including Prestwick, Troon, Kilmarnock, Irvine, Kilwinning and many surrounding areas. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: "Do you install both composite and timber decking?",
    answer: `Yes. ${brand} installs composite decking, timber decking, raised decks, balustrades and handles decking repairs and resurfacing.`,
  },
  {
    question: "How do I get started?",
    answer: `Use the contact form with a brief description of the work, your location and, if possible, a few photos of the garden. There is no obligation to proceed after receiving a quote.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
