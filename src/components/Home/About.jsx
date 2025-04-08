import React from 'react'
import aboutimg from '../../assets/about.jpg'
function About() {
  return (
    <section id="about" className="bg-blue-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 mb-4">About Dorlabs Tech</h2></div>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src= {aboutimg}
              alt="Smart phone with colorful display"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center">
            <h2 className="text-2xl font-bold mb-6">About Company</h2>
            <p className="text-lg leading-relaxed">
              At Dorlabs tech, we specialize in creating innovative, High-
              performance iOS apps that stand out on the App Store and deliver an
              exceptional User experience. Whether you're building a new app or
              enhancing an existing one, our team of skilled iOS developers is here
              to help!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000"
              alt="Inside of smartphone showing gears and mechanics"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Your Tech Solution Partner</h2>
            <p className="text-lg leading-relaxed">
              In today's fast-paced digital world, the right tech partner makes all the
              difference. At DORLABS TECH, we offer innovative solutions designed
              to help your business grow and succeed. From advanced software
              development to seamless IT infrastructure, we provide the tools,
              expertise, and support needed to thrive in a competitive market.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000"
              alt="Digital circuit board with blue and pink neon lights"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Software Testing Service</h2>
            <p className="text-lg leading-relaxed">
              The process within the software development lifecycle ensures that
              the software is thoroughly tested for bugs, aligns with technical
              specifications, and meets user requirements, ultimately delivering a
              reliable, high-quality product that performs effectively and satisfies
              both functional and user needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000"              
              alt="Online Identity Protection graphic with security icons"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-12 text-center">
            <h2 className="text-2xl font-bold mb-6">PROTECTION FROM IDENTITY THEFT AND FRAUD</h2>
            <p className="text-lg leading-relaxed">
              When personal data falls into the wrong hands, it can be exploited for
              identity theft, financial fraud, and various other malicious activities.
              Implementing strong data privacy measures is essential in
              safeguarding sensitive information, preventing unauthorized access,
              and significantly reducing the risk of these harmful crimes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About