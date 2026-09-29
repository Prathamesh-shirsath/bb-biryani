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

  mapsUrl: "https://maps.app.goo.gl/ZNXzQ9i834E33THb7",

  email: "bantishethbiryaniwale@gmail.com",

  instagram:
    "https://www.instagram.com/bantisheth_12?stkn=bmppdWppY2Vzc2Np",

  youtube:
    "https://youtube.com/@bantishethbiryaniwale?si=IFpozO6f3tszIEK4",
};

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

      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

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

      <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.28ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47Z" />
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
                    defaultValue: "Taste • Quality • Trust",
                  })}
                </span>
              </div>

              {/* Social Media */}

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
                      {t(`biryani.footer.links.${link.key}`, {
                        defaultValue: link.label,
                      })}
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
                        defaultValue: "Food & Hospitality",
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
                        defaultValue: "Water & Manufacturing",
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
                CONTACT + BRANCH PHOTO
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
                  BRANCH PHOTO + MAP CARD
              ================================================== */}

              <a
                href={branchInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-5 block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3 transition duration-500 hover:border-[#D6A84F]/30 hover:bg-white/[0.05]"
              >
                {/* Branch Image */}

                <div className="relative h-36 overflow-hidden rounded-xl border border-white/[0.06] bg-[#11100d]">
                  <img
                    src="/biryani/main-branch.jpeg"
                    alt="BB Biryani Main Branch"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark premium overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Branch Badge */}

                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#D6A84F]">
                      Main Branch
                    </span>
                  </div>

                  {/* External Icon */}

                  <div className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/50 text-[#D6A84F] backdrop-blur-md">
                    <ExternalLink size={13} />
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

                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#D6A84F]/15 bg-[#D6A84F]/[0.04] px-3 py-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D6A84F]/80">
                    {t("biryani.footer.getDirections", {
                      defaultValue: "Get Directions on Google Maps",
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
                <Phone size={15} className="text-[#D6A84F]" />

                {branchInfo.phone}
              </a>

              {/* Email */}

              <a
                href={`mailto:${branchInfo.email}`}
                className="mt-3 flex items-center gap-3 break-all text-xs text-white/40 transition duration-300 hover:text-white"
              >
                <Mail size={15} className="shrink-0 text-[#D6A84F]" />

                {branchInfo.email}
              </a>

              {/* Timing */}

              <div className="mt-3 flex items-center gap-3 text-xs text-white/40">
                <Sparkles size={15} className="shrink-0 text-[#D6A84F]" />

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
            BOTTOM BAR
        ====================================================== */}

        <div className="border-t border-white/[0.07] py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}

            <p className="text-[9px] uppercase tracking-[0.16em] text-white/20">
              {t("biryani.footer.copyright", {
                defaultValue:
                  "© {{year}} BB Group of Businesses. All rights reserved.",
                year: currentYear,
              })}
            </p>

            {/* Made By */}

            <div className="flex items-center justify-center gap-2 text-xs text-white/45">
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
                className="group inline-flex items-center gap-2 font-semibold text-[#D6A84F] transition duration-300 hover:text-white"
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-[#0A66C2] text-white shadow-[0_5px_15px_rgba(10,102,194,0.25)] transition duration-300 group-hover:scale-110">
                  <LinkedInIcon size={14} />
                </span>

                <span className="underline-offset-4 group-hover:underline">
                  Prathamesh Shirsath
                </span>

                <ArrowUpRight
                  size={13}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}