import React from "react";
import { Link } from "react-router-dom";

export default function CloudBackupServices() {
  return (
    <>
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Cloud & Backup Solutions in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Secure, scalable cloud and backup solutions for modern businesses.
        </p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg mb-16 max-w-4xl mx-auto">
          Dorlabs Tech delivers cloud and backup solutions that improve flexibility,
          protect critical data, and ensure business continuity during disruptions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Cloud Migration & Infrastructure
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Cloud migration planning</li>
              <li>Hybrid cloud solutions</li>
              <li>Infrastructure optimization</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Backup & Disaster Recovery
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Automated backups</li>
              <li>Disaster recovery planning</li>
              <li>Business continuity support</li>
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
