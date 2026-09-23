import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  city: "",
  investment: "",
  message: "",
};

export default function FranchiseEnquiry() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 3000);
  };

  return (
    <section
      id="enquiry"
      className="relative w-full overflow-hidden bg-[#090604] py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[10%] h-72 w-72 rounded-full bg-[#D6A84F]/10 blur-[110px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-80 w-80 rounded-full bg-[#7F1D1D]/12 blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(214,168,79,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,79,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="bb-eyebrow">
            BUILD WITH BB
          </div>

          <h2 className="mt-3 font-serif text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Start Your
            <span className="bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              {" "}
              BB Journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
            Interested in bringing BB Biryani to your city?
            Share your details and our team can connect with
            you about franchise opportunities.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* =================================================
              LEFT INFO
          ================================================= */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[28px] border border-[#D6A84F]/15 bg-gradient-to-br from-[#1a1209] via-[#100b07] to-[#0b0806] p-6 sm:p-8 lg:p-10"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#D6A84F]/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6A84F]/20 bg-[#D6A84F]/10 text-[#D6A84F]">
                <Sparkles size={21} />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold text-white sm:text-3xl">
                Bring BB Biryani
                <br />
                <span className="text-[#D6A84F]">
                  To Your City.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Join the BB journey and explore the
                opportunity to build a food business around
                authentic taste, quality and customer
                experience.
              </p>

              {/* Highlights */}

              <div className="mt-8 space-y-4">
                {[
                  "Recognizable BB brand experience",
                  "Food-focused business model",
                  "Growing franchise network",
                  "Dedicated franchise enquiry support",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#D6A84F]"
                    />

                    <span className="text-xs text-white/60 sm:text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Contact */}

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="#main-branch"
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition hover:border-[#D6A84F]/25 hover:bg-white/[0.045]"
                >
                  <MapPin
                    size={18}
                    className="text-[#D6A84F]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                      Main Branch
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white/70">
                      Visit BB Biryani
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+910000000000"
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition hover:border-[#D6A84F]/25 hover:bg-white/[0.045]"
                >
                  <Phone
                    size={18}
                    className="text-[#D6A84F]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                      Franchise Desk
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white/70">
                      Contact Us
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================= */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl sm:p-8 lg:p-10"
          >
            {/* Top glow */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#D6A84F]/8 blur-[80px]" />

            <div className="relative z-10">
              <div className="mb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6A84F]">
                  Franchise Enquiry
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Tell us about yourself
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Fill in the details below and submit your
                  enquiry.
                </p>
              </div>

              {/* SUCCESS */}

              {submitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D6A84F]/30 bg-[#D6A84F]/10">
                    <CheckCircle2
                      size={30}
                      className="text-[#D6A84F]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    Enquiry Received
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
                    Thank you for your interest in BB
                    Biryani.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Name */}

                  <div>
                    <label
                      htmlFor="franchise-name"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                    >
                      Full Name
                    </label>

                    <input
                      id="franchise-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#D6A84F]/50 focus:bg-black/30"
                    />
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      htmlFor="franchise-phone"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                    >
                      Phone Number
                    </label>

                    <input
                      id="franchise-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#D6A84F]/50 focus:bg-black/30"
                    />
                  </div>

                  {/* City + Investment */}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="franchise-city"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                      >
                        City
                      </label>

                      <input
                        id="franchise-city"
                        name="city"
                        type="text"
                        required
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#D6A84F]/50 focus:bg-black/30"
                      />
                    </div>

                    
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="franchise-message"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                    >
                      Message
                    </label>

                    <textarea
                      id="franchise-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us anything you'd like us to know..."
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#D6A84F]/50 focus:bg-black/30"
                    />
                  </div>

                  {/* Submit */}

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="group relative mt-2 flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#D6A84F] px-6 text-sm font-bold text-black shadow-[0_15px_45px_rgba(214,168,79,0.15)]"
                  >
                    {/* Shine */}

                    <span className="absolute inset-y-0 -left-[100%] w-1/2 skew-x-[-20deg] bg-white/30 transition-all duration-700 group-hover:left-[130%]" />

                    <span className="relative z-10">
                      Submit Enquiry
                    </span>

                    <Send
                      size={17}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>

                  <p className="pt-1 text-center text-[9px] leading-4 text-white/20">
                    By submitting this form, you are
                    expressing interest in BB Biryani
                    franchise opportunities.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}