"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ColorItem {
  color: string;
}

const colors: ColorItem[] = [
  { color: 'bg-pink-300' },
  { color: 'bg-purple-300' },
  { color: 'bg-green-300' },
  { color: 'bg-purple-600' },
  { color: 'bg-blue-800' },
];

const Overview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const index = currentIndex === 0 ? colors.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex === colors.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Large screen slider */}
      <div className="hidden md:block w-full h-[130vh] overflow-hidden">
        {/* Slider Section with top half solid white and bottom half gradient black to emerald */}
        <div className="relative w-full h-3/4 bg-white">
          {/* Slider background with top half white and bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-stone-600 to-emerald-600"></div>

          {/* Slide Container */}
          <div className="absolute ml-[85%] mt-10 inset-0 flex items-center justify-center z-50">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${color.color} ${
                    index === currentIndex ? 'h-96 w-72' : 'h-80 w-72'
                  } rounded-sm`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Emerald Green Section (Overview and Buttons Section with Fixed Height) */}
        <div className="w-full h-[300px] bg-gradient-to-b from-emerald-600 to-emerald-400 relative flex items-center justify-center">
          {/* Overview Text and Buttons */}
          <div className="absolute bottom-0 left-0 p-16 w-full flex items-center justify-between">
            <div className="mb-32 w-[40%]">
              <h2 className="text-5xl font-bold mb-6 text-black">Overview</h2>
              <p className="text-xl text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Button Container (Side by side with Overview) */}
            <div className="flex gap-4">
              {/* Conditionally hide the left arrow if on the first slide */}
              <div
                className={`cursor-pointer p-4 rounded-full bg-black transition-opacity duration-300 ${
                  currentIndex === 0 ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={handlePrev}
                style={{ pointerEvents: currentIndex === 0 ? 'none' : 'auto' }} // Disable click when hidden
              >
                <ChevronLeft size={32} className="text-white" />
              </div>

              {/* Conditionally hide the right arrow if on the last slide */}
              <div
                className={`cursor-pointer p-4 rounded-full bg-black transition-opacity duration-300 ${
                  currentIndex === colors.length - 1 ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={handleNext}
                style={{ pointerEvents: currentIndex === colors.length - 1 ? 'none' : 'auto' }} // Disable click when hidden
              >
                <ChevronRight size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive slider */}
      <div className="md:hidden w-full h-screen overflow-hidden flex flex-col">
        {/* Slide Container */}
        <div className="flex justify-center items-center">
          <div
            className="flex transition-transform duration-500 w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {colors.map((color, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${color.color} h-96 min-w-full rounded-sm`}
              />
            ))}
          </div>
        </div>

        {/* Overview Text and Buttons */}
        <div className=" p-6 bg-gradient-to-b from-emerald-600 to-emerald-400">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-black">Overview</h2>
            <p className="text-md text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Button Container */}
          <div className="flex justify-between items-center">
            {/* Conditionally hide the left arrow if on the first slide */}
            <div
              className={`cursor-pointer p-2 rounded-full bg-black transition-opacity duration-300 ${
                currentIndex === 0 ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={handlePrev}
              style={{ pointerEvents: currentIndex === 0 ? 'none' : 'auto' }} // Disable click when hidden
            >
              <ChevronLeft size={24} className="text-white" />
            </div>

            {/* Conditionally hide the right arrow if on the last slide */}
            <div
              className={`cursor-pointer p-2 rounded-full bg-black transition-opacity duration-300 ${
                currentIndex === colors.length - 1 ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={handleNext}
              style={{ pointerEvents: currentIndex === colors.length - 1 ? 'none' : 'auto' }} // Disable click when hidden
            >
              <ChevronRight size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
