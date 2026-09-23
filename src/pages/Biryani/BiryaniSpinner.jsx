import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const dishes = [
  {
    name: "Chicken Biryani",
    image: "/biryani/chicken.png",
  },
  {
    name: "Veg Dum Biryani",
    image: "/biryani/veg.png",
  },
  {
    name: "Chicken Lolipop",
    image: "/biryani/lollipop.png",
  },
];

export default function BiryaniSpinner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % dishes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const dish = dishes[index];

  return (
    <div
      className="
        relative
        flex
        min-h-[250px]
        w-full
        items-center
        justify-center

        min-[360px]:min-h-[275px]

        sm:min-h-[350px]

        md:min-h-[400px]

        lg:min-h-[480px]
      "
    >
      {/* =====================================================
          MAIN FOOD GLOW
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          h-[160px]
          w-[160px]
          rounded-full
          bg-[#D97706]/40
          blur-[65px]

          min-[360px]:h-[180px]
          min-[360px]:w-[180px]

          sm:h-[260px]
          sm:w-[260px]
          sm:blur-[90px]

          lg:h-[340px]
          lg:w-[340px]
          lg:blur-[110px]
        "
      />

      {/* =====================================================
          GOLD INNER GLOW
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.14, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          h-[100px]
          w-[100px]
          rounded-full
          bg-[#D6A84F]
          blur-[55px]

          sm:h-[180px]
          sm:w-[180px]
          sm:blur-[80px]

          lg:h-[240px]
          lg:w-[240px]
          lg:blur-[100px]
        "
      />

      {/* =====================================================
          DISH
      ====================================================== */}

      <div
        className="relative z-10 flex w-full items-center justify-center"
        style={{
          perspective: "1400px",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={dish.name}
            initial={{
              opacity: 0,
              x: 45,
              rotateY: -90,
              rotateZ: -3,
              scale: 0.78,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -45,
              rotateY: 90,
              rotateZ: 3,
              scale: 0.78,
            }}
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              flex
              w-full
              items-center
              justify-center
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* =================================================
                PLATE SHADOW
            ================================================== */}

            <motion.div
              animate={{
                scaleX: [0.8, 1, 0.8],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[9%]
                h-6
                w-[52%]
                rounded-[50%]
                bg-black/70
                blur-xl

                sm:h-9
                sm:blur-2xl
              "
            />

            {/* =================================================
                BIRYANI IMAGE
            ================================================== */}

            <motion.img
              src={dish.image}
              alt={dish.name}
              draggable="false"
              loading="eager"
              className="
                relative
                z-10
                w-[74vw]
                max-w-[310px]
                select-none
                object-contain
                drop-shadow-[0_20px_25px_rgba(0,0,0,0.65)]

                min-[360px]:max-w-[335px]

                sm:w-[70vw]
                sm:max-w-[440px]
                sm:drop-shadow-[0_30px_35px_rgba(0,0,0,0.65)]

                md:max-w-[480px]

                lg:w-[520px]
                lg:max-w-[520px]
              "
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          DISH NAME
      ====================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${dish.name}`}
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -8,
            scale: 0.92,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            absolute
            bottom-0
            z-20
            rounded-full
            border
            border-[#D6A84F]/25
            bg-black/70
            px-3
            py-2
            shadow-[0_10px_30px_rgba(0,0,0,0.4)]
            backdrop-blur-xl

            min-[360px]:px-4

            sm:bottom-1
            sm:px-5
            sm:py-2.5
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F] shadow-[0_0_10px_rgba(214,168,79,0.8)]" />

            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#D6A84F]

                min-[360px]:text-[9px]

                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              {dish.name}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          DISH INDICATORS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-[-22px]
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-1.5

          sm:bottom-[-28px]
          sm:gap-2
        "
      >
        {dishes.map((item, itemIndex) => (
          <motion.span
            key={item.name}
            animate={{
              width: itemIndex === index ? 20 : 5,
              opacity: itemIndex === index ? 1 : 0.25,
            }}
            transition={{
              duration: 0.3,
            }}
            className="h-1 rounded-full bg-[#D6A84F]"
          />
        ))}
      </div>
    </div>
  );
}