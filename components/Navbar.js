'use client';
import { Link } from 'react-scroll';
import { useState } from 'react';
import localFont from 'next/font/local';

// Pixel Font
const pixelFont = localFont({
  src: '../fonts/PressStart2P-Regular.ttf',
  variable: '--font-pixel',
});

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${pixelFont.className} bg-black text-white px-6 py-4 shadow-md fixed top-0 w-full z-50`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="text-cyan-400 text-sm sm:text-lg font-bold hover:text-cyan-300 cursor-pointer"
        >
          Wasiq.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-xs sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={800}
              spy={true}
              offset={-70} // adjust for navbar height
              activeClass="text-green-400"
              className="relative group cursor-pointer hover:text-pink-400 transition-colors"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-400 text-lg"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden text-sm">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer hover:text-pink-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
