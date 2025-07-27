'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const pixelFont = localFont({
  src: '../../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

const bootLines = [
  '> Booting Wasiq.dev...',
  '> Initializing Next.js Engine...',
  '> Connecting to Vercel CDN...',
  '> Loading matrix background...',
  '> Access Granted. Welcome.',
];

export default function TerminalIntro({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, bootLines[i]]);
      i++;
      if (i === bootLines.length) {
        clearInterval(interval);
        setShowCursor(true); // Show cursor after final line
        setTimeout(onComplete, 1800); // Wait 1.8s before transitioning
      }
    }, 600);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`${pixelFont.className} bg-black text-green-400 text-xs sm:text-sm p-8 h-screen w-full flex flex-col justify-center font-mono`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        {visibleLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {line}
          </motion.p>
        ))}

        {showCursor && (
          <span className="inline-block animate-blink">█</span>
        )}
      </motion.div>
    </div>
  );
}
