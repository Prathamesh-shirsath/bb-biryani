import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

import BiryaniSpinner from "./BiryaniSpinner";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#080604]
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      {/* Main orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[230px]
          w-[230px]
          -translate-x-1/2
          rounded-full
          bg-[#D97706]/10
          blur-[80px]

          min-[360px]:h-[270px]
          min-[360px]:w-[270px]

          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[110px]

          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[140px]
        "
      />

      {/* Gold glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.05, 0.13, 0.05],
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
          top-[12%]
          h-[230px]
          w-[230px]
          rounded-full
          bg-[#D6A84F]/10
          blur-[80px]

          sm:right-[-150px]
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[120px]
        "
      />

      {/* Bottom red glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-[-100px]
          h-[230px]
          w-[230px]
          rounded-full
          bg-red-900/15
          blur-[80px]

          sm:h-[350px]
          sm:w-[350px]
          sm:blur-[120px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(214,168,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,79,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {[...Array(7)].map((_, index) => (
        <motion.span
          key={index}
          className="
            pointer-events-none
            absolute
            h-[2px]
            w-[2px]
            rounded-full
            bg-[#D6A84F]

            sm:h-[3px]
            sm:w-[3px]
          "
          style={{
            left: `${8 + ((index * 17) % 84)}%`,
            top: `${12 + ((index * 19) % 72)}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.08, 0.5, 0.08],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            delay: index * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-7xl
          flex-col
          items-center

          px-4
          pb-8
          pt-[92px]

          min-[360px]:px-5

          sm:px-6
          sm:pb-10
          sm:pt-[110px]

          md:px-8

          lg:flex-row
          lg:gap-8
          lg:px-10
          lg:pb-12
          lg:pt-28
        "
      >

        {/* =================================================
            LEFT / TEXT CONTENT
        ================================================== */}

        <div
          className="
            w-full
            shrink-0
            text-center

            lg:w-[52%]
            lg:text-left
          "
        >
          {/* Brand */}
          <motion.p
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
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#D6A84F]

              min-[360px]:text-[9px]

              sm:text-xs
              sm:tracking-[0.35em]

              md:text-sm
            "
          >
            BB GROUP OF BUSINESSES
          </motion.p>

          {/* Main heading */}
          <div className="mt-4 overflow-hidden sm:mt-5">
            <motion.h1
              initial={{
                y: 70,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-serif
                text-[3.35rem]
                font-black
                leading-[0.82]
                tracking-[-0.06em]

                min-[360px]:text-[3.65rem]

                min-[390px]:text-[4rem]

                sm:text-6xl

                md:text-7xl

                lg:text-[7rem]
              "
            >
              BB

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#F5D58A]
                  via-[#D6A84F]
                  to-[#A66A16]
                  bg-clip-text
                  text-transparent
                "
              >
                BIRYANI
              </span>
            </motion.h1>
          </div>

          {/* Tagline */}
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
              delay: 0.3,
            }}
            className="mt-5 sm:mt-6"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              <div className="hidden h-px w-8 bg-[#D6A84F]/50 lg:block" />

              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-[#D6A84F]

                  min-[360px]:text-[10px]

                  sm:text-xs
                  sm:tracking-[0.25em]

                  md:text-sm
                "
              >
                Authentic Taste. Royal Experience.
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
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
              delay: 0.4,
            }}
            className="
              mx-auto
              mt-4
              max-w-[320px]
              text-[13px]
              leading-6
              text-white/45

              min-[360px]:max-w-[340px]

              sm:mt-6
              sm:max-w-md
              sm:text-base
              sm:leading-7

              lg:mx-0
            "
          >
            Authentic flavours, aromatic spices and a royal
            biryani experience crafted for every celebration.
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
              delay: 0.55,
            }}
            className="
              mx-auto
              mt-6
              flex
              w-full
              max-w-[340px]
              flex-col
              gap-2.5

              min-[360px]:mt-7

              sm:mt-8
              sm:max-w-none
              sm:flex-row
              sm:justify-center

              lg:justify-start
            "
          >
            {/* View menu */}
            <a
              href="#menu"
              className="
                group
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#D6A84F]
                px-6
                py-3.5
                text-sm
                font-bold
                text-black
                shadow-[0_15px_40px_rgba(214,168,79,0.14)]
                transition
                duration-300
                active:scale-[0.97]

                sm:w-auto
                sm:px-7
                sm:py-4
                sm:hover:scale-105
              "
            >
              VIEW MENU

              <ArrowRight
                size={16}
                className="
                  transition
                  duration-300
                  sm:group-hover:translate-x-1
                "
              />
            </a>

           
           {/* Order */}
           {/* <a
              href="#enquiry"
              className="
                group
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition
                duration-300
                active:scale-[0.97]

                sm:w-auto
                sm:px-7
                sm:py-4
                sm:hover:border-[#D6A84F]/50
                sm:hover:bg-white/[0.06]
              "
            >
            {/* <span className="flex items-center gap-2">
                ORDER NOW

                <ArrowRight
                  size={16}
                  className="
                    text-[#D6A84F]
                    transition
                    duration-300
                    sm:group-hover:translate-x-1
                  "
                />
              </span>
            </a>*/}
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.75,
            }}
            className="
              mt-4
              text-[9px]
              text-white/30

              sm:mt-6
              sm:text-xs
            "
          >
            📍 Main Branch • Maharashtra
          </motion.div>

          {/* =================================================
              STATS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
            className="
              mx-auto
              mt-6
              flex
              w-full
              max-w-[340px]
              items-center
              justify-center
              gap-1
              border-y
              border-white/[0.07]
              py-4

              sm:mt-9
              sm:max-w-md
              sm:gap-6
              sm:py-5

              lg:mx-0
              lg:justify-start
            "
          >
            {/* Fresh */}
            <div className="min-w-0 flex-1 text-center">
              <p className="text-lg font-bold text-[#D6A84F] sm:text-xl">
                100%
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:text-[10px] sm:tracking-widest">
                Fresh
              </p>
            </div>

            <div className="h-7 w-px bg-white/10 sm:h-10" />

            {/* Signature */}
            <div className="min-w-0 flex-1 text-center">
              <p className="text-lg font-bold text-[#D6A84F] sm:text-xl">
                BB
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:text-[10px] sm:tracking-widest">
                Signature
              </p>
            </div>

            <div className="h-7 w-px bg-white/10 sm:h-10" />

            {/* Cravings */}
            <div className="min-w-0 flex-1 text-center">
              <p className="text-lg font-bold text-[#D6A84F] sm:text-xl">
                24/7
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:text-[10px] sm:tracking-widest">
                Cravings
              </p>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT / BIRYANI
        ================================================== */}

        <div
          className="
            relative
            mt-5
            flex
            min-h-[285px]
            w-full
            items-center
            justify-center

            min-[360px]:mt-7
            min-[360px]:min-h-[310px]

            sm:mt-10
            sm:min-h-[400px]

            md:min-h-[450px]

            lg:mt-0
            lg:min-h-[620px]
            lg:w-[48%]
          "
        >
          {/* Large glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.18, 0.3, 0.18],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[180px]
              w-[180px]
              rounded-full
              bg-[#D97706]
              blur-[65px]

              min-[360px]:h-[210px]
              min-[360px]:w-[210px]

              sm:h-[280px]
              sm:w-[280px]
              sm:blur-[100px]

              lg:h-[380px]
              lg:w-[380px]
            "
          />

          {/* Outer orbit */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[270px]
              w-[270px]
              rounded-full
              border
              border-dashed
              border-[#D6A84F]/12

              min-[360px]:h-[295px]
              min-[360px]:w-[295px]

              sm:h-[400px]
              sm:w-[400px]

              md:h-[450px]
              md:w-[450px]

              lg:h-[500px]
              lg:w-[500px]
            "
          />

          {/* Inner orbit */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[215px]
              w-[215px]
              rounded-full
              border
              border-[#D6A84F]/10

              min-[360px]:h-[240px]
              min-[360px]:w-[240px]

              sm:h-[320px]
              sm:w-[320px]

              md:h-[370px]
              md:w-[370px]

              lg:h-[420px]
              lg:w-[420px]
            "
          />

          {/* Spinner */}
          <div className="relative z-10 w-full">
            <BiryaniSpinner />
          </div>

          {/* Today's special floating card */}
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
              bottom-0
              right-0
              z-20
              rounded-xl
              border
              border-white/10
              bg-black/65
              px-3
              py-2
              text-left
              shadow-2xl
              backdrop-blur-xl

              min-[360px]:right-1

              sm:bottom-2
              sm:right-4
              sm:rounded-2xl
              sm:px-4
              sm:py-3
            "
          >
            <p className="text-[7px] uppercase tracking-[0.15em] text-white/30 sm:text-[10px] sm:tracking-widest">
              Today's Special
            </p>

            <p className="mt-1 text-[10px] font-bold text-[#D6A84F] sm:text-sm">
              Royal Biryani
            </p>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-4
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/25

          md:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.4em]">
          Scroll
        </span>

        <ArrowDown size={14} />
      </motion.div>

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-[#080604]
          to-transparent

          sm:h-24
        "
      />
    </section>
  );
}