import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { RESTAURANT, waLink } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function BookingContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      toast.error("Please fill name, phone and date.");
      return;
    }
    const msg = `Hello Rosahai Mahal, I'd like to book a table.\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nNote: ${form.note}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to confirm your booking…");
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Visit Us</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Reserve your <span className="text-gradient-gold">royal table</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Booking form */}
          <Reveal>
            <form
              id="book"
              onSubmit={submit}
              className="rounded-3xl glass-strong p-6 sm:p-8 shadow-deep"
            >
              <h3 className="font-display text-2xl">Book a Table</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll confirm instantly on WhatsApp.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Your name"
                />
                <Field
                  label="Phone"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  placeholder="10-digit number"
                  type="tel"
                />
                <Field
                  label="Date"
                  value={form.date}
                  onChange={(v) => setForm({ ...form, date: v })}
                  type="date"
                />
                <Field
                  label="Time"
                  value={form.time}
                  onChange={(v) => setForm({ ...form, time: v })}
                  type="time"
                />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-guests"
                    className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Guests
                  </label>
                  <select
                    id="booking-guests"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    {["1", "2", "3", "4", "5", "6", "8", "10+"].map((n) => (
                      <option key={n} value={n}>
                        {n} guest{n === "1" ? "" : "s"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-note"
                    className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Special note
                  </label>
                  <textarea
                    id="booking-note"
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    rows={3}
                    placeholder="Birthday, AC family hall, dietary preference…"
                    className="w-full resize-none rounded-xl border border-border bg-card/60 px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.02]"
              >
                <Send size={16} /> Confirm Booking
              </button>
            </form>
          </Reveal>

          {/* Info + Map */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoCard
                  icon={MapPin}
                  title="Address"
                  lines={[RESTAURANT.address]}
                  href={RESTAURANT.mapsLink}
                />
                <InfoCard
                  icon={Phone}
                  title="Call us"
                  lines={[RESTAURANT.phone]}
                  href={`tel:${RESTAURANT.phoneRaw}`}
                />
                <InfoCard
                  icon={Mail}
                  title="Email"
                  lines={[RESTAURANT.email]}
                  href={`mailto:${RESTAURANT.email}`}
                />
                <InfoCard icon={Clock} title="Open Daily" lines={[RESTAURANT.hours]} />
              </div>

              <div className="relative flex-1 overflow-hidden rounded-3xl gold-border min-h-[280px]">
                <iframe
                  title="Rosahai Mahal Teghra location"
                  src={RESTAURANT.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[280px] w-full grayscale-[40%] contrast-110"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  const id = `booking-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof Mail;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="h-full rounded-2xl glass p-5 transition hover:-translate-y-1 hover:shadow-gold">
      <Icon className="text-primary" size={20} />
      <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-sm text-foreground/90">
          {l}
        </p>
      ))}
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
