import { motion } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Today's Offer", href: "#offer" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Franchise", href: "#franchise" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#enquiry" },
];

const branchInfo = {
  address:
    "Near Toll Plaza, Mhasne Phata, Nagar - Pune Highway, New MIDC Chowk, Supe, Maharashtra - 414301",

  phone: "+91 7038925137",

  timings: "10 AM - 11 PM",

  mapsUrl: "https://maps.app.goo.gl/FTH86eQyambV3wVC6",
};

export default function Footer() {
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
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-10">

            {/* =================================================
                BRAND
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
                Authentic taste. Royal experience. Bringing together
                quality ingredients, rich flavours and the BB standard
                of hospitality.
              </p>

              {/* Brand badge */}

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D6A84F]/15 bg-[#D6A84F]/[0.04] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F] shadow-[0_0_10px_rgba(214,168,79,0.7)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D6A84F]/70">
                  Taste • Quality • Trust
                </span>
              </div>
            </motion.div>


            {/* =================================================
                QUICK LINKS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                Explore
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                Quick Links
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-1 text-xs text-white/35 transition duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

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
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                Our Businesses
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                BB Group
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
                      Food & Hospitality
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
                      Water & Manufacturing
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
                CONTACT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                Contact
              </p>

              <h3 className="mt-3 font-serif text-xl font-bold text-white">
                Visit Us
              </h3>

              <div className="mt-5 space-y-4">

                {/* Address */}

                <a
                  href={branchInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#D6A84F]"
                  />

                  <p className="break-words text-xs leading-5 text-white/35 transition group-hover:text-white/60">
                    {branchInfo.address}
                  </p>
                </a>


                {/* Phone */}

                <a
                  href="tel:+917038925137"
                  className="flex items-center gap-3 text-xs text-white/40 transition duration-300 hover:text-white"
                >
                  <Phone
                    size={15}
                    className="text-[#D6A84F]"
                  />

                  {branchInfo.phone}
                </a>


                {/* Timing */}

                <div className="flex items-center gap-3 text-xs text-white/40">
                  <Sparkles
                    size={15}
                    className="text-[#D6A84F]"
                  />

                  <span>
                    Open daily · {branchInfo.timings}
                  </span>
                </div>

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
                Franchise Opportunities
              </p>

              <h3 className="mt-2 font-serif text-xl font-bold text-white sm:text-2xl">
                Build the next BB destination.
              </h3>
            </div>

            <motion.a
              href="#enquiry"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#D6A84F] px-6 py-3 text-xs font-bold text-black shadow-[0_15px_40px_rgba(214,168,79,0.12)]"
            >
              Enquire Now

              <ArrowUpRight size={15} />
            </motion.a>

          </div>
        </motion.div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/20">
            © {currentYear} BB Group of Businesses. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-white/20">
            <span>BB Biryani</span>

            <span className="h-1 w-1 rounded-full bg-[#D6A84F]/40" />

            <span>BB Aqua</span>

            <span className="h-1 w-1 rounded-full bg-[#D6A84F]/40" />

            <span>Quality • Taste • Trust</span>
          </div>

        </div>
      </div>
    </footer>
  );
}