import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileImage,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Brand",
    description:
      "Share your logo, business name, event details or bottle branding requirement with us.",
    icon: FileImage,
  },
  {
    number: "02",
    title: "Design & Approval",
    description:
      "Your bottle branding design is prepared around your identity and moved ahead after approval.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Branding & Production",
    description:
      "Once the design is approved, the bottle branding and production process begins.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Your finished branded bottles are prepared for delivery according to your requirement.",
    icon: PackageCheck,
  },
];

export default function AquaHowItWorks() {
  return (
    <section
      id="process"
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
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 13,
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
            bg-cyan-200/25
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-sky-200/25
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,40,61,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(2,40,61,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
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
            <Sparkles className="h-4 w-4 text-sky-500" />

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
              Our Process
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
            From Your Brand
            <span className="block text-sky-500">
              To Every Bottle.
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
            A simple process that takes your brand identity and turns it
            into a professional bottle branding experience.
          </p>
        </motion.div>

        {/* Desktop line */}

        <div className="relative mt-14 hidden lg:block">
          <div
            className="
              absolute
              left-[12%]
              right-[12%]
              top-[44px]
              h-px
              bg-gradient-to-r
              from-transparent
              via-sky-200
              to-transparent
            "
          />

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            className="
              absolute
              left-[12%]
              right-[12%]
              top-[44px]
              h-px
              origin-left
              bg-gradient-to-r
              from-sky-300
              via-cyan-300
              to-sky-300
            "
          />
        </div>

        {/* Steps */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-10
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative"
              >
                {/* Icon */}

                <div className="relative z-10 flex justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    className="
                      flex
                      h-[88px]
                      w-[88px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-sky-100
                      bg-white
                      shadow-[0_15px_45px_rgba(14,165,233,0.12)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        flex-col
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-sky-50
                        to-cyan-50
                      "
                    >
                      <Icon className="h-5 w-5 text-sky-500" />

                      <span
                        className="
                          mt-0.5
                          text-[8px]
                          font-black
                          tracking-[0.15em]
                          text-sky-400
                        "
                      >
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    mt-[-5px]
                    rounded-[2rem]
                    border
                    border-white
                    bg-white/80
                    px-5
                    pb-6
                    pt-10
                    text-center
                    shadow-[0_20px_60px_rgba(14,165,233,0.08)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:border-sky-100
                    sm:px-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-black
                      tracking-tight
                      text-[#06283D]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {step.description}
                  </p>

                  <div
                    className="
                      mx-auto
                      mt-5
                      h-px
                      w-10
                      bg-sky-200
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />
                </motion.div>

                {/* Mobile arrow */}

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3 lg:hidden">
                    <motion.div
                      animate={{
                        y: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-5 w-5 rotate-90 text-sky-300" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

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
          className="
            relative
            mt-12
            overflow-hidden
            rounded-[2rem]
            border
            border-sky-100
            bg-white/75
            px-5
            py-7
            shadow-[0_20px_70px_rgba(14,165,233,0.08)]
            backdrop-blur-xl
            sm:px-8
            sm:py-8
          "
        >
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-sky-50
                "
              >
                <CheckCircle2 className="h-5 w-5 text-sky-500" />
              </div>

              <div>
                <h3 className="text-base font-black text-[#06283D] sm:text-lg">
                  Ready to put your brand on every bottle?
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Share your branding requirement and start the conversation.
                </p>
              </div>
            </div>

            <a
              href="#enquiry"
              className="
                inline-flex
                min-h-[50px]
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
                shadow-[0_12px_35px_rgba(2,40,61,0.14)]
                transition
                hover:bg-[#0a344d]
                sm:w-auto
              "
            >
              Start Bottle Branding
              <ArrowRight className="h-4 w-4 text-cyan-300" />
            </a>
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-cyan-200/20
              blur-3xl
            "
          />
        </motion.div>
      </div>
    </section>
  );
}