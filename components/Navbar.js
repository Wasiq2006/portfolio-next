'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const pixelFont = localFont({
  src: '../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const onScroll = () => {
      let current = 'home';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) {
          current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${pixelFont.className}
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-6xl
        rounded-full px-10 py-4

        /* REAL GLASS */
        bg-gradient-to-br from-white/10 via-white/5 to-white/0
        backdrop-blur-xl
        border border-white/20
        shadow-[0_0_40px_rgba(0,255,150,0.15)]
      `}
    >
      <div className="flex items-center justify-between text-xs tracking-widest text-white">
        {/* Logo */}
        <a
          href="#home"
          className="font-bold text-green-400 hover:text-green-300 transition"
        >
          WASIQ
        </a>

        {/* Links */}
        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive = active === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative group transition-colors
                  ${isActive ? 'text-green-400' : 'text-gray-300 hover:text-green-300'}
                `}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px]
                    bg-green-400 transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
