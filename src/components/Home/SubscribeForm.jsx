import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12 w-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4"
      >
        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-center sm:text-left w-full sm:w-auto">
          Subscribe
        </div>

        {/* Input */}
        <div className="flex-grow w-full sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full sm:min-w-[250px] bg-transparent border-b border-gray-500 focus:border-white outline-none px-4 py-2 text-white placeholder-gray-500"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full cursor-pointer sm:w-auto border  border-blue-500 text-blue-500 px-8 py-2 hover:bg-blue-900 transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
        >
          — Sign Up —
        </button>
      </form>

      {/* Description */}
      <div className="max-w-4xl mx-auto pt-8 mt-4 text-center text-gray-400 text-base px-2">
        Subscribe to receive exclusive promotions and special discount offers.
      </div>
    </div>
  );
}
