import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, Calendar, Users, Home, Phone } from "lucide-react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";

interface ConfirmedBookingDetails {
  room: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  price: number;
  totalPrice: number;
  days: number;
  bookingRef: string;
  paymentMethod: string;
}

export const BookingConfirmedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state as ConfirmedBookingDetails;

  useEffect(() => {
    if (!bookingDetails) {
      navigate("/book");
    }
  }, [bookingDetails, navigate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
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

  if (!bookingDetails) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <section className="py-16 bg-white">
          <div className="luxo-container">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-luxo-purple/10 p-8 text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 bg-luxo-purple/20 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-luxo-purple" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-luxo-charcoal">Booking Confirmed!</h1>
                <p className="text-lg text-luxo-gray mt-2">Your reservation has been successfully completed.</p>
              </div>
              
              <div className="p-8">
                <div className="border-b pb-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-serif text-xl font-medium">Booking Reference</h2>
                    <span className="bg-luxo-purple/10 text-luxo-purple px-4 py-2 rounded-full font-mono font-bold">
                      {bookingDetails.bookingRef}
                    </span>
                  </div>
                  <p className="text-luxo-gray">Please save this reference number for your records.</p>
                </div>
                
                <div className="border-b pb-6 mb-6">
                  <h2 className="font-serif text-xl font-medium mb-4">Stay Details</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex gap-3">
                      <Home className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-luxo-gray">Room Type</p>
                        <p className="font-medium">{getRoomName(bookingDetails.room)}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Users className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-luxo-gray">Guests</p>
                        <p className="font-medium">{bookingDetails.guests}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Calendar className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-luxo-gray">Check-in Date</p>
                        <p className="font-medium">{formatDate(bookingDetails.checkIn)}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Calendar className="w-5 h-5 text-luxo-purple mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-luxo-gray">Check-out Date</p>
                        <p className="font-medium">{formatDate(bookingDetails.checkOut)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-6 mb-6">
                  <h2 className="font-serif text-xl font-medium mb-4">Payment Information</h2>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-luxo-gray">Payment Method</p>
                      <p className="font-medium">
                        {bookingDetails.paymentMethod === 'credit' ? 'Credit Card' : 'PayPal'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-luxo-gray">Total Amount</p>
                      <p className="font-bold text-xl">${bookingDetails.totalPrice}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-serif text-xl font-medium mb-4">Need Assistance?</h2>
                  <p className="text-luxo-gray mb-4">
                    If you have any questions about your reservation, please contact our concierge team:
                  </p>
                  
                  <div className="flex items-center gap-2 text-luxo-purple">
                    <Phone className="h-5 w-5" />
                    <span>+1 (888) 555-0123</span>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/" className="luxo-btn-secondary">
                    Return to Homepage
                  </Link>
                  <button 
                    onClick={() => window.print()} 
                    className="luxo-btn-outline"
                  >
                    Print Confirmation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookingConfirmedPage;
