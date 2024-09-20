'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { color: 'bg-red-500', text: 'Photo 1', size: 'large' },
    { color: 'bg-blue-500', text: 'Photo 2', size: 'small' },
    { color: 'bg-pink-500', text: 'Photo 3', size: 'large' },
    { color: 'bg-green-300', text: 'Photo 4', size: 'small' },
  ];

  return (
    <div className="relative overflow-hidden -mt-16 -z-50">
      {/* Semi-circle background */}
      <div className="absolute w-[50rem] h-64 sm:w-[70rem] sm:h-80 md:w-[100rem] md:h-96 -ml-20 -mt-36 bg-zinc-800 rounded-b-[50%] transform translate-y-1/2"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-20 px-4 mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-110
                ${hoveredIndex === index ? 'scale-110' : hoveredIndex !== null ? 'scale-90' : ''}
                ${image.size === 'large' ? 'w-64 h-64 sm:w-72 sm:h-72' : 'w-48 h-48 sm:w-64 sm:h-64'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-full h-full ${image.color} transition-all duration-300 ease-in-out
                ${image.size === 'small' && hoveredIndex === index ? 'scale-[1.33]' : ''}`}
              >
                <Image
                  src={`/api/placeholder/256/256`}
                  alt={image.text}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <span className="text-white text-lg sm:text-xl font-bold">{image.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
