"use client";
import { FaUserTie } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Mengimpor komponen Image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Announcement */}
      <div className="bg-black text-white text-center py-1 text-sm font-sans">
        ORDER CAKE AND BREAD FOR LOCAL PICK UP
      </div>

      {/* Main Navbar */}
      <nav className="max-w-screen-xl mx-auto px-3 py-3 flex justify-between items-center">
        {/* Left Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 font-display">
          <Link
            href={"/"}
            className="relative inline-block text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-300
                     before:content-[''] before:absolute before:-bottom-1 
                     before:left-0 before:w-0 before:h-[2px] before:bg-gray-800
                     before:transition-all before:duration-300 hover:before:w-full"
          >
            HOME
          </Link>
          <Link
            href={"/about"}
            className="relative inline-block text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-300
                     before:content-[''] before:absolute before:-bottom-1 
                     before:left-0 before:w-0 before:h-[2px] before:bg-gray-800
                     before:transition-all before:duration-300 hover:before:w-full"
          >
            ABOUT US
          </Link>
          <Link
            href={"/products"}
            className="relative inline-block text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-300
                     before:content-[''] before:absolute before:-bottom-1 
                     before:left-0 before:w-0 before:h-[2px] before:bg-gray-800
                     before:transition-all before:duration-300 hover:before:w-full"
          >
            PRODUCTS
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-7">
          <Link
            href={"/"}
            className="flex justify-center items-center bg-white rounded-full border-4 border-white shadow-md"
          >
            <Image
              src="/sinarbulan.png"
              alt="sinar bulan bakery"
              width={112} // Width for the logo
              height={112} // Height for the logo
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Right Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 font-sans">
          <Link
            href={"/teams"}
            className="bg-purple-200 text-purple-950 p-3 rounded-md shadow-lg hover:scale-105 transition-all hover:border-purple-950 hover:bg-purple-950 hover:text-white"
          >
            TEAMS
          </Link>
          <div className="flex space-x-1">
            <a
              href=""
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaUserTie className="fill-current" />
            </a>
            <a
              href=""
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaShoppingCart className="fill-current" />
            </a>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 flex flex-col space-y-4">
          <Link href={"/"} className="text-gray-800 font-semibold">
            HOME
          </Link>
          <Link href={"/about"} className="text-gray-800 font-semibold">
            ABOUT US
          </Link>
          <Link href={"/products"} className="text-gray-800 font-semibold">
            PRODUCT
          </Link>
          <Link
            href={"/teams"}
            className="bg-purple-200 text-purple-950 font-bold px-4 py-1 rounded-full shadow-lg hover:scale-105 transition-all hover:border-purple-950 hover:bg-purple-950 hover:text-white"
          >
            TEAMS
          </Link>
          <div className="flex space-x-4 justify-center">
            <a
              href="#"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaUserTie className="fill-current" />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaShoppingCart className="fill-current" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
