import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import ConfirmBookingPage from "./pages/ConfirmBookingPage";
import BookingConfirmedPage from "./pages/BookingConfirmedPage";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/rooms" element={<RoomsPage />} />
      <Route path="/amenities" element={<AmenitiesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book" element={<BookingPage />} />
      <Route path="/confirm-booking" element={<ConfirmBookingPage />} />
      <Route path="/booking-confirmed" element={<BookingConfirmedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
