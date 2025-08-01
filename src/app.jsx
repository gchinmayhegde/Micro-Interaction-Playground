import React, { useState, useEffect, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sun, Moon, Github, Copy } from 'lucide-react';
import useTheme from './hooks/useTheme';
import { AnimatedButton, PulseButton, GlowButton } from './components/ui/AnimatedButton';
import { AnimatedToggle, FlipToggle } from './components/ui/AnimatedToggle';
import { SpinLoader, DotsLoader, ProgressBar } from './components/ui/Loaders';
import Modal from './components/ui/Modal';
import { Tooltip, Toast } from './components/ui/Tooltip';
import CodeEditor from './components/CodeEditor';
import InteractionCard from './components/InteractionCard';
import Sidebar from './components/Sidebar';

const ThemeContext = createContext();

export default function MicroInteractionPlayground() {
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('buttons');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalData, setModalData] = useState({ isOpen: false, title: '', code: '', component: null });
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });
  const [favorites, setFavorites] = useState(new Set());
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [progress, setProgress] = useState(75);
  const [showModal, setShowModal] = useState(false);
  const categories = [
    { id: 'buttons', name: 'Button Animations' },
    { id: 'toggles', name: 'Toggle Switches' },
    { id: 'loaders', name: 'Loaders' },
    { id: 'modals', name: 'Modals' },
    { id: 'tooltips', name: 'Tooltips & Toasts' },
  ];
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, isVisible: false })), 3000);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showToast('Code copied to clipboard!');
  };
  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };
  const openModal = (title, code, component) => {
    setModalData({ isOpen: true, title, code, component });
  };
  const closeModal = () => {
    setModalData({ isOpen: false, title: '', code: '', component: null });
  };
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'buttons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InteractionCard
              id="animated-button"
              title="Animated Button"
              description="Smooth hover and tap animations"
              component={<AnimatedButton>Click Me</AnimatedButton>}
              code={`<motion.button
  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
            <InteractionCard
              id="pulse-button"
              title="Pulse Button"
              description="Continuous pulse animation effect"
              component={<PulseButton>Pulse Effect</PulseButton>}
              code={`<motion.button
  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  animate={{
    boxShadow: [
      '0 0 0 0 rgba(244, 63, 94, 0.4)',
      '0 0 0 10px rgba(244, 63, 94, 0)',
      '0 0 0 0 rgba(244, 63, 94, 0)'
    ]
  }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  Pulse Effect
</motion.button>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
            <InteractionCard
              id="glow-button"
              title="Glow Button"
              description="Animated glow sweep effect"
              component={<GlowButton>Glow Effect</GlowButton>}
              code={`<motion.button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold relative overflow-hidden">
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
    animate={{ x: ['-100%', '100%'] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
  />
  Glow Effect
</motion.button>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        );
      case 'toggles':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InteractionCard
              id="animated-toggle"
              title="Animated Toggle"
              description="Smooth spring animation toggle"
              component={<AnimatedToggle isOn={toggle1} onToggle={() => setToggle1(!toggle1)} />}
              code={`const [isOn, setIsOn] = useState(false);
<motion.div
  className={\`w-16 h-8 rounded-full p-1 cursor-pointer \${isOn ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gray-300'}\`}
  onClick={() => setIsOn(!isOn)}
  whileTap={{ scale: 0.95 }}
>
  <motion.div
    className="w-6 h-6 bg-white rounded-full shadow-md"
  animate={{ x: isOn ? 32 : 0 }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
</motion.div>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
            <InteractionCard
              id="flip-toggle"
              title="Flip Toggle"
              description="Scale animation with color transition"
              component={<FlipToggle isOn={toggle2} onToggle={() => setToggle2(!toggle2)} />}
              code={`const [isOn, setIsOn] = useState(false);
<motion.div className="w-16 h-8 bg-gray-200 rounded-full cursor-pointer relative overflow-hidden" onClick={() => setIsOn(!isOn)}>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
    animate={{ scale: isOn ? 1 : 0 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  />
  <motion.div
    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
    animate={{ x: isOn ? 36 : 4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  />
</motion.div>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        );
      case 'loaders':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InteractionCard
              id="spin-loader"
              title="Spin Loader"
              description="Classic spinning loader animation"
              component={<SpinLoader />}
              code={`<motion.div
  className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full"
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
/>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
            <InteractionCard
              id="dots-loader"
              title="Dots Loader"
              description="Bouncing dots animation"
              component={<DotsLoader />}
              code={`<div className="flex space-x-2">
  {[0, 1, 2].map((i) => (
    <motion.div
      key={i}
      className="w-3 h-3 bg-blue-500 rounded-full"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
    />
  ))}
</div>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
            <InteractionCard
              id="progress-bar"
              title="Progress Bar"
              description="Animated progress indicator"
              component={<ProgressBar progress={progress} />}
              code={`const [progress, setProgress] = useState(75);
<div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
  <motion.div
    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
  animate={{ width: \`\${progress}%\` }}
  transition={{ duration: 0.5 }}
/>
</div>`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        );
      case 'modals':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InteractionCard
              id="modal-demo"
              title="Animated Modal"
              description="Spring animation modal with backdrop"
              component={<AnimatedButton onClick={() => setShowModal(true)}>Open Modal</AnimatedButton>}
              code={`const Modal = ({ isOpen, onClose, title, children }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {children}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        );
      case 'tooltips':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InteractionCard
              id="tooltip-demo"
              title="Animated Tooltip"
              description="Hover-triggered tooltip with smooth animation"
              component={<Tooltip content="This is a tooltip!"><AnimatedButton variant="secondary">Hover Me</AnimatedButton></Tooltip>}
              code={`const Tooltip = ({ children, content }) => {
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
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
            <InteractionCard
              id="toast-demo"
              title="Toast Notification"
              description="Animated toast message with auto-dismiss"
              component={<AnimatedButton onClick={() => showToast('Success! This is a toast message.')}>Show Toast</AnimatedButton>}
              code={`const Toast = ({ message, isVisible, onClose, type = 'success' }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className={\`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg text-white font-semibold \${type === 'success' ? 'bg-green-500' : 'bg-red-500'}\`}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);`}
              onClick={openModal}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
                >
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2">
                  Micro-Interaction Playground
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <main className="flex-1 p-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            {renderCategoryContent()}
          </main>
        </div>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Demo Modal"
        >
          <div className="p-4">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a demo modal with smooth animations powered by Framer Motion!
            </p>
            <AnimatedButton onClick={() => setShowModal(false)}>
              Close Modal
            </AnimatedButton>
          </div>
        </Modal>
        <Modal
          isOpen={modalData.isOpen}
          onClose={closeModal}
          title={modalData.title}
        >
          <div className="space-y-4">
            <div className="flex justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {modalData.component}
            </div>
            <CodeEditor
              code={modalData.code}
              onChange={(code) => setModalData(prev => ({ ...prev, code }))}
            />
            <div className="flex justify-end">
              <AnimatedButton
                onClick={() => copyToClipboard(modalData.code)}
                className="flex items-center space-x-2"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Code</span>
              </AnimatedButton>
            </div>
          </div>
        </Modal>
        <Toast
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
          type={toast.type}
        />
      </div>
    </ThemeContext.Provider>
  );
}