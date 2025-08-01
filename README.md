# 🎨 Micro-Interaction Playground

A visual and interactive React-based playground to explore and tweak modern micro-interactions like buttons, toggles, loaders, modals, and more. Perfect for UI/UX design enthusiasts, frontend developers, and anyone who loves polished interfaces!

![Micro-Interaction Playground](https://img.shields.io/badge/React-18.2.0-blue)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.12.4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🎭 Interactive Components**: Explore various micro-interactions with live previews
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **🌙 Dark Mode Support**: Toggle between light and dark themes
- **📋 Copy Code**: One-click code copying for easy implementation
- **⭐ Favorites System**: Save your favorite interactions for quick access
- **🔧 Live Code Editor**: Edit and preview code changes in real-time
- **📚 Component Categories**: Organized into buttons, toggles, loaders, modals, and tooltips

### Button Animations
- **Animated Button**: Smooth hover and tap animations with scale effects
- **Pulse Button**: Continuous pulse animation with shadow effects
- **Glow Button**: Animated glow sweep effect across the button

### Toggle Switches
- **Animated Toggle**: Spring-powered toggle with smooth transitions
- **Flip Toggle**: Scale animation with color transition effects

### Loaders
- **Spin Loader**: Classic spinning loader with smooth rotation
- **Dots Loader**: Bouncing dots animation with staggered delays
- **Progress Bar**: Animated progress indicator with gradient fills

### Modals & Overlays
- **Animated Modal**: Spring animation modal with backdrop blur
- **Toast Notifications**: Auto-dismissing notifications with slide animations

### Tooltips & Helpers
- **Animated Tooltip**: Hover-triggered tooltips with smooth transitions
- **Interactive Toasts**: Success/error notifications with spring animations

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/gchinmayhegde/micro-interaction-playground.git
cd micro-interaction-playground
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Dependencies

### Core Dependencies
- **React**: ^18.2.0 - JavaScript library for building user interfaces
- **React DOM**: ^18.2.0 - React package for working with the DOM
- **Framer Motion**: ^10.12.4 - Production-ready motion library for React
- **Lucide React**: ^0.252.0 - Beautiful & consistent icon toolkit

### Development Dependencies
- **React Scripts**: 5.0.1 - Configuration and scripts for Create React App
- **Tailwind CSS**: ^3.3.2 - Utility-first CSS framework

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── AnimatedButton.jsx    # Button component variants
│   │   ├── AnimatedToggle.jsx    # Toggle switch components
│   │   ├── Loaders.jsx          # Loading animation components
│   │   ├── Modal.jsx            # Modal component with animations
│   │   └── Tooltip.jsx          # Tooltip and toast components
│   ├── CodeEditor.jsx           # Syntax highlighted code editor
│   ├── InteractionCard.jsx      # Component showcase cards
│   └── Sidebar.jsx              # Navigation sidebar
├── hooks/
│   └── useTheme.js              # Theme management hook
├── app.jsx                      # Main application component
└── index.js                     # Application entry point
```

## 🎯 Usage

### Basic Component Usage

```jsx
import { AnimatedButton } from './components/ui/AnimatedButton';

function MyComponent() {
  return (
    <AnimatedButton onClick={() => console.log('Clicked!')}>
      Click Me
    </AnimatedButton>
  );
}
```

### Using Toggles

```jsx
import { AnimatedToggle } from './components/ui/AnimatedToggle';
import { useState } from 'react';

function MyToggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <AnimatedToggle 
      isOn={isOn} 
      onToggle={() => setIsOn(!isOn)} 
    />
  );
}
```

### Adding Loaders

```jsx
import { SpinLoader, DotsLoader } from './components/ui/Loaders';

function LoadingExample() {
  return (
    <div>
      <SpinLoader />
      <DotsLoader />
    </div>
  );
}
```

## 🎨 Customization

### Theming
The playground supports both light and dark modes. You can customize the theme by modifying the Tailwind CSS classes in the components.

### Animation Timing
All animations use Framer Motion. You can customize timing and easing by modifying the `transition` properties:

```jsx
<motion.div
  animate={{ scale: 1.1 }}
  transition={{ 
    duration: 0.3, 
    ease: "easeInOut" 
  }}
>
  Content
</motion.div>
```

### Colors and Gradients
Modify the gradient colors by updating the Tailwind classes:

```jsx
// Change from blue-purple to red-orange gradient
className="bg-gradient-to-r from-red-500 to-orange-500"
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-interaction`)
3. Commit your changes (`git commit -m 'Add amazing interaction'`)
4. Push to the branch (`git push origin feature/amazing-interaction`)
5. Open a Pull Request

### Adding New Components

1. Create your component in the appropriate `ui` folder
2. Export it from the respective index file
3. Add it to the main app with proper categorization
4. Include code examples and documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for the amazing animation capabilities
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Create React App](https://create-react-app.dev/) for the project setup

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🐛 Bug Reports

If you find a bug, please open an issue on [GitHub Issues](https://github.com/gchinmayhegde/micro-interaction-playground/issues) with:

- A clear description of the issue
- Steps to reproduce
- Expected behavior
- Screenshots if applicable
- Browser and OS information

## 💡 Feature Requests

Have ideas for new micro-interactions? Open a feature request issue with:

- Description of the proposed feature
- Use cases and benefits
- Any reference implementations or inspiration

---

**Happy coding! 🚀**

Made with ❤️ by [gchinmayhegde](https://github.com/gchinmayhegde)