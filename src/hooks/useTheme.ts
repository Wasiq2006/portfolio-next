import { useState, useEffect } from 'react';

export type Theme = 'light' | 'midnight-indigo';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved || 'light';
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'midnight-indigo') {
      html.classList.add('midnight-indigo');
    } else {
      html.classList.remove('midnight-indigo');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    // Delay theme switch to sync with the expanding circle
    setTimeout(() => {
      setTheme((prev) => (prev === 'light' ? 'midnight-indigo' : 'light'));
    }, 300);

    // Remove animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return { theme, toggleTheme, isAnimating };
};
