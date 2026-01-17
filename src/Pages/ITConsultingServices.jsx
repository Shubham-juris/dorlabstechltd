import React from "react";
import { Link } from "react-router-dom";

export default function ITConsultingServices() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          IT Consulting Services in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Professional IT consulting to help businesses plan, optimize, and
          scale their technology systems.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          We provide IT consulting services to help businesses plan, optimize,
          and scale technology systems for improved performance, security, and
          long-term growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-10 text-left">

          {/* TECHNOLOGY STRATEGY */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Technology Strategy
            </h3>
            <ul className="list-disc ml-6 text-white space-y-2">
              <li>IT assessments & audits</li>
              <li>Infrastructure planning</li>
              <li>Technology roadmaps</li>
            </ul>
          </div>

          {/* BUSINESS OPTIMIZATION */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Business Optimization
            </h3>
            <ul className="list-disc ml-6 text-white space-y-2">
              <li>Process improvement</li>
              <li>System optimization</li>
              <li>Cost-effective IT solutions</li>
            </ul>
          </div>

          {/* ONGOING ADVISORY */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ongoing Advisory
            </h3>
            <ul className="list-disc ml-6 text-white space-y-2">
              <li>Trusted IT guidance</li>
              <li>Vendor recommendations</li>
              <li>Long-term technology planning</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
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
