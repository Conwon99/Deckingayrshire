import { HeroText, HeroButtons } from "@/sections/Hero/components/HeroText";
import { RatingDisplay } from "@/sections/ExperienceSection/components/RatingDisplay";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent text-center w-full mb-[30px] mx-auto md:w-4/5 md:mb-[50px]">
      <HeroText />
      <div className="flex justify-center mt-4 md:mt-8">
        <HeroButtons />
      </div>
      <div className="flex justify-center mt-4 md:mt-8">
        <RatingDisplay />
      </div>
    </div>
  );
};
