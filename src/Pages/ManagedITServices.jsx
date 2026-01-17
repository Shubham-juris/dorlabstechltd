import React from "react";
import { Link } from "react-router-dom";

export default function ManagedITServices() {
  return (
    <>
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Managed IT Services in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Proactive managed IT services designed to keep your business systems
          secure, stable, and running smoothly.
        </p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg mb-16 max-w-4xl mx-auto">
          Dorlabs Tech provides comprehensive managed IT services for Alberta
          businesses, offering proactive monitoring, maintenance, and technical
          support to prevent issues before they impact operations.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Monitoring & Maintenance
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>24/7 system monitoring</li>
              <li>Patch management & updates</li>
              <li>Performance optimization</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              IT Support Services
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Remote & on-site IT support</li>
              <li>Help desk services</li>
              <li>Fast issue resolution</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Infrastructure Management
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Server & workstation management</li>
              <li>Device & vendor coordination</li>
              <li>System lifecycle management</li>
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
