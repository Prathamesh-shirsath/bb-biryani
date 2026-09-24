import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Flame,
  Leaf,
  Sparkles,
  Utensils,
} from "lucide-react";

const menuCategories = {
  veg: {
    label: "VEG",
    marathi: "व्हेज",
    icon: Leaf,
    accent: "green",
    items: [
      {
        id: "veg-1",
        name: "Veg Dum Biryani",
        marathi: "व्हेज दम बिर्याणी",
        price: "₹120",
        size: "Full",
        image: "/biryani/veg.png",
        featured: true,
      },
      {
        id: "veg-2",
        name: "Veg Rice",
        marathi: "व्हेज राईस",
        price: "₹80 / ₹140",
        size: "Half / Full",
        image: "/biryani/rice.png",
      },
      {
        id: "veg-3",
        name: "Veg Noodles",
        marathi: "व्हेज नूडल्स",
        price: "₹80 / ₹140",
        size: "Half / Full",
        image: "/biryani/noodles.png",
      },
      {
        id: "veg-4",
        name: "Veg Triple Rice",
        marathi: "व्हेज ट्रिपल राईस",
        price: "₹130 / ₹230",
        size: "Half / Full",
        image: "/biryani/triple_rice.png",
      },
      {
        id: "veg-5",
        name: "Veg Triple Noodles",
        marathi: "व्हेज ट्रिपल नूडल्स",
        price: "₹130 / ₹230",
        size: "Half / Full",
        image: "/biryani/triple_noodles.png",
      },
      {
        id: "veg-6",
        name: "Veg Soup",
        marathi: "व्हेज सूप",
        price: "₹70",
        size: "Full",
        image: "/biryani/soup.png",
      },
      {
        id: "veg-7",
        name: "Veg Manchurian",
        marathi: "व्हेज मंचुरियन",
        price: "₹100 / ₹180",
        size: "Half / Full",
        image: "/biryani/munchuriyan.png",
      },
      {
        id: "veg-8",
        name: "Soyabean Chilli",
        marathi: "सोयाबीन चिली",
        price: "₹100 / ₹180",
        size: "Half / Full",
        image: "/biryani/soyabean_chili.png",
      },
      {
        id: "veg-9",
        name: "Paneer Chilli",
        marathi: "पनीर चिली",
        price: "₹120 / ₹220",
        size: "Half / Full",
        image: "/biryani/paneer_chilli.png",
      },
      
    ],
  },

  nonVeg: {
    label: "NON-VEG",
    marathi: "नॉनव्हेज",
    icon: Utensils,
    accent: "red",
    items: [
      {
        id: "nonveg-1",
        name: "Chicken Dum Biryani",
        marathi: "चिकन दम बिर्याणी",
        price: "₹130",
        size: "Full",
        image: "/biryani/chicken.png",
        featured: true,
      },
      {
        id: "nonveg-2",
        name: "Chicken Rice",
        marathi: "चिकन राईस",
        price: "₹80 / ₹140",
        size: "Half / Full",
        image: "/biryani/chicken.png",
      },
      {
        id: "nonveg-3",
        name: "Chicken Noodles",
        marathi: "चिकन नूडल्स",
        price: "₹80 / ₹140",
        size: "Half / Full",
        image: "/biryani/chicken_noodles.png",
      },
      {
        id: "nonveg-4",
        name: "Chicken Soup",
        marathi: "चिकन सूप",
        price: "₹80",
        size: "Full",
        image: "/biryani/chicken_soup.png",
      },
      {
        id: "nonveg-5",
        name: "Chicken Triple Rice",
        marathi: "चिकन ट्रिपल राईस",
        price: "₹130 / ₹230",
        size: "Half / Full",
        image: "/biryani/chicken_triple_rice.png",
      },
      {
        id: "nonveg-6",
        name: "Chicken Triple Noodles",
        marathi: "चिकन ट्रिपल नूडल्स",
        price: "₹130 / ₹230",
        size: "Half / Full",
        image: "/biryani/chicken_triple_noodles.png",
      },
      {
        id: "nonveg-7",
        name: "Chicken Lollipop",
        marathi: "चिकन लॉलीपॉप",
        price: "₹100 / ₹180",
        size: "Half / Full",
        image: "/biryani/lollipop.png",
      },
      {
        id: "nonveg-8",
        name: "Chicken Masala Lollipop",
        marathi: "चिकन मसाला लॉलीपॉप",
        price: "₹130 / ₹230",
        size: "Half / Full",
        image: "/biryani/masala_lollipop.png",
      },
      {
        id: "nonveg-9",
        name: "Chicken Chilli",
        marathi: "चिकन चिली",
        price: "₹130 / ₹230",
        size: "Half / Full",
        image: "/biryani/chicken_chilli.png",
      },
      {
        id: "nonveg-10",
        name: "Chicken 65",
        marathi: "चिकन 65",
        price: "₹100 / ₹180",
        size: "Half / Full",
        image: "/biryani/chicken65.png",
      },
      {
        id: "nonveg-11",
        name: "BB Fried Chicken",
        marathi: "BB फ्राईड चिकन",
        price: "₹100 / ₹180",
        size: "Half / Full",
        image: "/biryani/fried_chicken.png",
        featured: true,
      },
    ],
  },
};

function MenuCard({ item, index }) {
  const [active, setActive] = useState(false);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={() => setActive(!active)}
      className="group relative min-w-0 cursor-pointer"
    >
      {/* Card aura */}

      <motion.div
        animate={{
          opacity: active ? 0.7 : 0,
          scale: active ? 1 : 0.9,
        }}
        className="
          absolute
          -inset-2
          rounded-[28px]
          bg-[#D97706]/20
          blur-2xl
        "
      />

      <div
        className={`
          relative
          overflow-hidden
          rounded-[22px]
          border
          bg-[#100B08]
          transition-all
          duration-500
          sm:rounded-[28px]
          ${
            active
              ? "border-[#D6A84F]/50 shadow-[0_25px_70px_rgba(214,168,79,0.14)]"
              : "border-white/[0.07] shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
          }
        `}
      >
        {/* Animated border */}

        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            top-0
            z-30
            h-px
            w-1/2
            bg-gradient-to-r
            from-transparent
            via-[#F5D58A]
            to-transparent
          "
        />

        {/* IMAGE */}

        <div
          className="
            relative
            aspect-[1.08]
            overflow-hidden
            bg-gradient-to-br
            from-[#211207]
            via-[#110A06]
            to-[#080604]
          "
        >
          {/* radial spotlight */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[120px]
              w-[120px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D97706]
              blur-[55px]
              sm:h-[200px]
              sm:w-[200px]
              sm:blur-[80px]
            "
          />

          {/* Decorative circle */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[70%]
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-[#D6A84F]/15
            "
          />

          {/* second circle */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[53%]
              w-[53%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#D6A84F]/10
            "
          />

          {/* Number */}

          <span
            className="
              absolute
              left-3
              top-3
              z-30
              font-serif
              text-[10px]
              font-bold
              tracking-widest
              text-white/25
              sm:left-4
              sm:top-4
              sm:text-xs
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Featured */}

          {item.featured && (
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                absolute
                right-3
                top-3
                z-30
                flex
                items-center
                gap-1
                rounded-full
                border
                border-[#D6A84F]/30
                bg-black/70
                px-2
                py-1
                backdrop-blur-xl
                sm:right-4
                sm:top-4
                sm:px-3
                sm:py-1.5
              "
            >
              <Flame
                size={9}
                className="text-[#D6A84F]"
              />

              <span className="text-[6px] font-bold uppercase tracking-wider text-[#D6A84F] sm:text-[8px]">
                Special
              </span>
            </motion.div>
          )}

          {/* FOOD */}

          <motion.img
            src={item.image}
            alt={item.name}
            draggable="false"
            loading="lazy"
            className="
              relative
              z-10
              h-full
              w-full
              object-contain
              drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)]
              transition-transform
              duration-700
              group-hover:scale-[1.1]
            "
            animate={{
              y: active ? -7 : [0, -3, 0],
            }}
            transition={{
              duration: active ? 0.4 : 4,
              repeat: active ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Moving light */}

          <motion.div
            animate={{
              x: ["-130%", "130%"],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              z-20
              w-[30%]
              -skew-x-12
              bg-gradient-to-r
              from-transparent
              via-white/[0.1]
              to-transparent
            "
          />

          {/* Bottom fade */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-20
              h-20
              bg-gradient-to-t
              from-[#100B08]
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}

        <div className="relative z-30 p-3.5 sm:p-5">
          <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[#D6A84F]/60 sm:text-[9px]">
            BB Kitchen
          </p>

          <h3
            className="
              mt-1.5
              font-serif
              text-[14px]
              font-bold
              leading-tight
              text-white
              sm:text-xl
            "
          >
            {item.name}
          </h3>

          <p className="mt-1 text-[8px] text-white/30 sm:text-[10px]">
            {item.marathi}
          </p>

          <div className="my-3 h-px bg-white/[0.07]" />

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[7px] uppercase tracking-wider text-white/20 sm:text-[8px]">
                {item.size}
              </p>

              <motion.p
                animate={{
                  scale: active ? 1.06 : 1,
                  color: active ? "#F5D58A" : "#D6A84F",
                }}
                className="mt-0.5 text-base font-black sm:text-xl"
              >
                {item.price}
              </motion.p>
            </div>

            <motion.div
              animate={{
                rotate: active ? 45 : 0,
                scale: active ? 1.1 : 1,
              }}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#D6A84F]/25
                bg-[#D6A84F]/10
                text-[#D6A84F]
                sm:h-10
                sm:w-10
              "
            >
              <ArrowUpRight
                size={15}
                className="sm:h-[18px] sm:w-[18px]"
              />
            </motion.div>
          </div>

          {/* Mobile reveal */}

          <AnimatePresence>
            {active && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                className="overflow-hidden"
              >
                <div className="mt-3 flex items-center gap-2 border-t border-white/[0.06] pt-3">
                  <Sparkles
                    size={11}
                    className="text-[#D6A84F]"
                  />

                  <span className="text-[8px] uppercase tracking-wider text-white/30">
                    Freshly prepared at BB
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const [category, setCategory] = useState("veg");

  const current = menuCategories[category];
  const CategoryIcon = current.icon;

  const featured = current.items[0];
  const remaining = current.items.slice(1);

  return (
    <section
      id="menu"
      className="
        relative
        overflow-hidden
        bg-[#080604]
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
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[8%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#D97706]
          blur-[130px]
          sm:h-[600px]
          sm:w-[600px]
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[45%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#D6A84F]/[0.07]
          blur-[120px]
          sm:h-[550px]
          sm:w-[550px]
        "
      />

      {/* luxury grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(214,168,79,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,79,0.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="bb-container relative z-10">
        {/* ===================================================
            HEADING
        ==================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D6A84F] sm:w-14" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles
                size={14}
                className="text-[#D6A84F]"
              />
            </motion.div>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D6A84F] sm:w-14" />
          </div>

          <p className="mt-4 bb-eyebrow">
            BB BIRYANI
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-[2.7rem]
              font-black
              leading-[0.85]
              tracking-[-0.06em]
              text-white
              min-[360px]:text-[3rem]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Taste The
            <span className="block bg-gradient-to-r from-[#FFF0B8] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              Difference
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[340px] text-[12px] leading-5 text-white/35 sm:max-w-xl sm:text-sm sm:leading-6">
            A carefully crafted collection of flavours,
            prepared fresh and served with the BB touch.
          </p>
        </motion.div>

        {/* ===================================================
            CATEGORY SWITCH
        ==================================================== */}

        <div className="mx-auto mt-9 max-w-[380px] sm:mt-12">
          <div className="relative flex rounded-full border border-white/[0.08] bg-white/[0.025] p-1 backdrop-blur-xl">
            {Object.entries(menuCategories).map(
              ([key, value]) => {
                const active = category === key;
                const Category = value.icon;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCategory(key)}
                    className="
                      relative
                      z-10
                      flex
                      min-h-[50px]
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      active:scale-95
                    "
                  >
                    {active && (
                      <motion.div
                        layoutId="active-menu-tab"
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-[#F2CF78]
                          via-[#D6A84F]
                          to-[#A66A16]
                          shadow-[0_10px_35px_rgba(214,168,79,0.2)]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}

                    <span
                      className={`
                        relative
                        flex
                        items-center
                        gap-2
                        ${
                          active
                            ? "text-black"
                            : "text-white/40"
                        }
                      `}
                    >
                      <Category size={15} />
                      {value.label}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* ===================================================
            CATEGORY TITLE
        ==================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -15,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mt-7 flex items-center justify-center gap-2"
          >
            <CategoryIcon
              size={14}
              className={
                category === "veg"
                  ? "text-green-500"
                  : "text-red-500"
              }
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              {current.items.length} dishes •{" "}
              {current.marathi}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ===================================================
            FEATURED DISH
        ==================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-featured`}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 sm:mt-12"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#D6A84F]/15
                bg-gradient-to-br
                from-[#1B1109]
                via-[#100A07]
                to-[#090604]
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                sm:rounded-[38px]
              "
            >
              {/* featured glow */}

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D97706]/15 blur-[90px]" />

              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* image */}

                <div className="relative flex aspect-[1.15] items-center justify-center overflow-hidden lg:aspect-auto lg:min-h-[470px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.12, 0.25, 0.12],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="absolute h-[230px] w-[230px] rounded-full bg-[#D97706] blur-[80px] sm:h-[340px] sm:w-[340px]"
                  />

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-[72%] w-[72%] rounded-full border border-dashed border-[#D6A84F]/15"
                  />

                  <motion.img
                    src={featured.image}
                    alt={featured.name}
                    draggable="false"
                    className="
                      relative
                      z-10
                      w-[90%]
                      max-w-[460px]
                      object-contain
                      drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]
                    "
                    animate={{
                      y: [0, -9, 0],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="absolute bottom-4 left-4 rounded-full border border-[#D6A84F]/20 bg-black/60 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-[#D6A84F] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:text-[9px]">
                    BB Signature
                  </div>
                </div>

                {/* content */}

                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                  <div className="flex items-center gap-2">
                    <Flame
                      size={14}
                      className="text-[#D6A84F]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#D6A84F] sm:text-[10px]">
                      Chef's Special
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-3xl font-black leading-[0.95] text-white sm:text-5xl">
                    {featured.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#D6A84F]/70">
                    {featured.marathi}
                  </p>

                  <p className="mt-5 max-w-md text-xs leading-6 text-white/35 sm:text-sm">
                    Prepared with aromatic spices, premium
                    ingredients and the authentic BB touch.
                  </p>

                  <div className="mt-7 flex items-end justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-white/20">
                        {featured.size}
                      </p>

                      <p className="mt-1 text-3xl font-black text-[#D6A84F] sm:text-4xl">
                        {featured.price}
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D6A84F] text-black"
                    >
                      <ArrowUpRight size={19} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ===================================================
            REST OF MENU
        ==================================================== */}

        <motion.div
          layout
          className="
            mt-4
            grid
            grid-cols-2
            gap-3
            sm:mt-6
            sm:gap-5
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {remaining.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </motion.div>

        {/* ===================================================
            BOTTOM DECORATION
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto mt-14 flex max-w-2xl items-center gap-4"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D6A84F]/20" />

          <Sparkles
            size={14}
            className="text-[#D6A84F]/50"
          />

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            Fresh • Authentic • BB
          </span>

          <Sparkles
            size={14}
            className="text-[#D6A84F]/50"
          />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D6A84F]/20" />
        </motion.div>
      </div>
    </section>
  );
}