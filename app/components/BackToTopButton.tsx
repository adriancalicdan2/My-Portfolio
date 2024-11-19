// components/BackToTopButton.tsx
"use client"; // Add this line to indicate it's a client-side component

import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Detect scroll position and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Show button after 200px scroll
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-pink-500 text-white p-4 rounded-full shadow-lg transition-opacity ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transition: "opacity 0.3s ease-in-out", // Optional for smooth fade-in/out
      }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
