import { RatingDisplay } from "@/sections/ExperienceSection/components/RatingDisplay";
import { brandName, business, citiesLabel } from "@/data/business";
import { categories } from "@/data/categories";

interface ExperienceContentProps {
  locationName?: string;
}

export const ExperienceContent = ({ locationName }: ExperienceContentProps) => {
  const brand = brandName();
  const cities = locationName ?? citiesLabel();

  return (
    <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between gap-y-[30px] md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
          Need a deck installation or repair in {cities}?
        </h2>
        <p className="text-gray-200 text-sm sm:text-base box-border caret-transparent mt-2.5 mb-5 md:mt-5 md:mb-5 leading-relaxed">
          With over 15 years of decking experience, {brand} installs and repairs composite and timber decking for homes and businesses across {cities} and {business.region}. The team focuses on solid, well-drained builds and tidy workmanship.
        </p>
        <div className="box-border caret-transparent mb-5 md:mb-[50px]">
          <ul className="text-white text-sm sm:text-base md:text-lg box-border caret-transparent list-none pl-0 space-y-2 md:space-y-3">
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#ea580c] flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-medium">15+ Years of Decking Experience</span>
            </li>
            {categories.map((category) => (
              <li key={category.slug} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#ea580c] flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">{category.name}</span>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#ea580c] flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-medium">Free Quotes Across {cities}</span>
            </li>
          </ul>
        </div>
        <a
          href="/contact"
          className="text-white text-sm bg-[#c2410c] box-border caret-transparent inline-block leading-[19.6px] text-center border border-[#c2410c] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#ea580c] hover:decoration-transparent transition-colors duration-300"
        >
          Get a Free Quote
        </a>
      </div>
      <div className="box-border caret-transparent mt-8 md:mt-10">
        <RatingDisplay />
      </div>
    </div>
  );
};
