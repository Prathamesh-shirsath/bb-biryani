import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Menu,
  X,
  Utensils,
  Droplets,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    key: "home",
    id: "home",
    defaultLabel: "Home",
  },
  {
    key: "menu",
    id: "menu",
    defaultLabel: "Menu",
  },
  {
    key: "about",
    id: "owner",
    defaultLabel: "About",
  },
  {
    key: "franchise",
    id: "franchise",
    defaultLabel: "Franchise",
  },
  {
    key: "gallery",
    id: "gallery",
    defaultLabel: "Gallery",
  },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isBiryaniPage = location.pathname === "/biryani";

  /* =========================================================
     LANGUAGE
  ========================================================= */

  const currentLanguage =
    i18n.resolvedLanguage === "mr" ? "mr" : "en";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

    try {
      localStorage.setItem("bb-language", language);
    } catch {
      // Ignore localStorage errors
    }
  };

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
     SCROLL TO SECTION
  ========================================================= */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavigation = (id) => {
    setIsOpen(false);

    if (!isBiryaniPage) {
      navigate("/biryani");

      setTimeout(() => {
        scrollToSection(id);
      }, 350);

      return;
    }

    scrollToSection(id);
  };

  /* =========================================================
     GO TO AQUA WEBSITE
  ========================================================= */

  const handleAqua = () => {
    setIsOpen(false);
    navigate("/aqua");
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

          min-[360px]:px-4

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

            min-[360px]:px-3.5

            sm:h-16
            sm:rounded-2xl
            sm:px-4

            lg:h-[70px]
            lg:rounded-3xl
            lg:px-5
          "
        >
          {/* =================================================
              LOGO + BRAND
          ================================================== */}

          <motion.button
            type="button"
            onClick={() => handleNavigation("home")}
            whileTap={{ scale: 0.95 }}
            className="
              group
              flex
              min-w-0
              items-center
              gap-2
              text-left

              sm:gap-2.5
            "
          >
            {/* Logo */}

            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="
                relative
                flex
                h-9
                min-w-[42px]
                max-w-[105px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-[#D6A84F]/25
                bg-black/25
                px-1.5
                shadow-[0_0_20px_rgba(214,168,79,0.08)]

                sm:h-10
                sm:min-w-[46px]
                sm:max-w-[125px]
                sm:rounded-xl
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  bg-[radial-gradient(circle_at_center,rgba(214,168,79,0.15),transparent_70%)]
                  opacity-70
                "
              />

              <img
                src="/logo/buntysheth.png"
                alt="BB Biryani Logo"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  p-0.5
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </motion.div>

            {/* Brand */}

            <div className="hidden min-w-0 min-[360px]:block">
              <p
                className="
                  truncate
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white

                  sm:text-xs
                  sm:tracking-[0.16em]
                "
              >
                BB Biryani
              </p>

              <p
                className="
                  mt-0.5
                  hidden
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30

                  sm:block
                "
              >
                {t("navbar.authenticTaste", {
                  defaultValue: "Authentic Taste",
                })}
              </p>
            </div>
          </motion.button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                whileTap={{ scale: 0.96 }}
                className="
                  group
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
                {t(`navbar.${item.key}`, {
                  defaultValue: item.defaultLabel,
                })}

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[1px]
                    w-0
                    -translate-x-1/2
                    bg-[#D6A84F]
                    transition-all
                    duration-300
                    group-hover:w-5
                  "
                />
              </motion.button>
            ))}
          </div>

          {/* =================================================
              DESKTOP RIGHT SIDE
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            {/* Language Selector */}

            <div
              className="
                flex
                items-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-1
                backdrop-blur-xl
              "
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                aria-pressed={currentLanguage === "en"}
                className={`
                  min-w-[38px]
                  rounded-full
                  px-2.5
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  transition
                  duration-300
                  ${
                    currentLanguage === "en"
                      ? "bg-[#D6A84F] text-[#17110A] shadow-[0_4px_15px_rgba(214,168,79,0.18)]"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("mr")}
                aria-pressed={currentLanguage === "mr"}
                className={`
                  min-w-[48px]
                  rounded-full
                  px-2.5
                  py-1.5
                  text-[9px]
                  font-bold
                  tracking-[0.04em]
                  transition
                  duration-300
                  ${
                    currentLanguage === "mr"
                      ? "bg-[#D6A84F] text-[#17110A] shadow-[0_4px_15px_rgba(214,168,79,0.18)]"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >
                मराठी
              </button>
            </div>

            {/* Aqua Button */}

            <motion.button
              type="button"
              onClick={handleAqua}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                flex
                min-h-[44px]
                items-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-cyan-300/20
                bg-cyan-400/10
                px-5
                text-xs
                font-bold
                text-cyan-100
                shadow-[0_10px_30px_rgba(34,211,238,0.08)]
                backdrop-blur-xl
                transition
                duration-300
                hover:border-cyan-300/40
                hover:bg-cyan-300/15
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.16)]
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_65%)]
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <Droplets
                size={15}
                className="
                  relative
                  z-10
                  text-cyan-300
                  transition
                  duration-300
                  group-hover:scale-110
                "
              />

              <span className="relative z-10">
                BB AQUA
              </span>

              <ArrowRight
                size={14}
                className="
                  relative
                  z-10
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            type="button"
            aria-label={
              isOpen
                ? t("navbar.closeMenu", {
                    defaultValue: "Close navigation menu",
                  })
                : t("navbar.openMenu", {
                    defaultValue: "Open navigation menu",
                  })
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{
              scale: 0.9,
            }}
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

              lg:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
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
          </motion.button>
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

            {/* Menu Panel */}

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

                min-[360px]:left-4
                min-[360px]:right-4

                sm:left-5
                sm:right-5
                sm:top-[92px]
                sm:p-5

                lg:hidden
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#D6A84F]/10
                  blur-3xl
                "
              />

              {/* Heading */}

              <div
                className="
                  relative
                  mb-3
                  flex
                  items-center
                  gap-3
                  border-b
                  border-white/[0.07]
                  px-2
                  pb-4
                "
              >
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
                    border-[#D6A84F]/20
                    bg-[#D6A84F]/10
                  "
                >
                  <Utensils
                    size={16}
                    className="text-[#D6A84F]"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white
                    "
                  >
                    BB Biryani
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    {t("navbar.navigation", {
                      defaultValue: "Navigation",
                    })}
                  </p>
                </div>
              </div>

              {/* Links */}

              <div className="relative flex flex-col gap-1">
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
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() =>
                      handleNavigation(item.id)
                    }
                    className="
                      group
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
                      hover:bg-white/[0.04]
                      hover:text-white
                    "
                  >
                    <span>
                      {t(`navbar.${item.key}`, {
                        defaultValue: item.defaultLabel,
                      })}
                    </span>

                    <ArrowRight
                      size={15}
                      className="
                        text-[#D6A84F]/50
                        transition
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#D6A84F]
                      "
                    />
                  </motion.button>
                ))}
              </div>

              {/* =================================================
                  MOBILE LANGUAGE SELECTOR
              ================================================== */}

              <div
                className="
                  relative
                  mt-3
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-4
                  py-3
                "
              >
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {t("navbar.language", {
                      defaultValue: "Language",
                    })}
                  </p>

                  <p className="mt-1 text-[8px] text-white/25">
                    {currentLanguage === "mr"
                      ? "मराठी"
                      : "English"}
                  </p>
                </div>

                <div className="flex items-center rounded-full border border-white/[0.08] bg-black/20 p-1">
                  <button
                    type="button"
                    onClick={() =>
                      changeLanguage("en")
                    }
                    aria-pressed={
                      currentLanguage === "en"
                    }
                    className={`
                      min-w-[40px]
                      rounded-full
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      transition
                      duration-300
                      ${
                        currentLanguage === "en"
                          ? "bg-[#D6A84F] text-[#17110A]"
                          : "text-white/45"
                      }
                    `}
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      changeLanguage("mr")
                    }
                    aria-pressed={
                      currentLanguage === "mr"
                    }
                    className={`
                      min-w-[52px]
                      rounded-full
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-bold
                      tracking-[0.04em]
                      transition
                      duration-300
                      ${
                        currentLanguage === "mr"
                          ? "bg-[#D6A84F] text-[#17110A]"
                          : "text-white/45"
                      }
                    `}
                  >
                    मराठी
                  </button>
                </div>
              </div>

              {/* =================================================
                  MOBILE AQUA BUTTON
              ================================================== */}

              <motion.button
                type="button"
                onClick={handleAqua}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative
                  mt-3
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  border
                  border-cyan-300/20
                  bg-cyan-400/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-cyan-100
                  shadow-[0_15px_40px_rgba(34,211,238,0.08)]
                "
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_65%)]
                  "
                />

                <Droplets
                  size={17}
                  className="
                    relative
                    z-10
                    text-cyan-300
                  "
                />

                <span className="relative z-10">
                  BB AQUA
                </span>

                <ArrowRight
                  size={17}
                  className="
                    relative
                    z-10
                    transition
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}