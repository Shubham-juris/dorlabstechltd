import React from "react";
import { Link } from "react-router-dom";


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
              We provide innovative IT solutions that empower your business to
              grow and succeed in the digital world.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-blue-400 transition-colors"
                >
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
                <strong>Address:</strong> 5-2002 20 Ave , Bowden, AB, Canada,
                Alberta
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+1 403-550-2982"
                  className="hover:text-blue-400 transition-colors"
                >
                  +1 403-550-2982
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@dorlabtech.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@dorlabtech.com
                </a>
              </li>
              <li>
                <strong>Working Hours:</strong> Mon - Fri, 9am - 6pm
              </li>
            </ul>
          </div>

          {/* 4. Newsletter & Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                required
                className="w-full sm:flex-1 px-4 py-2 rounded-md text-white placeholder-white focus:outline-none border-2 focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-md hover:bg-blue-500 transition-colors"
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
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2a3 3 0 013-3h2v3h-2a1 1 0 00-1 1v2h3l-.5 3h-2.5v7A10 10 0 0022 12z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/dorlabstech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="border-t border-blue-800 pt-6 text-center text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2023 DORLABS TECH. All rights reserved.</p>
          <div className="space-x-6">
            <a
              href="#privacy"
              className="hover:text-blue-400 transition-colors"
            >
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
