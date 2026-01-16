// import React, { useEffect, useState } from "react";

// function Hero() {
//   const [visible, setVisible] = useState(false);

//   // Simple fade-in effect after component mounts
//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   return (
//     <section className="bg-gradient-to-br from-blue-900 to-blue-700 pt-12 pb-20">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

//           {/* Text Section */}
//           <div
//             className={`w-full md:w-1/2 text-white transition-opacity duration-1000 ${
//               visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
//             }`}
//           >
//             <h2 className="text-sm uppercase font-semibold tracking-widest text-blue-200 mb-3">
//               Welcome
//             </h2>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
//               Revolutionize Your Business with <br className="hidden sm:block" />
//               <span className="text-blue-300">Cutting-Edge IT Services</span>
//             </h1>
//             <p className="text-lg md:text-xl italic text-blue-100 mb-8">
//               "Dive into the virtual world where the extraordinary becomes your reality"
//             </p>
//             <a
//               href="#learn-more"
//               className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-lg hover:bg-blue-100 transition-colors duration-300"
//             >
//               — Learn More —
//             </a>
//           </div>

//           {/* Image Section */}
//           <div
//             className={`w-full md:w-1/2 flex justify-center items-center transition-opacity duration-1000 ${
//               visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
//             }`}
//           >
//             <div className="relative w-full max-w-[450px]">
//               <img
//                 src="https://ext.same-assets.com/920191075/1327174297.jpeg"
//                 alt="Floating smartphones"
//                 className="w-full h-auto object-contain rounded-lg shadow-2xl border-4 border-white/10"
//               />
//               <div className="absolute top-[-20px] left-[-20px] w-full h-full rounded-lg border-4 border-blue-400 opacity-10 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;



import React, { useEffect, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 pt-20 pb-28">
      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">

          {/* Text Content */}
          <div
            className={`w-full md:w-1/2 text-white transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 text-blue-200 border border-white/10">
              Alberta IT & Networking Experts
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              Reliable IT & Networking
              <br />
              <span className="text-blue-300">
                Solutions for Businesses in Alberta
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-8">
              Fast, secure, and customized technology support designed to keep
              small and medium businesses connected, protected, and productive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-bold uppercase tracking-wide shadow-xl hover:scale-105 hover:bg-blue-100 transition-all duration-300"
              >
                Get a Free Consultation
              </a>

              <a
                href="tel:+14035502982"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Call Us: +1 403-550-2982
              </a>
            </div>

            {/* Why Choose Us */}
            <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-6 max-w-xl">
              <h3 className="text-lg font-bold mb-4 text-white">
                Why Choose Dorlabs Tech
              </h3>
              <ul className="space-y-3 text-blue-100 text-sm md:text-base">
                <li>✔ Local Alberta-based IT & networking experts</li>
                <li>✔ Customized service plans for your business</li>
                <li>✔ Fast response times & clear communication</li>
                <li>✔ Proven experience securing IT environments</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-[460px]">
              <img
                src="https://ext.same-assets.com/920191075/1327174297.jpeg"
                alt="IT Solutions Illustration"
                className="w-full rounded-2xl shadow-2xl border border-white/20"
              />

              {/* Floating Frame Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 animate-pulse"></div>

              {/* Accent Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 px-5 py-4 rounded-xl shadow-xl text-sm font-semibold">
                ⚡ Fast • Secure • Scalable IT Solutions
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

