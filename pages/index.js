'use client';
import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
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
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit || now - parseInt(lastVisit) > 4 * 60 * 60 * 1000) {
      setShowIntro(true);
      localStorage.setItem('lastVisit', now.toString());
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
          {/* MatrixBackground is now in _app.js (global) */}
          <Navbar />
          <div
            className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4`}
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects" passHref>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 rounded-lg bg-green-500 text-black font-bold shadow-lg hover:bg-green-400 transition"
                  >
                    View Projects
                  </motion.a>
                </Link>
                <Link href="/contact" passHref>
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
