import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceContent = {
  "managed-it": {
    title: "Managed IT Services",
    intro:
      "Our Managed IT Services are designed to keep your business technology running smoothly, securely, and efficiently. We take full responsibility for monitoring, maintaining, and supporting your IT systems so you can focus on growing your business.",

    sections: [
      {
        heading: "What We Offer",
        points: [
          "24/7 system monitoring and proactive maintenance",
          "Remote and on-site IT support",
          "Server and workstation management",
          "Patch management and system updates",
          "Hardware and software support",
        ],
      },
      {
        heading: "Benefits for Your Business",
        points: [
          "Reduced downtime and operational disruption",
          "Predictable monthly IT costs",
          "Improved system performance",
          "Enhanced data security and compliance",
          "Expert IT team without hiring in-house staff",
        ],
      },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity Services",
    intro:
      "Cyber threats are increasing every day. Our cybersecurity services protect your business data, systems, and users from modern cyber attacks, ensuring strong security across your IT environment.",

    sections: [
      {
        heading: "Security Solutions We Provide",
        points: [
          "Firewall setup and configuration",
          "Endpoint protection and antivirus solutions",
          "Threat detection and real-time monitoring",
          "Email security and phishing protection",
          "Security audits and vulnerability assessment",
        ],
      },
      {
        heading: "Why Cybersecurity Matters",
        points: [
          "Prevents data breaches and ransomware attacks",
          "Protects sensitive business information",
          "Maintains customer trust",
          "Ensures regulatory compliance",
          "Reduces financial and legal risks",
        ],
      },
    ],
  },

  cloud: {
    title: "Cloud Solutions",
    intro:
      "Our cloud solutions help businesses achieve flexibility, scalability, and secure access to data from anywhere. We design and manage cloud environments tailored to your business requirements.",

    sections: [
      {
        heading: "Our Cloud Services",
        points: [
          "Cloud migration and deployment",
          "Microsoft 365 and cloud productivity tools",
          "Cloud backup and disaster recovery",
          "Hybrid cloud solutions",
          "Cloud performance optimization",
        ],
      },
      {
        heading: "Advantages of Cloud Technology",
        points: [
          "Access data anytime, anywhere",
          "Scalable infrastructure as your business grows",
          "Reduced hardware and maintenance costs",
          "Improved collaboration and productivity",
          "Secure data storage and backups",
        ],
      },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceContent[slug];

  if (!service) {
    return <div className="py-32 text-center text-xl">Service not found</div>;
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">{service.title}</h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Professional IT solutions designed to support secure and scalable
          business operations.
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-gray-700 text-lg mb-12 leading-relaxed">
          {service.intro}
        </p>

        {service.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {section.heading}
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to={`/get-quote?service=${service.title}`}
            className="inline-block bg-blue-700 text-white px-10 py-4 rounded-lg text-lg hover:bg-blue-800 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
