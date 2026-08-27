import { trackQuoteButton } from "@/utils/analytics";

export const HeroButton = () => {
  const handleClick = () => {
    trackQuoteButton('hero');
  };

  return (
    <a
      href="/contact"
      onClick={handleClick}
      className="text-white text-sm font-bold bg-[#c2410c] box-border caret-transparent block leading-[19.6px] text-center border border-[#c2410c] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#ea580c] hover:decoration-transparent shadow-[0_0_20px_rgba(234,88,12,0.45),0_0_40px_rgba(234,88,12,0.25)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6),0_0_60px_rgba(234,88,12,0.45)] transition-shadow duration-300"
    >
      Get a free quote
    </a>
  );
};
