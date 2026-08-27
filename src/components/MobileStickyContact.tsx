import { useState, useEffect } from "react";

export const MobileStickyContact = () => {
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    // Check if we're on the contact page
    if (typeof window !== "undefined") {
      setIsContactPage(window.location.pathname === "/contact" || window.location.pathname === "/contact.html");
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] md:hidden flex flex-col">
      {!isContactPage && (
        <a
          href="/contact"
          className="bg-[#c2410c] text-white font-bold w-16 h-16 rounded-full hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center touch-manipulation"
          aria-label="Send message"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
      )}
    </div>
  );
};
