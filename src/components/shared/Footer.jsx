import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCrown,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-8 overflow-hidden">
      {/* Background image with 60% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-black opacity-10"
        style={{ backgroundImage: `url('/footer.jpg')` }}
        aria-hidden="true"
      ></div>

      {/* Content wrapper - relative so it stacks above the bg image */}
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaCrown className="mr-2 text-blue-50 -mt-2" />
              MV The Crown
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience luxury river cruises from Khulna with premium
              amenities, breathtaking views, and exceptional service.
            </p>

            <div className="flex space-x-4 mb-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex w-[70%] md:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 border border-red-100 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                />
                <button className="bg-blue-950 hover:bg-yellow-600 text-gray-50 border border-gray-500 font-semibold px-4 py-2 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
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
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-gray-400 text-sm">Call Anytime</p>
                  <p className="font-medium text-sm">01923239293</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium text-sm">info@mvthecrown.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-500" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium text-sm">
                    IFCO Complex (2nd floor), GEC Circle, CDA Avenue, Chattogram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
