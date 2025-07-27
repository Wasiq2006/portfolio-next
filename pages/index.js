'use client';
import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import MatrixBackground from '../components/MatrixBackground';
import Navbar from '../components/Navbar';
import TerminalIntro from '../components/Terminal/TerminalIntro';
import { motion } from 'framer-motion';

// Google Fonts
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

// Pixel Font
const pixelFont = localFont({
  src: '../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [checkedVisit, setCheckedVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowIntro(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
    setCheckedVisit(true);
  }, []);

  if (!checkedVisit) return null;

  return (
    <>
      {showIntro ? (
        <TerminalIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <MatrixBackground />
          <Navbar />
          <div
            className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} relative z-10 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white`}
          >
            <motion.main
              className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-green-400">
                Welcome to Wasiq's Portfolio
              </h1>
              <p className="text-gray-300 text-sm max-w-xl">
                Built entirely using Termux + GitHub + Vercel —
              </p>
            </motion.main>

            <footer className="row-start-3 flex gap-6 flex-wrap justify-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Wasiq Mansoor</p>
            </footer>
          </div>
        </>
      )}
    </>
  );
}
