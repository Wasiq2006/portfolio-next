'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Error sending message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="space-y-5 max-w-2xl mx-auto"
    >
      {/* Name Input */}
      <motion.div
        variants={fadeUp}
        className="relative"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg
            bg-black/40 border border-white/20
            text-white placeholder-gray-500
            focus:outline-none focus:border-green-400/50 focus:bg-black/60
            transition-all
          "
        />
      </motion.div>

      {/* Email Input */}
      <motion.div
        variants={fadeUp}
        className="relative"
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg
            bg-black/40 border border-white/20
            text-white placeholder-gray-500
            focus:outline-none focus:border-green-400/50 focus:bg-black/60
            transition-all
          "
        />
      </motion.div>

      {/* Message Input */}
      <motion.div
        variants={fadeUp}
        className="relative"
      >
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows="5"
          className="w-full px-4 py-3 rounded-lg
            bg-black/40 border border-white/20
            text-white placeholder-gray-500
            focus:outline-none focus:border-green-400/50 focus:bg-black/60
            transition-all resize-none
          "
        />
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="px-4 py-3 bg-red-500/15 border border-red-400/40 rounded-lg text-red-300 text-sm font-medium flex items-center gap-3"
        >
          <span className="text-lg">⚠️</span>
          <span>{error}</span>
        </motion.div>
      )}

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="px-4 py-3 bg-green-500/15 border border-green-400/40 rounded-lg text-green-300 text-sm font-medium flex items-center gap-3"
        >
          <span className="text-lg">✓</span>
          <span>Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        variants={fadeUp}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 rounded-lg
          bg-gradient-to-r from-green-400 to-green-500 text-black font-bold uppercase tracking-wide
          hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
          relative overflow-hidden group"
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </motion.span>
        {loading && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            ⟳
          </motion.span>
        )}
        <motion.div
          className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    </motion.form>
  );
}
