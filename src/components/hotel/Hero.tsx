import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    imageUrl: "luxo-vista/images/gallery/hero-bg.jpg",
    title: "Experience Ultimate Luxury",
    subtitle: "Where Modern Design Meets Timeless Elegance"
  },
  {
    id: 2,
    imageUrl: "luxo-vista/images/gallery/aurora-restaurant.jpg",
    title: "Exquisite Culinary Journey",
    subtitle: "Savor Our Michelin-Starred Creations"
  },
  {
    id: 3,
    imageUrl: "luxo-vista/images/gallery/premium-suite.jpg",
    title: "Personalized Sanctuary",
    subtitle: "Your Private Retreat In The Heart Of Luxury"
  },
  {
    id: 4,
    imageUrl: "luxo-vista/images/gallery/celestial-spa.jpg",
    title: "Wellness & Rejuvenation",
    subtitle: "Discover Inner Peace in Our Luxurious Spa"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center z-10">
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="#booking" 
                  className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Book Your Stay
                </a>
                <a 
                  href="#gallery" 
                  className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Explore Our Hotel
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white z-20 hover:text-purple-200 transition-colors p-4"
      >
        <svg 
          className="w-8 h-8 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </button>
    </section>
  );
}
