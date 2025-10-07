import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-blue-900 py-16 px-4 md:px-10 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center md:text-left">
          CONTACT US
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Reach out to us!
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white pb-2 text-white placeholder-gray-300 focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white pb-2 text-white placeholder-gray-300 focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white p-3 text-white placeholder-gray-300 focus:outline-none h-32"
                  required
                />
              </div>

              <div className="mb-6 flex items-start">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mr-2 mt-1"
                />
                <label htmlFor="subscribe" className="text-sm">
                  Sign up for our email list for updates, promotions, and more.
                </label>
              </div>

              <button
                type="submit"
                className="w-full border border-white py-3 px-4 text-center uppercase tracking-wider hover:bg-white hover:text-black hover:bg-opacity-10 transition-all"
              >
                — SEND —
              </button>

              <p className="text-xs mt-4">
                This site is protected by reCAPTCHA and the Google
                <a href="#" className="text-white underline mx-1">
                  Privacy Policy
                </a>
                and
                <a href="#" className="text-white underline mx-1">
                  Terms of Service
                </a>
                apply.
              </p>
            </form>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Call or Email us
            </h3>

            <p className="mb-6 text-sm md:text-base">
              We value our customers and invite you to visit us during our
              regular business hours. Alternatively, you can reach out via email
              anytime, and we guarantee a prompt response.
            </p>

            <div className="mb-8 text-sm md:text-base">
              <h4 className="text-xl font-bold mb-4">Dorlabs Tech</h4>
              <p className="mb-2">
                5-2002 20 Ave , Bowden, AB, Canada, Alberta
              </p>
              <p className="mb-2">dorlabstech@gmail.com</p>
              <p>+1 403-550-2982</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Hours</h4>
              <div className="flex items-center text-sm md:text-base">
                <span>Open today</span>
                <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
