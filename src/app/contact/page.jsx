export const metadata = {
  title: "Contact Us | MV The Crown",
  description: "Get in touch with MV The Crown. Find our office location, phone numbers, email address, and follow us on social media.",
};

import ContactForm from "@/components/ContactForm/ContactForm";
import Banner from "@/components/ui/Banner";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaCrown } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <Banner
       imageUrl="/13.png"
        title="Contact Us"
        subtitle=""
       heightClass=" h-[35vh] lg:h-[70vh]"
      />
      <section className="bg-white min-h-screen py-10 ">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-center px-6 text-gray-500 mb-10">
            Reach out to MV The Crown – we are here to help you with inquiries, bookings, and support.
          </p>

          <div className="grid md:grid-cols-2 gap-10 bg-gray-50 py-8 rounded-lg shadow-md">
            {/* Address */}
            <div className="space-y-6 px-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
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
                <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
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
                <FaEnvelope className="text-blue-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600">info.karnafulyexpress@gmail.com</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4">
                <FaFacebookF className="text-blue-600 text-xl mt-1" />
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
              <div className="md:pt-20">
                <hr className="border-gray-300 mb-4" />
                <h3 className="text-2xl  font-bold mb-4 flex items-center">
                  <FaCrown className="mr-2 text-blue-600 -mt-2" />
                  MV The Crown
                </h3>
                <p className="text-gray-700 mb-4 max-w-md">
                  Experience luxury river cruises from Khulna with premium
                  amenities, breathtaking views, and exceptional service.
                </p>
              </div>
            </div>

            {/* Optional: Contact Form */}
            <div className="px-3">
              <ContactForm title="show" />
            </div>
          </div>
        </div>
      </section></>
  );
}
