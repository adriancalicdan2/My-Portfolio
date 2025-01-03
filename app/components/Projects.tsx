"use client";

import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Project 1 */}
        <div className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <a
            href="https://zaialand.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Directly use a specific image for Project 1 */}
            <img
              src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/472314638_621340640361775_7610287009339985567_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF1rZoQ4bT3_8ZqgTLh3-ClUJGdQbhrJ1hQkZ1BuGsnWHejYpx4zXXOc_8dcVp2-EGDTIQxOcCmrg3WUE5JGZen&_nc_ohc=PzpxmZ3gROAQ7kNvgGYW6PH&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=AfY1LU7j4iuw4qPYWKCRBAW&oh=00_AYC82w62x6QMU1RgYACkhptx6_m2x6YHFewCAvIxl81sbg&oe=677D88AF"
              alt="Project 1"
              className="w-full h-48 object-cover" // image will cover the space of the div
            />
          </a>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl mb-2">KAIA - Fanbase</h3>
            <p className="mb-4">
              A platform for fan interactions and communication.
            </p>
            <a
              href="https://zaialand.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <a
            href="https://colegiodeportavaga.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Directly use a specific image for Project 2 */}
            <img
              src="https://i.ibb.co/ZzBjGk6/Untitled.png"
              alt="Project 2"
              className="w-full h-48 object-cover" // Ensures image covers the div
            />
          </a>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl mb-2">Colegio de Porta Vaga</h3>
            <p className="mb-4">Our school website.</p>
            <a
              href="https://colegiodeportavaga.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 (if applicable) */}
      </div>
    </section>
  );
};

export default Projects;
