import { lazy, Suspense, useEffect, useRef, useState, type ComponentType } from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollProgress } from "@/components/ScrollProgress";

const About = lazy(() => import("@/components/About").then((m) => ({ default: m.About })));
const Menu = lazy(() => import("@/components/Menu").then((m) => ({ default: m.Menu })));
const VideoShowcase = lazy(() =>
  import("@/components/VideoShowcase").then((m) => ({ default: m.VideoShowcase })),
);
const Gallery = lazy(() => import("@/components/Gallery").then((m) => ({ default: m.Gallery })));
const Testimonials = lazy(() =>
  import("@/components/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const BookingContact = lazy(() =>
  import("@/components/BookingContact").then((m) => ({ default: m.BookingContact })),
);
const FAQ = lazy(() => import("@/components/FAQ").then((m) => ({ default: m.FAQ })));
const Newsletter = lazy(() =>
  import("@/components/Newsletter").then((m) => ({ default: m.Newsletter })),
);
const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

export function App() {
  return (
    <>
      <ScrollProgress />
      <Toaster theme="dark" position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <LazySection id="about" component={About} minHeight={760} />
        <LazySection id="menu" component={Menu} minHeight={920} />
        <LazySection id="videos" component={VideoShowcase} minHeight={720} />
        <LazySection id="gallery" component={Gallery} minHeight={900} />
        <LazySection id="reviews" component={Testimonials} minHeight={620} />
        <LazySection id="contact" component={BookingContact} minHeight={980} />
        <LazySection id="faq" component={FAQ} minHeight={620} />
        <LazySection id="newsletter" component={Newsletter} minHeight={420} />
      </main>
      <LazySection id="footer" component={Footer} minHeight={360} />
      <FloatingActions />
    </>
  );
}

function LazySection({
  id,
  component: Component,
  minHeight,
}: {
  id: string;
  component: ComponentType;
  minHeight: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldLoad]);

  if (!shouldLoad) {
    return <div ref={ref} id={id} style={{ minHeight }} />;
  }

  return (
    <Suspense fallback={<div id={id} style={{ minHeight }} />}>
      <Component />
    </Suspense>
  );
}
