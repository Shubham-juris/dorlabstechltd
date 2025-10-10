import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  ServerStackIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    icon: <CodeBracketIcon className="h-10 w-10 text-blue-600" />,
    title: "Custom Software Development",
    desc: "Tailored software solutions built for scalability, speed, and security.",
  },
  {
    icon: <CloudIcon className="h-10 w-10 text-blue-600" />,
    title: "Cloud Integration",
    desc: "Seamless integration with cloud platforms like AWS, Azure, and GCP.",
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
    title: "Cybersecurity",
    desc: "Secure your digital assets with advanced threat protection.",
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 text-blue-600" />,
    title: "Data Analytics",
    desc: "Unlock insights through analytics and reporting dashboards.",
  },
  {
    icon: <AdjustmentsHorizontalIcon className="h-10 w-10 text-blue-600" />,
    title: "IT Consulting",
    desc: "Get expert strategy and advisory for digital transformation.",
  },
  {
    icon: <ServerStackIcon className="h-10 w-10 text-blue-600" />,
    title: "Managed IT Services",
    desc: "Complete support and infrastructure management.",
  },
  {
    icon: <LockClosedIcon className="h-10 w-10 text-blue-600" />,
    title: "Internet Security",
    desc: "Firewall, endpoint, and network security.",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <img src={logo} alt="Company Logo" className="mx-auto h-24 mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 mb-6 tracking-wide">
            About DORLABS TECH
          </h1>
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            Based in Alberta, Canada — DORLABS TECH provides innovative IT solutions that
            empower businesses to grow, scale, and thrive in the digital world.
          </p>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="relative h-32 overflow-hidden bg-blue-800">
        {/* Left to Down */}
        <motion.div
          initial={{ x: "-100%", y: 0 }}
          animate={{ x: "0%", y: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,
            ease: "linear",
          }}
          className="absolute whitespace-nowrap text-white text-3xl font-bold"
          style={{ top: 0, left: 0 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`down-${i}`} className="mr-12">DORLABS TECH</span>
          ))}
        </motion.div>

        {/* Right to Up */}
        <motion.div
          initial={{ x: "100%", y: 0 }}
          animate={{ x: "0%", y: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,
            ease: "linear",
          }}
          className="absolute whitespace-nowrap text-white text-3xl font-bold"
          style={{ bottom: 0, right: 0 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`up-${i}`} className="ml-12">DORLABS TECH</span>
          ))}
        </motion.div>
      </section>

      {/* Address + Contact Form */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Address & Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Our Location
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-loose">
              <strong className="text-blue-800">Address:</strong> 5-2002 20 Ave, Bowden, AB, Canada<br />
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
            </p>

            <div className="rounded-lg overflow-hidden shadow-xl border border-blue-300">
              <iframe
                title="DORLABS Location"
                src="https://www.google.com/maps?q=5-2002+20+Ave,+Bowden,+AB,+Canada&output=embed"
                width="100%"
                height="300"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-blue-50 p-8 rounded-xl shadow-md border border-blue-200"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
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
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight uppercase">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-900 text-white py-20 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-extrabold mb-10 tracking-wide uppercase">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-left">
            {[
              {
                q: "What services does DORLABS TECH offer?",
                a: "We offer custom software development, cloud integration, IT consulting, cybersecurity, data analytics, and more.",
              },
              {
                q: "Where is your company based?",
                a: "We are located in Bowden, Alberta, Canada.",
              },
              {
                q: "How can I contact your team?",
                a: "You can reach us via phone, email, or through the contact form above.",
              },
            ].map(({ q, a }, i) => (
              <motion.details
                key={i}
                className="bg-white text-blue-900 rounded-lg p-4 cursor-pointer border border-blue-200"
                whileHover={{ scale: 1.01 }}
              >
                <summary className="font-semibold text-lg">{q}</summary>
                <p className="mt-2 text-sm text-gray-700">{a}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
