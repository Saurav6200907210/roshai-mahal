import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, Download } from "lucide-react";
import { MENU_CARDS, RESTAURANT, waLink } from "@/lib/restaurant";

export function MenuModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-background/85 p-3 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl gold-border bg-card shadow-deep"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border p-4 sm:p-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Menu & Brochure</div>
                <div className="font-display text-xl">Rosahai Mahal Teghra</div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
              <div className="grid gap-5 md:grid-cols-2">
                {MENU_CARDS.map((c) => (
                  <a key={c.url} href={c.url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-border bg-background/40">
                    <img src={c.url} alt={c.title} loading="lazy" className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]" />
                    <div className="flex items-center justify-between gap-2 p-3 text-sm">
                      <span className="text-foreground/90">{c.title}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-primary"><Download size={12}/> Open</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 border-t border-border bg-gradient-luxe p-4">
              <a
                href={waLink("Hi Rosahai Mahal, please share the latest menu.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-deep transition hover:scale-105"
              >
                <MessageCircle size={16} /> WhatsApp {RESTAURANT.whatsappDisplay}
              </a>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary/10"
              >
                <Phone size={16} /> Call {RESTAURANT.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
