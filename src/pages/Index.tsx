import { Navbar } from "@/components/hotel/Navbar";
import { Hero } from "@/components/hotel/Hero";
import { About } from "@/components/hotel/About";
import { Rooms } from "@/components/hotel/Rooms";
import { Amenities } from "@/components/hotel/Amenities";
import { Gallery } from "@/components/hotel/Gallery";
import { Testimonials } from "@/components/hotel/Testimonials";
import { Booking } from "@/components/hotel/Booking";
import { Contact } from "@/components/hotel/Contact";
import { Footer } from "@/components/hotel/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}
