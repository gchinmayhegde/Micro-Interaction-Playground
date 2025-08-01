import React from 'react';
import { motion } from 'framer-motion';

const AnimatedToggle = ({ isOn, onToggle }) => (
  <motion.div
    className={`w-16 h-8 rounded-full p-1 cursor-pointer ${
      isOn ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gray-300 dark:bg-gray-600'
    }`}
    onClick={onToggle}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="w-6 h-6 bg-white rounded-full shadow-md"
      animate={{ x: isOn ? 32 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  </motion.div>
);

const FlipToggle = ({ isOn, onToggle }) => (
  <motion.div
    className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer relative overflow-hidden"
    onClick={onToggle}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
      animate={{ scale: isOn ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ originX: 0.5, originY: 0.5 }}
    />
    <motion.div
      className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
      animate={{ x: isOn ? 36 : 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  </motion.div>
);

export { AnimatedToggle, FlipToggle };