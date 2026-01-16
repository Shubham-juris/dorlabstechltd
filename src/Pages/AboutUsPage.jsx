import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white py-28 px-6 md:px-12">
        {/* Glow effects */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-white/10 blur-3xl rounded-full"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative max-w-5xl mx-auto text-center"
        >
          <span className="inline-block mb-5 px-5 py-1 text-xs tracking-widest uppercase rounded-full border border-white/20 bg-white/10">
            About Dorlabs Tech
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Built on Trust. <br />
            <span className="text-blue-300">Driven by Technology.</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Helping Alberta businesses stay connected, protected, and productive
            through reliable IT and networking solutions.
          </p>
        </motion.div>
      </section>

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
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Founded to help local businesses take advantage of modern
              technology, <strong>Dorlabs Tech</strong> specializes in practical,
              dependable IT solutions — from secure network architecture to
              ongoing technical support.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is simple: deliver results that keep your operations
              running smoothly, securely, and confidently.
            </p>
          </div>

          {/* Glass card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-10 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To empower businesses with reliable technology and network systems
              that reduce downtime, strengthen security, and support growth.
            </p>
            <p className="text-gray-600 italic">
              Technology should be an asset — not a burden.
            </p>
          </div>
        </div>
      </motion.section>

      {/* WHAT SETS US APART */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 md:px-12 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We combine local expertise with enterprise-level IT standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Personalized Service",
              text: "Every project is tailored to your business goals and needs.",
            },
            {
              title: "Transparent Communication",
              text: "No jargon — just clear, honest advice you can trust.",
            },
            {
              title: "Local Expertise",
              text: "Based in Bowden, Alberta — we understand local businesses.",
            },
            {
              title: "Comprehensive Support",
              text: "From networks to cybersecurity and managed IT.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 md:px-12 bg-blue-900 text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", text: "Honest recommendations and ethical service." },
              { title: "Responsiveness", text: "Fast, reliable support when you need it most." },
              { title: "Expertise", text: "Skilled technicians who stay ahead of tech trends." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-blue-200 mb-3">
                  {value.title}
                </h3>
                <p className="text-blue-100">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* OUR APPROACH */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 md:px-12 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Dorlabs Tech, we don’t just fix problems — we prevent them.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔ Planning network infrastructures for growth</li>
              <li>✔ Securing systems before threats arise</li>
              <li>✔ Providing ongoing support so you never feel stuck</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10 border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you’re a small office needing a reliable network setup or
              a growing business looking for managed IT support, we are here
              to help — every step of the way.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
