import { useEffect, useRef } from "react";
import { getImagePath } from "../../lib/utils";

export function About() {
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px"
      }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imagesRef.current) observer.observe(imagesRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imagesRef.current) observer.unobserve(imagesRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-luxo-cream">
      <div className="luxo-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            ref={textRef}
            className="opacity-0 -translate-x-20 transition-all duration-1000"
          >
            <div className="inline-block mb-2 px-3 py-1 bg-luxo-purple/10 text-luxo-purple rounded-full text-sm font-medium">
              OUR STORY
            </div>
            <h2 className="section-heading">A New Definition of Luxury</h2>
            <p className="section-subheading">
              Established in 2023, LuxoVista represents the pinnacle of modern luxury hospitality. Our architectural marvel stands as a testament to innovative design and uncompromising comfort.
            </p>
            <p className="text-luxo-gray-dark mb-6">
              Every aspect of LuxoVista has been meticulously crafted to create an atmosphere of refined elegance. From the striking façade to the carefully curated interiors, our hotel exemplifies a perfect balance between cutting-edge aesthetics and timeless sophistication.
            </p>
            <p className="text-luxo-gray-dark mb-8">
              Our vision encompasses more than just providing accommodations; we aim to create transformative experiences that resonate long after your stay. With personalized service that anticipates your every need, we redefine what luxury means in the modern age.
            </p>
            <a href="#rooms" className="luxo-btn-primary">
              Explore Our Rooms
            </a>
          </div>
          <div 
            ref={imagesRef}
            className="grid grid-cols-2 gap-4 opacity-0 translate-x-20 transition-all duration-1000"
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={getImagePath("/images/gallery/hotel-facade.jpg")} 
                  alt="Hotel exterior architecture" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={getImagePath("/images/gallery/rooftop-lounge.jpg")} 
                  alt="Luxury hotel room" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={getImagePath("/images/gallery/celestial-spa.jpg")} 
                  alt="Luxury spa" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={getImagePath("/images/gallery/pool-area.jpg")} 
                  alt="Hotel swimming pool" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
