import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
  X,
} from "lucide-react";

/* =========================================================
   AUTOMATIC LOCAL GALLERY

   Add images here:

   src/assets/gallery/

   Supported:
   jpg
   jpeg
   png
   webp
========================================================= */

const galleryFiles = import.meta.glob(
  "../../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

/* =========================================================
   CONVERT FILES INTO GALLERY OBJECTS
========================================================= */

const galleryImages = Object.entries(galleryFiles)
  .map(([path, image]) => {
    const fileName =
      path.split("/").pop() || "Gallery Image";

    return {
      id: path,
      image,
      name: fileName.replace(/\.[^/.]+$/, ""),
    };
  })
  .sort((a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );

/* =========================================================
   IMAGE COMPONENT
========================================================= */

function GalleryImage({
  src,
  alt,
  index,
  onClick,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute inset-0 h-full w-full overflow-hidden text-left"
      aria-label={`Open ${alt}`}
    >
      {/* Loading */}

      {!loaded && !failed && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#110d09]">
          <div className="h-7 w-7 animate-spin rounded-full border border-white/10 border-t-[#D6A84F]" />
        </div>
      )}

      {/* Error */}

      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-[#110d09]">
          <div className="text-center">
            <ImageIcon
              size={26}
              className="mx-auto text-white/20"
            />

            <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-white/30">
              Image unavailable
            </p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={
            index < 2 ? "high" : "auto"
          }
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={[
            "h-full w-full object-cover",
            "transition duration-700 ease-out",
            loaded
              ? "scale-100 opacity-100"
              : "scale-[1.04] opacity-0",
            "group-hover:scale-110",
          ].join(" ")}
        />
      )}
    </button>
  );
}

/* =========================================================
   GALLERY
========================================================= */

export default function Gallery() {
  const images = useMemo(
    () => galleryImages,
    []
  );

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const [lightboxLoaded, setLightboxLoaded] =
    useState(false);

  const selectedImage =
    selectedIndex !== null
      ? images[selectedIndex]
      : null;

  /* =======================================================
     OPEN
  ======================================================= */

  const openLightbox = (index) => {
    setLightboxLoaded(false);
    setSelectedIndex(index);
  };

  /* =======================================================
     CLOSE
  ======================================================= */

  const closeLightbox = () => {
    setSelectedIndex(null);
    setLightboxLoaded(false);
  };

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const showPrevious = () => {
    if (!images.length) return;

    setLightboxLoaded(false);

    setSelectedIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const showNext = () => {
    if (!images.length) return;

    setLightboxLoaded(false);

    setSelectedIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length]);

  /* =======================================================
     EMPTY
  ======================================================= */

  if (!images.length) {
    return (
      <section
        id="gallery"
        className="relative w-full overflow-hidden bg-[#080604] py-20 sm:py-24 lg:py-32"
      >
        <div className="bb-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bb-eyebrow">
              OUR MEMORIES
            </div>

            <h2 className="mt-3 font-serif text-4xl font-black text-white sm:text-5xl">
              Taste.
              <span className="bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
                {" "}
                Moments.
              </span>
            </h2>

            <div className="mx-auto mt-12 max-w-md rounded-3xl border border-[#D6A84F]/10 bg-white/[0.025] p-10">
              <ImageIcon
                size={32}
                className="mx-auto text-[#D6A84F]/50"
              />

              <h3 className="mt-5 text-lg font-bold text-white">
                Gallery is empty
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Add photos inside
                <br />
                <span className="text-[#D6A84F]/70">
                  src/assets/gallery/
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section
        id="gallery"
        className="relative w-full overflow-hidden bg-[#080604] py-20 sm:py-24 lg:py-32"
      >
        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Gold glow */}

          <div className="absolute left-[-20%] top-[10%] h-72 w-72 rounded-full bg-[#D6A84F]/8 blur-[100px] sm:h-96 sm:w-96" />

          {/* Red glow */}

          <div className="absolute bottom-[5%] right-[-20%] h-80 w-80 rounded-full bg-[#7F1D1D]/10 blur-[110px] sm:h-[500px] sm:w-[500px]" />

          {/* Grid */}

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

          {/* =================================================
              HEADER
          ================================================= */}

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="bb-eyebrow">
              OUR MEMORIES
            </div>

            <h2 className="mt-3 font-serif text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Taste.
              <span className="bg-gradient-to-r from-[#F5D58A] via-[#D6A84F] to-[#A66A16] bg-clip-text text-transparent">
                {" "}
                Moments.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              A glimpse into the BB Biryani experience —
              delicious food, happy moments and unforgettable
              memories.
            </p>

            {/* Photo count */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-[#D6A84F]/20 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A84F] backdrop-blur-xl"
            >
              <ImageIcon size={13} />

              {images.length} Photos
            </motion.div>
          </motion.div>

          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <motion.div
            layout
            className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
          >
            {images.map((image, index) => {
              /*
               * Featured layout
               */

              const isLarge =
                index === 0 ||
                (index > 0 &&
                  index % 7 === 0);

              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(
                      index * 0.04,
                      0.3
                    ),
                  }}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-white/8 bg-[#110d09] shadow-[0_15px_50px_rgba(0,0,0,0.3)]",
                    isLarge
                      ? "aspect-[4/5] sm:row-span-2"
                      : "aspect-square",
                  ].join(" ")}
                >
                  {/* IMAGE */}

                  <GalleryImage
                    src={image.image}
                    
                    index={index}
                    onClick={() =>
                      openLightbox(index)
                    }
                  />

                  {/* DARK OVERLAY */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10 opacity-70 transition duration-500 group-hover:opacity-100" />

                  {/* GOLD BORDER */}

                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition duration-500 group-hover:border-[#D6A84F]/50 group-hover:shadow-[inset_0_0_35px_rgba(214,168,79,0.08)]" />

                  {/* SHINE */}

                  <div className="pointer-events-none absolute -left-[130%] top-[-20%] h-[150%] w-[55%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-[left] duration-1000 ease-out group-hover:left-[130%]" />

                  {/* NUMBER */}

                  <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[8px] font-bold tracking-[0.15em] text-white/65 backdrop-blur-xl">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  {/* BOTTOM INFO */}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <div className="flex items-end justify-between gap-2">
                      

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-xl transition duration-300 group-hover:border-[#D6A84F]/60 group-hover:bg-[#D6A84F] group-hover:text-black">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

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
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6"
            onClick={closeLightbox}
          >
            {/* CLOSE */}

            <motion.button
              type="button"
              whileTap={{
                scale: 0.9,
              }}
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl transition hover:border-[#D6A84F]/40 hover:bg-[#D6A84F] hover:text-black sm:right-6 sm:top-6"
              aria-label="Close gallery"
            >
              <X size={20} />
            </motion.button>

            {/* COUNTER */}

            <div className="absolute left-4 top-5 z-40 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:left-6 sm:top-7">
              {selectedIndex + 1} /{" "}
              {images.length}
            </div>

            {/* PREVIOUS */}

            {images.length > 1 && (
              <motion.button
                type="button"
                whileTap={{
                  scale: 0.9,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition hover:border-[#D6A84F]/50 hover:bg-[#D6A84F] hover:text-black sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous image"
              >
                <ArrowLeft size={19} />
              </motion.button>
            )}

            {/* LIGHTBOX IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative flex max-h-[82svh] max-w-[92vw] items-center justify-center sm:max-h-[88svh] sm:max-w-[88vw]"
            >
              {!lightboxLoaded && (
                <div className="absolute left-1/2 top-1/2 z-20 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-2 border-white/10 border-t-[#D6A84F]" />
              )}

              <img
                key={selectedImage.id}
                src={selectedImage.image}
                alt={selectedImage.name}
                onLoad={() =>
                  setLightboxLoaded(true)
                }
                className={[
                  "max-h-[82svh] max-w-[92vw] rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.7)] transition-opacity duration-300 sm:max-h-[88svh] sm:max-w-[88vw]",
                  lightboxLoaded
                    ? "opacity-100"
                    : "opacity-0",
                ].join(" ")}
              />
            </motion.div>

            {/* NEXT */}

            {images.length > 1 && (
              <motion.button
                type="button"
                whileTap={{
                  scale: 0.9,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition hover:border-[#D6A84F]/50 hover:bg-[#D6A84F] hover:text-black sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next image"
              >
                <ArrowRight size={19} />
              </motion.button>
            )}

            {/* BOTTOM INFO */}

            <div className="absolute bottom-4 left-1/2 z-40 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl sm:bottom-6 sm:w-auto sm:min-w-[360px]">
              <p className="min-w-0 truncate text-xs font-semibold text-white/80">
                {selectedImage.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}