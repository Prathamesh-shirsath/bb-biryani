import { motion } from "motion/react";
import {
  ArrowRight,
  Droplets,
  Eye,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: "01",
    nameKey: "aqua.products.items.aqua.name",
    subtitleKey: "aqua.products.items.aqua.subtitle",
    descriptionKey: "aqua.products.items.aqua.description",
    image: "/aqua/bottle.png",
  },
  {
    id: "02",
    nameKey: "aqua.products.items.brand.name",
    subtitleKey: "aqua.products.items.brand.subtitle",
    descriptionKey: "aqua.products.items.brand.description",
    image: "/aqua/brand.png",
  },
  {
    id: "03",
    nameKey: "aqua.products.items.event.name",
    subtitleKey: "aqua.products.items.event.subtitle",
    descriptionKey: "aqua.products.items.event.description",
    image: "/aqua/event.png",
  },
];

export default function AquaProducts() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20
        text-[#06283D]
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
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-cyan-200/30
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
            bottom-10
            h-96
            w-96
            rounded-full
            bg-sky-200/30
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#06283D 1px, transparent 1px), linear-gradient(90deg, #06283D 1px, transparent 1px)",
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
              border-cyan-100
              bg-cyan-50
              px-4
              py-2
            "
          >
            <Droplets className="h-4 w-4 text-cyan-600" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-cyan-700
                sm:text-xs
              "
            >
              {t("aqua.products.eyebrow", {
                defaultValue: "BB Aqua Collection",
              })}
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
            {t("aqua.products.heading.first", {
              defaultValue: "Water.",
            })}

            <span className="block text-cyan-600">
              {t("aqua.products.heading.second", {
                defaultValue: "Presented Your Way.",
              })}
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            {t("aqua.products.description", {
              defaultValue:
                "Explore BB Aqua branded water and bottle branding options designed for businesses, events and special occasions.",
            })}
          </p>
        </motion.div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {products.map((product, index) => (
            <motion.article
              key={product.id}
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
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                shadow-[0_20px_70px_rgba(6,40,61,0.08)]
                transition-shadow
                duration-500
                hover:shadow-[0_30px_90px_rgba(6,40,61,0.14)]
              "
            >
              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-cyan-200/30
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  PRODUCT IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  h-[320px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gradient-to-b
                  from-[#EFFBFF]
                  to-[#DDF5FC]
                  sm:h-[360px]
                "
              >
                {/* Decorative rings */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-56
                    w-56
                    rounded-full
                    border
                    border-dashed
                    border-cyan-500/15
                  "
                />

                <div
                  className="
                    absolute
                    h-40
                    w-40
                    rounded-full
                    bg-cyan-300/20
                    blur-3xl
                  "
                />

                {/* Product number */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    rounded-full
                    border
                    border-white/80
                    bg-white/75
                    px-3
                    py-1.5
                    text-[10px]
                    font-black
                    tracking-[0.18em]
                    text-cyan-700
                    backdrop-blur-xl
                  "
                >
                  {product.id}
                </div>

                {/* Bottle */}

                <motion.img
                  src={product.image}
                  alt={t(product.nameKey, {
                    defaultValue:
                      index === 0
                        ? "BB Aqua"
                        : index === 1
                          ? "Brand Bottle"
                          : "Event Bottle",
                  })}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="
                    relative
                    z-10
                    h-[270px]
                    w-[150px]
                    object-contain
                    drop-shadow-[0_25px_25px_rgba(6,40,61,0.2)]
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:h-[300px]
                    sm:w-[165px]
                  "
                />

                {/* Bottom reflection */}

                <div
                  className="
                    absolute
                    bottom-8
                    h-5
                    w-28
                    rounded-full
                    bg-cyan-900/10
                    blur-xl
                  "
                />

                {/* View badge */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-20
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/70
                    bg-white/80
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    text-[#06283D]
                    opacity-100
                    backdrop-blur-xl
                    sm:opacity-0
                    sm:transition-opacity
                    sm:duration-300
                    sm:group-hover:opacity-100
                  "
                >
                  <Eye className="h-3.5 w-3.5 text-cyan-600" />

                  {t("aqua.products.explore", {
                    defaultValue: "Explore",
                  })}
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10 p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-600" />

                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-cyan-600
                    "
                  >
                    {t(product.subtitleKey, {
                      defaultValue:
                        index === 0
                          ? "Branded Water"
                          : index === 1
                            ? "Custom Bottle Branding"
                            : "Event Branding",
                    })}
                  </p>
                </div>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    tracking-tight
                    text-[#06283D]
                  "
                >
                  {t(product.nameKey, {
                    defaultValue:
                      index === 0
                        ? "BB Aqua"
                        : index === 1
                          ? "Brand Bottle"
                          : "Event Bottle",
                  })}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  {t(product.descriptionKey, {
                    defaultValue:
                      index === 0
                        ? "BB Aqua branded drinking water presented with a clean and professional identity."
                        : index === 1
                          ? "Present your logo and brand identity on bottles created for your business or event."
                          : "A professional bottle branding option for weddings, events, functions and special occasions.",
                  })}
                </p>

                <a
                  href="#custom-bottles"
                  className="
                    mt-6
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-100
                    bg-cyan-50
                    text-xs
                    font-black
                    text-cyan-700
                    transition-all
                    duration-300
                    hover:border-cyan-200
                    hover:bg-cyan-100
                  "
                >
                  {t("aqua.products.exploreBranding", {
                    defaultValue: "Explore Branding",
                  })}

                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            rounded-[2rem]
            border
            border-cyan-100
            bg-[#F0FBFF]
            p-6
            text-center
            sm:mt-14
            sm:p-8
          "
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
            {t("aqua.products.bottomCta.eyebrow", {
              defaultValue: "Need Branding?",
            })}
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
            {t("aqua.products.bottomCta.heading", {
              defaultValue: "Put Your Brand On Every Bottle.",
            })}
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            {t("aqua.products.bottomCta.description", {
              defaultValue:
                "Share your branding requirement and explore the possibilities with BB Aqua.",
            })}
          </p>

          <a
            href="#custom-bottles"
            className="
              mt-6
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
              shadow-lg
              transition-transform
              duration-300
              hover:-translate-y-1
              sm:w-auto
            "
          >
            {t("aqua.products.bottomCta.button", {
              defaultValue: "Start Bottle Branding",
            })}

            <ArrowRight className="h-4 w-4 text-cyan-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}