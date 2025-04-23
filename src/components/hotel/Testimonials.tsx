import { useState, useEffect } from "react";

// Simple array of testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "/images/about/team-1.jpg",
    content: "An exceptional experience from start to finish. The attention to detail and personalized service exceeded all expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Luxury Enthusiast",
    image: "/images/about/team-2.jpg",
    content: "The perfect blend of modern luxury and timeless elegance. Every moment of our stay was absolutely perfect.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Honeymoon Guest",
    image: "/images/about/team-3.jpg",
    content: "Our honeymoon couldn't have been more magical. The staff went above and beyond to make our stay unforgettable.",
    rating: 5
  }
];

export function Testimonials() {
  // Simple state for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Handle manual slide change
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Guest Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our guests have to say about their stay at Luxo Vista
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg p-8 text-center">
                    {/* Profile Image */}
                    <div className="w-32 h-32 mx-auto mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg text-gray-700 mb-6">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div>
                      <p className="font-medium text-purple-600">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-purple-600 w-8' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
