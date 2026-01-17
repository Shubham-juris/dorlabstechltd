import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Client Testimonials
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          See what businesses are saying about Dorlabs Tech’s IT and networking
          services across Alberta.
        </p>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          Ready to Work With a Trusted IT Partner?
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Get reliable IT and networking solutions designed for your business.
        </p>
        <Link
          to="/get-quote"
          className="inline-block bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Get a Quote
        </Link>
      </section>
    </>
  );
}
