import Navbar from '../../components/Navbar';
import MatrixBackground from '../../components/MatrixBackground';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const pixelFont = localFont({
  src: '../../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

export default function About() {
  return (
    <>
      <MatrixBackground />
      <Navbar />

      <motion.div
        className={`${pixelFont.className} relative z-10 min-h-screen bg-black text-white px-6 sm:px-20 py-16`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-400 mb-8 text-center">
          About Me
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
          <p>
            Hey 👋 I'm <span className="text-green-400 font-bold">Wasiq</span> — 
            a cybersecurity enthusiast and ethical hacker in training.
            Right now I am Doing BSCS and I am gonna graduate by 2029.
            I’m deeply passionate about hacking, computer systems, 
            and building a career in <span className="text-green-400">cybersecurity</span>.
          </p>

          <p>
            This portfolio was built entirely using 
            <span className="text-blue-400"> Termux</span>, 
            <span className="text-purple-400"> GitHub</span>, and 
            <span className="text-pink-400"> Vercel</span>, 
            which reflects my love for pushing boundaries and 
            making the most out of limited resources 🚀.
          </p>

          <p>
            My goal is to specialize in <span className="text-yellow-400">Red Teaming</span>, 
            penetration testing, and advanced cybersecurity research. 
            Along this journey, I’m learning <span className="text-cyan-400">programming</span>, 
            building projects, and sharpening my problem-solving skills.
          </p>
        </div>
      </motion.div>
    </>
  );
}
