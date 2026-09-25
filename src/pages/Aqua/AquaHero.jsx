import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Droplets,
  Sparkles,
} from "lucide-react";

export default function AquaHero() {
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
              x: [0, index % 2 === 0 ? 6 : -6, 0],
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
                BB GROUP OF BUSINESSES
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
              PURE
              <span className="block text-sky-500">
                WATER.
              </span>

              <span className="block text-[#06283D]">
                YOUR BRAND.
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
              Premium packaged drinking water and
              customised water bottles designed for
              businesses, hotels, restaurants, events
              and special occasions.
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
                <span>EXPLORE BB AQUA</span>

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

                <span>CUSTOMIZE YOUR BOTTLE</span>
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
              <span>Pure Water</span>

              <span className="text-sky-300">
                •
              </span>

              <span>Custom Branding</span>

              <span className="text-sky-300">
                •
              </span>

              <span>Bulk Orders</span>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT BOTTLE
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
            {/* Large Water Orb */}

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

            {/* Ripple rings */}

            {[0, 1, 2].map(
              (ring) => (
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
              )
            )}

            {/* =================================================
                BOTTLE IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                rotateY: -20,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                h-[360px]
                w-[220px]
                sm:h-[450px]
                sm:w-[280px]
                lg:h-[560px]
                lg:w-[350px]
              "
            >
              {/* Bottle glow */}

              <div
                className="
                  absolute
                  inset-8
                  rounded-full
                  bg-cyan-300/20
                  blur-3xl
                "
              />

              {/* Bottle */}

              <motion.img
                src="/aqua/bottle.png"
                alt="BB Aqua Water Bottle"
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_35px_45px_rgba(3,105,161,0.20)]
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
                  bg-white/40
                  blur-[3px]
                "
              />
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
                delay: 1,
                duration: 0.7,
              }}
              className="
                absolute
                right-0
                top-[18%]
                z-20
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
                    Pure & Trusted
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Custom bottle badge */}

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
                delay: 1.1,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                absolute
                bottom-[7%]
                left-1/2
                z-30
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

              Custom Branding
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
            Explore
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