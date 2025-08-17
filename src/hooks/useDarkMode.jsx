import { useState, useEffect } from 'react';

const useDarkMode = () => {

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  
  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return { isDark, toggleDarkMode };
};

export default useDarkMode;
