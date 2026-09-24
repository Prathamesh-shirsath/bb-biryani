import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MapPin,
  Navigation,
  Clock3,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const branchInfo = {
  name: "BB Biryani — Main Branch",

  address:
    "Near Toll Plaza, Mhasne Phata, Nagar - Pune Highway, New MIDC Chowk, Supe, Maharashtra - 414301",

  city: "Maharashtra, India",

  timings: "10 AM - 11 PM",

  phone: "+91 7038925137",

  mapsUrl: "https://maps.app.goo.gl/FTH86eQyambV3wVC6",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedPin() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      {/* Outer pulse */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#D6A84F]/20"
        animate={{
          scale: [0.75, 1.35],
          opacity: [0.65, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute h-16 w-16 rounded-full border border-[#D6A84F]/30"
        animate={{
          scale: [0.8, 1.25],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Glow */}
      <div className="absolute h-14 w-14 rounded-full bg-[#D6A84F]/10 blur-xl" />

      {/* Pin */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#F5D58A]/50 bg-[#17100A]/90 shadow-[0_15px_50px_rgba(214,168,79,0.25)] backdrop-blur-xl"
      >
        <MapPin
          size={27}
          strokeWidth={1.6}
          className="text-[#F5D58A]"
        />
      </motion.div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl transition duration-500 hover:border-[#D6A84F]/25 hover:bg-white/[0.045]"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#D6A84F]/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D6A84F]/20 bg-[#D6A84F]/[0.07]">
          <Icon
            size={18}
            strokeWidth={1.7}
            className="text-[#D6A84F]"
          />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
            {label}
          </p>

          <p className="mt-1 break-words text-sm leading-5 text-white/75">
  {value}
</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MainBranch() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  useEffect(() => {
    // Reserved for future location/map interactions.
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="bb-section relative overflow-hidden bg-[#080604]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Gold glow */}
        <div className="absolute left-1/2 top-[15%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#D6A84F]/[0.07] blur-[100px] sm:h-96 sm:w-96" />

        {/* Red/brown glow */}
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#8B2E16]/10 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(214,168,79,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214,168,79,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A84F]/15 bg-[#D6A84F]/[0.05] px-3 py-1.5">
            <MapPin size={12} className="text-[#D6A84F]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
              Find Us
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[2.4rem] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Visit the
            <span className="block bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              BB Experience.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
            Step into our world of authentic flavours, warm hospitality
            and the signature BB Biryani experience.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN LOCATION CARD
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#100B07]/80 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:rounded-[36px]"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* =================================================
                LEFT — VISUAL LOCATION PANEL
            ================================================== */}

            <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#0D0906] p-8 sm:min-h-[400px] sm:p-12 lg:min-h-[520px] lg:border-b-0 lg:border-r">
              {/* Decorative circles */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-64 w-64 rounded-full border border-dashed border-[#D6A84F]/10 sm:h-80 sm:w-80"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-48 w-48 rounded-full border border-[#D6A84F]/10 sm:h-60 sm:w-60"
              />

              {/* Map-style lines */}
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute left-[10%] top-[28%] h-px w-[80%] rotate-[18deg] bg-[#D6A84F]/30" />
                <div className="absolute left-[5%] top-[58%] h-px w-[90%] -rotate-[14deg] bg-[#D6A84F]/20" />
                <div className="absolute left-[30%] top-[5%] h-[90%] w-px rotate-[20deg] bg-[#D6A84F]/15" />
                <div className="absolute left-[65%] top-[5%] h-[90%] w-px -rotate-[25deg] bg-[#D6A84F]/10" />
              </div>

              {/* Location */}
              <div className="relative z-10 text-center">
                <AnimatedPin />

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.55,
                    duration: 0.6,
                  }}
                >
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D6A84F]/70">
                    BB Biryani
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-bold text-white sm:text-2xl">
                    Main Branch
                  </h3>

                  <p className="mt-1 text-xs text-white/30">
                    {branchInfo.city}
                  </p>
                </motion.div>
              </div>

              {/* Corner label */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/[0.07] bg-black/20 px-3 py-1.5 backdrop-blur-md">
                <Sparkles
                  size={11}
                  className="text-[#D6A84F]"
                />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Our Home
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT — DETAILS
            ================================================== */}

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
                    Main Branch
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {branchInfo.name}
                  </h3>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D6A84F]/20 bg-[#D6A84F]/[0.06] sm:flex">
                  <MapPin
                    size={18}
                    className="text-[#D6A84F]"
                  />
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                <InfoCard
                  icon={MapPin}
                  label="Address"
                  value={branchInfo.address}
                  delay={0.1}
                />

                <InfoCard
                  icon={Clock3}
                  label="Opening Hours"
                  value={branchInfo.timings}
                  delay={0.2}
                />

                <InfoCard
                  icon={Phone}
                  label="Contact"
                  value={branchInfo.phone}
                  delay={0.3}
                />
              </div>

              {/* CTA */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <motion.a
                  href={branchInfo.mapsUrl}
                  target={branchInfo.mapsUrl !== "#" ? "_blank" : undefined}
                  rel={
                    branchInfo.mapsUrl !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative flex min-h-[52px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#D6A84F] px-5 py-3 text-sm font-bold text-black shadow-[0_15px_45px_rgba(214,168,79,0.16)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

                  <Navigation
                    size={16}
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    Get Directions
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>

                <motion.a
                  href={
                    branchInfo.phone.startsWith("+91")
                      ? `tel:${branchInfo.phone.replace(/\s/g, "")}`
                      : "#"
                  }
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white/80 transition duration-300 hover:border-[#D6A84F]/30 hover:bg-white/[0.05] hover:text-white"
                >
                  <Phone
                    size={16}
                    className="text-[#D6A84F]"
                  />

                  Call Branch
                </motion.a>
              </div>

              {/* Bottom note */}
              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D6A84F]/10">
                  <Sparkles
                    size={13}
                    className="text-[#D6A84F]"
                  />
                </div>

                <p className="text-[11px] leading-5 text-white/30">
                  Authentic taste, premium experience and
                  the BB standard — all under one roof.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}