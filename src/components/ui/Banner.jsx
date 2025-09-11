import React from 'react';
import Image from 'next/image';

const Banner = ({ imageUrl, title, subtitle }) => {
  const defaultImage = "/default_banner.jpg";

  return (
    <div className="relative w-full h-[95vh] overflow-hidden rounded-lg shadow-lg">
      <Image
        src={imageUrl || defaultImage}
        alt={title || "Banner Image"}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay only if title or subtitle is present */}
      {(title || subtitle) && (
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      )}

      {/* Content area with updated styling */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center h-full px-4 md:px-8 z-20 pointer-events-none">
          <div className="font-heading text-white w-full lg:w-3/5 space-y-6 pl-8 lg:pl-16 text-left pointer-events-auto">
            {title && (
              <h4 className="sm:text-3xl text-[20px] lg:text-4xl font-bold mb-4">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="text-[12px] sm:text-[16px]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
