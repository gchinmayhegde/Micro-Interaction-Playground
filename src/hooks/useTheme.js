import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return { isDark, toggleTheme };
};

export default useTheme;