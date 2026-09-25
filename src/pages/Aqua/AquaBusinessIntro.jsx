import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Droplets,
  Sparkles,
  Waves,
} from "lucide-react";

const businessCards = [
  {
    number: "01",
    title: "BB Aqua Water",
    description:
      "BB Aqua branded drinking water bottles with a clean, professional presentation for businesses, events and everyday requirements.",
    points: [
      "BB Aqua branded bottles",
      "Premium brand presentation",
      "Business & event supply",
    ],
    icon: Droplets,
  },
  {
    number: "02",
    title: "Custom Bottle Branding",
    description:
      "Put your business logo, brand name or event identity on water bottles and turn every bottle into a visible part of your brand.",
    points: [
      "Your logo & brand identity",
      "Hotel & restaurant branding",
      "Corporate & event branding",
    ],
    icon: Sparkles,
  },
];

const brandingUses = [
  "Hotels",
  "Restaurants",
  "Cafes",
  "Resorts",
  "Corporate",
  "Weddings",
  "Events",
  "Caterers",
];

export default function AquaBusinessIntro() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F5FBFF]
        py-20
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
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
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
            bg-cyan-300/15
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 15,
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
            bg-sky-300/15
            blur-3xl
            sm:h-[28rem]
            sm:w-[28rem]
          "
        />

        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <svg
            viewBox="0 0 1440 180"
            className="h-auto w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80 C180 20 320 130 500 70 C700 0 850 130 1040 70 C1200 20 1300 100 1440 45 V180 H0 Z"
              fill="rgba(125,211,252,0.10)"
            />

            <path
              d="M0 110 C180 55 320 155 520 100 C720 45 850 150 1060 95 C1230 55 1320 130 1440 80"
              fill="none"
              stroke="rgba(56,189,248,0.18)"
              strokeWidth="2"
            />
          </svg>
        </div>
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
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mx-auto
              mb-5
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-sky-200/80
              bg-white/70
              px-4
              py-2
              shadow-[0_10px_35px_rgba(14,165,233,0.08)]
              backdrop-blur-xl
            "
          >
            <Waves className="h-4 w-4 text-sky-500" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-sky-700
                sm:text-xs
              "
            >
              About BB Aqua
            </span>
          </motion.div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.98]
              tracking-[-0.04em]
              text-[#06283D]
              sm:text-5xl
              lg:text-7xl
            "
          >
            Water That
            <span className="block text-sky-500">
              Carries Your Brand.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
              sm:leading-8
            "
          >
            BB Aqua operates across two connected business areas — our own
            branded drinking water and professional custom bottle branding
            for businesses, events and special occasions.
          </p>
        </motion.div>

        {/* =====================================================
            TWO BUSINESS AREAS
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            sm:grid-cols-2
            sm:gap-6
            lg:gap-8
          "
        >
          {businessCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white
                  bg-white/75
                  p-5
                  shadow-[0_20px_70px_rgba(2,132,199,0.10)]
                  backdrop-blur-2xl
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Glow */}

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -inset-[35%]
                    rounded-full
                    bg-[conic-gradient(from_90deg,transparent,rgba(56,189,248,0.12),transparent,rgba(14,165,233,0.10),transparent)]
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-sky-100
                        bg-gradient-to-br
                        from-sky-50
                        to-cyan-50
                        shadow-[0_10px_30px_rgba(14,165,233,0.10)]
                      "
                    >
                      <Icon className="h-6 w-6 text-sky-500" />
                    </div>

                    <span
                      className="
                        text-4xl
                        font-black
                        tracking-[-0.05em]
                        text-sky-100
                        transition-colors
                        duration-500
                        group-hover:text-sky-200
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-[#06283D]
                      sm:text-3xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                      sm:text-base
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-sky-100
                          "
                        >
                          <BadgeCheck className="h-3.5 w-3.5 text-sky-600" />
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-8
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-sky-100
                      via-sky-200
                      to-transparent
                    "
                  />

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
                    BB Aqua

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            CUSTOM BRANDING MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            relative
            mt-6
            overflow-hidden
            rounded-[2rem]
            bg-[#06283D]
            px-5
            py-8
            shadow-[0_30px_90px_rgba(2,40,61,0.20)]
            sm:mt-8
            sm:px-8
            sm:py-10
            lg:px-12
            lg:py-12
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-20
            "
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-cyan-300" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-cyan-200
                  "
                >
                  Custom Bottle Branding
                </span>
              </div>

              <h3
                className="
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Make every bottle
                <span className="block text-cyan-300">
                  represent your brand.
                </span>
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-300
                  sm:text-base
                "
              >
                Your logo, your brand identity and your message can become
                part of the bottle experience your customers see every day.
              </p>
            </div>

            <motion.a
              href="#custom-bottles"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                text-sm
                font-bold
                text-[#06283D]
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                transition
                sm:w-fit
              "
            >
              Explore Brand Bottles
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            BRANDING USE CASES
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-10 sm:mt-14"
        >
          <p
            className="
              mb-4
              text-center
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-slate-400
            "
          >
            Custom Bottle Branding For
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2
              sm:gap-3
            "
          >
            {brandingUses.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                className="
                  rounded-full
                  border
                  border-sky-100
                  bg-white/70
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-slate-600
                  shadow-sm
                  backdrop-blur-md
                "
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}