import { useState, useEffect } from 'react';

export type Theme = 'light' | 'midnight-indigo';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get saved theme from localStorage or default to 'light'
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved || 'light';
  });

  useEffect(() => {
    // Apply theme to html element
    const html = document.documentElement;
    
    if (theme === 'midnight-indigo') {
      html.classList.add('midnight-indigo');
    } else {
      html.classList.remove('midnight-indigo');
    }

    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'midnight-indigo' : 'light'));
  };

  return { theme, toggleTheme };
};
