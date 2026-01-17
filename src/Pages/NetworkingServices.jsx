import React from "react";
import { Link } from "react-router-dom";

export default function NetworkingServices() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Business Networking Services in Alberta
        </h1>

        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Dorlabs Tech provides professional business networking services in Alberta,
          helping organizations stay connected, secure, and productive with reliable
          network infrastructure.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg leading-relaxed mb-16 max-w-4xl mx-auto">
          A strong and secure network is the foundation of every modern business.
          Dorlabs Tech delivers end-to-end networking solutions designed to support
          efficient communication, fast data transfer, and future scalability.
          From initial setup to ongoing optimization, we build networks businesses
          can rely on.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* CARD 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Network Setup & Configuration
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Office network design and installation</li>
              <li>Structured cabling solutions</li>
              <li>Router and switch configuration</li>
              <li>LAN & WAN setup for business environments</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Wireless & Secure Wi-Fi Solutions
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Secure business Wi-Fi installation</li>
              <li>Guest and employee network separation</li>
              <li>Wireless coverage and performance optimization</li>
              <li>Access control and authentication setup</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Network Security & Firewalls
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Firewall installation and configuration</li>
              <li>VPN setup for secure remote access</li>
              <li>Network monitoring and threat detection</li>
              <li>Intrusion prevention and traffic control</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Network Troubleshooting & Optimization
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We quickly identify and resolve network issues to reduce downtime,
              improve performance, and ensure reliable connectivity across your
              organization.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/get-quote"
            className="inline-block bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
