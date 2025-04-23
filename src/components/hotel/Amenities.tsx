
import {
  Wifi,
  Utensils,
  Coffee,
  Dumbbell,
  Droplets,
  Users,
  Car,
  ShieldCheck
} from "lucide-react";

const amenities = [
  {
    name: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the property.",
    icon: Wifi
  },
  {
    name: "Fine Dining",
    description: "Exquisite culinary experiences at our Michelin-starred restaurant.",
    icon: Utensils
  },
  {
    name: "24/7 Concierge",
    description: "Personalized assistance for all your needs at any hour.",
    icon: Users
  },
  {
    name: "Fitness Center",
    description: "State-of-the-art fitness equipment and personal training services.",
    icon: Dumbbell
  },
  {
    name: "Luxury Spa",
    description: "Rejuvenating treatments and wellness experiences.",
    icon: Droplets
  },
  {
    name: "Exclusive Lounge",
    description: "Private lounge with premium refreshments and services.",
    icon: Coffee
  },
  {
    name: "Valet Parking",
    description: "Convenient valet service with secure parking facilities.",
    icon: Car
  },
  {
    name: "Advanced Security",
    description: "Sophisticated security systems ensuring privacy and safety.",
    icon: ShieldCheck
  }
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-luxo-purple/5">
      <div className="luxo-container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 bg-luxo-purple/10 text-luxo-purple rounded-full text-sm font-medium">
            EXPERIENCES
          </div>
          <h2 className="section-heading">Premium Amenities</h2>
          <p className="section-subheading mx-auto">
            Indulge in our exclusive range of services and facilities designed to elevate your stay to new heights of luxury and comfort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxo-purple/10 text-luxo-purple">
                <amenity.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-luxo-charcoal mb-2">{amenity.name}</h3>
              <p className="text-luxo-gray">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
