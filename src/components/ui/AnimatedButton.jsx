import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <motion.button
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
      } ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

const PulseButton = ({ children, onClick }) => (
  <motion.button
    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{ boxShadow: ['0 0 0 0 rgba(244, 63, 94, 0.4)', '0 0 0 10px rgba(244, 63, 94, 0)', '0 0 0 0 rgba(244, 63, 94, 0)'] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const GlowButton = ({ children, onClick }) => (
  <motion.button
    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
      animate={{ x: ['-100%', '100%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
    {children}
  </motion.button>
);

export { AnimatedButton, PulseButton, GlowButton };