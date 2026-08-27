import { PhoneLink } from "@/components/PhoneLink";
import { brandName, business, citiesLabel } from "@/data/business";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { TOTAL_REVIEW_COUNT } from "@/data/reviews";

const topMatrixLinks = locations.slice(0, 2).flatMap((location) =>
  categories.slice(0, 2).map((category) => ({
    label: `${category.name} in ${location.shortName ?? location.name}`,
    href: `/locations/${location.slug}/${category.slug}`,
  })),
);

export const Footer = () => {
  const brand = brandName();

  return (
    <section className="bg-[#323232] box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-8 md:gap-y-8">
          <div className="box-border caret-transparent flex flex-col gap-y-4">
            <div className="text-white text-lg font-semibold box-border caret-transparent mb-2">
              {brand}
            </div>
            <p className="text-white/80 text-sm box-border caret-transparent max-w-xs leading-relaxed">
              Home service specialists serving {citiesLabel()} and {business.region}.
            </p>
            {business.facebookUrl && (
              <div className="box-border caret-transparent flex flex-col gap-3 mt-2">
                <div className="text-white text-sm font-semibold box-border caret-transparent">
                  Follow Us
                </div>
                <div className="box-border caret-transparent flex gap-4 flex-wrap">
                  <a
                    href={business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#c2410c] hover:decoration-transparent transition-colors duration-300"
                    aria-label={`${brand} on Facebook`}
                  >
                    <img
                      src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f58e375e253beb4db0e54_facebook.svg"
                      alt=""
                      aria-hidden="true"
                      className="box-border caret-transparent h-5 max-w-full w-5"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Quick Links
            </div>
            <a href="/" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
              Home
            </a>
            <a href="/services" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
              Services
            </a>
            <a href="/about" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
              About
            </a>
            {TOTAL_REVIEW_COUNT > 0 && (
              <a href="/reviews" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
                Reviews
              </a>
            )}
            <a href="/contact" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
              Contact
            </a>
            <details className="group box-border caret-transparent mt-2">
              <summary className="text-white text-sm font-semibold box-border caret-transparent cursor-pointer hover:text-[#ea580c]">
                Services
              </summary>
              <div className="box-border caret-transparent flex flex-col gap-y-2 mt-3 pl-3">
                {categories.map((category) => (
                  <a key={category.slug} href={`/${category.slug}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
                    {category.name}
                  </a>
                ))}
                {topMatrixLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-white/60 text-xs box-border caret-transparent hover:text-[#ea580c] pl-3 transition-colors duration-300">
                    {link.label}
                  </a>
                ))}
                {services.filter((s) => s.slug !== "free-quotes").map((service) => (
                  <a key={service.slug} href={`/services/${service.slug}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
                    {service.shortTitle}
                  </a>
                ))}
              </div>
            </details>
            <details className="group box-border caret-transparent mt-2">
              <summary className="text-white text-sm font-semibold box-border caret-transparent cursor-pointer hover:text-[#ea580c]">
                Locations
              </summary>
              <div className="box-border caret-transparent flex flex-col gap-y-2 mt-3 pl-3 max-h-48 overflow-y-auto">
                <a href="/locations" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300 font-medium">
                  All Locations
                </a>
                {locations.map((location) => (
                  <a key={location.slug} href={`/locations/${location.slug}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
                    {location.name}
                  </a>
                ))}
              </div>
            </details>
          </div>

          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2">
              Contact Us
            </div>
            <PhoneLink
              variant="footer"
              showIcon={false}
              className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300"
            />
            <a href={`mailto:${business.email}`} className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent transition-colors duration-300">
              {business.email}
            </a>
          </div>

          <div className="box-border caret-transparent flex flex-col gap-y-3">
            <div className="text-white text-base font-semibold box-border caret-transparent mb-2 flex items-center gap-2">
              <svg className="box-border caret-transparent h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Areas We Cover
            </div>
            {business.googleMapsUrl ? (
              <>
                <div className="box-border caret-transparent w-full h-48 rounded-lg overflow-hidden">
                  <iframe
                    src={`${business.googleMapsUrl}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${brand} service area map`}
                    className="box-border caret-transparent w-full h-full"
                  ></iframe>
                </div>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-xs box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent underline transition-colors duration-300"
                >
                  View {brand} on Google Maps
                </a>
              </>
            ) : (
              <a href="/locations" className="text-white/80 text-sm box-border caret-transparent hover:text-[#ea580c] hover:decoration-transparent underline transition-colors duration-300">
                View all service areas
              </a>
            )}
            <p className="text-white/80 text-sm box-border caret-transparent mt-1">
              Serving {citiesLabel()} & {business.region}
            </p>
          </div>
        </div>

        <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm box-border caret-transparent">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
