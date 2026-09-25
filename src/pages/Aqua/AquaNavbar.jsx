import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Droplets,
  Menu,
  X,
  Waves,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    id: "aqua-home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Products",
    id: "products",
  },
  {
    label: "Custom Bottles",
    id: "custom-bottles",
  },
  {
    label: "Process",
    id: "process",
  },
  {
    label: "Gallery",
    id: "gallery",
  },
];

export default function AquaNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  /* =========================================================
     BODY SCROLL LOCK
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
    setIsOpen(false);

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     GO TO BOTTLE ENQUIRY
  ========================================================= */

  const handleCustomBottle = () => {
    setIsOpen(false);

    const element = document.getElementById(
      "enquiry"
    );

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     GO TO BIRYANI
  ========================================================= */

  const handleBiryani = () => {
    setIsOpen(false);
    navigate("/biryani");
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
            relative
            mx-auto
            flex
            h-[60px]
            w-full
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            border-sky-900/10
            bg-white/80
            px-3
            shadow-[0_12px_45px_rgba(7,89,133,0.10)]
            backdrop-blur-2xl

            min-[360px]:px-3.5

            sm:h-16
            sm:px-4

            lg:h-[70px]
            lg:rounded-3xl
            lg:px-5
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <motion.button
            type="button"
            onClick={() =>
              scrollToSection("aqua-home")
            }
            whileTap={{
              scale: 0.95,
            }}
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
            {/* Aqua Logo */}

            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-sky-300/40
                bg-gradient-to-br
                from-sky-50
                via-white
                to-cyan-50
                shadow-[0_5px_20px_rgba(14,165,233,0.12)]

                sm:h-11
                sm:w-11
              "
            >
              {/* Water glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_70%)]
                "
              />

              <img
                src="/logo/buntysheth.png"
                alt="BB Aqua"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  p-1
                "
              />
            </motion.div>

            {/* Brand Name */}

            <div className="hidden min-w-0 min-[360px]:block">
              <p
                className="
                  truncate
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#063B5C]

                  sm:text-sm
                "
              >
                BB AQUA
              </p>

              <p
                className="
                  mt-0.5
                  hidden
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-sky-700/45

                  sm:block
                "
              >
                Pure · Fresh · Trusted
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
                onClick={() =>
                  scrollToSection(item.id)
                }
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  relative
                  rounded-full
                  px-3.5
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#164E63]/60
                  transition
                  duration-300
                  hover:bg-sky-50
                  hover:text-[#0369A1]
                "
              >
                {item.label}

                {/* Underline */}

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-sky-400
                    to-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-5
                  "
                />
              </motion.button>
            ))}
          </div>

          {/* =================================================
              DESKTOP CUSTOM BOTTLE BUTTON
          ================================================== */}

          <div className="hidden lg:block">
            <motion.button
              type="button"
              onClick={handleCustomBottle}
              whileHover={{
                scale: 1.04,
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
                bg-gradient-to-r
                from-[#0369A1]
                to-[#0891B2]
                px-5
                text-xs
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(3,105,161,0.20)]
                transition
                duration-300
                hover:shadow-[0_15px_40px_rgba(3,105,161,0.28)]
              "
            >
              {/* Shine */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-12
                  w-8
                  rotate-[20deg]
                  bg-white/40
                  blur-sm
                  transition-all
                  duration-700
                  group-hover:left-[115%]
                "
              />

              <Droplets
                size={15}
                className="
                  relative
                  z-10
                  transition
                  duration-300
                  group-hover:scale-110
                "
              />

              <span className="relative z-10">
                CUSTOMIZE BOTTLE
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
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() =>
              setIsOpen((prev) => !prev)
            }
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
              border-sky-900/10
              bg-sky-50/70
              text-[#075985]

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
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setIsOpen(false)
              }
              className="
                fixed
                inset-0
                z-[90]
                bg-[#06283D]/35
                backdrop-blur-md
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
                top-[84px]
                z-[95]
                overflow-hidden
                rounded-3xl
                border
                border-sky-900/10
                bg-white/95
                p-4
                shadow-[0_30px_80px_rgba(7,89,133,0.20)]
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
              {/* Decorative Water Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  bg-cyan-200/30
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-20
                  h-44
                  w-44
                  rounded-full
                  bg-sky-200/30
                  blur-3xl
                "
              />

              {/* Menu Heading */}

              <div
                className="
                  relative
                  mb-3
                  flex
                  items-center
                  gap-3
                  border-b
                  border-sky-900/10
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
                    bg-sky-100
                    text-sky-600
                  "
                >
                  <Waves size={17} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-[#063B5C]
                    "
                  >
                    BB AQUA
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-sky-700/45
                    "
                  >
                    Pure · Fresh · Trusted
                  </p>
                </div>
              </div>

              {/* Navigation Links */}

              <div className="relative flex flex-col gap-1">
                {navItems.map(
                  (item, index) => (
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
                        delay:
                          index * 0.04,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() =>
                        scrollToSection(
                          item.id
                        )
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
                        font-semibold
                        text-[#164E63]/65
                        transition
                        hover:bg-sky-50
                        hover:text-sky-700
                      "
                    >
                      <span>
                        {item.label}
                      </span>

                      <ArrowRight
                        size={15}
                        className="
                          text-sky-400
                          transition
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </motion.button>
                  )
                )}
              </div>

              {/* =================================================
                  MOBILE CUSTOM BOTTLE CTA
              ================================================== */}

              <motion.button
                type="button"
                onClick={handleCustomBottle}
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
                  bg-gradient-to-r
                  from-[#0369A1]
                  to-[#0891B2]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_40px_rgba(3,105,161,0.18)]
                "
              >
                <Droplets
                  size={17}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  CUSTOMIZE YOUR BOTTLE
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

              {/* =================================================
                  BACK TO BIRYANI
              ================================================== */}

              <button
                type="button"
                onClick={handleBiryani}
                className="
                  mt-3
                  flex
                  min-h-[44px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-sky-900/10
                  bg-slate-50
                  text-xs
                  font-semibold
                  text-[#164E63]/60
                  transition
                  hover:bg-sky-50
                  hover:text-sky-700
                "
              >
                ← BB Biryani
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}