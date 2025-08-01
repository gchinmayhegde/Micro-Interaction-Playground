import React from 'react';
import { motion } from 'framer-motion';
import { Star, StarOff, ExternalLink } from 'lucide-react';

const InteractionCard = ({ title, description, component, code, id, onClick, toggleFavorite, favorites }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer group hover:shadow-xl transition-shadow"
    whileHover={{ y: -5 }}
    onClick={() => onClick(title, code, component)}
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          {favorites.has(id) ? (
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          ) : (
            <StarOff className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
    <div className="flex justify-center items-center py-8 bg-gray-50 dark:bg-gray-700 rounded-lg">
      {component}
    </div>
  </motion.div>
);

export default InteractionCard;