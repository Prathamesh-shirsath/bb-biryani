import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Quote,
  Star,
  ThumbsUp,
} from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/ZNXzQ9i834E33THb7";

const reviews = [
  {
    id: 1,
    name: "Jaydatt Shinde",
    meta: "2 reviews · 1 photo",
    date: "a year ago",
    rating: null,
    text:
      "अतिशय उत्तम Quality बिर्याणी देतात... याच सोबत इथे चायनीज, चिल्ली, शोरमा ची चव सुद्धा उत्तम दर्जाची आहे.. Fast Service देतात..",
    avatar: "J",
    language: "Marathi",
  },
  {
    id: 2,
    name: "Balya Badhe",
    meta: "1 review",
    date: "a week ago",
    rating: null,
    text: "Best quality and best service",
    avatar: "B",
    language: "English",
    orderType: "Dine in",
    isNew: true,
  },
  {
    id: 3,
    name: "Suraj Sonule",
    meta: "1 review",
    date: "a week ago",
    rating: null,
    text: "Best quality and service",
    avatar: "S",
    language: "English",
    mealType: "Lunch",
    price: "₹600–800",
    details: [
      ["Food", 5],
      ["Service", 5],
      ["Atmosphere", 5],
    ],
    isNew: true,
  },
  {
    id: 4,
    name: "Tushar Bhalekar",
    meta: null,
    date: "a week ago",
    rating: null,
    text: null,
    avatar: "T",
    language: null,
    orderType: "Dine in",
    isNew: true,
  },
  {
    id: 5,
    name: "Nilesh Garole NG",
    meta: "6 reviews · 6 photos",
    date: "2 months ago",
    rating: null,
    text: null,
    avatar: "N",
    language: null,
  },
  {
    id: 6,
    name: "Aniket Raut",
    meta: "1 review",
    date: "6 months ago",
    rating: null,
    text: null,
    avatar: "A",
    language: null,
  },
];

const visibleReviews = reviews.slice(0, 5);

function Stars({ rating = 5, size = 15 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          fill={index < rating ? "#d6a84f" : "transparent"}
          className="text-[#d6a84f]"
        />
      ))}
    </div>
  );
}

function Avatar({ review }) {
  return (
    <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#e3bd6b] via-[#d6a84f] to-[#8e6520] text-base font-bold text-[#171006] shadow-[0_8px_25px_rgba(214,168,79,0.2)]">
      {review.avatar}
    </div>
  );
}

export default function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentReview = visibleReviews[activeIndex];

  const nextReview = () => {
    setDirection(1);

    setActiveIndex((prev) =>
      prev === visibleReviews.length - 1 ? 0 : prev + 1
    );
  };

  const previousReview = () => {
    setDirection(-1);

    setActiveIndex((prev) =>
      prev === 0 ? visibleReviews.length - 1 : prev - 1
    );
  };

  const goToReview = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#090705] py-20 sm:py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d6a84f]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-100px] h-[360px] w-[360px] rounded-full bg-[#d6a84f]/5 blur-[100px]" />

      <div className="pointer-events-none absolute left-[-120px] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-white/[0.02] blur-[90px]" />

      <div className="bb-container relative z-10">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-[#4285f4]">
              G
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
              Google Reviews
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
            Real feedback shared by customers on our Google Maps listing.
          </p>
        </motion.div>

        {/* =========================================================
            RATING SUMMARY
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 max-w-sm"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] px-6 py-7 text-center shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a84f] to-transparent opacity-70" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Average Google Rating
            </p>

            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="text-6xl font-bold tracking-tight text-white">
                4.5
              </span>

              <div className="text-left">
                <Stars rating={4.5} size={17} />

                <p className="mt-1 text-xs text-white/35">
                  Google Rating
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/40">
              <MapPin size={14} className="text-[#d6a84f]" />
              <span>BB Biryani</span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            REVIEW AREA
        ========================================================== */}

        <div className="mx-auto mt-12 max-w-5xl">
          {/* Desktop / Mobile Card */}
          <div className="relative">
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentReview.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 60 : -60,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -60 : 60,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  {/* Gold top line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d6a84f] to-transparent opacity-70" />

                  {/* Quote */}
                  <Quote
                    size={100}
                    strokeWidth={1}
                    className="pointer-events-none absolute -right-4 -top-5 text-[#d6a84f]/[0.045]"
                  />

                  <div className="relative p-6 sm:p-8 lg:p-10">
                    {/* User */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        <Avatar review={currentReview} />

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="truncate text-base font-semibold text-white sm:text-lg">
                              {currentReview.name}
                            </h3>

                            {currentReview.isNew && (
                              <span className="rounded-full bg-[#d6a84f]/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#d6a84f]">
                                New
                              </span>
                            )}
                          </div>

                          {currentReview.meta && (
                            <p className="mt-1 text-xs text-white/35">
                              {currentReview.meta}
                            </p>
                          )}

                          <p className="mt-1 text-xs text-white/30">
                            {currentReview.date}
                          </p>
                        </div>
                      </div>

                      <div className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 sm:block">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-white/35">
                          Google
                        </span>
                      </div>
                    </div>

                    {/* Review rating only when explicitly known */}
                    {currentReview.rating && (
                      <div className="mt-6">
                        <Stars rating={currentReview.rating} />
                      </div>
                    )}

                    {/* Review text */}
                    {currentReview.text ? (
                      <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                        “{currentReview.text}”
                      </p>
                    ) : (
                      <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/10 px-5 py-5">
                        <p className="text-sm text-white/35">
                          Customer review details available on Google Maps.
                        </p>
                      </div>
                    )}

                    {/* Metadata */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {currentReview.orderType && (
                        <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] text-white/45">
                          Order:{" "}
                          <span className="text-white/70">
                            {currentReview.orderType}
                          </span>
                        </span>
                      )}

                      {currentReview.mealType && (
                        <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] text-white/45">
                          Meal:{" "}
                          <span className="text-white/70">
                            {currentReview.mealType}
                          </span>
                        </span>
                      )}

                      {currentReview.price && (
                        <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] text-white/45">
                          Price:{" "}
                          <span className="text-white/70">
                            {currentReview.price}
                          </span>
                        </span>
                      )}
                    </div>

                    {/* Detail Ratings */}
                    {currentReview.details && (
                      <div className="mt-7 grid grid-cols-3 gap-2 sm:max-w-md">
                        {currentReview.details.map(
                          ([label, value]) => (
                            <div
                              key={label}
                              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3"
                            >
                              <p className="text-[9px] uppercase tracking-wider text-white/30">
                                {label}
                              </p>

                              <div className="mt-2 flex items-center gap-1">
                                <Star
                                  size={12}
                                  fill="#d6a84f"
                                  className="text-[#d6a84f]"
                                />

                                <span className="text-xs font-semibold text-white/70">
                                  {value}/5
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                      <div className="flex items-center gap-2 text-xs text-white/30">
                        <ThumbsUp size={14} />
                        <span>Google Review</span>
                      </div>

                      <span className="text-xs font-medium text-[#d6a84f]/70">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(visibleReviews.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={previousReview}
              aria-label="Previous review"
              className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#12100d]/90 text-white/70 shadow-xl backdrop-blur-xl transition hover:border-[#d6a84f]/50 hover:text-[#d6a84f] sm:left-0 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextReview}
              aria-label="Next review"
              className="absolute right-2 top-1/2 z-20 grid h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#12100d]/90 text-white/70 shadow-xl backdrop-blur-xl transition hover:border-[#d6a84f]/50 hover:text-[#d6a84f] sm:right-0 sm:h-12 sm:w-12"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* =======================================================
              DOT NAVIGATION
          ======================================================== */}

          <div className="mt-7 flex items-center justify-center gap-2">
            {visibleReviews.map((review, index) => (
              <button
                key={review.id}
                onClick={() => goToReview(index)}
                aria-label={`Show review ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-9 bg-[#d6a84f]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* =======================================================
              MOBILE SWIPE HINT
          ======================================================== */}

          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.2em] text-white/20 sm:hidden">
            Swipe / Tap arrows to explore reviews
          </p>
        </div>

        {/* =========================================================
            GOOGLE CTA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col items-center"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#d6a84f] px-7 text-sm font-semibold text-[#160f06] shadow-[0_15px_45px_rgba(214,168,79,0.18)] transition hover:-translate-y-0.5 hover:bg-[#e5bd6d]"
          >
            View All Reviews on Google
            <ExternalLink
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-5 flex items-center gap-2 text-[10px] text-white/25">
            <MapPin size={12} />
            <span>BB Biryani • Google Maps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}