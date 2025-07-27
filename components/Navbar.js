'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';

// Load pixel font
const pixelFont = localFont({
  src: '../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${pixelFont.className} bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-cyan-400 text-sm sm:text-lg font-bold hover:text-cyan-300 transition"
        >
          Wasiq.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-xs sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative group"
            >
              <span
                className={`${
                  pathname === item.path ? 'text-green-400' : 'text-white'
                } hover:text-pink-400 transition-colors`}
              >
                {item.name}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                  pathname === item.path ? 'scale-x-100' : ''
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-3 text-center"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2 text-sm ${
                  pathname === item.path ? 'text-green-400' : 'text-white'
                } hover:text-pink-400 transition-colors`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
