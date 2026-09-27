import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Crown,
  Gem,
  Sparkles,
  Utensils,
} from "lucide-react";

const brands = [
  {
    icon: Building2,
    titleKey: "aqua.branding.useCases.hotels.title",
    textKey: "aqua.branding.useCases.hotels.text",
  },
  {
    icon: Utensils,
    titleKey: "aqua.branding.useCases.restaurants.title",
    textKey: "aqua.branding.useCases.restaurants.text",
  },
  {
    icon: Crown,
    titleKey: "aqua.branding.useCases.weddings.title",
    textKey: "aqua.branding.useCases.weddings.text",
  },
  {
    icon: Sparkles,
    titleKey: "aqua.branding.useCases.events.title",
    textKey: "aqua.branding.useCases.events.text",
  },
  {
    icon: Gem,
    titleKey: "aqua.branding.useCases.corporate.title",
    textKey: "aqua.branding.useCases.corporate.text",
  },
];

const brandingPoints = [
  {
    key: "logo",
    defaultValue: "Your logo and brand identity",
  },
  {
    key: "professional",
    defaultValue: "Professional bottle branding",
  },
  {
    key: "businessEvent",
    defaultValue: "Business and event branding",
  },
  {
    key: "bulk",
    defaultValue: "Suitable for bulk requirements",
  },
];

export default function AquaBranding() {
  const { t } = useTranslation();

  return (
    <section
      id="branding"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F5FBFF]
        py-20
        text-[#06283D]
        sm:py-24
        lg:py-32
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-cyan-300/20
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-10
            h-80
            w-80
            rounded-full
            bg-sky-300/20
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#06283D 1px, transparent 1px), linear-gradient(90deg, #06283D 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* Header */}

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
          className="mx-auto max-w-3xl text-center"
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
              border-cyan-700/10
              bg-white/70
              px-4
              py-2
              shadow-sm
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-cyan-600" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-cyan-700
                sm:text-xs
              "
            >
              {t("aqua.branding.eyebrow", {
                defaultValue: "Brand Experience",
              })}
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-7xl
            "
          >
            {t("aqua.branding.heading.first", {
              defaultValue: "Make Every Bottle",
            })}

            <span className="block text-cyan-600">
              {t("aqua.branding.heading.second", {
                defaultValue: "A Brand Experience.",
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
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            {t("aqua.branding.description", {
              defaultValue:
                "Your bottle is more than water. With professional bottle branding, your logo and identity can become part of the experience your customers and guests remember.",
            })}
          </p>
        </motion.div>

        {/* Main Branding Showcase */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:mt-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-12
          "
        >
          {/* Bottle */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.9,
            }}
            className="
              relative
              mx-auto
              flex
              min-h-[390px]
              w-full
              max-w-sm
              items-center
              justify-center
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white
              bg-white/70
              shadow-[0_30px_100px_rgba(6,40,61,0.12)]
              backdrop-blur-xl
              sm:min-h-[480px]
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-64
                w-64
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-300/20
                blur-3xl
              "
            />

            {/* Rings */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-72
                w-72
                rounded-full
                border
                border-dashed
                border-cyan-500/15
                sm:h-80
                sm:w-80
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-60
                w-60
                rounded-full
                border
                border-cyan-500/10
                sm:h-72
                sm:w-72
              "
            />

            {/* Bottle */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[330px] w-[170px] sm:h-[400px] sm:w-[205px]"
            >
              <img
                src="/aqua/bottle.png"
                alt={t("aqua.branding.bottleAlt", {
                  defaultValue: "BB Aqua branded water bottle",
                })}
                className="
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_30px_35px_rgba(6,40,61,0.25)]
                "
              />

              {/* Brand label overlay */}

              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-[45%]
                  w-[105px]
                  -translate-x-1/2
                  rounded-xl
                  border
                  border-cyan-200/60
                  bg-white/90
                  px-2
                  py-2
                  text-center
                  shadow-lg
                  backdrop-blur-md
                  sm:w-[125px]
                "
              >
                <p className="text-[8px] font-black tracking-[0.2em] text-cyan-700 sm:text-[9px]">
                  {t("aqua.branding.bottleLabel.brand", {
                    defaultValue: "YOUR BRAND",
                  })}
                </p>

                <p className="mt-1 text-[7px] font-semibold text-slate-500 sm:text-[8px]">
                  {t("aqua.branding.bottleLabel.branding", {
                    defaultValue: "BOTTLE BRANDING",
                  })}
                </p>
              </motion.div>
            </motion.div>

            {/* Floating badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-4
                top-8
                rounded-2xl
                border
                border-cyan-100
                bg-white/85
                px-3
                py-2
                shadow-lg
                backdrop-blur-xl
                sm:right-8
              "
            >
              <p className="text-[8px] font-black uppercase tracking-wider text-cyan-700">
                {t("aqua.branding.floatingBadge.title", {
                  defaultValue: "Your Logo",
                })}
              </p>

              <p className="mt-1 text-[8px] text-slate-500">
                {t("aqua.branding.floatingBadge.subtitle", {
                  defaultValue: "Your Identity",
                })}
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.9,
            }}
          >
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.25em]
                text-cyan-600
              "
            >
              {t("aqua.branding.content.eyebrow", {
                defaultValue: "Your Brand. On Every Bottle.",
              })}
            </p>

            <h3
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                tracking-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              {t("aqua.branding.content.heading.first", {
                defaultValue: "Turn water into",
              })}

              <span className="text-cyan-600">
                {" "}
                {t("aqua.branding.content.heading.second", {
                  defaultValue: "brand visibility.",
                })}
              </span>
            </h3>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {t("aqua.branding.content.description", {
                defaultValue:
                  "Share your logo or brand identity with BB Aqua and create a professional bottle presentation for your business, event or organisation.",
              })}
            </p>

            {/* Checklist */}

            <div className="mt-7 space-y-3">
              {brandingPoints.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-100
                    "
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-700" />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {t(`aqua.branding.points.${item.key}`, {
                      defaultValue: item.defaultValue,
                    })}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#enquiry"
              className="
                mt-8
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#06283D]
                px-6
                text-sm
                font-bold
                text-white
                shadow-[0_15px_35px_rgba(6,40,61,0.2)]
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:w-auto
              "
            >
              {t("aqua.branding.content.button", {
                defaultValue: "Start Bottle Branding",
              })}

              <ArrowRight className="h-4 w-4 text-cyan-300" />
            </a>
          </motion.div>
        </div>

        {/* Use Cases */}

        <div className="mt-14 sm:mt-20">
          <div className="mb-7 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600">
              {t("aqua.branding.useCases.eyebrow", {
                defaultValue: "Built For Your Brand",
              })}
            </p>

            <h3 className="mt-2 text-2xl font-black sm:text-3xl">
              {t("aqua.branding.useCases.heading", {
                defaultValue: "Where Bottle Branding Fits",
              })}
            </h3>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              lg:grid-cols-5
            "
          >
            {brands.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.titleKey}
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
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white/80
                    p-4
                    shadow-[0_12px_40px_rgba(6,40,61,0.06)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-200
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-50
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon className="h-5 w-5 text-cyan-600" />
                  </div>

                  <h4 className="mt-4 text-sm font-black text-[#06283D]">
                    {t(item.titleKey, {
                      defaultValue: "Hotels",
                    })}
                  </h4>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {t(item.textKey, {
                      defaultValue:
                        "Create a consistent branded bottle experience for your guests.",
                    })}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}