import { TESTIMONIALS } from "@/lib/restaurant";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Reviews</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Loved by <span className="text-gradient-gold">our guests</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-5 animate-marquee">
          {loop.map((t, i) => (
            <article key={i} className="w-[320px] shrink-0 rounded-2xl glass p-6 sm:w-[380px]">
              <Quote className="text-primary/60" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="mt-3">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
