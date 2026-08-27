import { FAQItem } from "@/sections/FAQSection/components/FAQItem";
import type { LocationPage } from "@/data/locations";

interface LocationFAQSectionProps {
  location: LocationPage;
}

export const LocationFAQSection = ({ location }: LocationFAQSectionProps) => {
  return (
    <section className="bg-transparent box-border caret-transparent pt-[70px] pb-[100px] md:pt-[100px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:gap-x-24 md:grid-cols-[minmax(200px,0.25fr)_1fr] md:gap-y-20 lg:gap-x-32">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px] md:pr-8 lg:pr-12">
            FAQs for {location.name}
          </h2>
          <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start gap-y-[30px]">
            {location.locationFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
