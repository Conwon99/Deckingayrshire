import { business, brandName, homepageH1 } from "@/data/business";

export const HeroText = () => {
  return (
    <>
      <h1 className="text-white text-[38px] font-bold box-border caret-transparent leading-[49.4px] mb-5 md:text-[68px] md:leading-[88.4px]">
        {homepageH1()}
      </h1>
      <p className="text-slate-200 box-border caret-transparent max-w-full mx-auto md:max-w-[70%]">
        {business.tagline} {brandName()} installs composite and timber decking across {business.primaryCity} and {business.region}.
      </p>
    </>
  );
};

export const HeroButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <a
        href="/contact"
        className="text-white text-base bg-[#c2410c] box-border caret-transparent leading-[22px] text-center font-bold border border-[#c2410c] px-8 py-4 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[36px] md:py-5 hover:bg-[#ea580c] hover:border-[#ea580c] transition-colors inline-flex items-center justify-center gap-3"
      >
        <span className="text-white">GET A FREE QUOTE</span>
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
        <svg
          className="h-4 w-4 md:h-5 md:w-5 text-[#ea580c] flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L12 14.9l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L12 1.5z" />
        </svg>
        <span className="text-white text-sm md:text-base font-semibold">15+ Years Experience</span>
      </div>
    </div>
  );
};
