import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Calendar, Users, CreditCard, Clock } from "lucide-react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import { useScrollToTop } from "@/lib/hooks/useScrollToTop";

interface BookingDetails {
  room: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  price: number;
  totalPrice: number;
  days: number;
}

export const ConfirmBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [nameOnCard, setNameOnCard] = useState("");
  const [loading, setLoading] = useState(false);
  useScrollToTop();

  useEffect(() => {
    // Get booking details from location state
    if (location.state) {
      setBookingDetails(location.state as BookingDetails);
    } else {
      // No booking details, redirect to booking page
      navigate("/book");
      toast.error("Please complete the booking form first");
    }
  }, [location, navigate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  };

  const getRoomName = (roomType: string) => {
    switch (roomType) {
      case "deluxe":
        return "Deluxe Suite";
      case "premium":
        return "Premium Suite";
      case "executive":
        return "Executive Room";
      default:
        return roomType;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      // Generate a random booking reference
      const bookingRef = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      // Navigate to confirmation page
      navigate("/booking-confirmed", { 
        state: { 
          ...bookingDetails,
          bookingRef,
          paymentMethod 
        } 
      });
      
    }, 1500);
  };

  if (!bookingDetails) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-white">
          <div className="luxo-container">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-serif font-bold text-luxo-charcoal mb-4">Confirm Your Reservation</h1>
              <p className="text-luxo-gray text-lg max-w-2xl mx-auto">
                Please review your booking details and complete the payment to secure your stay.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {/* Booking Summary */}
              <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
                <h2 className="font-serif text-2xl font-medium text-luxo-charcoal mb-4">Booking Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-luxo-gray">Check-in</p>
                      <p className="font-medium">{formatDate(bookingDetails.checkIn)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-luxo-gray">Check-out</p>
                      <p className="font-medium">{formatDate(bookingDetails.checkOut)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-luxo-gray">Duration</p>
                      <p className="font-medium">{bookingDetails.days} {bookingDetails.days === 1 ? 'night' : 'nights'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-luxo-gray">Guests</p>
                      <p className="font-medium">{bookingDetails.guests} {parseInt(bookingDetails.guests) === 1 ? 'guest' : 'guests'}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-lg font-serif font-medium mb-2">{getRoomName(bookingDetails.room)}</p>
                    <p className="text-sm text-luxo-gray mb-2">${bookingDetails.price} per night</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${bookingDetails.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Form */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="font-serif text-2xl font-medium text-luxo-charcoal mb-4">Payment Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Payment Method</label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer ${paymentMethod === 'credit' ? 'border-luxo-purple bg-luxo-purple/5' : 'border-gray-200'}`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit"
                            checked={paymentMethod === 'credit'}
                            onChange={() => setPaymentMethod('credit')}
                            className="sr-only"
                          />
                          <CreditCard className="h-5 w-5 text-luxo-purple" />
                          <span>Credit Card</span>
                        </label>
                        <label className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer ${paymentMethod === 'paypal' ? 'border-luxo-purple bg-luxo-purple/5' : 'border-gray-200'}`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={paymentMethod === 'paypal'}
                            onChange={() => setPaymentMethod('paypal')}
                            className="sr-only"
                          />
                          <span className="font-bold text-blue-600">Pay<span className="text-blue-800">Pal</span></span>
                        </label>
                      </div>
                    </div>
                    
                    {paymentMethod === 'credit' && (
                      <>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Name on Card</label>
                          <input
                            type="text"
                            id="name"
                            value={nameOnCard}
                            onChange={(e) => setNameOnCard(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">Card Number</label>
                          <input
                            type="text"
                            id="cardNumber"
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiry" className="block text-sm font-medium mb-2">Expiry Date</label>
                            <input
                              type="text"
                              id="expiry"
                              placeholder="MM/YY"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cvc" className="block text-sm font-medium mb-2">CVC/CVV</label>
                            <input
                              type="text"
                              id="cvc"
                              placeholder="123"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {paymentMethod === 'paypal' && (
                      <div className="bg-gray-50 p-4 rounded text-center">
                        <p>You will be redirected to PayPal to complete payment after confirmation.</p>
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full luxo-btn-primary flex justify-center items-center"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          'Confirm Booking'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmBookingPage;
