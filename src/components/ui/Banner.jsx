'use client';

import React from 'react';
import Image from 'next/image';

const Banner = ({ imageUrl, title, subtitle, heightClass }) => {
  const defaultImage = "/p.jpeg";

  return (
    <div className={`relative w-full ${heightClass || 'h-[60vh]'} overflow-hidden shadow-2xl`}>
      {/* Background Image */}
      <Image
        src={imageUrl || defaultImage}
        alt={title || "Banner Image"}
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-500/20 to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center lg:items-center pb-6 lg:pb-0 px-4 md:px-8 z-20">
        <div className="text-white mt-10 w-full max-w-6xl mx-auto space-y-3 md:space-y-6 text-left">
          {/* Title */}
          {title && (
            <h1 className="text-base md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-lg">
              {title}
            </h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 font-light max-w-3xl drop-shadow-md">
              {subtitle}
            </p>
          )}

          {/* Call Buttons */}
          <div className="flex flex-row flex-wrap gap-2 sm:gap-3 mt-4">
            {/* Call Now button */}
            <button
              onClick={() => window.location.href = 'tel:+880123456789'}
              className="flex items-center justify-center bg-red-600 text-white border border-white/30 font-medium px-4 py-2 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 text-xs md:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now →
            </button>

            {/* Contact Numbers */}
            {['09674673674', '01777277727', '098563564546'].map((number, index) => (
              <button
                key={index}
                onClick={() => window.location.href = `tel:${number}`}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium px-4 py-2 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 text-xs md:text-sm"
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
    </div>
  );
};

export default Banner;
