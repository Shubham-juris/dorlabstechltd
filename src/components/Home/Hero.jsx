import React from 'react'

function Hero() {
  return (
    <section className="bg-blue-900 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center md:flex-row md:items-center">
          
          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img 
              src="https://ext.same-assets.com/920191075/1327174297.jpeg" 
              alt="Floating smartphones" 
              className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
            />
          </div>

          {/* Text section */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="text-white p-4 md:p-8 text-center md:text-left">
              <h2 className="uppercase font-semibold mb-4">WELCOME</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Revolutionize Your Business with Cutting-Edge IT Services
              </h1>
              <p className="text-lg italic mb-10">
                "Dive into the virtual world where the extraordinary becomes your reality"
              </p>
              <a
                href="#learn-more"
                className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:bg-opacity-10 hover:text-black transition-all uppercase tracking-wider font-medium"
              >
                — LEARN MORE —
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
