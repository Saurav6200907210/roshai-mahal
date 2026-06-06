import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-luxe p-8 text-center shadow-deep gold-border sm:p-14">
            <div className="absolute inset-0 -z-10 bg-radial-gold opacity-60" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">Newsletter</span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">
              Get <span className="text-gradient-gold">royal offers</span> in your inbox
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Festive menus, private booking deals and chef's specials — straight from Rosahai Mahal.
            </p>
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                if (!email) return;
                toast.success("Welcome to the family! Check your inbox soon.");
                setEmail("");
              }}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-border bg-background/60 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
                />
              </div>
              <button className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
