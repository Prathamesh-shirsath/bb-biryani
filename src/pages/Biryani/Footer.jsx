import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const quickLinks = [
  {
    key: "home",
    label: "Home",
    href: "#home",
  },
  {
    key: "offer",
    label: "Today's Offer",
    href: "#offer",
  },
  {
    key: "menu",
    label: "Menu",
    href: "#menu",
  },
  {
    key: "about",
    label: "About",
    href: "#about",
  },
  {
    key: "franchise",
    label: "Franchise",
    href: "#franchise",
  },
  {
    key: "gallery",
    label: "Gallery",
    href: "#gallery",
  },
  {
    key: "contact",
    label: "Contact",
    href: "#enquiry",
  },
];

const branchInfo = {
  address:
    "Near Toll Plaza, Mhasne Phata, Nagar - Pune Highway, New MIDC Chowk, Supe, Maharashtra - 414301",

  phone: "+91 7038925137",

  timings: "10 AM - 11 PM",

  mapsUrl:
    "https://maps.app.goo.gl/ZNXzQ9i834E33THb7",

  email: "bantishethbiryaniwale@gmail.com",

  instagram:
    "https://www.instagram.com/bantisheth_12?stkn=bmppdWppY2Vzc2Np",

  youtube:
    "https://youtube.com/@bantishethbiryaniwale?si=IFpozO6f3tszIEK4",
};

/* ============================================================
   INSTAGRAM ICON
============================================================ */

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

/* ============================================================
   YOUTUBE ICON
============================================================ */

function YouTubeIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21.2 7.1C21 6.4 20.4 5.8 19.7 5.6C18.4 5.2 12 5.2 12 5.2C12 5.2 5.6 5.2 4.3 5.6C3.6 5.8 3 6.4 2.8 7.1C2.4 8.4 2.4 12 2.4 12C2.4 12 2.4 15.6 2.8 16.9C3 17.6 3.6 18.2 4.3 18.4C5.6 18.8 12 18.8 12 18.8C12 18.8 18.4 18.8 19.7 18.4C20.4 18.2 21 17.6 21.2 16.9C21.6 15.6 21.6 12 21.6 12C21.6 12 21.6 8.4 21.2 7.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M10 9L15 12L10 15V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#050403]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D6A84F]/[0.05] blur-[110px]" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#8B2E16]/[0.07] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(214,168,79,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214,168,79,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            MAIN FOOTER CONTENT
        ====================================================== */}

        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.75fr_0.75fr_1.2fr] lg:gap-10">
            {/* =================================================
                BRAND
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6A84F]/25 bg-[#D6A84F]/[0.06]">
                  <span className="font-serif text-xl font-black text-[#D6A84F]">
                    BB
                  </span>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-1 rounded-xl border border-dashed border-[#D6A84F]/10"
                  />
                </div>

                <div>
                  <p className="font-serif text-lg font-bold tracking-tight text-white">
                    BB Biryani
                  </p>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]/60">
                    BB Group of Businesses
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/35">
                {t("biryani.footer.description", {
                  defaultValue:
                    "Authentic taste. Royal experience. Bringing together quality ingredients, rich flavours and the BB standard of hospitality.",
                })}
              </p>

              {/* Brand Badge */}

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D6A84F]/15 bg-[#D6A84F]/[0.04] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F] shadow-[0_0_10px_rgba(214,168,79,0.7)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D6A84F]/70">
                  {t("biryani.footer.brandBadge", {
                    defaultValue:
                      "Taste • Quality • Trust",
                  })}
                </span>
              </div>

              {/* =================================================
                  SOCIAL MEDIA
              ================================================== */}

              <div className="mt-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
                  {t("biryani.footer.connect", {
                    defaultValue: "Connect With Us",
                  })}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  {/* Instagram */}

                  <motion.a
                    href={branchInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Instagram"
                    className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/45 transition duration-300 hover:border-[#D6A84F]/40 hover:bg-[#D6A84F]/10 hover:text-[#D6A84F]"
                  >
                    <InstagramIcon size={19} />
                  </motion.a>

                  {/* YouTube */}

                  <motion.a
                    href={branchInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="YouTube"
                    className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/45 transition duration-300 hover:border-[#D6A84F]/40 hover:bg-[#D6A84F]/10 hover:text-[#D6A84F]"
                  >
                    <YouTubeIcon size={19} />
                  </motion.a>

                  {/* Gmail */}

                  <motion.a
                    href={`mailto:${branchInfo.email}`}
                    aria-label="Email"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/45 transition duration-300 hover:border-[#D6A84F]/40 hover:bg-[#D6A84F]/10 hover:text-[#D6A84F]"
                  >
                    <Mail size={19} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                QUICK LINKS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                {t("biryani.footer.explore", {
                  defaultValue: "Explore",
                })}
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                {t("biryani.footer.quickLinks", {
                  defaultValue: "Quick Links",
                })}
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="group flex items-center gap-1 text-xs text-white/35 transition duration-300 hover:text-white"
                  >
                    <span>
                      {t(
                        `biryani.footer.links.${link.key}`,
                        {
                          defaultValue: link.label,
                        }
                      )}
                    </span>

                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                OUR BUSINESSES
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                {t("biryani.footer.businessesLabel", {
                  defaultValue: "Our Businesses",
                })}
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                {t("biryani.footer.groupName", {
                  defaultValue: "BB Group",
                })}
              </h3>

              <div className="mt-5 space-y-3">
                {/* BB Biryani */}

                <a
                  href="/biryani"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-[#D6A84F]/20 hover:bg-white/[0.04]"
                >
                  <div>
                    <p className="text-sm font-semibold text-white/75">
                      BB Biryani
                    </p>

                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-white/25">
                      {t("biryani.footer.businesses.biryani", {
                        defaultValue:
                          "Food & Hospitality",
                      })}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[#D6A84F] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                {/* BB Aqua */}

                <a
                  href="/aqua"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-[#D6A84F]/20 hover:bg-white/[0.04]"
                >
                  <div>
                    <p className="text-sm font-semibold text-white/75">
                      BB Aqua
                    </p>

                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-white/25">
                      {t("biryani.footer.businesses.aqua", {
                        defaultValue:
                          "Water & Manufacturing",
                      })}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[#D6A84F] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.div>

            {/* =================================================
                CONTACT + MAP
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                {t("biryani.footer.contactLabel", {
                  defaultValue: "Contact",
                })}
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                {t("biryani.footer.visitUs", {
                  defaultValue: "Visit Us",
                })}
              </h3>

              {/* =================================================
                  MAP CARD
              ================================================== */}

              <a
                href={branchInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-5 block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition duration-500 hover:border-[#D6A84F]/30 hover:bg-white/[0.05]"
              >
                <div className="relative h-32 overflow-hidden rounded-xl border border-white/[0.06] bg-[#11100d]">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        linear-gradient(30deg, transparent 45%, rgba(214,168,79,0.18) 46%, rgba(214,168,79,0.18) 47%, transparent 48%),
                        linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.08) 46%, rgba(255,255,255,0.08) 47%, transparent 48%),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize:
                        "90px 90px, 120px 120px, 28px 28px, 28px 28px",
                    }}
                  />

                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A84F]/10 blur-2xl" />

                  {/* Location Pin */}

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-[#D6A84F] shadow-[0_0_30px_rgba(214,168,79,0.4)]">
                        <MapPin
                          size={21}
                          className="text-[#171006]"
                          fill="currentColor"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Map Label */}

                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-lg border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
                    <span className="text-[9px] font-medium text-white/60">
                      BB Biryani
                    </span>

                    <ExternalLink
                      size={12}
                      className="text-[#D6A84F]"
                    />
                  </div>
                </div>

                {/* Address */}

                <div className="mt-4 flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#D6A84F]"
                  />

                  <p className="break-words text-xs leading-5 text-white/40 transition group-hover:text-white/65">
                    {branchInfo.address}
                  </p>
                </div>

                {/* Directions */}

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D6A84F]/70">
                    {t("biryani.footer.getDirections", {
                      defaultValue: "Get Directions",
                    })}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[#D6A84F] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+917038925137"
                className="mt-4 flex items-center gap-3 text-xs text-white/40 transition duration-300 hover:text-white"
              >
                <Phone
                  size={15}
                  className="text-[#D6A84F]"
                />

                {branchInfo.phone}
              </a>

              {/* Email */}

              <a
                href={`mailto:${branchInfo.email}`}
                className="mt-3 flex items-center gap-3 break-all text-xs text-white/40 transition duration-300 hover:text-white"
              >
                <Mail
                  size={15}
                  className="shrink-0 text-[#D6A84F]"
                />

                {branchInfo.email}
              </a>

              {/* Timing */}

              <div className="mt-3 flex items-center gap-3 text-xs text-white/40">
                <Sparkles
                  size={15}
                  className="shrink-0 text-[#D6A84F]"
                />

                <span>
                  {t("biryani.footer.openDaily", {
                    defaultValue: "Open daily",
                  })}{" "}
                  · {branchInfo.timings}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            FRANCHISE CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
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
          className="relative overflow-hidden rounded-2xl border border-[#D6A84F]/15 bg-gradient-to-r from-[#D6A84F]/[0.07] via-white/[0.025] to-[#8B2E16]/[0.06] p-5 sm:p-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D6A84F]/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                {t("biryani.footer.franchise.label", {
                  defaultValue: "Franchise Opportunities",
                })}
              </p>

              <h3 className="mt-2 font-serif text-xl font-bold text-white sm:text-2xl">
                {t("biryani.footer.franchise.title", {
                  defaultValue:
                    "Build the next BB destination.",
                })}
              </h3>
            </div>

            <motion.a
              href="#enquiry"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#D6A84F] px-6 py-3 text-xs font-bold text-black shadow-[0_15px_40px_rgba(214,168,79,0.12)]"
            >
              {t("biryani.footer.franchise.button", {
                defaultValue: "Enquire Now",
              })}

              <ArrowUpRight size={15} />
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.16em] text-white/20">
            {t("biryani.footer.copyright", {
              defaultValue:
                "© {{year}} BB Group of Businesses. All rights reserved.",
              year: currentYear,
            })}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-white/20">
            <span>BB Biryani</span>

            <span className="h-1 w-1 rounded-full bg-[#D6A84F]/40" />

            <span>BB Aqua</span>

            <span className="h-1 w-1 rounded-full bg-[#D6A84F]/40" />

            <span>
              {t("biryani.footer.bottomTagline", {
                defaultValue:
                  "Quality • Taste • Trust",
              })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}