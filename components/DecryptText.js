'use client';
import { useState, useEffect } from 'react';

export default function DecryptText({ text, speed = 50, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        const randomChars = Array.from({ length: text.length - i })
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join('');

        setDisplayed(text.slice(0, i) + randomChars);
        i++;
      } else {
        setDisplayed(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
}
