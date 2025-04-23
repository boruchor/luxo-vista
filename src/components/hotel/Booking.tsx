import { useState } from "react";
import { Calendar, Users, CalendarCheck, CalendarX } from "lucide-react";
import { Link } from "react-router-dom";

export function Booking() {
  const [selectedRoom, setSelectedRoom] = useState("deluxe");
  
  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(e.target.value);
  };

  return (
    <section id="booking" className="py-24 bg-luxo-charcoal">
      <div className="luxo-container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 bg-luxo-purple/20 text-luxo-purple-light rounded-full text-sm font-medium">
            RESERVATIONS
          </div>
          <h2 className="section-heading text-white">Book Your Stay</h2>
          <p className="section-subheading text-luxo-gray-light mx-auto">
            Begin your journey to unparalleled luxury by securing your preferred dates and accommodations.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <form className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-luxo-charcoal">Check-in Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full p-3 border border-luxo-gray-light rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  <CalendarCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxo-purple w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-luxo-charcoal">Check-out Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full p-3 border border-luxo-gray-light rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                    min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                    required
                  />
                  <CalendarX className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxo-purple w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-luxo-charcoal">Room Type</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 border border-luxo-gray-light rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-luxo-purple appearance-none"
                    value={selectedRoom}
                    onChange={handleRoomChange}
                    required
                  >
                    <option value="deluxe">Deluxe Suite</option>
                    <option value="premium">Premium Suite</option>
                    <option value="executive">Executive Room</option>
                  </select>
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxo-purple w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-luxo-charcoal">Guests</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 border border-luxo-gray-light rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-luxo-purple appearance-none"
                    required
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxo-purple w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-luxo-gray-light pt-6">
              <div>
                <p className="text-sm text-luxo-gray">Starting from</p>
                <p className="text-2xl font-medium text-luxo-charcoal">
                  {selectedRoom === "deluxe" && "$450"}
                  {selectedRoom === "premium" && "$750"}
                  {selectedRoom === "executive" && "$350"}
                  <span className="text-sm font-normal text-luxo-gray">/night</span>
                </p>
              </div>
              <Link 
                to="/book"
                className="luxo-btn-primary"
              >
                Check Availability
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
