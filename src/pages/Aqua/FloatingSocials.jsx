import { motion } from "motion/react";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bbaquaofficial?stkn=MWhwZ2N3MGV0dWprbA%3D%3D&utm_source=qr",
    image: "/social/instagram.png",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@bantishethbiryaniwale?si=IFpozO6f3tszIEK4",
    image: "/social/youtube.png",
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed right-3 top-1/2 z-[100] -translate-y-1/2 sm:right-5">
      <div className="flex flex-col gap-2.5 rounded-full border border-white/10 bg-black/45 p-2 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">

        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            initial={{
              opacity: 0,
              x: 25,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.12,
              x: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] shadow-lg transition-colors duration-300 hover:border-[#D6A84F]/50 hover:bg-white/[0.12] sm:h-11 sm:w-11"
          >
            <img
              src={social.image}
              alt={social.name}
              className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
            />

            {/* Glow */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[#D6A84F]/0 blur-md transition duration-300 group-hover:bg-[#D6A84F]/20" />

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-[calc(100%+10px)] hidden whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-3 py-1.5 text-[10px] font-medium text-white/80 opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100 sm:block">
              {social.name}
            </span>
          </motion.a>
        ))}

      </div>
    </div>
  );
}