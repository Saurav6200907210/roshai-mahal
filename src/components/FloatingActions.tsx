import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
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
