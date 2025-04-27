import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "../components/hotel/Navbar";
import { Footer } from "../components/hotel/Footer";
import { Rooms } from "../components/hotel/Rooms";
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
      <div className="min-h-screen">
        <section className="relative h-[50vh] bg-luxo-charcoal/95 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/rooms/hero-bg.jpg')" }}
          ></div>
          <div className="relative luxo-container h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Rooms</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Experience unparalleled luxury in our meticulously designed accommodations
            </p>
          </div>
        </section>

        <Rooms />
      </div>
      <Footer />
    </>
  );
};

export default RoomsPage;
