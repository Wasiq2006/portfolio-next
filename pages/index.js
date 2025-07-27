import Image from "next/image";
import Navbar from "../components/Navbar";
import MatrixBackground from "../components/Canvas/MatrixBackground";
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* Animated background */}
      <MatrixBackground />

      {/* Navbar and main content */}
      <Navbar />
      <div
        className={`${geistSans.className} ${geistMono.className} relative z-10 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black text-white`}
      >
        <motion.main
          className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-green-400">Welcome</h1>
          <p>This is my personal portfolio built with Termux, GitHub, and Vercel.</p>

          <ol className="font-mono list-inside list-decimal text-sm text-gray-300">
            <li>
              Get started by editing{" "}
              <code className="bg-gray-800 px-2 py-1 rounded">pages/index.js</code>
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition"
            >
              Deploy Now
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition"
            >
              Read Docs
            </a>
          </div>
        </motion.main>

        <footer className="row-start-3 flex gap-6 flex-wrap justify-center text-sm text-gray-400">
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Examples
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
