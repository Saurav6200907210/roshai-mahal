import { Reveal } from "./Reveal";
import { Award, Users, Utensils, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Utensils, value: "60+", label: "Signature Dishes" },
  { icon: Award, value: "4.8★", label: "Average Rating" },
  { icon: Heart, value: "100%", label: "Made With Love" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl gold-border">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=70"
                alt="Elegant dining at Rosahai Mahal"
                loading="lazy"
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl glass-strong p-4 text-center shadow-gold sm:block">
              <div className="font-display text-3xl text-gradient-gold">15+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Years of Taste</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.35em] text-primary">Our Story</span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              A taste of <span className="text-gradient-gold">royalty</span>,
              served in Teghra.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground">
              At <strong className="text-foreground">Rosahai Mahal Teghra</strong>, we craft
              cinematic dining experiences inspired by Bihar's rich culinary heritage and the
              warmth of family. Every dish — from our slow-dum biryanis to wood-fired tandoori —
              is plated with care for guests who appreciate the finer things.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted-foreground">
              With an elegant AC family hall, private celebration room and an open-kitchen vibe,
              we are your favourite address near St. Paul Public School for birthdays, anniversaries
              and everyday indulgences.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="glass rounded-2xl p-4 text-center transition hover:-translate-y-1 hover:shadow-gold">
                  <s.icon className="mx-auto text-primary" size={22} />
                  <div className="mt-2 font-display text-2xl text-gradient-gold">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
