'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Geist, Geist_Mono, Oxanium } from 'next/font/google';
import localFont from 'next/font/local';

import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import MatrixBackground from '../components/MatrixBackground';
import TerminalIntro from '../components/Terminal/TerminalIntro';
import ScrollProgress from '../components/ScrollProgress';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import ContactForm from '../components/ContactForm';

// Fonts
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-oxanium', weight: ['200', '400', '700', '800'] });

const pixelFont = localFont({
  src: '../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// Enhanced stagger animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projects = [
  {
    title: 'ZabCal',
    description: 'CGPA Calculator web app built for SZABIST students.',
    fullDescription:
      'A comprehensive CGPA calculator web application designed specifically for SZABIST students. Calculate your GPA easily with an intuitive interface.',
    features: [
      'Real-time GPA calculation',
      'Multi-semester tracking',
      'Grade point visualization',
      'Export results as PDF',
    ],
    tags: ['HTML', 'CSS', 'JS'],
    links: {
      github: 'https://github.com/Wasiq2006/zabcal',
      live: 'https://zabcal.vercel.app',
    },
  },
  {
    title: 'Android Based Home Server',
    description: 'Fully functional home server built on Android 14 device with Jellyfin, Samba, and cybersecurity lab.',
    fullDescription:
      'This project focused on building a fully functional home server using an Android 14 device as the main hardware platform. The server environment was created using Termux, which provided a Linux-based terminal system for installing and configuring server applications directly on the mobile device. With 256GB of storage and 8GB of RAM, the Android device was repurposed into a cost-effective and power-efficient alternative to traditional home server hardware. The setup includes Jellyfin as a media server for streaming personal movies, shows, and music across devices on the local network, along with Samba for file uploading and sharing, allowing the Android device to function similarly to a NAS system. In addition to hosting media and managing file transfers, the server is also used as a controlled lab environment for ethical cybersecurity testing, where different attack simulations and security experiments are performed to strengthen practical knowledge in server defense and network security. This project demonstrates how modern mobile hardware can be innovatively used to deploy real-world server services while maintaining flexibility, portability, and efficiency.',
    features: [
      'Jellyfin media streaming server',
      'Samba file sharing & NAS functionality',
      'Android 14 with Termux Linux environment',
      'Cybersecurity testing lab',
      'Network attack simulations',
      'Server defense & security experiments',
    ],
    tags: ['Android', 'Termux', 'Linux', 'Networking', 'Cybersecurity'],
    links: {},
  },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true); // Always show on load
  const [checkedVisit, setCheckedVisit] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Just mark that we checked, don't use localStorage anymore
    setCheckedVisit(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!checkedVisit) return null;

  if (showIntro) {
    return <TerminalIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <>
      <MatrixBackground />
      <ScrollProgress />
      <Navbar />
      <MobileNav active={activeSection} />

      <div className={`${geistSans.className} ${geistMono.className} ${oxanium.className} ${pixelFont.className} relative z-10`}>
        {/* =================== HERO =================== */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-24"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="
              w-full max-w-5xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-3xl
              shadow-[0_0_40px_rgba(0,255,150,0.15)]
              p-6 sm:p-10 lg:p-14
              text-center
            "
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">
              Ethical Hacker
            </p>

            <h1 className="text-3xl sm:text-6xl font-bold text-green-400 mb-4">
              Muhammad Wasiq
            </h1>

            <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Cybersecurity enthusiast & Computer Science Student.
              Building skills in networking, penetration testing, and red teaming.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="
                  px-6 py-3 rounded-xl
                  bg-green-400 text-black font-bold
                  hover:bg-green-300 transition
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-3 rounded-xl
                  border border-green-400 text-green-300
                  hover:bg-green-400 hover:text-black transition
                "
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* =================== ABOUT =================== */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="w-full max-w-5xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-green-400 mb-4 uppercase tracking-tight">
                About Me
              </h2>
              <motion.div
                className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ originX: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Bio Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 bg-gradient-to-br from-black/50 to-black/30 border border-green-400/40 hover:border-green-400/80 rounded-2xl p-8 transition-all duration-300 hover:bg-black/60 hover:shadow-lg hover:shadow-green-400/10"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6 uppercase tracking-wide">Who I Am</h3>
                <div className="space-y-4 text-gray-100 leading-relaxed">
                  <p>
                    Hey, I'm <span className="text-green-400 font-bold text-lg">Wasiq</span>,
                    a cybersecurity enthusiast and Computer Science Student.
                    I'm currently studying BSCS at SZABIST and will graduate by 2029.
                  </p>

                  <p>
                    I'm passionate about understanding how systems work and breaking them safely.
                    My focus is on penetration testing, network security, and red team operations.
                  </p>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-black/50 to-black/30 border border-cyan-400/40 hover:border-cyan-400/80 rounded-2xl p-8 transition-all duration-300 hover:bg-black/60 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-6 uppercase tracking-wide">Quick Facts</h3>
                <div className="space-y-4 text-sm">
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-400 text-xs mb-1">GRADUATION</p>
                    <p className="text-gray-100 font-semibold">2029</p>
                  </div>
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-400 text-xs mb-1">UNIVERSITY</p>
                    <p className="text-gray-100 font-semibold">SZABIST</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">FOCUS AREA</p>
                    <p className="text-gray-100 font-semibold">Cybersecurity</p>
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-black/50 to-black/30 border border-green-400/40 hover:border-green-400/80 rounded-2xl p-6 transition-all duration-300 hover:bg-black/60 hover:shadow-lg hover:shadow-green-400/10"
              >
                <h3 className="text-green-400 font-bold text-lg mb-3 uppercase tracking-wide">🎓 Education</h3>
                <p className="text-gray-100 text-base font-medium">BS Computer Science</p>
                <p className="text-gray-300 text-sm mt-2">@ SZABIST</p>
              </motion.div>

              {/* Specialty Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-black/50 to-black/30 border border-cyan-400/40 hover:border-cyan-400/80 rounded-2xl p-6 transition-all duration-300 hover:bg-black/60 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <h3 className="text-cyan-400 font-bold text-lg mb-3 uppercase tracking-wide">🔒 Specialty</h3>
                <p className="text-gray-100 text-base font-medium">Thinking Outside The Box</p>
                <p className="text-gray-300 text-sm mt-2">Creative Problem Solving</p>
              </motion.div>

              {/* Interests Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-black/50 to-black/30 border border-purple-400/40 hover:border-purple-400/80 rounded-2xl p-6 transition-all duration-300 hover:bg-black/60 hover:shadow-lg hover:shadow-purple-400/10"
              >
                <h3 className="text-purple-400 font-bold text-lg mb-4 uppercase tracking-wide">💡 Interests</h3>
                <ul className="space-y-2 text-gray-100 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▪</span> Coding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▪</span> Cybersecurity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▪</span> Building Cyber Tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▪</span> Playing CTFs
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* =================== PROJECTS =================== */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="
              w-full max-w-5xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-3xl
              shadow-[0_0_40px_rgba(0,255,150,0.12)]
              p-6 sm:p-10 lg:p-14
            "
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-6 sm:mb-8">
              Projects
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-gray-400 text-sm mt-8"
            >
              💡 Click any project to learn more
            </motion.p>
          </motion.div>
        </section>

        {/* =================== SKILLS =================== */}
        <section id="skills">
          <Skills />
        </section>

        {/* =================== CERTIFICATIONS & COURSES =================== */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* =================== CONTACT =================== */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="
              w-full max-w-5xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-3xl
              shadow-[0_0_40px_rgba(0,255,150,0.12)]
              p-6 sm:p-10 lg:p-14
            "
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Have a question or want to collaborate? Send me a message!
              </p>
            </div>

            <ContactForm />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-8 border-t border-white/10 text-center"
            >
              <p className="text-gray-400 text-sm mb-6">Or connect with me on:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://github.com/Wasiq2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-white/10 bg-black/40 hover:border-green-400/40 hover:text-green-300 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-wasiq-mansoor-35332927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-white/10 bg-black/40 hover:border-green-400/40 hover:text-green-300 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:wasiqmansoor69@gmail.com"
                  className="px-6 py-3 rounded-xl border border-white/10 bg-black/40 hover:border-green-400/40 hover:text-green-300 transition"
                >
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* =================== FOOTER =================== */}
        <footer className="border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 flex-wrap">
                <span>Built with</span>
                <span className="text-green-400 font-semibold">Next.js</span>
                <span className="text-gray-500 hidden sm:inline">•</span>
                <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
                <span className="text-gray-500 hidden sm:inline">•</span>
                <span className="text-purple-400 font-semibold">Framer Motion</span>
              </div>
              
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} Muhammad Wasiq. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition text-xs sm:text-sm"
                >
                  GitHub
                </a>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition text-xs sm:text-sm"
                >
                  LinkedIn
                </a>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <a 
                  href="mailto:wasiq@example.com"
                  className="text-gray-400 hover:text-purple-400 transition text-xs sm:text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
