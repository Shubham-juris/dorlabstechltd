import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
import Marquee from "../components/Home/Marquee";

const services = [
  {
    title: "Networking Services",
    slug: "/networking-services",
    desc: "Professional business networking services including LAN, WAN, secure Wi-Fi, firewall setup, and network optimization.",
  },
  {
    title: "Managed IT Services",
    slug: "/managed-it-services",
    desc: "Proactive monitoring, maintenance, help desk support, and complete IT infrastructure management.",
  },
  {
    title: "Cybersecurity Services",
    slug: "/cybersecurity-services",
    desc: "Advanced cybersecurity solutions to protect systems, users, and business data from modern threats.",
  },
  {
    title: "Cloud & Backup Solutions",
    slug: "/cloud-backup-solutions",
    desc: "Secure cloud migration, automated backups, disaster recovery, and business continuity planning.",
  },
  {
    title: "IT Consulting Services",
    slug: "/it-consulting-services",
    desc: "Strategic IT planning, technology assessments, and long-term guidance for business growth.",
  },
];

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          IT & Networking Services in Alberta
        </h1>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg sm:text-xl">
          Dorlabs Tech provides professional IT services and networking solutions
          designed to keep Alberta businesses secure, connected, and productive.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Complete IT Solutions for Growing Businesses
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-lg sm:text-xl">
          From reliable business networking to managed IT support and cybersecurity,
          we deliver end-to-end technology services tailored to your organization.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={s.slug}>
                <div className="group p-10 rounded-2xl h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-blue-100 mb-8">{s.desc}</p>
                  <span className="font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Marquee />

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12">
            Why Choose Dorlabs Tech?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Local Alberta-based IT service provider",
              "Fast response times and dependable support",
              "Customized IT and networking solutions",
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-20 text-center text-white px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Need a Reliable IT Partner?
        </h2>
        <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
          Get a customized IT solution designed specifically for your business.
        </p>
        <Link
          to="/get-quote"
          className="inline-block bg-white text-blue-900 px-12 py-4 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Get a Quote
        </Link>
      </section>

      <Testimonials />
    </>
  );
}
