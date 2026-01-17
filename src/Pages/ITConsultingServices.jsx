import React from "react";
import { Link } from "react-router-dom";

export default function ITConsultingServices() {
  return (
    <>
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          IT Consulting Services in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Strategic IT consulting to help businesses plan, optimize, and scale.
        </p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg mb-16 max-w-4xl mx-auto">
          Our IT consulting services help Alberta businesses make informed
          technology decisions, improve efficiency, and align IT systems with
          long-term business goals.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Technology Strategy
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>IT assessments & audits</li>
              <li>Infrastructure planning</li>
              <li>Technology roadmaps</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Ongoing Advisory Services
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Vendor recommendations</li>
              <li>Cost optimization</li>
              <li>Long-term IT guidance</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <Link
            to="/get-quote"
            className="bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
