import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  User,
} from "lucide-react";

const initialForm = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  quantity: "",
  requirement: "",
};

const requirements = [
  "BB Aqua Branded Water",
  "Custom Bottle Branding",
  "Hotel / Restaurant",
  "Wedding / Event",
  "Corporate Requirement",
  "Bulk Requirement",
  "Other",
];

export default function AquaBulkOrder() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello BB Aqua,

I would like to enquire about a bulk / bottle branding requirement.

Name: ${form.name}
Business / Organisation: ${form.businessName}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Quantity: ${form.quantity || "Not specified"}
Requirement: ${form.requirement || "Not specified"}

Please share the available options and further details.
    `.trim();

    const whatsappNumber = "917038925137";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="enquiry"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20
        text-[#06283D]
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
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-80
            w-80
            rounded-full
            bg-cyan-200/30
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
            bottom-10
            h-96
            w-96
            rounded-full
            bg-sky-200/25
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#06283D 1px, transparent 1px), linear-gradient(90deg, #06283D 1px, transparent 1px)",
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
              border-cyan-100
              bg-cyan-50
              px-4
              py-2
            "
          >
            <PackageCheck className="h-4 w-4 text-cyan-600" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-cyan-700
                sm:text-xs
              "
            >
              Bulk & Branding Enquiry
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
            Need Bottles For
            <span className="block text-cyan-600">
              Your Business?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            Tell us about your requirement. Whether you need BB Aqua
            branded water or custom bottle branding, send your details
            and continue the conversation on WhatsApp.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:mt-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-start
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT INFORMATION
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
              bg-[#06283D]
              p-6
              text-white
              shadow-[0_25px_80px_rgba(6,40,61,0.15)]
              sm:p-8
              lg:sticky
              lg:top-28
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-cyan-300/10
              "
            >
              <Building2 className="h-6 w-6 text-cyan-300" />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-black
                tracking-tight
                sm:text-3xl
              "
            >
              Let's build your
              <span className="text-cyan-300">
                {" "}
                bottle identity.
              </span>
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-300
              "
            >
              Share your basic requirement and our team can continue
              the discussion about your bottle branding or bulk
              requirement.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "BB Aqua branded water",
                "Custom Bottle Branding",
                "Business & event requirements",
                "Bulk enquiries",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-300/10
                    "
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  </div>

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

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
                    Your enquiry will open directly in WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================== */}

          <motion.form
            onSubmit={handleSubmit}
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
              duration: 0.8,
            }}
            className="
              rounded-[2rem]
              border
              border-slate-200
              bg-white
              p-5
              shadow-[0_25px_80px_rgba(6,40,61,0.08)]
              sm:p-7
              lg:p-8
            "
          >
            {/* Name + Business */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                icon={User}
                required
              />

              <Field
                label="Business / Organisation"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="Business name"
                icon={Building2}
                required
              />
            </div>

            {/* Phone + Email */}

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                icon={Phone}
                type="tel"
                required
              />

              <Field
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                icon={Mail}
                type="email"
              />
            </div>

            {/* Quantity */}

            <div className="mt-5">
              <Field
                label="Approximate Quantity"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Example: 500 bottles"
                icon={PackageCheck}
              />
            </div>

            {/* Requirement */}

            <div className="mt-5">
              <label
                htmlFor="requirement"
                className="
                  mb-2
                  block
                  text-xs
                  font-bold
                  text-[#06283D]
                "
              >
                Requirement
              </label>

              <select
                id="requirement"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                className="
                  min-h-[50px]
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  text-sm
                  text-[#06283D]
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-cyan-100
                "
              >
                <option value="">
                  Select your requirement
                </option>

                {requirements.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional details */}

            <div className="mt-5">
              <label
                htmlFor="additionalRequirement"
                className="
                  mb-2
                  block
                  text-xs
                  font-bold
                  text-[#06283D]
                "
              >
                Additional Requirement
              </label>

              <textarea
                id="additionalRequirement"
                name="additionalRequirement"
                placeholder="Tell us about your branding, event or bulk requirement..."
                rows={5}
                value={form.additionalRequirement || ""}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    additionalRequirement: event.target.value,
                  }))
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                  text-sm
                  text-[#06283D]
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-cyan-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-cyan-100
                "
              />
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="
                mt-6
                flex
                min-h-[54px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#06283D]
                px-6
                text-sm
                font-black
                text-white
                shadow-[0_15px_35px_rgba(6,40,61,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(6,40,61,0.25)]
              "
            >
              <Send className="h-4 w-4 text-cyan-300" />

              Send Enquiry on WhatsApp

              <ArrowRight className="h-4 w-4 text-cyan-300" />
            </button>

            {submitted && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-3
                  text-center
                  text-xs
                  font-semibold
                  text-green-700
                "
              >
                Your enquiry is ready in WhatsApp.
              </motion.div>
            )}

            <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
              By submitting, you will be redirected to WhatsApp to
              continue the enquiry.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FIELD COMPONENT
============================================================ */

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-xs
          font-bold
          text-[#06283D]
        "
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-cyan-600
          "
        />

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="
            min-h-[50px]
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            pl-11
            pr-4
            text-sm
            text-[#06283D]
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-cyan-400
            focus:bg-white
            focus:ring-4
            focus:ring-cyan-100
          "
        />
      </div>
    </div>
  );
}