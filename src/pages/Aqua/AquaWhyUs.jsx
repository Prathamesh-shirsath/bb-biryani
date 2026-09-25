import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  Droplets,
  Handshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const strengths = [
  {
    number: "01",
    title: "Quality Focus",
    description:
      "A professional approach to presenting and supplying branded water bottles for business requirements.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Brand Visibility",
    description:
      "Your logo and identity can become part of the bottle experience your customers see.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Custom Bottle Branding",
    description:
      "Bottle branding designed around your business, event or organisation identity.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Bulk Requirements",
    description:
      "Suitable for businesses and occasions that need branded bottles in larger quantities.",
    icon: Boxes,
  },
  {
    number: "05",
    title: "Business Focus",
    description:
      "A bottle branding solution designed around practical business and event requirements.",
    icon: Building2,
  },
  {
    number: "06",
    title: "Brand Support",
    description:
      "A straightforward process from sharing your branding requirement to the finished bottles.",
    icon: Handshake,
  },
];

const highlights = [
  {
    icon: Droplets,
    title: "Water",
    text: "BB Aqua branded water",
  },
  {
    icon: Layers3,
    title: "Branding",
    text: "Your identity on bottles",
  },
  {
    icon: Boxes,
    title: "Bulk",
    text: "Business & event requirements",
  },
  {
    icon: Truck,
    title: "Delivery",
    text: "Finished bottles prepared for delivery",
  },
];

export default function AquaWhyUs() {
  return (
    <section
      id="why-us"
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
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-0
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
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
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
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
            <ShieldCheck className="h-4 w-4 text-cyan-300" />

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
              Why BB Aqua
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
            More Than
            <span className="block text-cyan-300">
              Just A Bottle.
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
            BB Aqua combines branded water and bottle branding into a
            practical solution for businesses, events and organisations.
          </p>
        </motion.div>

        {/* =====================================================
            STRENGTH CARDS
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-300/20
                  hover:bg-white/[0.065]
                  sm:p-6
                "
              >
                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-cyan-300/10
                    blur-3xl
                    opacity-0
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
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-300/10
                        bg-cyan-300/10
                      "
                    >
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>

                    <span
                      className="
                        text-3xl
                        font-black
                        tracking-[-0.05em]
                        text-white/10
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300/20
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-black
                      tracking-tight
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-400
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-6
                      h-px
                      w-10
                      bg-cyan-300/30
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            HIGHLIGHT STRIP
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
          className="
            mt-10
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.045]
            backdrop-blur-xl
            sm:mt-14
          "
        >
          <div
            className="
              grid
              grid-cols-2
              divide-x
              divide-y
              divide-white/10
              sm:grid-cols-4
              sm:divide-y-0
            "
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    min-h-[125px]
                    flex-col
                    items-center
                    justify-center
                    px-3
                    py-5
                    text-center
                  "
                >
                  <Icon className="h-5 w-5 text-cyan-300" />

                  <h4 className="mt-3 text-sm font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

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
            mt-8
            flex
            flex-col
            gap-5
            rounded-[2rem]
            bg-cyan-300
            p-6
            text-[#06283D]
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />

              <span className="text-xs font-black uppercase tracking-[0.18em]">
                BB Aqua
              </span>
            </div>

            <h3
              className="
                mt-3
                text-2xl
                font-black
                tracking-tight
                sm:text-3xl
              "
            >
              Water that carries your identity.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#16445B]">
              Whether you need BB Aqua branded water or bottle branding for
              your business, your bottle can become part of the experience.
            </p>
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
              shadow-[0_12px_35px_rgba(2,40,61,0.18)]
              sm:w-auto
            "
          >
            Start Your Enquiry
            <ArrowRight className="h-4 w-4 text-cyan-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}