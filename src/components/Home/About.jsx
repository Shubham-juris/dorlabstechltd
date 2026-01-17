import React from "react";
import aboutimg from "../../assets/about.jpg";

function About() {
  return (
    <section id="about" className="bg-blue-900 py-16 text-white">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted IT & Networking Company in Alberta
          </h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Dorlabs Tech delivers secure, reliable, and scalable IT and
            networking solutions designed for growing businesses.
          </p>
        </div>

        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={aboutimg}
              alt="Business IT and networking services in Alberta"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center">
            <h3 className="text-2xl font-bold mb-6">
              IT Services You Can Depend On
            </h3>
            <p className="text-lg leading-relaxed">
              Dorlabs Tech provides professional IT services and networking
              solutions in Alberta, helping businesses stay connected, secure,
              and productive with reliable technology infrastructure.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000"
              alt="Business networking and secure Wi-Fi solutions"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-12 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Professional Networking Services
            </h3>
            <p className="text-lg leading-relaxed">
              We design and manage business networks including LAN and WAN
              setup, secure Wi-Fi installations, firewall configuration, and
              network optimization for reliable performance.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000"
              alt="Managed IT services and technical support for businesses"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Managed IT & Technical Support
            </h3>
            <p className="text-lg leading-relaxed">
              Our managed IT services include proactive monitoring, remote and
              on-site support, hardware and software management, and fast issue
              resolution to minimize downtime.
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000"
              alt="Cybersecurity and network protection services"
              className="w-full h-[20rem] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-12 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Secure & Scalable IT Infrastructure
            </h3>
            <p className="text-lg leading-relaxed">
              We protect your business with cybersecurity solutions, firewall
              protection, data backup, and scalable IT systems that grow with
              your organization.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
