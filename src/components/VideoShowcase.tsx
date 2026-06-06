import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { VIDEOS } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function VideoShowcase() {
  return (
    <section id="videos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">Video Gallery</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Step inside <span className="text-gradient-gold">Rosahai Mahal</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A glimpse of our royal ambience, sizzling kitchen and warm hospitality.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.05}>
              <VideoCard src={v.src} title={v.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl gold-border bg-card/40"
    >
      <video
        ref={ref}
        src={src}
        muted={muted}
        loop
        playsInline
        preload="none"
        aria-label={title}
        className="aspect-[9/16] h-full w-full object-cover sm:aspect-video"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Rosahai Mahal</div>
          <div className="font-display text-lg">{title}</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
            className="grid h-9 w-9 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition hover:scale-110"
          >
            {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
