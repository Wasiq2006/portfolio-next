'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function MobileNav({ active }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - visible only on mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-5 right-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-6 h-6 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-green-400 block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-green-400 block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-green-400 block"
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${pixelFont.className} fixed right-0 top-0 h-screen w-64 z-40 md:hidden
                bg-gradient-to-br from-black via-black/95 to-black/80
                border-l border-green-400/20
                backdrop-blur-xl
                pt-20 px-6
              `}
            >
              <nav className="space-y-6">
                {navItems.map((item, idx) => {
                  const isActive = active === item.href.replace('#', '');
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`block text-sm tracking-widest transition-colors
                        ${isActive ? 'text-green-400 font-bold' : 'text-gray-300 hover:text-green-400'}
                      `}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
