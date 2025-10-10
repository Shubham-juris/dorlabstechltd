// components/Home/Marquee.jsx
import React from "react";
import { FaCloud, FaShieldAlt, FaChartBar, FaTools, FaLock, FaLaptopCode, FaUserTie } from "react-icons/fa";

function Marquee() {
  const marqueeServices = [
    { name: "Custom Software Development", icon: <FaLaptopCode /> },
    { name: "Cloud Integration", icon: <FaCloud /> },
    { name: "IT Consulting", icon: <FaUserTie /> },
    { name: "Cybersecurity", icon: <FaShieldAlt /> },
    { name: "Managed IT Services", icon: <FaTools /> },
    { name: "Data Analytics", icon: <FaChartBar /> },
    { name: "Internet Security", icon: <FaLock /> },
  ];

  return (
    <div className="bg-blue-900 py-3 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        {/* First loop */}
        <div className="animate-marquee whitespace-nowrap flex items-center py-2">
          {marqueeServices.map((item, index) => (
            <div
              key={index}
              className="text-white border border-white rounded-full px-4 py-2 flex items-center mx-4 text-sm md:text-base"
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>

        {/* Second loop (for seamless scroll) */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-2">
          {marqueeServices.map((item, index) => (
            <div
              key={`${index}-2`}
              className="text-white border border-white rounded-full px-4 py-2 flex items-center mx-4 text-sm md:text-base"
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
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
          animation: marquee 25s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Marquee;
