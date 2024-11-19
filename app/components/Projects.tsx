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
              src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90MzkuMzA4MDgtNi80NjIxMzE4NTRfMTgwMDAyNjAxMTE2ODAyNTFfODgzNzYxODEwMTg0NTMzOTMzOV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VEazJNQzV6WkhJdVpqTXdPREE0TG1SbFptRjFiSFJmYVcxaFoyVWlmUSZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMyZfbmNfb2hjPUE5SW04SmdsaU1FUTdrTnZnSFJkblRVJl9uY19naWQ9Y2VmMjVlNDNlZTUzNGQzY2I2MzNkMzRkYWY4ZWZhNTImZWRtPUFQczE3Q1VBQUFBQSZjY2I9Ny01Jm9oPTAwX0FZQXc3N3RZemRoRFVuakhqYTRhcEZXRmlFS3MzMVdpXzlhRGw4Y0k5bUJyQVEmb2U9Njc0Mjc5NDcmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBpbnN0YS5hcHBfdGh1bWJfNDYyMTMxODU0XzE4MDAwMjYwMTExNjgwMjUxXzg4Mzc2MTgxMDE4NDUzMzkzMzlfbi5qcGcifQ.Eeksb15ULSU8_cg4apb7HOQAK87uezVqOg3Ibb5Nv_4"
              alt="Project 1"
              className="w-full h-48 object-cover" // image will cover the space of the div
            />
          </a>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl mb-2">KAIA - Fanbase</h3>
            <p className="mb-4">A website to communicate with the fans</p>
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
        <div className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <a
            href="https://another-example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Directly use a specific image for Project 3 */}
            <img
              src="https://free-3dtextureshd.com/wp-content/uploads/2024/03/32.jpg.webp"
              alt="Project 3"
              className="w-full h-48 object-cover" // image will cover the container
            />
          </a>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl mb-2">Another Project</h3>
            <p className="mb-4">An exciting project showcasing skills.</p>
            <a
              href="https://another-example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
