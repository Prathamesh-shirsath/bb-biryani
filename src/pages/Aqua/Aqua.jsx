import { useEffect } from "react";

import AquaNavbar from "./AquaNavbar";
import AquaHero from "./AquaHero";
import AquaBusinessIntro from "./AquaBusinessIntro";
import AquaProducts from "./AquaProducts";
import AquaCustomBottles from "./AquaCustomBottles";
import AquaBottleShowcase from "./AquaBottleShowcase";
import AquaHowItWorks from "./AquaHowItWorks";
import AquaWhyUs from "./AquaWhyUs";
import AquaWhoWeServe from "./AquaWhoWeServe";
import AquaBranding from "./AquaBranding";
import AquaGallery from "./AquaGallery";
import AquaBulkOrder from "./AquaBulkOrder";
import AquaContact from "./AquaContact";
import AquaFooter from "./AquaFooter";

export default function Aqua() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#F5FBFF]
        text-[#06283D]
      "
    >
      {/* 01. NAVBAR */}
      <AquaNavbar />

      {/* 02. HERO */}
      <AquaHero />

      {/* 03. BUSINESS INTRO */}
      <AquaBusinessIntro />

      {/* 04. PRODUCTS */}
      <AquaProducts />

      {/* 05. CUSTOM BOTTLE BRANDING */}
      <AquaCustomBottles />

      {/* 06. BOTTLE SHOWCASE */}
      <AquaBottleShowcase />

      {/* 07. HOW IT WORKS */}
      <AquaHowItWorks />

      {/* 08. WHY BB AQUA */}
      <AquaWhyUs />

      {/* 09. WHO WE SERVE */}
      <AquaWhoWeServe />

      {/* 10. BRANDING */}
      <AquaBranding />

      {/* 11. GALLERY */}
      <AquaGallery />

      {/* 12. BULK / CUSTOM ORDER */}
      <AquaBulkOrder />

      {/* 13. CONTACT */}
      <AquaContact />

      {/* 14. FOOTER */}
      <AquaFooter />
    </main>
  );
}