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

export function App() {
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
