"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import { FaPhone, FaWhatsapp, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const BookMeHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname(); // Get current path

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Check if a link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Mobile menu component
  const MobileMenu = () => {
    return (
      <div className={`${roboto.className} h-full flex flex-col overflow-hidden`}>
        {/* Menu Header */}
        <div className="flex justify-between p-4 border-b border-gray-200">
          <Link href="/" prefetch onClick={closeAllMenus}>
            <Image
              src="/assets/images/logo.jpg"
              alt="logo"
              width={120}
              height={50}
              className="changeLogo"
              priority
            />
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <Link
                href="/"
                className={`flex items-center justify-between py-3 px-4 text-sm hover:bg-blue-50 rounded-lg transition-colors duration-200 group ${
                  isActiveLink("/") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-[#00026E]"
                }`}
                onClick={closeAllMenus}
                prefetch
              >
                <span className="font-medium">Home</span>
                <FaChevronRight className={`group-hover:translate-x-1 transition-transform ${
                  isActiveLink("/") ? "text-blue-600" : "text-blue-400"
                }`} />
              </Link>
            </li>

            <li>
              <Link
                href="/schedule"
                className={`flex items-center justify-between py-3 px-4 text-sm hover:bg-blue-50 rounded-lg transition-colors duration-200 group ${
                  isActiveLink("/schedule") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-[#00026E]"
                }`}
                onClick={closeAllMenus}
                prefetch
              >
                <span className="font-medium">Schedule</span>
                <FaChevronRight className={`group-hover:translate-x-1 transition-transform ${
                  isActiveLink("/schedule") ? "text-blue-600" : "text-blue-400"
                }`} />
              </Link>
            </li>

            <li>
              <Link
                href="/ticket"
                className={`flex items-center justify-between py-3 px-4 text-sm hover:bg-blue-50 rounded-lg transition-colors duration-200 group ${
                  isActiveLink("/ticket") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-[#00026E]"
                }`}
                onClick={closeAllMenus}
                prefetch
              >
                <span className="font-medium">Ticket</span>
                <FaChevronRight className={`group-hover:translate-x-1 transition-transform ${
                  isActiveLink("/ticket") ? "text-blue-600" : "text-blue-400"
                }`} />
              </Link>
            </li>

            <li>
              <Link
                href="/payment"
                className={`flex items-center justify-between py-3 px-4 text-sm hover:bg-blue-50 rounded-lg transition-colors duration-200 group ${
                  isActiveLink("/payment") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-[#00026E]"
                }`}
                onClick={closeAllMenus}
                prefetch
              >
                <span className="font-medium">Payment</span>
                <FaChevronRight className={`group-hover:translate-x-1 transition-transform ${
                  isActiveLink("/payment") ? "text-blue-600" : "text-blue-400"
                }`} />
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`flex items-center justify-between py-3 px-4 text-sm hover:bg-blue-50 rounded-lg transition-colors duration-200 group ${
                  isActiveLink("/contact") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-[#00026E]"
                }`}
                onClick={closeAllMenus}
                prefetch
              >
                <span className="font-medium">Contact</span>
                <FaChevronRight className={`group-hover:translate-x-1 transition-transform ${
                  isActiveLink("/contact") ? "text-blue-600" : "text-blue-400"
                }`} />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-[#00026E] mb-3">Contact Us</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="tel:01923239293"
              className="flex items-center justify-center w-12 h-12 bg-[#00026E] rounded-full text-white hover:bg-[#00026E]/90 transition-colors"
            >
              <FaPhone className="text-xl" />
            </a>
            <a
              href="https://wa.me/01923239293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors relative"
            >
              <span className="absolute animate-ping opacity-75 inline-flex h-full w-full rounded-full bg-green-400"></span>
              <FaWhatsapp className="text-xl z-10" />
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-600">Call Anytime</p>
            <a
              href="tel:01923239293"
              className="text-lg font-semibold text-[#00026E] hover:underline"
            >
              01923239293
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className={`header-area-three bg-white md:bg-transparent ${roboto.className} `}>
      <div className="main-header fixed md:absolute w-full z-50 bg-white md:bg-transparent  shadow-md shadow-slate-500">
        <div className="header-bottom text-[#00026E]">
          <div className="container w-[95%] lg:w-[84%] mx-auto">
            <div className="flex justify-between items-center py-2">
              <div className="logo flex items-center space-x-2">
                <Link href={"/"} prefetch className="flex items-center space-x-2 cursor-pointer">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="changeLogo"
                    priority
                  />
                  <span className="text-2xl italic font-bold text-gray-950 md:text-white">Mv The crown</span>
                </Link>
              </div>


              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6">
                <Link
                  href="/"
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActiveLink("/")
                      ? "text-white font-bold border-b-2 border-red-100"
                      : "hover:text-white text-blue-100"
                  }`}
                  prefetch
                >
                  HOME
                </Link>

                <Link
                  href="/schedule"
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActiveLink("/schedule")
                      ? "text-white border-b-2 border-red-100"
                      : "hover:text-white text-blue-100"
                  }`}
                  prefetch
                >
                  SCHEDULE
                </Link>

                <Link
                  href="/ticket"
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActiveLink("/ticket")
                      ? "text-white border-b-2 border-red-100"
                      : "hover:text-white text-blue-100"
                  }`}
                  prefetch
                >
                  TICKET
                </Link>

                <Link
                  href="/payment"
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActiveLink("/payment")
                      ? "text-white border-b-2 border-red-100"
                      : "hover:text-white text-blue-100"
                  }`}
                  prefetch
                >
                  PAYMENT
                </Link>

                <Link
                  href="/contact"
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActiveLink("/contact")
                      ? "text-white border-b-2  border-red-100"
                      : "hover:text-white text-blue-100"
                  }`}
                  prefetch
                >
                  CONTACT
                </Link>
              </div>

              {/* Desktop Contact Info */}
              <div className="ml-3 hidden lg:flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <a
                    href="tel:01923239293"
                    className="ml-[10px] mt-[9px]"
                  >
                    <div className="phone-call md:w-[50px] md:h-[50px] w-[36px] h-[36px] ml-[15px]">
                      <FaPhone className="md:ml-[17px] md:mt-[17px] mt-[8px] ml-[11px]" />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/01923239293"
                    className="mr-[10px] ml-[5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-whatsapp-pulse btn-whatsapp-pulse-border md:w-[50px] md:h-[50px] w-[36px] h-[36px] md:mt-[0px] mt-[-5px] ml-[15px]">
                      <FaWhatsapp className="w-[25px] h-[25px] text-white" />
                    </span>
                  </a>

                  <div>
                    <p className="text-sm text-white">Call Anytime</p>
                    <h4 className="text-lg font-semibold">
                      <a href="tel:01923239293" className="text-white">
                        01923239293
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button and Icons */}
              <div className="lg:hidden  flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <a href="tel:01923239293" className="w-[38px] h-[38px]">
                    <div className="phone-call w-[36px] h-[36px]">
                      <FaPhone className="mt-[9px] ml-[10px]" />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/01923239293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[38px] h-[38px]"
                  >
                    <span className="btn-whatsapp-pulse btn-whatsapp-pulse-border w-[36px] h-[36px]">
                      <FaWhatsapp className="w-[20px] h-[20px] text-white mt-[0px] ml-[0px]" />
                    </span>
                  </a>
                </div>

                <button
                  onClick={toggleMobileMenu}
                  className="text-[#00026E] focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-6 h-6" />
                  ) : (
                    <FaBars className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-20">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={closeAllMenus}
            ></div>

            {/* Menu Content */}
            <div
              ref={mobileMenuRef}
              className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            >
              <MobileMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default BookMeHeader;