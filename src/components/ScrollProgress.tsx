import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScaleX(max > 0 ? window.scrollY / max : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      style={{ transform: `scaleX(${scaleX})` }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-gold"
      aria-hidden
    />
  );
}
