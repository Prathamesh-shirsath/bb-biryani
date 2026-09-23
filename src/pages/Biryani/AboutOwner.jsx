import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  Crown,
  Sparkles,
  Star,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Authentic Taste",
    text: "A commitment to maintaining the authentic taste of BB.",
  },
  {
    number: "02",
    title: "Quality First",
    text: "Carefully selected ingredients and consistent quality.",
  },
  {
    number: "03",
    title: "Customer Trust",
    text: "Building lasting relationships through great food and service.",
  },
];

export default function AboutOwner() {
  return (
    <section
      id="owner"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#090705]
        py-20
        min-[360px]:py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[15%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#D97706]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
          lg:h-[650px]
          lg:w-[650px]
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-150px]
          bottom-[5%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#D6A84F]/[0.06]
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* Decorative grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(214,168,79,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,79,0.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="bb-container relative z-10">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

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
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D6A84F] sm:w-14" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Crown
                size={14}
                className="text-[#D6A84F]"
              />
            </motion.div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D6A84F] sm:w-14" />
          </div>

          <p className="mt-4 bb-eyebrow">
            The Story Behind BB
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-[2.55rem]
              font-black
              leading-[0.9]
              tracking-[-0.05em]
              text-white
              min-[360px]:text-[2.8rem]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Meet The
            <span className="block bg-gradient-to-r from-[#FFF0B8] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              Founder
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[330px]
              text-[12px]
              leading-5
              text-white/35
              sm:max-w-xl
              sm:text-sm
              sm:leading-6
            "
          >
            Behind every plate is a vision, a passion and a
            commitment to serving something truly memorable.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN OWNER CARD
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            mx-auto
            mt-10
            max-w-6xl
            sm:mt-14
          "
        >
          {/* Outer glow */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[30px]
              bg-[#D97706]/10
              blur-2xl
              sm:-inset-4
              sm:rounded-[42px]
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-[#D6A84F]/15
              bg-gradient-to-br
              from-[#181009]
              via-[#0F0906]
              to-[#090604]
              shadow-[0_30px_100px_rgba(0,0,0,0.5)]
              sm:rounded-[36px]
            "
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* =================================================
                  OWNER IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-[350px]
                  items-center
                  justify-center
                  overflow-hidden
                  sm:min-h-[430px]
                  lg:min-h-[560px]
                "
              >
                {/* Large background spotlight */}

                <motion.div
                  animate={{
                    scale: [1, 1.18, 1],
                    opacity: [0.08, 0.18, 0.08],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-[240px]
                    w-[240px]
                    rounded-full
                    bg-[#D97706]/35
                    blur-[90px]
                    sm:h-[350px]
                    sm:w-[350px]
                  "
                />

                {/* Decorative rotating orbit */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[275px]
                    w-[275px]
                    rounded-full
                    border
                    border-dashed
                    border-[#D6A84F]/20
                    sm:h-[390px]
                    sm:w-[390px]
                  "
                />

                {/* Small orbit */}

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[245px]
                    w-[245px]
                    rounded-full
                    border
                    border-[#D6A84F]/10
                    sm:h-[340px]
                    sm:w-[340px]
                  "
                />

                {/* =================================================
                    ACTUAL OWNER IMAGE
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10
                    h-[255px]
                    w-[255px]
                    sm:h-[320px]
                    sm:w-[320px]
                    lg:h-[350px]
                    lg:w-[350px]
                  "
                >
                  <img
                    src="/owner/owner.png"
                    alt="BB Biryani Founder"
                    className="
                      h-full
                      w-full
                      object-contain
                      drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]
                    "
                  />

                  {/* Moving shine */}

                  <motion.div
                    animate={{
                      x: ["-140%", "140%"],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      w-[25%]
                      -skew-x-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.12]
                      to-transparent
                    "
                  />
                </motion.div>

                {/* =================================================
                    FOUNDER BADGE
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-6
                    left-1/2
                    z-20
                    -translate-x-1/2
                    rounded-full
                    border
                    border-[#D6A84F]/30
                    bg-black/75
                    px-4
                    py-2
                    shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                    backdrop-blur-xl
                    sm:bottom-8
                    sm:px-5
                    sm:py-2.5
                  "
                >
                  <div className="flex items-center gap-2">
                    <Award
                      size={13}
                      className="text-[#D6A84F]"
                    />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D6A84F] sm:text-[9px]">
                      Founder & Visionary
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* =================================================
                  OWNER CONTENT
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  flex-col
                  justify-center
                  p-6
                  min-[360px]:p-7
                  sm:p-10
                  lg:p-14
                "
              >
                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F] sm:text-[10px]">
                  BB GROUP OF BUSINESSES
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-[2rem]
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-white
                    min-[360px]:text-[2.25rem]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  [Owner Name]
                </h3>

                <p className="mt-2 text-xs font-medium text-[#D6A84F] sm:text-sm">
                  Founder • BB Biryani
                </p>

                {/* Decorative line */}

                <div className="mt-5 flex items-center gap-3">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: 55 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-[#D6A84F]"
                  />

                  <Sparkles
                    size={11}
                    className="text-[#D6A84F]"
                  />
                </div>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-[13px]
                    leading-6
                    text-white/45
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  Our journey is driven by a simple belief:
                  great food is not just about taste — it is
                  about quality, consistency, hospitality and
                  the memories people create around a meal.
                </p>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-[13px]
                    leading-6
                    text-white/35
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  BB Biryani represents our passion for
                  authentic flavours and our vision to create
                  a memorable food experience for every guest.
                </p>

                {/* =================================================
                    STATS
                ================================================== */}

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-3
                    gap-2
                    sm:mt-9
                    sm:gap-4
                  "
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-3
                      text-center
                      backdrop-blur-xl
                      sm:p-4
                    "
                  >
                    <p className="font-serif text-xl font-black text-[#D6A84F] sm:text-2xl">
                      BB
                    </p>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.14em] text-white/25 sm:text-[8px]">
                      Brand
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-3
                      text-center
                      backdrop-blur-xl
                      sm:p-4
                    "
                  >
                    <p className="font-serif text-xl font-black text-[#D6A84F] sm:text-2xl">
                      100%
                    </p>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.14em] text-white/25 sm:text-[8px]">
                      Passion
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-3
                      text-center
                      backdrop-blur-xl
                      sm:p-4
                    "
                  >
                    <p className="font-serif text-xl font-black text-[#D6A84F] sm:text-2xl">
                      ★
                    </p>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.14em] text-white/25 sm:text-[8px]">
                      Quality
                    </p>
                  </div>
                </div>

                {/* CTA */}

                <a
                  href="#franchise"
                  className="
                    group
                    mt-7
                    flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#D6A84F]/20
                    bg-[#D6A84F]/[0.06]
                    px-6
                    py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#D6A84F]
                    backdrop-blur-xl
                    transition
                    duration-300
                    active:scale-[0.97]
                    sm:mt-9
                    sm:w-fit
                    sm:px-7
                    sm:text-xs
                    lg:hover:border-[#D6A84F]/50
                    lg:hover:bg-[#D6A84F]/10
                  "
                >
                  Discover Our Journey

                  <ArrowUpRight
                    size={15}
                    className="
                      transition
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            HIGHLIGHTS
        ==================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-3
            sm:mt-6
            sm:grid-cols-3
            sm:gap-5
            lg:mt-7
          "
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.02]
                p-5
                backdrop-blur-xl
                transition
                duration-300
                sm:rounded-[22px]
                sm:p-6
              "
            >
              <div
                className="
                  absolute
                  right-[-20px]
                  top-[-20px]
                  h-20
                  w-20
                  rounded-full
                  bg-[#D6A84F]/[0.04]
                  blur-2xl
                  transition
                  duration-500
                  group-hover:bg-[#D6A84F]/10
                "
              />

              <div className="relative z-10 flex items-start gap-4">
                <span className="font-serif text-xl font-black text-[#D6A84F]/40">
                  {item.number}
                </span>

                <div>
                  <h4 className="text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[10px] leading-5 text-white/30 sm:text-xs sm:leading-6">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            QUOTE
        ==================================================== */}

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
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-12
            max-w-2xl
            text-center
            sm:mt-16
          "
        >
          <Star
            size={14}
            className="mx-auto text-[#D6A84F]"
            fill="currentColor"
          />

          <p
            className="
              mt-4
              font-serif
              text-lg
              italic
              leading-7
              text-white/45
              sm:text-2xl
              sm:leading-9
            "
          >
            "Every great brand begins with a simple
            passion — to serve something people love."
          </p>
        </motion.div>
      </div>
    </section>
  );
}