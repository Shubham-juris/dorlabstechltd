import React from "react";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
import Marquee from "../components/Marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AboutUsPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-800 overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white py-28 px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative max-w-5xl mx-auto text-center"
          >
            <span className="inline-block mb-5 px-5 py-1 text-xs tracking-widest uppercase rounded-full border border-white/10 bg-white/10">
              About Dorlabs Tech
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Trusted IT & Networking Company in Alberta
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Dorlabs Tech is a trusted IT and networking services company in Alberta,
              helping small and medium-sized businesses build secure, reliable, and
              scalable technology infrastructure. From business network setup to
              managed IT support, we ensure your systems work seamlessly so you can
              focus on growth.
            </p>
          </motion.div>
        </section>

        {/* MARQUEE */}
        <Marquee />

        {/* OUR STORY */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-24 px-6 md:px-12 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Dorlabs Tech was founded with a clear purpose — to help Alberta
                businesses navigate technology with confidence. Many organizations
                struggle with unreliable networks, security risks, and IT systems
                that slow them down. We set out to change that.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With hands-on experience in business networking, IT support, and
                infrastructure management, we deliver practical solutions that
                improve performance, security, and long-term reliability.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to deliver reliable IT services and business
                networking solutions that reduce downtime, improve security,
                and simplify technology for our clients.
              </p>
              <p className="text-gray-600 italic">
                Technology should work for your business — not against it.
              </p>
            </div>
          </div>
        </motion.section>

        {/* WHAT WE DO */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-24 px-6 md:px-12 bg-white"
        >
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We specialize in delivering complete IT and networking services for
              businesses across Alberta. Every solution is designed to support
              your current needs and future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Business network design and installation",
              "Secure LAN, WAN, and wireless network solutions",
              "Managed IT services with proactive monitoring",
              "Cybersecurity and network protection",
              "Cloud infrastructure, backup, and disaster recovery",
              "Ongoing IT consulting and technology planning",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-900 rounded-xl p-6 border border-black hover:shadow-lg transition"
              >
                <p className="text-white text-lg">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* WHAT SETS US APART */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-24 px-6 md:px-12 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Why Choose Dorlabs Tech
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We combine local Alberta expertise with enterprise-level IT
              standards to deliver dependable, long-term solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Local Expertise", text: "Alberta-based IT professionals who understand local businesses." },
              { title: "Reliable Support", text: "Fast response times and dependable technical support." },
              { title: "Customized Solutions", text: "IT and networking solutions tailored to your business." },
              { title: "Transparent Pricing", text: "Honest advice with no hidden costs." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-black shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* OUR APPROACH */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-24 px-6 md:px-12 bg-blue-900 text-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              Our Approach
            </h2>
            <ul className="space-y-4 text-lg text-blue-100">
              <li>✔ Understand your business goals and challenges</li>
              <li>✔ Design secure and scalable IT and networking systems</li>
              <li>✔ Implement best-practice technology solutions</li>
              <li>✔ Provide ongoing monitoring and responsive support</li>
            </ul>
          </div>
        </motion.section>
      </main>

      {/* TESTIMONIALS */}
      <Testimonials />
    </>
  );
}
