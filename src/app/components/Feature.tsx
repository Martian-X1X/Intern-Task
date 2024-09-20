"use client";

import React, { useState } from "react";

const Feature = () => {
  const colors = [
    { id: 1, color: "bg-pink-300" }, // Main color
    { id: 2, color: "bg-green-500" }, // Right Top
    { id: 3, color: "bg-purple-400" }, // Right Middle
    { id: 4, color: "bg-pink-300" }, // Right Bottom
    { id: 5, color: "bg-green-800" }, // Bottom Left
    { id: 6, color: "bg-teal-400" }, // Bottom Second
    { id: 7, color: "bg-purple-600" }, // Bottom Third
    { id: 8, color: "bg-red-500" }, // Bottom Right
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].color);

  return (
    <div className="relative">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 w-full h-[300px] md:h-[400px] bg-emerald-500 clip-custom"></div>

      {/* Main Content */}
      <div className="relative flex justify-center items-center h-auto py-16 rounded-b-[80%]">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 md:px-0">
          {/* Image Grid Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-16 w-full">
            {/* Left Container */}
            <div className="relative flex flex-col items-center lg:items-start w-full lg:w-auto">
              {/* Large Centered Box */}
              <div
                className={`w-[240px] h-[240px] md:w-[320px] md:h-[320px] ${selectedColor} rounded-lg mb-6 transition-colors duration-300 shadow-lg`}
              ></div>

              {/* Mobile Grid Layout for Small Screens */}
              <div
                className="grid grid-cols-2 gap-4 w-[50%] md:hidden"
              >
                {/* First row */}
                <div
                  className={`col-span-2 w-full h-16 md:h-24 ${colors[1].color} rounded-lg cursor-pointer ${
                    selectedColor === colors[1].color ? "border-4 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(colors[1].color)}
                ></div>

                {/* Second row */}
                <div
                  className={`w-full h-16 md:h-24 ${colors[4].color} rounded-lg cursor-pointer ${
                    selectedColor === colors[4].color ? "border-4 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(colors[4].color)}
                ></div>
                <div
                  className={`w-full h-16 md:h-24 ${colors[2].color} rounded-lg cursor-pointer ${
                    selectedColor === colors[2].color ? "border-4 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(colors[2].color)}
                ></div>

                {/* Third row */}
                <div
                  className={`w-full h-16 md:h-24 ${colors[5].color} rounded-lg cursor-pointer ${
                    selectedColor === colors[5].color ? "border-4 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(colors[5].color)}
                ></div>
                <div
                  className={`w-full h-16 md:h-24 ${colors[3].color} rounded-lg cursor-pointer ${
                    selectedColor === colors[3].color ? "border-4 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(colors[3].color)}
                ></div>

                {/* Last row */}
                <div
                  className={`col-span-2 w-full h-16 md:h-24 ${colors[7].color} rounded-lg cursor-pointer ${
                    selectedColor === colors[7].color ? "border-4 border-black" : ""
                  }`}
                  onClick={() => setSelectedColor(colors[7].color)}
                ></div>
              </div>

              {/* Large screen layout for larger screens */}
              <div className="hidden lg:flex gap-4">
                {colors.slice(4).map((color) => (
                  <div
                    key={color.id}
                    onClick={() => setSelectedColor(color.color)}
                    className={`w-16 h-16 md:w-24 md:h-24 ${color.color} rounded-lg cursor-pointer ${
                      selectedColor === color.color ? "border-4 border-black" : ""
                    } transition-transform transform hover:scale-105`}
                    role="button"
                    aria-label={`Select color ${color.color}`}
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") setSelectedColor(color.color);
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Right Column of Three Colors */}
            <div className="hidden lg:flex flex-col gap-4 lg:ml-[-155px] w-full lg:w-auto">
              {colors.slice(1, 4).map((color) => (
                <div
                  key={color.id}
                  onClick={() => setSelectedColor(color.color)}
                  className={`w-16 h-16 md:w-24 md:h-24 ${color.color} rounded-lg cursor-pointer ${
                    selectedColor === color.color ? "border-4 border-black" : ""
                  } transition-transform transform hover:scale-105`}
                  role="button"
                  aria-label={`Select color ${color.color}`}
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setSelectedColor(color.color);
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[450px] mt-12 lg:mt-0 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Collection Featured</h2>
            <p className="text-md md:text-xl text-black mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
