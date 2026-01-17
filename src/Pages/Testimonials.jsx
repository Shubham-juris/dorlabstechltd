import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 leading-relaxed">
              Excellent networking support and fast response times. Our systems
              are more reliable and secure since working with Dorlabs Tech.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 leading-relaxed">
              Reliable IT services with clear communication throughout the
              process. Highly professional and dependable team.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 leading-relaxed">
              Highly recommended for managed IT and security solutions. Great
              experience from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
