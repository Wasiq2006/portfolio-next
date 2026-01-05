'use client';

import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import MatrixBackground from '../components/MatrixBackground';
import TerminalIntro from '../components/Terminal/TerminalIntro';

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
          <ScrollProgress />
          <Navbar />

          <div
            className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} relative z-10`}
          >
            {/* ===== Home Section ===== */}
            <section
              id="home"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.h1
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-5xl sm:text-6xl font-bold text-green-400 mb-6"
              >
                Wasiq Mansoor
              </motion.h1>
              <motion.p
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="text-gray-300 text-lg sm:text-xl max-w-2xl"
              >
                Cybersecurity Enthusiast & Ethical Hacker in Training
              </motion.p>
            </section>

            <hr className="border-gray-700 my-12" />

            {/* ===== About Section ===== */}
            <section
              id="about"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="max-w-3xl text-gray-300 space-y-6"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="max-w-3xl space-y-6 p-8 text-gray-200 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,150,0.15)]"
              >
                <p>
                  Hey 👋 I'm <span className="text-green-400 font-bold">Wasiq</span> —
                  a cybersecurity enthusiast and ethical hacker in training.
                  Right now I am doing BSCS and will graduate by 2029.
                </p>
                <p>
                  This portfolio was built entirely using
                  <span className="text-blue-400"> Termux</span>,
                  <span className="text-purple-400"> GitHub</span>, and
                  <span className="text-pink-400"> Vercel</span>, 🚀
                  showing my love for pushing boundaries.
                </p>
                <p>
                  My goal is to specialize in <span className="text-red-50">Red Teaming</span>,
                  penetration testing, and advanced cybersecurity research.
                </p>
              </motion.div>
            </section>

            <hr className="border-gray-700 my-12" />

            {/* ===== Projects Section ===== */}
            <section
              id="projects"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="text-4xl font-bold text-purple-400 mb-6"
              >
                Projects
              </motion.h2>
              <motion.p
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="max-w-3xl space-y-6 p-8 text-gray-200 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,150,0.15)]"
              >
                🚧 Coming soon...
              </motion.p>
            </section>

            <hr className="border-gray-700 my-12" />

            {/* ===== Contact Section ===== */}
            <section
              id="contact"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="text-4xl font-bold text-pink-400 mb-6"
              >
                Contact Me
              </motion.h2>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                 viewport={{ once: false, amount: 0.3 }}
                className="max-w-3xl space-y-6 p-8 text-gray-200 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,150,0.15)]"
              >
                <a
                  href="https://github.com/Wasiq2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  GitHub
                </a>
                <a
                  href="mailto:wasiqmansoor69@gmail.com"
                  className="hover:text-green-400"
                >
                  E-Mail
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-wasiq-mansoor-35332927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  LinkedIn
                </a>
              </motion.div>
            </section>

            <hr className="border-gray-700 my-12" />

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
