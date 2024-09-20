"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-zinc-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 ml-12 gap-24">
          {['Home', 'Event', 'Contact', 'Blog'].map((item) => (
            <div key={item} className="relative group flex items-center">
              <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                {item}
              </Link>
              <ChevronDown className="ml-1 w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-200 transition-all group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black rounded-full mr-10 py-1 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute right-12 top-1/2 transform -translate-y-1/2 text-black" size={20} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          {['Home', 'Event', 'Contact', 'Blog'].map((item) => (
            <div key={item} className="relative group flex items-center justify-center">
              <Link href={`/${item.toLowerCase()}`} className="text-white hover:text-gray-300 transition-colors">
                {item}
              </Link>
            </div>
          ))}
          <div className="relative mx-auto w-full px-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white text-black rounded-full py-1 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-black" size={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
