"use client"; // Add this line to mark this as a client-side component

import { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form
    if (!name || !email || !message) {
      setResponseMessage("Please fill out all fields.");
      return;
    }

    const formData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_629v84f",
        "template_4xf8449",
        formData,
        "95k_Fj2kWAzLVmsKe",
      )
      .then(() => {
        // Show success message and clear the input fields
        setResponseMessage("Message sent successfully!");
        setName(""); // Clear name field
        setEmail(""); // Clear email field
        setMessage(""); // Clear message field
      })
      .catch(() => {
        setResponseMessage("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-pink-500 mb-8">Contact Me</h2>
        <p className="text-lg mb-12">
          If you have any questions, feel free to drop me a message!
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 text-white bg-gray-800 rounded-lg shadow-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 text-white bg-gray-800 rounded-lg shadow-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full p-4 text-white bg-gray-800 rounded-lg shadow-md"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white py-3 px-8 rounded-full text-lg hover:bg-pink-600 transition-transform"
          >
            Send Message
          </button>
        </form>
        {responseMessage && (
          <div className="mt-8 text-xl text-green-500">{responseMessage}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
