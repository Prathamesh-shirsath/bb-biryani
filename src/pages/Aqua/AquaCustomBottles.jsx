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

const useCases = [
  {
    title: "Hotels",
    icon: Hotel,
  },
  {
    title: "Restaurants",
    icon: Utensils,
  },
  {
    title: "Weddings",
    icon: Crown,
  },
  {
    title: "Events",
    icon: PartyPopper,
  },
  {
    title: "Corporate",
    icon: Building2,
  },
  {
    title: "Resorts",
    icon: Sparkles,
  },
];

const brandingSteps = [
  {
    number: "01",
    title: "Your Brand",
    text: "Share your logo, business name or event identity.",
  },
  {
    number: "02",
    title: "Brand Design",
    text: "Your branding is prepared for the bottle presentation.",
  },
  {
    number: "03",
    title: "Branding & Production",
    text: "The approved branding moves into the production process.",
  },
  {
    number: "04",
    title: "Branded Bottles",
    text: "Your bottles are ready to represent your brand.",
  },
];

export default function AquaCustomBottles() {
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
      {/* Background */}

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
        {/* Header */}

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
              Custom Bottle Branding
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
            YOUR BRAND.
            <span className="block text-cyan-300">
              ON EVERY BOTTLE.
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
            Turn water bottles into a visible extension of your business.
            Add your logo, brand identity or event branding and create a
            professional experience for your customers and guests.
          </p>
        </motion.div>

        {/* Main Content */}

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
          {/* Bottle */}

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
                alt="BB Aqua branded water bottle"
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
                  YOUR BRAND
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
                  Bottle Branding
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}

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
              Brand Visibility
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
              Make your bottle
              <span className="block text-cyan-300">
                work for your brand.
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
              A branded water bottle gives your logo another place to be
              seen. It can become part of your restaurant table, hotel
              room, event setup, corporate meeting or special occasion.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Your logo and business identity",
                "Professional bottle branding",
                "Hotel and restaurant branding",
                "Corporate and event branding",
                "Bulk branding requirements",
              ].map((item) => (
                <div
                  key={item}
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
                    {item}
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
              Start Bottle Branding
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Branding Journey */}

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
              Branding Journey
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
              From your identity to every bottle.
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
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}

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
              Branding Applications
            </span>

            <h3 className="mt-3 text-2xl font-black sm:text-3xl">
              Built for businesses and occasions.
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
                  key={item.title}
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
                    {item.title}
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