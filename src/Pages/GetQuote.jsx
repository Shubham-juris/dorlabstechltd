import React from "react";
import { useSearchParams } from "react-router-dom";

export default function GetQuote() {
  const [params] = useSearchParams();
  const selectedService = params.get("service") || "";

  return (
    <section className="py-24 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-900 text-center">
        Get a Quote for IT & Networking Services
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Tell us about your requirements and our team will get back to you with a
        customized solution.
      </p>

      <form className="space-y-5">
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name *"
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address *"
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Service Selection */}
        <select
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          defaultValue={selectedService}
          required
        >
          <option value="">Choose a Service *</option>
          <option value="Networking Services">Networking Services</option>
          <option value="Managed IT Services">Managed IT Services</option>
          <option value="Cybersecurity Services">Cybersecurity Services</option>
          <option value="Cloud & Backup Solutions">Cloud & Backup Solutions</option>
          <option value="IT Consulting Services">IT Consulting Services</option>
        </select>

        {/* Message */}
        <textarea
          placeholder="Tell us about your requirements"
          rows="5"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Submit Request
        </button>
      </form>
    </section>
  );
}
