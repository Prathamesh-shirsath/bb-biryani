import { motion } from "motion/react";
import {
  Building2,
  Cake,
  Coffee,
  Crown,
  Hotel,
  PartyPopper,
  Store,
  Utensils,
} from "lucide-react";

const audiences = [
  {
    number: "01",
    title: "Hotels",
    description:
      "Create a professional branded bottle experience for guests and hospitality spaces.",
    icon: Hotel,
  },
  {
    number: "02",
    title: "Restaurants",
    description:
      "Keep your restaurant identity visible on every table and bottle.",
    icon: Utensils,
  },
  {
    number: "03",
    title: "Cafes",
    description:
      "Add your brand identity to bottles served with your food and beverages.",
    icon: Coffee,
  },
  {
    number: "04",
    title: "Weddings",
    description:
      "Add event branding to bottles for weddings and memorable celebrations.",
    icon: Crown,
  },
  {
    number: "05",
    title: "Events",
    description:
      "Make branded bottles part of your event's overall visual identity.",
    icon: PartyPopper,
  },
  {
    number: "06",
    title: "Corporate",
    description:
      "Use branded bottles for meetings, conferences and corporate occasions.",
    icon: Building2,
  },
  {
    number: "07",
    title: "Resorts",
    description:
      "Present a consistent bottle identity across hospitality and leisure spaces.",
    icon: Store,
  },
  {
    number: "08",
    title: "Caterers",
    description:
      "Add branded bottles to catering setups, functions and special occasions.",
    icon: Cake,
  },
];

export default function AquaWhoWeServe() {
  return (
    <section
      id="who-we-serve"
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
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-0
            h-80
            w-80
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
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
            <PartyPopper className="h-4 w-4 text-cyan-300" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-cyan-200
                sm:text-xs
              "
            >
              Who We Serve
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-7xl
            "
          >
            Your Business.
            <span className="block text-cyan-300">
              Your Bottle.
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
            From hospitality and restaurants to weddings and corporate
            events, BB Aqua bottle branding can become part of your
            customer experience.
          </p>
        </motion.div>

        {/* =====================================================
            AUDIENCE GRID
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-3
            sm:mt-16
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
          "
        >
          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-300/25
                  hover:bg-white/[0.07]
                  sm:rounded-[2rem]
                  sm:p-6
                "
              >
                {/* Glow */}

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
                  {/* Top */}

                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-300/10
                        bg-cyan-300/10
                        sm:h-12
                        sm:w-12
                        sm:rounded-2xl
                      "
                    >
                      <Icon className="h-4 w-4 text-cyan-300 sm:h-5 sm:w-5" />
                    </div>

                    <span
                      className="
                        text-2xl
                        font-black
                        tracking-[-0.05em]
                        text-white/10
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300/20
                        sm:text-3xl
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}

                  <h3
                    className="
                      mt-5
                      text-base
                      font-black
                      tracking-tight
                      text-white
                      sm:mt-6
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      leading-5
                      text-slate-400
                      sm:mt-3
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    {item.description}
                  </p>

                  {/* Bottom line */}

                  <div
                    className="
                      mt-5
                      h-px
                      w-8
                      bg-cyan-300/30
                      transition-all
                      duration-300
                      group-hover:w-14
                      sm:mt-6
                    "
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

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
            mt-10
            rounded-[2rem]
            border
            border-cyan-300/15
            bg-gradient-to-r
            from-cyan-400/10
            to-sky-400/5
            p-6
            text-center
            sm:mt-14
            sm:p-8
          "
        >
          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.22em]
              text-cyan-300
            "
          >
            One Bottle. One Identity.
          </p>

          <h3
            className="
              mt-3
              text-2xl
              font-black
              tracking-tight
              sm:text-3xl
            "
          >
            Wherever your brand is seen,
            <span className="text-cyan-300"> your identity follows.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}