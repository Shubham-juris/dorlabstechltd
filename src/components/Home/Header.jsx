import React from 'react';
import logo from '../../assets/logo.webp';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={logo}
          alt="DorLabs Tech Logo"
          className="w-16 h-16 md:w-20 md:h-20"
          initial={{ rotate: -15, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.h1
          className="text-blue-900 text-3xl md:text-5xl font-extrabold tracking-widest text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          DORLABS TECH
        </motion.h1>
      </motion.div>
    </header>
  );
}

export default Header;
