import { useRef } from "react";
import { business } from "@/data/business";
import { reviews, TOTAL_REVIEW_COUNT } from "@/data/reviews";

export const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // No real reviews yet (pre-launch site) — hide the section entirely rather than show an empty carousel.
  if (reviews.length === 0) return null;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-[36px] md:py-[100px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('${business.assets.gallery[1]}')` }}
      aria-label="Customer reviews"
    >
      <div className="absolute inset-0 bg-neutral-900/65"></div>
      <div className="relative z-10 max-w-[1204px] mx-auto px-5 md:px-8">
        <h2 className="text-center md:text-left mb-4 text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] uppercase text-white">What our customers say</h2>
        <p className="text-white/80 mb-4 md:mb-6">From {TOTAL_REVIEW_COUNT} reviews.</p>
        <div className="relative flex items-center gap-2 md:gap-4">
          <button type="button" onClick={() => scroll("left")} className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-600 transition" aria-label="Previous reviews"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
          <div ref={scrollRef} className="flex gap-5 overflow-x-auto scroll-smooth py-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review) => (
              <article key={review.text} className="shrink-0 w-[min(100%,320px)] md:w-[360px] snap-center rounded-xl bg-neutral-900/75 backdrop-blur-[2px] border border-white/10 p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-4"><div className={`w-12 h-12 rounded-full ${review.initialBg} flex items-center justify-center text-white font-bold text-lg shrink-0`}>{review.initial}</div><div className="min-w-0"><p className="font-bold text-white uppercase text-base">{review.name}</p><p className="text-neutral-300 text-sm">{review.meta}</p><p className="text-neutral-400 text-sm">{review.time}</p></div></div>
                <p className="text-white text-[15px] leading-6 md:text-base flex-grow mb-5">{review.text}</p>
                <div className="flex gap-0.5">{[1, 2, 3, 4, 5].map((i) => (<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
              </article>
            ))}
          </div>
          <button type="button" onClick={() => scroll("right")} className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-600 transition" aria-label="Next reviews"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
        </div>
        <div className="text-center md:text-left mt-8">
          <a href="/reviews" className="text-[#ea580c] hover:underline font-semibold text-base">View all reviews →</a>
        </div>
      </div>
    </section>
  );
};
