"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to add a background color once scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-4 py-6 md:py-4 transition-all ${
        isScrolled ? "bg-black bg-opacity-75" : "bg-transparent"
      }`}
    >
      {/* Mobile Menu Icon (only visible on small screens) */}
      <button
        className="md:hidden text-white flex flex-col justify-between items-center space-y-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        {/* Hamburger Icon */}
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMobileMenuOpen
            ? "block absolute top-full left-0 w-full bg-black bg-opacity-80 text-white mt-2"
            : "hidden"
        } md:hidden transition-all duration-300`}
      >
        <div className="flex flex-col items-center py-4">
          <Link
            href="#about"
            className="text-2xl mb-4 hover:text-pink-500 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu on link click
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-2xl mb-4 hover:text-pink-500 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu on link click
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-2xl mb-4 hover:text-pink-500 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu on link click
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-end space-x-8 text-lg text-white">
        <Link
          href="#about"
          className="relative group text-white hover:text-pink-500 transition-all duration-300"
        >
          About
          <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link
          href="#projects"
          className="relative group text-white hover:text-pink-500 transition-all duration-300"
        >
          Projects
          <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link
          href="#contact"
          className="relative group text-white hover:text-pink-500 transition-all duration-300"
        >
          Contact
          <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
