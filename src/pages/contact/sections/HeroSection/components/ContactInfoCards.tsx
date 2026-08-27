import { ContactCard } from "@/pages/contact/sections/HeroSection/components/ContactCard";
import { brandName, business, citiesLabel } from "@/data/business";

export const ContactInfoCards = () => {
  const brand = brandName();

  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 mb-10 md:gap-x-[50px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[50px] md:mb-[70px]">
      <ContactCard
        variant="bg-[#c2410c]"
        iconSrc="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67a43fa6cdc6190922f4a6ed_location-dark.svg"
        iconAlt={`Location icon - ${brand} service area`}
        title="Service Area"
        titleClassName="text-white text-xl font-bold box-border caret-transparent leading-6 mb-2.5 md:text-2xl md:leading-[28.8px]"
        content={`${citiesLabel()} and ${business.region}`}
        contentClassName="text-white box-border caret-transparent"
      />
      <ContactCard
        variant="bg-[#c2410c]"
        iconSrc="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67108bda6761bcf051e210eb_envelope.svg"
        iconAlt={`Email icon - Contact ${brand}`}
        title="Email support"
        titleClassName="text-white text-xl font-bold box-border caret-transparent leading-6 mb-2.5 md:text-2xl md:leading-[28.8px]"
        content={business.email}
        contentClassName="text-white box-border caret-transparent block underline hover:text-[#ea580c] hover:decoration-transparent hover:border-[#ea580c]"
        isLink={true}
        linkHref={`mailto:${business.email}`}
      />
      <ContactCard
        variant="bg-[#c2410c]"
        iconSrc="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67a4386d06c59bfc5ccc1f63_phone-dark.svg"
        iconAlt={`Phone icon - Call ${brand}`}
        title="Talk to us directly"
        titleClassName="text-white text-xl font-bold box-border caret-transparent leading-6 mb-2.5 md:text-2xl md:leading-[28.8px]"
        isPhone={true}
        contentClassName="text-white box-border caret-transparent block underline hover:text-[#ea580c] hover:decoration-transparent hover:border-[#ea580c]"
      />
    </div>
  );
};
