'use client';

import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

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
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-bold text-green-400 mb-6"
              >
                Wasiq Mansoor
              </motion.h1>
              <motion.p
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-lg sm:text-xl max-w-2xl"
              >
                Cybersecurity Enthusiast & Ethical Hacker in Training
              </motion.p>
            </section>

            {/* ===== About Section ===== */}
            <section
              id="about"
              className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-20 text-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl sm:text-5xl font-bold text-blue-400 mb-8">
                  About Me
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Hey 👋 I&apos;m{' '}
                    <span className="text-green-400 font-bold">Wasiq</span> — a
                    cybersecurity enthusiast and ethical hacker in training.
                    Right now I’m doing{' '}
                    <span className="text-yellow-400">BSCS</span> and will
                    graduate by 2029. I’m deeply passionate about hacking,
                    computer systems, and building a career in{' '}
                    <span className="text-green-400">cybersecurity</span>.
                  </p>

                  <p>
                    This portfolio was built entirely using
                    <span className="text-blue-400"> Termux</span>,
                    <span className="text-purple-400"> GitHub</span>, and
                    <span className="text-pink-400"> Vercel</span>, which
                    reflects my love for pushing boundaries and making the most
                    out of limited resources 🚀.
                  </p>

                  <p>
                    My goal is to specialize in{' '}
                    <span className="text-red-200">Red Teaming</span>,
                    penetration testing, and advanced cybersecurity research.
                    Along this journey, I’m learning{' '}
                    <span className="text-cyan-400">programming</span>, building
                    projects, and sharpening my problem-solving skills.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* ===== Projects Section ===== */}
            <section
              id="projects"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-yellow-400 mb-6"
              >
                Projects
              </motion.h2>
              <motion.p
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 max-w-2xl"
              >
                Coming Soon!
              </motion.p>
            </section>

            {/* ===== Contact Section ===== */}
            <section
              id="contact"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-pink-400 mb-6"
              >
                Contact Me
              </motion.h2>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-6 text-lg"
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
                  wasiqmansoor69@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/wasiq-mansoor-35332927a?trk=contact-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  LinkedIn
                </a>
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
