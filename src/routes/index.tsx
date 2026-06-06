import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingContact } from "@/components/BookingContact";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { VideoShowcase } from "@/components/VideoShowcase";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollProgress } from "@/components/ScrollProgress";
import { RESTAURANT } from "@/lib/restaurant";

const TITLE = "Rosahai Mahal Teghra | Family Restaurant";
const DESC = "Rosahai Mahal Teghra — a luxury family restaurant near St. Paul Public School, Teghra, Begusarai. Royal biryanis, tandoor, Chinese, thali & desserts. Book a table or order on WhatsApp.";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT.name,
  image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=70",
  servesCuisine: ["Indian", "Biryani", "Tandoor", "Chinese", "South Indian", "Fast Food"],
  priceRange: "₹₹",
  telephone: RESTAURANT.phone,
  email: RESTAURANT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near St. Paul Public School",
    addressLocality: "Teghra",
    addressRegion: "Bihar",
    postalCode: "851133",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 11:00-23:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "320" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "restaurant Teghra, Begusarai restaurant, Rosahai Mahal, biryani Teghra, family restaurant Bihar, table booking Teghra, St Paul Teghra restaurant" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "theme-color", content: "#0d0a08" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(SCHEMA) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <Toaster theme="dark" position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <VideoShowcase />
        <Gallery />
        <Testimonials />
        <BookingContact />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
