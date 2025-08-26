import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

const pixelFont = localFont({
  src: '../../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

export default function Contact() {
  return (
    <>
      <Navbar />
      <motion.div
        className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} relative z-10 min-h-screen bg-black text-white flex flex-col items-center justify-center px-6`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-10">
          Contact Me
        </h1>

        <div className="flex flex-col gap-6 text-base sm:text-lg">
          {/* GitHub */}
          <a
            href="https://github.com/Wasiq2006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <Image src="/icons/github.png" width={32} height={32} alt="GitHub" />
            <span>github.com/Wasiq2006</span>
          </a>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Image src="/icons/email.png" width={32} height={32} alt="Email" />
            <span>wasiqmansoor69@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wasiq-mansoor-35332927a?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <Image src="/icons/linkedin.png" width={32} height={32} alt="LinkedIn" />
            <span>linkedin.com/in/wasiq-mansoor</span>
          </a>
        </div>
      </motion.div>
    </>
  );
}
