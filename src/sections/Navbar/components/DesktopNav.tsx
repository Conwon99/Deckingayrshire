import { PhoneLink } from "@/components/PhoneLink";
import { trackQuoteButton } from "@/utils/analytics";
import { brandName } from "@/data/business";
import { services } from "@/data/services";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { TOTAL_REVIEW_COUNT } from "@/data/reviews";
import { PHONE_DISPLAY_ENABLED } from "@/utils/phoneTracking";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 100; // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // If it's an anchor link and we're on the homepage, scroll smoothly
  if (href.startsWith("#")) {
    e.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
  // If it's a regular link (like /contact), let it navigate normally
};

interface DesktopNavProps {
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}

export const DesktopNav = ({ isMobileMenuOpen = false, onCloseMobileMenu }: DesktopNavProps) => {
  const brand = brandName();
  const isHomePage = typeof window !== "undefined" && window.location.pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      if (isHomePage) {
        smoothScrollTo(href.substring(1));
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <nav
      role="navigation"
      className={`fixed box-border caret-transparent ${isMobileMenuOpen ? 'flex' : 'hidden'} basis-[0%] grow float-none justify-center min-h-0 min-w-0 inset-0 z-50 md:relative md:flex md:items-center md:float-none md:min-h-[auto] md:min-w-[auto] md:left-auto md:right-auto md:top-auto md:bottom-auto md:inset-auto md:z-auto`}
    >
      <ul
        role="list"
        className="absolute text-white items-center bg-[#323232] shadow-[rgba(0,0,0,0.3)_0px_8px_50px_0px] box-border caret-transparent gap-x-5 flex flex-col justify-start list-none min-h-screen min-w-full gap-y-6 w-full overflow-auto pt-20 pb-[30px] px-5 inset-0 md:static md:items-center md:bg-transparent md:shadow-none md:gap-x-0 md:flex-row md:justify-center md:min-h-[50px] md:min-w-[auto] md:gap-y-0 md:w-full md:overflow-visible md:pt-0 md:pb-0 md:px-0 md:inset-auto md:m-0"
      >
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-0 md:w-auto md:flex md:items-center md:border-r md:border-white/20 md:pr-4 md:mr-4">
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => handleLinkClick(e, isHomePage ? "#home" : "/")}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-[#ea580c] text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6 md:py-2 md:w-auto uppercase font-medium"
          >
            Home
          </a>
        </li>
        <li className="group box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-0 md:w-auto md:flex md:items-center md:border-r md:border-white/20 md:pr-4 md:mr-4 md:relative">
          <a
            href="/services"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-[#ea580c] text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6 md:py-2 md:w-auto uppercase font-medium"
          >
            Services
          </a>
          <ul className="box-border caret-transparent hidden flex-col items-center gap-2 w-full mt-2 md:hidden md:group-hover:flex md:group-focus-within:flex md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:w-[300px] md:items-stretch md:bg-[#1f1f1f] md:border md:border-white/10 md:rounded-xl md:p-3 md:shadow-[rgba(0,0,0,0.35)_0px_12px_30px_0px] md:mt-0 md:z-50">
            <li className="box-border caret-transparent w-full">
              <a href="/services" onClick={() => onCloseMobileMenu?.()} className="text-white/90 box-border caret-transparent flex justify-center md:justify-start items-center w-full text-center md:text-left py-2 md:px-3 md:rounded-lg hover:text-[#ea580c] hover:bg-white/5 text-base md:text-sm leading-6 uppercase md:normal-case font-medium border-b border-white/10 mb-1 pb-3">
                All Services
              </a>
            </li>
            {categories.map((category) => (
              <li key={category.slug} className="box-border caret-transparent w-full">
                <a href={`/${category.slug}`} onClick={() => onCloseMobileMenu?.()} className="text-[#ea580c] box-border caret-transparent flex justify-center md:justify-start items-center w-full text-center md:text-left py-1.5 md:px-3 md:rounded-lg hover:bg-white/5 text-sm leading-6 font-semibold">
                  {category.name}
                </a>
                <ul className="pl-3 mt-1 mb-2">
                  {category.serviceSlugs.map((slug) => {
                    const service = services.find((s) => s.slug === slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <a href={`/services/${slug}`} onClick={() => onCloseMobileMenu?.()} className="text-white/90 box-border caret-transparent flex justify-center md:justify-start items-center w-full text-center md:text-left py-1.5 md:px-3 md:rounded-lg hover:text-[#ea580c] hover:bg-white/5 text-sm leading-6 font-medium">
                          {service.navTitle}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="group box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-0 md:w-auto md:flex md:items-center md:border-r md:border-white/20 md:pr-4 md:mr-4 md:relative">
          <a
            href="/locations"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-[#ea580c] text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6 md:py-2 md:w-auto uppercase font-medium"
          >
            Locations
          </a>
          <ul className="box-border caret-transparent hidden flex-col items-center gap-2 w-full mt-2 md:hidden md:group-hover:flex md:group-focus-within:flex md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:w-[240px] md:items-stretch md:bg-[#1f1f1f] md:border md:border-white/10 md:rounded-xl md:p-3 md:shadow-[rgba(0,0,0,0.35)_0px_12px_30px_0px] md:mt-0 md:z-50">
            <li className="box-border caret-transparent w-full">
              <a href="/locations" onClick={() => onCloseMobileMenu?.()} className="text-white/90 box-border caret-transparent flex justify-center md:justify-start items-center w-full text-center md:text-left py-2 md:px-3 md:rounded-lg hover:text-[#ea580c] hover:bg-white/5 text-base md:text-sm leading-6 uppercase md:normal-case font-medium border-b border-white/10 mb-1 pb-3">
                All Locations
              </a>
            </li>
            {locations.map((location) => (
              <li key={location.slug} className="box-border caret-transparent w-full">
                <a
                  href={`/locations/${location.slug}`}
                  onClick={() => {
                    if (onCloseMobileMenu) {
                      onCloseMobileMenu();
                    }
                  }}
                  className="text-white/90 box-border caret-transparent flex justify-center md:justify-start items-center w-full text-center md:text-left py-2 md:px-3 md:rounded-lg hover:text-[#ea580c] hover:bg-white/5 text-base md:text-sm leading-6 uppercase md:normal-case font-medium"
                >
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-0 md:w-auto md:flex md:items-center md:border-r md:border-white/20 md:pr-4 md:mr-4">
          <a
            href="/about"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-[#ea580c] text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6 md:py-2 md:w-auto uppercase font-medium"
          >
            About
          </a>
        </li>
        {TOTAL_REVIEW_COUNT > 0 && (
          <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-0 md:w-auto md:flex md:items-center md:border-r md:border-white/20 md:pr-4 md:mr-4">
            <a
              href="/reviews"
              onClick={() => {
                if (onCloseMobileMenu) {
                  onCloseMobileMenu();
                }
              }}
              className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-[#ea580c] text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6 md:py-2 md:w-auto uppercase font-medium"
            >
              Reviews
            </a>
          </li>
        )}
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-0 md:w-auto md:flex md:items-center">
          <a
            href="/contact"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-[#ea580c] text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6 md:py-2 md:w-auto uppercase font-medium"
          >
            Contact
          </a>
        </li>
        {/* Mobile-only phone and CTA */}
        <li className="box-border caret-transparent flex flex-col gap-y-5 pt-6 border-t border-white/20 -mx-5 px-5 md:hidden md:mx-0 md:px-0 w-full">
          {PHONE_DISPLAY_ENABLED && (
            <PhoneLink
              iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
              iconAlt={`Call ${brand}`}
              showIcon={true}
              trackingLocation="mobile-menu"
              className="text-white items-center box-border caret-transparent gap-x-4 flex justify-center w-[calc(100%-10px)] mx-auto hover:text-[#ea580c] hover:decoration-transparent"
              displayClassName="text-white text-2xl font-semibold box-border caret-transparent"
            />
          )}
          <a
            href="/contact"
            onClick={() => {
              trackQuoteButton('mobile-menu');
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white items-center bg-[#c2410c] box-border caret-transparent gap-x-2 flex justify-center w-[calc(100%-10px)] mx-auto text-center border px-8 py-4 rounded-[100px] border-solid border-transparent hover:bg-[#ea580c] hover:border-[#c2410c] shadow-[0_0_20px_rgba(234,88,12,0.45),0_0_40px_rgba(234,88,12,0.25)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6),0_0_60px_rgba(234,88,12,0.45)] transition-shadow duration-300"
          >
            <span className="text-xl font-bold box-border caret-transparent">
              Get a free quote
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

