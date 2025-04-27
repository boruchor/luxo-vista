import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/hotel/Navbar";
import { Footer } from "../components/hotel/Footer";
import { Maximize2, Users, Coffee, Wifi, Bath, Users2, BedDouble } from "lucide-react";

const roomsData = [
  {
    id: "deluxe",
    name: "Deluxe Suite",
    description: "Experience refined comfort in our spacious Deluxe Suites, featuring elegant furnishings and premium amenities for a truly luxurious stay.",
    image: "/images/hotel/feature-1.jpg",
    gallery: [
      "/images/rooms/deluxe-1.jpg",
      "/images/rooms/deluxe-2.jpg",
      "/images/rooms/deluxe-3.jpg",
      "/images/rooms/deluxe-4.jpg"
    ],
    price: 450,
    size: "55 m²",
    capacity: "2 Adults",
    amenities: ["King-size bed", "Spa bathroom", "City view", "Complimentary breakfast", "Smart TV", "Mini bar"],
    features: [
      {
        icon: BedDouble,
        title: "Luxurious Bedding",
        description: "Premium king-size bed with high-thread-count linens"
      },
      {
        icon: Bath,
        title: "Spa-like Bathroom",
        description: "Marble bathroom with rainfall shower and soaking tub"
      },
      {
        icon: Wifi,
        title: "High-Speed Internet",
        description: "Complimentary high-speed WiFi throughout"
      },
      {
        icon: Coffee,
        title: "Premium Amenities",
        description: "Nespresso machine and curated mini bar"
      }
    ]
  },
  {
    id: "premium",
    name: "Premium Suite",
    description: "Our flagship accommodation, the Premium Suite offers unparalleled luxury with panoramic views, exclusive services, and sophisticated design elements.",
    image: "/images/hotel/feature-2.jpg",
    gallery: [
      "/images/rooms/premium-1.jpg",
      "/images/rooms/premium-2.jpg",
      "/images/rooms/premium-3.jpg",
      "/images/rooms/premium-4.jpg"
    ],
    price: 750,
    size: "85 m²",
    capacity: "2-4 Adults",
    amenities: ["Private terrace", "Separate living area", "Premium bar", "Personalized butler service", "Luxury toiletries", "Walk-in closet"],
    features: [
      {
        icon: Maximize2,
        title: "Spacious Layout",
        description: "Separate living and sleeping areas with terrace"
      },
      {
        icon: Users2,
        title: "Butler Service",
        description: "24/7 dedicated butler service"
      },
      {
        icon: Bath,
        title: "Luxury Bathroom",
        description: "Double vanity, rain shower, and freestanding tub"
      },
      {
        icon: Coffee,
        title: "Premium Bar",
        description: "Fully stocked premium bar with signature selections"
      }
    ]
  },
  {
    id: "executive",
    name: "Executive Room",
    description: "Designed for the discerning business traveler, our Executive Rooms combine functionality with comfort, ensuring a productive and pleasant stay.",
    image: "/images/hotel/feature-3.jpg",
    gallery: [
      "/images/rooms/executive-1.jpg",
      "/images/rooms/executive-2.jpg",
      "/images/rooms/executive-3.jpg",
      "/images/rooms/executive-4.jpg"
    ],
    price: 350,
    size: "40 m²",
    capacity: "1-2 Adults",
    amenities: ["Queen-size bed", "Work desk", "High-speed internet", "Coffee machine", "Daily newspaper", "Room service"],
    features: [
      {
        icon: BedDouble,
        title: "Comfortable Bed",
        description: "Queen-size bed with premium bedding"
      },
      {
        icon: Wifi,
        title: "Business Ready",
        description: "Ergonomic workspace with high-speed internet"
      },
      {
        icon: Coffee,
        title: "Coffee Station",
        description: "Premium coffee machine with daily refills"
      },
      {
        icon: Users,
        title: "Room Service",
        description: "24/7 room service available"
      }
    ]
  }
];

export const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  
  const room = roomsData.find(r => r.id === roomId);
  
  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-luxo-charcoal/95 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${room.image})` }}
          ></div>
          <div className="relative luxo-container h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">{room.name}</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {room.description}
            </p>
          </div>
        </section>

        {/* Room Details */}
        <section className="py-16 bg-white">
          <div className="luxo-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Gallery */}
              <div className="space-y-4">
                {room.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${room.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Right Column - Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Room Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-luxo-cream rounded-lg">
                      <p className="text-sm text-luxo-charcoal/60">Size</p>
                      <p className="text-lg font-semibold">{room.size}</p>
                    </div>
                    <div className="p-4 bg-luxo-cream rounded-lg">
                      <p className="text-sm text-luxo-charcoal/60">Capacity</p>
                      <p className="text-lg font-semibold">{room.capacity}</p>
                    </div>
                    <div className="p-4 bg-luxo-cream rounded-lg">
                      <p className="text-sm text-luxo-charcoal/60">Price per night</p>
                      <p className="text-lg font-semibold">${room.price}</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Amenities</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-luxo-gold rounded-full"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Features</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2 bg-luxo-cream rounded-lg">
                          <feature.icon className="w-6 h-6 text-luxo-gold" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <p className="text-sm text-luxo-charcoal/60">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Button */}
                <button 
                  className="w-full py-4 bg-luxo-gold text-white font-semibold rounded-lg hover:bg-luxo-gold/90 transition-colors"
                  onClick={() => navigate('/contact')}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}; 