'use client';
import { useState, useEffect } from 'react';

export default function DecryptText({ text, speed = 30 }) {
  const [displayed, setDisplayed] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{};:,.<>?';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        const partial =
          text.substring(0, i) + randomChar + text.substring(i + 1);
        setDisplayed(partial);

        setTimeout(() => {
          setDisplayed(text.substring(0, i + 1));
        }, speed);

        i++;
      } else {
        clearInterval(interval);
      }
    }, speed * 2);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}
