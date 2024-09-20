"use client";

import React from "react";
import { Filter } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.jpg";

// Define types for the Card component props
import { StaticImageData } from "next/image";

type User = {
  image: StaticImageData; // StaticImageData instead of string
};

type CardProps = {
  title: string;
  tkValue: number;
  numberOfItems: number;
  color: string;
  users: User[];
};

const Card: React.FC<CardProps> = ({
  title,
  tkValue,
  numberOfItems,
  color,
  users,
}) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-lg bg-white flex flex-col">
      {/* Top Color Section with Gradient */}
      <div className={`w-full h-24 md:h-28 rounded-lg relative ${color}`}>
        {/* User Avatars */}
        <div className="absolute bottom-[-12px] left-4 flex -space-x-2">
          {users.map((user, index) => (
            <Image
              key={index}
              src={user.image}
              alt={`User ${index + 1}`}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover"
              width={40}
              height={40}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-8 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            {title}
          </h3>
          <div className="flex justify-between text-gray-500 text-sm md:text-base mt-2">
            <p>{tkValue} TK</p>
            <p>{`1 of ${numberOfItems}`}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button className="px-3 py-1 text-xs md:text-sm bg-purple-500 text-white rounded-lg">
            DSVBD
          </button>
          <button className="px-3 py-1 text-xs md:text-sm bg-teal-400 text-white rounded-lg">
            DSVBD
          </button>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const categories = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
  ];

  return (
    <div className="mt-20 mb-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
        DISCOVER MORE
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                index === 0
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
          <Filter size={18} />
          <span className="text-sm md:text-base font-medium">All Filters</span>
        </button>
      </div>
    </div>
  );
};

// Define type for the card data array
type CardData = {
  title: string;
  tkValue: number;
  numberOfItems: number;
  color: string;
  users: User[];
};

const CardList: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "Art stuff",
      tkValue: 598,
      numberOfItems: 9,
      color: "bg-gradient-to-br from-purple-300 to-purple-400",
      users: [avatar1, avatar2, avatar3].map((img) => ({ image: img })),
    },
    {
      title: "ABCD",
      tkValue: 777,
      numberOfItems: 19,
      color: "bg-gradient-to-br from-green-300 to-green-400",
      users: [avatar2, avatar3, avatar1].map((img) => ({ image: img })),
    },
    {
      title: "EFGH",
      tkValue: 58,
      numberOfItems: 64,
      color: "bg-gradient-to-br from-blue-300 to-blue-400",
      users: [avatar3, avatar1, avatar2].map((img) => ({ image: img })),
    },
    {
      title: "XYZ",
      tkValue: 0,
      numberOfItems: 6,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      users: [avatar1, avatar2, avatar3].map((img) => ({ image: img })),
    },
    {
      title: "Card 5",
      tkValue: 123,
      numberOfItems: 7,
      color: "bg-gradient-to-br from-red-300 to-red-400",
      users: [avatar2, avatar3, avatar1].map((img) => ({ image: img })),
    },
    {
      title: "Card 6",
      tkValue: 456,
      numberOfItems: 12,
      color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
      users: [avatar3, avatar1, avatar2].map((img) => ({ image: img })),
    },
    {
      title: "Card 7",
      tkValue: 89,
      numberOfItems: 23,
      color: "bg-gradient-to-br from-teal-300 to-teal-400",
      users: [avatar1, avatar2, avatar3].map((img) => ({ image: img })),
    },
    {
      title: "Card 8",
      tkValue: 901,
      numberOfItems: 45,
      color: "bg-gradient-to-br from-pink-300 to-pink-400",
      users: [avatar2, avatar3, avatar1].map((img) => ({ image: img })),
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            tkValue={card.tkValue}
            numberOfItems={card.numberOfItems}
            color={card.color}
            users={card.users}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
