import { PhoneLink } from "@/components/PhoneLink";
import { brandName, business, citiesLabel } from "@/data/business";
import { categories } from "@/data/categories";
import { PHONE_DISPLAY_ENABLED } from "@/utils/phoneTracking";

export const CTASection = () => {
  const serviceList = categories.map((c) => c.name.toLowerCase()).join(", ");

  return (
    <section className="box-border caret-transparent pt-[60px] pb-[50px] md:pt-[130px] md:pb-[70px]">
      <div className="relative bg-gray-800 box-border caret-transparent mx-[15px] pb-2.5 px-2.5 rounded-[20px] md:mx-[30px] md:pb-5 md:px-5">
        <div className="relative bg-gray-700 box-border caret-transparent flex flex-col items-center gap-y-5 p-[15px] rounded-[20px] text-center md:gap-y-[30px] md:p-[70px]">
          <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-[50px] md:leading-[60px]">
            Get a free quote today
          </h2>
          <p className="text-gray-200 box-border caret-transparent max-w-md mb-2.5">
            Get your free quote today for {serviceList} across {citiesLabel()} and {business.region}.
          </p>
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
            <a href="/contact"
              className="text-white text-xl font-bold bg-[#c2410c] box-border caret-transparent inline-flex items-center justify-center gap-x-4 leading-[28px] text-center border border-[#c2410c] px-8 py-4 rounded-[50px] border-solid md:text-2xl md:leading-[36px] md:px-12 md:py-6 hover:bg-[#ea580c] hover:decoration-transparent transition-colors duration-300 min-h-[64px] md:min-h-[80px] w-full"
            >
              Get a Free Quote
            </a>
            {PHONE_DISPLAY_ENABLED && (
              <PhoneLink
                variant="default"
                iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
                iconAlt={`Call ${brandName()}`}
                className="text-white text-lg font-semibold bg-[#c2410c] box-border caret-transparent inline-flex items-center justify-center gap-x-3 text-center border border-[#c2410c] px-8 py-4 rounded-[50px] border-solid md:text-xl md:leading-[28px] md:px-12 md:py-6 hover:bg-[#ea580c] hover:decoration-transparent transition-colors duration-300 min-h-[64px] md:min-h-[80px] w-full"
                displayClassName="text-white text-lg font-semibold md:text-xl"
                showIcon={true}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
