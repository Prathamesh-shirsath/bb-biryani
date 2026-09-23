import { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import TodayOffer from "./TodayOffer";
import Menu from "./Menu";
import AboutOwner from "./AboutOwner";
import Franchise from "./Franchise";
import Gallery from "./Gallery";
import FranchiseEnquiry from "./FranchiseEnquiry";

import { initBiryaniScrollAnimations } from "../../animations/gsapAnimations";

export default function Biryani() {
  /* =========================================================
     GSAP SCROLL ANIMATIONS
  ========================================================= */

  useEffect(() => {
    const cleanup = initBiryaniScrollAnimations?.();

    return () => {
      if (typeof cleanup === "function") {
        cleanup();
      }
    };
  }, []);

  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#080604]
        text-white
      "
    >
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <Hero />

      {/* =====================================================
          02 — TODAY'S OFFER
      ====================================================== */}

      <TodayOffer />

      {/* =====================================================
          03 — MENU
      ====================================================== */}

      <Menu />

      {/* =====================================================
          04 — ABOUT OWNER
      ====================================================== */}

      <AboutOwner />

      {/* =====================================================
          05 — FRANCHISE
      ====================================================== */}

      <Franchise />
      {/* =====================================================
          06 — GALLERY
      ====================================================== */}

     <Gallery />

      {/* =====================================================
          07 — FRANCHISE ENQUIRY
      ====================================================== */}

      <FranchiseEnquiry />
      {/* =====================================================
          08 — MAIN BRANCH
      ====================================================== */}

      <section
        id="location"
        className="
          reveal-section
          w-full
          overflow-hidden
          bg-[#080604]
          px-4
          py-20

          min-[360px]:px-5

          sm:px-6
          sm:py-28

          md:px-8

          lg:px-10
          lg:py-32
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#D6A84F]/10
              bg-gradient-to-br
              from-[#21140A]
              to-[#0D0906]
              p-5

              sm:rounded-[2rem]
              sm:p-10

              md:p-12

              lg:p-16
            "
          >
            <div
              className="
                grid
                items-center
                gap-8

                sm:gap-10

                lg:grid-cols-2
                lg:gap-16
              "
            >
              {/* Location information */}
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F] sm:text-xs sm:tracking-[0.35em]">
                  Visit Us
                </p>

                <h2
                  className="
                    mt-3
                    font-serif
                    text-[2.45rem]
                    font-black
                    leading-[0.92]

                    sm:mt-4
                    sm:text-5xl
                  "
                >
                  MAIN{" "}
                  <span className="text-[#D6A84F]">
                    BRANCH
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-white/45

                    sm:mt-6
                    sm:text-base
                    sm:leading-8
                  "
                >
                  Experience the authentic BB Biryani taste
                  at our main branch.
                </p>

                <div className="mt-6 flex gap-3 sm:mt-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6A84F]/20 bg-[#D6A84F]/5 text-sm">
                    📍
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Main Branch
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/40">
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="
                    mt-6
                    min-h-[48px]
                    rounded-full
                    border
                    border-[#D6A84F]/30
                    px-6
                    py-3
                    text-xs
                    font-semibold
                    tracking-wide
                    text-[#D6A84F]
                    transition
                    duration-300
                    active:scale-95

                    sm:mt-8
                    sm:hover:bg-[#D6A84F]
                    sm:hover:text-black
                  "
                >
                  GET DIRECTIONS
                </button>
              </div>

              {/* Map placeholder */}
              <div
                className="
                  relative
                  min-h-[250px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-black/30

                  sm:min-h-[340px]
                  sm:rounded-3xl
                "
              >
                {/* Map grid */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(214,168,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,79,0.5) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D97706]/15 blur-2xl" />

                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6A84F]/30 bg-[#D6A84F]/10 text-lg shadow-[0_0_40px_rgba(214,168,79,0.2)]">
                  📍
                </div>

                {/* Map label */}
                <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl sm:bottom-5 sm:left-5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 sm:text-[9px]">
                    Main Branch
                  </p>

                  <p className="mt-1 text-[10px] text-[#D6A84F] sm:text-xs">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — FOOTER
      ====================================================== */}

      <footer
        className="
          w-full
          overflow-hidden
          border-t
          border-white/[0.08]
          bg-[#050403]
          px-4
          py-10

          min-[360px]:px-5

          sm:px-6
          sm:py-12

          md:px-8

          lg:px-10
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-9 md:grid-cols-3 md:gap-10">

            {/* Brand */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#D6A84F] sm:text-xs sm:tracking-[0.3em]">
                BB Group
              </p>

              <h3 className="mt-2 font-serif text-3xl font-black sm:mt-3">
                BB BIRYANI
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/35 sm:mt-4">
                Authentic taste. Royal experience.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-sm font-semibold text-white">
                Quick Links
              </p>

              <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-white/40 sm:flex sm:flex-col sm:gap-3">
                <a
                  href="#home"
                  className="transition hover:text-[#D6A84F]"
                >
                  Home
                </a>

                <a
                  href="#menu"
                  className="transition hover:text-[#D6A84F]"
                >
                  Menu
                </a>

                <a
                  href="#owner"
                  className="transition hover:text-[#D6A84F]"
                >
                  About
                </a>

                <a
                  href="#franchise"
                  className="transition hover:text-[#D6A84F]"
                >
                  Franchise
                </a>

                <a
                  href="#gallery"
                  className="transition hover:text-[#D6A84F]"
                >
                  Gallery
                </a>

                <a
                  href="#enquiry"
                  className="transition hover:text-[#D6A84F]"
                >
                  Enquiry
                </a>
              </div>
            </div>

            {/* Main Branch */}
            <div>
              <p className="text-sm font-semibold text-white">
                Main Branch
              </p>

              <p className="mt-3 text-sm leading-6 text-white/40 sm:mt-4">
                Maharashtra, India
              </p>

              <p className="mt-2 text-sm text-white/40">
                📞 Contact us for orders
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-9 border-t border-white/[0.08] pt-6 sm:mt-10">
            <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[10px] leading-5 text-white/25 sm:text-xs">
                © {new Date().getFullYear()} BB Group of Businesses.
                All rights reserved.
              </p>

              <p className="text-[9px] uppercase tracking-[0.15em] text-white/20 sm:text-[10px] sm:tracking-[0.18em]">
                Authentic Taste • Royal Experience
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}