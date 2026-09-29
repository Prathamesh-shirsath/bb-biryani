import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import {
  ArrowUp,
  ArrowUpRight,
  Droplets,
  ExternalLink,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  {
    key: "home",
    href: "#aqua-home",
  },
  {
    key: "about",
    href: "#about",
  },
  {
    key: "products",
    href: "#products",
  },
  {
    key: "customBottles",
    href: "#custom-bottles",
  },
  {
    key: "process",
    href: "#process",
  },
  {
    key: "gallery",
    href: "#gallery",
  },
  {
    key: "contact",
    href: "#contact",
  },
];

function LinkedInIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7.01 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.96 2.15-2.96 1.85 0 1.87 1.72 1.87 3.05V20h3.38v-6.59Z" />
    </svg>
  );
}

export default function AquaFooter() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#031B2A]
        text-white
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
            duration: 16,
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
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
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
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            TOP CTA
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
            -translate-y-8
            rounded-[2rem]
            border
            border-cyan-300/20
            bg-cyan-300
            p-6
            text-[#031B2A]
            shadow-[0_25px_80px_rgba(34,211,238,0.12)]
            sm:-translate-y-10
            sm:p-8
            lg:p-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-[#16445B]
                  sm:text-xs
                "
              >
                {t("aqua.footer.cta.eyebrow", {
                  defaultValue: "Custom Bottle Branding",
                })}
              </p>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {t("aqua.footer.cta.title", {
                  defaultValue: "Your Brand. On Every Bottle.",
                })}
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#16445B]
                "
              >
                {t("aqua.footer.cta.description", {
                  defaultValue:
                    "Ready to turn your bottle into a part of your brand experience?",
                })}
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
                bg-[#031B2A]
                px-6
                text-sm
                font-black
                text-white
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:w-auto
              "
            >
              {t("aqua.footer.cta.button", {
                defaultValue: "Start Branding",
              })}

              <ExternalLink className="h-4 w-4 text-cyan-300" />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            pb-12
            pt-2
            sm:pb-14
            lg:grid-cols-[1.2fr_0.8fr_0.8fr]
            lg:gap-12
          "
        >
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-300/15
                  bg-cyan-300/10
                "
              >
                <Droplets className="h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <p className="text-xs font-black tracking-[0.18em] text-cyan-300">
                  BB AQUA
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  {t("aqua.footer.brand.tagline", {
                    defaultValue: "Pure. Fresh. Trusted.",
                  })}
                </p>
              </div>
            </div>

            <h3
              className="
                mt-7
                text-3xl
                font-black
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              {t("aqua.footer.brand.heading.first", {
                defaultValue: "Water That",
              })}

              <span className="block text-cyan-300">
                {t("aqua.footer.brand.heading.second", {
                  defaultValue: "Carries Your Brand.",
                })}
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-slate-400
              "
            >
              {t("aqua.footer.brand.description", {
                defaultValue:
                  "BB Aqua brings together branded drinking water and Custom Bottle Branding for businesses, events and special occasions.",
              })}
            </p>

            {/* Contact */}

            <div className="mt-6 space-y-3">
              <a
                href="tel:+917038925137"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-slate-300
                  transition-colors
                  hover:text-cyan-300
                "
              >
                <Phone className="h-4 w-4 text-cyan-300" />
                +91 7038925137
              </a>

              <a
                href="https://wa.me/917038925137"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-slate-300
                  transition-colors
                  hover:text-cyan-300
                "
              >
                <MessageCircle className="h-4 w-4 text-cyan-300" />

                {t("aqua.footer.contact.whatsapp", {
                  defaultValue: "WhatsApp BB Aqua",
                })}
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              {t("aqua.footer.explore.title", {
                defaultValue: "Explore",
              })}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {quickLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-white
                  "
                >
                  {t(`aqua.footer.links.${link.key}`, {
                    defaultValue:
                      link.key === "home"
                        ? "Home"
                        : link.key === "about"
                          ? "About"
                          : link.key === "products"
                            ? "Products"
                            : link.key === "customBottles"
                              ? "Custom Bottles"
                              : link.key === "process"
                                ? "Process"
                                : link.key === "gallery"
                                  ? "Gallery"
                                  : "Contact",
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Group */}

          <div>
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              {t("aqua.footer.group.title", {
                defaultValue: "BB Group",
              })}
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="/"
                className="
                  block
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-4
                  transition-all
                  hover:border-cyan-300/20
                  hover:bg-white/[0.06]
                "
              >
                <p className="text-sm font-black text-white">
                  BB GROUP OF BUSINESSES
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {t("aqua.footer.group.exploreBusinesses", {
                    defaultValue: "Explore all businesses",
                  })}
                </p>
              </a>

              <a
                href="/biryani"
                className="
                  block
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-4
                  transition-all
                  hover:border-cyan-300/20
                  hover:bg-white/[0.06]
                "
              >
                <p className="text-sm font-black text-white">
                  BB BIRYANI
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {t("aqua.footer.group.biryaniTagline", {
                    defaultValue:
                      "Authentic Taste. Royal Experience.",
                  })}
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()}{" "}
              {t("aqua.footer.bottom.copyright", {
                defaultValue:
                  "BB GROUP OF BUSINESSES. All rights reserved.",
              })}
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
              BB Aqua · BB Biryani
            </p>
          </div>

          {/* Made By */}

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>Made by</span>

            <span
              className="text-base"
              aria-hidden="true"
            >
              ❤️
            </span>

            <a
              href="https://www.linkedin.com/in/prathamesh-shirsath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prathamesh Shirsath LinkedIn Profile"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-semibold
                text-cyan-300
                transition
                duration-300
                hover:text-white
              "
            >
              <span
                className="
                  grid
                  h-6
                  w-6
                  place-items-center
                  rounded-md
                  bg-[#0A66C2]
                  text-white
                  shadow-[0_5px_15px_rgba(10,102,194,0.25)]
                  transition
                  duration-300
                  group-hover:scale-110
                "
              >
                <LinkedInIcon size={14} />
              </span>

              <span className="underline-offset-4 group-hover:underline">
                Prathamesh Shirsath
              </span>

              <ArrowUpRight
                size={13}
                className="
                  transition
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* Back To Top */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              self-start
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-cyan-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-300/30
              hover:bg-cyan-300/10
              sm:self-auto
            "
            aria-label={t("aqua.footer.bottom.backToTop", {
              defaultValue: "Back to top",
            })}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}