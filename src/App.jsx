import { useEffect, useRef, useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  MousePointer2,
} from "lucide-react";

import Biryani from "./pages/Biryani/Biryani";
import Aqua from "./pages/Aqua/Aqua";

/* =========================================================
   BUSINESS DATA
========================================================= */

const businesses = [
  {
    id: "biryani",
    title: "BB BIRYANI",
    subtitle: "Authentic Taste. Royal Experience.",
    description:
      "Authentic flavours, rich aromas and a premium dining experience.",
    href: "/biryani",
    number: "01",
    image: "/biryani/chicken.png",
    theme: "gold",
  },

  {
    id: "aqua",
    title: "BB AQUA",
    subtitle: "Pure. Fresh. Trusted.",
    description:
      "Quality-focused water solutions built around purity and trust.",
    href: "/aqua",
    number: "02",
    image: "/aqua/bottle.png",
    theme: "blue",
  },
];

/* =========================================================
   FLOATING GOLD + LIGHT PARTICLES
========================================================= */

function Particles() {
  const particles = Array.from({ length: 42 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, index) => {
        const size = index % 5 === 0 ? 3 : 2;

        return (
          <motion.span
            key={index}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${(index * 29.7) % 100}%`,
              top: `${(index * 47.3) % 100}%`,
              background:
                index % 3 === 0
                  ? "rgba(104,166,195,0.32)"
                  : "rgba(182,138,58,0.30)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, index % 2 ? 10 : -10, 0],
              opacity: [0.05, 0.65, 0.05],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.08,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* =========================================================
   FALLING AQUA BOTTLES
========================================================= */

function FallingBottles() {
  const bottles = Array.from({ length: 17 });

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {bottles.map((_, index) => {
        const left = `${(index * 17.3 + 3) % 100}%`;

        const duration = 7 + (index % 5) * 1.8;

        const delay = -(index * 1.35);

        const size =
          index % 4 === 0
            ? "h-[52px] w-[22px]"
            : index % 3 === 0
              ? "h-[42px] w-[18px]"
              : "h-[34px] w-[15px]";

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left,
              top: "-80px",
            }}
            animate={{
              y: [
                "-10vh",
                "35vh",
                "75vh",
                "115vh",
              ],
              x: [
                0,
                index % 2 === 0 ? 18 : -18,
                index % 2 === 0 ? -10 : 15,
                index % 2 === 0 ? 20 : -20,
              ],
              rotate: [
                index % 2 === 0 ? -12 : 12,
                index % 2 === 0 ? 25 : -25,
                index % 2 === 0 ? -20 : 20,
                index % 2 === 0 ? 30 : -30,
              ],
              opacity: [
                0,
                0.15,
                0.25,
                0,
              ],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.img
              src="/aqua/bottle.png"
              alt=""
              className={`${size} object-contain`}
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/* =========================================================
   FLOATING WATER ORBS
========================================================= */

function WaterOrbs() {
  const orbs = Array.from({ length: 10 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-[#69B2D3]/10 bg-[#69B2D3]/[0.025] backdrop-blur-[1px]"
          style={{
            width: 20 + (index % 4) * 15,
            height: 20 + (index % 4) * 15,
            left: `${(index * 31) % 100}%`,
            top: `${25 + ((index * 37) % 70)}%`,
          }}
          animate={{
            y: [-10, -40, -10],
            x: [0, index % 2 ? 20 : -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5 + index % 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   ORBIT RING
========================================================= */

function OrbitRing({
  reverse = false,
  size = 280,
}) {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration: reverse ? 20 : 16,
        repeat: Infinity,
        ease: "linear",
      }}
      className="pointer-events-none absolute rounded-full border border-dashed border-[#B68A3A]/15"
      style={{
        width: size,
        height: size,
      }}
    >
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B68A3A]/60 shadow-[0_0_15px_rgba(182,138,58,0.6)]" />

      <span className="absolute bottom-[8%] right-[8%] h-1 w-1 rounded-full bg-[#B68A3A]/50" />
    </motion.div>
  );
}

/* =========================================================
   BUSINESS CARD
========================================================= */

function BusinessCard({
  business,
  index,
  visible,
}) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [7, -7]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-7, 7]
  );

  const spotlightX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const spotlightY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const resetCard = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isBiryani = business.theme === "gold";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index === 0 ? -420 : 420,
        rotateY: index === 0 ? -80 : 80,
        rotateZ: index === 0 ? -14 : 14,
        scale: 0.45,
        filter: "blur(12px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              x: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 1.65,
        delay: 0.15 + index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full min-w-0"
      style={{
        perspective: 1800,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetCard}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -12,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="group relative"
      >
        {/* =================================================
            ROTATING BORDER
        ================================================== */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -inset-[2px] rounded-[25px] opacity-55 blur-[2px] sm:rounded-[32px] ${
            isBiryani
              ? "bg-[conic-gradient(from_0deg,transparent,#D6A84F,transparent,#8B5E1D,transparent)]"
              : "bg-[conic-gradient(from_0deg,transparent,#70B8D9,transparent,#3D7898,transparent)]"
          }`}
        />

        <Link
          to={business.href}
          className="relative block overflow-hidden rounded-[24px] border border-black/[0.07] bg-white/[0.82] shadow-[0_20px_60px_rgba(65,45,20,0.12)] backdrop-blur-2xl sm:rounded-[30px] sm:shadow-[0_30px_90px_rgba(65,45,20,0.14)]"
        >
          {/* =================================================
              SPOTLIGHT
          ================================================== */}

          <motion.div
            className="pointer-events-none absolute z-30 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:h-44 sm:w-44"
            style={{
              left: spotlightX,
              top: spotlightY,
            }}
          />

          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="relative h-[125px] overflow-hidden min-[360px]:h-[145px] sm:h-[275px]">
            <motion.img
              src={business.image}
              alt={business.title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{
                scale: 1.3,
              }}
              animate={
                visible
                  ? {
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17110A]/80 via-[#17110A]/10 to-transparent" />

            {/* Animated glow */}

            <motion.div
              animate={{
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute -bottom-20 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full blur-3xl ${
                isBiryani
                  ? "bg-[#D6A84F]/30"
                  : "bg-[#5AA4C5]/30"
              }`}
            />

            {/* Number */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -90,
              }}
              animate={
                visible
                  ? {
                      scale: 1,
                      rotate: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.7 + index * 0.2,
                duration: 0.7,
                type: "spring",
              }}
              className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-xl sm:left-5 sm:top-5 sm:h-10 sm:w-10"
            >
              <span className="text-[7px] font-bold tracking-[0.15em] text-white sm:text-[9px]">
                {business.number}
              </span>
            </motion.div>

            {/* Explore */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={
                visible
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                delay: 1 + index * 0.2,
              }}
              className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/25 bg-black/20 px-2 py-1 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-3 sm:py-1.5"
            >
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className={`h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5 ${
                  isBiryani
                    ? "bg-[#F3D383]"
                    : "bg-[#A8E0F8]"
                }`}
              />

              <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[8px]">
                Explore
              </span>
            </motion.div>

            {/* Shine */}

            <motion.div
              initial={{
                x: "-150%",
              }}
              animate={
                visible
                  ? {
                      x: "150%",
                    }
                  : {}
              }
              transition={{
                duration: 1.7,
                delay: 1.1 + index * 0.2,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-12 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm sm:w-24"
            />
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative p-3 min-[360px]:p-3.5 sm:p-6">
            <div className="flex items-start justify-between gap-2 sm:gap-4">
              <div className="min-w-0">
                <p
                  className={`text-[6px] font-bold uppercase tracking-[0.18em] min-[360px]:text-[7px] sm:text-[8px] sm:tracking-[0.3em] ${
                    isBiryani
                      ? "text-[#95691F]"
                      : "text-[#467D99]"
                  }`}
                >
                  BB Group Business
                </p>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={
                    visible
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.8 + index * 0.2,
                  }}
                  className="mt-1.5 font-serif text-[15px] font-black leading-none tracking-[-0.04em] text-[#17130E] min-[360px]:text-[17px] sm:mt-2 sm:text-3xl"
                >
                  {business.title}
                </motion.h2>

                <p className="mt-1 line-clamp-1 text-[7px] font-medium leading-3 text-[#17130E]/50 min-[360px]:text-[8px] sm:text-xs">
                  {business.subtitle}
                </p>
              </div>

              {/* Arrow */}

              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.12,
                }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border min-[360px]:h-9 min-[360px]:w-9 sm:h-11 sm:w-11 ${
                  isBiryani
                    ? "border-[#B98A3A]/25 bg-[#D6A84F]/10 text-[#8E631F]"
                    : "border-[#6BAAC8]/25 bg-[#6BAAC8]/10 text-[#3F7897]"
                }`}
              >
                <ArrowUpRight
                  size={14}
                  className="sm:h-[18px] sm:w-[18px]"
                />
              </motion.div>
            </div>

            <p className="mt-2 line-clamp-2 text-[8px] leading-3.5 text-[#17130E]/45 min-[360px]:text-[9px] sm:mt-4 sm:text-xs sm:leading-5">
              {business.description}
            </p>

            {/* Enter bar */}

            <div className="mt-3 flex items-center justify-between border-t border-black/[0.06] pt-3 min-[360px]:mt-3.5 sm:mt-5 sm:pt-4">
              <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                  }}
                  className={`h-1 w-1 shrink-0 rounded-full sm:h-1.5 sm:w-1.5 ${
                    isBiryani
                      ? "bg-[#B98A3A]"
                      : "bg-[#5A9ABD]"
                  }`}
                />

                <span className="truncate text-[6px] font-bold uppercase tracking-[0.08em] text-[#17130E]/40 min-[360px]:text-[7px] sm:text-[9px] sm:tracking-[0.2em]">
                  Click to Enter
                </span>
              </div>

              <motion.div
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="flex shrink-0 items-center gap-0.5 text-[6px] font-bold uppercase tracking-[0.08em] text-[#17130E]/45 min-[360px]:text-[7px] sm:gap-1 sm:text-[9px] sm:tracking-[0.18em]"
              >
                Explore
                <ChevronRight
                  size={10}
                  className="sm:h-[13px] sm:w-[13px]"
                />
              </motion.div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   BRAND INTRO
========================================================= */

function BrandIntro({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#F4EFE6]"
        >
          {/* Glow */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="absolute h-[320px] w-[320px] rounded-full bg-[#D6A84F]/15 blur-[100px] sm:h-[500px] sm:w-[500px]"
          />

          {/* Rings */}

          <div className="absolute flex items-center justify-center">
            <OrbitRing size={270} />

            <OrbitRing
              size={330}
              reverse
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-dotted border-[#B68A3A]/10"
            />
          </div>

          {/* Logo */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.2,
              rotate: -15,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10"
          >
            <motion.img
              src="/logo/buntysheth.png"
              alt="Buntysheth"
              className="h-[250px] w-[250px] object-contain drop-shadow-[0_30px_70px_rgba(80,55,20,0.2)] sm:h-[350px] sm:w-[350px]"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Shine */}

            <motion.div
              initial={{
                x: "-130%",
              }}
              animate={{
                x: "130%",
              }}
              transition={{
                duration: 1.7,
                delay: 1,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-16 skew-x-[-20deg] bg-white/40 blur-xl"
            />
          </motion.div>

          {/* Intro text */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
            className="absolute bottom-[11%] text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles
                size={11}
                className="text-[#A6792A]"
              />

              <p className="text-[9px] font-bold uppercase tracking-[0.42em] text-[#94702E]">
                Welcome to
              </p>

              <Sparkles
                size={11}
                className="text-[#A6792A]"
              />
            </div>

            <p className="mt-2 font-serif text-lg font-bold text-[#211A11]">
              BB Group of Businesses
            </p>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 90,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="mx-auto mt-3 h-px bg-gradient-to-r from-transparent via-[#B98A3A] to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const [intro, setIntro] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);

  /* =======================================================
     PAGE PARALLAX
  ======================================================= */

  const pageX = useMotionValue(0);
  const pageY = useMotionValue(0);

  const smoothPageX = useSpring(pageX, {
    stiffness: 80,
    damping: 25,
  });

  const smoothPageY = useSpring(pageY, {
    stiffness: 80,
    damping: 25,
  });

  const backgroundX = useTransform(
    smoothPageX,
    [-0.5, 0.5],
    [-15, 15]
  );

  const backgroundY = useTransform(
    smoothPageY,
    [-0.5, 0.5],
    [-10, 10]
  );

  const handlePageMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    pageX.set(x);
    pageY.set(y);
  };

  const resetPage = () => {
    pageX.set(0);
    pageY.set(0);
  };

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntro(false);
    }, 2800);

    const cardsTimer = setTimeout(() => {
      setCardsVisible(true);
    }, 2400);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(cardsTimer);
    };
  }, []);

  return (
    <main
      onMouseMove={handlePageMouseMove}
      onMouseLeave={resetPage}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#F4EFE6] text-[#17130E]"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}

      <BrandIntro visible={intro} />

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="pointer-events-none absolute -inset-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF5] via-[#F4EFE6] to-[#E8DDCC]" />

        {/* Gold light */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[18%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D6A84F]/10 blur-[130px]"
        />

        {/* Warm light */}

        <motion.div
          animate={{
            x: [-30, 30, -30],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-[40%] h-[360px] w-[360px] rounded-full bg-[#C7833C]/10 blur-[120px]"
        />

        {/* Aqua light */}

        <motion.div
          animate={{
            x: [30, -30, 30],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-[5%] h-[360px] w-[360px] rounded-full bg-[#65A5C4]/10 blur-[120px]"
        />

        {/* Fine grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(80,60,30,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(80,60,30,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(90,65,30,0.08)_100%)]" />
      </motion.div>

      {/* =====================================================
          BACKGROUND MOTION
      ====================================================== */}

      <Particles />

      <FallingBottles />

      <WaterOrbs />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 min-h-[100svh] px-4 sm:px-8">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={
            cardsVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
          className="mx-auto flex max-w-6xl items-center justify-between pt-5 sm:pt-9"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.05,
              }}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[#B98A3A]/20 bg-white/65 p-1.5 shadow-[0_10px_30px_rgba(70,50,20,0.08)] backdrop-blur-xl sm:h-11 sm:w-11"
            >
              <img
                src="/logo/buntysheth.png"
                alt="Buntysheth"
                className="h-full w-full object-contain"
              />
            </motion.div>

            <div>
              <p className="text-[6px] font-semibold uppercase tracking-[0.22em] text-[#9A742F] sm:text-[8px] sm:tracking-[0.3em]">
                Welcome to
              </p>

              <p className="font-serif text-[11px] font-bold text-[#201A12] sm:text-base">
                BB Group of Businesses
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-black/[0.07] bg-white/55 px-4 py-2 shadow-sm backdrop-blur-xl sm:flex">
            <Sparkles
              size={12}
              className="text-[#A6792A]"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#201A12]/40">
              Business Portfolio
            </span>
          </div>
        </motion.header>

        {/* =================================================
            TITLE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.96,
          }}
          animate={
            cardsVisible
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-3xl px-1 pt-9 text-center sm:pt-14"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <motion.span
              initial={{
                width: 0,
              }}
              animate={
                cardsVisible
                  ? {
                      width: 28,
                    }
                  : {}
              }
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="h-px bg-[#B98A3A]/40 sm:w-[45px]"
            />

            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#9A742F] sm:text-[9px] sm:tracking-[0.4em]">
              One Vision · Multiple Businesses
            </span>

            <motion.span
              initial={{
                width: 0,
              }}
              animate={
                cardsVisible
                  ? {
                      width: 28,
                    }
                  : {}
              }
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="h-px bg-[#B98A3A]/40 sm:w-[45px]"
            />
          </div>

          <h1 className="mt-3 font-serif text-[2rem] font-black leading-[0.86] tracking-[-0.065em] text-[#201A12] min-[360px]:text-[2.25rem] sm:mt-4 sm:text-6xl md:text-7xl lg:text-8xl">
            BB GROUP
            <span className="block bg-gradient-to-r from-[#815816] via-[#D6A84F] to-[#815816] bg-clip-text text-transparent">
              OF BUSINESSES
            </span>
          </h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={
              cardsVisible
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.65,
            }}
            className="mx-auto mt-3 max-w-[290px] text-[9px] leading-4 text-[#201A12]/40 min-[360px]:text-[10px] sm:mt-5 sm:max-w-lg sm:text-sm sm:leading-6"
          >
            Explore the businesses, experiences and vision
            behind the BB brand.
          </motion.p>
        </motion.div>

        {/* =================================================
            CONNECTOR
        ================================================== */}

        <div className="relative mx-auto mt-5 hidden h-8 max-w-4xl items-center justify-center sm:flex">
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={
              cardsVisible
                ? {
                    width: "70%",
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.7,
              duration: 1,
            }}
            className="h-px bg-gradient-to-r from-transparent via-[#B98A3A]/30 to-transparent"
          />

          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="absolute h-2 w-2 rounded-full bg-[#B98A3A] shadow-[0_0_15px_rgba(185,138,58,0.5)]"
          />
        </div>

        {/* =================================================
            BUSINESS CARDS
            MOBILE = SIDE BY SIDE
        ================================================== */}

        <div className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-2 gap-2.5 pb-7 min-[360px]:gap-3 sm:mt-4 sm:gap-8 sm:pb-10">
          {businesses.map((business, index) => (
            <BusinessCard
              key={business.id}
              business={business}
              index={index}
              visible={cardsVisible}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={
            cardsVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 1.2,
          }}
          className="pb-5 text-center sm:pb-6"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white/40 px-3 py-1.5 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2">
            <MousePointer2
              size={9}
              className="text-[#9A742F] sm:h-[11px] sm:w-[11px]"
            />

            <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-[#201A12]/35 sm:text-[8px] sm:tracking-[0.28em]">
              Select a business to continue
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/biryani"
        element={<Biryani />}
      />

      <Route
        path="/aqua"
        element={<Aqua />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}