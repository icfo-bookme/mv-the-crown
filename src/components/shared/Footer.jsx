const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-crown mr-2 text-yellow-400"></i>
              MV The Crown
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience luxury river cruises from Khulna with premium amenities, 
              breathtaking views, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Ticket Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Payment Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-yellow-400"></i>
                <div>
                  <p className="text-gray-400">Call Anytime</p>
                  <p className="font-medium">01923239293</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-yellow-400"></i>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">info@mvthecrown.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-yellow-400"></i>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="font-medium">IFCO Complex(2nd floor), GEC Circle, CDA Avenue, Chattogram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400">Get updates on special offers and events</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MV The Crown. All rights reserved. | Designed with <i className="fas fa-heart text-red-500"></i></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;