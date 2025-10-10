import React from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Home/Marquee"; // Make sure your Marquee component is correctly imported

// Services Data with icons
const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed specifically to meet your unique business needs and goals.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l7 7-7 7-7-7 7-7z" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    title: "Cloud Integration",
    description:
      "Seamlessly integrate cloud services to enhance scalability, security, and operational efficiency.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance to help you strategize, optimize, and transform your IT infrastructure and processes.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3h-8v4h8V3z" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with robust cybersecurity strategies and advanced threat detection.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: "Managed IT Services",
    description:
      "Comprehensive management and support of your IT infrastructure to minimize downtime and maximize performance.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Data Analytics",
    description:
      "Leverage data-driven insights to make smarter decisions and improve your business outcomes.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    title: "Internet Security",
    description:
      "Comprehensive protection for your online presence, ensuring safe and secure access to digital resources and data.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7v6c0 5.5 3.8 10.74 10 13 6.2-2.26 10-7.5 10-13V7l-10-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

// Animation variant for fade up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicePage() {
  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s linear infinite;
        }
      `}</style>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Banner/Header */}
        <section className="relative bg-blue-900 text-white py-20 px-6 md:px-12 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/1600x900/?technology,network')",
            }}
          ></div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl font-extrabold mb-4 max-w-4xl mx-auto">
              Empowering Your Digital Journey
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Explore cutting-edge IT services designed to drive innovation and
              success in your business.
            </p>
          </motion.div>
        </section>

        {/* Marquee directly below Header */}
        <Marquee />

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="py-20 px-6 md:px-12"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              Discover the wide range of services we provide to help your
              business grow and thrive in the digital age.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ icon, title, description }, index) => (
              <div key={title} className="relative group rounded-lg">
                {/* Animated gradient border */}
                <div
                  className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x"
                  style={{ zIndex: 0 }}
                ></div>

                {/* Card content */}
                <motion.div
                  className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  style={{ zIndex: 1 }}
                >
                  <div>{icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </>
  );
}
