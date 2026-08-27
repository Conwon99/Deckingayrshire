import { business, brandName } from "@/data/business";

export const Logo = () => {
  return (
    <div className="box-border caret-transparent ml-0 md:ml-4 lg:ml-6">
      <a
        href="/"
        aria-label={`${brandName()} home`}
        className="relative box-border caret-transparent block h-16 max-h-16 overflow-visible md:h-20 md:max-h-20 lg:h-24 lg:max-h-24"
      >
        <img
          src={business.assets.logo}
          alt={`${brandName()} logo`}
          className="box-border caret-transparent inline-block h-full max-w-full object-contain origin-left"
        />
      </a>
    </div>
  );
};
