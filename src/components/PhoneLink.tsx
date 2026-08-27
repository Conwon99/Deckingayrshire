import { usePhoneTracking } from "@/hooks/usePhoneTracking";
import { trackPhone } from "@/utils/analytics";

interface PhoneLinkProps {
  className?: string;
  displayClassName?: string;
  iconSrc?: string;
  iconAlt?: string;
  showIcon?: boolean;
  variant?: "default" | "footer" | "hero";
  trackingLocation?: string; // e.g., "hero", "nav", "services"
  customLabel?: string; // Custom text to display instead of phone number
}

export const PhoneLink = ({
  className = "",
  displayClassName = "",
  iconSrc,
  iconAlt = "Phone",
  showIcon = true,
  variant = "default",
  trackingLocation,
  customLabel
}: PhoneLinkProps) => {
  const { telHref, displayPhone, phoneEnabled } = usePhoneTracking();

  const handleClick = () => {
    if (trackingLocation) {
      trackPhone(trackingLocation);
    } else if (variant === "hero") {
      trackPhone("hero");
    } else if (variant === "footer") {
      // Footer phone links don't need tracking by default
    } else {
      trackPhone("nav");
    }
  };

  // No real phone number published yet — fall back to the quote form instead of a tel: link.
  // Always show "Get a Free Quote" here (ignoring customLabel) since a custom label is
  // usually phrased as "Call ..." and would be misleading once this no longer dials anyone.
  if (!phoneEnabled) {
    return (
      <a
        href="/contact"
        onClick={handleClick}
        className={className || (variant === "hero"
          ? "text-white items-center box-border caret-transparent gap-x-2 flex max-w-full gap-y-2 overflow-hidden hover:text-orange-500 min-h-[44px] touch-manipulation"
          : variant === "footer"
          ? "text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent"
          : "text-white box-border caret-transparent flex justify-center max-w-full text-center md:text-white hover:text-orange-500 hover:border-orange-500")}
      >
        {showIcon && (
          <svg
            className="h-5 w-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
        <div className={displayClassName}>Get a Free Quote</div>
      </a>
    );
  }

  const defaultClasses = variant === "hero" 
    ? "text-white items-center box-border caret-transparent gap-x-2 flex max-w-full gap-y-2 overflow-hidden hover:text-orange-500 min-h-[44px] touch-manipulation"
    : variant === "footer"
    ? "text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent"
    : "text-white box-border caret-transparent flex justify-center max-w-full text-center md:text-white hover:text-orange-500 hover:border-orange-500";

  const defaultDisplayClasses = variant === "hero"
    ? "text-white text-base font-medium box-border caret-transparent leading-6 sm:text-lg sm:leading-7 md:text-xl lg:text-2xl"
    : variant === "footer"
    ? ""
    : "box-border caret-transparent text-base font-medium md:text-lg lg:text-xl text-white";

  return (
    <a
      href={telHref}
      onClick={handleClick}
      className={className || defaultClasses}
    >
      {showIcon && iconSrc && (() => {
        const iconSize = displayClassName?.includes("text-2xl") 
          ? "h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
          : displayClassName?.includes("text-xl") || displayClassName?.includes("text-lg")
          ? "h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
          : variant === "hero" 
          ? "h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
          : "h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8";
        
        return (
          <img
            src={iconSrc}
            alt={iconAlt}
            className={`box-border caret-transparent flex-shrink-0 ${iconSize} ${variant !== "footer" && variant !== "hero" ? "brightness-0 invert" : ""}`}
          />
        );
      })()}
      <div className={displayClassName || defaultDisplayClasses}>
        {customLabel || displayPhone}
      </div>
    </a>
  );
};

