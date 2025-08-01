import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap ${
              position === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' : ''
            }`}
            initial={{ opacity: 0, y: position === 'top' ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? 10 : -10 }}
            transition={{ duration: 0.2 }}
          >
            {content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Toast = ({ message, isVisible, onClose, type = 'success' }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg text-white font-semibold ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center space-x-2">
          <span>{message}</span>
          <button onClick={onClose} className="ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export { Tooltip, Toast };