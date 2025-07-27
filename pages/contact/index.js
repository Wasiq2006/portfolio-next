import Navbar from '../../components/Navbar';
import MatrixBackground from '../../components/Canvas/MatrixBackground';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const pixelFont = localFont({
  src: '../../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

export default function Contact() {
  return (
    <>
      <MatrixBackground />
      <Navbar />
      <motion.div
        className={`${pixelFont.className} relative z-10 p-10 min-h-screen bg-black text-white text-center`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-pink-400">Contact Me</h1>
        <p className="mt-4">
          Reach me via{" "}
          <a
            href="https://github.com/Wasiq2006"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-white"
          >
            GitHub
          </a>{" "}
          — my DMs are always open for collabs or questions!
        </p>
      </motion.div>
    </>
  );
}
