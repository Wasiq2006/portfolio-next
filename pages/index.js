'use client';
import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import MatrixBackground from '../components/MatrixBackground';
import Navbar from '../components/Navbar';
import TerminalIntro from '../components/Terminal/TerminalIntro';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
            className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} relative z-10 min-h-screen flex flex-col justify-center items-center text-center`}
          >
            <motion.main
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-green-400 tracking-wide mb-6">
                Wasiq Mansoor
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
                Cybersecurity Enthusiast & Ethical Hacker in Training
              </p>

              <div className="flex gap-6 justify-center">
                <Link href="/projects">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 rounded-lg bg-green-500 text-black font-bold shadow-lg hover:bg-green-400 transition"
                  >
                    View Projects
                  </motion.a>
                </Link>
                <Link href="/contact">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 rounded-lg border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition"
                  >
                    Contact Me
                  </motion.a>
                </Link>
              </div>
            </motion.main>

            <footer className="absolute bottom-6 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Wasiq Mansoor</p>
            </footer>
          </div>
        </>
      )}
    </>
  );
}
