/** @jsxImportSource @emotion/react */
import React from "react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import { FC } from "react";

export const AboutPage: FC = () => {
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Discover the legacy of luxury and excellence that defines LuxoVista.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="luxo-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxo-charcoal mb-6">
                  A Legacy of Luxury Since 1995
                </h2>
                <p className="text-luxo-gray mb-6">
                  For over two decades, LuxoVista has been setting the standard for luxury hospitality. 
                  What began as a vision to create an unparalleled guest experience has evolved into 
                  one of the most prestigious hotel brands in the world.
                </p>
                <p className="text-luxo-gray">
                  Our commitment to excellence, attention to detail, and dedication to personalized 
                  service have earned us numerous accolades and the loyalty of discerning travelers 
                  from around the globe.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img 
                  src="/images/about/story-image.jpg" 
                  alt="LuxoVista Legacy" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-luxo-purple/5">
          <div className="luxo-container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxo-charcoal text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-serif text-luxo-charcoal mb-4">Excellence</h3>
                <p className="text-luxo-gray">
                  We strive for perfection in every detail, ensuring each guest experience exceeds expectations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-serif text-luxo-charcoal mb-4">Innovation</h3>
                <p className="text-luxo-gray">
                  We continuously evolve and innovate to provide cutting-edge luxury experiences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-serif text-luxo-charcoal mb-4">Sustainability</h3>
                <p className="text-luxo-gray">
                  We are committed to sustainable luxury, minimizing our environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="luxo-container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxo-charcoal text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img 
                    src="/images/about/team-1.jpg" 
                    alt="Sarah Chen - Chief Executive Officer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-serif text-luxo-charcoal mb-2">Sarah Chen</h3>
                <p className="text-luxo-purple mb-4">Chief Executive Officer</p>
                <p className="text-luxo-gray">
                  With over 20 years of experience in luxury hospitality.
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img 
                    src="/images/about/team-2.jpg" 
                    alt="Michael Rodriguez - Operations Director" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-serif text-luxo-charcoal mb-2">Michael Rodriguez</h3>
                <p className="text-luxo-purple mb-4">Operations Director</p>
                <p className="text-luxo-gray">
                  Ensuring seamless operations and exceptional service delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img 
                    src="/images/about/team-3.jpg" 
                    alt="Emma Thompson - Guest Experience Director" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-serif text-luxo-charcoal mb-2">Emma Thompson</h3>
                <p className="text-luxo-purple mb-4">Guest Experience Director</p>
                <p className="text-luxo-gray">
                  Dedicated to creating unforgettable moments for our guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-luxo-purple text-white">
          <div className="luxo-container text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Experience Luxury at Its Finest
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable stay where every moment is crafted with care and attention to detail.
            </p>
            <button className="luxo-btn-outline text-white border-white">
              Book Your Stay
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
