import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users2, Maximize2, BedDouble } from "lucide-react";
import { cn, getImagePath } from "@/lib/utils";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    description: "Experience unparalleled luxury in our spacious deluxe suite featuring panoramic city views, a private balcony, and exclusive amenities.",
    price: "$450",
    imageUrl: getImagePath("/images/gallery/deluxe-suite.jpg"),
    size: "45m²",
    guests: "2 Adults",
    bed: "King Size",
    features: ["City View", "Private Balcony", "Rainfall Shower", "Smart Controls"]
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    description: "Our most exclusive accommodations with separate living spaces, a personal concierge service, and extraordinary attention to every detail.",
    price: "$750",
    imageUrl: getImagePath("/images/gallery/premium-suite.jpg"),
    size: "75m²",
    guests: "3 Adults",
    bed: "King Size + Sofa Bed",
    features: ["Panoramic View", "Jacuzzi Bath", "Smart Home System", "Exclusive Lounge Access"]
  },
  {
    id: "executive-room",
    name: "Executive Room",
    description: "Designed with the business traveler in mind, our executive rooms combine functionality with luxury for the perfect stay.",
    price: "$350",
    imageUrl: getImagePath("/images/gallery/executive-room.jpg"),
    size: "35m²",
    guests: "2 Adults",
    bed: "Queen Size",
    features: ["Work Desk", "High Speed WiFi", "Nespresso Machine", "Smart TV"]
  }
];

export function Rooms() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % rooms.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handlePrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % rooms.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="luxo-container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 bg-luxo-purple/10 text-luxo-purple rounded-full text-sm font-medium">
            ACCOMMODATIONS
          </div>
          <h2 className="section-heading">Rooms & Suites</h2>
          <p className="section-subheading mx-auto">
            Each of our meticulously designed rooms and suites offers a perfect blend of aesthetic beauty and functional luxury.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10">
            <button
              onClick={handlePrevSlide}
              className="text-luxo-purple hover:text-luxo-purple-dark transition-colors"
              aria-label="Previous room"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10">
            <button
              onClick={handleNextSlide}
              className="text-luxo-purple hover:text-luxo-purple-dark transition-colors"
              aria-label="Next room"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {rooms.map((room) => (
                <div key={room.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="relative h-[400px]">
                      <img
                        src={room.imageUrl}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="font-medium text-luxo-charcoal">
                          {room.price}
                        </span>
                        <span className="text-luxo-gray">/night</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-serif text-luxo-charcoal mb-2">
                        {room.name}
                      </h3>
                      <p className="text-luxo-gray mb-6">{room.description}</p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <Users2 className="w-5 h-5 text-luxo-purple" />
                          <span className="text-luxo-gray">{room.guests}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-5 h-5 text-luxo-purple" />
                          <span className="text-luxo-gray">{room.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BedDouble className="w-5 h-5 text-luxo-purple" />
                          <span className="text-luxo-gray">{room.bed}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-luxo-purple/10 text-luxo-purple rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link to="/book" className="w-full luxo-btn-primary block text-center">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-luxo-purple"
                    : "bg-luxo-purple/20"
                }`}
                aria-label={`Go to room ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
