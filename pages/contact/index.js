import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

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
      <div
        className={`${geistSans.className} ${geistMono.className} ${pixelFont.className} bg-black text-white min-h-screen p-10 text-center`}
      >
        <h1 className="text-3xl font-bold text-pink-400 mb-6">Contact Me</h1>

        <div className="flex flex-col items-center gap-6 text-sm">
          {/* GitHub */}
          <a href="https://github.com/Wasiq2006" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Image src="/icons/github.png" width={32} height={32} alt="GitHub" />
            <span>github.com/Wasiq2006</span>
          </a>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Image src="/icons/email.png" width={32} height={32} alt="Email" />
            <span>wasiqmansoor69@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/wasiq-mansoor-35332927a?trk=contact-info" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Image src="/icons/linkedin.png" width={32} height={32} alt="LinkedIn" />
            <span>linkedin.com/in/wasiq-mansoor</span>
          </a>
        </div>
      </div>
    </>
  );
}
