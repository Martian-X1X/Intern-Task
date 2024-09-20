'use client';

import React from 'react';
import Image from 'next/image';
import avatar1 from "../assets/av1.jpg";
import avatar2 from "../assets/av2.png";
import avatar3 from "../assets/av3.jpg";

const Photo = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Photo Section */}
      <div className="flex flex-col md:flex-wrap md:flex-row gap-8 mb-8 md:mb-0 md:w-3/5">
        <div className="relative">
          <div className="w-56 h-56 sm:w-64 sm:h-64 bg-indigo-500 rounded-3xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
            Photo 1
          </div>
          <div className="absolute -bottom-0 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 sm:border-8 border-white">
            <Image src={avatar1} alt="Avatar 1" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="relative mt-12 sm:mt-20 sm:ml-10">
          <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-300 rounded-3xl flex items-center justify-center text-gray-700 text-2xl sm:text-3xl font-bold">
            Photo 2
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 sm:border-8 border-white">
            <Image src={avatar2} alt="Avatar 2" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="relative ml-12 sm:ml-16 mt-12 sm:mt-0">
          <div className="w-48 h-48 sm:w-60 sm:h-60 bg-red-500 rounded-3xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
            Photo 3
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 sm:border-8 border-white">
            <Image src={avatar3} alt="Avatar 3" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-2/5 mt-8 md:mt-0">
        <p className="text-base sm:text-lg font-semibold mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <button className="bg-transparent text-indigo-600 px-4 sm:px-6 py-2 rounded-full border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Photo;
