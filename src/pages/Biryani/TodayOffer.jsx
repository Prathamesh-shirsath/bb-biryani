import { motion } from "motion/react";
import { ArrowRight, Flame, Sparkles, Tag } from "lucide-react";

export default function TodayOffer() {
  return (
    <section
      id="offer"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0A0705]
        py-16

        min-[360px]:py-20

        sm:py-24

        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D97706]/10
          blur-[90px]

          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[120px]

          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[150px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[-100px]
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#D6A84F]
          blur-[90px]

          sm:right-[-150px]
          sm:top-[-150px]
          sm:h-[350px]
          sm:w-[350px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="bb-container relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-5 bg-[#D6A84F]/50 sm:w-8" />

            <p className="bb-eyebrow">
              Limited Time
            </p>

            <span className="h-px w-5 bg-[#D6A84F]/50 sm:w-8" />
          </div>

          <h2
            className="
              mt-3
              font-serif
              text-[2.15rem]
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-white

              min-[360px]:text-[2.4rem]

              sm:mt-4
              sm:text-5xl

              lg:text-6xl
            "
          >
            Today's
            <span className="block bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              Special Offer
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[310px]
              text-[12px]
              leading-5
              text-white/40

              min-[360px]:max-w-[330px]

              sm:mt-5
              sm:max-w-lg
              sm:text-sm
              sm:leading-6
            "
          >
            Royal flavour, premium ingredients and an offer
            made specially for today's cravings.
          </p>
        </motion.div>

        {/* ===================================================
            OFFER CARD
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            mx-auto
            mt-9
            w-full
            max-w-[390px]

            sm:mt-12
            sm:max-w-2xl

            lg:max-w-5xl
          "
        >
          {/* Outer glow */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[28px]
              bg-[#D97706]/10
              blur-2xl

              sm:-inset-4
              sm:rounded-[36px]
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#D6A84F]/15
              bg-gradient-to-br
              from-[#1A1009]
              via-[#0F0A07]
              to-[#090604]
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]

              sm:rounded-[32px]

              lg:rounded-[40px]
            "
          >
            {/* Decorative lines */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(214,168,79,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,79,0.7) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />
            </div>

            {/* =================================================
                MOBILE LAYOUT
            ================================================== */}

            <div className="relative flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* FOOD IMAGE */}

              <div
                className="
                  relative
                  flex
                  min-h-[235px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gradient-to-b
                  from-[#241307]
                  to-[#0D0906]

                  min-[360px]:min-h-[260px]

                  sm:min-h-[320px]

                  lg:min-h-[430px]
                "
              >
                {/* Image glow */}

                <div
                  className="
                    absolute
                    h-[170px]
                    w-[170px]
                    rounded-full
                    bg-[#D97706]/20
                    blur-[70px]

                    sm:h-[240px]
                    sm:w-[240px]
                    sm:blur-[90px]

                    lg:h-[320px]
                    lg:w-[320px]
                  "
                />

                <motion.img
                  src="/biryani/chicken.png"
                  alt="BB Chicken Biryani"
                  loading="lazy"
                  className="
                    relative
                    z-10
                    w-[82%]
                    max-w-[300px]
                    object-contain
                    drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)]

                    min-[360px]:max-w-[320px]

                    sm:max-w-[390px]

                    lg:w-[92%]
                    lg:max-w-[440px]
                  "
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Offer badge */}

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                    rotate: [-2, 0, -2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-4
                    top-4
                    z-20
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[#D6A84F]/30
                    bg-[#0A0705]/85
                    px-3
                    py-1.5
                    backdrop-blur-xl

                    sm:left-5
                    sm:top-5
                    sm:px-4
                    sm:py-2
                  "
                >
                  <Tag
                    size={11}
                    className="text-[#D6A84F]"
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#D6A84F]

                      sm:text-[10px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Special Deal
                  </span>
                </motion.div>
              </div>

              {/* =================================================
                  OFFER DETAILS
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  flex-col
                  justify-center
                  p-5

                  min-[360px]:p-6

                  sm:p-8

                  lg:p-12
                "
              >
                <div className="flex items-center gap-2">
                  <Flame
                    size={14}
                    className="text-[#D6A84F]"
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#D6A84F]

                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    BB Signature
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-[1.75rem]
                    font-black
                    leading-[0.95]
                    tracking-[-0.035em]
                    text-white

                    min-[360px]:text-[2rem]

                    sm:mt-4
                    sm:text-4xl

                    lg:text-5xl
                  "
                >
                  Royal Chicken
                  <span className="block text-[#D6A84F]">
                    Biryani
                  </span>
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[330px]
                    text-[12px]
                    leading-5
                    text-white/40

                    sm:mt-4
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Fragrant basmati rice, tender chicken,
                  aromatic spices and our signature BB masala.
                </p>

                {/* Price */}

                <div className="mt-5 flex items-end gap-3 sm:mt-6">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/25 sm:text-[9px]">
                      Starting from
                    </p>

                    <p
                      className="
                        mt-1
                        text-3xl
                        font-black
                        tracking-tight
                        text-[#D6A84F]

                        sm:text-4xl
                      "
                    >
                      ₹130
                    </p>
                  </div>

                  <span
                    className="
                      mb-1
                      rounded-full
                      border
                      border-red-400/20
                      bg-red-500/10
                      px-2.5
                      py-1
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-red-300

                      sm:mb-1.5
                      sm:px-3
                      sm:text-[9px]
                    "
                  >
                    Limited Time
                  </span>
                </div>

                {/* CTA */}

                <a
                  href="#menu"
                  className="
                    group
                    mt-6
                    flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#D6A84F]
                    px-5
                    py-3.5
                    text-xs
                    font-bold
                    text-black
                    shadow-[0_15px_35px_rgba(214,168,79,0.12)]
                    transition
                    duration-300
                    active:scale-[0.97]

                    sm:mt-7
                    sm:min-h-[54px]
                    sm:text-sm

                    lg:w-fit
                    lg:px-7
                    lg:hover:scale-105
                    lg:hover:shadow-[0_20px_45px_rgba(214,168,79,0.2)]
                  "
                >
                  EXPLORE MENU

                  <ArrowRight
                    size={15}
                    className="
                      transition
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                {/* Small trust line */}

                <div className="mt-5 flex items-center gap-2 text-[8px] text-white/25 sm:mt-6 sm:text-[10px]">
                  <Sparkles
                    size={11}
                    className="text-[#D6A84F]/70"
                  />

                  <span>
                    Freshly prepared • Signature BB taste
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}