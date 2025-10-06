import React, { useEffect, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);

  // Simple fade-in effect after component mounts
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 pt-12 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text Section */}
          <div
            className={`w-full md:w-1/2 text-white transition-opacity duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-sm uppercase font-semibold tracking-widest text-blue-200 mb-3">
              Welcome
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Revolutionize Your Business with <br className="hidden sm:block" />
              <span className="text-blue-300">Cutting-Edge IT Services</span>
            </h1>
            <p className="text-lg md:text-xl italic text-blue-100 mb-8">
              "Dive into the virtual world where the extraordinary becomes your reality"
            </p>
            <a
              href="#learn-more"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-lg hover:bg-blue-100 transition-colors duration-300"
            >
              — Learn More —
            </a>
          </div>

          {/* Image Section */}
          <div
            className={`w-full md:w-1/2 flex justify-center items-center transition-opacity duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-full max-w-[450px]">
              <img
                src="https://ext.same-assets.com/920191075/1327174297.jpeg"
                alt="Floating smartphones"
                className="w-full h-auto object-contain rounded-lg shadow-2xl border-4 border-white/10"
              />
              <div className="absolute top-[-20px] left-[-20px] w-full h-full rounded-lg border-4 border-blue-400 opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
