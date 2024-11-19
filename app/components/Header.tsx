"use client";

import Link from "next/link";
import Nav from "./Nav"; // Import Nav component

const Header = () => {
  return (
    <header
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1670963025018-27dd11a9b0ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29yayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Dark overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
          Adrian Calicdan
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeInUp">
          Web Developer & Designer | Creating the Future of the Web
        </p>
        <Link
          href="#about"
          className="bg-pink-500 py-3 px-8 text-white rounded-full text-lg hover:bg-pink-600 transition transform animate__animated animate__fadeInUp"
        >
          Explore My Work
        </Link>
      </div>

      {/* Sticky Navbar - Now placed inside Nav.tsx */}
      <Nav />
    </header>
  );
};

export default Header;
