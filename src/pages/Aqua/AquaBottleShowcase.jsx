import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplets,
  Eye,
  Layers3,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    id: 0,
    number: "01",
    titleKey: "aqua.bottleShowcase.stages.bottle.title",
    subtitleKey: "aqua.bottleShowcase.stages.bottle.subtitle",
    descriptionKey: "aqua.bottleShowcase.stages.bottle.description",
    image: "/aqua/raw.png",
  },
  {
    id: 1,
    number: "02",
    titleKey: "aqua.bottleShowcase.stages.logo.title",
    subtitleKey: "aqua.bottleShowcase.stages.logo.subtitle",
    descriptionKey: "aqua.bottleShowcase.stages.logo.description",
    image: "/aqua/bottle.png",
  },
  {
    id: 2,
    number: "03",
    titleKey: "aqua.bottleShowcase.stages.design.title",
    subtitleKey: "aqua.bottleShowcase.stages.design.subtitle",
    descriptionKey: "aqua.bottleShowcase.stages.design.description",
    image: "/aqua/sticker.png",
  },
  {
    id: 3,
    number: "04",
    titleKey: "aqua.bottleShowcase.stages.branded.title",
    subtitleKey: "aqua.bottleShowcase.stages.branded.subtitle",
    descriptionKey: "aqua.bottleShowcase.stages.branded.description",
    image: "/aqua/brand.png",
  },
];

export default function AquaBottleShowcase() {
  const { t } = useTranslation();

  const [activeStage, setActiveStage] = useState(0);

  const current = stages[activeStage];

  const nextStage = () => {
    setActiveStage((prev) => (prev + 1) % stages.length);
  };

  const previousStage = () => {
    setActiveStage(
      (prev) => (prev - 1 + stages.length) % stages.length
    );
  };

  return (
    <section
      id="showcase"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-14
        sm:py-20
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
            opacity: [0.45, 0.25, 0.45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-sky-100/70
            blur-3xl
            sm:h-[600px]
            sm:w-[600px]
          "
        />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-20
            h-64
            w-64
            rounded-full
            bg-cyan-100/50
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-10
            h-72
            w-72
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,40,61,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(2,40,61,0.6) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              mx-auto
              mb-4
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-sky-100
              bg-white/80
              px-3
              py-2
              shadow-sm
              backdrop-blur-xl
              sm:mb-5
              sm:px-4
            "
          >
            <Eye className="h-4 w-4 text-sky-500" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-sky-700
                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              {t("aqua.bottleShowcase.eyebrow", {
                defaultValue: "Custom Bottle Branding",
              })}
            </span>
          </div>

          <h2
            className="
              text-[2.55rem]
              font-black
              leading-[0.92]
              tracking-[-0.055em]
              text-[#06283D]
              min-[380px]:text-5xl
              sm:text-5xl
              lg:text-7xl
            "
          >
            {t("aqua.bottleShowcase.heading.first", {
              defaultValue: "From Bottle",
            })}

            <span className="block text-sky-500">
              {t("aqua.bottleShowcase.heading.second", {
                defaultValue: "To Brand.",
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
            {t("aqua.bottleShowcase.description", {
              defaultValue:
                "See how your identity can move from a bottle to a professionally branded presentation.",
            })}
          </p>
        </motion.div>

        {/* =====================================================
            MOBILE STAGE SELECTOR
        ====================================================== */}

        <div
          className="
            mt-7
            flex
            gap-2
            overflow-x-auto
            pb-1
            sm:hidden
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {stages.map((stage, index) => {
            const isActive = activeStage === index;

            return (
              <motion.button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(index)}
                whileTap={{ scale: 0.96 }}
                className={`
                  flex
                  min-w-[90px]
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  transition-all

                  ${
                    isActive
                      ? "border-[#06283D] bg-[#06283D] text-white shadow-lg"
                      : "border-slate-200 bg-white text-slate-500"
                  }
                `}
              >
                <span className="text-[10px] font-black">
                  {stage.number}
                </span>

                <span className="max-w-[55px] truncate text-[10px] font-bold">
                  {t(stage.titleKey, {
                    defaultValue: "Bottle",
                  })}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-8
            sm:mt-12
            lg:mt-20
            lg:grid-cols-[1fr_0.9fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* =================================================
              BOTTLE SHOWCASE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
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
              duration: 0.8,
            }}
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-[1.75rem]
              border
              border-sky-100
              bg-gradient-to-br
              from-sky-50
              via-white
              to-cyan-50
              px-3
              pb-4
              pt-5
              shadow-[0_25px_70px_rgba(14,165,233,0.10)]
              min-[380px]:min-h-[455px]
              sm:min-h-[580px]
              sm:rounded-[2rem]
              sm:px-0
              sm:py-0
            "
          >
            {/* Outer Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[260px]
                w-[260px]
                rounded-full
                border
                border-dashed
                border-sky-300/30
                min-[380px]:h-[290px]
                min-[380px]:w-[290px]
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            {/* Pulse Ring */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.1, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                border
                border-sky-300/30
                min-[380px]:h-[250px]
                min-[380px]:w-[250px]
                sm:h-[360px]
                sm:w-[360px]
              "
            />

            {/* Inner Ring */}

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[160px]
                w-[160px]
                rounded-full
                border
                border-cyan-300/20
                min-[380px]:h-[190px]
                min-[380px]:w-[190px]
                sm:h-[280px]
                sm:w-[280px]
              "
            />

            {/* Main Glow */}

            <motion.div
              animate={{
                scale: [0.9, 1.08, 0.9],
                opacity: [0.18, 0.32, 0.18],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-52
                w-52
                rounded-full
                bg-sky-300/20
                blur-3xl
                sm:h-80
                sm:w-80
              "
            />

            {/* =================================================
                IMAGE
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                h-[330px]
                w-full
                items-center
                justify-center
                min-[380px]:h-[350px]
                sm:h-[470px]
                sm:w-[260px]
              "
              style={{
                perspective: "1400px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.82,
                    rotateY: -25,
                    rotateZ: -4,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    rotateZ: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -35,
                    scale: 0.84,
                    rotateY: 25,
                    rotateZ: 4,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    opacity: {
                      duration: 0.28,
                    },
                    y: {
                      duration: 0.6,
                      type: "spring",
                      stiffness: 90,
                      damping: 14,
                    },
                    scale: {
                      duration: 0.6,
                      type: "spring",
                      stiffness: 80,
                      damping: 14,
                    },
                    rotateY: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    rotateZ: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    filter: {
                      duration: 0.3,
                    },
                  }}
                  className="
                    absolute
                    flex
                    h-[315px]
                    w-[180px]
                    items-center
                    justify-center
                    min-[380px]:h-[335px]
                    min-[380px]:w-[190px]
                    sm:h-[440px]
                    sm:w-[230px]
                  "
                >
                  {/* Image Glow */}

                  <motion.div
                    animate={{
                      scale: [0.9, 1.06, 0.9],
                      opacity: [0.12, 0.25, 0.12],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-5
                      rounded-full
                      bg-cyan-300/25
                      blur-3xl
                    "
                  />

                  {/* Bottle */}

                  <motion.img
                    src={current.image}
                    alt={`${t(current.titleKey, {
                      defaultValue: "Bottle",
                    })} - BB Aqua`}
                    animate={{
                      y: [0, -7, 0, 5, 0],
                      rotateZ: [-1, 1, -1],
                      rotateY: [0, 2, 0, -2, 0],
                      scale: [1, 1.012, 1],
                    }}
                    transition={{
                      y: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      rotateZ: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      rotateY: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.04,
                      rotateY: 8,
                    }}
                    className="
                      relative
                      z-10
                      h-full
                      w-full
                      object-contain
                      drop-shadow-[0_25px_35px_rgba(2,40,61,0.28)]
                    "
                    draggable={false}
                  />

                  {/* Light Sweep */}

                  <motion.div
                    key={`shine-${activeStage}`}
                    initial={{
                      x: "-140%",
                      opacity: 0,
                    }}
                    animate={{
                      x: "140%",
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 1.25,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-[8%]
                      z-20
                      h-[72%]
                      w-[14%]
                      rotate-[15deg]
                      rounded-full
                      bg-white/45
                      blur-md
                    "
                  />

                  {/* Reflection */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[18%]
                      top-[10%]
                      z-20
                      h-[45%]
                      w-[8%]
                      rotate-[8deg]
                      rounded-full
                      bg-white/35
                      blur-[3px]
                    "
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =================================================
                IMAGE CONTROLS — MOBILE
            ================================================== */}

            <div
              className="
                relative
                z-40
                flex
                w-full
                items-center
                gap-2
                px-1
                sm:hidden
              "
            >
              <motion.button
                type="button"
                onClick={previousStage}
                whileTap={{
                  scale: 0.94,
                }}
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
                  "aqua.bottleShowcase.previousStage",
                  {
                    defaultValue: "Previous stage",
                  }
                )}
              >
                <ArrowLeft className="h-4 w-4" />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextStage}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-11
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#06283D]
                  px-5
                  text-xs
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(2,40,61,0.18)]
                "
              >
                {t("aqua.bottleShowcase.nextStage", {
                  defaultValue: "Next Stage",
                })}

                <ArrowRight className="h-4 w-4 text-cyan-300" />
              </motion.button>
            </div>

            {/* =================================================
                STAGE INDICATOR — MOBILE
            ================================================== */}

            <div className="relative z-30 mt-3 flex items-center gap-2 sm:hidden">
              <span className="text-[10px] font-black text-[#06283D]">
                {current.number}
              </span>

              <div className="flex gap-1.5">
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    aria-label={`Go to stage ${stage.number}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        activeStage === index
                          ? "w-6 bg-sky-500"
                          : "w-1.5 bg-slate-300"
                      }
                    `}
                  />
                ))}
              </div>

              <span className="text-[10px] font-bold text-slate-400">
                04
              </span>
            </div>

            {/* =================================================
                CURRENT STAGE INFO
            ================================================== */}

            <motion.div
              key={`title-${activeStage}`}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                z-30
                mt-3
                w-full
                rounded-xl
                border
                border-white
                bg-white/85
                p-3
                shadow-lg
                backdrop-blur-xl

                sm:absolute
                sm:bottom-5
                sm:left-6
                sm:right-6
                sm:mt-0
                sm:w-auto
                sm:rounded-2xl
                sm:p-4
              "
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-sky-500 sm:text-[9px]">
                    {t(current.subtitleKey, {
                      defaultValue: "Start with the bottle",
                    })}
                  </p>

                  <h3 className="mt-0.5 text-base font-black text-[#06283D] sm:mt-1 sm:text-lg">
                    {t(current.titleKey, {
                      defaultValue: "Bottle",
                    })}
                  </h3>
                </div>

                <Droplets className="h-4 w-4 shrink-0 text-sky-400 sm:h-5 sm:w-5" />
              </div>
            </motion.div>

            {/* Desktop stage badge */}

            <motion.div
              key={`badge-${activeStage}`}
              initial={{
                opacity: 0,
                x: -15,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                absolute
                left-3
                top-3
                z-30
                hidden
                rounded-xl
                border
                border-white
                bg-white/85
                px-3
                py-2
                shadow-lg
                backdrop-blur-xl

                sm:left-6
                sm:top-6
                sm:block
                sm:rounded-2xl
                sm:px-4
                sm:py-3
              "
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-500">
                {t("aqua.bottleShowcase.stageLabel", {
                  defaultValue: "Stage",
                })}
              </div>

              <div className="mt-1 text-lg font-black text-[#06283D]">
                {current.number}
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT / DESKTOP
          ================================================== */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-sky-500
                  sm:text-xs
                  sm:tracking-[0.22em]
                "
              >
                {t("aqua.bottleShowcase.journey.eyebrow", {
                  defaultValue: "Your Brand Journey",
                })}
              </span>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-black
                  leading-tight
                  tracking-[-0.035em]
                  text-[#06283D]
                  min-[380px]:text-3xl
                  sm:mt-4
                  sm:text-4xl
                "
              >
                {t("aqua.bottleShowcase.journey.heading.first", {
                  defaultValue: "See your identity",
                })}

                <span className="block text-sky-500">
                  {t("aqua.bottleShowcase.journey.heading.second", {
                    defaultValue: "become the bottle brand.",
                  })}
                </span>
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                {t("aqua.bottleShowcase.journey.description", {
                  defaultValue:
                    "Your bottle starts simple. Your logo and brand identity transform it into a professional branded product.",
                })}
              </p>
            </motion.div>

            {/* =================================================
                DESKTOP STAGE BUTTONS
            ================================================== */}

            <div className="mt-8 hidden space-y-3 sm:block">
              {stages.map((stage, index) => {
                const isActive = activeStage === index;

                return (
                  <motion.button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    whileHover={{
                      x: 5,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "border-sky-200 bg-sky-50 shadow-[0_12px_35px_rgba(14,165,233,0.10)]"
                          : "border-slate-100 bg-white hover:border-sky-100 hover:bg-sky-50/40"
                      }
                    `}
                  >
                    <motion.span
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-xs
                        font-black

                        ${
                          isActive
                            ? "bg-[#06283D] text-cyan-300"
                            : "bg-slate-100 text-slate-400"
                        }
                      `}
                    >
                      {stage.number}
                    </motion.span>

                    <div className="min-w-0 flex-1">
                      <h4
                        className={`
                          text-sm
                          font-bold

                          ${
                            isActive
                              ? "text-[#06283D]"
                              : "text-slate-700"
                          }
                        `}
                      >
                        {t(stage.titleKey, {
                          defaultValue: "Bottle",
                        })}
                      </h4>

                      <p
                        className={`
                          mt-1
                          text-xs
                          leading-5

                          ${
                            isActive
                              ? "text-slate-600"
                              : "text-slate-400"
                          }
                        `}
                      >
                        {t(stage.subtitleKey, {
                          defaultValue: "Start with the bottle",
                        })}
                      </p>
                    </div>

                    <ArrowRight
                      className={`
                        h-4
                        w-4
                        shrink-0

                        ${
                          isActive
                            ? "text-sky-500"
                            : "text-slate-300"
                        }
                      `}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-sky-100
                  bg-sky-50/60
                  p-4
                  sm:p-5
                "
              >
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

                  <p className="text-[13px] leading-6 text-slate-600 sm:text-sm">
                    {t(current.descriptionKey, {
                      defaultValue:
                        "Start with a clean water bottle ready to carry your brand identity.",
                    })}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Navigation */}

            <div className="mt-6 hidden gap-3 sm:flex">
              <motion.button
                type="button"
                onClick={previousStage}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  flex
                  h-12
                  w-12
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
                  "aqua.bottleShowcase.previousStage",
                  {
                    defaultValue: "Previous stage",
                  }
                )}
              >
                <ArrowLeft className="h-4 w-4" />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextStage}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-12
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#06283D]
                  px-5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_35px_rgba(2,40,61,0.15)]
                "
              >
                {t("aqua.bottleShowcase.nextStage", {
                  defaultValue: "Next Stage",
                })}

                <ArrowRight className="h-4 w-4 text-cyan-300" />
              </motion.button>
            </div>

            {/* Trust */}

            <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-400 sm:mt-6 sm:items-center">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-500 sm:mt-0" />

              <span>
                {t("aqua.bottleShowcase.trustLine", {
                  defaultValue:
                    "Professional bottle branding for your business",
                })}
              </span>
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
            justify-between
            gap-4
            rounded-3xl
            border
            border-sky-100
            bg-white/70
            px-4
            py-4
            shadow-sm
            backdrop-blur-xl

            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:px-7
            sm:py-5
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
              <Layers3 className="h-5 w-5 text-sky-500" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold text-[#06283D]">
                {t("aqua.bottleShowcase.bottomCta.title", {
                  defaultValue:
                    "Your logo. Your brand. Every bottle.",
                })}
              </p>

              <p className="mt-0.5 text-xs text-slate-400">
                {t("aqua.bottleShowcase.bottomCta.description", {
                  defaultValue:
                    "Create your bottle branding experience.",
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
            {t("aqua.bottleShowcase.bottomCta.button", {
              defaultValue: "Start Bottle Branding",
            })}

            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}