import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import {
  Utensils, 
  Dumbbell, 
  Droplets, 
  Car, 
  ShieldCheck, 
  Wifi,
  Globe,
  ParkingCircle,
  Coffee,
  Users,
  Star,
  Briefcase
} from "lucide-react";

const serviceCategories = [
  {
    name: "Dining & Refreshments",
    items: [
      {
        title: "Fine Dining Restaurant",
        description: "Experience gourmet cuisine crafted by our Michelin-starred chef using locally-sourced ingredients.",
        icon: Utensils
      },
      {
        title: "Rooftop Lounge",
        description: "Enjoy panoramic views and signature cocktails at our exclusive rooftop lounge.",
        icon: Star
      },
      {
        title: "Executive Club",
        description: "Access to our private lounge with complimentary refreshments and business services.",
        icon: Coffee
      }
    ]
  },
  {
    name: "Wellness & Recreation",
    items: [
      {
        title: "Luxury Spa",
        description: "Rejuvenating treatments and therapies in our award-winning spa sanctuary.",
        icon: Droplets
      },
      {
        title: "Fitness Center",
        description: "State-of-the-art equipment and personal training in our 24-hour fitness facility.",
        icon: Dumbbell
      },
      {
        title: "Swimming Pool",
        description: "Heated indoor pool and seasonal outdoor infinity pool with cabana service.",
        icon: Globe
      }
    ]
  },
  {
    name: "Business & Events",
    items: [
      {
        title: "Conference Facilities",
        description: "Versatile meeting spaces equipped with cutting-edge technology for successful events.",
        icon: Briefcase
      },
      {
        title: "Business Center",
        description: "24/7 access to workstations, printing services, and high-speed internet.",
        icon: Wifi
      },
      {
        title: "Event Planning",
        description: "Dedicated team of event specialists to coordinate flawless functions of any scale.",
        icon: Users
      }
    ]
  },
  {
    name: "Transportation & Security",
    items: [
      {
        title: "Valet Parking",
        description: "Complimentary valet service with secured underground parking for all guests.",
        icon: Car
      },
      {
        title: "Airport Transfers",
        description: "Luxury vehicle transfers arranged upon request for seamless arrivals and departures.",
        icon: ParkingCircle
      },
      {
        title: "24/7 Security",
        description: "Advanced security systems and professional staff ensuring your safety and privacy.",
        icon: ShieldCheck
      }
    ]
  }
];

const highlightedAmenities = [
  {
    title: "The Celestial Spa",
    description: "Our flagship wellness sanctuary offers a journey of rejuvenation through ancient and modern therapies. The spa features private treatment suites, thermal experiences, and a curated selection of signature treatments developed exclusively for LuxoVista.",
    image: "/images/gallery/celestial-spa.jpg"
  },
  {
    title: "Aurora Restaurant",
    description: "Led by acclaimed Chef Marco Bianchi, Aurora offers an innovative dining experience that celebrates global flavors with local ingredients. The seasonal tasting menu showcases culinary artistry in an atmosphere of refined elegance with floor-to-ceiling views of the city.",
    image: "/images/gallery/aurora-restaurant.jpg"
  }
];

export const AmenitiesPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-luxo-charcoal/95 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/gallery/hotel-facade.jpg')" }}
          ></div>
          <div className="relative luxo-container h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Amenities & Services</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Discover the exceptional range of amenities and personalized services that define the LuxoVista experience.
            </p>
          </div>
        </section>

        {/* Highlighted Amenities */}
        <section className="py-20 bg-white">
          <div className="luxo-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-luxo-charcoal mb-4">Featured Experiences</h2>
              <p className="text-luxo-gray max-w-2xl mx-auto">
                Discover our signature amenities that have been meticulously designed to elevate your stay to new heights of luxury.
              </p>
            </div>
            
            <div className="space-y-16">
              {highlightedAmenities.map((amenity, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-2xl font-serif font-bold text-luxo-charcoal mb-4">{amenity.title}</h3>
                    <p className="text-luxo-gray mb-6">
                      {amenity.description}
                    </p>
                    <a href="#" className="text-luxo-purple font-medium flex items-center">
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <img 
                      src={amenity.image} 
                      alt={amenity.title} 
                      className="w-full h-80 object-cover rounded-xl shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 bg-luxo-purple/5">
          <div className="luxo-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-luxo-charcoal mb-4">Our Services</h2>
              <p className="text-luxo-gray max-w-2xl mx-auto">
                At LuxoVista, we offer a comprehensive range of services designed to ensure your complete comfort and satisfaction.
              </p>
            </div>
            
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-serif font-bold text-luxo-charcoal mb-8 border-l-4 border-luxo-purple pl-4">
                    {category.name}
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxo-purple/10">
                          <item.icon className="h-6 w-6 text-luxo-purple" />
                        </div>
                        <h4 className="font-serif text-xl font-medium text-luxo-charcoal mb-2">{item.title}</h4>
                        <p className="text-luxo-gray">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalized Service */}
        <section className="py-20 bg-white">
          <div className="luxo-container text-center">
            <h2 className="text-3xl font-serif font-bold text-luxo-charcoal mb-4">Personalized Service</h2>
            <p className="text-luxo-gray max-w-3xl mx-auto mb-12">
              Beyond our standard offerings, our dedicated concierge team is available 24/7 to fulfill any special requests and create bespoke experiences tailored to your preferences.
            </p>
            
            <a href="/contact" className="luxo-btn-primary">
              Contact Our Concierge
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AmenitiesPage;
