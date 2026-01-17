import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="bg-blue-900 py-20 px-4 md:px-10 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Improve Your IT & Network Infrastructure?
          </h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Contact Dorlabs Tech today for reliable IT and networking services in
            Alberta. Our experts are ready to help your business stay secure and
            connected.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Info */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">
              Get in Touch with Our Team
            </h3>

            <p className="mb-6 text-blue-200">
              Whether you need networking services, managed IT support, or
              cybersecurity solutions, our Alberta-based team is here to help.
            </p>

            <div className="space-y-2">
              <p>📍 Bowden, Alberta, Canada</p>
              <p>📧 info@dorlabtech.com</p>
              <p>📞 +1 403-550-2982</p>
            </div>
          </div>

          {/* CTA */}
          <div className="w-full md:w-1/2 text-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10">
              <h4 className="text-xl font-bold mb-4">
                Need IT Support or Networking Services?
              </h4>
              <p className="text-blue-200 mb-8">
                Request a quote or speak with our IT specialists today.
              </p>

              <Link
                to="/contact"
                className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-blue-100 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
