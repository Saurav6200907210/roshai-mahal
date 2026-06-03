import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const open = idx !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") setIdx((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Gallery</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Moments of <span className="text-gradient-gold">indulgence</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GALLERY.map((src, i) => (
            <Reveal key={src} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Open image ${i + 1}`}
                className={`group relative block w-full overflow-hidden rounded-2xl gold-border ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Rosahai Mahal gallery ${i + 1}`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/70 text-primary opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <ZoomIn size={16} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/90 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setIdx(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setIdx(null); }}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIdx((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)); }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-primary hover:text-primary-foreground sm:left-6"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIdx((i) => (i === null ? i : (i + 1) % GALLERY.length)); }}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-primary hover:text-primary-foreground sm:right-6"
            >
              <ChevronRight size={18} />
            </button>
            <motion.img
              key={GALLERY[idx]}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={GALLERY[idx]}
              alt={`Gallery ${idx + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-deep"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              {idx + 1} / {GALLERY.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
