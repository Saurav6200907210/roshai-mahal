import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart } from "lucide-react";
import { waLink } from "@/lib/restaurant";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent("Hi Rosahai Mahal, I'd like to order food.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-deep transition hover:scale-110"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle size={22} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        href="#book"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
      >
        <CalendarHeart size={16} /> Book Table
      </motion.a>
    </div>
  );
}
