import React, { memo, useRef } from "react";
import SplitText from "./SplitText";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9d6tuaa",
        "template_5ogcprn",
        formRef.current,
        "Cz3lILH70aIQN8E0h"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-center text-4xl sm:text-7xl font-bold text-amber-500 mb-10">
        CONTACT ME
      </h1>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">Message</label>
          <textarea
            rows="4"
            name="message"
            placeholder="Write your message..."
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gray-600 text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default memo(Contact);
