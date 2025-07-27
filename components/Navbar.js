import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white font-mono px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-cyan-400 text-xl font-bold hover:text-cyan-300 transition duration-300">
          Wasiq.dev
        </Link>
        <div className="space-x-4 text-sm sm:text-base">
          <Link href="/about" className="hover:text-pink-400 transition duration-300">About</Link>
          <Link href="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
          <Link href="/contact" className="hover:text-green-400 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
