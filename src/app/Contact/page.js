"use client";

import { useState } from "react";
import { toast } from 'react-toastify';
import { MdConnectWithoutContact } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",  // ✅ Added subject field
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // ✅ Reset subject too
      } else {
        console.log(process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="w-full py-16 flex flex-col items-center max-lg:p-5 mt-10">
      <h1 className="text-4xl font-bold border-b-4 border-cyan-500 pb-2">
        CONTACT
      </h1>
      <p className="text-xl mt-2 max-w-4xl text-center max-lg:text-sm px-4">
        I'd love to hear from you — reach out for any opportunities or questions.
      </p>

      <div className="form w-full max-w-md mt-8 p-6 bg-transparent rounded-lg shadow-lg border">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex justify-center items-center">
              <MdConnectWithoutContact className="w-10 h-10 fill-cyan-500" />
              <h1 className="text-center text-xl p-3 font-bold mb-3">Connect With Me</h1>
              <MdConnectWithoutContact className="w-10 h-10 fill-cyan-500" />
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
