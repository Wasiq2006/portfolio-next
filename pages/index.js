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
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
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
              className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black/70 backdrop-blur-md"
            >
              <motion.h1
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-bold text-green-400 mb-6"
              >
                <DecryptText text="Wasiq Mansoor" />
              </motion.h1>
              <motion.p
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-lg sm:text-xl max-w-2xl"
              >
                <DecryptText text="Cybersecurity Enthusiast & Ethical Hacker in Training" />
              </motion.p>
            </section>

            {/* ===== About Section ===== */}
            <section
              id="about"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black/70 backdrop-blur-md"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-blue-400 mb-6"
              >
                <DecryptText text="About Me" />
              </motion.h2>
              <div className="max-w-3xl text-gray-300 space-y-4 text-lg">
                <p>
                  <DecryptText text="Hey 👋 I'm Wasiq — a cybersecurity enthusiast and ethical hacker in training. Right now I am doing BSCS and will graduate by 2029. I’m passionate about hacking, systems, and building a career in cybersecurity." />
                </p>
                <p>
                  <DecryptText text="This portfolio was built entirely using Termux, GitHub, and Vercel 🚀 — reflecting my love for pushing boundaries with limited resources." />
                </p>
                <p>
                  <DecryptText text="My goal is to specialize in Red Teaming, penetration testing, and advanced cybersecurity research while learning programming and building projects." />
                </p>
              </div>
            </section>

            {/* ===== Projects Section ===== */}
            <section
              id="projects"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black/70 backdrop-blur-md"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-purple-400 mb-6"
              >
                <DecryptText text="Projects" />
              </motion.h2>
              <motion.p
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 text-lg max-w-2xl"
              >
                <DecryptText text="Here are some of my projects that showcase my journey in programming, cybersecurity, and building cool tools." />
              </motion.p>
              {/* Later you can map project cards here */}
            </section>

            {/* ===== Contact Section ===== */}
            <section
              id="contact"
              className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black/70 backdrop-blur-md"
            >
              <motion.h2
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-bold text-pink-400 mb-6"
              >
                <DecryptText text="Contact Me" />
              </motion.h2>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-6 text-lg text-gray-300"
              >
                <a
                  href="https://github.com/Wasiq2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  <DecryptText text="GitHub: github.com/Wasiq2006" />
                </a>
                <a
                  href="mailto:wasiqmansoor69@gmail.com"
                  className="hover:text-green-400"
                >
                  <DecryptText text="Email: wasiqmansoor69@gmail.com" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wasiq-mansoor-35332927a?trk=contact-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  <DecryptText text="LinkedIn: linkedin.com/in/wasiq-mansoor" />
                </a>
              </motion.div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="text-center py-6 text-sm text-gray-500 bg-black/70 backdrop-blur-md">
              © {new Date().getFullYear()} Wasiq Mansoor
            </footer>
          </div>
        </>
      )}
    </>
  );
}
