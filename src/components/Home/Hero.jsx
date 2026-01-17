import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 pt-20 pb-28">
      {/* Decorative Glow */}
      <div className="absolute -top-28 -left-28 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">

          {/* Text Content */}
          <div
            className={`w-full md:w-1/2 text-white transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 text-blue-200 border border-white/10">
              Alberta IT & Networking Experts
            </span>

            {/* SEO OPTIMIZED H1 */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              IT & Networking Services in Alberta
              <br />
              <span className="text-blue-300">
                You Can Rely On
              </span>
            </h1>

            {/* SEO SUPPORTING PARAGRAPH */}
            <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-8">
              Dorlabs Tech provides professional IT services and networking
              solutions in Alberta, helping businesses stay connected, secure,
              and productive. We specialize in business network setup, IT
              support, and managed technology services for small and medium-sized
              organizations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/contact"
                aria-label="Contact Dorlabs Tech for IT and networking services in Alberta"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-bold uppercase tracking-wide shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300"
              >
                Contact Dorlabs Tech
              </Link>

              <a
                href="tel:+14035502982"
                aria-label="Call Dorlabs Tech at +1 403-550-2982"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Call Us: +1 403-550-2982
              </a>
            </div>

            {/* Why Choose Us */}
            <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 max-w-xl">
              <h3 className="text-lg font-bold mb-4 text-white">
                Why Choose Dorlabs Tech?
              </h3>
              <ul className="space-y-3 text-blue-100 text-sm md:text-base">
                <li>✔ Local Alberta-based IT service provider</li>
                <li>✔ Customized IT & networking solutions</li>
                <li>✔ Fast response times and dependable support</li>
                <li>✔ Experienced IT and network specialists</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-[460px]">
              <img
                src="https://ext.same-assets.com/920191075/1327174297.jpeg"
                alt="IT and Networking Services for Businesses in Alberta"
                className="w-full rounded-2xl shadow-2xl border border-white/20"
                loading="eager"
              />

              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 animate-pulse"></div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 px-5 py-4 rounded-xl shadow-xl text-sm font-semibold">
                ⚡ Reliable • Secure • Scalable IT Solutions
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
