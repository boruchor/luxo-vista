import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import { Maximize2, Users, Coffee, Wifi, Bath, Users2, BedDouble } from "lucide-react";

const roomsData = [
  {
    id: "deluxe",
    name: "Deluxe Suite",
    description: "Experience refined comfort in our spacious Deluxe Suites, featuring elegant furnishings and premium amenities for a truly luxurious stay.",
    image: "/images/gallery/deluxe-suite.jpg",
    price: 450,
    size: "55 m²",
    capacity: "2 Adults",
    amenities: ["King-size bed", "Spa bathroom", "City view", "Complimentary breakfast", "Smart TV", "Mini bar"]
  },
  {
    id: "premium",
    name: "Premium Suite",
    description: "Our flagship accommodation, the Premium Suite offers unparalleled luxury with panoramic views, exclusive services, and sophisticated design elements.",
    image: "/images/gallery/premium-suite.jpg",
    price: 750,
    size: "85 m²",
    capacity: "2-4 Adults",
    amenities: ["Private terrace", "Separate living area", "Premium bar", "Personalized butler service", "Luxury toiletries", "Walk-in closet"]
  },
  {
    id: "executive",
    name: "Executive Room",
    description: "Designed for the discerning business traveler, our Executive Rooms combine functionality with comfort, ensuring a productive and pleasant stay.",
    image: "/images/gallery/executive-room.jpg",
    price: 350,
    size: "40 m²",
    capacity: "1-2 Adults",
    amenities: ["Queen-size bed", "Work desk", "High-speed internet", "Coffee machine", "Daily newspaper", "Room service"]
  },
  {
    id: "family",
    name: "Family Suite",
    description: "Perfect for family getaways, our spacious Family Suites offer separate sleeping areas for parents and children, along with thoughtful amenities for all ages.",
    image: "/images/gallery/family-suite.jpg",
    price: 550,
    size: "75 m²",
    capacity: "2 Adults + 2 Children",
    amenities: ["Connecting rooms", "Children's welcome pack", "Game console", "Child-friendly menu", "Baby cot available", "Family bathroom"]
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    description: "The epitome of luxury, our Penthouse Suite occupies the top floor with stunning panoramic views, ultra-premium furnishings, and exclusive services.",
    image: "/images/gallery/premium-suite.jpg",
    price: 1200,
    size: "120 m²",
    capacity: "2-4 Adults",
    amenities: ["Private roof terrace", "Hot tub", "Personal chef available", "Exclusive check-in", "Limousine service", "Wine cellar"]
  },
  {
    id: "garden",
    name: "Garden Suite",
    description: "Enjoy direct access to our lush gardens from these ground-floor suites, which combine indoor comfort with outdoor living spaces.",
    image: "/images/gallery/garden-view.jpg",
    price: 500,
    size: "60 m²",
    capacity: "2 Adults",
    amenities: ["Private garden", "Outdoor furniture", "Outdoor shower", "Hammock", "Botanical welcome gift", "Garden-to-table dining"]
  }
];

export const RoomsPage = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  
  const filteredRooms = filter === "all" 
    ? roomsData 
    : roomsData.filter(room => {
        if (filter === "luxury" && room.price >= 600) return true;
        if (filter === "family" && room.capacity.includes("Children")) return true;
        if (filter === "business" && room.id === "executive") return true;
        return false;
      });
      
  const handleBookNow = (roomId: string) => {
    navigate("/book", { state: { preselectedRoom: roomId } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/gallery/premium-suite.jpg"
              alt="Luxury Hotel Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">
                Luxurious Accommodations
              </h1>
              <p className="text-xl text-white/80">
                Experience unparalleled comfort in our meticulously designed rooms and suites
              </p>
            </div>
          </div>
        </div>

        <div className="luxo-container py-12">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/4">
              <div className="sticky top-24 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Room Type</label>
                  <select className="w-full border rounded-md p-2">
                    <option>All Types</option>
                    <option>Standard Room</option>
                    <option>Deluxe Suite</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <select className="w-full border rounded-md p-2">
                    <option>All Prices</option>
                    <option>$200 - $500</option>
                    <option>$500 - $1000</option>
                    <option>$1000+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredRooms.map((room) => (
                  <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-serif">{room.name}</h3>
                        <p className="text-luxo-gold font-medium">${room.price}/night</p>
                      </div>
                      <p className="text-gray-600 mb-4">{room.description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-5 h-5" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span>{room.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath className="w-5 h-5" />
                          <span>En-suite bathroom</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wifi className="w-5 h-5" />
                          <span>High-speed WiFi</span>
                        </div>
                      </div>
                      <Link 
                        to="/book"
                        className="w-full luxo-btn-primary"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-luxo-purple-dark text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Need Help Finding the Perfect Room?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our concierge team is here to assist you in selecting the perfect accommodation for your stay
            </p>
            <button className="luxo-btn-outline text-white border-white">
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomsPage;
