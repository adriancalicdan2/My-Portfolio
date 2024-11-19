// components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg">
          Hi, I'm Adrian Calicdan, a passionate web developer who loves to
          experiment with futuristic designs and technologies. I create unique,
          interactive websites and web applications that are both functional and
          aesthetically pleasing.
        </p>
      </div>
    </section>
  );
};

export default About;
