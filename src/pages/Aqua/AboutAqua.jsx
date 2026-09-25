import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Droplets,
  Sparkles,
  Waves,
} from "lucide-react";

const businessCards = [
  {
    icon: Droplets,
    number: "01",
    title: "BB Aqua Bottles",
    description:
      "Our own BB Aqua branded drinking water bottles, designed around purity, quality and a clean premium identity.",
    points: [
      "BB Aqua branded bottles",
      "Quality-focused production",
      "Suitable for regular supply",
    ],
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Customised Bottles",
    description:
      "Water bottles customised with your brand identity, logo or event design for businesses, celebrations and special occasions.",
    points: [
      "Your logo & branding",
      "Business & event bottles",
      "Bulk customised orders",
    ],
  },
];

export default function AquaAbout() {
  const scrollToCustom = () => {
    document
      .getElementById("custom-bottles")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20

        sm:py-24

        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-72
          w-72
          rounded-full
          bg-sky-100/70
          blur-[100px]

          lg:h-[450px]
          lg:w-[450px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-cyan-100/60
          blur-[110px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* Subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(3,105,161,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(3,105,161,0.8)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="bb-container relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            SECTION INTRO
        ================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-200
              bg-sky-50
              px-3
              py-2
            "
          >
            <Waves
              size={13}
              className="text-sky-500"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-sky-700
              "
            >
              About BB Aqua
            </span>
          </motion.div>

          <motion.h2
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
            }}
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.045em]
              text-[#063B5C]

              min-[360px]:text-[44px]

              sm:text-5xl

              lg:text-6xl
            "
          >
            Water That
            <span className="block text-sky-500">
              Carries Your Brand.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500

              sm:text-base
              sm:leading-8
            "
          >
            BB Aqua brings together premium drinking
            water and customised bottle solutions —
            helping businesses and events serve quality
            water while putting their own identity on
            every bottle.
          </motion.p>
        </div>

        {/* =================================================
            BUSINESS CARDS
        ================================================== */}

        <div
          className="
            mt-12
            grid
            gap-5

            md:grid-cols-2
            md:gap-6

            lg:mt-16
          "
        >
          {businessCards.map(
            (card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.number}
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
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-sky-900/[0.08]
                    bg-white
                    p-6
                    shadow-[0_18px_60px_rgba(7,89,133,0.07)]
                    transition-shadow
                    duration-500
                    hover:shadow-[0_25px_80px_rgba(7,89,133,0.12)]

                    sm:p-7

                    lg:p-8
                  "
                >
                  {/* Card glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-44
                      w-44
                      rounded-full
                      bg-sky-100/70
                      blur-3xl
                      transition
                      duration-500
                      group-hover:bg-cyan-100
                    "
                  />

                  {/* Top line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-1
                      w-full
                      bg-gradient-to-r
                      from-sky-500
                      via-cyan-400
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* Header */}

                  <div
                    className="
                      relative
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-sky-50
                        to-cyan-50
                        text-sky-600
                        shadow-inner
                      "
                    >
                      <Icon size={25} />
                    </div>

                    <span
                      className="
                        text-4xl
                        font-black
                        tracking-[-0.06em]
                        text-sky-100
                      "
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="relative mt-7">
                    <h3
                      className="
                        text-2xl
                        font-black
                        tracking-[-0.03em]
                        text-[#063B5C]

                        sm:text-3xl
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-slate-500
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Points */}

                  <div className="relative mt-6 space-y-3">
                    {card.points.map(
                      (point) => (
                        <div
                          key={point}
                          className="
                            flex
                            items-center
                            gap-3
                            text-xs
                            font-semibold
                            text-slate-600
                          "
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
                              bg-sky-50
                            "
                          >
                            <span
                              className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-sky-500
                              "
                            />
                          </span>

                          {point}
                        </div>
                      )
                    )}
                  </div>

                  {/* Bottom decoration */}

                  <div
                    className="
                      relative
                      mt-7
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-sky-100
                      via-cyan-100
                      to-transparent
                    "
                  />
                </motion.article>
              );
            }
          )}
        </div>

        {/* =================================================
            BRAND MESSAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[28px]
            bg-[#063B5C]
            p-6
            text-white
            shadow-[0_25px_70px_rgba(6,59,92,0.16)]

            sm:p-8

            lg:mt-10
            lg:p-10
          "
        >
          {/* Background waves */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-72
              w-72
              rounded-full
              border
              border-white/[0.08]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-14
              h-52
              w-52
              rounded-full
              border
              border-white/[0.06]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-[-80px]
              h-56
              w-56
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-7

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-cyan-300
                "
              >
                <Building2 size={17} />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                  "
                >
                  For Businesses & Events
                </span>
              </div>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-black
                  leading-tight
                  tracking-[-0.03em]

                  sm:text-3xl
                "
              >
                Your brand deserves
                <span className="text-cyan-300">
                  {" "}
                  more visibility.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/60
                "
              >
                Turn every bottle into a small
                brand touchpoint with customised
                water bottles made around your
                business or event identity.
              </p>
            </div>

            {/* CTA */}

            <motion.button
              type="button"
              onClick={scrollToCustom}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                flex
                min-h-[52px]
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                text-xs
                font-black
                uppercase
                tracking-[0.08em]
                text-[#063B5C]
                shadow-[0_15px_35px_rgba(0,0,0,0.15)]
              "
            >
              Explore Custom Bottles

              <ArrowRight
                size={16}
                className="
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}