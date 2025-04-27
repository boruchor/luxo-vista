/** @jsxImportSource react */
import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const galleryImages = [
  {
    id: 1,
    url: "/images/hotel/feature-1.jpg",
    title: "Hotel Exterior",
    category: "exterior"
  },
  {
    id: 2,
    url: "/images/hotel/feature-2.jpg",
    title: "Aurora Restaurant",
    category: "dining"
  },
  {
    id: 3,
    url: "/images/hotel/feature-3.jpg",
    title: "Premium Suite",
    category: "rooms"
  },
  {
    id: 4,
    url: "/images/hotel/feature-4.jpg",
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
    category: "exterior"
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

const categories = [
  { id: "all", name: "All" },
  { id: "rooms", name: "Rooms & Suites" },
  { id: "dining", name: "Dining" },
  { id: "amenities", name: "Amenities" },
  { id: "exterior", name: "Exterior" },
  { id: "interior", name: "Interior" },
  { id: "spa", name: "Spa & Wellness" }
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % filteredImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="luxo-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-luxo-charcoal mb-4">
            Our Gallery
          </h2>
          <p className="text-luxo-gray text-lg max-w-2xl mx-auto">
            Take a visual journey through our luxurious spaces and amenities
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "all"
                ? "bg-luxo-purple text-white"
                : "bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("rooms")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "rooms"
                ? "bg-luxo-purple text-white"
                : "bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple/20"
            }`}
          >
            Rooms
          </button>
          <button
            onClick={() => setActiveFilter("dining")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "dining"
                ? "bg-luxo-purple text-white"
                : "bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple/20"
            }`}
          >
            Dining
          </button>
          <button
            onClick={() => setActiveFilter("amenities")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "amenities"
                ? "bg-luxo-purple text-white"
                : "bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple/20"
            }`}
          >
            Amenities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-serif mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-luxo-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-luxo-gold transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-luxo-gold transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
