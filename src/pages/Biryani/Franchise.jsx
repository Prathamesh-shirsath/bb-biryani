import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Phone,
  Sparkles,
  Store,
  Navigation,
} from "lucide-react";

const franchiseLocations = [
  {
    id: "01",
    name: "Main Branch",
    location: "Supa,Maharashtra, India",
    status: "Flagship",
    description:
      "The heart of the BB Biryani experience — authentic flavours and premium hospitality.",
  },
  {
    id: "02",
    name: "Branch 02",
    location: "Rahuri, Maharashtra, India",
    status: "Expanding",
    description:
      "A new BB destination bringing our signature taste closer to more customers.",
  },
  {
    id: "03",
    name: "Branch 03",
    location: "Ahilyanagar, Maharashtra, India",
    status: "Expanding",
    description:
      "Another chapter in the BB journey, built around taste, quality and trust.",
  },
];

function FloatingParticle({ delay, x, y, size = 3 }) {
  return (
    <motion.span
      className="pointer-events-none absolute rounded-full bg-[#D6A84F]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -35, 0],
        x: [0, 12, -8, 0],
        opacity: [0.1, 0.7, 0.15],
        scale: [0.7, 1.4, 0.7],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function FranchiseCard({ branch, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-100, 100], [5, -5]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-100, 100], [-5, 5]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX - (rect.left + rect.width / 2)
    );

    mouseY.set(
      event.clientY - (rect.top + rect.height / 2)
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 90,
        scale: 0.88,
        rotateX: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.16,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.article
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          relative
          min-h-[330px]
          overflow-hidden
          rounded-[26px]
          border
          border-white/[0.07]
          bg-gradient-to-br
          from-[#211308]
          via-[#110A06]
          to-[#080504]
          p-5
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          transition-shadow
          duration-500
          sm:min-h-[350px]
          sm:rounded-[30px]
          sm:p-6
          lg:hover:shadow-[0_35px_100px_rgba(0,0,0,0.65)]
        "
      >
        {/* =================================================
            ANIMATED BORDER
        ================================================== */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            -inset-[1px]
            rounded-[27px]
            bg-[conic-gradient(from_0deg,transparent,rgba(214,168,79,0.5),transparent,rgba(214,168,79,0.2),transparent)]
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            sm:rounded-[31px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[25px]
            bg-gradient-to-br
            from-[#211308]
            via-[#110A06]
            to-[#080504]
            sm:rounded-[29px]
          "
        />

        {/* =================================================
            LIGHT SWEEP
        ================================================== */}

        <motion.div
          animate={{
            x: ["-180%", "300%"],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            repeatDelay: 2.5 + index,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            top-[-20%]
            h-[150%]
            w-[35%]
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-[#D6A84F]/[0.11]
            to-transparent
          "
        />

        {/* =================================================
            CORNER GLOW
        ================================================== */}

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          className="
            pointer-events-none
            absolute
            right-[-70px]
            top-[-70px]
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#D97706]
            blur-[70px]
          "
        />

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative z-10 h-full">
          {/* TOP */}

          <div className="flex items-start justify-between">
            <motion.div
              whileHover={{
                rotate: 12,
                scale: 1.1,
              }}
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D6A84F]/25
                bg-[#D6A84F]/[0.07]
                shadow-[0_0_30px_rgba(214,168,79,0.05)]
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  border
                  border-[#D6A84F]/40
                "
              />

              <Store
                size={22}
                className="relative text-[#D6A84F]"
              />
            </motion.div>

            {/* STATUS */}

            <motion.span
              animate={{
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#D6A84F]/20
                bg-[#D6A84F]/[0.05]
                px-3
                py-1.5
                text-[7px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#D6A84F]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F] shadow-[0_0_8px_#D6A84F]" />

              {branch.status}
            </motion.span>
          </div>

          {/* HUGE NUMBER */}

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.4,
            }}
            className="
              pointer-events-none
              absolute
              right-3
              top-12
              font-serif
              text-[90px]
              font-black
              leading-none
              text-white/[0.025]
              select-none
            "
          >
            {branch.id}
          </motion.div>

          {/* TITLE */}

          <div className="mt-8">
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]/60">
              BB BIRYANI
            </p>

            <motion.h3
              whileHover={{
                x: 4,
              }}
              className="
                mt-2
                font-serif
                text-2xl
                font-black
                tracking-[-0.03em]
                text-white
                sm:text-3xl
              "
            >
              {branch.name}
            </motion.h3>
          </div>

          {/* LOCATION */}

          <div className="mt-5 flex items-center gap-3">
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="relative"
            >
              <MapPin
                size={15}
                className="relative z-10 text-[#D6A84F]"
              />

              <motion.span
                animate={{
                  scale: [0.8, 1.8],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-4
                  w-4
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#D6A84F]
                "
              />
            </motion.div>

            <span className="text-[11px] text-white/40">
              {branch.location}
            </span>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-[290px]
              text-[11px]
              leading-5
              text-white/30
              sm:text-xs
              sm:leading-6
            "
          >
            {branch.description}
          </p>

          {/* BOTTOM */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              flex
              items-center
              justify-between
              border-t
              border-white/[0.06]
              pt-4
            "
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D6A84F]
                  shadow-[0_0_10px_rgba(214,168,79,0.8)]
                "
              />

              <span className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                BB Network
              </span>
            </div>

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#D6A84F]/15
                bg-[#D6A84F]/[0.04]
                transition
              "
            >
              <ArrowUpRight
                size={16}
                className="text-[#D6A84F]"
              />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#070504]
        py-20
        min-[360px]:py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.13, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[15%]
          h-[330px]
          w-[330px]
          rounded-full
          bg-[#D97706]
          blur-[130px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[10%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#D6A84F]/[0.07]
          blur-[120px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      {/* Grid */}

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

      {/* Floating particles */}

      <FloatingParticle delay={0} x={8} y={18} />
      <FloatingParticle delay={1} x={17} y={65} size={2} />
      <FloatingParticle delay={2} x={82} y={25} />
      <FloatingParticle delay={1.5} x={92} y={70} size={2} />
      <FloatingParticle delay={3} x={45} y={12} size={2} />
      <FloatingParticle delay={2.5} x={62} y={88} />

      <div className="bb-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
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
            duration: 0.9,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent to-[#D6A84F]"
            />

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Building2
                size={15}
                className="text-[#D6A84F]"
              />
            </motion.div>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-l from-transparent to-[#D6A84F]"
            />
          </div>

          <p className="mt-4 bb-eyebrow">
            Our Growing Network
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
            Our
            <span className="block bg-gradient-to-r from-[#FFF0B8] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              Franchise
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
            Bringing the BB Biryani experience to new places,
            one location at a time.
          </p>
        </motion.div>

        {/* =====================================================
            BRANCH CARDS
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-14
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
          "
        >
          {franchiseLocations.map((branch, index) => (
            <FranchiseCard
              key={branch.id}
              branch={branch}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            CONNECTING LINE
        ====================================================== */}

        <div className="relative mx-auto mt-8 hidden max-w-4xl lg:block">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D6A84F]/20 to-transparent" />

          <motion.div
            animate={{
              x: ["-100%", "500%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-1/2
              h-1
              w-24
              -translate-y-1/2
              bg-gradient-to-r
              from-transparent
              via-[#D6A84F]
              to-transparent
              blur-[2px]
            "
          />
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            mt-7
            overflow-hidden
            rounded-[26px]
            border
            border-[#D6A84F]/20
            bg-gradient-to-r
            from-[#211207]
            via-[#130B06]
            to-[#211207]
            p-6
            text-center
            shadow-[0_30px_90px_rgba(0,0,0,0.4)]
            sm:rounded-[32px]
            sm:p-10
            lg:p-12
          "
        >
          {/* Animated CTA border */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              -inset-[100%]
              bg-[conic-gradient(from_0deg,transparent,rgba(214,168,79,0.16),transparent,rgba(214,168,79,0.08),transparent)]
            "
          />

          <div className="relative z-10">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Sparkles
                size={21}
                className="mx-auto text-[#D6A84F]"
              />
            </motion.div>

            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F] sm:text-[10px]">
              Become Part Of BB
            </p>

            <h3
              className="
                mt-2
                font-serif
                text-[1.9rem]
                font-black
                leading-tight
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Grow With
              <span className="ml-2 text-[#D6A84F]">
                BB
              </span>
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-[320px]
                text-[11px]
                leading-5
                text-white/35
                sm:max-w-lg
                sm:text-sm
                sm:leading-6
              "
            >
              Interested in bringing BB Biryani to your
              city? Connect with us and explore franchise
              opportunities.
            </p>

            <motion.a
              href="#enquiry"
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                relative
                mx-auto
                mt-6
                flex
                min-h-[52px]
                w-full
                max-w-[300px]
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-full
                bg-[#D6A84F]
                px-6
                py-3.5
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-black
                shadow-[0_15px_45px_rgba(214,168,79,0.2)]
                sm:max-w-[260px]
                sm:text-xs
              "
            >
              {/* Button shine */}

              <motion.span
                animate={{
                  x: ["-150%", "200%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="
                  absolute
                  inset-y-0
                  w-[30%]
                  -skew-x-12
                  bg-white/25
                "
              />

              <Phone size={14} />

              <span className="relative">
                Franchise Enquiry
              </span>

              <ArrowUpRight
                size={15}
                className="
                  relative
                  transition
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}