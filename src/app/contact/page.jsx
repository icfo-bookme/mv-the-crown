export const metadata = {
  title: "Contact Us | MV The Crown",
  description: "Get in touch with MV The Crown. Find our office location, phone numbers, email address, and follow us on social media.",
};

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Reach out to MV The Crown – we are here to help you with inquiries, bookings, and support.
        </p>

        <div className="grid md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-lg shadow-md">
          {/* Address */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Office Address</h3>
                <p className="text-gray-600">
                  IFCO Complex (2nd floor), GEC Circle, <br />
                  CDA Avenue, Chattogram
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                <p className="text-gray-600">
                  09613-888000, 01610051005, <br />
                  01967670707
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                <p className="text-gray-600">info.karnafulyexpress@gmail.com</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-4">
              <FaFacebookF className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Follow Us on Facebook</h3>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  facebook.com/karnafulyexpress
                </Link>
              </div>
            </div>
          </div>

          {/* Optional: Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
