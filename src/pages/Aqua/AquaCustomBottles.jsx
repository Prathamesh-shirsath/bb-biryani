import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Check,
  Crown,
  Droplets,
  Hotel,
  PartyPopper,
  Sparkles,
  Utensils,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const useCases = [
  {
    key: "hotels",
    title: "Hotels",
    icon: Hotel,
  },
  {
    key: "restaurants",
    title: "Restaurants",
    icon: Utensils,
  },
  {
    key: "weddings",
    title: "Weddings",
    icon: Crown,
  },
  {
    key: "events",
    title: "Events",
    icon: PartyPopper,
  },
  {
    key: "corporate",
    title: "Corporate",
    icon: Building2,
  },
  {
    key: "resorts",
    title: "Resorts",
    icon: Sparkles,
  },
];

const brandingSteps = [
  {
    number: "01",
    titleKey: "aqua.customBottles.steps.brand.title",
    textKey: "aqua.customBottles.steps.brand.text",
  },
  {
    number: "02",
    titleKey: "aqua.customBottles.steps.design.title",
    textKey: "aqua.customBottles.steps.design.text",
  },
  {
    number: "03",
    titleKey: "aqua.customBottles.steps.production.title",
    textKey: "aqua.customBottles.steps.production.text",
  },
  {
    number: "04",
    titleKey: "aqua.customBottles.steps.bottles.title",
    textKey: "aqua.customBottles.steps.bottles.text",
  },
];

const brandingPoints = [
  {
    key: "logo",
    defaultValue: "Your logo and business identity",
  },
  {
    key: "professional",
    defaultValue: "Professional bottle branding",
  },
  {
    key: "hotelRestaurant",
    defaultValue: "Hotel and restaurant branding",
  },
  {
    key: "corporateEvent",
    defaultValue: "Corporate and event branding",
  },
  {
    key: "bulk",
    defaultValue: "Bulk branding requirements",
  },
];

export default function AquaCustomBottles() {
  const { t } = useTranslation();

  return (
    <section
      id="custom-bottles"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#06283D]
        py-20
        text-white
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
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-96
            w-96
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-sky-400/10
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            initial={{
              y: "110vh",
              x: `${(index * 37) % 100}%`,
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + (index % 4),
              delay: index * 0.7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-200
              shadow-[0_0_15px_rgba(103,232,249,0.8)]
            "
          />
        ))}
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          className="mx-auto max-w-4xl text-center"
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
              border-cyan-300/20
              bg-white/[0.06]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-cyan-200
                sm:text-xs
              "
            >
              {t("aqua.customBottles.eyebrow", {
                defaultValue: "Custom Bottle Branding",
              })}
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-5xl
              lg:text-7xl
            "
          >
            {t("aqua.customBottles.heading.first", {
              defaultValue: "YOUR BRAND.",
            })}

            <span className="block text-cyan-300">
              {t("aqua.customBottles.heading.second", {
                defaultValue: "ON EVERY BOTTLE.",
              })}
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-300
              sm:text-base
              sm:leading-8
            "
          >
            {t("aqua.customBottles.description", {
              defaultValue:
                "Turn water bottles into a visible extension of your business. Add your logo, brand identity or event branding and create a professional experience for your customers and guests.",
            })}
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:mt-20
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* =================================================
              BOTTLE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              relative
              mx-auto
              flex
              min-h-[390px]
              w-full
              max-w-[360px]
              items-center
              justify-center
              sm:min-h-[470px]
              lg:min-h-[600px]
            "
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-cyan-300/10
                sm:h-[360px]
                sm:w-[360px]
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                border
                border-sky-300/10
                sm:h-[300px]
                sm:w-[300px]
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.55, 0.35],
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
                bg-cyan-300/20
                blur-3xl
                sm:h-80
                sm:w-80
              "
            />

            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                h-[330px]
                w-[150px]
                sm:h-[430px]
                sm:w-[195px]
              "
            >
              <img
                src="/aqua/bottle.png"
                alt={t("aqua.customBottles.bottleAlt", {
                  defaultValue: "BB Aqua branded water bottle",
                })}
                className="
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-[8%]
                  left-[18%]
                  w-[13%]
                  rounded-full
                  bg-white/30
                  blur-md
                "
              />
            </motion.div>

            {/* Brand badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-[18%]
                z-20
                rounded-2xl
                border
                border-white/15
                bg-white/10
                px-4
                py-3
                shadow-[0_15px_45px_rgba(0,0,0,0.20)]
                backdrop-blur-xl
                sm:right-[-5%]
              "
            >
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-cyan-300" />

                <span className="text-xs font-bold text-white">
                  {t("aqua.customBottles.brandBadge", {
                    defaultValue: "YOUR BRAND",
                  })}
                </span>
              </div>
            </motion.div>

            {/* Branding badge */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[17%]
                left-0
                z-20
                rounded-2xl
                border
                border-cyan-300/15
                bg-[#0a344d]/80
                px-4
                py-3
                backdrop-blur-xl
                sm:left-[-5%]
              "
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />

                <span className="text-xs font-semibold text-slate-200">
                  {t("aqua.customBottles.bottleBrandingBadge", {
                    defaultValue: "Bottle Branding",
                  })}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-cyan-300
              "
            >
              {t("aqua.customBottles.content.eyebrow", {
                defaultValue: "Brand Visibility",
              })}
            </span>

            <h3
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                tracking-[-0.035em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {t("aqua.customBottles.content.heading.first", {
                defaultValue: "Make your bottle",
              })}

              <span className="block text-cyan-300">
                {t("aqua.customBottles.content.heading.second", {
                  defaultValue: "work for your brand.",
                })}
              </span>
            </h3>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-300
                sm:text-base
                sm:leading-8
              "
            >
              {t("aqua.customBottles.content.description", {
                defaultValue:
                  "A branded water bottle gives your logo another place to be seen. It can become part of your restaurant table, hotel room, event setup, corporate meeting or special occasion.",
              })}
            </p>

            <div className="mt-7 space-y-3">
              {brandingPoints.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-300/10
                      ring-1
                      ring-cyan-300/20
                    "
                  >
                    <Check className="h-3.5 w-3.5 text-cyan-300" />
                  </span>

                  <span className="text-sm font-medium text-slate-200">
                    {t(
                      `aqua.customBottles.points.${item.key}`,
                      {
                        defaultValue: item.defaultValue,
                      }
                    )}
                  </span>
                </div>
              ))}
            </div>

            <motion.a
              href="#enquiry"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-8
                inline-flex
                min-h-[54px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-cyan-300
                px-7
                text-sm
                font-extrabold
                text-[#06283D]
                shadow-[0_15px_45px_rgba(34,211,238,0.20)]
                sm:w-auto
              "
            >
              {t("aqua.customBottles.content.button", {
                defaultValue: "Start Bottle Branding",
              })}

              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            BRANDING JOURNEY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 sm:mt-28"
        >
          <div className="mb-8 text-center">
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-cyan-300
              "
            >
              {t("aqua.customBottles.journey.eyebrow", {
                defaultValue: "Branding Journey",
              })}
            </span>

            <h3
              className="
                mt-3
                text-2xl
                font-black
                tracking-tight
                sm:text-3xl
              "
            >
              {t("aqua.customBottles.journey.heading", {
                defaultValue:
                  "From your identity to every bottle.",
              })}
            </h3>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {brandingSteps.map((step, index) => (
              <motion.div
                key={step.number}
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
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-5
                  backdrop-blur-xl
                  transition-colors
                  duration-300
                  hover:border-cyan-300/20
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-3xl
                      font-black
                      tracking-[-0.05em]
                      text-white/10
                      transition-colors
                      duration-300
                      group-hover:text-cyan-300/30
                    "
                  >
                    {step.number}
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      text-cyan-300/40
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>

                <h4 className="mt-5 text-lg font-bold text-white">
                  {t(step.titleKey, {
                    defaultValue:
                      index === 0
                        ? "Your Brand"
                        : index === 1
                          ? "Brand Design"
                          : index === 2
                            ? "Branding & Production"
                            : "Branded Bottles",
                  })}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t(step.textKey, {
                    defaultValue:
                      index === 0
                        ? "Share your logo, business name or event identity."
                        : index === 1
                          ? "Your branding is prepared for the bottle presentation."
                          : index === 2
                            ? "The approved branding moves into the production process."
                            : "Your bottles are ready to represent your brand.",
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            USE CASES
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 sm:mt-20"
        >
          <div className="mb-7 text-center">
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-400
              "
            >
              {t("aqua.customBottles.useCases.eyebrow", {
                defaultValue: "Branding Applications",
              })}
            </span>

            <h3 className="mt-3 text-2xl font-black sm:text-3xl">
              {t("aqua.customBottles.useCases.heading", {
                defaultValue: "Built for businesses and occasions.",
              })}
            </h3>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              sm:gap-4
            "
          >
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    flex
                    min-h-[110px]
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-5
                    text-center
                    backdrop-blur-xl
                    transition-colors
                    duration-300
                    hover:border-cyan-300/20
                  "
                >
                  <Icon className="h-6 w-6 text-cyan-300" />

                  <span className="mt-3 text-sm font-semibold text-slate-200">
                    {t(
                      `aqua.customBottles.useCases.items.${item.key}`,
                      {
                        defaultValue: item.title,
                      }
                    )}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}