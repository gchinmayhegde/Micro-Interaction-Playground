import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer, ToggleLeft, Loader, Square, MessageCircle, ChevronRight } from 'lucide-react';

const Sidebar = ({ selectedCategory, setSelectedCategory, setIsSidebarOpen, isSidebarOpen }) => {
  const categories = [
    { id: 'buttons', name: 'Button Animations', icon: MousePointer },
    { id: 'toggles', name: 'Toggle Switches', icon: ToggleLeft },
    { id: 'loaders', name: 'Loaders', icon: Loader },
    { id: 'modals', name: 'Modals', icon: Square },
    { id: 'tooltips', name: 'Tooltips & Toasts', icon: MessageCircle },
  ];

  return (
    <AnimatePresence>
      {(isSidebarOpen || window.innerWidth >= 768) && (
        <motion.aside
          className="fixed md:relative inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg md:shadow-none border-r border-gray-200 dark:border-gray-700"
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          exit={{ x: -256 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Categories</h2>
            <nav className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;