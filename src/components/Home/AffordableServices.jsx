import React from "react";
import { Link } from "react-router-dom";

function AffordableServices() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Professional IT & Networking Services in Alberta
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-300">
          Dorlabs Tech provides reliable IT and networking services designed to
          support small and medium-sized businesses in Alberta. From secure
          network setup and managed IT support to cybersecurity and cloud
          solutions, we help your business stay connected and protected.
        </p>

        <div className="flex justify-center">
          <Link
            to="/services"
            aria-label="Explore IT and networking services offered by Dorlabs Tech"
            className="bg-blue-900 text-white uppercase font-semibold px-10 py-4 rounded-xl hover:bg-blue-800 transition-colors"
          >
            View Our Services
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AffordableServices;
