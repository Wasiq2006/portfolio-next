'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Oxanium } from 'next/font/google';

const oxanium = Oxanium({ subsets: ['latin'], weight: ['200', '400', '700', '800'] });

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectCard({ project, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={oxanium.className}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        onClick={() => setIsOpen(true)}
        className="h-full rounded-2xl cursor-pointer transition-all group relative overflow-hidden
          bg-black/50 border border-white/10 hover:border-green-400/60
          shadow-lg hover:shadow-[0_0_30px_rgba(0,255,150,0.25)]"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-400/15 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0 }}
        />

        <div className="relative z-10 p-7 h-full flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-green-400 font-extrabold text-lg sm:text-xl leading-tight mb-3 tracking-tight">
              {project.title}
            </h3>
            <motion.div
              className="h-0.5 w-12 bg-gradient-to-r from-green-400 to-cyan-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              style={{ originX: 0 }}
            />
          </div>

          {/* Description */}
          <p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-medium">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1.5 rounded-full bg-green-400/15 text-green-300 border border-green-400/40
                  hover:bg-green-400/25 hover:border-green-400/60 transition font-semibold uppercase tracking-wider"
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-400 border border-white/20 font-semibold">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-3 rounded-lg
              bg-gradient-to-r from-green-400/30 to-cyan-400/30
              border border-green-400/60 hover:border-green-400/80
              text-green-200 hover:text-green-100
              font-bold text-sm uppercase tracking-wide
              transition-all hover:bg-gradient-to-r hover:from-green-400/40 hover:to-cyan-400/40
              flex items-center justify-center gap-2
              group/btn"
          >
            <span>View Details</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Modal - Rendered via Portal to escape parent constraints */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
                />

                {/* Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="fixed inset-4 md:inset-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
                    w-[95%] md:max-w-2xl z-[9999]
                    bg-black/95 backdrop-blur-xl
                    border border-green-400/50 rounded-3xl
                    shadow-2xl shadow-green-400/15
                    overflow-hidden flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header with accent */}
                  <div className="relative">
                    <motion.div
                      className="h-1 w-full bg-gradient-to-r from-green-400 via-cyan-400 to-green-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{ originX: 0 }}
                    />

                    <div className="p-8 pb-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                          {project.title}
                        </h2>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsOpen(false)}
                          className="flex-shrink-0 text-gray-400 hover:text-green-400 transition text-2xl"
                        >
                          ✕
                        </motion.button>
                      </div>
                      <motion.div
                        className="h-1 w-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ originX: 0 }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="overflow-y-auto flex-grow px-8 space-y-6 pb-8">
                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <p className="text-gray-100 leading-relaxed text-base sm:text-lg font-normal">
                        {project.fullDescription}
                      </p>
                    </motion.div>

                    {/* Features */}
                    {project.features && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2 uppercase tracking-wide">
                          <span className="text-green-400">▪</span> Features
                        </h3>
                        <ul className="space-y-3 pl-6">
                          {project.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.25 + idx * 0.05 }}
                            className="text-gray-100 text-sm sm:text-base flex items-start gap-3 relative font-medium"
                            >
                              <span className="text-green-400 font-bold text-lg leading-none mt-0.5">
                                ›
                              </span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.35 + idx * 0.05 }}
                            whileHover={{ scale: 1.08 }}
                            className="text-xs px-4 py-2 rounded-full bg-green-400/25 text-green-200 border border-green-400/60
                              hover:bg-green-400/35 hover:border-green-400/80 transition cursor-default font-semibold"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Links */}
                    {project.links && Object.keys(project.links).length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="pt-4 border-t border-white/10"
                      >
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
                          Links
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          {project.links.github && (
                            <motion.a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 px-4 py-3 rounded-lg
                                bg-green-400/25 hover:bg-green-400/35
                                border border-green-400/60 hover:border-green-400/80
                                text-green-200 hover:text-green-100
                                font-semibold text-sm
                                transition-all text-center"
                            >
                              → GitHub
                            </motion.a>
                          )}
                          {project.links.live && (
                            <motion.a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 px-4 py-3 rounded-lg
                                bg-cyan-400/25 hover:bg-cyan-400/35
                                border border-cyan-400/60 hover:border-cyan-400/80
                                text-cyan-200 hover:text-cyan-100
                                font-semibold text-sm
                                transition-all text-center"
                            >
                              → Live Demo
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          , document.body
        )}
    </div>
  );
}
