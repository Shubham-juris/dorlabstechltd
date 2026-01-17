import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Testimonials", to: "/testimonials" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="DorLabs Tech Logo"
            className="w-12 h-12 md:w-14 md:h-14"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <h1 className="text-blue-900 text-xl md:text-2xl font-extrabold tracking-widest">
            DORLABS TECH
          </h1>
        </Link>

        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-[15px] font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-blue-700"
                    : "text-blue-900 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-700"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* CONTACT BUTTON */}
          <Link
            to="/contact"
            className="
              ml-4 px-6 py-3 rounded-xl
              bg-blue-700 text-white
              font-bold tracking-wide
              shadow-md
              hover:bg-blue-800 hover:shadow-lg
              transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-blue-900"></span>
            <span className="block w-6 h-0.5 bg-blue-900"></span>
            <span className="block w-6 h-0.5 bg-blue-900"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pt-4 pb-6 space-y-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-semibold ${
                    isActive
                      ? "text-blue-700"
                      : "text-blue-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE CONTACT BUTTON */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                block text-center mt-3
                bg-blue-700 text-white
                py-3 rounded-lg
                font-bold tracking-wide
              "
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
