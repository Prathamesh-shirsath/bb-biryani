import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Image as ImageIcon,
  X,
} from "lucide-react";

const galleryFiles = import.meta.glob(
  "../../assets/aqua-gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const galleryImages = Object.entries(galleryFiles).map(
  ([path, url], index) => ({
    id: index,
    path,
    url,
  })
);

export default function AquaGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const showPrevious = () => {
    if (selectedImage === null || galleryImages.length === 0) return;

    const currentIndex = galleryImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + galleryImages.length) %
      galleryImages.length;

    setSelectedImage(galleryImages[previousIndex]);
  };

  const showNext = () => {
    if (selectedImage === null || galleryImages.length === 0) return;

    const currentIndex = galleryImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex =
      (currentIndex + 1) % galleryImages.length;

    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <section
      id="gallery"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F5FBFF]
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
            y: [0, -25, 0],
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
            x: [0, -45, 0],
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
              bg-white/70
              px-4
              py-2
              shadow-sm
              backdrop-blur-xl
            "
          >
            <ImageIcon className="h-4 w-4 text-cyan-600" />

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
              BB Aqua Gallery
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
            See The
            <span className="block text-cyan-600">
              BB Aqua Experience.
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
            Explore bottles, branding, packaging and finished
            presentations. Add your own Aqua images to the gallery folder
            anytime.
          </p>
        </motion.div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {galleryImages.length === 0 ? (
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
            className="
              mx-auto
              mt-12
              flex
              max-w-2xl
              flex-col
              items-center
              justify-center
              rounded-[2rem]
              border
              border-dashed
              border-cyan-200
              bg-white/70
              px-6
              py-16
              text-center
              shadow-[0_20px_70px_rgba(6,40,61,0.06)]
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-50
              "
            >
              <ImageIcon className="h-7 w-7 text-cyan-600" />
            </div>

            <h3 className="mt-5 text-xl font-black">
              Aqua Gallery Coming Soon
            </h3>
{/*}
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Add your Aqua images inside
              <span className="font-semibold text-cyan-700">
                {" "}
                src/assets/aqua-gallery
              </span>
              {" "}
              and they will automatically appear here.
            </p>*/}
          </motion.div>
        ) : (
          /* ===================================================
             GALLERY GRID
          ==================================================== */

          <div
            className="
              mt-12
              grid
              grid-cols-2
              gap-3
              sm:mt-16
              sm:grid-cols-3
              sm:gap-5
              lg:grid-cols-4
            "
          >
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                whileHover={{
                  y: -5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setSelectedImage(image)}
                className="
                  group
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[1.35rem]
                  border
                  border-white
                  bg-white
                  text-left
                  shadow-[0_15px_50px_rgba(6,40,61,0.08)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-cyan-500
                  sm:rounded-[1.75rem]
                "
              >
                <img
                  src={image.url}
                  alt={`BB Aqua gallery ${index + 1}`}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  loading="lazy"
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#06283D]/75
                    via-transparent
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Expand */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/20
                    text-white
                    opacity-100
                    backdrop-blur-md
                    sm:opacity-0
                    sm:transition-opacity
                    sm:duration-300
                    sm:group-hover:opacity-100
                  "
                >
                  <Expand className="h-4 w-4" />
                </div>

                {/* Bottom */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-4
                    text-white
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-cyan-200
                    "
                  >
                    BB AQUA
                  </p>

                  <p className="mt-1 text-xs font-bold sm:text-sm">
                    Explore Image
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* =====================================================
            BOTTOM CTA
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
            mx-auto
            mt-10
            max-w-3xl
            text-center
            sm:mt-14
          "
        >
          <p className="text-sm text-slate-500">
            Want your brand to be part of the next BB Aqua showcase?
          </p>

          <a
            href="#enquiry"
            className="
              mt-5
              inline-flex
              min-h-[50px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#06283D]
              px-6
              text-sm
              font-bold
              text-white
              shadow-lg
              transition-transform
              duration-300
              hover:-translate-y-1
              sm:w-auto
            "
          >
            Start Bottle Branding
            <ArrowRight className="h-4 w-4 text-cyan-300" />
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {selectedImage && (
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
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#021824]/90
              p-4
              backdrop-blur-xl
            "
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-xl
              "
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous */}

            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="
                  absolute
                  left-3
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                  sm:left-6
                "
                aria-label="Previous image"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}

            {/* Image */}

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                max-h-[88vh]
                max-w-[92vw]
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_30px_100px_rgba(0,0,0,0.4)]
                sm:rounded-3xl
              "
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt="BB Aqua gallery preview"
                className="
                  max-h-[88vh]
                  max-w-[92vw]
                  object-contain
                "
              />
            </motion.div>

            {/* Next */}

            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="
                  absolute
                  right-3
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                  sm:right-6
                "
                aria-label="Next image"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}