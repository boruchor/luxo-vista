import { Navbar } from "../components/hotel/Navbar";
import { Footer } from "../components/hotel/Footer";
import { Gallery } from "../components/hotel/Gallery";

export const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="relative h-[50vh] bg-luxo-charcoal/95 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/gallery/hero-bg.jpg')" }}
          ></div>
          <div className="relative luxo-container h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Gallery</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Take a visual journey through our luxurious spaces and amenities
            </p>
          </div>
        </section>

        <Gallery />
      </div>
      <Footer />
    </>
  );
};
