import React from "react";

const services = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l7 7-7 7-7-7 7-7z" />
        <path d="M5 12h14" />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed specifically to meet your unique business needs and goals.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Cloud Integration",
    description:
      "Seamlessly integrate cloud services to enhance scalability, security, and operational efficiency.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3h-8v4h8V3z" />
      </svg>
    ),
    title: "IT Consulting",
    description:
      "Expert guidance to help you strategize, optimize, and transform your IT infrastructure and processes.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: "Cybersecurity",
    description:
      "Protect your digital assets with robust cybersecurity strategies and advanced threat detection.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "Managed IT Services",
    description:
      "Comprehensive management and support of your IT infrastructure to minimize downtime and maximize performance.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
    title: "Data Analytics",
    description:
      "Leverage data-driven insights to make smarter decisions and improve your business outcomes.",
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Explore the wide range of IT services we offer to help transform your business and boost your digital presence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
