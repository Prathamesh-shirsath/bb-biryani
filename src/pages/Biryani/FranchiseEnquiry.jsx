import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  MapPin,
  Phone,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";

const WHATSAPP_NUMBER = "917038925137";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  message: "",
};

export default function FranchiseEnquiry() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     WHATSAPP SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const whatsappMessage = `
Hello BB Biryani Team! 👋

I am interested in taking a BB Biryani franchise.

━━━━━━━━━━━━━━━━━━
FRANCHISE ENQUIRY
━━━━━━━━━━━━━━━━━━

👤 Name:
${form.name}

📱 Phone:
${form.phone}

📧 Email:
${form.email || "Not provided"}

📍 City / Location:
${form.city}

📝 Message:
${form.message || "No additional message"}

━━━━━━━━━━━━━━━━━━
Sent through BB Biryani Website
━━━━━━━━━━━━━━━━━━
`.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section
      id="enquiry"
      className="bb-section relative overflow-hidden bg-[#080604]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[20%] h-72 w-72 rounded-full bg-[#D6A84F]/[0.06] blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-[#8B2E16]/[0.08] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(214,168,79,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214,168,79,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="bb-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A84F]/15 bg-[#D6A84F]/[0.05] px-3 py-1.5">
            <Sparkles
              size={12}
              className="text-[#D6A84F]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
              Franchise Enquiry
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[2.4rem] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Start Your
            <span className="block bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
              BB Journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
            Interested in bringing BB Biryani to your city?
            Fill in your details and connect with our team directly
            on WhatsApp.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">

          {/* =================================================
              LEFT INFO
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#100B07]/80 p-6 backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D6A84F]/10 blur-3xl" />

            <div className="relative">
              {/* Icon */}

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6A84F]/20 bg-[#D6A84F]/[0.07]">
                <Building2
                  size={21}
                  className="text-[#D6A84F]"
                />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                Grow With BB
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/35">
                Tell us a little about yourself and your franchise
                plans. Our team can connect with you directly through
                WhatsApp.
              </p>

              {/* Highlights */}

              <div className="mt-7 space-y-4">
                {[
                  "BB Biryani franchise opportunity",
                  "Food-focused business model",
                  "Growing BB business network",
                  "Direct WhatsApp communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6A84F]/10">
                      <CheckCircle2
                        size={13}
                        className="text-[#D6A84F]"
                      />
                    </div>

                    <span className="text-xs leading-5 text-white/45">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact */}

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D6A84F]">
                  Direct Contact
                </p>

                <a
                  href="https://wa.me/917038925137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D6A84F]/10">
                    <Phone
                      size={15}
                      className="text-[#D6A84F]"
                    />
                  </div>

                  +91 7038925137
                </a>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#D6A84F]"
                  />

                  <p className="text-xs leading-5 text-white/30">
                    Near Toll Plaza, Mhasne Phata,
                    <br />
                    Nagar - Pune Highway,
                    <br />
                    New MIDC Chowk, Supe,
                    <br />
                    Maharashtra - 414301
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#100B07]/80 p-5 backdrop-blur-2xl sm:p-8"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-[#D6A84F]/[0.07] blur-[80px]" />

            <form
              onSubmit={handleSubmit}
              className="relative"
            >
              {/* Form Header */}

              <div className="mb-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D6A84F]">
                  Tell Us About You
                </p>

                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  Franchise Enquiry
                </h3>
              </div>

              {/* =================================================
                  NAME + PHONE
              ================================================== */}

              <div className="grid gap-4 sm:grid-cols-2">

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                  >
                    Full Name *
                  </label>

                  <div
                    className={`group flex min-h-[52px] items-center rounded-xl border bg-white/[0.025] px-4 transition ${
                      errors.name
                        ? "border-red-500/40"
                        : "border-white/[0.08] focus-within:border-[#D6A84F]/40"
                    }`}
                  >
                    <UserRound
                      size={16}
                      className="mr-3 shrink-0 text-white/25 transition group-focus-within:text-[#D6A84F]"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-1.5 text-[10px] text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                  >
                    Phone Number *
                  </label>

                  <div
                    className={`group flex min-h-[52px] items-center rounded-xl border bg-white/[0.025] px-4 transition ${
                      errors.phone
                        ? "border-red-500/40"
                        : "border-white/[0.08] focus-within:border-[#D6A84F]/40"
                    }`}
                  >
                    <Phone
                      size={16}
                      className="mr-3 shrink-0 text-white/25 transition group-focus-within:text-[#D6A84F]"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10 digit mobile number"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1.5 text-[10px] text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  EMAIL + CITY
              ================================================== */}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                  >
                    Email
                  </label>

                  <div className="group flex min-h-[52px] items-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition focus-within:border-[#D6A84F]/40">
                    <span className="mr-3 text-sm text-white/25">
                      @
                    </span>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>
                </div>

                {/* City */}

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                  >
                    City / Location *
                  </label>

                  <div
                    className={`group flex min-h-[52px] items-center rounded-xl border bg-white/[0.025] px-4 transition ${
                      errors.city
                        ? "border-red-500/40"
                        : "border-white/[0.08] focus-within:border-[#D6A84F]/40"
                    }`}
                  >
                    <MapPin
                      size={16}
                      className="mr-3 shrink-0 text-white/25 transition group-focus-within:text-[#D6A84F]"
                    />

                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>

                  {errors.city && (
                    <p className="mt-1.5 text-[10px] text-red-400">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35"
                >
                  Additional Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your franchise plans..."
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#D6A84F]/40"
                />
              </div>

              {/* =================================================
                  WHATSAPP SUBMIT
              ================================================== */}

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#D6A84F] px-6 py-3 text-sm font-bold text-black shadow-[0_20px_50px_rgba(214,168,79,0.15)]"
              >
                {/* Shine */}

                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

                <Send
                  size={17}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  Continue on WhatsApp
                </span>

                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>

              {/* Privacy / info */}

              <p className="mt-4 text-center text-[9px] leading-4 text-white/20">
                Your details will be added to a WhatsApp message.
                You can review the message and send it yourself.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}