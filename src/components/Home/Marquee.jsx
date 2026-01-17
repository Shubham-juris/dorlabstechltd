import React from "react";
import {
  FaNetworkWired,
  FaWifi,
  FaServer,
  FaShieldAlt,
  FaTools,
  FaLock,
  FaLaptopCode,
  FaCloud,
  FaUserTie,
  FaChartBar,
} from "react-icons/fa";

function Marquee() {
  const marqueeServices = [
    // 🔵 Networking First (Priority)
    { name: "Network Design & Infrastructure", icon: <FaNetworkWired /> },
    { name: "LAN / WAN Setup & Management", icon: <FaServer /> },
    { name: "Wi-Fi & Wireless Solutions", icon: <FaWifi /> },
    { name: "Network Security & Monitoring", icon: <FaShieldAlt /> },

    // 🔵 IT & Security
    { name: "Cybersecurity Services", icon: <FaLock /> },
    { name: "Managed IT Services", icon: <FaTools /> },
    { name: "Cloud & Network Integration", icon: <FaCloud /> },

    // 🔵 Software & Consulting (Last)
    { name: "IT Consulting", icon: <FaUserTie /> },
    { name: "Custom Software Development", icon: <FaLaptopCode /> },
    { name: "Data Analytics & Reporting", icon: <FaChartBar /> },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-5 overflow-hidden border-y border-white/10">
      <div className="relative flex overflow-x-hidden">

        {/* First Loop */}
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {marqueeServices.map((item, index) => (
            <div
              key={index}
              className="mx-4 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm md:text-base text-white backdrop-blur-md hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              <span className="text-lg md:text-xl text-blue-300 group-hover:text-blue-900">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Second Loop for seamless scrolling */}
        <div className="absolute top-0 animate-marquee2 flex items-center whitespace-nowrap">
          {marqueeServices.map((item, index) => (
            <div
              key={`loop-${index}`}
              className="mx-4 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm md:text-base text-white backdrop-blur-md hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              <span className="text-lg md:text-xl text-blue-300">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 22s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Marquee;

