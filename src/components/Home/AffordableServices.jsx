import React from 'react'

function AffordableServices() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Affordable IT Services</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-300">
          Welcome to Dorlabs Tech, your one-stop-shop for affordable and reliable IT services. We 
          specialize in network setup, cybersecurity, cloud computing, and much more.
        </p>
        <div className="flex justify-center">
          <a 
            href="#services" 
            className="bg-blue-900 text-white uppercase font-medium px-8 py-3 hover:bg-blue-800 transition-colors"
          >
            FIND OUT MORE
          </a>
        </div>
      </div>
    </section>
  )
}

export default AffordableServices