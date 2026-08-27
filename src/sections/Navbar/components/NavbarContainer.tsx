import { NavbarContent } from "@/sections/Navbar/components/NavbarContent";

export const NavbarContainer = () => {
  return (
    <div
      role="banner"
      className="relative bg-transparent box-border caret-transparent w-full z-[5] max-w-full"
    >
      <NavbarContent />
    </div>
  );
};

