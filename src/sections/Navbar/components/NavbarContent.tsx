import { useState } from "react";
import { Logo } from "@/components/Logo";
import { brandName } from "@/data/business";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { PhoneLink } from "@/components/PhoneLink";
import { trackQuoteButton } from "@/utils/analytics";
import { PHONE_DISPLAY_ENABLED } from "@/utils/phoneTracking";

export const NavbarContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const brand = brandName();

  return (
    <>
      {/* Top Section: Logo, Phone, Get a free quote button */}
      <div className="w-full bg-[#1f1f1f]">
        <div className="relative items-center box-border caret-transparent gap-x-2 flex justify-between w-full max-w-[1204px] mx-auto px-4 py-3 md:px-5 md:py-4 lg:px-6">
        <Logo />
        <div className="items-center box-border caret-transparent gap-x-2 flex md:gap-x-6">
          <div className="items-center box-border caret-transparent gap-x-2 flex hidden md:flex">
            {PHONE_DISPLAY_ENABLED && (
              <PhoneLink
                iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
                iconAlt={`Call ${brand}`}
                showIcon={true}
                trackingLocation="nav"
                className="text-white items-center box-border caret-transparent gap-x-1 flex justify-start max-w-full whitespace-nowrap hover:text-[#c2410c] hover:decoration-transparent hover:border-[#c2410c] relative z-0"
                displayClassName="box-border caret-transparent text-lg font-medium md:text-xl md:font-semibold lg:text-2xl lg:font-semibold text-white hidden sm:block"
              />
            )}
            <a
              href="/contact"
              onClick={() => trackQuoteButton('nav')}
              className="text-white items-center bg-[#c2410c] box-border caret-transparent gap-x-1.5 flex text-center border px-3 py-1.5 rounded-[100px] border-solid border-transparent md:px-4 md:py-2 lg:px-5 lg:py-2.5 hover:bg-[#ea580c] hover:border-[#c2410c] whitespace-nowrap flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(234,88,12,0.45),0_0_40px_rgba(234,88,12,0.25)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6),0_0_60px_rgba(234,88,12,0.45)] transition-shadow duration-300"
            >
              <span className="text-xs font-bold md:text-sm lg:text-base text-white">Get a free quote</span>
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
                alt=""
                aria-hidden="true"
                className="box-border caret-transparent h-3 w-3 md:h-4 md:w-4"
              />
            </a>
          </div>
          <div className="md:hidden">
            <PhoneLink
              iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
              iconAlt={`Call ${brand}`}
              showIcon={true}
              trackingLocation="nav-mobile"
              customLabel={`Call ${brand}`}
              className="text-white items-center bg-[#c2410c] box-border caret-transparent flex justify-center min-h-[44px] min-w-[44px] p-3 rounded-full hover:bg-[#ea580c] transition-colors duration-300"
              displayClassName="sr-only"
            />
          </div>
          <button
            aria-label={isMobileMenuOpen ? "close menu" : "open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative text-white text-2xl box-border caret-transparent block min-h-[44px] min-w-[44px] p-3 cursor-pointer touch-manipulation md:hidden z-[60] ml-2"
          >
            <div className="text-white box-border caret-transparent w-6 h-6 flex items-center justify-center">
              {isMobileMenuOpen ? (
                <svg
                  className="w-full h-full text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-full h-full text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
        </div>
      </div>
      
      {/* Bottom Section: Navigation Links Banner */}
      <div className="w-full border-t border-white/10 bg-[#323232]">
        <div className="max-w-[1204px] mx-auto px-4 md:px-5 lg:px-6">
          <DesktopNav isMobileMenuOpen={isMobileMenuOpen} onCloseMobileMenu={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
    </>
  );
};

