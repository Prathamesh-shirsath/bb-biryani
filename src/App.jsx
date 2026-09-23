import { Routes, Route, Navigate } from "react-router-dom";

import Biryani from "./pages/Biryani/Biryani";
import Aqua from "./pages/Aqua/Aqua";

/* =========================================================
   BB GROUP HOME
========================================================= */

function Home() {
  return (
    <main className="bb-screen flex w-full items-center justify-center overflow-hidden bg-[#080604] px-4 text-white">
      <div className="w-full max-w-md text-center">

        {/* Brand */}
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#D6A84F] sm:text-xs sm:tracking-[0.4em]">
          BB Group of Businesses
        </p>

        {/* Main heading */}
        <h1 className="mt-4 font-serif text-[3.2rem] font-black leading-[0.85] tracking-[-0.05em] sm:text-6xl md:text-7xl">
          BB
          <span className="block bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
            GROUP
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[300px] text-sm leading-6 text-white/40 sm:max-w-md sm:text-base sm:leading-7">
          Discover our businesses and experience the BB
          standard of quality, taste and service.
        </p>

        {/* Business buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">

          {/* Biryani */}
          <a
            href="/biryani"
            className="
              flex
              min-h-[52px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#D6A84F]
              px-6
              py-3.5
              text-sm
              font-bold
              text-black
              shadow-[0_15px_40px_rgba(214,168,79,0.12)]
              transition
              duration-300
              active:scale-[0.97]

              sm:w-auto
              sm:px-8
              sm:hover:scale-105
            "
          >
            BB BIRYANI
          </a>

          {/* Aqua */}
          <a
            href="/aqua"
            className="
              flex
              min-h-[52px]
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/[0.03]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              duration-300
              active:scale-[0.97]

              sm:w-auto
              sm:px-8
              sm:hover:border-[#D6A84F]/40
              sm:hover:bg-white/[0.06]
            "
          >
            BB AQUA
          </a>

        </div>

        {/* Bottom brand */}
        <p className="mt-10 text-[8px] uppercase tracking-[0.25em] text-white/20 sm:mt-12 sm:text-[10px] sm:tracking-[0.35em]">
          Taste • Quality • Trust
        </p>

      </div>
    </main>
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>

      {/* BB Group Home */}
      <Route path="/" element={<Home />} />

      {/* BB Biryani */}
      <Route path="/biryani" element={<Biryani />} />

      {/* BB Aqua */}
      <Route path="/aqua" element={<Aqua />} />

      {/* Unknown route → Home */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}