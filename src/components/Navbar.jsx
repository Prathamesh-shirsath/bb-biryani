import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Menu,
  X,
  Utensils,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "Menu",
    id: "menu",
  },
  {
    label: "About",
    id: "owner",
  },
  {
    label: "Franchise",
    id: "franchise",
  },
  {
    label: "Gallery",
    id: "gallery",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isBiryaniPage = location.pathname === "/biryani";

  /* =========================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* =========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavigation = (id) => {
    setIsOpen(false);

    if (!isBiryaniPage) {
      navigate("/biryani");

      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 250);

      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleOrder = () => {
    setIsOpen(false);

    if (!isBiryaniPage) {
      navigate("/biryani");

      setTimeout(() => {
        document
          .getElementById("enquiry")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 250);

      return;
    }

    document
      .getElementById("enquiry")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          px-3
          pt-3

          sm:px-5
          sm:pt-4

          lg:px-8
          lg:pt-5
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-[58px]
            w-full
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#080604]/75
            px-3
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl

            sm:h-16
            sm:rounded-2xl
            sm:px-4

            lg:h-[70px]
            lg:rounded-3xl
            lg:px-5
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => handleNavigation("home")}
            className="
              flex
              min-w-0
              items-center
              gap-2
              text-left
              active:scale-95

              sm:gap-2.5
            "
          >
            {/* Logo icon */}
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#D6A84F]/25
                bg-[#D6A84F]/10

                sm:h-10
                sm:w-10
                sm:rounded-xl
              "
            >
              <span className="font-serif text-sm font-black text-[#D6A84F] sm:text-base">
                BB
              </span>
            </div>

            {/* Brand name */}
            <div className="hidden min-w-0 xs:block">
              <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.16em]">
                BB Biryani
              </p>

              <p className="mt-0.5 hidden text-[7px] uppercase tracking-[0.2em] text-white/30 sm:block">
                Authentic Taste
              </p>
            </div>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className="
                  relative
                  rounded-full
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  text-white/55
                  transition
                  duration-300
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* =================================================
              DESKTOP ORDER BUTTON
          ================================================== */}

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={handleOrder}
              className="
                group
                flex
                min-h-[44px]
                items-center
                gap-2
                rounded-full
                bg-[#D6A84F]
                px-5
                text-xs
                font-bold
                text-black
                shadow-[0_10px_30px_rgba(214,168,79,0.12)]
                transition
                duration-300
                hover:scale-105
                hover:shadow-[0_15px_40px_rgba(214,168,79,0.22)]
              "
            >
              ORDER NOW

              <ArrowRight
                size={15}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.03]
              text-white
              transition
              duration-200
              active:scale-90

              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                z-[90]
                bg-black/70
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* Menu panel */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                left-3
                right-3
                top-[82px]
                z-[95]
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-[#0B0806]/95
                p-4
                shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                backdrop-blur-2xl

                sm:left-5
                sm:right-5
                sm:top-[92px]
                sm:p-5

                lg:hidden
              "
            >
              {/* Menu heading */}
              <div className="mb-3 flex items-center gap-3 border-b border-white/[0.07] px-2 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D6A84F]/10">
                  <Utensils
                    size={16}
                    className="text-[#D6A84F]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                    BB Biryani
                  </p>

                  <p className="mt-0.5 text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Navigation
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    onClick={() =>
                      handleNavigation(item.id)
                    }
                    className="
                      flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      text-left
                      text-sm
                      font-medium
                      text-white/65
                      transition
                      active:scale-[0.98]
                      active:bg-white/[0.05]
                    "
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={15}
                      className="text-[#D6A84F]/50"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Mobile Order */}
              <button
                type="button"
                onClick={handleOrder}
                className="
                  mt-3
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#D6A84F]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                  shadow-[0_15px_40px_rgba(214,168,79,0.12)]
                  active:scale-[0.98]
                "
              >
                ORDER NOW

                <ArrowRight size={17} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}