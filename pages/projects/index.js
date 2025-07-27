import Navbar from '../../components/Navbar';
import MatrixBackground from '../../components/Canvas/MatrixBackground';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const pixelFont = localFont({
  src: '../../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

export default function Projects() {
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
        <h1 className="text-4xl font-bold text-purple-400">My Projects</h1>
        <p className="mt-4">
          None, This is the beginning 
        </p>
      </motion.div>
    </>
  );
}
