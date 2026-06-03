import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#videos", label: "Videos" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-3 z-50 mx-auto w-[min(96%,1200px)] rounded-2xl transition-all duration-500 ${
        scrolled ? "glass-strong shadow-deep" : "glass"
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold font-display text-lg font-bold text-primary-foreground shadow-gold">
            R
          </span>
          <span className="font-display text-lg leading-tight">
            <span className="block text-gradient-gold">Rosahai Mahal</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Teghra</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/85 transition hover:text-primary"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#book"
            className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
          >
            Book Table
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 text-primary md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-primary/10 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-2">
                <a href="#book" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-gradient-gold py-2 text-center text-sm font-semibold text-primary-foreground">Book Table</a>
                <a href="tel:+919000000000" className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary"><Phone size={16}/></a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
