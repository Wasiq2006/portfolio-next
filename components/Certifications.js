'use client';

import { motion } from 'framer-motion';
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

const certifications = [
  {
    title: 'CCEP Certified Cybersecurity Educator Professional',
    issuer: 'Red Team Leaders',
    date: '2025',
    link: 'https://courses.redteamleaders.com/exam-completion/a97257a89e86d8b6',
    type: 'certification',
    icon: '',
  },
  {
    title: 'Linux Essentials',
    issuer: 'Cisco',
    date: '2025',
    link: 'https://www.credly.com/badges/980882eb-1372-4276-a47e-cb48a1481d17',
    type: 'certification',
    icon: '',
  },
];

const courses = [
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    status: 'In Progress',
    link: '',
    type: 'course',
    icon: '',
  },
  {
    title: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco',
    status: 'In Progress',
    link: '',
    type: 'course',
    icon: '',
  },
  {
    title: 'Network Security',
    issuer: 'Cisco',
    status: 'In Progress',
    link: '',
    type: 'course',
    icon: '',
  },
];

export default function Certifications() {
  return (
    <section className={`${oxanium.className} py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden`}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 via-transparent to-cyan-400/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-green-400 mb-3 sm:mb-4 uppercase tracking-tight">
            Certifications & Courses
          </h2>
          <p className="text-gray-400 text-xs sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Professional credentials and ongoing learning in cybersecurity and networking
          </p>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-2xl font-bold text-cyan-400 mb-8 uppercase tracking-wide"
          >
            Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl
                  bg-gradient-to-br from-black/80 via-black/60 to-black/80
                  border border-green-400/50 hover:border-green-400/80
                  shadow-lg hover:shadow-[0_0_30px_rgba(0,255,100,0.2)]
                  transition-all duration-300 p-8 cursor-pointer"
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{cert.icon}</span>
                    <motion.div
                      className="px-3 py-1 rounded-full bg-green-400/20 border border-green-400/40"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs font-bold text-green-300 uppercase">Verified</span>
                    </motion.div>
                  </div>

                  <h4 className="text-lg font-bold text-green-400 mb-2 leading-tight">
                    {cert.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">{cert.date}</span>
                    <motion.span
                      className="text-green-300 group-hover:text-green-200 transition"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      → View
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-2xl font-bold text-purple-400 mb-8 uppercase tracking-wide"
          >
            In Progress Courses
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl
                  bg-gradient-to-br from-black/80 via-black/60 to-black/80
                  border border-purple-400/50 hover:border-purple-400/80
                  shadow-lg hover:shadow-[0_0_30px_rgba(200,100,255,0.2)]
                  transition-all duration-300 p-8 h-full flex flex-col"
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-pink-400/5 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{course.icon}</span>
                    <motion.div
                      className="px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs font-bold text-yellow-300 uppercase">
                        {course.status}
                      </span>
                    </motion.div>
                  </div>

                  <h4 className="text-lg font-bold text-purple-400 mb-2 leading-tight flex-1">
                    {course.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">{course.issuer}</p>

                  {course.link && (
                    <motion.a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-4 py-2 rounded-lg bg-purple-400/20 border border-purple-400/40
                        text-purple-300 hover:text-purple-200 text-sm font-semibold
                        transition-all text-center hover:bg-purple-400/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Certificate
                    </motion.a>
                  )}

                  {!course.link && (
                    <div className="mt-4 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/40
                      text-gray-400 text-sm font-semibold text-center">
                      Link coming soon
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
