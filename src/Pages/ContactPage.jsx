import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp"; // ✅ Replace with your actual logo

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 font-sans">
      
      {/* Header / Hero */}
      <section className="py-20 px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <img src={logo} alt="Company Logo" className="mx-auto h-24 mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 mb-6 tracking-wide">
            Contact DORLABS TECH
          </h1>
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            Let’s build something great together. Reach out with your inquiries, ideas, or just say hello!
          </p>
        </motion.div>
      </section>

      {/* Contact Form + Address */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-blue-50 p-8 rounded-xl shadow-md border border-blue-200"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully!");
            }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide">
              Send us a message
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-md hover:scale-105 transition-transform duration-300 shadow-md"
              >
                Submit
              </button>
            </div>
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Visit or Contact Us
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-loose">
              <strong className="text-blue-800">Address:</strong> 5-2002 20 Ave, Bowden, Alberta, Canada<br />
              <strong className="text-blue-800">Phone:</strong>{" "}
              <a href="tel:+14035502982" className="text-blue-600 underline hover:text-blue-800">
                +1 403-550-2982
              </a>
              <br />
              <strong className="text-blue-800">Email:</strong>{" "}
              <a
                href="mailto:dorlabstech@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                dorlabstech@gmail.com
              </a>
              <br />
              <strong className="text-blue-800">Working Hours:</strong> Mon - Fri: 9AM – 6PM
            </p>

            <div className="rounded-lg overflow-hidden shadow-xl border border-blue-300">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=5-2002+20+Ave,+Bowden,+AB,+Canada&output=embed"
                width="100%"
                height="300"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
