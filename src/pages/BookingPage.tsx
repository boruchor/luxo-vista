import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Calendar, Users, CalendarCheck, CalendarX } from "lucide-react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import { useScrollToTop } from "@/lib/hooks/useScrollToTop";

export const BookingPage = () => {
  const [selectedRoom, setSelectedRoom] = useState("deluxe");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("2");
  const navigate = useNavigate();
  useScrollToTop();
  
  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select both check-in and check-out dates");
      return;
    }
    
    // Calculate the price based on room type and days
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const dayDiff = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    if (dayDiff <= 0) {
      toast.error("Check-out date must be after check-in date");
      return;
    }
    
    const basePrice = selectedRoom === "deluxe" ? 450 : 
                      selectedRoom === "premium" ? 750 : 350;
    
    const totalPrice = basePrice * dayDiff;
    
    // Navigate to confirmation page with booking details
    navigate("/confirm-booking", { 
      state: { 
        room: selectedRoom, 
        checkIn: checkInDate, 
        checkOut: checkOutDate, 
        guests, 
        price: basePrice,
        totalPrice,
        days: dayDiff
      } 
    });
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <section className="py-24 bg-white">
          <div className="luxo-container">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxo-charcoal mb-4">Book Your Stay</h1>
              <p className="text-luxo-gray text-lg max-w-2xl mx-auto">
                Reserve your dream accommodations at LuxoVista and indulge in an experience of unparalleled luxury.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
              <form className="p-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-luxo-charcoal">Check-in Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full p-3 border border-luxo-gray-light rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                        min={new Date().toISOString().split('T')[0]}
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
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
                        min={checkInDate || new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
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
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
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
                
                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-luxo-gray-light pt-6 gap-4">
                  <div>
                    <p className="text-sm text-luxo-gray">Starting from</p>
                    <p className="text-2xl font-medium text-luxo-charcoal">
                      {selectedRoom === "deluxe" && "$450"}
                      {selectedRoom === "premium" && "$750"}
                      {selectedRoom === "executive" && "$350"}
                      <span className="text-sm font-normal text-luxo-gray">/night</span>
                    </p>
                  </div>
                  <button 
                    type="submit" 
                    className="luxo-btn-primary w-full sm:w-auto"
                  >
                    Check Availability
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
