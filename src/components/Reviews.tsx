"use client";

import { useRef, useState, useEffect } from "react";
import { reviews } from "@/lib/reviews-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-[#C9A227]" : "text-[#E8DED4]"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.querySelector("[data-review-card]")?.clientWidth ?? 0;
    const gap = 32;
    if (cardWidth) {
      const index = Math.round(el.scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(index, reviews.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollTo = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-review-card]") as HTMLElement;
    const gap = 32;
    const step = (card?.offsetWidth ?? 0) + gap;
    el.scrollBy({ left: direction === "prev" ? -step : step, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-review-card]") as HTMLElement;
    const gap = 32;
    const step = (card?.offsetWidth ?? 0) + gap;
    el.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-12 md:py-16 px-4 bg-[#F5EDE4]/60">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#6B2D2D] font-script text-center mb-3">
          What People Say
        </h2>
        <p className="text-center text-[#4a1a1a] text-sm mb-8 max-w-lg mx-auto">
          Real experiences from our guests — fresh karahi, tender kababs, and a family-friendly atmosphere.
        </p>

        <div className="relative">
          {/* Slider container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory py-2 -mx-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <article
                key={review.id}
                data-review-card
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] min-w-0 snap-start"
              >
                <div className="bg-white rounded-xl shadow-md border border-[#E8DED4] overflow-hidden h-full">
                  <div className="p-4 md:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-base font-bold text-[#4a1a1a]">
                        {review.author}
                      </h3>
                      <div className="flex items-center gap-2">
                        <StarRating rating={review.rating} />
                        <span className="text-xs text-[#4a1a1a]/70">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#4a1a1a] text-sm leading-relaxed whitespace-pre-line line-clamp-5">
                      {review.body}
                    </div>
                    {review.details && Object.keys(review.details).length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#E8DED4] flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#4a1a1a]/80">
                        {review.details.food != null && (
                          <span>Food: {review.details.food}/5</span>
                        )}
                        {review.details.service != null && (
                          <span>Service: {review.details.service}/5</span>
                        )}
                        {review.details.atmosphere != null && (
                          <span>Atmosphere: {review.details.atmosphere}/5</span>
                        )}
                        {review.details.waitTime && (
                          <span>Wait: {review.details.waitTime}</span>
                        )}
                        {review.details.seatingType && (
                          <span>{review.details.seatingType}</span>
                        )}
                        {review.details.parking && (
                          <span>Parking: {review.details.parking}</span>
                        )}
                        {review.details.parkingOptions && (
                          <span>{review.details.parkingOptions}</span>
                        )}
                        {review.details.noiseLevel && (
                          <span>{review.details.noiseLevel}</span>
                        )}
                        {review.details.reservation && (
                          <span>Reservation: {review.details.reservation}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Prev / Next buttons */}
          <button
            type="button"
            onClick={() => scrollTo("prev")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-[#E8DED4] flex items-center justify-center text-[#6B2D2D] hover:bg-[#F5EDE4] disabled:opacity-40 disabled:pointer-events-none transition-all z-10"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollTo("next")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-[#E8DED4] flex items-center justify-center text-[#6B2D2D] hover:bg-[#F5EDE4] disabled:opacity-40 disabled:pointer-events-none transition-all z-10"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-[#6B2D2D]" : "bg-[#E8DED4] hover:bg-[#6B2D2D]/60"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
