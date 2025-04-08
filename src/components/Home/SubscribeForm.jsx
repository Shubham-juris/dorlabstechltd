import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-black text-white py-20 w-full">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="font-serif text-3xl md:text-5xl text-center mb-4 md:mb-0">Subscribe</div>
        
        <div className="flex-grow w-full md:w-1/2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none px-4 py-2 text-white placeholder-gray-500"
            required
          />
        </div>
        
        <button 
            type="submit" 
            className="border border-blue-500 text-blue-500 px-8 py-2 hover:bg-blue-900 transition-colors duration-300 uppercase tracking-wider text-sm font-medium mt-4 md:mt-0 w-64"
            >
           — Sign Up —
        </button>

      </form>
      
      <div className="max-w-5xl mx-auto  pt-8 mt-4 text-center text-gray-400 text-md">
        Subscribe to receive exclusive promotions and special discount offers.
      </div>
    </div>
  );
}
