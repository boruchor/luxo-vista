import { useState } from "react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("reservation");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      console.error("Your message has been sent. We'll respond shortly.");
      setName("");
      setEmail("");
      setSubject("reservation");
      setMessage("");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="relative h-[50vh] bg-luxo-charcoal/95 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/gallery/hotel-facade.jpg')" }}
          ></div>
          <div className="relative luxo-container h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              We're here to answer any questions and help make your stay exceptional.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="luxo-container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-luxo-charcoal mb-6">Send Us a Message</h2>
                <p className="text-luxo-gray mb-8">
                  Please fill out the form below, and a member of our team will get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxo-charcoal mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxo-charcoal mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-luxo-charcoal mb-1">
                      Subject
                    </label>
                    <select 
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple appearance-none"
                      required
                    >
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="feedback">Feedback</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-luxo-charcoal mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxo-purple"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="luxo-btn-primary w-full flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-bold text-luxo-charcoal mb-6">Get in Touch</h2>
                <p className="text-luxo-gray mb-8">
                  Whether you have a question about our accommodations, services, or would like to provide feedback, our team is ready to assist you.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-luxo-purple/10">
                      <MapPin className="h-6 w-6 text-luxo-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-luxo-charcoal">Address</h3>
                      <p className="text-luxo-gray">
                        123 Luxury Avenue<br />
                        Metropolis, Citystate 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-luxo-purple/10">
                      <Phone className="h-6 w-6 text-luxo-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-luxo-charcoal">Phone</h3>
                      <p className="text-luxo-gray">
                        Reservations: +1 (888) 555-0123<br />
                        Front Desk: +1 (888) 555-0124<br />
                        Concierge: +1 (888) 555-0125
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-luxo-purple/10">
                      <Mail className="h-6 w-6 text-luxo-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-luxo-charcoal">Email</h3>
                      <p className="text-luxo-gray">
                        Reservations: reservations@luxovista.com<br />
                        General Inquiries: info@luxovista.com<br />
                        Corporate: corporate@luxovista.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-luxo-purple/10">
                      <Clock className="h-6 w-6 text-luxo-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-luxo-charcoal">Hours</h3>
                      <p className="text-luxo-gray">
                        Reception: 24 hours, 7 days a week<br />
                        Concierge: 7:00 AM - 11:00 PM<br />
                        Restaurant: 6:30 AM - 10:30 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="font-medium text-luxo-charcoal mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 rounded-full bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-luxo-purple/10 text-luxo-purple hover:bg-luxo-purple hover:text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="h-96 w-full bg-luxo-gray-light">
            <div className="h-full w-full flex items-center justify-center bg-luxo-charcoal/10">
              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-luxo-charcoal mb-2">LuxoVista Hotel</h3>
                <p className="text-luxo-gray">Interactive Map</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
