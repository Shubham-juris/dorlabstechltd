import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Upper section with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* 1. Company Logo & Description */}
          <div>
            {/* Replace with your actual logo img or component */}
            <div className="text-3xl font-bold mb-4 cursor-default select-none">
              DORLABS TECH
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide innovative IT solutions that empower your business to grow and succeed in the digital world.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <strong>Address:</strong> 5-2002 20 Ave , Bowden, AB, Canada, Alberta
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 403-550-2982</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:info@dorlabstech.com" className="hover:text-blue-400 transition-colors">dorlabstech@gmail.com</a>
              </li>
              <li>
                <strong>Working Hours:</strong> Mon - Fri, 9am - 6pm
              </li>
            </ul>
          </div>

          {/* 4. Newsletter & Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                required
                className="w-full sm:flex-1 px-4 py-2 rounded-md text-blue-900 placeholder-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-400 text-blue-900 font-semibold px-5 py-2 rounded-md hover:bg-blue-500 transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 justify-start sm:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100094213581942"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2a3 3 0 013-3h2v3h-2a1 1 0 00-1 1v2h3l-.5 3h-2.5v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 00-7.86 4v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="border-t border-blue-800 pt-6 text-center text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2023 DORLABS TECH. All rights reserved.</p>
          <div className="space-x-6">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
