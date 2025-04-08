import React from 'react';

function Marquee() {
  return (
    <div className="bg-blue-900 py-4 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2">
          <span className="text-white text-5xl mx-4">LinkedIn</span>
          <span className="text-white text-5xl mx-4">Facebook</span>
          <span className="text-white text-5xl mx-4">LinkedIn</span>
          <span className="text-white text-5xl mx-4">Facebook</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
          <span className="text-white text-5xl mx-4">LinkedIn</span>
          <span className="text-white text-5xl mx-4">Facebook</span>
          <span className="text-white text-5xl mx-4">LinkedIn</span>
          <span className="text-white text-5xl mx-4">Facebook</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Marquee;