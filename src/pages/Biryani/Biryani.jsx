import { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import TodayOffer from "./TodayOffer";
import Menu from "./Menu";
import AboutOwner from "./AboutOwner";
import Franchise from "./Franchise";
import Gallery from "./Gallery";
import FranchiseEnquiry from "./FranchiseEnquiry";
import MainBranch from "./MainBranch";
import Footer from "./Footer";

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

      <MainBranch />

      {/* =====================================================
          09 — FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}