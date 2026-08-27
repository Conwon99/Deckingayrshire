import { ContactFormSection } from "@/pages/contact/sections/HeroSection/components/ContactFormSection";
import { brandName, business, citiesLabel } from "@/data/business";
import { categories } from "@/data/categories";

export const HeroSection = () => {
  const brand = brandName();
  const serviceList = categories.map((c) => c.name.toLowerCase()).join(", ");

  return (
    <section className="box-border caret-transparent pt-[200px] md:pt-[220px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center w-full mb-[30px] mx-auto md:w-[70%] md:mb-[50px]">
          <h1 className="text-white text-[32px] font-bold box-border caret-transparent leading-[42px] mb-2.5 sm:text-[42px] sm:leading-[54.6px] md:text-[62px] md:leading-[80.6px]">
            Get a Free Quote from {brand}
          </h1>
          <p className="text-gray-200 box-border caret-transparent mb-2.5">
            Contact us for {serviceList} quotes across {citiesLabel()} and {business.region}.
          </p>
        </div>
        <ContactFormSection />
      </div>
    </section>
  );
};
