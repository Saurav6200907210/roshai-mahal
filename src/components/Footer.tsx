import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { RESTAURANT, waLink } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border bg-gradient-luxe">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-display text-xl font-bold text-primary-foreground">
              R
            </span>
            <div>
              <div className="font-display text-xl text-gradient-gold">Rosahai Mahal</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Teghra · Begusarai
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {RESTAURANT.tagline}. A premium family dining destination near St. Paul Public School,
            Teghra.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={RESTAURANT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram size={16} />
            </a>
            <a
              href={RESTAURANT.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook size={16} />
            </a>
            <a
              href={RESTAURANT.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Menu", "#menu"],
              ["Gallery", "#gallery"],
              ["Reviews", "#reviews"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a className="transition hover:text-primary" href={h}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 text-primary" />
              {RESTAURANT.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 text-primary" />
              <a href={`tel:${RESTAURANT.phoneRaw}`}>{RESTAURANT.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 text-primary" />
              <a href={`mailto:${RESTAURANT.email}`}>{RESTAURANT.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Rosahai Mahal Teghra · All rights reserved.</p>
          <p>
            Created with <span className="text-primary">♥</span> by{" "}
            <a
              href={waLink("Hi Saurav, I came from Rosahai Mahal website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gradient-gold hover:underline"
            >
              Saurav (Monu)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
