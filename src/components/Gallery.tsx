import { GALLERY } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function Gallery() {
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
              <div
                className={`group relative overflow-hidden rounded-2xl gold-border ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Restaurant gallery ${i + 1}`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
