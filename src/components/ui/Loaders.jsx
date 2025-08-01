import React from 'react';
import { motion } from 'framer-motion';

const SpinLoader = () => (
  <motion.div
    className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
  />
);

const DotsLoader = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

export { SpinLoader, DotsLoader, ProgressBar };