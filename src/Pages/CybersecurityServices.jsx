import React from "react";
import { Link } from "react-router-dom";

export default function CybersecurityServices() {
  return (
    <>
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Cybersecurity Services in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Protect your business systems, users, and data from evolving cyber
          threats.
        </p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg mb-16 max-w-4xl mx-auto">
          Our cybersecurity services help Alberta businesses reduce risk,
          protect sensitive data, and maintain compliance through proactive
          security solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* CARD 1 */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition text-white">
            <h2 className="text-2xl font-bold mb-4">
              Firewall & Endpoint Protection
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-blue-100">
              <li>Advanced firewall deployment</li>
              <li>Endpoint & antivirus protection</li>
              <li>Ransomware defense</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition text-white">
            <h2 className="text-2xl font-bold mb-4">Threat Prevention</h2>
            <ul className="list-disc ml-6 space-y-2 text-blue-100">
              <li>Security assessments</li>
              <li>Vulnerability scanning</li>
              <li>Threat monitoring</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition text-white">
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <ul className="list-disc ml-6 space-y-2 text-blue-100">
              <li>Encryption & access control</li>
              <li>Backup security</li>
              <li>Compliance support</li>
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
