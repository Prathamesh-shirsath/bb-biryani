import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Expand,
  Images,
  X,
} from "lucide-react";

const samples = [
  {
    id: 1,
    image: "/aqua-samples/sample1.jpeg",
    titleKey: "aqua.sampleBottles.items.sample1.title",
    descriptionKey: "aqua.sampleBottles.items.sample1.description",
  },
  {
    id: 2,
    image: "/aqua-samples/sample2.jpeg",
    titleKey: "aqua.sampleBottles.items.sample2.title",
    descriptionKey: "aqua.sampleBottles.items.sample2.description",
  },
  {
    id: 3,
    image: "/aqua-samples/sample3.jpeg",
    titleKey: "aqua.sampleBottles.items.sample3.title",
    descriptionKey: "aqua.sampleBottles.items.sample3.description",
  },
  {
    id: 4,
    image: "/aqua-samples/sample4.jpeg",
    titleKey: "aqua.sampleBottles.items.sample4.title",
    descriptionKey: "aqua.sampleBottles.items.sample4.description",
  },
  {
    id: 5,
    image: "/aqua-samples/sample5.jpeg",
    titleKey: "aqua.sampleBottles.items.sample5.title",
    descriptionKey: "aqua.sampleBottles.items.sample5.description",
  },
  {
    id: 6,
    image: "/aqua-samples/sample6.jpeg",
    titleKey: "aqua.sampleBottles.items.sample6.title",
    descriptionKey: "aqua.sampleBottles.items.sample6.description",
  },
  {
    id: 7,
    image: "/aqua-samples/sample7.jpeg",
    titleKey: "aqua.sampleBottles.items.sample7.title",
    descriptionKey: "aqua.sampleBottles.items.sample7.description",
  },
  {
    id: 8,
    image: "/aqua-samples/sample8.jpeg",
    titleKey: "aqua.sampleBottles.items.sample8.title",
    descriptionKey: "aqua.sampleBottles.items.sample8.description",
  },
  {
    id: 9,
    image: "/aqua-samples/sample10.jpeg",
    titleKey: "aqua.sampleBottles.items.sample9.title",
    descriptionKey: "aqua.sampleBottles.items.sample9.description",
  },
  {
    id: 10,
    image: "/aqua-samples/sample11.jpeg",
    titleKey: "aqua.sampleBottles.items.sample10.title",
    descriptionKey: "aqua.sampleBottles.items.sample10.description",
  },
  {
    id: 11,
    image: "/aqua-samples/sample12.jpeg",
    titleKey: "aqua.sampleBottles.items.sample11.title",
    descriptionKey: "aqua.sampleBottles.items.sample11.description",
  },
  {
    id: 12,
    image: "/aqua-samples/sample13.jpeg",
    titleKey: "aqua.sampleBottles.items.sample12.title",
    descriptionKey: "aqua.sampleBottles.items.sample12.description",
  },
  {
    id: 13,
    image: "/aqua-samples/sample14.jpeg",
    titleKey: "aqua.sampleBottles.items.sample13.title",
    descriptionKey: "aqua.sampleBottles.items.sample13.description",
  },
  {
    id: 14,
    image: "/aqua-samples/sample15.jpeg",
    titleKey: "aqua.sampleBottles.items.sample14.title",
    descriptionKey: "aqua.sampleBottles.items.sample14.description",
  },
];

export default function AquaSampleBottles() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = samples[activeIndex];

  const nextSample = () => {
    setActiveIndex((prev) => (prev + 1) % samples.length);
  };

  const previousSample = () => {
    setActiveIndex(
      (prev) => (prev - 1 + samples.length) % samples.length
    );
  };

  const goToSample = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        nextSample();
      }

      if (event.key === "ArrowLeft") {
        previousSample();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxOpen]);

  return (
    <>
      <section
        id="sample-bottles"
        className="
          relative
          w-full
          overflow-hidden
          bg-[#F5FBFF]
          py-16
          sm:py-24
          lg:py-32
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.15, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/3
              h-[360px]
              w-[360px]
              -translate-x-1/2
              rounded-full
              bg-sky-200/50
              blur-3xl

              sm:h-[600px]
              sm:w-[600px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(2,40,61,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(2,40,61,0.7) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="bb-container relative z-10">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <div
              className="
                mx-auto
                mb-5
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-sky-100
                bg-white/80
                px-4
                py-2
                shadow-sm
                backdrop-blur-xl
              "
            >
              <Images className="h-4 w-4 text-sky-500" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-sky-700

                  sm:text-xs
                  sm:tracking-[0.28em]
                "
              >
                {t("aqua.sampleBottles.eyebrow", {
                  defaultValue: "Sample Bottles",
                })}
              </span>
            </div>

            <h2
              className="
                text-[2.55rem]
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-[#06283D]

                min-[380px]:text-5xl
                sm:text-5xl
                lg:text-7xl
              "
            >
              {t("aqua.sampleBottles.heading.first", {
                defaultValue: "Explore Our",
              })}

              <span className="block text-sky-500">
                {t("aqua.sampleBottles.heading.second", {
                  defaultValue: "Sample Bottles.",
                })}
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                px-2
                text-[13px]
                leading-6
                text-slate-600

                sm:mt-6
                sm:px-0
                sm:text-base
                sm:leading-8
              "
            >
              {t("aqua.sampleBottles.description", {
                defaultValue:
                  "Explore different bottle shapes, sizes, colours and branding possibilities from BB Aqua.",
              })}
            </p>
          </motion.div>

          {/* =====================================================
              MOBILE FEATURED BOTTLE
          ====================================================== */}

          <div className="mt-9 sm:hidden">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-sky-100
                bg-white
                p-3
                shadow-[0_25px_70px_rgba(14,165,233,0.12)]
              "
            >
              <div
                className="
                  relative
                  flex
                  h-[430px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-gradient-to-br
                  from-sky-50
                  via-white
                  to-cyan-50
                "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.25, 0.12, 0.25],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-64
                    w-64
                    rounded-full
                    bg-sky-200/60
                    blur-3xl
                  "
                />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={t(current.titleKey, {
                      defaultValue: "BB Aqua sample bottle",
                    })}
                    initial={{
                      opacity: 0,
                      x: 50,
                      scale: 0.92,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: -50,
                      scale: 0.92,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative
                      z-10
                      h-[390px]
                      w-full
                      object-contain
                      drop-shadow-[0_25px_30px_rgba(2,40,61,0.20)]
                    "
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Expand */}

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="
                    absolute
                    right-3
                    top-3
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/85
                    text-[#06283D]
                    shadow-lg
                    backdrop-blur-xl
                  "
                  aria-label={t(
                    "aqua.sampleBottles.openImage",
                    {
                      defaultValue: "Open image",
                    }
                  )}
                >
                  <Expand className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile Controls */}

              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousSample}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-[#06283D]
                    shadow-sm
                  "
                  aria-label={t(
                    "aqua.sampleBottles.previous",
                    {
                      defaultValue: "Previous sample",
                    }
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <div className="flex flex-1 items-center justify-center gap-2">
                  <span className="text-xs font-black text-[#06283D]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <div className="h-1 flex-1 max-w-[110px] overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      animate={{
                        width: `${((activeIndex + 1) / samples.length) * 100}%`,
                      }}
                      className="h-full rounded-full bg-sky-500"
                    />
                  </div>

                  <span className="text-xs font-bold text-slate-400">
                    {String(samples.length).padStart(2, "0")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={nextSample}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#06283D]
                    text-white
                    shadow-lg
                  "
                  aria-label={t(
                    "aqua.sampleBottles.next",
                    {
                      defaultValue: "Next sample",
                    }
                  )}
                >
                  <ArrowRight className="h-4 w-4 text-cyan-300" />
                </button>
              </div>

              {/* Mobile Info */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-info-${current.id}`}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="px-2 pb-2 pt-4"
                >
                  <h3 className="text-lg font-black text-[#06283D]">
                    {t(current.titleKey, {
                      defaultValue: "BB Aqua Bottle",
                    })}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {t(current.descriptionKey, {
                      defaultValue:
                        "A professionally presented bottle sample by BB Aqua.",
                    })}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* =====================================================
              DESKTOP FEATURED SHOWCASE
          ====================================================== */}

          <div
            className="
              mt-16
              hidden
              grid-cols-[0.8fr_1.2fr]
              gap-8

              sm:grid

              lg:mt-20
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-12
            "
          >
            {/* Featured Image */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                min-h-[560px]
                overflow-hidden
                rounded-[2rem]
                border
                border-sky-100
                bg-white
                p-4
                shadow-[0_30px_90px_rgba(14,165,233,0.10)]
              "
            >
              <div
                className="
                  relative
                  flex
                  h-full
                  min-h-[520px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-gradient-to-br
                  from-sky-50
                  via-white
                  to-cyan-50
                "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-sky-200/50
                    blur-3xl
                  "
                />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={t(current.titleKey, {
                      defaultValue: "BB Aqua sample bottle",
                    })}
                    initial={{
                      opacity: 0,
                      y: 35,
                      scale: 0.94,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -25,
                      scale: 0.94,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative
                      z-10
                      h-[500px]
                      w-full
                      object-contain
                      drop-shadow-[0_30px_35px_rgba(2,40,61,0.20)]
                    "
                    draggable={false}
                  />
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="
                    absolute
                    right-5
                    top-5
                    z-20
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/85
                    text-[#06283D]
                    shadow-lg
                    backdrop-blur-xl
                    transition
                    hover:bg-white
                  "
                  aria-label={t(
                    "aqua.sampleBottles.openImage",
                    {
                      defaultValue: "Open image",
                    }
                  )}
                >
                  <Expand className="h-4 w-4" />
                </button>

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    z-20
                    rounded-2xl
                    border
                    border-white
                    bg-white/85
                    p-4
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-500">
                    {t("aqua.sampleBottles.currentSample", {
                      defaultValue: "Current Sample",
                    })}
                  </p>

                  <h3 className="mt-1 text-lg font-black text-[#06283D]">
                    {t(current.titleKey, {
                      defaultValue: "BB Aqua Bottle",
                    })}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Desktop Samples */}

            <div>
              <div className="grid grid-cols-3 gap-4">
                {samples.map((sample, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <motion.button
                      key={sample.id}
                      type="button"
                      onClick={() => goToSample(index)}
                      whileHover={{
                        y: -5,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        bg-white
                        p-2
                        text-left
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "border-sky-300 shadow-[0_15px_40px_rgba(14,165,233,0.15)]"
                            : "border-slate-100 hover:border-sky-200"
                        }
                      `}
                    >
                      <div
                        className="
                          relative
                          flex
                          h-[190px]
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-xl
                          bg-gradient-to-br
                          from-sky-50
                          via-white
                          to-cyan-50
                        "
                      >
                        <img
                          src={sample.image}
                          alt={t(sample.titleKey, {
                            defaultValue: "BB Aqua sample bottle",
                          })}
                          className="
                            h-full
                            w-full
                            object-contain
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                          draggable={false}
                        />

                        {isActive && (
                          <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#06283D] text-cyan-300">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                        )}
                      </div>

                      <div className="px-1 pb-1 pt-2">
                        <p className="text-[9px] font-black text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="mt-0.5 truncate text-xs font-bold text-[#06283D]">
                          {t(sample.titleKey, {
                            defaultValue: "BB Aqua Bottle",
                          })}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Desktop Navigation */}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousSample}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-[#06283D]
                    shadow-sm
                    transition
                    hover:border-sky-200
                    hover:bg-sky-50
                  "
                  aria-label={t(
                    "aqua.sampleBottles.previous",
                    {
                      defaultValue: "Previous sample",
                    }
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <div className="flex flex-1 items-center gap-3">
                  <span className="text-xs font-black text-[#06283D]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      animate={{
                        width: `${((activeIndex + 1) / samples.length) * 100}%`,
                      }}
                      className="h-full rounded-full bg-sky-500"
                    />
                  </div>

                  <span className="text-xs font-bold text-slate-400">
                    {String(samples.length).padStart(2, "0")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={nextSample}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#06283D]
                    text-white
                    shadow-lg
                  "
                  aria-label={t(
                    "aqua.sampleBottles.next",
                    {
                      defaultValue: "Next sample",
                    }
                  )}
                >
                  <ArrowRight className="h-4 w-4 text-cyan-300" />
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-sky-100 bg-white/70 p-5">
                <div className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

                  <p className="text-sm leading-6 text-slate-600">
                    {t(current.descriptionKey, {
                      defaultValue:
                        "A professionally presented bottle sample by BB Aqua.",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM CTA
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              flex-col
              items-stretch
              gap-4
              rounded-3xl
              border
              border-sky-100
              bg-white/75
              px-4
              py-5
              shadow-sm
              backdrop-blur-xl

              sm:mt-12
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-50
                "
              >
                <Images className="h-5 w-5 text-sky-500" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#06283D]">
                  {t("aqua.sampleBottles.cta.title", {
                    defaultValue:
                      "Create your own branded bottle.",
                  })}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {t("aqua.sampleBottles.cta.description", {
                    defaultValue:
                      "Turn your brand identity into a professional bottle.",
                  })}
                </p>
              </div>
            </div>

            <a
              href="#enquiry"
              className="
                inline-flex
                min-h-[46px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-sky-500
                px-6
                text-xs
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(14,165,233,0.20)]

                sm:w-auto
              "
            >
              {t("aqua.sampleBottles.cta.button", {
                defaultValue: "Create Your Bottle",
              })}

              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
          FULLSCREEN LIGHTBOX
      ======================================================== */}

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-[#03131D]/95
              p-3
              backdrop-blur-xl

              sm:p-6
            "
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                flex
                h-full
                max-h-[92vh]
                w-full
                max-w-5xl
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                bg-white/5
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close */}

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="
                  absolute
                  right-3
                  top-3
                  z-30
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/20

                  sm:right-5
                  sm:top-5
                "
                aria-label={t(
                  "aqua.sampleBottles.close",
                  {
                    defaultValue: "Close",
                  }
                )}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Previous */}

              <button
                type="button"
                onClick={previousSample}
                className="
                  absolute
                  left-2
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/20

                  sm:left-5
                "
                aria-label={t(
                  "aqua.sampleBottles.previous",
                  {
                    defaultValue: "Previous sample",
                  }
                )}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              {/* Image */}

              <AnimatePresence mode="wait">
                <motion.img
                  key={`lightbox-${current.id}`}
                  src={current.image}
                  alt={t(current.titleKey, {
                    defaultValue: "BB Aqua sample bottle",
                  })}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    max-h-[88vh]
                    max-w-[82vw]
                    object-contain
                    drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]
                  "
                  draggable={false}
                />
              </AnimatePresence>

              {/* Next */}

              <button
                type="button"
                onClick={nextSample}
                className="
                  absolute
                  right-2
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/20

                  sm:right-5
                "
                aria-label={t(
                  "aqua.sampleBottles.next",
                  {
                    defaultValue: "Next sample",
                  }
                )}
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Counter */}

              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-black/40
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-white
                  backdrop-blur-xl
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-1 text-white/40">/</span>
                {String(samples.length).padStart(2, "0")}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}