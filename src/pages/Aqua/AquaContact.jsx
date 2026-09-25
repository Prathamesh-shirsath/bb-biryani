import { motion } from "motion/react";
import {
  ArrowRight,
  Clock3,
  Droplets,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 7038925137",
    href: "tel:+917038925137",
    clickable: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Start an enquiry",
    href: "https://wa.me/917038925137",
    clickable: true,
  },
  {
    icon: Clock3,
    title: "Business Hours",
    value: "Contact us for availability",
    clickable: false,
  },
];

export default function AquaContact() {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#06283D]
        py-20
        text-white
        sm:py-24
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-0
            h-80
            w-80
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-sky-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              mx-auto
              mb-5
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/20
              bg-white/[0.06]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <Droplets className="h-4 w-4 text-cyan-300" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-cyan-200
                sm:text-xs
              "
            >
              Contact BB Aqua
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-7xl
            "
          >
            Let's Talk About
            <span className="block text-cyan-300">
              Your Brand.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-300
              sm:text-base
              sm:leading-8
            "
          >
            Have a bottle branding requirement, bulk enquiry or want
            to know more about BB Aqua? Get in touch with us.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT GRID
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-6
          "
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.045]
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              Get In Touch
            </p>

            <h3
              className="
                mt-4
                text-2xl
                font-black
                sm:text-3xl
              "
            >
              Connect with BB Aqua.
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-slate-400
              "
            >
              For branded water, Custom Bottle Branding or bulk
              requirements, contact us directly.
            </p>

            {/* Contact Items */}

            <div className="mt-8 space-y-3">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-cyan-300/10
                      "
                    >
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-slate-500
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                if (item.clickable && item.href) {
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="
                        flex
                        min-h-[72px]
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        px-4
                        transition-colors
                        hover:border-cyan-300/20
                        hover:bg-white/[0.06]
                      "
                    >
                      {content}
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      flex
                      min-h-[72px]
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-4
                    "
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp Info */}

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-cyan-300" />

                <div>
                  <p className="text-xs font-bold text-white">
                    WhatsApp Enquiry
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Your enquiry can open directly in WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              LOCATION / QUICK CONTACT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-cyan-300
              p-6
              text-[#06283D]
              sm:p-8
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                bg-white/25
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#06283D]/10
              "
            >
              <MapPin className="h-6 w-6" />
            </div>

            <p
              className="
                relative
                z-10
                mt-6
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
              "
            >
              BB Aqua
            </p>

            <h3
              className="
                relative
                z-10
                mt-3
                text-2xl
                font-black
              "
            >
              Let's Connect.
            </h3>

            <p
              className="
                relative
                z-10
                mt-4
                text-sm
                leading-7
                text-[#16445B]
              "
            >
              For location details, business enquiries and visiting
              information, please contact BB Aqua directly.
            </p>

            {/* Quick WhatsApp Card */}

            <div
              className="
                relative
                z-10
                mt-8
                rounded-2xl
                bg-[#06283D]
                p-4
                text-white
              "
            >
              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                Need A Quick Response?
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                Send your bottle branding or bulk requirement directly
                on WhatsApp.
              </p>

              <a
                href="https://wa.me/917038925137"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4
                  flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-cyan-300
                  px-5
                  text-sm
                  font-black
                  text-[#06283D]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                WhatsApp BB Aqua
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Phone */}

            <a
              href="tel:+917038925137"
              className="
                relative
                z-10
                mt-4
                flex
                min-h-[48px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#06283D]/15
                bg-white/30
                px-5
                text-sm
                font-bold
                text-[#06283D]
                transition-colors
                hover:bg-white/50
              "
            >
              <Phone className="h-4 w-4" />
              +91 7038925137
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BRAND MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-10
            text-center
            sm:mt-14
          "
        >
          <p className="text-xs text-slate-500">
            BB GROUP OF BUSINESSES
          </p>

          <p
            className="
              mt-2
              text-sm
              font-semibold
              text-slate-300
            "
          >
            BB Aqua · Pure. Fresh. Trusted.
          </p>
        </motion.div>
      </div>
    </section>
  );
}