import { useState } from "react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";

// Simple array of images
const images = [
  {
    id: 1,
    url: "/images/gallery/hotel-facade.jpg",
    title: "Hotel Exterior",
    category: "exterior"
  },
  {
    id: 2,
    url: "/images/gallery/aurora-restaurant.jpg",
    title: "Aurora Restaurant",
    category: "dining"
  },
  {
    id: 3,
    url: "/images/gallery/premium-suite.jpg",
    title: "Premium Suite",
    category: "rooms"
  },
  {
    id: 4,
    url: "/images/gallery/celestial-spa.jpg",
    title: "Celestial Spa",
    category: "spa"
  },
  {
    id: 5,
    url: "/images/gallery/deluxe-suite.jpg",
    title: "Deluxe Suite",
    category: "rooms"
  },
  {
    id: 6,
    url: "/images/gallery/pool-area.jpg",
    title: "Infinity Pool",
    category: "amenities"
  },
  {
    id: 7,
    url: "/images/gallery/breakfast-buffet.jpg",
    title: "Breakfast Buffet",
    category: "dining"
  },
  {
    id: 8,
    url: "/images/gallery/garden-view.jpg",
    title: "Garden View",
    category: "amenities"
  },
  {
    id: 9,
    url: "/images/gallery/family-suite.jpg",
    title: "Family Suite",
    category: "rooms"
  },
  {
    id: 10,
    url: "/images/gallery/treatment-room.jpg",
    title: "Treatment Room",
    category: "spa"
  },
  {
    id: 11,
    url: "/images/gallery/rooftop-lounge.jpg",
    title: "Rooftop Lounge",
    category: "amenities"
  },
  {
    id: 12,
    url: "/images/gallery/executive-room.jpg",
    title: "Executive Room",
    category: "rooms"
  }
];

export default function GalleryPage() {
  // Simple state for filter and selected image
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images based on category
  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  // Handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Handle close lightbox
  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/gallery/hero-bg.jpg"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-white/80">
              Explore our stunning collection of images
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full ${
              filter === "all" ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("rooms")}
            className={`px-6 py-2 rounded-full ${
              filter === "rooms" ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"
            }`}
          >
            Rooms
          </button>
          <button
            onClick={() => setFilter("dining")}
            className={`px-6 py-2 rounded-full ${
              filter === "dining" ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"
            }`}
          >
            Dining
          </button>
          <button
            onClick={() => setFilter("amenities")}
            className={`px-6 py-2 rounded-full ${
              filter === "amenities" ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"
            }`}
          >
            Amenities
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image)}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-serif mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 text-white"
            >
              ✕
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-purple-900 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Want to Experience Our Hotel in Person?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Book your stay now and immerse yourself in luxury
          </p>
          <button className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-purple-900">
            Book Your Stay
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
