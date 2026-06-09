import { useState } from "react";
import { ChevronDown, UtensilsCrossed, BookOpen } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { RESTAURANT } from "@/lib/restaurant";
import { MenuModal } from "./MenuModal";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Luxury restaurant interior at Rosahai Mahal"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/50 blur-[2px]"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: `${4 + (i % 4)}px`,
              height: `${4 + (i % 4)}px`,
              animation: `float ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
              opacity: 0.35,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 pt-28 text-center sm:px-6">
        <span
          style={{ animationDelay: "0.2s" }}
          className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary"
        >
          Premium Family A.C Restaurant
        </span>

        <h1
          style={{ animationDelay: "0.35s" }}
          className="mt-6 animate-fade-up font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-gradient-gold">Rosahai Mahal</span>
          <span className="mt-2 block text-foreground/90">Teghra</span>
        </h1>

        <p
          style={{ animationDelay: "0.55s" }}
          className="mt-6 max-w-2xl animate-fade-up text-balance text-base text-muted-foreground sm:text-lg"
        >
          {RESTAURANT.tagline}. A royal dining experience in the heart of Begusarai, authentic
          Indian flavours, cinematic interiors and warm family hospitality.
        </p>

        <div
          style={{ animationDelay: "0.75s" }}
          className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
          >
            <UtensilsCrossed size={16} /> View Menu
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/30 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-primary hover:bg-primary/10"
          >
            <BookOpen size={16} /> Menu PDF & WhatsApp
          </button>
        </div>

        <div
          style={{ animationDelay: "1.2s" }}
          className="absolute bottom-8 left-1/2 animate-fade-up -translate-x-1/2 text-primary"
        >
          <ChevronDown className="animate-bounce" />
        </div>
      </div>

      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
