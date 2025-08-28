'use client';

import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import MatrixBackground from '../components/MatrixBackground';
import TerminalIntro from '../components/Terminal/TerminalIntro';
import DecryptText from '../components/DecryptText';

// ===== Fonts =====
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});
const pixelFont = localFont({
  src: '../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

// ===== Animations =====
const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

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
          <MatrixBackground />
          <Navbar />

          <div
            className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} relative z-10`}
          >
            {/* ===== Home Section ===== */}
            <section
              id="home"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-green-400 mb-6">
                  <DecryptText text="Wasiq Mansoor" />
                </h1>
                <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
                  <DecryptText text="Cybersecurity Enthusiast & Ethical Hacker in Training" />
                </p>
              </motion.div>
            </section>

            {/* ===== About Section ===== */}
            <section
              id="about"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl space-y-6 text-gray-200 leading-relaxed"
              >
                <h2 className="text-4xl font-bold text-blue-400 mb-6">
                  <DecryptText text="About Me" />
                </h2>
                <p>
                  Hey 👋 I'm <span className="text-green-400 font-bold">Wasiq</span> — a cybersecurity
                  enthusiast and ethical hacker in training. Right now I’m doing BSCS and graduating in 2029.
                </p>
                <p>
                  This portfolio was built entirely using
                  <span className="text-blue-400"> Termux</span>,
                  <span className="text-purple-400"> GitHub</span>, and
                  <span className="text-pink-400"> Vercel</span> 🚀
                </p>
                <p>
                  My goal is to specialize in <span className="text-red-400">Red Teaming</span>,
                  penetration testing, and advanced cybersecurity research.
                </p>
              </motion.div>
            </section>

            {/* ===== Projects Section ===== */}
            <section
              id="projects"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-purple-400 mb-6">
                  <DecryptText text="Projects" />
                </h2>
                <p className="text-gray-300">Coming soon... 🚧</p>
              </motion.div>
            </section>

            {/* ===== Contact Section ===== */}
            <section
              id="contact"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-pink-400 mb-6">
                  <DecryptText text="Contact Me" />
                </h2>
                <div className="flex flex-col gap-6 text-lg text-gray-200">
                  <a href="https://github.com/Wasiq2006" target="_blank" className="hover:text-green-400">
                    GitHub
                  </a>
                  <a href="mailto:wasiqmansoor69@gmail.com" className="hover:text-green-400">
                    wasiqmansoor69@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wasiq-mansoor-35332927a?trk=contact-info"
                    target="_blank"
                    className="hover:text-green-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="text-center py-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Wasiq Mansoor
            </footer>
          </div>
        </>
      )}
    </>
  );
}
