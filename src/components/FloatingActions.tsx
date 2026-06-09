import { CalendarHeart } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        style={{ animationDelay: "1.7s" }}
        href="#contact"
        className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
      >
        <CalendarHeart size={16} /> Book Table
      </a>
    </div>
  );
}
