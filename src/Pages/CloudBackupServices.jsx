import React from "react";
import { Link } from "react-router-dom";

export default function CloudBackupServices() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Cloud & Backup Solutions in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Secure, scalable cloud and backup solutions for modern businesses.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Overview
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Our cloud and backup solutions improve flexibility, scalability, and
          disaster recovery, helping your business stay operational and secure
          at all times.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-12 text-left">
          
          {/* CLOUD MIGRATION */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cloud Migration
            </h2>
            <ul className="list-disc ml-6 text-white space-y-2">
              <li>Cloud infrastructure design</li>
              <li>Cloud migration planning</li>
              <li>Hybrid cloud solutions</li>
            </ul>
          </div>

          {/* BACKUP */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Backup & Disaster Recovery
            </h2>
            <ul className="list-disc ml-6 text-white space-y-2">
              <li>Automated backups</li>
              <li>Disaster recovery planning</li>
              <li>Business continuity support</li>
            </ul>
          </div>

          {/* CLOUD SECURITY */}
          <div className="bg-blue-800 p-10 rounded-2xl shadow-lg ">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cloud Security
            </h2>
            <ul className="list-disc ml-6 text-white space-y-2">
              <li>Secure access control</li>
              <li>Cloud monitoring & threat protection</li>
              <li>Cost optimization & usage monitoring</li>
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
