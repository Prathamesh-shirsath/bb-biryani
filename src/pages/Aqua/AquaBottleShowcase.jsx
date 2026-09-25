import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplets,
  Eye,
  Layers3,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    id: 0,
    number: "01",
    title: "Bottle",
    subtitle: "Start with the bottle",
    description:
      "Start with a clean water bottle ready to carry your brand identity.",
  },
  {
    id: 1,
    number: "02",
    title: "Your Logo",
    subtitle: "Add your identity",
    description:
      "Your business logo, brand name or event identity becomes the visual focus.",
  },
  {
    id: 2,
    number: "03",
    title: "Brand Design",
    subtitle: "Build your presentation",
    description:
      "Your branding is arranged into a professional bottle presentation.",
  },
  {
    id: 3,
    number: "04",
    title: "Branded Bottle",
    subtitle: "Ready to represent you",
    description:
      "The finished branded bottle becomes part of your customer or guest experience.",
  },
];

export default function AquaBottleShowcase() {
  const [activeStage, setActiveStage] = useState(0);

  const current = stages[activeStage];

  const nextStage = () => {
    setActiveStage((prev) => (prev + 1) % stages.length);
  };

  const previousStage = () => {
    setActiveStage(
      (prev) => (prev - 1 + stages.length) % stages.length
    );
  };

  return (
    <section
      id="showcase"
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
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-sky-100/70
            blur-3xl
            sm:h-[600px]
            sm:w-[600px]
          "
        />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-20
            h-64
            w-64
            rounded-full
            bg-cyan-100/50
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-10
            h-72
            w-72
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,40,61,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(2,40,61,0.6) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
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
              border-sky-100
              bg-white/80
              px-4
              py-2
              shadow-sm
              backdrop-blur-xl
            "
          >
            <Eye className="h-4 w-4 text-sky-500" />

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
              Custom Bottle Branding
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.045em]
              text-[#06283D]
              sm:text-5xl
              lg:text-7xl
            "
          >
            From Bottle
            <span className="block text-sky-500">
              To Brand.
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
            See how your identity can move from a logo to a professionally
            branded bottle.
          </p>
        </motion.div>

        {/* Showcase */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:mt-20
            lg:grid-cols-[1fr_0.9fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* Bottle Visual */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
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
              flex
              min-h-[500px]
              items-center
              justify-center
              overflow-hidden
              rounded-[2rem]
              border
              border-sky-100
              bg-gradient-to-br
              from-sky-50
              via-white
              to-cyan-50
              shadow-[0_30px_90px_rgba(14,165,233,0.10)]
              sm:min-h-[580px]
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.15, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[260px]
                w-[260px]
                rounded-full
                border
                border-sky-300/30
                sm:h-[360px]
                sm:w-[360px]
              "
            />

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[190px]
                w-[190px]
                rounded-full
                border
                border-cyan-300/20
                sm:h-[280px]
                sm:w-[280px]
              "
            />

            <div
              className="
                absolute
                h-64
                w-64
                rounded-full
                bg-sky-300/20
                blur-3xl
                sm:h-80
                sm:w-80
              "
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{
                  opacity: 0,
                  y: 30,
                  rotateY: -25,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  rotateY: 25,
                  scale: 0.92,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
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
                <motion.img
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/aqua/bottle.png"
                  alt="BB Aqua branded bottle"
                  className="
                    h-full
                    w-full
                    object-contain
                    drop-shadow-[0_30px_35px_rgba(2,40,61,0.30)]
                  "
                />

                {/* Branding label */}

                {activeStage > 0 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.5,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-[43%]
                      z-20
                      w-[82%]
                      -translate-x-1/2
                      overflow-hidden
                      rounded-lg
                      border
                      border-white/60
                      bg-white/90
                      px-2
                      py-2
                      text-center
                      shadow-lg
                      backdrop-blur-md
                    "
                  >
                    <div className="text-[7px] font-black tracking-[0.18em] text-[#06283D]">
                      YOUR BRAND
                    </div>

                    <div className="mt-1 text-[5px] font-bold uppercase tracking-wider text-sky-500">
                      BOTTLE BRANDING
                    </div>
                  </motion.div>
                )}

                {activeStage >= 1 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-[48%]
                      z-30
                      -translate-x-1/2
                      text-[7px]
                      font-black
                      tracking-widest
                      text-[#06283D]
                    "
                  >
                    LOGO
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Stage */}

            <motion.div
              key={`badge-${activeStage}`}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                absolute
                left-4
                top-4
                z-20
                rounded-2xl
                border
                border-white
                bg-white/80
                px-4
                py-3
                shadow-lg
                backdrop-blur-xl
                sm:left-6
                sm:top-6
              "
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-500">
                Stage
              </div>

              <div className="mt-1 text-lg font-black text-[#06283D]">
                {current.number}
              </div>
            </motion.div>

            {/* Current stage */}

            <motion.div
              key={`title-${activeStage}`}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                absolute
                bottom-5
                left-5
                right-5
                z-20
                rounded-2xl
                border
                border-white
                bg-white/80
                p-4
                shadow-lg
                backdrop-blur-xl
                sm:left-6
                sm:right-6
              "
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-sky-500">
                    {current.subtitle}
                  </p>

                  <h3 className="mt-1 text-lg font-black text-[#06283D]">
                    {current.title}
                  </h3>
                </div>

                <Droplets className="h-5 w-5 shrink-0 text-sky-400" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                  text-sky-500
                "
              >
                Your Brand Journey
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  tracking-[-0.035em]
                  text-[#06283D]
                  sm:text-4xl
                "
              >
                See your identity
                <span className="block text-sky-500">
                  become the bottle brand.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Your bottle starts simple. Your logo and brand identity
                transform it into a professional branded product.
              </p>
            </motion.div>

            {/* Steps */}

            <div className="mt-8 space-y-3">
              {stages.map((stage, index) => {
                const isActive = activeStage === index;

                return (
                  <motion.button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-sky-200 bg-sky-50 shadow-[0_12px_35px_rgba(14,165,233,0.10)]"
                          : "border-slate-100 bg-white hover:border-sky-100 hover:bg-sky-50/40"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-xs
                        font-black
                        transition-all
                        ${
                          isActive
                            ? "bg-[#06283D] text-cyan-300"
                            : "bg-slate-100 text-slate-400"
                        }
                      `}
                    >
                      {stage.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4
                        className={`
                          text-sm
                          font-bold
                          ${
                            isActive
                              ? "text-[#06283D]"
                              : "text-slate-700"
                          }
                        `}
                      >
                        {stage.title}
                      </h4>

                      <p
                        className={`
                          mt-1
                          text-xs
                          leading-5
                          ${
                            isActive
                              ? "text-slate-600"
                              : "text-slate-400"
                          }
                        `}
                      >
                        {stage.subtitle}
                      </p>
                    </div>

                    <ArrowRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        ${
                          isActive
                            ? "translate-x-1 text-sky-500"
                            : "text-slate-300"
                        }
                      `}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Description */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-sky-100
                  bg-sky-50/60
                  p-5
                "
              >
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

                  <p className="text-sm leading-6 text-slate-600">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={previousStage}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-[#06283D]
                  shadow-sm
                  transition
                  hover:border-sky-200
                  hover:bg-sky-50
                "
                aria-label="Previous stage"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={nextStage}
                className="
                  flex
                  h-12
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#06283D]
                  px-5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_35px_rgba(2,40,61,0.15)]
                "
              >
                Next Stage
                <ArrowRight className="h-4 w-4 text-cyan-300" />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <Check className="h-4 w-4 text-sky-500" />
              <span>Professional bottle branding for your business</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}

        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-4
            rounded-3xl
            border
            border-sky-100
            bg-white/70
            px-5
            py-5
            shadow-sm
            backdrop-blur-xl
            sm:flex-row
            sm:px-7
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-sky-50
              "
            >
              <Layers3 className="h-5 w-5 text-sky-500" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#06283D]">
                Your logo. Your brand. Every bottle.
              </p>

              <p className="mt-0.5 text-xs text-slate-400">
                Create your bottle branding experience.
              </p>
            </div>
          </div>

          <a
            href="#enquiry"
            className="
              inline-flex
              min-h-[46px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-sky-500
              px-6
              text-xs
              font-bold
              text-white
              shadow-[0_10px_30px_rgba(14,165,233,0.20)]
              sm:w-auto
            "
          >
            Start Bottle Branding
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}