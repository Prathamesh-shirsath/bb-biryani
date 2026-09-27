import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  Droplets,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AquaHero() {
  const { t } = useTranslation();

  // =====================================================
  // BOTTLE IMAGE PATHS
  // =====================================================

  const bottles = [
    "/aqua/bottle.png",
    "/aqua/bottle_2.png",
    "/aqua/brand.png",
    "/aqua/bottle_3.png",

    // Add more bottles here
    // "/aqua/bottle-6.png",
    // "/aqua/bottle-7.png",
    // "/aqua/bottle-8.png",
  ];

  // =====================================================
  // ACTIVE BOTTLE
  // =====================================================

  const [activeBottle, setActiveBottle] = useState(0);

  // =====================================================
  // CHANGE BOTTLE EVERY 3.5 SECONDS
  // =====================================================

  useEffect(() => {
    if (bottles.length <= 1) return;

    const interval = setInterval(() => {
      setActiveBottle((current) => {
        return (current + 1) % bottles.length;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [bottles.length]);

  // =====================================================
  // SMOOTH SCROLL
  // =====================================================

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="aqua-home"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#F5FBFF]
        pt-24
        text-[#06283D]

        sm:pt-28

        lg:pt-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main blue glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-sky-200/35
          blur-[100px]

          sm:h-96
          sm:w-96

          lg:-left-40
          lg:top-10
          lg:h-[520px]
          lg:w-[520px]
        "
      />

      {/* Cyan glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/3
          h-80
          w-80
          rounded-full
          bg-cyan-200/30
          blur-[110px]

          lg:h-[600px]
          lg:w-[600px]
        "
      />

      {/* Bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-1/2
          h-80
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/60
          blur-[100px]
        "
      />

      {/* =====================================================
          WATER GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(3,105,161,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(3,105,161,0.7)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* =====================================================
          FLOATING DROPLETS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              block
              rounded-full
              border
              border-sky-300/20
              bg-white/30
              backdrop-blur-sm
            "
            style={{
              width: `${5 + (index % 4) * 3}px`,
              height: `${5 + (index % 4) * 3}px`,
              left: `${5 + index * 8}%`,
              top: `${12 + ((index * 17) % 75)}%`,
            }}
            animate={{
              y: [0, -18, 0],
              x: [
                0,
                index % 2 === 0 ? 6 : -6,
                0,
              ],
              opacity: [0.25, 0.65, 0.25],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          bb-container
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-96px)]
          max-w-7xl
          flex-col
          justify-center
        "
      >
        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-[1fr_0.9fr]
            lg:gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 text-center lg:text-left">
            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-200
                bg-white/70
                px-3
                py-2
                shadow-[0_8px_25px_rgba(14,165,233,0.08)]
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-cyan-400
                    opacity-60
                  "
                />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-sky-700

                  sm:text-[10px]
                "
              >
                {t("aqua.hero.eyebrow", {
                  defaultValue: "BB GROUP OF BUSINESSES",
                })}
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                mx-auto
                max-w-[650px]
                text-[48px]
                font-black
                leading-[0.92]
                tracking-[-0.05em]
                text-[#063B5C]

                min-[360px]:text-[54px]

                sm:text-[72px]

                lg:mx-0
                lg:text-[92px]
              "
            >
              {t("aqua.hero.heading.pure", {
                defaultValue: "PURE",
              })}

              <span className="block text-sky-500">
                {t("aqua.hero.heading.water", {
                  defaultValue: "WATER.",
                })}
              </span>

              <span className="block text-[#06283D]">
                {t("aqua.hero.heading.brand", {
                  defaultValue: "YOUR BRAND.",
                })}
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mx-auto
                mt-6
                max-w-[540px]
                text-sm
                leading-7
                text-slate-600

                sm:mt-7
                sm:text-base
                sm:leading-8

                lg:mx-0
              "
            >
              {t("aqua.hero.description", {
                defaultValue:
                  "Premium packaged drinking water and custom bottle branding designed for businesses, hotels, restaurants, events and special occasions.",
              })}
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3

                min-[420px]:flex-row
                min-[420px]:justify-center

                lg:justify-start
              "
            >
              {/* Explore */}

              <motion.button
                type="button"
                onClick={() =>
                  scrollToSection("products")
                }
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#063B5C]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(6,59,92,0.18)]
                  transition
                "
              >
                <span>
                  {t("aqua.hero.exploreButton", {
                    defaultValue: "EXPLORE BB AQUA",
                  })}
                </span>

                <ArrowRight
                  size={17}
                  className="
                    transition
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* Custom Bottle */}

              <motion.button
                type="button"
                onClick={() =>
                  scrollToSection("enquiry")
                }
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-sky-300
                  bg-white/75
                  px-7
                  text-sm
                  font-bold
                  text-sky-700
                  shadow-[0_10px_30px_rgba(14,165,233,0.08)]
                  backdrop-blur-xl
                  transition
                  hover:border-sky-400
                  hover:bg-sky-50
                "
              >
                <Droplets
                  size={17}
                  className="text-cyan-500"
                />

                <span>
                  {t("aqua.hero.customBottleButton", {
                    defaultValue:
                      "CUSTOM BOTTLE BRANDING",
                  })}
                </span>
              </motion.button>
            </motion.div>

            {/* Trust points */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-x-5
                gap-y-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-slate-400

                lg:justify-start
              "
            >
              <span>
                {t("aqua.hero.trust.pureWater", {
                  defaultValue: "Pure Water",
                })}
              </span>

              <span className="text-sky-300">
                •
              </span>

              <span>
                {t("aqua.hero.trust.customBranding", {
                  defaultValue: "Custom Branding",
                })}
              </span>

              <span className="text-sky-300">
                •
              </span>

              <span>
                {t("aqua.hero.trust.bulkOrders", {
                  defaultValue: "Bulk Orders",
                })}
              </span>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT BOTTLE SHOWCASE
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              flex
              min-h-[430px]
              w-full
              max-w-[390px]
              items-center
              justify-center

              sm:min-h-[520px]
              sm:max-w-[450px]

              lg:min-h-[650px]
              lg:max-w-[520px]
            "
          >
            {/* =================================================
                LARGE WATER ORB
            ================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                bg-gradient-to-br
                from-cyan-200/70
                via-sky-100/50
                to-transparent
                blur-2xl

                sm:h-[340px]
                sm:w-[340px]

                lg:h-[430px]
                lg:w-[430px]
              "
            />

            {/* =================================================
                RIPPLE RINGS
            ================================================== */}

            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                animate={{
                  scale: [0.85, 1.15],
                  opacity: [0.35, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: ring * 1.1,
                  ease: "easeOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  border
                  border-sky-300/25

                  sm:h-[280px]
                  sm:w-[280px]

                  lg:h-[360px]
                  lg:w-[360px]
                "
              />
            ))}

            {/* =================================================
                ACTIVE BOTTLE
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2

                sm:h-[450px]
                sm:w-[280px]

                lg:h-[560px]
                lg:w-[350px]
              "
              style={{
                perspective: "1400px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBottle}
                  initial={{
                    opacity: 0,
                    y: 70,
                    scale: 0.72,
                    rotateY: -35,
                    rotateZ: -6,
                    filter: "blur(5px)",
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
                    y: -55,
                    scale: 0.82,
                    rotateY: 35,
                    rotateZ: 6,
                    filter: "blur(5px)",
                  }}
                  transition={{
                    opacity: {
                      duration: 0.4,
                    },

                    y: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 75,
                      damping: 14,
                    },

                    scale: {
                      duration: 0.85,
                      type: "spring",
                      stiffness: 70,
                      damping: 13,
                    },

                    rotateY: {
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    },

                    rotateZ: {
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    },

                    filter: {
                      duration: 0.45,
                    },
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  {/* Bottle glow */}

                  <motion.div
                    animate={{
                      scale: [0.9, 1.08, 0.9],
                      opacity: [0.18, 0.32, 0.18],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-8
                      rounded-full
                      bg-cyan-300/25
                      blur-3xl
                    "
                  />

                  {/* Bottle */}

                  <motion.img
                    src={bottles[activeBottle]}
                    alt={t("aqua.hero.bottleAlt", {
                      defaultValue: `BB Aqua Bottle ${
                        activeBottle + 1
                      }`,
                      number: activeBottle + 1,
                    })}
                    animate={{
                      y: [0, -12, 0, 8, 0],
                      rotateZ: [
                        -1,
                        1.2,
                        -1,
                        1,
                        -1,
                      ],
                      rotateY: [
                        0,
                        2,
                        0,
                        -2,
                        0,
                      ],
                      scale: [
                        1,
                        1.015,
                        1,
                      ],
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
                      transition: {
                        duration: 0.35,
                      },
                    }}
                    className="
                      relative
                      z-10
                      h-full
                      w-full
                      object-contain
                      drop-shadow-[0_35px_50px_rgba(3,105,161,0.24)]
                    "
                    draggable={false}
                  />

                  {/* Premium light sweep */}

                  <motion.div
                    initial={{
                      x: "-140%",
                      opacity: 0,
                    }}
                    animate={{
                      x: "140%",
                      opacity: [0, 0.45, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      delay: 0.35,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-[8%]
                      z-20
                      h-[72%]
                      w-[13%]
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
                      left-[22%]
                      top-[12%]
                      z-20
                      h-[45%]
                      w-[9%]
                      rotate-[8deg]
                      rounded-full
                      bg-white/30
                      blur-[3px]
                    "
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =================================================
                BOTTLE COUNTER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="
                absolute
                bottom-[16%]
                left-1/2
                z-[70]
                -translate-x-1/2
                rounded-full
                border
                border-white/70
                bg-white/70
                px-3
                py-1.5
                text-[8px]
                font-bold
                tracking-[0.2em]
                text-sky-700
                shadow-[0_10px_25px_rgba(7,89,133,0.08)]
                backdrop-blur-xl
              "
            >
              {String(activeBottle + 1).padStart(2, "0")}

              <span className="mx-1 text-sky-300">
                /
              </span>

              {String(bottles.length).padStart(2, "0")}
            </motion.div>

            {/* =================================================
                FLOATING LABEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.7,
              }}
              className="
                absolute
                right-0
                top-[18%]
                z-[80]
                hidden
                rounded-2xl
                border
                border-white/70
                bg-white/75
                px-4
                py-3
                shadow-[0_15px_35px_rgba(7,89,133,0.10)]
                backdrop-blur-xl

                sm:block
              "
            >
              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-cyan-500"
                />

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#063B5C]">
                    BB AQUA
                  </p>

                  <p className="mt-0.5 text-[8px] text-slate-400">
                    {t("aqua.hero.floatingLabel", {
                      defaultValue: "Pure & Trusted",
                    })}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CUSTOM BRANDING BADGE
            ================================================== */}

            <motion.button
              type="button"
              onClick={() =>
                scrollToSection("enquiry")
              }
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                absolute
                bottom-[7%]
                left-1/2
                z-[90]
                flex
                -translate-x-1/2
                items-center
                gap-2
                rounded-full
                border
                border-sky-200
                bg-white/85
                px-5
                py-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-sky-700
                shadow-[0_15px_35px_rgba(7,89,133,0.12)]
                backdrop-blur-xl
                whitespace-nowrap
              "
            >
              <Droplets
                size={14}
                className="text-cyan-500"
              />

              {t("aqua.hero.customBranding", {
                defaultValue: "Custom Branding",
              })}
            </motion.button>
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.button
          type="button"
          onClick={() =>
            scrollToSection("about")
          }
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-slate-400

            sm:bottom-7
          "
        >
          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.3em]
            "
          >
            {t("aqua.hero.explore", {
              defaultValue: "Explore",
            })}
          </span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown
              size={15}
              className="text-sky-400"
            />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}