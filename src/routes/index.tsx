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

const TITLE = "Best Family Restaurant in Teghra | Rasoi Mahal Banquet Hall";
const DESC =
  "Visit Rasoi Mahal Teghra, the best family AC restaurant in Begusarai. Enjoy top Indian & Chinese food, or book our premium banquet hall for weddings & parties.";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Restaurant"],
      "@id": "https://rasoi-mahal.com/#restaurant",
      name: "Rasoi Mahal Teghra",
      image: "https://rasoi-mahal.com/gallery/Screenshot 2026-06-08 085446.png",
      url: "https://rasoi-mahal.com",
      telephone: "+919798507612",
      priceRange: "₹₹",
      servesCuisine: ["Indian", "Chinese", "Biryani", "Tandoor"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Station Road, Near St. Paul Public School",
        addressLocality: "Teghra",
        addressRegion: "Bihar",
        postalCode: "851133",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.4418",
        longitude: "85.9683",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "23:00",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best family restaurant in Teghra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rasoi Mahal Teghra is widely considered the best family AC restaurant in Teghra, offering a mix of Indian, Chinese, and Tandoori cuisines in a premium dining environment.",
          },
        },
        {
          "@type": "Question",
          name: "Does Rasoi Mahal have a banquet hall for birthday parties and weddings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Rasoi Mahal features a luxurious banquet hall perfect for wedding venues, birthday parties, and corporate events in Teghra.",
          },
        },
      ],
    },
  ],
};
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Best Restaurant in Teghra, Family Restaurant in Teghra, AC Restaurant in Teghra, Banquet Hall in Teghra, Best Food in Teghra, Birthday Party Venue in Teghra, Wedding Venue in Teghra, Restaurant Near Teghra Railway Station, Rasoi Mahal Teghra",
      },
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(SCHEMA) }],
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
