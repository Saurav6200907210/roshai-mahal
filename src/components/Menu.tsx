import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Star, Leaf } from "lucide-react";
import { CATEGORIES, MENU, waLink, type Category } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function Menu() {
  const [cat, setCat] = useState<Category>("All");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return MENU.filter(
      (m) =>
        (cat === "All" || m.category === cat) &&
        (q.trim() === "" || m.name.toLowerCase().includes(q.toLowerCase()))
    );
  }, [cat, q]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Our Menu</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Signature <span className="text-gradient-gold">Dishes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Crafted with royal recipes, premium ingredients and a touch of Bihari soul.
          </p>
        </Reveal>

        {/* Search + Filters */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search dishes…"
                aria-label="Search menu"
                className="w-full rounded-full border border-border bg-card/60 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:bg-card"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                    cat === c ? "text-primary-foreground" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {cat === c && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-gold shadow-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((m) => (
              <motion.article
                layout
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="tilt-card group overflow-hidden rounded-2xl glass"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-sm border ${
                        m.veg ? "border-emerald-500/70 text-emerald-400" : "border-red-500/70 text-red-400"
                      } bg-background/80`}
                      aria-label={m.veg ? "Vegetarian" : "Non-vegetarian"}
                    >
                      <span className={`block h-2 w-2 rounded-full ${m.veg ? "bg-emerald-400" : "bg-red-400"}`} />
                    </span>
                    {m.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        <Star size={10} /> Popular
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg leading-tight">{m.name}</h3>
                    <span className="shrink-0 text-gradient-gold font-display text-lg whitespace-nowrap">₹{m.price}</span>
                  </div>
                  {m.desc && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{m.desc}</p>}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                      <Leaf size={12} /> {m.category}
                    </span>
                    <a
                      href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(
                        `Hi Rosahai Mahal, I'd like to order: ${m.name} (₹${m.price})`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {items.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">No dishes found. Try a different search.</p>
        )}
      </div>
    </section>
  );
}
